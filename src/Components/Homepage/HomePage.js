import React, {useState, useEffect} from 'react';
import AboutSection from './AboutSection';
import AboutSection1 from './AboutSection1';
import Hero from './Hero';
import Venus from '../../Assets/bg-home.png';
import Venus1 from '../../Assets/bg-home1.png';
import Venus2 from '../../Assets/bg-home2.png';
import ServicesSection from './ServicesSection';
import ServicesSection1 from './ServicesSection1';
import Footer from '../Footer/Footer';

const HomePage = (props) => {

  const [img, setImg] = useState()

  useEffect(() => {
    props.home()
    if(window.innerWidth > 1000){
      setImg(Venus)
    } else if(window.innerWidth <= 1000 && window.innerWidth > 481){
      setImg(Venus1)
    } else if(window.innerWidth <= 480){
      setImg(Venus2)
    }
  }, [setImg, window.innerWidth, props.home()])

 
  return (
  <div>
      <Hero/>
      <img src={img} className='venus-home'/>
      {img === Venus ?
        <>
          <AboutSection/>
          <ServicesSection />
        </>
      : img === Venus1 || img === Venus2 ?
      <>
        <AboutSection1 />
        <ServicesSection1 {...props}/>
      </>
        :null
    }
      <Footer/>
  </div>
  )
};

export default HomePage;
