import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import loginBg from '../../../../images/login.jpg';
import googleSign from '../../../../images/google.png';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegistrationSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col mb-5 text-center">
                    <h1>Please Register First</h1>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    {!isLoading && <form onSubmit={handleRegistrationSubmit}>
                        <input type="text" name="name" placeholder="Type Name" onBlur={handleOnBlur} className="mb-3 form-control form-control-lg" />
                        <input type="email" name="email" placeholder="Type Email" onBlur={handleOnBlur} className="mb-3 form-control form-control-lg" />
                        <input type="password" name="password" placeholder="Type Password" onBlur={handleOnBlur} className="mb-3 form-control form-control-lg" />
                        <input type="password" name="password2" placeholder="Re-Type Password" onBlur={handleOnBlur} className="mb-3 form-control form-control-lg" />
                        <input className="btn btn-lg btn-bg" type="submit" value="Register" />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button style={{ color: 'rgb(56 90 100)', fontSize: '17px', fontWeight: '500' }} variant="text">Already Registered ? Please Login</Button>
                        </NavLink>
                    </form>}
                    <div>
                        {isLoading && <div className="d-flex align-items-center justify-content-center">
                            <div className="spinner-grow text-warning" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        {user?.email && <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Login Successful</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>}
                        {authError && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>{authError}</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>}
                    </div>
                    <div className="mt-5 text-center">
                        <img className="login-google" src={googleSign} onClick={handleGoogleSignIn} alt="log in with google" />
                    </div>
                </div>
                <div className="col-lg-5">
                    <img src={loginBg} alt="Login png" />
                </div>
            </div>
        </div>
    );
};

export default Registration;