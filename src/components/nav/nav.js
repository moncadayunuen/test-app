import React, { useState } from 'react';
import {Link} from "react-router-dom";

import logo from '../../assets/logo-test.webp';

 const Nav = () => {

     const [navbarOpen, setNavbarOpen] = useState(false)
     const logo_alt = 'Logo Test';

     const handleToggle = () => {
         setNavbarOpen(!navbarOpen)
     }

    return (
        <>
            <nav>
                <div className="nav-info">
                    <div className="nav-info">
                            <div className="nav-info__personal">
                                <Link to="#" onClick={() => { window.open('tel:9933524257','_blank','nofollow') }}>
                                    <svg width="20" height="20" viewBox="0 0 20 20">
                                        <path id="path" d="M413.6,80.256a16.709,16.709,0,0,0,7.333,7.333l2.445-2.444a.884.884,0,0,1,1.111-.222,11.622,11.622,0,0,0,4,.667A1.139,1.139,0,0,1,429.6,86.7v3.889a1.139,1.139,0,0,1-1.111,1.111A18.968,18.968,0,0,1,409.6,72.811a1.139,1.139,0,0,1,1.111-1.111H414.6a1.139,1.139,0,0,1,1.111,1.111,12.583,12.583,0,0,0,.667,4,1.214,1.214,0,0,1-.222,1.111Z" transform="translate(-409.6 -71.7)" fill="#ffffff"/>
                                    </svg>
                                    (993) 3524257
                                </Link>
                                <Link to="#" onClick={() => { window.open('mailto:atencionaclientes@wregister.com','_blank','nofollow') }}>
                                    <svg width="20" height="15" viewBox="0 0 20 15">
                                        <path id="envelope-regular" d="M18.125,64H1.875A1.875,1.875,0,0,0,0,65.875v11.25A1.875,1.875,0,0,0,1.875,79h16.25A1.875,1.875,0,0,0,20,77.125V65.875A1.875,1.875,0,0,0,18.125,64Zm0,1.875v1.594c-.876.713-2.272,1.822-5.257,4.16-.658.517-1.961,1.761-2.868,1.746-.907.015-2.21-1.229-2.868-1.746-2.985-2.337-4.381-3.446-5.257-4.16V65.875ZM1.875,77.125v-7.25c.9.713,2.164,1.713,4.1,3.228.854.672,2.349,2.156,4.026,2.147,1.669.009,3.145-1.453,4.026-2.146,1.935-1.515,3.2-2.516,4.1-3.229v7.25Z" transform="translate(0 -64)" fill="#ffffff"/>
                                    </svg>
                                    atencionaclientes@wregister.com
                                </Link>
                            </div>
                            <div className="nav-info__courses">
                                <Link to="#" onClick={() => { window.open('','_blank','nofollow') }}>Próximos Cursos</Link>
                                <Link to="#" onClick={() => { window.open('','_blank','nofollow') }}>Web mail</Link>
                            </div>
                        </div>
                </div>
                <div className="main-menu">
                        <div className="main-menu__burger">
                            <button className={`btn-burger ${navbarOpen ? "show-menu" : ""}`} onClick={handleToggle}>
                                <div className="line-btn"></div>
                                <div className="line-btn"></div>
                                <div className="line-btn"></div>
                            </button>
                        </div>
                        <div className="main-menu__links">
                            <Link to="/"><img src={logo} alt={logo_alt} /></Link>
                            <ul className={`${navbarOpen ? "show-menu" : ""}`}>
                                <li>
                                    <Link to="/">Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/">Nosotros</Link>
                                </li>
                                <li>
                                    <Link to="/contacto">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main-menu__btn">
                            <button className="btn primary">Cotizar Ahora</button>
                        </div>
                    </div>
            </nav>
        </>
    );
};

export default Nav;