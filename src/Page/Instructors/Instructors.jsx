import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxioSecure';


// import useAuth from '../hooks/useAuth';

const Instructors = () => {
//    const {user}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [] } = useQuery(['users'], async () => {
        // const res = await fetch(`http://localhost:4000/users`)
        const res = await axiosSecure.get(`/users`)
        // const res = await useAxiosSecure.get(`/users/${user.role == 'instructors'}`)
     
        // return res.json()
        return res.data

    })
    return (


        <div>
            {
                users.map((user) => <div key={user._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={user.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {user.name}
                        </h2>
                        <p>{user.email}</p>
                    </div>
                </div>)
            }

        </div>


    );
};

export default Instructors;