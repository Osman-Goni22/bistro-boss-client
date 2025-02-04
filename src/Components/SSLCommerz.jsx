import React, { useContext } from 'react';
import UseCart from '../hooks/UseCart';
import { AuthContext } from '../Providers/AuthProviders';
import axios from 'axios';


const SSLCommerz = () => {
    const {user} = useContext(AuthContext)
    const [cart, refetch] = UseCart();
    const TotalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleCreatePayment =async ()=>{
        const payment ={
            email:user?.email,
            price:TotalPrice,
            transaction_Id:'',
            date:new Date(),
            status:'pending',
            cartIds:cart.map(item =>item._id),
            name:user?.name
              
    
        }

        const result=await axios.post('http://localhost:3000/create-payment', payment)
        console.log(result);
        window.open(result.data, "_blank")
    }
   
    return (
        <div>
            <h2>This is SSLCommerz Page</h2>

         
                 <button className='btn btn-primary' onClick={handleCreatePayment}>Pay</button>
            
        </div>
    );
};

export default SSLCommerz;