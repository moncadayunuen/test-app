import React from 'react';
import {Link} from "react-router-dom";

import './documentation.css';

const documentation = () => {
    return (
        <>
          <section>
              <div className="container">
                  <div className="documentation">
                      <h2>Lorem ipsum, dolor sit amet consectetur </h2>
                      <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dignissimos <br /> consequatur doloribus odio nam, ad fugiat deleniti modi.</h3>
                      <Link to="#" rel="nofollow" className="btn primary">Documentación Pública</Link>
                  </div>
              </div>
          </section>
        </>
    );
};

export default documentation;