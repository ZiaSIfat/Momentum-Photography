import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/checkout');
    }

    return (
        <div className='container'>
            <div className='container login-form'>
                <div>
                    <h1 className='login-title'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required />
                        <br />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        <button className='submit-btn'>Login</button>
                    </form>
                    <p className='navigate'>Dont have an account? <Link className='login' to='/signup'>Please Signup</Link></p>
                    <p className='text-danger'>{error?.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;