import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PopularClass from './PopularClass';

const Popular = () => {
    const { data: popularClasses = [] } = useQuery(['popularClasses'], async () => {
        const res = await fetch(`https://sports-academies-server-fawn.vercel.app/popularClasses`)
        return res.json()
    })

    return (
        <>
    <h1 className='text-2xl lg:text-4xl text-center font-bold text-slate-900 mt-9'>Popular Classes</h1>
            <p className='text-center container mx-auto text-lg mt-2 text-gray-500'>A popular sport class is a highly sought-after program that offers engaging and dynamic training <br /> sessions in a specific sport. These classes are designed to cater  to individuals of different ages and skill levels, providing a fun </p>

        
            <div className='grid md:grid-cols-2 lg:grid-cols-3 container gap-6 mt-10 mx-auto'>


                {
                    popularClasses.map(classes =>
                        <PopularClass
                            key={classes._id}
                            classes={classes}
                        ></PopularClass>


                    )
                }

            </div>
        </>
    );
};

export default Popular;