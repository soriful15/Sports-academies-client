
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { FreeMode, Pagination } from "swiper";



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


      {/* <div className="dark:bg-black dark:text-white px-2 py-2">


        <h1 className='text-2xl lg:text-4xl text-center font-bold text-slate-900 mt-9'>The Sports School Student Achievements</h1>
        <p className='text-center container mx-auto text-lg mt-2 text-gray-500'>Student sport achievements can take various forms, such as winning a championship, setting a new record, earning a scholarship, or representing their school or country in a competitive event. </p>


        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper mt-5 lg:container lg:mx-auto   w-full"
        >
          <SwiperSlide>
            <img src={stu1} className='md:h-96  h-52  w-full' alt="" />
            <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Jack</h3>
            <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games Dais cup 2022 </p>


          </SwiperSlide>
          <SwiperSlide>
            <img src={stu2} className='md:h-96  h-52  w-full' alt="" />
            <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Pretty</h3>
            <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games Girls Dais cup 2022 </p>

          </SwiperSlide>
          <SwiperSlide>

            <img src={stu3} className='md:h-96  h-52  w-full' alt="" />
            <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Janny</h3>
            <p className='text-center text-lg text-black dark:text-white'> Medalist at saf Games  Girls cup 2022 </p>

          </SwiperSlide>
          <SwiperSlide>
            <img src={stu4} className='md:h-96  h-52  w-full' alt="" />

            <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Randy Orten</h3>
            <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games  Boys  cup 2022 </p>

          </SwiperSlide>
          <SwiperSlide>

            <img src={stu5} className='md:h-96  h-52  w-full' alt="" />
            <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>John cena</h3>
            <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games Dais  cup 2022 </p>
          </SwiperSlide>
          <SwiperSlide>

            <img src={stu6} className='md:h-96  h-52  w-full' alt="" />
            <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700 lg:-mt-16 '>Shuvo</h3>
            <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games  Sport  cup 2022 </p>

          </SwiperSlide>

        </Swiper>





      </div>


 */}





      <div className="dark:bg-black dark:text-white px-2 py-2">
      <h1 className='text-2xl lg:text-4xl text-center font-bold text-slate-900 mt-9'>The Sports School Student Achievements</h1>
      <p className='text-center container mx-auto text-lg mt-2 text-gray-500'>Student sport achievements can take various forms, such as winning a championship, setting a new record, earning a scholarship, or representing their school or country in a competitive event. </p>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  mt-5 lg:container lg:mx-auto   w-full"
      >
        <SwiperSlide>
          <img src={stu1} className='md:h-96  h-52 w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-fuchsia-800 lg:-mt-16'>Jack</h3>
          <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games Dais cup 2022 </p>

        </SwiperSlide>
        <SwiperSlide>

          <img src={stu2} className='md:h-96  h-52 w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-fuchsia-800 lg:-mt-16 '>Pretty</h3>
          <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games Dais cup 2022 </p>
        </SwiperSlide>
        <SwiperSlide>


          <img src={stu3} className='md:h-96  h-52 w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-fuchsia-800 lg:-mt-16 '>Janny</h3>
          <p className='text-center text-lg text-black dark:text-white'> Medalist at saf Games  Girls cup 2022 </p>
        </SwiperSlide>
        <SwiperSlide>

          <img src={stu4} className='md:h-96  h-52 w-full' alt="" />

          <h3 className='text-center lg:text-2xl md:text-xl  text-fuchsia-800 lg:-mt-16 '>Randy</h3>
          <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games cup 2022 </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={stu5} className='md:h-96  h-52 w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-fuchsia-800 lg:-mt-16 '>John cena</h3>
          <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games Dais  cup 2022 </p>

        </SwiperSlide>
        <SwiperSlide>

          <img src={stu6} className='md:h-96  h-52 w-full' alt="" />
          <h3 className='text-center lg:text-2xl md:text-xl  text-fuchsia-800 lg:-mt-16 '>Shuvo</h3>
          <p className='text-center  text-lg text-black lg:-mt-2 dark:text-white'> Medalist at saf Games cup 2022 </p>

        </SwiperSlide>
      </Swiper>



      </div>






    </>
  );
};

export default SportAcivment;