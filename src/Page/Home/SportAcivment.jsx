
import stu1 from '../../assets/studentPic/stu1.jpeg'
import stu2 from '../../assets/studentPic/stu2.webp'
import stu3 from '../../assets/studentPic/stu3.jpeg'
import stu4 from '../../assets/studentPic/stu4.jpeg'
import stu5 from '../../assets/studentPic/stu5.webp'
import stu6 from '../../assets/studentPic/stu6.webp'

const SportAcivment = () => {
  return (
    <>
     <div className="dark:bg-black dark:text-white px-2 py-2">


     <h1 className='text-2xl lg:text-4xl text-center font-bold text-slate-900 mt-9 dark:text-white'>The Sports School Student Achievements</h1>
      <p className='text-center container mx-auto text-lg mt-2 text-gray-500 dark:text-white' >Student sport achievements can take various forms, such as winning a championship, setting a new record, earning a scholarship, or representing their school or country in a competitive event. </p>


      <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-7 '>


        <div className="card w-full md:w-96 bg-base-100 shadow-xl dark:bg-black dark:text-white">
          <figure className="px-10 pt-10">
            <img src={stu1} alt="Shoes" className="rounded-xl w-full h-96" />
          </figure>
          <div className="card-body items-center text-center -mt-7">
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700   '>Rahi Hasan</h3>
            <p className='text-center  text-lg text-lime-700  '> Medalist at saf Games Dais cup 2022 </p>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-100 shadow-xl dark:bg-black dark:text-white">
          <figure className="px-10 pt-10">
            <img src={stu2} alt="Shoes" className="rounded-xl w-full h-96" />
          </figure>
          <div className="card-body items-center text-center -mt-7">
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700   '>Jui Akter</h3>
            <p className='text-center  text-lg text-lime-700  '> Medalist at saf Games  Dais cup 2022  </p>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-100 shadow-xl dark:bg-black dark:text-white">
          <figure className="px-10 pt-10">
            <img src={stu3} alt="Shoes" className="rounded-xl w-full h-96" />
          </figure>
          <div className="card-body items-center text-center -mt-7">
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700   '>Janny Akter</h3>
            <p className='text-center  text-lg text-lime-700  '>  Medalist at saf Games  Girls cup 2022 </p>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-100 shadow-xl dark:bg-black dark:text-white">
          <figure className="px-10 pt-10">
            <img src={stu4} alt="Shoes" className="rounded-xl w-full h-96" />
          </figure>
          <div className="card-body items-center text-center -mt-7">
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700   '>Siam Hasan</h3>
            <p className='text-center  text-lg text-lime-700  '> Medalist at saf Games  Boys  cup 2022 </p>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-100 shadow-xl dark:bg-black dark:text-white">
          <figure className="px-10 pt-10">
            <img src={stu5} alt="Shoes" className="rounded-xl w-full h-96" />
          </figure>
          <div className="card-body items-center text-center -mt-7">
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700   '>Jahid Hasan</h3>
            <p className='text-center  text-lg text-lime-700  '> Medalist at saf Games Dais  cup 2022  </p>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-100 shadow-xl dark:bg-black dark:text-white">
          <figure className="px-10 pt-10">
            <img src={stu6} alt="Shoes" className="rounded-xl w-full h-96" />
          </figure>
          <div className="card-body items-center text-center -mt-7">
          <h3 className='text-center lg:text-2xl md:text-xl  text-blue-700   '>Shuvo Hasan</h3>
            <p className='text-center  text-lg text-lime-700  '> Medalist at saf Games  Sport  cup 2022 </p>
          </div>
        </div>


      </div>







     </div>



    </>
  );
};

export default SportAcivment;