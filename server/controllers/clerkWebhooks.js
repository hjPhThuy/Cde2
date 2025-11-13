// api/clerk.js
import User from '../models/User.js';
import { Webhook } from 'svix';

// Tắt body parser để lấy raw body
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Lấy raw body
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const payload = Buffer.concat(chunks).toString();

    const headers = {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature'],
    };

    // Xác minh webhook
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payload, headers);

    const { type, data } = evt;

    // Chuẩn bị dữ liệu user
    const userData = {
      _id: data.id,
      email: data.email_addresses[0]?.email_address,
      username: `${data.first_name || ''}${data.last_name || ''}`.trim() || data.email_addresses[0]?.email_address.split('@')[0],
      image: data.image_url || '',
    };

    // Xử lý sự kiện
    switch (type) {
      case 'user.created':
        await User.create(userData);
        console.log('User created:', userData.email);
        break;

      case 'user.updated':
        await User.findByIdAndUpdate(data.id, userData, { upsert: true });
        console.log('User updated:', userData.email);
        break;

      case 'user.deleted':
        await User.findByIdAndDelete(data.id);
        console.log('User deleted:', data.id);
        break;

      default:
        console.log('Ignored event:', type);
    }

    return res.status(200).json({ success: true, message: 'Webhook received' });
  } catch (error) {
    console.error('Webhook error:', error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
}