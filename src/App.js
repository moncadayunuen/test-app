import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/home.js';
import Contact from './pages/contact.js';

import './styles/App.scss';

const App = () => {
  return (
      <>
          <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact path="/contacto" element={ <Contact /> } />
          </Routes>
      </>
  );
}

export default App;