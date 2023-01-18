import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description1, description2, description3, description4 } = service;

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    }

    return (
        <div className='card-body'>
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
            <button onClick={handleCheckout} className='mt-3 checkout-btn'>Checkout</button>
        </div>



    );
};

export default Service;