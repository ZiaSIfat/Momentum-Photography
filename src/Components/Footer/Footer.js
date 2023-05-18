import React from 'react';
import './Footer.css';
import logo from '../../Images/logo (1).png';
import { IoCallSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";


const Footer = () => {
    return (
        <div>
            <div className=' footer-div mt-3'>
                <div className='container footer-section w-75'>
                    <div className='mt-4'>
                        <img className='logo-pic' src={logo} alt="" />
                        <br />
                        <span>MOMENTUM PHOTOGRAPHY</span>
                    </div>
                    <div className='mt-5'>
                        <h3>Chittagong Office</h3>
                        <p><MdLocationOn className='icon' /> House #12, Road #02 , Nandan Kanan , DC Hill , Chattogram</p>
                        <p><GrMail className='icon' />  dreamweaverphotography.bd@gmail.com</p>
                        <p><IoCallSharp className='icon' /> 3433434232</p>
                    </div>

                </div>
                <div style={{ height: '1px' }} className='bg-white'></div>
                <div className='footer mt-5'>
                    <div>
                        <span className='me-5 copy'>Copyright @2023. All rights reserved by momentumphotography.com</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;