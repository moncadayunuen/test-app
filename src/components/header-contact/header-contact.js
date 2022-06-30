import React from 'react';

const HeaderContact = (props) => {
    return (
        <>
            <header className="img-header-contact">
                <div className="bg-blue">
                    <div className="container">
                        <div className="header-contact">
                            <div className="header-contact__intro">
                                <div className="header-contact__subtitle">
                                    <div className="line-white"></div>
                                    <h2>{ props.title }</h2>
                                    <div className="line-white"></div>
                                </div>
                            </div>
                            <div className="header-contact__title">
                                <h1>Contacto</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dignissimos consequatur doloribus odio nam, ad fugiat deleniti modi iure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderContact;