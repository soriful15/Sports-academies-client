import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxioSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const EnrollClass = () => {
    const {user}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = []} = useQuery(['enrollPayments'], async () => {
        
        const res = await axiosSecure.get(`/enrollPayments?email=${user?.email}`)
        // return res.json()
        return res.data

    })
    return (
        <>

<Helmet>
        <title>Sport Academic | Enroll Page</title>
      </Helmet>

 <h1 className='lg:text-3xl text-lg font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To Enroll DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>
            <div className="overflow-x-auto w-full px-5">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor name</th>
                            <th>Enrolled Date</th>
                            <th>Price</th>
                            <th>Status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments .map((payment, index) =>
                                <tr key={payment._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={payment.classesImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-base font-bold'>
                                        {payment.classesName}
                                    </td>
                                    <td>
                                        {payment.name}
                                    </td>
                                    <td>{payment.date}</td>
                                    <td>${payment.price}</td>
                                    <td><button className='btn btn-secondary'>Paid</button></td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>




            </div >

        </>
    );
};

export default EnrollClass;