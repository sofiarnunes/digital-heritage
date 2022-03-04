import React, { useState } from 'react'
import DataProjects from './DataProjects';
import DataProjectsPT from './DataProjectsPT';
import { useLocation, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/effect-fade";

const ComplexFormatMobile = (props) => {

  const { state } = useLocation(); 
  const [active, setActive] = useState(1);    

  const handleChange = (e) => {
    setActive(e.target.value)
  }

  const dataArray = props.lang === 'en' ? DataProjects : DataProjectsPT;

  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames='fade'>
    <div className='container complex-container'>
      {dataArray.map((item) => {
        return(
          <>
          {item.name_1 === state.name &&
            <div className='container-1 mt-2'>
              <h2 className='sub-title uppercase center large'>{item.name_11}</h2>
              <p className='mb-2 center x-small'>{item.date_begin} - {item.date_end}</p>
              <Swiper style={{marginBottom: '50px'}} effect={"fade"} navigation={true} pagination={{ clickable: true }} modules={[EffectFade, Autoplay, Pagination, Navigation]} autoplay={{ delay: 2500, disableOnInteraction: true }}>
                <SwiperSlide >    
                    <img style={{width: '100vw'}} src={item.img_4}/>
                </SwiperSlide>
                <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_5}/>
                </SwiperSlide>
                <SwiperSlide>    
                    <img style={{width: '100%'}} src={item.img_6}/>
                </SwiperSlide>                
              </Swiper>
              <ul className='project-menu x-small flex-bet uppercase'>
                <li onClick={handleChange} value={1} className={active === 1 && `project-menu-active`}>{item.title_1}</li>
                <li onClick={handleChange} value={2} className={active === 2 && `project-menu-active`}>{item.title_2}</li>
                <li onClick={handleChange} value={3} className={active === 3 && `project-menu-active`}>{item.title_3}</li>
              </ul>
                {active === 1 && item.name_1 === 'touch collection' ?
                  <div className='project-grid'>
                    <div className='grid-img1'><img className='touch' src={item.h1}/></div>
                    <p className='grid-txt-1'>{item.description_1}</p>
                    <div className='grid-img2'><img className='touch' src={item.v1}/></div>
                  </div>
                : active === 1 && item.name_1 === 'Egyptian low relief (300-250 BC)' ?
                  <div className='project-grid'>
                    <div className='grid-img1'><img src={item.h1}/></div>
                    <p className='grid-txt-1'>{item.description_1}</p>
                    <div className='grid-img2'><img src={item.v1}/></div>
                  </div>
                : active === 2 && item.name_1 === 'Egyptian low relief (300-250 BC)' ?
                <div className='project-grid'>
                  <div className='grid-img1'>
                    <video autoPlay loop muted playsInline>
                      <source src={item.h2} type="video/mp4"/>
                    </video>
                  </div>
                  <p className='grid-txt-1'>{item.description_2}</p>
                  <div className='grid-img2'>
                    <video autoPlay loop muted playsInline>
                      <source src={item.v2} type="video/mp4"/>
                    </video>
                  </div> 
                </div>
                : active === 2 && item.name_1 === 'touch collection' ?
                <div className='project-grid'>
                  <div className='grid-img1'><img className='touch2' src={item.h2}/></div>
                  <p className='grid-txt-1'>{item.description_2}</p>
                  <div className='grid-img2'>
                    <div className='touch'>
                      <video autoPlay loop muted playsInline>
                        <source src={item.v2} type="video/mp4"/>
                      </video>   
                    </div>
                  </div>               
                </div>
                : active === 3 && item.name_1 === 'Egyptian low relief (300-250 BC)' ?
                <div className='project-grid'>
                  <div className='grid-img1'>            
                    <video autoPlay loop muted playsInline>
                      <source src={item.h3} type="video/mp4"/>
                    </video>
                  </div>                  
                  <p className='grid-txt-1'>{item.description_3}</p>
                  <div className='grid-img2'><img className='relief' src={item.v3}/></div>
                </div>
                : active === 3 && item.name_1 === 'touch collection' ?
                <div className='project-grid'>
                  <div className='grid-img1'>
                    <video autoPlay loop muted playsInline>
                      <source src={item.h3} type="video/mp4"/>
                    </video>
                  </div>
                  <p className='grid-txt-1'>{item.description_3}</p>
                  <div className='grid-img2'><img src={item.v3}/></div>
                </div>
                : null
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


export default ComplexFormatMobile