import React from 'react';
import Header from '../Page/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Page/Home/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>


            {noHeaderFooter || <Header></Header>}
            <div className='min-h-[calc(100vh-250px)]'>
                <Outlet ></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;