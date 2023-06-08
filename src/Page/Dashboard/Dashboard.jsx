import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaHome, FaCalendarAlt, FaBars, FaShoppingBag,  FaBook, FaUser } from 'react-icons/fa';
// import adminUsers from '../hooks/adminUsers';
const Dashboard = () => {
    // const [isAdmin] = adminUsers()
    const isAdmin = true;
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
                                <>
                                    <li><NavLink to='/dashboard/userAdmin'><FaHome></FaHome>Admin Home</NavLink ></li>
                                    <li><NavLink to='/dashboard/addClasses'> Add Classes</NavLink ></li>
                                    <li><NavLink to='/dashboard/manageItems' ><FaWallet></FaWallet> Mange Item</NavLink ></li>
                                    <li><NavLink to='/dashboard/history' ><FaBook></FaBook> Mange Booking</NavLink ></li>
                                    <li><NavLink to='/dashboard/allUsers' ><FaUser></FaUser> All Users</NavLink ></li>

                                </> :


                                <>
                                    <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> Home</NavLink ></li>
                                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink ></li>
                                    <li><NavLink to='/dashboard/history' ><FaWallet></FaWallet> Payment</NavLink ></li>
                                    <li>


                                        <NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>My Cart
                                        </NavLink >
                                    </li>
                                </>
                        }


                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome> Home</NavLink ></li>
                        <li><NavLink to='/menu'><FaBars></FaBars> Our Menu</NavLink ></li>
                        <li><NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> Order shop</NavLink ></li>


                    </ul>

                </div>
            </div>



        </>
    );
};

export default Dashboard;