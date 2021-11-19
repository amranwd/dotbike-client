import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import profile from '../../../../images/profile.png';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <img style={{ width: '170px', marginBottom: '20px' }} src={profile} alt="user" />
                    <h3 className="mb-3">Name: {user.displayName}</h3>
                    <h6>Email: {user.email}</h6>
                </div>
            </div>
        </div>
    );
};

export default Profile;