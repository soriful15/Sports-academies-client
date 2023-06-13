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
            const saveUser = { name: loggedInUser.displayName,  image: loggedInUser. photoURL ,  email: loggedInUser.email,}
            fetch('https://sports-academies-server-fawn.vercel.app/users', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(saveUser)

            })
                .then(res => res.json())
                .then(() => {

                    navigate(from, { replace: true });

                })



        })
        .catch((error) => {
            console.log(error.message)
        })

    }


    return (
        <>
         <div className="divider">OR</div>
            <div className='text-center'>
                <button className="btn  mb-3  btn-info" onClick={handleGoogleSing}> <FaGoogle className=''></FaGoogle></button>
            </div>
        </>
    );
};

export default SocialLogin;