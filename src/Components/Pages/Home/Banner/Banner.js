import React from 'react';
import banner from '../../../../images/baner-one.jpg';
import './Banner.css';

const background = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    height: '500px',
    position: 'reletive'
}
const Banner = () => {
    return (
        <div className="d-flex align-items-center text-center home-banner" style={background}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="w-75 m-auto">
                            <div className="banner">
                                <h1>Explore Collections</h1>
                                <p style={{ color: 'rgb(227 95 1)' }}>Find Bicycle Adventures. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results and Answers. Types: Best Results, Explore Now, New Sources, Best in Search</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;