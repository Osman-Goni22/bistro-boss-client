import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { MdSystemUpdateAlt } from "react-icons/md";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu,refetch] = useMenu();
    console.log(menu);
 const axiosSecure = useAxiosSecure();
    const handleDelete= (item)=>{

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

            axiosSecure.delete(`/item/${item._id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.deletedCount >0){
                    refetch();
                    Swal.fire({
                        title:"Deleted Item",
                        icon:"success"
                    })
                }
             

            })
            
            }
          });

    }
    return (
        <div>
            <SectionTitle heading={"manage all items"} subHeading={"Hurry Up"}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                  #
                                </th>
                                <th>
                                  Image
                                </th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, indx)=><tr key={indx}>
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
                                        <div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}><button className=""><FaEdit className='text-orange-400 text-xl'></FaEdit></button></Link>
                                </td>
                                <td onClick={()=>handleDelete(item)}>
                                    <FaTrashAlt className='text-orange-400  '></FaTrashAlt>
                                </td>
                            </tr>)
                                  
                            }
                            


                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;