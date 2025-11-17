import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData, assets, facilityIcons, roomCommonData  } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const foundRoom = roomsDummyData.find(room => room._id === id)
    if (foundRoom) {
      setRoom(foundRoom)
      setMainImage(foundRoom.images[0])
    }
  }, [id])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/*Room Detail */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>
         Giảm giá 20% 
        </p>
      </div>

      {/*Room Rating*/}
      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ lượt đánh giá</p>
      </div>

      {/*Room Address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt='location-icon' />
        <span>{room.hotel.address}</span>
      </div>

      {/*Room images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img
            src={mainImage}
            alt='Room Image'
            className='w-full rounded-xl shadow-lg object-cover'
          />
        </div>

        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img
              onClick={() => setMainImage(image)}
              key={index}
              src={image}
              alt='Room Image'
              className={`w-full rounded-xl shadow-md object-cover
               cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}
            />
          ))}
        </div>
      </div>

      {/* Room Highlight */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-playfair'>Trải nghiệm sự sang trọng, đẳng 
            cấp chưa từng có</h1>
            <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item, index)=>(
                    <div key={index} className='flex items-center gap-2 px-3 py-2
                    rounded-lg bg-gray-100'>
                        <img src={facilityIcons[item]} alt={item} className='w-5
                        h-5'/>
                        <p className='text-xs'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
        {/*Room Price */}
        <p className='text-2xl font-medium'>{room.pricePerNight}VND/Dem</p>
        </div>

        {/*CheckIn CheckOut Form */}
        <form className='flex flex-col md:flex-row items-start md:items-center
        justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl
        mx-auto mt-16 max-w-6xl'>

            <div className='flex flex-col flex-wrap md:flex-row items-start
            md:items-center gap-4 md:gap-10 text-gray-500'>
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                    <label htmlFor="checkInDate" className='font-medium'>Nhận phòng</label>
                    <input type='date' id='CheckInDate' placeholder='Check-in'
                    className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5
                    outline-none' required/>
                </div>
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                    <label htmlFor="checkOutDate" className='font-medium'>Trả phòng</label>
                    <input type='date' id='CheckOutDate' placeholder='Check-Out'
                    className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5
                    outline-none' required/>
                </div>
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                    <label htmlFor="guests" className='font-medium'>Khách hàng</label>
                    <input type='number' id='guests' placeholder='0'
                    className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5
                    outline-none' required/>
                </div>
                
            </div>

            <button type='submit' className='bg-primary hover:bg-primary-dull
            active:scale-95 transition-all text-white rounded-md max-md:w-full
            max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                Kiểm tra tính khả dụng
            </button>
        </form>

        {/* Common Specifications */}
        <div className='mt-25 space-y-4'>
            {roomCommonData.map((spec, index)=>(
                <div key={index} className='flex items-start gap-2'>
                    <img src={spec.icon} alt={`{spec.title}-icon`} className='w-6.5'/>
                    <div>
                        <p className='text-base'>{spec.title}</p>
                        <p className='text-gray-500'>{spec.description}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
            <p>Tùy theo tình trạng phòng trống, Quý khách sẽ được ưu tiên bố trí tại tầng trệt. 
            Nơi đây, Quý khách sẽ tận hưởng một căn hộ hai phòng ngủ ấm cúng, đắm mình trong bầu 
            không khí thành thị chân thật và đầy sức sống.
            Xin lưu ý, mức giá niêm yết là dành cho hai khách. Để nhận được báo giá chi tiết và 
            chính xác nhất cho đoàn của mình, xin vui lòng điền số lượng khách thực tế vào mục 
            tương ứng trong quá trình đặt phòng.</p>
        </div>

        {/*Hosted by */}
        <div className='flex flex-col items-start gap-4'>
            <div className='flex gap-4'>
                <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14
                md:h-18 md:w-18 rounded-full'/>
                <div>
                    <p className='text-lg md:text-xl'>Được tổ chức bởi {room.hotel.name}</p>
                    <div className='flex items-center mt-1'>
                        <StarRating/>
                        <p className='ml-2'>200+ lượt đánh giá</p>
                    </div>
                </div>
            </div>
             <button className='px-6 py-2.5 mt-4 rounded text-white
            bg-primary hover:bg-primary-dull transition-all cursor-pointer'>
                Liên hệ ngay
            </button>
        </div>
      
    </div>
  )
}

export default RoomDetails
