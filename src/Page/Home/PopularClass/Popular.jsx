import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PopularClass from './PopularClass';

const Popular = () => {
    const { data: popularClasses = [] } = useQuery(['popularClasses'], async () => {
        const res = await fetch(`http://localhost:4000/popularClasses`)
        return res.json()
    })

    return (
        <>
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