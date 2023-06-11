import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClassesCard = ({ classes }) => {
  const { classesImg, instructor_name, classesName, seats, price,_id } = classes

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()



  const handleAddSelect = (classes) => {
    console.log(classes)
    if (user && user.email) {
    const selectedItem={selectedItemId:_id, classesImg, instructor_name:user.displayName,
      instructor_email:user.email, classesName, seats, price}
      fetch(`http://localhost:4000/carts`,{
        method:'POST',
        headers:{
          'content-type': 'application/json'
      },
      body: JSON.stringify(selectedItem)
      })
        .then(res => res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class added on the cart',
                showConfirmButton: false,
                timer: 1500
              })
        }
        })
    }

    else{
      Swal.fire({
          title: 'Please Login To Select the Class',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
          navigate('/login',{state:{from:location}})
          }
        })
  }


  }




  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={classesImg} className='h-96 w-full' alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-black">Sports Name: {classesName}</h2>
          <p className='font-semibold text-blue-800 text-xl'>Instructor Name: {instructor_name}</p>
          <p className='text-lg text-emerald-700'>Available seats:{seats}</p>
          <p className='text-base text-purple-700'>Price:${price}</p>
          <div className="card-actions">
            {/* <button onClick={()=>handleAddCart(item)} className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4">Add to Card</button> */}
            <button onClick={() => handleAddSelect(classes)} className="btn btn-outline w-full">Add to Select</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;