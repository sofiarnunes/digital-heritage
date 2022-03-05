import React, {useState, useEffect} from 'react';
import BannerHero from '../../Assets/banner_hero.mp4';
import FrameHero from '../../Assets/frame-hero.svg';

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
      <div className='banner-txt'>
        <h1 className='uppercase title title-hero'>Digital {big === true && <br></br>}heritage</h1>
        <p className='sub-title-hero x-small bold' >digital preservation, restoration, and reconstruction</p>
        <div className='description-container'>
          <img src={FrameHero} alt='frame'/>
          <p className='xx-small bold' style={{lineHeight: '24px'}}>Digital Heritage uses digital media to further understand, preserve, and disseminate cultural and natural heritage.</p>
        </div>
      </div>
        <video autoPlay loop muted playsInline>
            <source src={BannerHero} type="video/mp4"/>
        </video>
    </div>
  )
};

export default Hero;
