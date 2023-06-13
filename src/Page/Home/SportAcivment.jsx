
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "../page/../Home/../Home/acivement.css";
import { FreeMode, Pagination } from "swiper";
import stu1 from '../../assets/studentPic/stu1.jpeg'
import stu2 from '../../assets/studentPic/stu2.webp'
import stu3 from '../../assets/studentPic/stu3.jpeg'
import stu4 from '../../assets/studentPic/stu4.jpeg'
import stu5 from '../../assets/studentPic/stu5.webp'
import stu6 from '../../assets/studentPic/stu6.webp'

const SportAcivment = () => {
  return (
    <>
      <h1 className='text-center text-sky-700 mt-10 text-xl lg:text-4xl font-medium'>The Sports School Student Achievements</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-5 w-full"
      >
        <SwiperSlide>
          <img src={stu1} className='md:h-96  h-52  w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Jack</h3>
          <p className='text-center  text-lg text-black lg:-mt-2'> Medalist at saf Games Dais cup 2022 </p>


        </SwiperSlide>
        <SwiperSlide>
          <img src={stu2} className='md:h-96  h-52  w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Pretty</h3>
          <p className='text-center  text-lg text-black lg:-mt-2'> Medalist at saf Games Girls Dais cup 2022 </p>

        </SwiperSlide>
        <SwiperSlide>

          <img src={stu3} className='md:h-96  h-52  w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Janny</h3>
          <p className='text-center text-lg text-black'> Medalist at saf Games  Girls cup 2022 </p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={stu4} className='md:h-96  h-52  w-full' alt="" />

          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Randy Orten</h3>
          <p className='text-center  text-lg text-black lg:-mt-2'> Medalist at saf Games  Boys  cup 2022 </p>

        </SwiperSlide>
        <SwiperSlide>

          <img src={stu5} className='md:h-96  h-52  w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>John cena</h3>
          <p className='text-center  text-lg text-black lg:-mt-2'> Medalist at saf Games Dais  cup 2022 </p>
        </SwiperSlide>
        <SwiperSlide>

          <img src={stu6} className='md:h-96  h-52  w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Shuvo</h3>
          <p className='text-center  text-lg text-black lg:-mt-2'> Medalist at saf Games  Sport  cup 2022 </p>

        </SwiperSlide>
    
      </Swiper>









    </>
  );
};

export default SportAcivment;