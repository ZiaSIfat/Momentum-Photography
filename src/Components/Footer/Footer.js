import React from 'react';
import './Footer.css';
import logo from '../../Images/logo (1).png';

const Footer = () => {
    return (
        <div>
            <div className=' footer-div mt-3'>
                <div className='container footer-section'>
                    <div className='mt-4'>
                        <img className='logo-pic' src={logo} alt="" />
                        <br />
                        <span>MOMENTUM PHOTOGRAPHY</span>
                    </div>
                    <div className='mt-5 d-flex'>
                        <div className='me-5'>
                            <span>About Online Food</span>
                            <br />
                            <span>Read our blog</span>
                            <br />
                            <span>Signup to deliver</span>
                            <br />
                            <span>Add your resturant</span>
                        </div>
                        <div className='ms-3'>
                            <span>Get help</span>
                            <br />
                            <span>Read FAQs</span>
                            <br />
                            <span>View all cities</span>
                            <br />
                            <span>Resturants near me</span>
                        </div>
                    </div>
                </div>
                <div className='footer mt-5'>
                    <div>
                        <span className='me-5 copy'>Copyright @2022 onliine food</span>
                    </div>
                    <div>
                        <span className='me-5'>Privacy Policy</span>
                        <span className='me-5'>Terms of Use</span>
                        <span>Pricing</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;