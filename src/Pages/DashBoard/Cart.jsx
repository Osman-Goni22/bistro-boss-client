import React from 'react';
import UseCart from '../../hooks/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { axiosSecure } from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = UseCart();
    const TotalPrice = cart.reduce((total, item) => total + item.price, 0)
     console.log(cart);
    const handleDelete =(id)=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });

            axiosSecure.delete(`/carts?id=${id}`)
            .then(res=>{
                console.log(res.data);

                if(res.data.deletedCount>0){
                    Swal.fire({
                        title:"Deleted Successfully",
                        icon:"success"
                    })

                    refetch();
                }
            })

           

            }
          });
    }
    return (
        <div>
            <div className='flex justify-evenly items-center'>
                <div>Total Orders {cart.length}</div>
                <div>Price {TotalPrice} $</div>
                {
                    cart.length ?  <Link to='/dashboard/ssl' className='btn btn-primary'> 
                       Pay
                    </Link>:<div disabled={true} className='btn btn-primary' >Pay</div>
                }
              
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                   #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                                cart.map((item,indx)=>  <tr key={item._id}>
                                    <th>
                                       {indx+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td>
                                       {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button 
                                        onClick={()=>handleDelete(item._id)}
                                        className=""><FaTrashAlt className='text-red-600'></FaTrashAlt>
                                        
                                        </button>
                                    </th>
                                </tr>
                                
                            )
                            }
                          
                          
                            
                        </tbody>
                  
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;