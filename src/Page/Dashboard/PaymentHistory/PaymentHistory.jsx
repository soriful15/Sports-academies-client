import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxioSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentsHistory = [] } = useQuery(['allPayments'], async () => {

        const res = await axiosSecure.get(`/allPayments?email=${user?.email}`)
        // return res.json()
        return res.data

    })
    return (
        <>

<Helmet>
        <title>Sport Academic | Payment History Page</title>
      </Helmet>

            <h1 className='lg:text-3xl text-lg font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To Payment History DashBoard</h1>
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
                                        <td className='text-base font-bold'>
                                            {payment.name}
                                        </td>
                                        <td>{payment.email}</td>
                                        <td>
                                            {payment.transactionId}
                                        </td>
                                        <td>${payment.price}</td>
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

            </div>

        </>
    );
};

export default PaymentHistory;