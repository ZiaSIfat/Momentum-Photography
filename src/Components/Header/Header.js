import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (

        <div>
            <nav className='navigation'>
                <Link className='navbar' to='/'>Home</Link>
                <Link className='navbar' to='/signup'>SignUp</Link>
                {
                    user ?
                        <button className='signout-btn' onClick={handleSignOut}>SignOut</button>
                        :
                        <Link className='navbar' to='/login'>Login</Link>
                }
            </nav>


        </div>
    );
};

export default Header;