import React from 'react';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { FaTrash, FaCcStripe } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const MySelectClass = () => {
    const { user } = useAuth()
    const [cart, refetch] = useCart()
    const handleDeleteBtn = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-academies-server-fawn.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <>

<Helmet>
        <title>Sport Academic | Selected Page</title>
      </Helmet>
            <h1 className='lg:text-3xl text-lg  lg:font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To Select Class</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>
            <h1 className='lg:text-3xl text-lg  mt-4 mb-4 text-emerald-300'>Total ClassItem: {cart.length}</h1>
          




            <div className="overflow-x-auto w-full px-6">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black'>
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
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.classesImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-base font-bold'>
                                        {item.classesName}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.email}</td>
                                    <td className='text-indigo-700'>{item.seats}</td>
                                    <td className='text-green-800'>${item.price}</td>
                                    <th>
                                        <Link to={`/dashboard/payments/${item._id}`}><button className="btn btn-success btn-xs text-base text-blue-700"><FaCcStripe></FaCcStripe> Pay</button></Link>

                                    </th>
                                    <th >


                                        <button onClick={() => handleDeleteBtn(item)} className="btn btn-error text-red-200 text-base btn-xs"  ><FaTrash></FaTrash></button>

                                    </th>
                                </tr>

                            )
                        }

                    </tbody>
                </table>




            </div >


        </>
    );
};

export default MySelectClass;