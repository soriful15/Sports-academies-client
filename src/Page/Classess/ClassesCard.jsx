import React from 'react';

const ClassesCard = ({ classes }) => {
  const { classesImg, instructor_name, classesName, seats, price } = classes






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
            <button className="btn btn-outline w-full">Add to Card</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;