import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxioSecure';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import '../Payment/common.css'
const CheckOutFrom = ({ paymentData, price }) => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useAuth()
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [classes, setClasses] = useState([])


    useEffect(() => {
        fetch(`http://localhost:4000/approvedClasses`)
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        console.log('card', card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setTransactionId('')
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError)
            console.log("confirmError:", confirmError)
        }
        setProcessing(false)

        console.log(paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const { classesImg, classesName, seats, price, selectedItemId, instructor_name, _id } = paymentData
            const updatedSeat = classes.map((cls) => {

                if (cls._id === paymentData.selectedItemId) {
                    fetch(`http://localhost:4000/updatedClass/${paymentData.selectedItemId}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            seats: cls.seats - 1, enroll: cls.enroll + 1
                        })
                    })
                        .then(res => res.json())
                        .then(updatedClass => {
                            console.log('availaable set ', updatedClass)
                        })
                }
            })
            setClasses(updatedSeat)

            const payment = {
                classesImg,
                name: user.displayName,
                classesName,
                instructor_name,
                seats,
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                selectedItemId,
                // date: new Date(),
                selectedId: _id
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertResult.insertedId) {
                        // display confirm
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }

    }




    return (
        <>


            <form className='w-2/3 mt-4' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button className='btn btn-success mt-4 w-48' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

            </form>
            {cardError && <p className='text-red-700 text-center'>{cardError}</p>}
            {transactionId && <p className='text-green-600 mt-4 text-center'> transactionId complete:{transactionId}</p>}



        </>
    );
};

export default CheckOutFrom;