import React from 'react';

import "./about-us.css";

const listItem = (props) => {

    return (
        <>
            <li>
                <figure>
                    <img src={ props.img } alt={ props.alt } />
                </figure>
                <p>{ props.description }</p>
            </li>
        </>
    );
};

export default listItem;