import React from 'react';
import useAxiosSecure from '../../hooks/useAxioSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {


    const [axiosSecure] = useAxiosSecure();
    const { data: popularClasses = [],} = useQuery(['popularClasses'], async () => {
        
        const res = await axiosSecure.get(`/popularClasses`)
        // return res.json()
        return res.data

    })


    return (
        <>
            {
                popularClasses.map(popular=>
                    <div key={popular._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={popular.classesImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
                    
                    )
            }
        </>
    );
};

export default PopularClass;