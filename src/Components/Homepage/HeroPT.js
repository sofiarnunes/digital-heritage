import React, {useState, useEffect} from 'react';
import BannerHero from '../../Assets/banner_hero.mp4';
import FrameHero from '../../Assets/frame-hero.svg';

const HeroPT = () => {

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
        <p className='sub-title-hero x-small bold' style={{letterSpacing: '2.5px'}}>preservação, restauro e reconstrução digital</p>
        <div className='description-container'>
          <img src={FrameHero} alt='frame'/>
          <p className='xx-small bold' style={{lineHeight: '20px'}}>A Digital Heritage usa meios digitais para melhor compreender, preservar e divulgar o património cultural e natural. </p>
        </div>
      </div>
        <video autoPlay loop muted playsInline>
            <source src={BannerHero} type="video/mp4"/>
        </video>
    </div>
  )
};

export default HeroPT;
