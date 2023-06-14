import React from 'react';
import pic2 from '../../../assets/section pic/354084731_279527834524835_8854460526768610839_n.png'
import pic from '../../../assets/section pic/354114136_187555080938307_7059564226300989423_n.png'
import { Slide } from "react-awesome-reveal";

const OurAcademy = () => {
    return (
        <div className='relative mx-20'>
            <img className='h-96 w-full' src={pic} alt="" />
            <div className='flex items-center justify-center mt-6 gap-6'>
                <div className='w-1/2'>
                    <Slide>
                        <h1 className='text-xl font-extrabold'>OUR ACADEMY</h1>
                        <h1>A sports academy is a training institution that aims to identify and nurture talented cricketers. It provides coaching, skill development, fitness training, and mental preparation to help players reach their full potential. The academy serves as a pathway for aspiring cricketers to pursue professional careers in the sport.</h1>
                    </Slide>
                </div>
                <img className='absolute right-5 w-96 h-96 bottom-0 ' src={pic2} alt="" />
            </div>
        </div>
    );
};

export default OurAcademy;