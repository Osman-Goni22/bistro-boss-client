import React, { useContext } from 'react';
import useAxiosSecure, { axiosSecure } from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProviders';

const useAdmin = () => {
   const {user} = useContext(AuthContext)
        const axiosSecure = useAxiosSecure();

        const {refetch, data : isAdmin, isPending}= useQuery({
          queryKey:['admin'],
          queryFn: async()=>{
            const drivenUsers = await axiosSecure.get(`/user/admin/${user.email}`);
            console.log(drivenUsers.data);
            return drivenUsers.data;
          }
        })

    
    
       return [isAdmin, isPending, refetch]
    
};

export default useAdmin;