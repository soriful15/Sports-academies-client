
// https://thesportsschool.com/
// https://www.aspire.qa/Home

// nicher ta valo kore dekhte hoe
// https://sportstaracademy.com/cricket   



import React from 'react';
import banner1 from '../../../assets/bannerPic/cricket.jpeg'
import banner2 from '../../../assets/bannerPic/football.jpeg'
import banner3 from '../../../assets/bannerPic/basket.webp'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <>

            {/* <NavLink
                    to={
                      isAdmin
                        ? "/dashboard/manageclasses"
                        : isInstructor
                        ? "/dashboard/myclasses"
                        : "/dashboard/myselectedclass"
                    }
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-600"
                        : "hover:text-purple-600 ease-in duration-200"
                    } */}
            <Carousel className='mt-6 '>
                <div>
                    <img src={banner1} />
                    <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl  ">
                        <div className='space-y-2   w-full'>
                            <h2 className='text-xl lg:text-5xl font-medium text-blue-500'>Sporting Schools Cricket Program  </h2>
                            <h2 className='text-base lg:text-4xl font-medium text-violet-500'> Expand Your Horizons</h2>
                            <p className='lg:text-2xl font-normal text-white w-3/4 mx-auto'>All Cricket Sporting Schools Programs will continue to be
                                managed internally by Cricket Australia which provides us with
                                great flexibility to cater a program suited to your school’s needs.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner2}  />
                    <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl ">
                        <div className='space-y-2 w-full'>
                            <h2 className='text-xl lg:text-5xl font-medium text-blue-500'>Sporting Schools FootBall Program  </h2>
                            <h2 className='text-base lg:text-4xl font-medium text-violet-500'>Build Team Spirit</h2>
                            <p className='lg:text-2xl font-normal text-white w-3/4 mx-auto'>The Sporting Schools Basketball Program is a national initiative in Australia that aims to introduce and develop basketball skills among school students. It provides an inclusive and fun environment for children to learn and engage in basketball activities.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner3} />
                    <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl  ">
                        <div className='space-y-2   w-full'>
                            <h2 className='text-xl lg:text-5xl font-medium text-blue-500'> Sporting Schools Basket Program  </h2>
                            <h2 className='text-base lg:text-4xl font-medium text-violet-500'>Expand Your Horizons </h2>
                            <p className='lg:text-2xl font-normal text-white w-3/4 mx-auto'>All Cricket Sporting Schools Programs will continue to be
                                managed internally by Cricket Australia which provides us with
                                great flexibility to cater a program suited to your school’s needs</p>

                        </div>
                    </div>
                </div>
            
            </Carousel>


          
        </>



    );
};

export default Banner;