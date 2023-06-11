
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Swal from 'sweetalert2';




const MangeClasses = () => {
    const [showModal, setShowModal] = useState(false)
    const [sendFeedBack, setSendFeedBack] = useState('')
    // const [selectItemId, setSelectItemId] = useState(null)


    const { user } = useAuth()
    const { data: allClasses = [], refetch } = useQuery(['allClasses'], async () => {
        const res = await fetch(`http://localhost:4000/allClasses`)
        return res.json()

    })
    // console.log(allClasses)

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
                        title: `${user.name} add Approved`,
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


    const handleFeedBackButton = (id) => {
        setSendFeedBack(id)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    const saveFeedBack = (e) => {
        const value = e.target.value
        setSendFeedBack(value)

    }


    const handleSendFeedBack = (id) => {
        console.log(user)
        fetch(`http://localhost:4000/updatedStatusFeedBack/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedBack: sendFeedBack })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {

                    refetch();
                    // setShowModal(false)
                    // setSendFeedBack('')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.displayName} add FeedBack`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
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
                                        <button className="btn btn-warning btn-xs" onClick={() => handleFeedBackButton(allClass._id)} >FeedBack</button>


                                        {showModal && (
                                            <dialog open className="modal">
                                                <form method="dialog" className="modal-box">
                                                    <input
                                                        onBlur={saveFeedBack}
                                                        type="text"
                                                        placeholder="Type here"
                                                        className="input w-full max-w-xs"
                                                    />
                                                    <div className="modal-action">
                                                        <button className="btn" onClick={handleCloseModal}>
                                                            Close
                                                        </button>
                                                        <button
                                                            onClick={() => handleSendFeedBack(allClass._id)}
                                                            disabled={!sendFeedBack}
                                                        >
                                                            Send FeedBack
                                                        </button>
                                                    </div>
                                                </form>
                                            </dialog>
                                        )}



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