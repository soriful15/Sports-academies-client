
// https://thesportsschool.com/
// https://www.aspire.qa/Home

// nicher ta valo kore dekhte hoe
// https://sportstaracademy.com/cricket   



import React from 'react';
import banner1 from '../../../assets/bannerPic/cricket.jpeg'
import banner2 from '../../../assets/bannerPic/football.jpeg'
import banner3 from '../../../assets/bannerPic/basket.webp'

const Banner = () => {
    return (
        <>



            {/*  <div className="carousel w-full h-[800px]"> */}
            <div className="carousel w-full h-[600px] mt-14 lg:container mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-2xl " />
                    <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl  ">
                        <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
                            <h2 className='text-xl lg:text-6xl font-bold text-teal-500'>Sporting Schools Cricket Program  </h2>
                            <h2 className='text-base lg:text-4xl font-medium text-violet-800'> Unlock Your Potential</h2>
                            <p className='lg:text-2xl font-normal text-zinc-950'>All Cricket Sporting Schools Programs will continue to be
                                managed internally by Cricket Australia which provides us with
                                great flexibility to cater a program suited to your school’s needs.</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-outline">❮</a>
                        <a href="#slide2" className="btn btn-outline ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full rounded-2xl" />
                    <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl">
                        <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
                            <h2 className='text-xl lg:text-6xl font-bold text-teal-500'>Sporting Schools FootBall Program  </h2>
                            <h2 className='text-base lg:text-4xl font-medium text-violet-800'>Build Team Spirit</h2>
                            <p className='lg:text-2xl font-normal text-zinc-950'>The Sporting Schools Football Program is an initiative aimed at introducing and developing football (soccer) skills among school students in Australia. It is designed to provide a fun and inclusive environment for children to learn and engage in football activities.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline">❮</a>
                        <a href="#slide3" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full rounded-2xl" />
                    <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl">
                        <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
                            <h2 className='text-xl lg:text-6xl font-bold text-teal-500'>Sporting Schools Basket Program  </h2>
                            <h2 className='text-base lg:text-4xl font-medium text-violet-800'>Expand Your Horizons</h2>
                            <p className='lg:text-2xl font-normal text-zinc-950'>The Sporting Schools Basketball Program is a national initiative in Australia that aims to introduce and develop basketball skills among school students. It provides an inclusive and fun environment for children to learn and engage in basketball activities.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline">❮</a>
                        <a href="#slide1" className="btn btn-outline">❯</a>
                    </div>
                </div>

            </div>


        </>



    );
};

export default Banner;