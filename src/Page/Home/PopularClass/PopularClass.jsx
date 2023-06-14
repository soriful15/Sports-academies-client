import React, { useContext } from 'react';
import adminUsers from '../../hooks/adminUsers';
import instructorsUsers from '../../hooks/instructorsUsers';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
// import useCart from '../../hooks/useCart';

const PopularClass = ({ classes }) => {
const { classesImg, instructor_name, classesName, seats, price, _id } = classes
    const [isAdmin] = adminUsers()
    const [isInstructors] = instructorsUsers()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // const [, refetch] = useCart()


    const handleAddSelect = (classes) => {
        if (isAdmin || isInstructors) {
            alert('Admin/instructor cannot selecting the course')
            return
        }

        console.log(classes)
        if (user && user.email) {
            const selectedItemCard = {
                selectedItemId: _id, classesImg, name: user.displayName,
                email: user.email, classesName, seats, price
            }
            fetch(`https://sports-academies-server-fawn.vercel.app/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItemCard)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `You have Selected the Course${classesName}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Please Login To Select the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }


    }




    return (
        <>
            <div className={`card card-compact w-full bg-base-100  ${seats === 0 ? 'bg-red-500' : 'shadow-xl'} dark:bg-black dark:text-white`}>
                <figure><img src={classesImg} className='h-72 w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">Sports Name: {classesName}</h2>
                    <p className='font-semibold text-blue-800 text-lg'>Instructor Name: {instructor_name}</p>
                    <p className='text-lg text-emerald-700'>Available seats: <span className={seats === 0 ? "text-red-400" : ''}>{parseInt(seats)}</span></p>
                    <p className='text-base text-purple-700'>Price:${parseInt(price)}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddSelect(classes)} disabled={seats === 0 || isAdmin || isInstructors} className={`btn btn-primary w-full ${seats === 0 || isAdmin || isInstructors ? "disabled" : ""}`}>Add to Select</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularClass;