import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// import { loadStripe } from './../../../../node_modules/@stripe/stripe-js/dist/pure.d';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
 
    return (
        <div>
           <SectionTitle heading={'Please Pay the bill'} subHeading={"Taka o pakhi tmi uira uira aso"}></SectionTitle>
           <div>
            <Elements stripe={stripePromise} >
            
             <CheckoutForm></CheckoutForm>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;