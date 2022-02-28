import React, {useEffect, useState, useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import RestauroImg from '../../Assets/img/services/restauro-img.png';
import HouseClosed from '../../Assets/img/services/arquite-img1.png';
import Box from '../../Assets/img/services/collection1.png';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import { CSSTransition } from 'react-transition-group';
import Restoration1 from '../../Assets/img/services/restoration-1.jpg';
import Restoration2 from '../../Assets/img/services/restoration-2.jpg';
import Restoration3 from '../../Assets/img/services/restoration-3.jpg';
import Restoration4 from '../../Assets/img/services/restoration-4.jpg';
import Digitalization1 from '../../Assets/img/services/digitalization-1.jpg';
import Digitalization2 from '../../Assets/img/services/digitalization-2.jpg';
import Digitalization3 from '../../Assets/img/services/digitalization-3.jpg';
import Digitalization4 from '../../Assets/img/services/digitalization-4.jpg';
import Architecture1 from '../../Assets/img/services/architecture_1.jpg';
import Architecture2 from '../../Assets/img/services/architecture_2.jpg';
import Architecture3 from '../../Assets/img/services/architecture_3.jpg';
import Architecture4 from '../../Assets/img/services/architecture_4.jpg';




const Services = (props) => {

  const [click, setClick] = useState(false);
  const [clicked, setClicked] = useState('');
  let scrollRef = useRef();
  const { state } = useLocation(); 


  useEffect(() => {
    props.home();
    if(clicked === 1 || clicked === 2 || clicked === 3){
      scrollRef.current.scrollIntoView({ behavior: 'smooth' }) 
    }
    if(state === 1 || state === 2 || state === 3){
      if(click === false){
        setClicked(state);
      }
    }
  }, [props.home, clicked, state, click])

  const handleShow = (data) => {
    setClicked(data);
    setClick(true);
  }

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames='fade'>
    <div>
      <div className='container services-page'>
        <div className='center'>
          <h2 className='uppercase catNew mb-2 mt'>Digital heritage services</h2>
        </div>
        <div className='flex-bet flex-wrap'>
          <div className={clicked === 1 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(1)}>
            <div className={clicked === 2 || clicked === 3 ? `services-container disabled-1` : 'services-container'}> 
              <img className='services-img' src={RestauroImg} />
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center medium' style={{width: '100%'}}>Virtual Restoration and Reconstruction</p>
            </div>
          </div>

          <div className={clicked === 2 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(2)}>
            <div className={clicked === 1 || clicked === 3 ? `services-container disabled-1` : 'services-container'}> 
            <img className='services-img' src={Box}/>
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center medium'>Digitalization of objects and collections</p>
            </div>
          </div>

          <div className={clicked === 3 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(3)}>
            <div className={clicked === 1 || clicked === 2 ? `services-container disabled-1` : 'services-container'}> 
              <img className='services-img' src={HouseClosed}/>
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center medium'>Architectural Models</p>
            </div>
          </div>
        </div>
      </div>
      {clicked === 1 ?
          <div ref={scrollRef} className='flex-around' style={{position: 'relative', top: '90vh', padding:'5% 10% 8% 10%', backgroundColor: '#f6f6f6'}}>
            <div className='services-grid'>
              <div className='services-grid-1'><img src={Restoration1}/></div>
              <div className='services-grid-2'><img src={Restoration2}/></div>
              <div className='services-grid-3'><img src={Restoration3}/></div>
              <div className='services-grid-4'><img src={Restoration4}/></div>
            </div>
            <div className='medium' style={{width: '45%'}}>
              <p className='mb'>We explore conservation and restoration methodologies through a range of digital tools to give new meaning to heritage objects.</p>
              <p className='mb'>These digital projects support the conservation, preservation, and fuller comprehension of cultural heritage through the:</p>
              <ol className='ml'>
                <li>planning and simulation of physical restorations;</li>
                <li>rebuilding of permanently lost heritage;</li>
                <li>total or partial reconstruction of an artifact.</li>
              </ol>
            </div>
          </div>
          : clicked === 2 ?
            <div ref={scrollRef} className='flex-around' style={{position: 'relative', top: '90vh', padding:'5% 10% 8% 10%', backgroundColor: '#f6f6f6'}}>
              <div className='services-grid'>
                <div className='services-grid-1'><img src={Digitalization1}/></div>
                <div className='services-grid-2'><img src={Digitalization2}/></div>
                <div className='services-grid-3'><img src={Digitalization3}/></div>
                <div className='services-grid-4'><img src={Digitalization4}/></div>
              </div>
              <div className='medium' style={{width: '45%'}}>
                <p className='mb'>Using digital photogrammetry and 3D modelling, we create accurate and photorealistic high-resolution 3D documentation that best fits your needs, guaranteeing a fluid and correct visualization.</p>
                <p className='mb'>From models for online dissemination, to digital preservation or even for study and research, we assure professional results in capturing a wide range of objects of different nature.</p>
              </div>
            </div>
        : clicked === 3 && 
          <div ref={scrollRef} className='flex-around' style={{position: 'relative', top: '90vh', padding:'5% 10% 8% 10%', backgroundColor: '#f6f6f6'}}>
            <div className='services-grid'>
              <div className='services-grid-1'><img src={Architecture1}/></div>
              <div className='services-grid-2'><img src={Architecture2}/></div>
              <div className='services-grid-3'><img src={Architecture3}/></div>
              <div className='services-grid-4'><img src={Architecture4}/></div>
            </div>
            <div className='medium' style={{width: '45%'}}>
              <p className='mb'>We create architectural 3D models based on CAD plans, using photorealistic materials and naturalistic assets that bring the model to life.</p>
              <p className='mb'>From representing contemporary buildings to reconstructing historic infrastructures, we assure professional results in realistically capturing architectural structures and their surroundings.</p>
            </div>
          </div>
      }
      
      <div className='footer-projects'>
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

export default Services;
