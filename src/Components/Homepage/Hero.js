import React, {useState, useEffect} from 'react';
import BannerHero from '../../Assets/banner_hero.mp4';
import FrameHero from '../../Assets/frame-hero.svg';
import ArrowDown from '../../Assets/arrow-down.svg';

const Hero = () => {

  const [big, setBig] = useState()

  useEffect(() => {
    if(window.innerWidth > 480){
      setBig(true)
    } else if(window.innerWidth <= 480){
      setBig(false)
    }
  }, [setBig, window.innerWidth])

  return (
    <div className='banner'>
        <h1 className='uppercase title title-hero'>Digital {big === true && <br></br>}heritage</h1>
        <p className='play txt-small sub-title-hero' >digital preservation, restoration, and reconstruction</p>
        <div className='description-container'>
          <img src={FrameHero}/>
          <p className='play x-small xx-bold'>Digital Heritage explores digital media resources to further understand, preserve, and disseminate cultural and natural heritage.</p>
        </div>
        <video autoPlay loop muted>
            <source src={BannerHero} type="video/mp4"/>
        </video>
    </div>
  )
};

export default Hero;
