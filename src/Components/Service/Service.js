import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description1, description2, description3, description4, id } = service;

    const navigate = useNavigate();

    const handleCheckout = id => {
        navigate(`/checkout/${id}`);
    }



    return (

        <div className='card-div mb-4'>
            <h1 className='mt-3'>{name}</h1>
            <hr className='text-white' />
            <h3>Price: {price} tk</h3>
            <hr className='text-white' />
            <p>{description1}</p>
            <hr className='text-white' />
            <p>{description2}</p>
            <hr className='text-white' />
            <p>{description3}</p>
            <hr className='text-white' />
            <p>{description4}</p>
            <button onClick={() => handleCheckout(id)} className='mt-3 checkout-btn'>Book Now</button>
        </div>


    );
};

export default Service;