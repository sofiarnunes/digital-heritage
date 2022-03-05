import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RestauroImg from '../../Assets/img/services/restauro-img.png';
import RestauroGif from '../../Assets/img/services/restauro-gif.gif';
import HouseClosed from '../../Assets/img/services/arquite-img1.png';
import HouseOpened from '../../Assets/img/services/arquite-img2.png';
import Box from '../../Assets/img/services/collection1.png';
import Box2 from '../../Assets/img/services/collection2.png';
import PopUp from '../Utilities/PopUp';


const ServicesSection1PT = () => {

  const [service1, setService1] = useState(RestauroImg);
  const [popup1, setPopup1] = useState(false);
  const [service2, setService2] = useState(Box);
  const [popup2, setPopup2] = useState(false);
  const [service3, setService3] = useState(HouseClosed);
  const [popup3, setPopup3] = useState(false);
  const disabled = 'disabled';

  const navigate = useNavigate();

  const handleServiceOne = () => {
    setService1(RestauroGif);
    setPopup1(true);
    if(popup1 === true){
      navigate('/services', {state:  1 });    
    }
  }

  const handleLeaveOne = () => {
    setService1(RestauroImg);
    setPopup1(false);
  }

  const handleServiceTwo = () => {
    setService2(Box2);
    setPopup2(true);
    if(popup2 === true){
      navigate('/services', {state:  2 });    
    }
  }

  const handleLeaveTwo = () => {
    setService2(Box);
    setPopup2(false);
  }

  const handleServiceThree = () => {
    setService3(HouseOpened);
    setPopup3(true);
    if(popup3 === true){
      navigate('/services', {state:  3 });    
    }
  }

  const handleLeaveThree = () => {
    setService3(HouseClosed);
    setPopup3(false);
  }


  return (
    <div className='container services-section'>
      <div className='center mb'>
        <h2 className='uppercase catNew'>Serviços</h2>
          <Link to='/services'>
            <p className='underline click-txt mb'>saber mais</p>
          </Link>
      </div>
      <div className='flex-bet flex-wrap services-tab'>
        <div className={popup2 === true || popup3 === true ? `services-cont disabled` : 'services-cont'}>
          <div className='services-container'> 
            <img className='services-img' src={service1} onClick={handleServiceOne} onMouseLeave={handleLeaveOne} alt='Restauro e Reconstrução Virtual'/>
          </div>
          <p className='x-medium center mt-1'>Restauro e Reconstrução Virtual</p>
          {popup1 === true && <PopUp text='O restauro e a reconstrução virtual permitem que seja transportado através do tempo e das culturas.'/>}
        </div>
        <div className={popup1 === true || popup3 === true ? `services-cont disabled` : 'services-cont'}>
          <div className='services-container'> 
            <img className='services-img' src={service2} onClick={handleServiceTwo} onMouseLeave={handleLeaveTwo} alt='Objetos e Coleções Digitalizados'/>
          </div>
          <p className='x-medium center mt-1'>Objetos e Coleções Digitalizados</p>
          {popup2 === true && <PopUp text='A fotogrametria digital e a modelação 3D criam uma documentação 3D precisa e fotorrealista de alta resolução.'/>}
        </div>
        <div className={popup1 === true || popup2 === true ? `services-cont disabled` : 'services-cont'}>
          <div className='services-container'> 
            <img className='services-img' src={service3} onClick={handleServiceThree} onMouseLeave={handleLeaveThree} alt='Modelos 3D arquitetónicos'/>
          </div>
          <p className='x-medium center mt-1'>Modelos Arquitetónicos</p>
          {popup3 === true && <PopUp text='Modelos 3D arquitetônicos baseados em planos CAD, usando materiais fotorrealistas com aspeto naturalista.'/>}
        </div>
      </div>
    </div>
  )
};

export default ServicesSection1PT;
