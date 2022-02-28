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
import Services1 from './Components/Services/Services1';
import Projects from './Components/Projects/Projects';
import NavHamb from './Components/Navbar/NavHamb';
import Test from './Components/Test';
import SimpleFormat from './Components/Projects/SimpleFormat';
import ComplexFormat from './Components/Projects/ComplexFormat';
import SimpleFormatMobile from './Components/Projects/SimpleFormatMobile';
import ComplexFormatMobile from './Components/Projects/ComplexFormatMobite';

function App() {
  const history = createBrowserHistory({});

  const [nav, setNav] = useState()
  const [venus, setVenus] = useState()

  useEffect(() => {
    if(window.innerWidth >= 1001){
      setVenus('side')
    } else if(window.innerWidth < 1001 && window.innerWidth >= 768){
      setVenus('middle1')
    } else if(window.innerWidth < 768){
      setVenus('middle2')
    }
  }, [setVenus, window.innerWidth])

  useEffect(() => {
    if(window.innerWidth > 480){
      setNav('row')
    } else if(window.innerWidth <= 480){
      setNav('hamb')
    }
  }, [setNav, window.innerWidth])

  const[home, setHome] = useState();

  const homeTrue = () => {
    setHome(true)
  }
  const homeFalse = () => {
    setHome(false)
  }

  return (
    <BrowserRouter history={history}>
      <div>
        {nav === 'row' ? <NavBar/> : <NavHamb/>}
        {
          (home === true && venus === 'side') ?
          <div style={{position: 'absolute', top:'108vh', left: '50%', zIndex: '10', height: '90vh', overflow: 'hidden'}}>
            <Test />
          </div> 
          : (home === true && venus === 'middle1') ?
          <div style={{position: 'absolute', zIndex: '10', top:'150vh', left: '18%'}}>
            <Test/>
          </div > 
          : (home === true && venus === 'middle2') && 
          <div style={{position: 'absolute', top:'128vh', left: '50%', transform: 'translateX(-50%)', zIndex: '100', height: '55vh', width: '80%', overflow: 'hidden'}}>
            <Test/>
          </div> 

        }

        <Routes>
          {/* <Route exact path="/" element={<Navigate to="/home" />} /> */}
          <Route exact path="/" element={<HomePage  history={history} home={homeTrue} />} />
          <Route exact path="/about" element={<About home={homeFalse}/>} />
          <Route exact path="/projects" element={<Projects home={homeFalse}/>} />
          {nav === 'row' ?
            <Route path="/projects/virtual-restoration-roman-mural-painting" element={<SimpleFormat home={homeFalse}/>} />
            :
            <Route path="/projects/virtual-restoration-roman-mural-painting" element={<SimpleFormatMobile home={homeFalse}/>} />
          }
          {nav === 'row' ?
            <Route path="/projects/3D-modelling-casa-guerrero" element={<SimpleFormat home={homeFalse}/>} />
            :
            <Route path="/projects/3D-modelling-casa-guerrero" element={<SimpleFormatMobile home={homeFalse}/>} />
          }
          {nav === 'row' ?
            <Route path="/projects/virtual-restoration-egyptian-low-relief" element={<ComplexFormat home={homeFalse}/>} />
            :
            <Route path="/projects/virtual-restoration-egyptian-low-relief" element={<ComplexFormatMobile home={homeFalse}/>} />
          }
          {nav === 'row' ? 
            <Route path="/projects/digitization-3Dprinting-for-touch-collection" element={<ComplexFormat home={homeFalse}/>} />
          :
            <Route path="/projects/digitization-3Dprinting-for-touch-collection" element={<ComplexFormatMobile home={homeFalse}/>} />
          }

          {/* <Route exact path="/latest-projects" element={<LatestProjects home={homeFalse}/>} /> */}
          {venus === 'middle1' || venus === 'middle2'?
          <Route exact path="/services" element={<Services1 home={homeFalse}/>} />  
          :
          <Route exact path="/services" element={<Services home={homeFalse}/>} />
          }
          <Route exact path="/contact" element={<Contact home={homeFalse}/>} />

        </Routes>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
