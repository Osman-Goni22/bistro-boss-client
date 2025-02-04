import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data : users=[]}= useQuery({
      queryKey:['users'],
      queryFn: async()=>{
        const drivenUsers = await axiosSecure.get('/users');
        return drivenUsers.data;
      }
    })

   return [users, refetch]
};

export default useUsers;