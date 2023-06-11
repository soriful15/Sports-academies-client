import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxioSecure';

const MangeUsers = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        // const res = await fetch(`http://localhost:4000/users`)
        const res = await axiosSecure.get(`/users`)
        // return res.json()
        return res.data

    })
    const handleAdminBtn = (user) => {
        console.log(user)
        fetch(`http://localhost:4000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ` ${user.name} add admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleInstructorBtn = (user) => {
        console.log(user)
        fetch(`http://localhost:4000/users/instructors/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ` ${user.name} add Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <>
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>

            <div className='w-3/4 mt-10'>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <th>   <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} className='' alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div></th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>


                                            <div className='flex gap-2'>
                                                <button onClick={() => handleInstructorBtn(user)} disabled={user.role === 'instructors' ? true : false} className="btn btn-primary">Make instructors</button>
                                                <button onClick={() => handleAdminBtn(user)} className="btn btn-secondary" disabled={user.role === 'admin' ? true : false}> Make Admin</button>
                                            </div>


                                        </td>

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

export default MangeUsers;