import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import stu1 from '../../assets/studentPic/stu1.jpeg'
import stu2 from '../../assets/studentPic/stu2.webp'
import stu3 from '../../assets/studentPic/stu3.jpeg'
import stu4 from '../../assets/studentPic/stu4.jpeg'
import stu5 from '../../assets/studentPic/stu5.webp'
import stu6 from '../../assets/studentPic/stu6.webp'

const SportAcivment = () => {
    return (
        <>
            <h1 className='text-center text-sky-700 mt-7 text-xl lg:text-4xl font-medium'>The Sports School Student Achievements</h1>


            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide><img src={stu1} className='h-[400px] w-full' alt="" />
        <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 -mt-16'>Jack</h3>
        <p className='text-center -mt-2 text-lg text-black'> Medalist at saf Games Dais cup 2022 </p>
        </SwiperSlide>
        <SwiperSlide><img src={stu2} className='h-96 w-full' alt="" />
        <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 -mt-16'>Pretty</h3>
        <p className='text-center -mt-2 text-lg text-black'> Medalist at saf Games Girls Dais cup 2022 </p>
        
        </SwiperSlide>
        <SwiperSlide><img src={stu3} className='h-96 w-full' alt="" />
        <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 -mt-16'>Janny</h3>
        <p className='text-center -mt-2 text-lg text-black'> Medalist at saf Games Asia Girls Association cup 2022 </p>
        
        </SwiperSlide>
        <SwiperSlide><img src={stu4} className='h-96 w-full' alt="" />
        
        <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 -mt-16'>Randy Orten</h3>
        <p className='text-center -mt-2 text-lg text-black'> Medalist at saf Games Asia Boys Association cup 2022 </p>
        </SwiperSlide>
        <SwiperSlide><img src={stu5} className='h-96 w-full' alt="" />
        <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 -mt-16'>John cena</h3>
        <p className='text-center -mt-2 text-lg text-black'> Medalist at saf Games Dais Association cup 2022 </p>
        
        </SwiperSlide>
        <SwiperSlide><img src={stu6} className='h-96 w-full' alt="" />
        <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 -mt-16'>Shuvo</h3>
        <p className='text-center -mt-2 text-lg text-black'> Medalist at saf Games Aisa Sport Association cup 2022 </p>
        </SwiperSlide>
      </Swiper>





        </>
    );
};

export default SportAcivment;