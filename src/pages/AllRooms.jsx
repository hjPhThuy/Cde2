import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import { assets, roomsDummyData, facilityIcons } from "../assets/assets";

const CheckBox = ({label,selected = false, onChange = ()=>{ }})=>{
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="checkbox" checked={selected} 
            onChange={(e)=>onChange(e.target.checked, label)}/>
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const RadioButton = ({label,selected = false, onChange = ()=>{}})=>{
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="radio" name="sortOption" checked={selected} 
            onChange={(e)=> onChange(label)}/>
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters]=useState(false)

  const roomTypes = [
    "Phòng đơn",
    "Phòng đôi",
    "Phòng Vip",
    "Căn hộ cho gia đình",
  ];
  const priceRanges =[
    '100VND - 500VND',
    '500VND - 1.000VND',
    '1.000VND - 2.000VND',
    '2.000VND - 3.000VND',
  ];
  const sortOption =[
    "Giá từ thấp đến cao",
    "Giá từ cao xuống thấp",
    "Lựa chọn tốt nhất",
    "Mới nhất",
  ]

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-24">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Phòng Khách Sạn</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
          Đừng bỏ lỡ cơ hội nâng tầm trải nghiệm của bạn và tạo nên những kỷ niệm khó quên cùng các
        gói ưu đãi hấp dẫn trong thời gian giới hạn của chúng tôi.
           </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title="View Room details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />

            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>

              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ lượt đánh giá</p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room Amennities */}
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {room.amenities.map((item,index)=>(
                        <div>
                            <img src={facilityIcons[item]} alt={item}
                            className='w-5 h-5'/>
                            <p className='text-xs'>{item}</p>
                        </div>
                    ))}
              </div>
              {/*Room Price per Night */}
              <p className='text-xl front-medium text-gray-700'>{room.pricePerNight}.000VND/Đêm</p>
            </div>
          </div>
        ))}
      </div>
      {/* Filters */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600
      max-lg:mb-8 lg:mt-16'>
      <div className={`flex items-center justify-between px-5 py-2.5
       lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
        <p className='text-base font-medium text-gray-800'>Lọc</p>
        <div className='text-xs cursor-pointer'>
            <span onClick={()=> setOpenFilters(!openFilters)}
            className='lg:hidden'>
            {openFilters ? 'HIDE': 'SHOW'}</span>
            <span className='hidden lg:block'>Xóa</span>
        </div>
      </div>

      <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto"}
      overflow-hidden transition-all duration-700`}>
        <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Hạng phòng</p>
            {roomTypes.map((room,index)=>(
            <CheckBox key={index} label={room}/>
            ))}
        </div>
        <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Hạng giá</p>
            {priceRanges.map((range,index)=>(
                <CheckBox key={index} label={`${range}`}/>
            ))}    
        </div>
        <div className='px-5 pt-5 pb-7'>
            <p className='font-medium text-gray-800 pb-2'>Sắp xếp</p>
            {sortOption.map((option,index)=>(
                <RadioButton key={index} label={option}/>
            ))}    
        </div>
      </div>
      </div>
    </div>
  );
};

export default AllRooms;
