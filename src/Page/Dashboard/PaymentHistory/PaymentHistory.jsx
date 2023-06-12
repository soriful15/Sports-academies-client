import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxioSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const {user}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentsHistory = []} = useQuery(['allPayments'], async () => {
        
        const res = await axiosSecure.get(`/allPayments?email=${user?.email}`)
        // return res.json()
        return res.data

    })
    return (
        <>
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To Payment History DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>TransactionId</th>
                            <th>Price</th>
                            <th>SelectedItemId</th>
                            <th>SelectedId</th>
                            <th>Date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentsHistory.map((payment, index) =>
                                <tr key={payment._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {payment.name}
                                    </td>
                                    <td>{payment.email}</td>
                                    <td>
                                        {payment.transactionId}
                                    </td>
                                    <td>{payment.price}</td>
                                    <td>
                                        {payment.selectedItemId}
                                    </td>
                                    <td>{payment.selectedId}</td>
                                    <td>{payment.date}</td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>




            </div >

        </>
    );
};

export default PaymentHistory;