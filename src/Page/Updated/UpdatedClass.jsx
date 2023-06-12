
import React from 'react';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdatedClass = () => {
    const updatedData = useLoaderData()
    console.log(updatedData)

    const { user } = useAuth()
    const { _id, seats, price, details } = updatedData


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:4000/allClasses/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated  Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })





    }

    return (
        <>
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To Updated Class</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>

            <div className='container mx-auto max-w-6xl px-3'>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-16'>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='grid lg:grid-cols-2 gap-4 px-2'>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>

                            <input type="text" placeholder="Enter Instructor Name" className="input input-bordered" defaultValue={user?.displayName} {...register("instructor_name")} />
                        </div>


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>

                            <input type="text" placeholder="Enter Instructor Email" className="input input-bordered" defaultValue={user?.email} {...register("instructor_email")} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number" placeholder="Seats" className="input input-bordered" defaultValue={seats} {...register("seats", { required: true })} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="price" className="input input-bordered" defaultValue={price} {...register("price", { required: true })} />
                        </div>


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>

                            <input type="text" placeholder="Details" className="input input-bordered" defaultValue={details}  {...register("details")} />
                        </div>
                    </div>
                    <div className="form-control mt-6 w-52 mx-auto">

                        <input className='btn btn-success btn-block' type="submit" value="Updated Classes" />
                    </div>

                </form>


            </div>


        </>
    );
};

export default UpdatedClass;