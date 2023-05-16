
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';

const SignUp = () => {

    const [name, SetName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

    // const handleEmailBlur = e => {
    //     setEmail(e.target.value);
    // }

    // const handleNameBlur = e => {
    //     SetName(e.target.value);
    // }

    // const handlePassBlur = e => {
    //     setPassword(e.target.value);
    // }

    // const handleConfirmPass = e => {
    //     setConfirmPass(e.target.value);
    // }

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(form)
    }

    if (user) {
        navigate('/');
    }

    return (
        <div>
            <div className='container'>
                <div className='signup-form'>
                    <div>
                        <h1 className='title'>SignUp</h1>
                        <form onSubmit={handleSignUp}>
                            <input type="text" placeholder='Name' name='name' required />
                            <br />
                            <input type="email" name='email' placeholder='Email' required />
                            <br />
                            <input type="password" name="Password" id="" placeholder='Password' required />
                            <br />
                            <input type="password" name="Password" id="" placeholder='Confirm Password' required />
                            <br />
                            <input type="number" placeholder='Phone' />
                            <br />
                            <button className='submit-btn'>SignUp</button>
                        </form>
                        <p className='navigate'>Already have an account? <Link className='signup' to='/login'>Please Login</Link></p>
                        <p>{error?.message}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignUp;