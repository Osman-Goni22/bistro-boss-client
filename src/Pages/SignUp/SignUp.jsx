import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../Providers/AuthProviders';
import useAxiosPublic from './../../hooks/useAxiosPublic';


const SignUp = () => {
  const {Register, updateUserProfile} = useContext(AuthContext)
//  const axiosPublic = useAxiosPublic();

const  axiosPublic = useAxiosPublic()
  console.log(axiosPublic);
  const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()

      const onSubmit = (data) => {
          Register(data.email, data.password)
          .then(res=>{
            console.log(res);
            updateUserProfile(data.name, data.photo)
            .then(()=>{

              const user ={
                name:data.name,
                email:data.email
              }
             
              axiosPublic.post('/users', user)
              .then(res=>{
                console.log('Updated user');
                navigate('/');
                console.log(res.data);

              })
             
            })

            .catch('error occurred')
          

          })
          .catch(err=>console.log(err.message))
      }

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
            <h2 className='text-2xl text-center font-bold'>Please Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name", {required:true })}  name='name' type="text" placeholder="Name" className="input input-bordered"/>
                {errors.name && <span className='text-red-700'>Name is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input {...register("photo", {required:true })}  name='photo' type="text" placeholder="PhotoURL" className="input input-bordered"/>
                {errors.name && <span className='text-red-700'>photo is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' {...register("email", {required:true})}  type="email" placeholder="email" className="input input-bordered"  />

                {errors.email && <span className='text-red-700'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {required:'password is required', minLength:{value:6, message:'password at least 7 characters'}, maxLength:{value:10, message:'password at most 10 characters'}, pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,20}$/, message:'password should be at least one uppercase one lowercase one special character and one numbers with at least 6 characters'}})}  name='password' placeholder="password" className="input input-bordered"  />
               
                {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Sign Up" className='btn btn-outline ' />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;