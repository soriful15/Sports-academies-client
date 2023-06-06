import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg';
const Header = () => {


    const navBarOptions = <>

        <li> <NavLink to='/' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
            Home
        </NavLink></li>
        <li> <NavLink to='/instructors' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
        Instructors
        </NavLink></li>
        <li> <NavLink to='/classes' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
        Classes
        </NavLink></li>
        <li> <NavLink to='/ dashboard' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
        Dashboard
        </NavLink></li>


    </>

    return (
        <>

          <div className="navbar bg-lime-100 mx-auto lg:px-28 py-10  mt-6">


          <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navBarOptions}
                        </ul>
                    </div>
                    <img className='rounded-full w-20' src={logo} alt="" />
                    <a className=" normal-case text-xl px-2">Sports academies</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBarOptions}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img data-toggle="tooltip"
                                       /*  title={user && user.displayName} src={user && user.photoURL} */ />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            {/* <li><Link to='/login' className='font-bold' onClick={handleLogOut}>Logout</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>


          </div>

        </>
    );
};

export default Header;