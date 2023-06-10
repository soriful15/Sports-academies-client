
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';




const MangeClasses = () => {
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
                        title: `${user.name} add Deny`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // const handleFeedBackModal=()=>{

    // }


    // const handleFeedBackBtn = (id) => {
    //     console.log(user)
    //     fetch(`http://localhost:4000/updatedStatusFeedBack/${id}`, {
    //         method: 'PATCH',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: `${user.name} add FeedBack`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }









    return (
        <>
            <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="divider w-3/4 mx-auto bg-orange-200"></div>


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
                                        {/* <button  onClick={() => handleFeedBackBtn(allClass._id)}  className="btn btn-warning btn-xs">FeedBack</button> */}
                                        <button className="btn btn-warning btn-xs" onClick={() => window.my_modal_2.showModal()}>FeedBack</button>
                                    </th>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>


            {/* <button className="btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button> */}
            {/* <dialog id="my_modal_2"  className="modal"> */}
            <dialog id={allClasses._id}  className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </>
    );
};

export default MangeClasses;