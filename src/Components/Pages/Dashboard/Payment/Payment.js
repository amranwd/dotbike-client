import React from 'react';
import { Alert } from 'react-bootstrap';

const Payment = () => {
    return (
        <div>
            <Alert style={{ fontSize: '24px' }} className="p-5 text-center" variant="danger">
                <strong>Sorry!</strong> No Payment Method Available Right Now!
            </Alert>
        </div>
    );
};

export default Payment;