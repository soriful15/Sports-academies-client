import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { FaShoppingCart, FaWallet, FaHome, FaUserTie, FaUser } from 'react-icons/fa';
import { FaUserTie, FaUsers, FaWallet, FaHome, FaClipboardList } from 'react-icons/fa';
import { HiUserAdd } from "react-icons/hi";
import adminUsers from '../hooks/adminUsers';
import instructorsUsers from '../hooks/instructorsUsers';
import useAuth from '../hooks/useAuth';
const Dashboard = () => {
    const [isAdmin] = adminUsers()
    const [isInstructors] = instructorsUsers()
    const { user } = useAuth()
    // const isAdmin=true;
    // const isInstructors=false
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


                      
                        <div className="card   bg-base-100">
                            <figure className="px-10 pt-10">
                                <img src={user.photoURL} alt="Shoes" className="rounded-xl w-full" />
                            </figure>
                            <div className="card-body items-center text-center text-purple-700 font-bold">
                            <h2 className="">{user.displayName}</h2>
                                <p>{user.email}</p>
                            </div>
                        </div>


                        {
                            isAdmin ?
                                (<>

                                    <li><NavLink to='/dashboard/mangeClasses'><FaUserTie></FaUserTie> Mange Classes</NavLink ></li>
                                    <li><NavLink to='/dashboard/mangeUsers'><FaUsers></FaUsers> Mange Users</NavLink ></li>


                                </>) : isInstructors ?
                                    (<>
                                        <li><NavLink to='/dashboard/addClasses'><HiUserAdd></HiUserAdd> Add Classes</NavLink ></li>
                                        <li><NavLink to='/dashboard/myClass'><FaClipboardList></FaClipboardList> MyClasses</NavLink ></li>


                                    </>) : <>
                                        <li><NavLink to='/dashboard/mySelectedClass'>My Select Class</NavLink ></li>
                                        <li><NavLink to='/dashboard/enrollClass'> My Enroll Class</NavLink ></li>
                                        <li><NavLink to='/dashboard/paymentHistory'><FaWallet></FaWallet> Payment History</NavLink ></li>


                                    </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/' ><FaHome></FaHome>Home</NavLink ></li>

                    </ul>

                </div>
            </div>



        </>
    );
};

export default Dashboard;