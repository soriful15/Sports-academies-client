import React from 'react';
import pic1 from '../../../../assets/extra sectionpic/pic1.webp'
import pic2 from '../../../../assets/extra sectionpic/pic2.webp'
import pic3 from '../../../../assets/extra sectionpic/pic3.webp'
const MoreExtraSectionTwo = () => {
    return (
        <>
            <div  className='dark:bg-black dark:text-white px-2 py-2'>


            <h1 className='text-2xl lg:text-2xl container mx-auto font-bold text-slate-900 mt-9 dark:text-white px-3'>Why we are the first choice of students and parents?</h1>
            <div className='container grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 mt-9 px-3'>



            <div className='text-center'>
                <div className=''>
                    <img src={pic1} className='w-20 h-20 rounded-full mx-auto' alt="" />
                </div>
                <p className=' text-lg mt-2 text-gray-500 dark:text-white'>Supportive Environment: Students appreciate schools that provide a supportive and inclusive environment. This includes factors like approachable faculty, extracurricular activities, and opportunities for personal and social development..</p>
                <div className="border-t-4 border-indigo-500 w-14 mx-auto mt-6 "></div>
                <div className='mt-3'>
                <p>Mis Santa akter</p>
                <p>5th Batch Student</p>
                </div>
             </div>


             <div className='text-center'>
                <div>
                    <img src={pic2} className='w-20 h-20 rounded-full  mx-auto' alt="" />
                </div>
                <p className=' text-lg mt-2 text-gray-500 dark:text-white'>Communication and Support: Students appreciate clear and timely communication from school administration regarding policies, updates, and any changes that may affect their academic journey impact future career prospects.</p>
                <div className="border-t-4 border-indigo-500 w-14 mx-auto mt-6"></div>
               <div className='mt-3'>
               <p>MD ARMAN PK</p>
                <p>6th Batch Student</p>
               </div>
             </div>


             <div className='text-center'>
                <div>
                    <img src={pic3} className='w-20 h-20 rounded-full mx-auto' alt="" />
                </div>
                <p className=' text-lg mt-2 text-gray-500 dark:text-white'>Facilities and Resources: The availability and quality of facilities and resources, such as libraries, laboratories, technology, and study spaces, play a role in student satisfaction and overall campus s when reviewing a school..</p>
                <div className="border-t-4 border-indigo-500 w-14 mx-auto mt-6"></div>
                <div className='mt-3'>
                <p>Mis Elma Rahman</p>
                <p>7th Batch Student</p>
                </div>
             </div>

            </div>



            </div>
        </>
    );
};

export default MoreExtraSectionTwo;