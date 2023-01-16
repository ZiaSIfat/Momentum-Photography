import React from 'react';
import './Title.css';
import logo from '../../Images/logo (1).png';

const Title = () => {
    return (
        <div>
            <img className='title-logo' src={logo} alt="" />
            <p className='text-white'>Momentum Photography</p>
        </div>
    );
};

export default Title;