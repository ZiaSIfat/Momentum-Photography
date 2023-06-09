
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import signup from '../../Images/signup.png'
import './SignUp.css';

const SignUp = () => {

    const [name, SetName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handleNameBlur = e => {
        SetName(e.target.value);
    }

    const handlePassBlur = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPass = e => {
        setConfirmPass(e.target.value);
    }

    const handleSignUp = e => {
        e.preventDefault()
        if (password !== confirmPass) {
            setError("Passwords didn't matched");
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                navigate(from)
            })
            .catch(error =>
                console.log(error.message)
            )

    }

    if (user) {
        navigate(from);
    }

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className='container signup-page'>
                <div>
                    <img className='signup-pic' src={signup} alt="" />
                </div>
                <div className='signup-form mb-5'>
                    <div>
                        <h1 className='title mt-4'>SignUp</h1>
                        <form onSubmit={handleSignUp}>
                            <input onBlur={handleNameBlur} type="text" placeholder='Name' required />
                            <br />
                            <input onBlur={handleEmailBlur} type="email" name='email' placeholder='Email' required />
                            <br />
                            <input onBlur={handlePassBlur} type="password" name="Password" id="" placeholder='Password' required />
                            <br />
                            <input onBlur={handleConfirmPass} type="password" name="Password" id="" placeholder='Confirm Password' required />
                            <br />
                            <input type="number" placeholder='Phone' />
                            <br />
                            <button className='submit-btn'>SignUp</button>
                            <p className='text-danger'>{error}</p>
                        </form>
                        <p className='text-white mb-4'>Already have an account? <Link className='signup' to='/login'>Please Login</Link></p>
                        <p>{error?.message}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignUp;