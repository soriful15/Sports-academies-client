import React from 'react';
import logo from '../../../assets/logo/logo.jpg'
import { FaPhone, FaMapMarkerAlt, } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-slate-100  text-base-content mt-10">
                <div>
                    <img src={logo} className='rounded-full w-24' alt="" />
                    <p> <span className='lg:text-2xl text-violet-600'>Sports academies</span><br /> ShoniAkhra, Dhaka-1205 Bangladesh</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">sport club</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title"> Contact</span>
                    <a className="link link-hover">Email: SportsAcademies@gmail.com</a>
                    <a className="link link-hover flex items-center"> <FaPhone></FaPhone>+880001111 </a>
                    <a className="link link-hover flex items-center"><FaMapMarkerAlt></FaMapMarkerAlt>Dhaka,BD</a>

                </div>

                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>


            </footer>


            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Sports Academies Club</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;