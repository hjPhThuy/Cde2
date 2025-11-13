import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
    return(
        <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9 invert opacity-90' />
                    <p className='text-sm'>
                       QuickStay không chỉ là đặt phòng. Chúng tôi là người đồng hành giúp bạn tìm thấy không gian nghỉ dưỡng thực sự xứng đáng với chuyến đi của mình.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <img src={assets.instagramIcon} alt="instagram-icon" className="w-6" />
                        {/* Facebook */}
                        <img src={assets.facebookIcon} alt="facebook-icon" className="w-6" />
                        {/* Twitter */}
                        <img src={assets.twitterIcon} alt="twitter-icon" className="w-6" />
                        {/* LinkedIn */}
                        <img src={assets.linkendinIcon} alt="linkendinIcon-icon" className="w-6" />
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>VỀ CHÚNG TÔI</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Về chúng tôi</a></li>
                        <li><a href="#">Tuyển dụng</a></li>
                        <li><a href="#">Truyền thông</a></li>
                        <li><a href="#">Liên hệ công ty</a></li>
                        <li><a href="#">Quan hệ cổ đông</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>HỖ TRỢ</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Trung tâm hỗ trợ</a></li>
                        <li><a href="#">Điều khoản và dịch vụ</a></li>
                        <li><a href="#">Chính sách ưu đãi</a></li>
                        <li><a href="#">Chương trình khách hàng thân thiết</a></li>
                        <li><a href="#">Câu hỏi thường gặp</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-gray-800'>CẬP NHẬT THÔNG TIN MỚI</p>
                    <p className='mt-3 text-sm'>
                       Đăng ký nhận bản tin để không bỏ lỡ cảm hứng du lịch và ưu đãi đặc biệt.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                           <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert' />
                            
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer