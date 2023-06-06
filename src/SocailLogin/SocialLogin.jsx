import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleProvider } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    const handleGoogleSing = () => {
        googleProvider()
        .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            navigate(from, { replace: true })
        })
        .catch((error) => {
            console.log(error.message)
        })

    }


    return (
        <>
            <div className='text-center'>
                <button className="btn btn-outline mb-3  btn-circle" onClick={handleGoogleSing}> <FaGoogle className=''></FaGoogle></button>
            </div>
        </>
    );
};

export default SocialLogin;