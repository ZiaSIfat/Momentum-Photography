import React from 'react';
import img from "../../Images/cat.png";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='error-div container mb-5 mt-5'>
            <img className='' src={img} alt="" />
            <h1 className='text-white'>Page Not Found</h1>
        </div>
    );
};

export default NotFound;