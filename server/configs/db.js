import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Sự kiện lắng nghe khi kết nối thành công
    mongoose.connection.on("connected", () =>
      console.log("✅ Kết nối database thành công")
    );

    // Kết nối MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

  } catch (error) {
    console.log("❌ Lỗi kết nối database:", error.message);
  }
};

export default connectDB;
