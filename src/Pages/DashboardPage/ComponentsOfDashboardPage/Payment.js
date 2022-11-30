import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk)

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking)
    const { item_name, price } = booking
    return (
        <div>
            <h3 className='text-3xl mb-5'>Payment for {item_name}</h3>
            <p className='text-xl'>Please pay <strong>{price} Taka</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;