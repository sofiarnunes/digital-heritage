import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/NavBar';
import { Routes, Route, Navigate }from 'react-router-dom';
import { BrowserRouter }from 'react-router-dom';
import {createBrowserHistory} from 'history';
import About from './Components/About/About';
import HomePage from './Components/Homepage/HomePage';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';
import NavHamb from './Components/Navbar/NavHamb';

function App() {
  const history = createBrowserHistory({});

  const [nav, setNav] = useState()

  useEffect(() => {
    if(window.innerWidth > 480){
      setNav('row')
    } else if(window.innerWidth <= 480){
      setNav('hamb')
    }
  }, [setNav, window.innerWidth])

  return (
    <BrowserRouter history={history}>
      <div>
        {nav === 'row' ? <NavBar/> : <NavHamb/>}
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<HomePage  history={history} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
