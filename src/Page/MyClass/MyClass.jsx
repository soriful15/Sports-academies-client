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
            <h1 className='lg:text-3xl text-lg font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>




          <div>
              <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Status</th>
                            <th>Total Enrolled</th>
                            <th>Price</th>
                            <th>AvailAble Seat</th>
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
                                    <td className='text-base font-bold'>
                                        {allClass.classesName}
                                    </td>
                                    <td className='text-yellow-400'>{allClass.status}</td>
                                    <td className='text-pink-800'> {allClass.enroll ? allClass.enroll : "Not Enroll"}</td>
                                    <td className='text-green-800'>${allClass.price}</td>
                                    <td className='text-indigo-700'>{allClass.seats}</td>
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
          </div>


        </>
    );
};

export default MyClass;