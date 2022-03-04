import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import DataProjects from './DataProjects';
import { CSSTransition } from 'react-transition-group';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/effect-fade";

const SimpleFormatMobile = () => {

  const { state } = useLocation();  
  
  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames='fade'>
    <div className='container simple-container'>
      {DataProjects.map((item) => {
        return(
          <>
          {item.name_1 === state.name &&
            <div className='container-1 mt-2'>
              <h2 className='sub-title uppercase center large'>{item.name_1}</h2>
              <p className='mb-2 center x-small'>{item.date_begin} - {item.date_end}</p>
              <Swiper effect={"fade"} navigation={true} pagination={{ clickable: true }} modules={[EffectFade, Autoplay, Pagination, Navigation]} autoplay={{ delay: 2500, disableOnInteraction: true }}>
                <SwiperSlide style={{marginBottom: '50px'}}>    
                    <img style={{width: '100vw'}} src={item.img_7}/>
                </SwiperSlide>
                <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_8}/>
                </SwiperSlide>
                <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_9}/>
                </SwiperSlide>
                <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_10}/>
                </SwiperSlide>
                {item.name !== 'Virtual restoration of a roman mural painting' && 
                  <SwiperSlide>    
                      <img style={{width: '100%'}} src={item.img_11}/>
                  </SwiperSlide>
                }
                {item.name !== 'Virtual restoration of a roman mural painting' && 
                  <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_12}/>
                  </SwiperSlide>
                }
                
              </Swiper>
              <p style={{width: '90%', margin: '20px auto'}} className='left'>{item.description}</p>
              {item.name_1 === 'roman mural painting' &&
                <p className='xx-small left' style={{width: '90%', margin: '20px auto'}}>*credit: the original photograph was shot by Luigi Spina.</p>
              }
            </div> 
          }
          </>
        ) 
      })}
        <div className='footer-project-comp'>
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
}


export default SimpleFormatMobile