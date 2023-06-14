import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Lottie from 'lottie-react'
import dashboard from '../../assets/82340-dashboard-bi.json'
import { FaUserTie, FaUsers, FaWallet, FaHome, FaClipboardList, FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import { HiUserAdd } from "react-icons/hi";
import adminUsers from '../hooks/adminUsers';
import instructorsUsers from '../hooks/instructorsUsers';

import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
    const [isAdmin] = adminUsers()
    const [isInstructors] = instructorsUsers()
    // const isAdmin=true;
    // const isInstructors=false
    return (
        <>
            <Helmet>
                <title>Sport Academic | DashBoard Page</title>
            </Helmet>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-yellow-100">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">
                        {/* Sidebar content here */}

                        <div className='w-full'>
                            <Lottie animationData={dashboard} loop={true} />
                        </div>
                        <h1 className='text-amber-800 text-2xl text-center font-medium'>DashBoard</h1>
                        {
                            isAdmin ?
                                (<>

                                    <div className='text-xl'>
                                        <li><NavLink to='/dashboard/mangeClasses' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaUserTie></FaUserTie> Mange Classes</NavLink ></li>
                                        <li><NavLink to='/dashboard/mangeUsers' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaUsers></FaUsers> Mange Users</NavLink ></li>
                                    </div>


                                </>) : isInstructors ?
                                    (<>

                                        <div className='text-xl'>
                                            <li><NavLink to='/dashboard/addClasses' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><HiUserAdd></HiUserAdd> Add Classes</NavLink ></li>
                                            <li><NavLink to='/dashboard/myClass' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaClipboardList></FaClipboardList> MyClasses</NavLink ></li>
                                        </div>


                                    </>) : <>
                                        <div className='text-xl'>
                                            <li><NavLink to='/dashboard/mySelectedClass' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaClipboardCheck></FaClipboardCheck> My Select Class</NavLink ></li>
                                            <li><NavLink to='/dashboard/enrollClass' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaClipboard></FaClipboard> My Enroll Class</NavLink ></li>
                                            <li><NavLink to='/dashboard/paymentHistory' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaWallet></FaWallet> Payment History</NavLink ></li>

                                        </div>


                                    </>
                        }
                        <div className="divider"></div>
                        <div className='text-xl'>
                            <li className=''><NavLink to='/' ><FaHome></FaHome>Home</NavLink ></li>
                        </div>

                    </ul>

                </div>
            </div>



        </>
    );
};

export default Dashboard;