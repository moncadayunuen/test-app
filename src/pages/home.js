import React from 'react';
import '../css/styles.css';

import Nav from '../components/nav/nav';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Documentation from "../components/sections/documentation/documentation";
import AboutUs from "../components/sections/about-us/about-us";
import WhatWeDo from "../components/sections/what-we-do/what-we-do";
import OurExperience from "../components/sections/our-experience/our-experience";

export default function home () {
    return (
        <>
            <Nav />
            <main>
                <Header title="Bienvenidos" />
                <WhatWeDo title="¿Qué hacemos?" />
                <AboutUs title="Acerca de Nosotros" />
                <OurExperience />
                <Documentation />
            </main>
            <Footer />
        </>
    );
};