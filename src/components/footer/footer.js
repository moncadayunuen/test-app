import React from 'react';
import {Link} from "react-router-dom";

import logo from '../../assets/logo-test.webp';
import './footer.css';

const footer = () => {

    const alt_logo = 'Logo Test';

    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer__logo">
                        <img src={logo} alt={alt_logo} />
                    </div>
                    <div className="footer__text">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dignissimos consequatu.</p>
                    </div>
                    <div className="footer__info">
                        <ul>
                            <li>
                                <Link to="#" onClick={() => { window.open('mailto:atencionaclientes@test.com','_blank','nofollow') }} rel="nofollow" >atencionaclientes@test.com</Link>
                            </li>
                            <li>
                                <Link to="#" onClick={() => { window.open('tel:9933524257','_blank','nofollow') }} target="_blank" rel="nofollow">(993) 3524257</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="container">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                </div>
            </div>
        </footer>
    );
};

export default footer;