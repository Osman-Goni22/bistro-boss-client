import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
export const axiosSecure= axios.create({
    baseURL:'http://localhost:3000'
})

const useAxiosSecure = () => {
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()
  axiosSecure.interceptors.request.use(
    function (config) {
      
      const token = localStorage.getItem('token');
      
   
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      
      return config;
    },
    function (error) {
     
      console.error('Request Error:', error.message);
      return Promise.reject(error);
    }
  );
  

  axiosSecure.interceptors.response.use(
    function (response) {
      
     
      return response;
    },
    function (error) {
  
      if (error.response && (error.response.status === 401 ||error.response.status === 403)) {

        console.error('Unauthorized access - perhaps the token expired?');

        logout();

        navigate('/login')
       
      } else {
        console.error('Response Error:', error.message);
      }
      return Promise.reject(error);
    }
  );
  
 return axiosSecure;


};

export default useAxiosSecure;