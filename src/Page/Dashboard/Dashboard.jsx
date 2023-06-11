import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { FaShoppingCart, FaWallet, FaHome, FaCalendarAlt, FaBars, FaShoppingBag,  FaBook, FaUser } from 'react-icons/fa';
import adminUsers from '../hooks/adminUsers';
import instructorsUsers from '../hooks/instructorsUsers';
const Dashboard = () => {
    const [isAdmin] = adminUsers()
    const [isInstructors] = instructorsUsers() 
    // const isAdmin = true;
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-green-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">
                        {/* Sidebar content here */}






                        {
                            isAdmin ?
                                (<>

                                    <li><NavLink to='/dashboard/mangeClasses'> Mange Classes</NavLink ></li>
                                    <li><NavLink to='/dashboard/mangeUsers'> Mange Users</NavLink ></li>
                                    

                                </>) :isInstructors ?
                                    (<>
                                        <li><NavLink to='/dashboard/addClasses'> Add Classes</NavLink ></li>
                                        <li><NavLink to='/dashboard/myClass'>MyClasses</NavLink ></li>
                                     

                                    </>) : <>
                                        <li><NavLink to='/mySectionClass'>MySection Class</NavLink ></li>
                                        <li><NavLink to='/menu'> My Enroll Class</NavLink ></li>
                                        <li><NavLink to='/menu'> Payment History</NavLink ></li>
                                       

                                    </>
                        }
                         <li><NavLink to='/'>Home</NavLink ></li>

                    </ul>

                </div>
            </div>



        </>
    );
};

export default Dashboard;