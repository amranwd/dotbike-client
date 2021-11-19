import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = { email };
        fetch('https://dotbike-server.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                } else {
                    alert('Opps! Admin Add Unsuccessfull!');
                }
            })


        e.preventDefault();
    }
    return (
        <div className="my-5 py-5">
            <form onSubmit={handleAdmin}>
                <div className="input-group">
                    <input type="email" onBlur={handleBlur} className="form-control form-control-lg" placeholder="Enter Admin Email" />
                    <span className="input-group-btn">
                        <button className="btn btn-lg" type="submit">Make Admin</button>
                    </span>
                </div>
            </form>
            {
                success && <Alert className="mb-5" variant="success">
                    Congratulations! Admin Created Successfully..
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;