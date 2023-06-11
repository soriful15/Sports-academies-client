import React from 'react';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { FaTrash, FaAmazonPay } from "react-icons/fa";
import Swal from 'sweetalert2';
const MySelectClass = () => {
    const { user } = useAuth()
    const [cart,refetch] = useCart()
    // const total = cart.reduce((sum, item) => parseInt(item.price )+ sum, 0)


const handleDeleteBtn=(item)=>{
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
            fetch(`http://localhost:4000/carts/${item._id}`, {
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
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>

            <h1 className='text-3xl mt-4 text-emerald-300'>Total ClassItem: {cart.length}</h1>
            {/* <h1 className='text-3xl mt-4 text-emerald-300'>Total ClassItem: {total}</h1> */}

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
                                    <td>
                                        {item.classesName}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.seats}</td>
                                    <td>{item.price}</td>
                                    <th>

                                        <button className="btn btn-success btn-xs text-base text-black"><FaAmazonPay></FaAmazonPay> Pay</button>

                                    </th>
                                    <th >


                                        <button onClick={() => handleDeleteBtn(item)} className="btn btn-error text-red-200 text-base btn-xs"  ><FaTrash></FaTrash></button>

                                    </th>
                                </tr>

                            )
                        }

                    </tbody>
                </table>




            </div>


        </>
    );
};

export default MySelectClass;