import React from 'react';
import '../css/styles.css';
import Nav from "../components/nav/nav";
import OurExperience from "../components/sections/our-experience/our-experience";
import Footer from "../components/footer/footer";
import ContactForm from "../components/contact-form/contact-form";
import HeaderContact from "../components/header-contact/header-contact";

export default function contact () {
    return (
        <>
            <Nav />
            <main>
                <HeaderContact title="Información" />
                <ContactForm />
                <OurExperience />
            </main>
            <Footer />
        </>
    );
};