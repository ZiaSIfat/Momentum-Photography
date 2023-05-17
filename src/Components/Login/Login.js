import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { id } = useParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state.pathname || "/";



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error

    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);



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

    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast("Sent Email")
    }

    if (user) {
        navigate(`/checkout/${id}`);
    }


    if (loading) {
        return <Loading></Loading>
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
                    <p className='navigate'>Forget password?<button className="btn btn-link reset-btn" onClick={resetPassword} >Reset Password</button> </p>
                    <p className='text-danger'>{error?.message}</p>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;