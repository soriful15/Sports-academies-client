import { useQuery } from '@tanstack/react-query';
import React from 'react';

const PopularInstructor = () => {

    const { data: instructorClasses = [] } = useQuery(['popularInstructorClasses'], async () => {
        const res = await fetch(`https://sports-academies-server-fawn.vercel.app/popularInstructorClasses`)
        return res.json()


    })


    return (
        <>
            <div className='dark:bg-black dark:text-white px-2 py-2'>

            <h1 className='text-2xl lg:text-4xl text-center font-bold text-slate-900 mt-9'>Popular Instructors</h1>
            <p className='text-center container mx-auto text-lg mt-2 text-gray-500'>A popular sport instructor is a skilled and experienced professional who specializes in teaching and coaching a specific sport <br /> to individuals or groups. They possess in-depth knowledge of the sport's rules, techniques, and strategies, and are passionate about sharing their expertise with other</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 container mx-auto mt-10 gap-10'>
                {
                    instructorClasses.map((user) => <div key={user._id} className='relative  rounded shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-200 w-96'>
                        <img src={user.image} alt="" className='object-cover w-full md:h-64 h-56 xl:h-80' />
                        <div className='text-gray-300 bg-black bg-opacity-75 opacity-0 px-6 py-4 hover:opacity-100 flex flex-col absolute inset-0 duration-200 transition-opacity '>
                            <p>Instructor</p>
                            <p> Name: {user.name}</p>
                            <p>Email: {user.email}...</p>
                        </div>
                    </div>)

                }
            </div>

            </div>
        </>
    );
};

export default PopularInstructor;