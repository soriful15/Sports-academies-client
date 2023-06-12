import React from 'react';
import { useQuery } from '@tanstack/react-query';
const Instructors = () => {

    const { data: instructorClasses = [] } = useQuery(['instructorClasses'], async () => {
        const res = await fetch(`http://localhost:4000/instructorClasses`)
        return res.json()


    })
    return (
        <>
            <h1 className='text-2xl text-center font-bold text-zinc-600 mt-9'>Sport Academic: Instructor</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 container mx-auto mt-10 gap-10'>
                {/* {
                    instructorClasses.map((user) => <div key={user._id} className='relative  rounded shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-200 w-96'>
                    <img src={user.image} alt="" className='object-cover w-full md:h-64 h-56 xl:h-80' />
                    <div className='text-gray-300 bg-black bg-opacity-75 opacity-0 px-6 py-4 hover:opacity-100 flex flex-col absolute inset-0 duration-200 transition-opacity '>
                        <p>instructor</p>
                        <p> Name: {user.name}</p>
                        <p>Email: {user.email}...</p>
                        </div>
                    </div>)
                    
                } */}


                {
                    instructorClasses.map((user) => <div key={user._id} className="card w-full bg-slate-100 shadow-2xl">
                        <figure><img src={user.image} alt="Shoes" className='w-56 rounded-full h-56 py-4' /></figure>
                        <div className="card-body">
                            <p className='text-center text-black'>Instructor</p>
                            <h2 className=" text-blue-900 text-center  font-bold">
                                Name: {user.name}
                            </h2>
                            <p className=' text-green-700 text-center'> Email: {user.email}</p>
                        </div>
                    </div>)
                }

            </div>

        </>


    );
};

export default Instructors;