import React from 'react';

const ClassesCard = ({classes}) => {
    const {classesImg,instructor_name,classesName,seats,price}=classes
    return (
        <>
           <div  className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={classesImg} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{classesName}</h2>
          <p>{instructor_name}</p>
          <p>{seats}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
          {/* <button onClick={()=>handleAddCart(item)} className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4">Add to Card</button> */}
          <button  className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4">Add to Card</button>
          </div>
        </div>
      </div> 
        </>
    );
};

export default ClassesCard;