
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxioSecure';




const MangeClasses = () => {
    // const { user } = useAuth()
    // const { data: allClasses = [], refetch } = useQuery(['allClasses'], async () => {
    //     const res = await fetch(`http://localhost:4000/allClasses`)
    //     return res.json()
    // })
    // console.log(allClasses)
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: allClasses = [],refetch} = useQuery(['allClasses'], async () => {
        
        const res = await axiosSecure.get(`/allClasses`)
        // return res.json()
        return res.data

    })


    const handleApprovedBtn = (id) => {
        console.log(user)
        fetch(`http://localhost:4000/updatedStatusApproved/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.displayName} add Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDenyBtn = (id) => {
        console.log(user)
        fetch(`http://localhost:4000/updatedStatusDeny/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.displayName} add Deny`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


   

    const handleFedback = (event) => {
        event.preventDefault()
        const form = event.target;
        const feedBack = form.feedBack.value;
        const id = form.id.value;

        const classFeedback = { feedBack, id }
        console.log(classFeedback);
        fetch(`http://localhost:4000/updatedStatusFeedBack/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classFeedback)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    form.reset();
                    Swal.fire("Send!", "Feedback has been send.", "success");
                }
            });
    }











    return (
        <>
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>



            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>AvailAble Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allClasses.map((allClass, index) =>
                                <tr key={allClass._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={allClass.classesImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {allClass.classesName}
                                    </td>
                                    <td>
                                        {allClass.instructor_name}
                                    </td>
                                    <td>{allClass.instructor_email}</td>
                                    <td>{allClass.seats}</td>
                                    <td>{allClass.price}</td>
                                    <td>{allClass.status}</td>
                                    <th className='gap-2 flex'>

                                        <button onClick={() => handleApprovedBtn(allClass._id)} disabled={allClass.status === 'approved' ? true : false} className="btn btn-success btn-xs">Approved</button>
                                        <button className="btn btn-error btn-xs" onClick={() => handleDenyBtn(allClass._id)} disabled={allClass.status === 'deny' ? true : false}   >Deny</button>

                                        <label htmlFor={allClass._id} className="btn btn-sm modal-button">
                                            Feedback
                                        </label>
                                        <input type="checkbox" id={allClass._id} className="modal-toggle" />
                                        <label htmlFor={allClass._id} className="modal cursor-pointer">
                                            <label className="modal-box relative" htmlFor="">
                                                <form onSubmit={handleFedback}>
                                                    <div className="pt-5">
                                                        <label className="text-black" htmlFor="text">
                                                            Send Feedback
                                                        </label>
                                                        <input type="text" name="id" className="hidden" defaultValue={allClass._id} />
                                                        <textarea
                                                            type='text'
                                                            className=" w-full text-black p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-orange-500"
                                                            name="feedBack"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="group my-6 relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                                    >
                                                        Send Feedback
                                                    </button>
                                                </form>
                                            </label>
                                        </label>
















                                      


                                    </th>
                                </tr>

                            )
                        }

                    </tbody>
                </table>




            </div>














        </>
    );
};

export default MangeClasses;



// {showModal && (
//     <dialog open className="modal">
//       <form method="dialog" className="modal-box">
//         <input
//           onBlur={saveFeedBack}
//           type="text"
//           placeholder="Type here"
//           className="input w-full max-w-xs"
//         />
//         <div className="modal-action">
//           <button className="btn" onClick={handleCloseModal}>
//             Close
//           </button>
//           <button
//             onClick={() => handleSendFeedBack(_id)}
//             disabled={!sendFeedBack}
//           >
//             Send FeedBack
//           </button>
//         </div>
//       </form>
//     </dialog>
//   )}