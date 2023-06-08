import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiFacebook } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { ImGoogle3 } from "react-icons/im";
import pic from "../../Images/login.png";






const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';




    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error

    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, error2] = useSignInWithGithub(auth);
    const [signInWithFacebook, user3, error3] = useSignInWithFacebook(auth);

    const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(auth);



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

    const handleGithub = () => {
        signInWithGithub();
    }

    const handleFacebook = () => {
        signInWithFacebook();
    }

    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast("Sent Email")
    }

    if (user || user1 || user2 || user3) {
        navigate(from);
    }



    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container login-page'>
            <div>
                <img className='login-pic' src={pic} alt="" />
            </div>
            <div className='container login-form mb-5'>
                <div>
                    <h1 className='login-title mt-4'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required />
                        <br />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        <button className='submit-btn'>Login</button>
                    </form>
                    <p className='text-danger'>{error?.message || error1?.message || error2?.message || error3?.message}</p>
                    <p className='text-white'>Dont have an account? <Link state={location.state} className='login' to='/signup'>Please Signup</Link></p>
                    <p className='text-white'>Forget password?<button className="btn btn-link reset-btn" onClick={resetPassword} >Reset Password</button> </p>
                    <ToastContainer />
                    <div className='d-flex align-items-center'>
                        <div className='line w-50'></div>
                        <p className='text-white mt-2 px-2'>or</p>
                        <div className='line w-50'></div>
                    </div>
                    <div >
                        <button onClick={handleFacebook} className='submit-btn'><SiFacebook className='me-2 mb-1' />Facebook Login</button>
                    </div>
                    <div>
                        <button onClick={handleGoogle} className='submit-btn'><ImGoogle3 className='me-2 mb-1' /> Google Login</button>
                    </div>
                    <div className='mb-4'>
                        <button onClick={handleGithub} className='submit-btn'><VscGithub className='me-2 mb-1' />Github Login</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;                                                                                                          