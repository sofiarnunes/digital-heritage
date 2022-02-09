import React from 'react';
import BannerHero from '../../Assets/banner_hero.mp4';
import FrameHero from '../../Assets/frame-hero.svg';

const Hero = () => {
  return (
    <div className='banner'>
        <h1 className='uppercase title title-hero'>Digital <br></br>heritage</h1>
        <p className='play txt small sub-title-hero' >digital preservation, restoration, and reconstruction</p>
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
