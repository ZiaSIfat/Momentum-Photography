import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { ImGoogle3 } from "react-icons/im";






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

    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

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

    const handleGoogle = () => {
        signInWithGoogle();
    }

    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast("Sent Email")
    }

    if (user || user1) {
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
            <div className='d-flex align-items-center'>
                <div className='line w-50'></div>
                <p className='text-white mt-2 px-2'>or</p>
                <div className='line w-50'></div>
            </div>
            <div >
                <button className='submit-btn'><SiFacebook className='me-2 mb-1' />Facebook Login</button>
            </div>
            <div>
                <button onClick={handleGoogle} className='submit-btn'><ImGoogle3 className='me-2 mb-1' /> Google Login</button>
            </div>
            <div>
                <button className='submit-btn'><VscGithub className='me-2 mb-1' />Github Login</button>
            </div>
        </div>
    );
};

export default Login;