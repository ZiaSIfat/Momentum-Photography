import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { Toast } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';


import Swal from 'sweetalert2';


const Checkout = () => {
    const { checkoutId } = useParams();
    const [details, setDetails] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState(0);
    const [user, loading] = useAuthState(auth);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => {
                const details = data.filter(item => item.id === Number(checkoutId));
                setDetails(details);
            }, [checkoutId])
    })

    const handleNameBlur = e => {
        setName(e.target.value);
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handleAddressBlur = e => {
        setAddress(e.target.value);
    }

    const handlePhoneBlur = e => {
        setPhone(e.target.value);
    }



    const handleSubmit = () => {
        Swal.fire('Thank you for  Booking')
        navigate("/");
    }


    return (
        <div>
            <div className='signup-form'>
                <div>
                    <h5 className='title'>Package: {details[0]?.name}</h5>
                    <h5 className='title'>Price: {details[0]?.price}</h5>
                    <form >
                        <input onBlur={handleNameBlur} type="text" placeholder='Name' required />
                        <br />
                        <input onBlur={handleEmailBlur} type="email" name='email' placeholder='Email' required />
                        <br />
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" placeholder='Address' />
                        <br />
                        <input onBlur={handlePhoneBlur} type="number" placeholder='Phone' />
                        <br />
                        <button onClick={handleSubmit} className='submit-btn'>Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;