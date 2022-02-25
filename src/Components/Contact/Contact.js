import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../Assets/img/services/bg-service.png';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import { CSSTransition } from 'react-transition-group';



const Contact = (props) => {
  
  useEffect(() => {
    props.home()
  }, [props.home])  


  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames='fade'>
    <div className='container-1 contacts-page'>
      <img className='contact-bg' src={Bg}/>
      <h2 className='uppercase sub-title mt'>Contact our team</h2>
      <p className='msg'>We will be happy to answer your questions.</p>
      <p className='mb-2 msg'>Fill out the form and we will get back to you shortly.</p>
      <div className='contacts-container flex-wrap'>
        <div className='form-box' >
          <form name='contact-form' method='POST' data-netlify='true'>
            <input type="hidden" name="form-name" value="contact-form" />
            <input 
              type='text' 
              id="nome" 
              name="nome"
              placeholder='First Name'
              className='contact-input'
              required/>
            <input 
              type='text' 
              id="apelido" 
              name="apelido"
              placeholder='Last Name'
              className='contact-input'
              required/>
            <input 
              type='text' 
              id="email" 
              name="email"
              placeholder='Email'
              className='contact-input'
              required/>
            <textarea 
              className='contact-area' 
              name="mensagem" 
              id="mensagem" 
              required></textarea>
            <button className='button-contact uppercase' type="submit"> 
                  Send</button>
          </form>
        </div>
        <div className='contact-info'>
          <div>
            <h4 className='info-title-1'>Office Location</h4>
            <p className='mb'>Lisbon, Portugal</p>
          </div>
          <div>
            <h4 className='info-title-1'>Contact Information</h4>
            <p>phone</p>
            <p className='mb'>email</p>
          </div>
          <div>
            <h4 className='info-title-2'>Support</h4>
            <p className='mb'>If you need any assistence, please contact us through the form or the email above.</p>
          </div>
          <div >
            <h4 className='info-title-2'>Feedback</h4>
            <p className='mb'>We’d love to hear from you, even if it’s just to say hello or your opinion on our services.</p>
          </div>
        </div>
      </div>
      <div className='footer-contact'>
        <div className='border flex-around'>
          <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank'><img src={LinkedIn} alt='linkedin'/></a>
          <Link to='/contact'>
            <img src={Message} alt='message'/>
          </Link>
        </div>
      </div>
    </div>
    </CSSTransition>
  )
};

export default Contact;
