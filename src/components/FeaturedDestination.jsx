import React from 'react';
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
    const navigate = useNavigate()
    return(
    <div className='flex flex-col items-center px-6  md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title Title='ĐIỂM ĐẾN & NƠI NGHỈ DƯỠNG NỔI BẬT' subTitle='Khám phá những lựa chọn lưu trú tinh tế và được yêu thích nhất. Chúng tôi chọn lọc những khách sạn mang đến trải nghiệm sang trọng và đáng nhớ tại các thành phố du lịch hàng đầu.'/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room, index) => (<HotelCard key={room._id} room={room} index={index}/>))}
        </div>
        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer '>
            Xem thêm
        </button>
    </div>
    )
}
export default FeaturedDestination