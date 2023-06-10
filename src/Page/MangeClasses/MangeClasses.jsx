import React from 'react';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MangeClasses = () => {
    const { user } = useAuth()

    const { data: allClasses = [], } = useQuery(['classes'], async () => {
        const res = await fetch(`http://localhost:4000/allClasses`)
        return res.json()

    })
    // console.log(allClasses)

    return (
        <>
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="divider w-3/4 mx-auto bg-orange-200"></div>


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
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>AvailAble Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
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
                                    <td>
                                        {allClass.instructor_name}
                                    </td>
                                    <td>{allClass.instructor_email}</td>
                                    <td>{allClass.seats}</td>
                                    <td>{allClass.price}</td>
                                    <td>{allClass.status}</td>
                                    <th className='gap-2 flex'>
                                        <button className="btn btn-error btn-xs">approved</button>
                                        {/* <button onClick={() => handleInstructorBtn(user)} disabled={user.status === 'approved' ? true : false} className="btn btn-success btn-xs">Approved</button> */}
                                        <button className="btn btn-error btn-xs">Deny</button>
                                        <button onClick={() => window.my_modal_5.showModal()} className="btn btn-warning btn-xs">FeedBack</button>
                                    </th>
                                </tr>

                            )
                        }

                    </tbody>



                </table>
            </div>


            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                  <input type="comment" className='w-full h-full' />
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>


        </>
    );
};

export default MangeClasses;