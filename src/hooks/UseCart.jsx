import React from 'react';
import useAxiosSecure, { axiosSecure } from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseCart = () => {
   const axiosSecure = useAxiosSecure();
   const {refetch,data : cart=[] } = useQuery({
    queryKey:['carts'],
    queryFn: async()=>{
        const result = await axiosSecure.get('/carts');
        return result.data;
    }
   });

   return [cart, refetch] ;

};

export default UseCart;