import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const stripePromise = loadStripe(import.meta.env.VITE_payment_token);

const Payments = () => {
  const { user } = useAuth()
  const paymentData = useLoaderData()
  console.log(paymentData)
  const price = parseInt(paymentData.price)


  return (
    <>

<Helmet>
        <title>Sport Academic | Payment Page</title>
      </Helmet>

      <h1 className='lg:text-3xl text-lg font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To Payment DashBoard</h1>
      <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>

      <div className='w-full'>

        <Elements stripe={stripePromise}>
          <CheckOutFrom
            paymentData={paymentData}
            price={price}
          ></CheckOutFrom>
        </Elements>

      </div>


    </>
  );
};

export default Payments;