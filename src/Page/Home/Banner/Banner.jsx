
// https://thesportsschool.com/
// https://www.aspire.qa/Home

// nicher ta valo kore dekhte hoe
// https://sportstaracademy.com/cricket   


import { Slide, } from "react-awesome-reveal";
import React from 'react';
import banner1 from '../../../assets/bannerPic/cricket.jpeg'
import banner2 from '../../../assets/bannerPic/football.jpeg'
import banner3 from '../../../assets/bannerPic/basket.webp'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <>
            <div className='dark:bg-black dark:text-white px-2 py-2'>
                <div className="text-center lg:w-11/12 mx-auto mt-5 mb-8">
                {/* <div className="text-center w-full mx-auto mt-5 mb-8 "> */}


                    <Carousel className='mt-6 '>
                        <div>
                            <img src={banner1} />
                            <div className="absolute flex items-center h-full  gap-5   left-0  top-0   rounded-2xl  ">


                                <Slide>

                                    <div className='space-y-2   w-full'>
                                        <h2 className='text-xl lg:text-5xl font-medium text-blue-500'>Sporting Schools Cricket Program  </h2>
                                        <h2 className='text-base lg:text-4xl font-medium text-violet-500'> Expand Your Horizons</h2>
                                        <p className='lg:text-2xl font-normal text-white w-3/4 mx-auto'>All Cricket Sporting Schools Programs will continue to be
                                            managed internally by Cricket Australia which provides us with
                                            great flexibility to cater a program suited to your school’s needs.</p>

                                    </div>
                                </Slide>


                            </div>
                        </div>
                        <div>
                            <img src={banner2} />
                            <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl ">
                                <Slide>

                                    <div className='space-y-2 w-full'>
                                        <h2 className='text-xl lg:text-5xl font-medium text-blue-500'>Sporting Schools FootBall Program  </h2>
                                        <h2 className='text-base lg:text-4xl font-medium text-violet-500'>Build Team Spirit</h2>
                                        <p className='lg:text-2xl font-normal text-white w-3/4 mx-auto'>The Sporting Schools Basketball Program is a national initiative in Australia that aims to introduce and develop basketball skills among school students. .</p>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                        <div>
                            <img src={banner3} />
                            <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl  ">
                                <Slide>
                                    <div className='space-y-2   w-full'>
                                        <h2 className='text-xl lg:text-5xl font-medium text-blue-500'> Sporting Schools Basket Program  </h2>
                                        <h2 className='text-base lg:text-4xl font-medium text-violet-500'>Expand Your Horizons </h2>
                                        <p className='lg:text-2xl font-normal text-white w-3/4 mx-auto'>All Cricket Sporting Schools Programs will continue to be
                                            managed internally by Cricket Australia which provides us with
                                            great flexibility to cater a program suited to your school’s needs</p>

                                    </div>
                                </Slide>
                            </div>
                        </div>

                    </Carousel>

                </div>



            </div>


        </>



    );
};

export default Banner;