import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RestauroImg from '../../Assets/img/services/restauro-img.png';
import RestauroGif from '../../Assets/img/services/restauro-gif.gif';
import HouseClosed from '../../Assets/img/services/arquite-img1.png';
import HouseOpened from '../../Assets/img/services/arquite-img2.png';
import PopUp from '../Utilities/PopUp';

const ServicesSection = () => {

  const [service1, setService1] = useState(RestauroImg);
  const [popup1, setPopup1] = useState(false);
  const [service2, setService2] = useState(RestauroImg);
  const [popup2, setPopup2] = useState(false);
  const [service3, setService3] = useState(HouseClosed);
  const [popup3, setPopup3] = useState(false);


  const handleServiceOne = () => {
    setService1(RestauroGif);
    setPopup1(true);
  }

  const handleLeaveOne = () => {
    setService1(RestauroImg);
    setPopup1(false);
  }

  const handleServiceTwo = () => {
    setService2(RestauroGif);
    setPopup2(true);
  }

  const handleLeaveTwo = () => {
    setService2(RestauroImg);
    setPopup2(false);
  }

  const handleServiceThree = () => {
    setService3(HouseOpened);
    setPopup3(true);

  }

  const handleLeaveThree = () => {
    setService3(HouseClosed);
    setPopup3(false);
  }

  console.log(popup1)

  return (
    <div className='container services-section'>
      <div className='center'>
        <h2 className='uppercase catNew'>Services</h2>
          <Link to='/services'>
            <p className='underline click-txt'>show more</p>
          </Link>
      </div>
      <div className='flex-bet'>
      <Link to='/services'>
        <div className='services-cont'>
          <div className={popup2 === true || popup3 === true ? `services-container disabled` : 'services-container'}> 
            <img className='services-img' src={service1} onMouseOver={handleServiceOne} onMouseLeave={handleLeaveOne}/>
          </div>
          <div>
            <p className='center'>Virtual Restoration and Reconstruction</p>
          </div>
          {popup1 === true && <PopUp text='Virtual restoration and reconstruction allow you to be transported through time and cultures.'/>}
        </div>
      </Link>

      <Link to='/services'>
        <div className='services-cont'>
          <div className={popup1 === true || popup3 === true ? `services-container disabled` : 'services-container'}> 
          <img className='services-img' src={service2} onMouseOver={handleServiceTwo} onMouseLeave={handleLeaveTwo}/>
          </div>
          <div>
            <p className='center'>Virtual Restoration and Reconstruction</p>
          </div>
          {popup2 === true && <PopUp text='Digital photogrammetry and 3D modelling create accurate and photorealistic high-resolution 3D documentation.'/>}
        </div>
      </Link>

      <Link to='/services'>
        <div className='services-cont'>
          <div className={popup1 === true || popup2 === true ? `services-container disabled` : 'services-container'}> 
            <img className='services-img' src={service3} onMouseOver={handleServiceThree} onMouseLeave={handleLeaveThree}/>
          </div>
          <div>
            <p className='center'>Architectural Model</p>
          </div>
          {popup3 === true && <PopUp text='Architectural 3D models based on CAD plans, using photorealistic materials and naturalistic assets.'/>}
        </div>
      </Link>

      </div>
    </div>
  )
};

export default ServicesSection;
