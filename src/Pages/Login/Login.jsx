import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { axiosPublic } from '../../hooks/useAxiosPublic';
const Login = () => {

  const {login} = useContext(AuthContext)
   const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname|| "/";

   

    const [disabled, setDisabled] = useState(true)
    const handleLogin= e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
         login(email, password)
         .then(res=>{
          const userInfo= {
            email:res.user.email
          };
          

          axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('token', res.data.token)
                        console.log(res.data);
                    }

                   
                })


          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });

          navigate(from)
          
         })

         .catch(err=>{
          console.log(err.message);
         })
    }

    const handleValidateCaptcha = e=>{
       const captcha = e.target.value;
       console.log(captcha);
       if(validateCaptcha(captcha)){
        console.log('validated captcha value');
        setDisabled(false)
       }
    }

    useEffect(()=>{
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha} type="text"  name='captcha' placeholder="type the captcha" className="input input-bordered" required />

               
                
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} type="submit" value="Login" className='btn btn-outline' />
              </div>
            </form>
            <p>New Here? <Link  className='text-red-400' to='/signup'>Register</Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Login;