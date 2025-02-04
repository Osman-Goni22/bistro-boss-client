import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGoogle } from 'react-icons/fa';
import { axiosPublic } from './../../hooks/useAxiosPublic';
import { axiosSecure } from '../../hooks/useAxiosSecure';

const SocialLogin = () => {
    const {signInWithGoogle } = useContext(AuthContext)
    const handleSignIn =()=>{
        signInWithGoogle()
        .then(res=>{
            console.log(res.user);

            const userInfo ={
                email:res.user.email,
                name:res.user.displayName
            }
            axiosSecure.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('token', res.data.token)
                        console.log(res.data);
                    }

                   
                })

            axiosSecure.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
            })
        })
    }
    return (
        <div>
           <div onClick={handleSignIn} className='flex justify-center items-center gap-2 btn'>
           <FaGoogle></FaGoogle>
           Google
           </div>
        </div>
    );
};

export default SocialLogin;