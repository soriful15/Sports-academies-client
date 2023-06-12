import React from 'react';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxioSecure';

const MyClass = () => {
    const { user } = useAuth()

    // const { data: allClasses = [] } = useQuery(['allClasses'], async () => {
    //     const res = await fetch(`http://localhost:4000/allClasses`)
    //     return res.json()
    // })

    const [axiosSecure] = useAxiosSecure();
    const { data: allClasses = [] } = useQuery(['allClasses'], async () => {

        const res = await axiosSecure.get(`/allClasses`)
        // return res.json()
        return res.data

    })



    console.log(allClasses)
    return (
        <>
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
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
                            <th>AvailAble Seat</th>
                            <th>Total Enrolled</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allClasses.map((allClass, index) =>
                                <tr key={allClass._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={allClass.classesImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {allClass.classesName}
                                    </td>
                                    <td>{allClass.status}</td>
                                    <td>Total Enrolled</td>
                                    <td>{allClass.price}</td>
                                    <td>{allClass.seats}</td>
                                    <td>
                                        {allClass.feedBack ? allClass.feedBack : "Nothing FeedBack"}
                                    </td>
                                    <Link to={`/dashboard/allClasses/${allClass._id}`} className="btn btn-info btn-xs">Updated</Link>


                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>


        </>
    );
};

export default MyClass;