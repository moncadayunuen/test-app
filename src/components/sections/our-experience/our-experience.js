import React from 'react';

import img1 from '../../../assets/nuestra-experiencia.webp';

const ourExperience = () => {

    const img1_info = '';

    return (
        <>
            <section className="bg-gradient-blue">
                <div className="container">
                    <div className="section-our-experience">
                        <article>
                            <figure>
                                <img src={img1} alt={img1_info} />
                            </figure>
                        </article>
                        <article>
                            <div className="section-our-experience__title">
                                <div className="line white"></div>
                                <h2>Nuestra Experiencia</h2>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dignissimos consequatur doloribus odio nam, ad fugiat deleniti modi iure, explicabo doloremque distinctio similique, possimus commodi saepe eaque omnis sint.</p>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <g id="Group_1" data-name="Group 1" transform="translate(-1772 -19)">
                                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="12.5" cy="12.5" r="12.5" transform="translate(1772 19)" fill="#fff"/>
                                            <path id="path" d="M573.307,1048.6l1.193,1.114-9.545,9.545L560.5,1054.8l1.193-1.114,3.341,3.341Z" transform="translate(1217 -1022.1)" fill="#333" stroke="#333" stroke-width="1"/>
                                        </g>
                                    </svg>
                                    <p>Maquinaria y Equipo</p>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <g id="Group_1" data-name="Group 1" transform="translate(-1772 -19)">
                                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="12.5" cy="12.5" r="12.5" transform="translate(1772 19)" fill="#fff"/>
                                            <path id="path" d="M573.307,1048.6l1.193,1.114-9.545,9.545L560.5,1054.8l1.193-1.114,3.341,3.341Z" transform="translate(1217 -1022.1)" fill="#333" stroke="#333" stroke-width="1"/>
                                        </g>
                                    </svg>
                                    <p>Servicios de Ingenieria</p>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <g id="Group_1" data-name="Group 1" transform="translate(-1772 -19)">
                                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="12.5" cy="12.5" r="12.5" transform="translate(1772 19)" fill="#fff"/>
                                            <path id="path" d="M573.307,1048.6l1.193,1.114-9.545,9.545L560.5,1054.8l1.193-1.114,3.341,3.341Z" transform="translate(1217 -1022.1)" fill="#333" stroke="#333" stroke-width="1"/>
                                        </g>
                                    </svg>
                                    <p>Educación</p>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ourExperience;