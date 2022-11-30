import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState("");
    const elements = useElements();
    const { price, email, _id, product_id, buyerName } = booking;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://thrift-shop-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
                product_id
            }
            fetch("https://thrift-shop-server.vercel.app/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        setSuccess('Payment done.');
                        setTransactionId(paymentIntent.id);
                    }
                });
        }
        setProcessing(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button className='btn btn-sm mt-4 btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p>{cardError}</p>
            {
                success && <div>
                    <p>{success}</p>
                    <p>TransactionId: {transactionId}</p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;