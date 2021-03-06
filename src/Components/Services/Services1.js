import React, {useEffect, useState, useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import RestauroImg from '../../Assets/img/services/restauro-img.png';
import HouseClosed from '../../Assets/img/services/arquite-img1.png';
import Box from '../../Assets/img/services/collection1.png';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import { CSSTransition } from 'react-transition-group';
import Restoration1 from '../../Assets/img/services/service-1/restoration-1.jpg';
import Restoration2 from '../../Assets/img/services/service-1/restoration-2.jpg';
import Restoration3 from '../../Assets/img/services/service-1/restoration-3.jpg';
import Restoration4 from '../../Assets/img/services/service-1/restoration-4.jpg';
import Digitalization1 from '../../Assets/img/services/service-2/digitalization-1.jpg';
import Digitalization2 from '../../Assets/img/services/service-2/digitalization-2.png';
import Digitalization3 from '../../Assets/img/services/service-2/digitalization-3.png';
import Digitalization4 from '../../Assets/img/services/service-2/digitalization-4.png';
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
  }, [props.home, clicked, state, click, props])

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
      {props.lang === 'en' ? 
      <>
      <div className='container-1 services-page'>
        <div className='center'>
          <h2 className='uppercase catNew mb-2 mt bold'>Digital heritage services</h2>
        </div>
        <div className='flex-wrap' style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className={clicked === 1 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(1)}>
            <div className={clicked === 2 || clicked === 3 ? `services-container disabled-1` : 'services-container'}> 
              <img className='services-img' src={RestauroImg} alt='Virtual Restoration and Reconstruction'/>
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center' style={{width: '100%'}}>Virtual Restoration and Reconstruction</p>
            </div>
          </div>

          <div className={clicked === 2 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(2)}>
            <div className={clicked === 1 || clicked === 3 ? `services-container disabled-1` : 'services-container'}> 
            <img className='services-img' src={Box} alt='Digitalization of objects and collections'/>
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center'>Digitization of Objects and Collections</p>
            </div>
          </div>

          <div className={clicked === 3 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(3)}>
            <div className={clicked === 1 || clicked === 2 ? `services-container disabled-1` : 'services-container'}> 
              <img className='services-img' src={HouseClosed} alt='Architectural Models'/>
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center'>Architectural Models</p>
            </div>
          </div>
        </div>
      </div>
      {clicked === 1 ?
          <div ref={scrollRef} className='center service-box1'>
            <h4 className='x-large mb-3 mt-3'>Virtual Restoration and Reconstruction</h4>
            <div className='services-grid mb-3'>
              <div className='services-grid-1'><img src={Restoration1} alt='restoration'/></div>
              <div className='services-grid-2'><img src={Restoration2} alt='restoration'/></div>
              <div className='services-grid-3'><img src={Restoration3} alt='restoration'/></div>
              <div className='services-grid-4'><img src={Restoration4} alt='restoration'/></div>
            </div>
            <div className='medium txt-left' style={{padding: '1rem 0 5rem 0'}}>
              <p className='mb-2 regular'>We explore conservation and restoration methodologies through a range of digital tools to give new meaning to heritage objects.</p>
              <p className='mb-2 regular'>These digital projects support the conservation, preservation, and fuller comprehension of cultural heritage through the:</p>
              <ol className='ml regular'>
                <li>planning and simulation of physical restorations;</li>
                <li>rebuilding of permanently lost heritage;</li>
                <li>total or partial reconstruction of an artifact.</li>
              </ol>
            </div>
          </div>
          : clicked === 2 ?
          <div ref={scrollRef} className='center service-box2'>
            <h4 className='x-large mb-3 mt-3'>Digitization of Objects and Collections</h4>
            <div className='services-grid mb-3'>
              <div className='services-grid-1'><img className='digit' src={Digitalization1} alt='digitalization'/></div>
              <div className='services-grid-2'><img className='digit' src={Digitalization2} alt='digitalization'/></div>
              <div className='services-grid-3'><img className='digit' src={Digitalization3} alt='digitalization'/></div>
              <div className='services-grid-4'><img className='digit' src={Digitalization4} alt='digitalization'/></div>
            </div>
            <div className='medium txt-left'>
              <p className='mb-2 regular'>Using digital photogrammetry and 3D modelling, we create accurate and photorealistic high-resolution 3D documentation that best fits your needs, guaranteeing a fluid and correct visualization.</p>
              <p className='mb-2 regular'>From models for online dissemination, to digital preservation or even for study and research, we assure professional results in capturing a wide range of objects of different nature.</p>
            </div>
          </div>
        : clicked === 3 && 
        <div ref={scrollRef} className='center service-box3'>
          <h4 className='x-large mb-3 mt-3'>Architectural Models</h4>
          <div className='services-grid mb-3'>
            <div className='services-grid-1'><img className='arq' src={Architecture1} alt='arquitecture'/></div>
            <div className='services-grid-2'><img className='arq' src={Architecture2} alt='arquitecture'/></div>
            <div className='services-grid-3'><img className='arq' src={Architecture3} alt='arquitecture'/></div>
            <div className='services-grid-4'><img className='arq' src={Architecture4} alt='arquitecture'/></div>
          </div>
          <div className='medium txt-left'>
            <p className='mb-2 regular'>We create architectural 3D models based on CAD plans, using photorealistic materials and naturalistic assets that bring the model to life.</p>
            <p className='mb-2 regular'>From representing contemporary buildings to reconstructing historic infrastructures, we assure professional results in realistically capturing architectural structures and their surroundings.</p>
          </div>
        </div>
      }
      
      <div className='footer-services'>
        <div className='border flex-around'>
          <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin'/></a>
          <Link to='/contact'>
            <img src={Message} alt='message'/>
          </Link>
        </div>
      </div>
      </>
      : 
      <>
      <div className='container-1 services-page'>
        <div className='center'>
          <h2 className='uppercase catNew mb-2 mt bold'>servi??os da digital heritage</h2>
        </div>
        <div className='flex-wrap' style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className={clicked === 1 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(1)}>
            <div className={clicked === 2 || clicked === 3 ? `services-container disabled-1` : 'services-container'}> 
              <img className='services-img' src={RestauroImg} alt='Restauro e Reconstru????o Virtual'/>
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center' style={{width: '100%'}}>Restauro e Reconstru????o Virtual</p>
            </div>
          </div>

          <div className={clicked === 2 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(2)}>
            <div className={clicked === 1 || clicked === 3 ? `services-container disabled-1` : 'services-container'}> 
            <img className='services-img' src={Box} alt='Objetos e Cole????es Digitalizados'/>
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center'>Objetos e Cole????es Digitalizados</p>
            </div>
          </div>

          <div className={clicked === 3 ? 'services-page-cont service-active' : 'services-page-cont'} onClick={() => handleShow(3)}>
            <div className={clicked === 1 || clicked === 2 ? `services-container disabled-1` : 'services-container'}> 
              <img className='services-img' src={HouseClosed} alt='Modelos 3D arquitet??nicos'/>
            </div>
            <div style={{marginTop: '20px'}}>
              <p className='center'>Modelos Arquitet??nicos</p>
            </div>
          </div>
        </div>
      </div>
      {clicked === 1 ?
          <div ref={scrollRef} className='center service-box1'>
            <h4 className='x-large mb-3 mt-3'>Restauro e Reconstru????o Virtual</h4>
            <div className='services-grid mb-3'>
              <div className='services-grid-1'><img src={Restoration1} alt='restoration'/></div>
              <div className='services-grid-2'><img src={Restoration2} alt='restoration'/></div>
              <div className='services-grid-3'><img src={Restoration3} alt='restoration'/></div>
              <div className='services-grid-4'><img src={Restoration4} alt='restoration'/></div>
            </div>
            <div className='medium txt-left' style={{padding: '1rem 0 5rem 0'}}>
              <p className='mb-2 regular'>Exploramos metodologias de conserva????o e restauro atrav??s de um conjunto de ferramentas digitais para dar um novo significado aos objetos patrimoniais.</p>
              <p className='mb-2 regular'>Estes projetos digitais apoiam a conserva????o, preserva????o e compreens??o do patrim??nio cultural, de forma mais completa, por meio do:</p>
              <ol className='ml regular'>
                <li>planeamento e simula????o de restauros f??sicos;</li>
                <li>reconstru????o de patrim??nio para sempre perdido;</li>
                <li>reconstru????o total ou parcial de um artefacto.</li>
              </ol>
            </div>
          </div>
          : clicked === 2 ?
          <div ref={scrollRef} className='center service-box2'>
            <h4 className='x-large mb-3 mt-3'>Objetos e Cole????es Digitalizados</h4>
            <div className='services-grid mb-3'>
              <div className='services-grid-1'><img className='digit' src={Digitalization1} alt='digitalization'/></div>
              <div className='services-grid-2'><img className='digit' src={Digitalization2} alt='digitalization'/></div>
              <div className='services-grid-3'><img className='digit' src={Digitalization3} alt='digitalization'/></div>
              <div className='services-grid-4'><img className='digit' src={Digitalization4} alt='digitalization'/></div>
            </div>
            <div className='medium txt-left'>
              <p className='mb-2 regular'>Utilizando a fotogrametria digital e a modela????o 3D, n??s criamos documenta????o 3D precisa e fotorrealista, de alta resolu????o, que melhor se adapta ??s suas necessidades, garantindo uma visualiza????o fluida e correta.</p>
              <p className='mb-2 regular'>Utilizando a fotogrametria digital e a modela????o 3D, n??s criamos documenta????o 3D precisa e fotorrealista, de alta resolu????o, que melhor se adapta ??s suas necessidades, garantindo uma visualiza????o fluida e correta.</p>
            </div>
          </div>
        : clicked === 3 && 
        <div ref={scrollRef} className='center service-box3'>
          <h4 className='x-large mb-3 mt-3'>Modelos Arquitet??nicos</h4>
          <div className='services-grid mb-3'>
            <div className='services-grid-1'><img className='arq' src={Architecture1} alt='arquitecture'/></div>
            <div className='services-grid-2'><img className='arq' src={Architecture2} alt='arquitecture'/></div>
            <div className='services-grid-3'><img className='arq' src={Architecture3} alt='arquitecture'/></div>
            <div className='services-grid-4'><img className='arq' src={Architecture4} alt='arquitecture'/></div>
          </div>
          <div className='medium txt-left'>
            <p className='mb-2 regular'>Criamos modelos arquitet??nicos 3D baseados em planos CAD, usando materiais fotorrealistas e elementos naturalistas que d??o vida ao modelo.</p>
            <p className='mb-2 regular'>Da representa????o de edif??cios contempor??neos ?? reconstru????o de infraestruturas hist??ricas, garantimos resultados profissionais na captura realista de estruturas arquitet??nicas e das suas envolv??ncias.</p>
          </div>
        </div>
      }
      
      <div className='footer-services'>
        <div className='border flex-around'>
          <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin'/></a>
          <Link to='/contact'>
            <img src={Message} alt='message'/>
          </Link>
        </div>
      </div>
      </>
      }
      
    </div>
    </CSSTransition>
  )
};

export default Services;
