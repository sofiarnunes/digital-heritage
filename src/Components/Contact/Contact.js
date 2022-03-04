import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../Assets/img/services/bg-service.png';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import { CSSTransition } from 'react-transition-group';
import Success from '../Utilities/Success';



const Contact = (props) => {
  
  useEffect(() => {
    props.home()
  }, [props.home])  

  const [click, setClick] = useState(false);
  const [values, setValues] = useState({
    nome: '',
    apelido: '',
    email: '',
    mensagem: ''
  })

  const submit = () => {
    if(values.nome.length && values.apelido.length && values.email.length && values.mensagem.length ){
      setClick(true)
      setTimeout(() => {
        setClick(false);
      }, 1000);
    }
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames='fade'>
    <div className='container-1 contacts-page'>
      <img className='contact-bg' src={Bg}/>
      <h2 className='uppercase sub-title mt'>Contact our team</h2>
      <p className='msg'>We would be happy to answer your questions.</p>
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
              onChange={handleChange}
              required/>
            <input 
              type='text' 
              id="apelido" 
              name="apelido"
              placeholder='Last Name'
              className='contact-input'
              onChange={handleChange}
              required/>
            <input 
              type='text' 
              id="email" 
              name="email"
              placeholder='Email'
              className='contact-input'
              onChange={handleChange}
              required/>
            <textarea 
              className='contact-area' 
              name="mensagem" 
              id="mensagem" 
              onChange={handleChange}
              required></textarea>
            <button className='button-contact uppercase' type="submit" onClick={submit}> 
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
            <p className='mb'>We would love to hear from you. Feel free to reach out and get in touch to discuss your ideas and plan your next project.</p>
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
      {click && <Success/>}
    </div>
    </CSSTransition>
  )
};

export default Contact;
