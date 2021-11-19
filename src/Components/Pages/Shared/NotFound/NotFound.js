import React from 'react';
import notfound from '../../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 text-left">
                    <h1 className="mb-3">404 Not Found</h1>
                    <h6 className="mb-4">It seems that we found nothing for you. you are in wrong query and please go back home</h6>
                    <button className="btn btn-lg btn-bg">Go Back Home</button>
                </div>
                <div className="col-lg-7">
                    <img src={notfound} alt="404" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;