import React, {useState, useEffect} from 'react';
import AboutSection from './AboutSection';
import AboutSection1 from './AboutSection1';
import Hero from './Hero';
import Venus from '../../Assets/bg-home.png';
import Venus1 from '../../Assets/bg-home1.png';
import ServicesSection from './ServicesSection';
import ServicesSection1 from './ServicesSection1';
import Footer from '../Footer/Footer';

console.log(window.innerWidth)


const HomePage = (props) => {

  const [img, setImg] = useState()

  useEffect(() => {
    if(window.innerWidth > 1025){
      setImg(Venus)
    } else if(window.innerWidth < 1025){
      setImg(Venus1)
    }
  }, [setImg, window.innerWidth])

  return (
  <div >
      <Hero/>
      <div>
        <div>
        <img src={img} className='venus-home'/>
        {img === Venus ?
          <>
            <AboutSection/>
            <ServicesSection />
          </>
        : img === Venus1 ?
        <>
          <AboutSection1 />
          <ServicesSection1 {...props}/>
        </>
          :null
      }
        </div>
        </div>
      <Footer/>
  </div>
  )
};

export default HomePage;
