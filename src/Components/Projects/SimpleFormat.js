import React, {useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import DataProjects from './DataProjects';
import DataProjectsPT from './DataProjectsPT';
import { CSSTransition } from 'react-transition-group';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/effect-fade";

const SimpleFormat = (props) => {

  useEffect(() => {
    props.home()
  }, [props.home, props])

  const { state } = useLocation();  
 
  const dataArray = props.lang === 'en' ? DataProjects : DataProjectsPT;

  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames='fade'>
    <div className='container simple-container'>
      {dataArray.map((item) => {
        return(
          <>
          {item.name_1 === state.name &&
            <div className='container-1 mt-2'>
              <div className='flex'>
                <Link to='/projects'>
                  {props.lang === 'en' ?
                    <p className='x-small breadcrumb-last'>Projects</p>
                    :
                    <p className='x-small breadcrumb-last'>Projetos</p>
                  }
                </Link>
                <p className='x-small ml-0 breadcrumb-last'>/</p>
                <p className='x-small ml breadcrumb-current'>{item.name_11}</p>
              </div>
              <h2 className='sub-title uppercase'>{item.name_11}</h2>
              <p className='mb-2'>{item.date_begin} - {item.date_end}</p>
              <div className='mb-2'>
                <img style={{width: '100%'}} src={item.img_3} alt='project'/>
              </div>
              {item.name_1 === 'Casa Guerrero' ?
              <div className='flex-bet pb'>
                <p className='project-description'>{item.description}</p>
                <div style={{width: '45%'}}>
                  <Swiper effect={"fade"} navigation={true} pagination={{ clickable: true }} modules={[EffectFade, Autoplay, Pagination, Navigation]} autoplay={{ delay: 2500, disableOnInteraction: true }}>
                    <SwiperSlide>    
                      <div className='side-cont-projects'>
                        <img src={item.img_6} alt='project'/>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='side-cont-projects'>
                        <img src={item.img_5} alt='project'/>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='side-cont-projects'>
                        <img src={item.img_11} alt='project'/>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              :
              <div className='flex-bet pb'>
                <p className='project-description-1'>{item.description}</p>
                <div className='side-cont-projects-1' style={{position: 'relative'}}>
                  <img className='side-img-projects' src={item.img_4} alt='project'/>
                    {item.name_1 === 'roman mural painting' && props.lang === 'en' ?
                      <p className='xx-small' style={{position: 'absolute', left: '3%', bottom: '0'}}>*credit: the original photograph was shot by Luigi Spina.</p>
                      : item.name_1 === 'roman mural painting' && props.lang === 'pt' ?
                      <p className='xx-small' style={{position: 'absolute', left: '3%', bottom: '0'}}>*cr??dito: a fotografia original foi tirada por Luigi Spina.</p>
                      : null
                    }
                </div>
              </div>
              }
            </div> 
          }
          </>
        ) 
      })}
        <div className='footer-project'>
          <div className='border flex-around'>
            <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin'/></a>
            <Link to='/contact'>
              <img src={Message} alt='message'/>
            </Link>
          </div>
        </div>
    </div>
    </CSSTransition>
  )
}


export default SimpleFormat