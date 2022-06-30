import React from 'react';
import {Link} from "react-router-dom";

import img1 from '../../../assets/que-hacemos-01.webp';
import img2 from '../../../assets/que-hacemos-02.webp';
import img3 from '../../../assets/que-hacemos-circulos.webp';

const whatWeDo = (props) => {

    const img1_info = '';
    const img2_info = '';
    const img3_info = '';

    return (
        <>
            <section>
                <div className="container">
                    <article className="section-what-we-do__info-contact">
                        <ul>
                            <li>
                                <div className="location">
                                    <svg id="location" width="15" height="21.17" viewBox="0 0 15 21.17">
                                        <path id="path" d="M155.047,107.628a6.984,6.984,0,0,1,5.213-2.128,7.266,7.266,0,0,1,7.34,7.34,9.066,9.066,0,0,1-.745,3.511,24.612,24.612,0,0,1-1.915,3.723c-.745,1.17-1.489,2.234-2.128,3.3-.745,1.064-1.277,1.809-1.809,2.447l-.851.851c-.213-.213-.426-.532-.851-.957-.319-.426-.957-1.17-1.809-2.34s-1.6-2.234-2.234-3.3a28.658,28.658,0,0,1-1.809-3.617,10.356,10.356,0,0,1-.851-3.617A8.556,8.556,0,0,1,155.047,107.628Zm3.4,7.128a2.834,2.834,0,1,0-.745-1.915A2.564,2.564,0,0,0,158.451,114.755Z" transform="translate(-152.6 -105.5)" fill="#18236c"/>
                                    </svg>
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. CDMX</p>
                            </li>
                            <li>
                                <svg width="20" height="15" viewBox="0 0 20 15">
                                    <path id="envelope-regular" d="M18.125,64H1.875A1.875,1.875,0,0,0,0,65.875v11.25A1.875,1.875,0,0,0,1.875,79h16.25A1.875,1.875,0,0,0,20,77.125V65.875A1.875,1.875,0,0,0,18.125,64Zm0,1.875v1.594c-.876.713-2.272,1.822-5.257,4.16-.658.517-1.961,1.761-2.868,1.746-.907.015-2.21-1.229-2.868-1.746-2.985-2.337-4.381-3.446-5.257-4.16V65.875ZM1.875,77.125v-7.25c.9.713,2.164,1.713,4.1,3.228.854.672,2.349,2.156,4.026,2.147,1.669.009,3.145-1.453,4.026-2.146,1.935-1.515,3.2-2.516,4.1-3.229v7.25Z" transform="translate(0 -64)" fill="#18236c"/>
                                </svg>
                                <Link to="#" onClick={() => { window.open('mailto:atencionaclientes@test.com','_blank','nofollow') }}>atencionaclientes@test.com</Link>
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                    <path id="path" d="M413.6,80.256a16.709,16.709,0,0,0,7.333,7.333l2.445-2.444a.884.884,0,0,1,1.111-.222,11.622,11.622,0,0,0,4,.667A1.139,1.139,0,0,1,429.6,86.7v3.889a1.139,1.139,0,0,1-1.111,1.111A18.968,18.968,0,0,1,409.6,72.811a1.139,1.139,0,0,1,1.111-1.111H414.6a1.139,1.139,0,0,1,1.111,1.111,12.583,12.583,0,0,0,.667,4,1.214,1.214,0,0,1-.222,1.111Z" transform="translate(-409.6 -71.7)" fill="#18236c"/>
                                </svg>
                                <div className="section-what-we-do__links">
                                    <Link to="#" onClick={() => { window.open('tel:9933524257','_blank','nofollow') }}>(993) 3524257</Link>
                                    <p>Lunes a Viernes de 8:00 a 17:00 hrs.</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <article className="section-what-we-do">
                        <section className="section-what-we-do__info">
                            <div className="section-what-we-do__info-subtitle">
                                <div className="line-dark"></div>
                                <h2>{ props.title }</h2>
                                <div className="line-dark"></div>
                            </div>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit d fugiat deleniti modi iure, explicabo doloremque </h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dignissimos consequatur doloribus odio nam, ad fugiat deleniti modi iure, explicabo doloremque distinctio similique.</p>
                            <button type="button" className="btn secondary">Habla con nuestros expertos</button>
                        </section>
                        <section className="section-what-we-do__images">
                            <div className="section-what-we-do__container-img">
                                <figure className="section-what-we-do__img circles">
                                    <img src={img3} alt={img3_info} />
                                </figure>
                                <figure className="section-what-we-do__img">
                                    <img src={img1} alt={img1_info} />
                                </figure>
                            </div>
                            <figure className="section-what-we-do__img single">
                                <img src={img2} alt={img2_info} />
                            </figure>
                        </section>
                    </article>
                </div>
            </section>
        </>
    );
};

export default whatWeDo;