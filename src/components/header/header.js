import React from 'react';
import {Link} from "react-router-dom";

import './_header.scss';

const Header = (props) => {
    return (
        <>
            <header className="img">
                <div className="bg-blue">
                    <div className="container">
                        <div className="header">
                            <div className="header__intro">
                                <div className="line-white"></div>
                                <p>{ props.title }</p>
                                <div className="line-white"></div>
                            </div>
                            <div className="header__title">
                                <h2>Lorem ipsum, dolor sit amet  </h2>
                                <h1>consectetur adipisic</h1>
                                <Link to="#" onClick={() => { window.open('','_blank','nofollow') }} className="btn-outline white">Conoce nuestros servicios</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;