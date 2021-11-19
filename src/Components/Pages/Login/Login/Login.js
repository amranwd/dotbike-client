import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import loginBg from '../../../../images/login.jpg';
import googleSign from '../../../../images/google.png';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col mb-5 text-center">
                    <h1>Please Login First</h1>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <form onSubmit={handleLoginSubmit}>
                        <input type="email" name="email" placeholder="Type Email" onChange={handleOnChange} className="mb-3 form-control form-control-lg" />
                        <input type="password" name="password" placeholder="Type Password" onChange={handleOnChange} className="mb-3 form-control form-control-lg" />
                        <input className="btn btn-lg btn-bg" type="submit" value="Login" />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/registration">
                            <Button style={{ color: 'rgb(56 90 100)', fontSize: '17px', fontWeight: '500' }} variant="text">New User? Please Register</Button>
                        </NavLink>
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
                    </form>
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

export default Login;