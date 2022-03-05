import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/NavBar';
import { Routes, Route }from 'react-router-dom';
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
import "swiper/css/bundle";

function App() {

  const history = createBrowserHistory({});

  const [nav, setNav] = useState()
  const [venus, setVenus] = useState()
  const [lang, setLang] = useState('pt')

  useEffect(() => {
    if(window.innerWidth >= 1001){
      setVenus('side')
    } else if(window.innerWidth < 1001 && window.innerWidth >= 768){
      setVenus('middle1')
    } else if(window.innerWidth < 768){
      setVenus('middle2')
    }
  }, [setVenus])

  useEffect(() => {
    if(window.innerWidth > 480){
      setNav('row')
    } else if(window.innerWidth <= 480){
      setNav('hamb')
    }
  }, [setNav])

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
        {nav === 'row' ? <NavBar lang={lang}/> : <NavHamb lang={lang}/>}

        {
          (home === true && venus === 'side') ?
          <div style={{position: 'absolute', top:'108vh', left: '50%', zIndex: '10', height: '90vh', overflow: 'hidden'}}>
            <Test />
          </div> 
          : (home === true && venus === 'middle1') ?
          <div style={{position: 'absolute', zIndex: '100', top:'1290px',  left: '50%', transform: 'translateX(-50%)', height: '60vh', width: '70%', overflow: 'hidden'}}>
            <Test/>
          </div > 
          : (home === true && venus === 'middle2') && 
          <div style={{position: 'absolute', top:'132vh', left: '50%', transform: 'translateX(-50%)', zIndex: '100', height: '420px', width: '80%', overflow: 'hidden'}}>
            <Test/>
          </div> 

        }
        {nav === 'hamb' ?
          <div style={{position: 'absolute', top: '1.1rem', right: '5rem', cursor: 'pointer', zIndex: '2000'}}>
            <p style={{fontSize: '14px'}}><span className={lang === 'en' ? 'en-active mr' : 'en mr'} onClick={() => setLang('en')}>EN</span> | <span className={lang === 'pt' ? 'pt-active ml' : 'pt ml'} onClick={() => setLang('pt')}>PT</span></p>
          </div>
        :
          <div style={{position: 'absolute', top: '2rem', right: '2rem', cursor: 'pointer', zIndex: '2000'}}>
            <p style={{fontSize: '14px'}}><span className={lang === 'en' ? 'en-active' : 'en'} onClick={() => setLang('en')}>EN</span> | <span className={lang === 'pt' ? 'pt-active mr' : 'pt mr'} onClick={() => setLang('pt')}>PT</span></p>
          </div>
        }
        

        {lang === 'en' ?
        <Routes>
        {/* <Route exact path="/" element={<Navigate to="/home" />} /> */}
        <Route exact path="/" element={<HomePage lang={lang} history={history} home={homeTrue} />} />
        <Route exact path="/about" element={<About lang={lang} home={homeFalse}/>} />
        <Route exact path="/projects" element={<Projects lang={lang} home={homeFalse}/>} />
        {nav === 'row' ?
          <Route path="/projects/virtual-restoration-roman-mural-painting" element={<SimpleFormat lang={lang} home={homeFalse}/>} />
          :
          <Route path="/projects/virtual-restoration-roman-mural-painting" element={<SimpleFormatMobile lang={lang} home={homeFalse}/>} />
        }
        {nav === 'row' ?
          <Route path="/projects/3D-modelling-casa-guerrero" element={<SimpleFormat lang={lang} home={homeFalse}/>} />
          :
          <Route path="/projects/3D-modelling-casa-guerrero" element={<SimpleFormatMobile lang={lang} home={homeFalse}/>} />
        }
        {nav === 'row' ?
          <Route path="/projects/virtual-restoration-egyptian-low-relief" element={<ComplexFormat lang={lang} home={homeFalse}/>} />
          :
          <Route path="/projects/virtual-restoration-egyptian-low-relief" element={<ComplexFormatMobile lang={lang} home={homeFalse}/>} />
        }
        {nav === 'row' ? 
          <Route path="/projects/digitization-3Dprinting-for-touch-collection" element={<ComplexFormat lang={lang} home={homeFalse}/>} />
        :
          <Route path="/projects/digitization-3Dprinting-for-touch-collection" element={<ComplexFormatMobile lang={lang} home={homeFalse}/>} />
        }

        {/* <Route exact path="/latest-projects" element={<LatestProjects home={homeFalse}/>} /> */}
        {venus === 'middle1' || venus === 'middle2'?
        <Route exact path="/services" element={<Services1 lang={lang} home={homeFalse}/>} />  
        :
        <Route exact path="/services" element={<Services lang={lang} home={homeFalse}/>} />
        }
        <Route exact path="/contact" element={<Contact lang={lang} home={homeFalse}/>} />

      </Routes>
      : 
      <Routes>
      {/* <Route exact path="/" element={<Navigate to="/home" />} /> */}
      <Route exact path="/" element={<HomePage lang={lang} history={history} home={homeTrue} />} />
      <Route exact path="/about" element={<About lang={lang} home={homeFalse}/>} />
      <Route exact path="/projects" element={<Projects lang={lang} home={homeFalse}/>} />
      {nav === 'row' ?
        <Route path="/projects/virtual-restoration-roman-mural-painting" element={<SimpleFormat lang={lang} home={homeFalse}/>} />
        :
        <Route path="/projects/virtual-restoration-roman-mural-painting" element={<SimpleFormatMobile lang={lang} home={homeFalse}/>} />
      }
      {nav === 'row' ?
        <Route path="/projects/3D-modelling-casa-guerrero" element={<SimpleFormat lang={lang} home={homeFalse}/>} />
        :
        <Route path="/projects/3D-modelling-casa-guerrero" element={<SimpleFormatMobile lang={lang} home={homeFalse}/>} />
      }
      {nav === 'row' ?
        <Route path="/projects/virtual-restoration-egyptian-low-relief" element={<ComplexFormat lang={lang} home={homeFalse}/>} />
        :
        <Route path="/projects/virtual-restoration-egyptian-low-relief" element={<ComplexFormatMobile lang={lang} home={homeFalse}/>} />
      }
      {nav === 'row' ? 
        <Route path="/projects/digitization-3Dprinting-for-touch-collection" element={<ComplexFormat lang={lang} home={homeFalse}/>} />
      :
        <Route path="/projects/digitization-3Dprinting-for-touch-collection" element={<ComplexFormatMobile lang={lang} home={homeFalse}/>} />
      }

      {/* <Route exact path="/latest-projects" element={<LatestProjects home={homeFalse}/>} /> */}
      {venus === 'middle1' || venus === 'middle2'?
      <Route exact path="/services" element={<Services1 lang={lang} home={homeFalse}/>} />  
      :
      <Route exact path="/services" element={<Services lang={lang} home={homeFalse}/>} />
      }
      <Route exact path="/contact" element={<Contact lang={lang} home={homeFalse}/>} />

    </Routes>
      
      }
        
      </div>
    </BrowserRouter>
  );
}

export default App;
