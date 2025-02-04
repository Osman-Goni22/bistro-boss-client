import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements()
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('clicked');

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setError(error.message)

        }
        else {
            console.log(paymentMethod);
            setError('')
        }
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement className='w-[400px] mx-auto  p-5' options={
                    {
                        style: {
                            base: {
                                color: '#32325d',
                                fontFamily: '"Roboto", sans-serif',
                                fontSmoothing: 'antialiased',
                                fontSize: '16px',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#fa755a',
                                iconColor: '#fa755a',
                            },
                        }

                    }

                }


                >
                  

                </CardElement>
            <p className='text-red-600 text-center'>{error}</p>
                <button className='btn btn-success' type="submit" >
                        Pay
                    </button>

            </form>
        </div>
    );
}


export default CheckoutForm;