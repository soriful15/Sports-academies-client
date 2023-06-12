import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxioSecure';
import { useQuery } from '@tanstack/react-query';

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
 <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To Enroll DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Seat</th>
                            <th>Price</th>
                            <th>SelectedId</th>
                           
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
                                    <td>
                                        {payment.classesName}
                                    </td>
                                    <td>
                                        {payment.name}
                                    </td>
                                    <td>{payment.email}</td>
                                    <td>{payment.seats}</td>
                                    <td>{payment.price}</td>
                                    <td>{payment.selectedId}</td>
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