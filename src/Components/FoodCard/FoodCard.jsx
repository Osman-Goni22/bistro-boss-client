import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure, { axiosSecure } from './../../hooks/useAxiosSecure';
import UseCart from '../../hooks/UseCart';

const FoodCard = ({item}) => {

const [,refetch]= UseCart();
  const location = useLocation();
  const {name, recipe,image, category, price,_id} = item;
const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food)=>{
    if(user && user.email){
      const menuItem={
        menuId:_id,
        email:user.email,
        image,
        price,
        name
      }

      axiosSecure.post('/carts', menuItem )
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire("Item added successfully")
          refetch();
        }

      
      })
    }

    else{
      Swal.fire({
        title: "You are not logged in.",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
           navigate('/login', {state:{from:location}});
        }
      });
    }

  }

   
    return (
        <div className="card bg-base-100 w-96 shadow-xl relative">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
           
       <p className=' absolute top-12 right-12 text-white bg-black'>   $ {price}</p>

        <div className="card-body flex flex-col justify-center items-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleAddToCart(item)} className=" btn border-0 border-b-2 p-4 text-yellow-400 border-yellow-400 hover:bg-black hover:text-white uppercase ">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;