import React from 'react';
import useAuth from '../../hooks/useAuth';

const MySelectClass = () => {
    const { user } = useAuth()
    return (
        <>
              <h1 className='text-3xl font-bold my-3 text-center'>Hello <span className='text-violet-700'>{user && user.displayName}</span> Welcome To DashBoard</h1>
            <div className="border-t-4 border-orange-700 mb-5 w-3/4 mx-auto "></div>




            
        </>
    );
};

export default MySelectClass;