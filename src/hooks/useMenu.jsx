import { useEffect, useState } from "react"
import { axiosPublic } from "./useAxiosPublic";
import { useQuery } from '@tanstack/react-query';

const useMenu = ()=>{
    // const [menu, setMenu]= useState([])

    //  useEffect(()=>{
    //         fetch('http://localhost:3000/menu')
    //         .then(res=>res.json())
    //         .then(data=>{    
    //             setMenu(data)
    //         })
    //     },[])


    const { data:menu =[], error, isLoading, refetch } = useQuery({
        queryKey: ['menuItem'],
        queryFn: async () => {
            const response = await axiosPublic.get('/menu');
         
            return response.data;
            
       
        }
    })



     return [menu,refetch] ;
}

export default useMenu;