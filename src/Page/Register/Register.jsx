import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react'
import registerFrom from '../../assets/83521-register-anumator.json'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../SocailLogin/SocialLogin';
const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                console.log(createdUser)
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Register Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')

                updateUserProfile(data.name, data.photo, data.email)
                    .then(() => {
                        console.log('update Profile')
                    })
                    .catch((error) => {
                        console.log(error.message)

                    })


            })

            .catch((error) => {
                console.log(error.message)
            })


    };

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className=''>
                            <div className='w-96'>
                                <Lottie animationData={registerFrom} loop={true} />
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}

                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photo", { required: true })} type="text" name="photo" placeholder="Enter your Photo url" className="input input-bordered" />
                                {errors.PhotoURL && <span className='text-red-600'>PhotoUrl is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true, minLength: 6, maxLength: 6, pattern: /(?=.*[A-Z])(?=.*?[#?!@$ %^&*-])/ })} />
                                {errors.password?.type === 'required' && <p className='text-red-600'>password name is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>password must be 6 Characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>password must be less then 6 Characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>password must be  one upperCase & one special Characters</p>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SingUp" />
                            </div>
                            <p className='text-center'>AlReady have an Account? <Link to='/login'><span className='text-green-500'>login</span></Link></p>
                            <SocialLogin></SocialLogin>
                        </form >
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;