import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg';
import { AuthContext } from '../../Provider/AuthProvider';
import adminUsers from '../hooks/adminUsers';
import instructorsUsers from '../hooks/instructorsUsers';
import { Fade } from 'react-awesome-reveal';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const [isAdmin] = adminUsers()
    const [isInstructors] = instructorsUsers()
    // const isAdmin=true;
    // const isInstructors=false

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }



    const navBarOptions = <>

      <Fade>


      <li> <NavLink to='/' title='' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
            Home
        </NavLink></li>
        <li> <NavLink to='/instructors' title='' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
            Instructors
        </NavLink></li>
        <li> <NavLink to='/classes' title='' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
            Classes
        </NavLink></li>


        {
            user && <li> <NavLink to={
                isAdmin
                    ? "/dashboard/mangeUsers"
                    : isInstructors
                        ? "/dashboard/myClass"
                        : "/dashboard/mySelectedClass"
            } title='' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                Dashboard
            </NavLink></li>
        }



      </Fade>








    </>

    return (
        <>


            <div className="navbar  lg:px-28 py-5 z-10   bg-green-200  sticky">



                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-sky-200 text-black rounded-box w-52">
                                {navBarOptions}
                            </ul>
                        </div>
                      <div className='w-full md:flex md:justify-center md:items-center'>
                      <img className='rounded-full w-20' src={logo} alt="" />
                        <a className=" normal-case text-xl px-2 text-violet-600">Sports academies</a>
                      </div>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 ">
                            {navBarOptions}
                        </ul>
                    </div>
                    {
                        user ? <>

                            <div className="navbar-end ">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                        <div className="w-10 rounded-full">
                                            <img data-toggle="tooltip"
                                                title={user && user.displayName} src={user && user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-200 text-black rounded-box w-52">
                                        <li><Link to='/login' className='font-bold' onClick={handleLogOut}>Logout</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </> : <div className='navbar-end'>
                        <li className='btn btn-accent btn-md text-black '> <NavLink to='/login' title='' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                            Login
                        </NavLink></li>
                            
                            </div>
                    }
                </div>


            </div>

        </>
    );
};

export default Header;