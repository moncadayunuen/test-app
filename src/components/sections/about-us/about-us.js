import React from 'react';
import ListItem from "./list-item";

import img1 from '../../../assets/sobre-nosotros-01.webp';
import img2 from '../../../assets/sobre-nosotros-02.webp';
import img3 from '../../../assets/sobre-nosotros-03.webp';
import img4 from '../../../assets/sobre-nosotros-04.webp';
import img5 from '../../../assets/sobre-nosotros-05.webp';

const aboutUs = (props) => {

    const img1_info = '';
    const img2_info = '';
    const img3_info = '';
    const img4_info = '';
    const img5_info = '';

    return (
        <section>
            <div className="container">
                <div className="section-about-us">
                    <article>
                        <div className="section-about-us__title">
                            <div className="line dark"></div>
                            <p>{ props.title }</p>
                            <div className="line dark"></div>
                        </div>
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing<br /> elit. Est dignissimos consequatur doloribus</h2>
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dignissimos <br />consequatur doloribus odio nam, ad fugiat deleniti modi iure, explicabo <br />doloremque distinctio similique, possimus.</h3>
                    </article>
                    <article>
                        <ul className="section-about-us__list-1">
                            <ListItem img={img1} alt={img1_info} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                            <ListItem img={img2} alt={img2_info} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                            <ListItem img={img3} alt={img3_info} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                        </ul>
                        <ul className="section-about-us__list-2">
                            <ListItem img={img4} alt={img4_info} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                            <ListItem img={img5} alt={img5_info} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default aboutUs;