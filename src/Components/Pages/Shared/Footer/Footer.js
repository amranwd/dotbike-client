import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerLogo from '../../../../images/logo.png';

const Footer = () => {
    return (
        <footer className="footer-area footer--light">
            <div className="mini-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-text">
                                <img src={footerLogo} alt="dotbike" className="img-fluid mb-3" />
                                <p>© 2021
                                    <Link to="/"> dotBike</Link>. All rights reserved.Created by Md Amran Miah

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;