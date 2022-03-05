import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Img3 from '../../Assets/img/about/img_1.JPG';
import Img2 from '../../Assets/img/about/img_2.JPG';
import Img1 from '../../Assets/img/about/img_3.JPG';
import ImgBW from '../../Assets/img/about/img_bw.JPG';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import {CSSTransition} from 'react-transition-group';
import AboutCatOne from './AboutCatOne';
import AboutCatTwo from './AboutCatTwo';
import AboutCatThree from './AboutCatThree';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import "swiper/css/effect-fade";
import Dots1 from '../../Assets/three-dots-one.svg';
import Dots2 from '../../Assets/three-dots-two.svg';
import Dots3 from '../../Assets/three-dots-three.svg';


const About = (props) => {

  const [active, setActive] = useState(1);
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    props.home()
    if(active === 1 && !click){
      setTimeout(() => {
        setActive(2)
      }, 3000);
    } else if (active === 2 && !click){
      setTimeout(() => {
        setActive(3)
      }, 3000);
    } else if (active === 3 && !click){
      setTimeout(() => {
        setActive(1)
      }, 3000);
    }
    if(window.innerWidth > 480){
      setMobile(false);
    } else if(window.innerWidth <= 480){
      setMobile(true);
    }
  }, [props.home, active, click, props])

  const imgAppear = (data) => {
    setClick(true);
    setActive(data);
  }

  const nextCat = (data) => {
    setClick(true);
    setActive(data);
  }

      return(
      <div>
        {props.lang === 'en' ?
        <>
        {!mobile ?
          <div>
            <div className='about-general'>
              {active === 1 ?
                <CSSTransition
                  in={active === 1 && true}
                  appear={true}
                  timeout={500}
                  classNames='fade'
                >
                  <AboutCatOne active={active} title='Mission' img={Img1} text='Digital Heritage was created by Rute Rebocho, in 2022. Our work aims for the digital preservation, restoration, and reconstruction of cultural and natural heritage. This company responds to the pressing need for the digital preservation and dissemination of heritage and allow us to be transported in time and perceive cultural heritage in a way that cannot be attainable in its current physical state.' next={() => nextCat(2)}/>
                </CSSTransition>
              : active === 2 ?
              <CSSTransition
                in={active === 2 && true}
                appear={true}
                timeout={500}
                classNames='fade'
              >
                <AboutCatTwo active={active} img={Img2} title='About me' text='Rute is a specialist in Virtual Restoration of cultural heritage, with a Master in Virtual Heritage. She also has a degree and a master’s degree in Conservation and Restoration, which proves to be a valuable asset in the manipulation, study, and understanding of cultural heritage objects in any digital project.'  next={() => nextCat(3)}/>
              </CSSTransition>
              : active === 3 &&
              <CSSTransition
                in={active === 3 && true}
                appear={true}
                timeout={500}
                classNames='fade'
              >
                <AboutCatThree active={active} img={Img3} title='About me' text='Using the rare level of access provided to Rute, by the Calouste Gulbenkian Museum (Lisbon, Portugal), she further developed techniques for the digital capture, preservation, and reconstruction of invaluable artworks at a national and international level, generating new meaning for historical artifacts'  next={() => nextCat(1)}/>
              </CSSTransition>
            }
            </div>
            <div className='small'>
              <img src={ImgBW} alt='rute with an artefact'/>
            </div>
            {/* LINHA */}
            <div>
              <div className='lineAbout'>
                <div className='flex-bet line' style={{width: '25%'}}>
                  <div onClick={() => {active === 3 && imgAppear(1)}} className={active === 1 ? 'circleAc' : active === 3 ? 'circleDe' : 'circleDe disabled'}>
                    {active === 1 &&
                      <p className='x-small'>1/3</p>
                    }
                  </div>
                  <div onClick={() => {active === 1 && imgAppear(2)}} className={active === 2 ? 'circleAc' : active === 1 ? 'circleDe' : 'circleDe disabled'}>
                    {active === 2 &&
                      <p className='x-small'>2/3</p>
                    }
                  </div>
                  <div onClick={() => {active === 2 && imgAppear(3)}} className={active === 3 ? 'circleAc' : active === 2 ? 'circleDe' : 'circleDe disabled'}>
                    {active === 3 &&
                      <p className='x-small'>3/3</p>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-about flex-around'>
              <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin'/></a>
              <Link to='/contact'>
                <img src={Message} alt='message'/>
              </Link>
            </div>
          </div>
          :
          <div>
            <div style={{position: 'relative', top: '4rem', width: '90vw', left: '50%', transform: 'translateX(-50%)'}}>
              <Swiper navigation={false} modules={[Autoplay]} loop={true} autoplay={{ delay: 4500, disableOnInteraction: true }}>
                  <SwiperSlide>
                    <div className='flex-col'>
                      <img src={Img1} alt='working'/>
                      <img  src={Dots1} style={{width: '50px', position: 'relative', zIndex:'1000', bottom: '20px'}} alt='dots'/>

                      <div style={{backgroundColor: 'white'}}>
                        <h2 className='sub-title uppercase mb-2 mob-title-about mt'>Digital heritage</h2>
                        <p className='about-p play x-medium txt-left'>Digital Heritage was created by Rute Rebocho, in 2022. Our work aims for the digital preservation, restoration, and reconstruction of cultural and natural heritage. This company responds to the pressing need for the digital preservation and dissemination of heritage and allow us to be transported in time and perceive cultural heritage in a way that cannot be attainable in its current physical state.</p>
                      </div> 
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='flex-col'>
                      <img src={Img2} alt='Rute working'/>
                      <img  src={Dots2} style={{width: '50px', position: 'relative', zIndex:'1000', bottom: '20px'}} alt='dots'/>

                      <div style={{backgroundColor: 'white'}}>
                        <h2 className='sub-title uppercase mb-2 mob-title-about mt'>Digital heritage</h2>
                        <p className='about-p play x-medium txt-left'>Rute is a specialist in Virtual Restoration of cultural heritage, with a Master in Virtual Heritage. She also has a degree and a master’s degree in Conservation and Restoration, which proves to be a valuable asset in the manipulation, study, and understanding of cultural heritage objects in any digital project.</p>
                      </div> 
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='flex-col'>
                      <img src={Img3} alt='Rute working'/>
                      <img  src={Dots3} style={{width: '50px', position: 'relative', zIndex:'1000', bottom: '20px'}} alt='dots'/>

                      <div style={{backgroundColor: 'white'}}>
                        <h2 className='sub-title uppercase mb-2 mob-title-about mt'>Digital heritage</h2>
                        <p className='about-p play x-medium txt-left'>Using the rare level of access provided to Rute, by the Calouste Gulbenkian Museum (Lisbon, Portugal), she further developed techniques for the digital capture, preservation, and reconstruction of invaluable artworks at a national and international level, generating new meaning for historical artifacts.</p>
                      </div> 
                    </div>
                  </SwiperSlide>
              </Swiper>
              </div>
              <div className='footer-about flex-around'>
                <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin'/></a>
                <Link to='/contact'>
                  <img src={Message} alt='message'/>
                </Link>
              </div>
          </div>

        }
        </>
        :
        <>
        {!mobile ?
          <div>
            <div className='about-general'>
              {active === 1 ?
                <CSSTransition
                  in={active === 1 && true}
                  appear={true}
                  timeout={500}
                  classNames='fade'
                >
                  <AboutCatOne active={active} img={Img1} title='Missão' text='A Digital Heritage foi criada por Rute Rebocho, em 2022. O nosso trabalho visa a preservação, o restauro e a reconstrução digital do património cultural e natural. A Digital Heritage responde à necessidade premente de preservação e divulgação digital do património e permite-nos ser transportados no tempo e compreender o património cultural de uma forma que não pode ser alcançada no seu estado físico atual.' next={() => nextCat(2)}/>
                </CSSTransition>
              : active === 2 ?
              <CSSTransition
                in={active === 2 && true}
                appear={true}
                timeout={500}
                classNames='fade'
              >
                <AboutCatTwo active={active} img={Img2} title='Sobre mim' text='A Rute é especialista em Restauro Virtual do património cultural e possui um Mestrado em Património Virtual. É também licenciada e mestre em Conservação e Restauro, o que se revela uma mais-valia na manipulação, estudo e compreensão de objetos culturais em qualquer projeto digital.'  next={() => nextCat(3)}/>
              </CSSTransition>
              : active === 3 &&
              <CSSTransition
                in={active === 3 && true}
                appear={true}
                timeout={500}
                classNames='fade'
              >
                <AboutCatThree active={active} img={Img3} title='Sobre mim' text='Utilizando o raro nível de acesso disponibilizado a Rute, pelo Museu Calouste Gulbenkian (Lisboa, Portugal), esta desenvolveu técnicas de captura, preservação e reconstrução digitais de obras de valor inestimável a nível nacional e internacional, gerando novos significados para artefactos históricos.'  next={() => nextCat(1)}/>
              </CSSTransition>
            }
            </div>
            <div className='small'>
              <img src={ImgBW} alt='rute with an artefact'/>
            </div>
            {/* LINHA */}
            <div>
              <div className='lineAbout'>
                <div className='flex-bet line' style={{width: '25%'}}>
                  <div onClick={() => {active === 3 && imgAppear(1)}} className={active === 1 ? 'circleAc' : active === 3 ? 'circleDe' : 'circleDe disabled'}>
                    {active === 1 &&
                      <p className='x-small'>1/3</p>
                    }
                  </div>
                  <div onClick={() => {active === 1 && imgAppear(2)}} className={active === 2 ? 'circleAc' : active === 1 ? 'circleDe' : 'circleDe disabled'}>
                    {active === 2 &&
                      <p className='x-small'>2/3</p>
                    }
                  </div>
                  <div onClick={() => {active === 2 && imgAppear(3)}} className={active === 3 ? 'circleAc' : active === 2 ? 'circleDe' : 'circleDe disabled'}>
                    {active === 3 &&
                      <p className='x-small'>3/3</p>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-about flex-around'>
              <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin'/></a>
              <Link to='/contact'>
                <img src={Message} alt='message'/>
              </Link>
            </div>
          </div>
          :
          <div>
            <div style={{position: 'relative', top: '4rem', width: '90vw', left: '50%', transform: 'translateX(-50%)'}}>
              <Swiper navigation={false} modules={[Autoplay]} loop={true} autoplay={{ delay: 4500, disableOnInteraction: true }}>
                  <SwiperSlide>
                    <div className='flex-col'>
                      <img src={Img1} alt='working'/>
                      <img  src={Dots1} style={{width: '50px', position: 'relative', zIndex:'1000', bottom: '20px'}} alt='dots'/>

                      <div style={{backgroundColor: 'white'}}>
                        <h2 className='sub-title uppercase mb-2 mob-title-about mt'>Missão</h2>
                        <p className='about-p play x-medium txt-left'>A Digital Heritage foi criada por Rute Rebocho, em 2022. O nosso trabalho visa a preservação, o restauro e a reconstrução digital do património cultural e natural. A Digital Heritage responde à necessidade premente de preservação e divulgação digital do património e permite-nos ser transportados no tempo e compreender o património cultural de uma forma que não pode ser alcançada no seu estado físico atual.</p>
                      </div> 
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='flex-col'>
                      <img src={Img2} alt='rute working'/>
                      <img  src={Dots2} style={{width: '50px', position: 'relative', zIndex:'1000', bottom: '20px'}} alt='dots'/>

                      <div style={{backgroundColor: 'white'}}>
                        <h2 className='sub-title uppercase mb-2 mob-title-about mt'>Sobre mim</h2>
                        <p className='about-p play x-medium txt-left'>A Rute é especialista em Restauro Virtual do património cultural e possui um Mestrado em Património Virtual. É também licenciada e mestre em Conservação e Restauro, o que se revela uma mais-valia na manipulação, estudo e compreensão de objetos culturais em qualquer projeto digital.</p>
                      </div> 
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='flex-col'>
                      <img src={Img3} alt='rute working'/>
                      <img  src={Dots3} style={{width: '50px', position: 'relative', zIndex:'1000', bottom: '20px'}} alt='dots'/>

                      <div style={{backgroundColor: 'white'}}>
                        <h2 className='sub-title uppercase mb-2 mob-title-about mt'>Sobre mim</h2>
                        <p className='about-p play x-medium txt-left'>Utilizando o raro nível de acesso disponibilizado a Rute, pelo Museu Calouste Gulbenkian (Lisboa, Portugal), esta desenvolveu técnicas de captura, preservação e reconstrução digitais de obras de valor inestimável a nível nacional e internacional, gerando novos significados para artefactos históricos.</p>
                      </div> 
                    </div>
                  </SwiperSlide>
              </Swiper>
              </div>
              <div className='footer-about flex-around'>
                <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin'/></a>
                <Link to='/contact'>
                  <img src={Message} alt='message'/>
                </Link>
              </div>
          </div>
          }
        </>
      }
        
        
      </div>
      )
    }

export default About;
