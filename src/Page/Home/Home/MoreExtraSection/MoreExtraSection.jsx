import React from 'react';
import pic from '../../../../assets/section pic/pic 1.jpeg';
import pic2 from '../../../../assets/section pic/pic3.jpeg';
const MoreExtraSection = () => {
    return (
        <>
           <div className='dark:bg-black dark:text-white px-2 py-2'>


           <h1 className='text-2xl lg:text-4xl text-center font-bold text-slate-900 mt-9'>OUR
                PURPOSE
            </h1>
           
            <div className='grid lg:grid-cols-2 container gap-7 mx-auto mt-4 lg:mt-10'>
                <div className=''>
                    <h1 className='text-lg  text-center text-lime-600  mt-2'>PROGRAMS AND COURSES</h1>
                    <p className='text-sm text-slate-700 font-normal text-center mt-3'>Sport Academy  is a skills-based  program and course that will reshape the way kids learn and play</p>
                    <div className='text-center mt-4'><button className='btn btn-accent'>Program</button></div>
                    <img className='w-full h-72 mt-2' src={pic} alt="" />
                </div>
                <div className='mx-auto grid grid-flow-row'>
                    <img className='w-full h-72' src={pic2} alt="" />
                    <h1 className='text-lg  text-center mt-2 text-lime-600 '>CONTACT US</h1>
                    <p className='text-sm text-slate-700 font-normal text-center mt-3'>Give your child the opportunity to get active while developing their sport and social skills in a fun and supportive environment. Interested in being your own boss and owning your own sport Star business? We want to hear from you. Enquire here</p>
                    <div className='text-center mt-3'><button className='btn btn-accent'>contact</button></div>

                </div>
            </div>


           </div>
        </>
    );
};

export default MoreExtraSection;