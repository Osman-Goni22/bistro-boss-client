import React from 'react';
import useUsers from '../../../hooks/useUsers';
import { FaTrashAlt, FaUser, FaUsers } from 'react-icons/fa';
import { axiosSecure } from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { MdAdminPanelSettings } from "react-icons/md";

const AllUsers = () => {
    const [users, refetch] = useUsers();

    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                    })
            }
        });
    }

    const handleMakeAdmin = (id)=>{
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res=>{
            console.log(res.data);
            refetch();
        })
    }

    return (
        <div className='ml-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-orange-500 text-white'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, indx) => <tr key={user._id} className="bg-base-200">
                                <th>{indx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td onClick={()=>handleMakeAdmin(user._id)}> { user.role? 'Admin':<FaUsers className='text-2xl bg-orange-400 text-white'></FaUsers>}</td>
                                <td onClick={() => handleDeleteUser(user._id)}><FaTrashAlt className='text-red-500'></FaTrashAlt></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;