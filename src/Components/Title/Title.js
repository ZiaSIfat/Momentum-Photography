import React from 'react';
import './Title.css';
import logo from '../../Images/logo (1).png';
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <div>
            <Link to='/'>
                <img className='title-logo' src={logo} alt="" />
            </Link>
            <p className='text-white'>Momentum Photography</p>
        </div>
    );
};

export default Title;