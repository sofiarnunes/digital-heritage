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

const SimpleFormatMobile = (props) => {

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
              <h2 className='sub-title uppercase center large'>{item.name_11}</h2>
              <p className='mb-2 center x-small'>{item.date_begin} - {item.date_end}</p>
              <Swiper effect={"fade"} navigation={true} pagination={{ clickable: true }} modules={[EffectFade, Autoplay, Pagination, Navigation]} autoplay={{ delay: 2500, disableOnInteraction: true }}>
                <SwiperSlide style={{marginBottom: '50px'}}>    
                    <img style={{width: '100vw'}} src={item.img_7} alt='project'/>
                </SwiperSlide>
                <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_8} alt='project'/>
                </SwiperSlide>
                <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_9} alt='project'/>
                </SwiperSlide>
                <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_10} alt='project'/>
                </SwiperSlide>
                {(item.name_1 !== 'roman mural painting') && 
                  <SwiperSlide>    
                      <img style={{width: '100%'}} src={item.img_11} alt='project'/>
                  </SwiperSlide>
                }
                
              </Swiper>
              <p style={{width: '90%', margin: '20px auto'}} className='left'>{item.description}</p>
              {item.name_1 === 'roman mural painting' && props.lang === 'en' ?
                <p className='xx-small left' style={{width: '90%', margin: '20px auto'}}>*credit: the original photograph was shot by Luigi Spina.</p>
                : item.name_1 === 'roman mural painting' && props.lang === 'pt' ?
                <p className='xx-small' style={{position: 'absolute', left: '3%', bottom: '0'}}>*crédito: a fotografia original foi tirada por Luigi Spina.</p>
                : null
              }
            </div> 
          }
          </>
        ) 
      })}
        <div className='footer-project-comp'>
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


export default SimpleFormatMobile