import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';

const Footer = () => {
  return (
    <div className='footer flex-around' >
      <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin'/></a>
      <Link to='/contact'>
        <img src={Message} alt='message'/>
      </Link>
    </div>
  )
};

export default Footer;
