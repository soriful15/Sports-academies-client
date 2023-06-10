import React from 'react';
import { useQuery } from '@tanstack/react-query';
const Instructors = () => {

    const { data: instructorClasses = [] } = useQuery(['instructorClasses'], async () => {
        const res = await fetch(`http://localhost:4000/instructorClasses`)
        return res.json()


    })
    return (
      <>
      <h1 className='text-5xl text-center font-bold text-zinc-600 mt-9'>Sport Academic: InsTructor</h1>
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 container mx-auto mt-10 gap-10'>
            {
                instructorClasses.map((user) => <div key={user._id} className="card w-full bg-cyan-100 shadow-xl">
                    <figure><img src={user.image} alt="Shoes" className='w-96 rounded-full h-56 py-4' /></figure>
                    <div className="card-body">
                        <h2 className=" text-blue-900 text-center text-2xl font-bold">
                        Name: {user.name}
                        </h2>
                        <p className='text-lg text-green-700 text-center'> Email: {user.email}</p>
                    </div>
                </div>)
            }

        </div>
      
      </>


    );
};

export default Instructors;