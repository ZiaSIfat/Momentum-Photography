import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className='container login-form'>
                <div>
                    <h1 className='login-title'>Login</h1>
                    <form >
                        <input type="email" name="email" id="" placeholder='Email' required />
                        <br />
                        <input type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        <button className='submit-btn'>Login</button>
                    </form>
                    <p className='navigate'>Dont have an account? <Link className='login' to='/signup'>Please Signup</Link></p>
                    {/* <p>{error?.message}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Login;