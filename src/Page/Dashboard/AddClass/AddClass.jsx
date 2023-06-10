import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxioSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_img_upload_token
console.log(img_hosting_token)


const AddClass = () => {
    const { user } = useAuth()

    const [axiosSecure] = useAxiosSecure()
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.enroll = 0
        // data.pending=pending
        console.log(data)
        const fromData = new FormData();
        fromData.append('image', data.classesImg[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    // console.log(imageResponse)
                    const imgUrl = imageResponse.data.display_url
                    // console.log(data, imgUrl) 
                    const { classesName, instructor_name, instructor_email, seats, price, details ,enroll,status='pending'} = data
                    const newClasses = { classesImg: imgUrl, classesName, instructor_name, instructor_email, seats, price, details,enroll,status}
                    // console.log(newItem)
                    // axiosSecure.post('/classes', newClasses)
                    axiosSecure.post('/allClasses', newClasses)
                        .then(data => {
                            console.log('after posting new newClasses item', data.data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: ' Item Add has been Succeed',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }

            })

    }

    return (
        <>
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="divider w-3/4 mx-auto bg-orange-200"></div>

            <div className='container mx-auto px-3'>

                <h1 className='text-center mt-10 text-4xl text-sky-800 '>Add  Classes</h1>


                <form onSubmit={handleSubmit(onSubmit)} className='mt-16'>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='grid lg:grid-cols-2 gap-4 px-2'>


                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Classes Image</span>

                            </label>
                            <input type="file"     {...register("classesImg", { required: true })} className="file-input file-input-bordered w-full" />

                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Classes Name</span>
                            </label>

                            <input type="text" placeholder="Enter Classes Name" className="input input-bordered"  {...register("classesName")} />
                        </div>


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
                            <input type="number" placeholder="Seats" className="input input-bordered" {...register("seats", { required: true })} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="price" className="input input-bordered" {...register("price", { required: true })} />
                        </div>


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>

                            <input type="text" placeholder="Details" className="input input-bordered"  {...register("details")} />
                        </div>

                        {/* <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <select {...register("status")} className="input input-bordered">
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="denied ">Denied </option>
                            </select>

                        </div> */}





                    </div>
                    <div className="form-control mt-6">

                        <input className='btn btn-success btn-block' type="submit" value="Add Classes" />
                    </div>

                </form>


            </div>



        </>
    );
};

export default AddClass;
