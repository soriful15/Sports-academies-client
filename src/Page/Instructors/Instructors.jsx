import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
const Instructors = () => {

    const { data: instructorClasses = [] } = useQuery(['instructorClasses'], async () => {
        const res = await fetch(`https://sports-academies-server-fawn.vercel.app/instructorClasses`)
        return res.json()


    })
    return (
        <>

            <Helmet>
                <title>Sport Academic | Instructor  Page</title>
            </Helmet>
          <div className='dark:bg-black dark:text-white px-2 py-2'>


          <h1 className='text-2xl text-center font-bold text-zinc-600 dark:text-white mt-9'>Sport Academic:All Instructor</h1>
            <div className="border-t-4 border-orange-200 mt-5 mb-5 md:w-3/4 mx-auto "></div>

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

export default Instructors;