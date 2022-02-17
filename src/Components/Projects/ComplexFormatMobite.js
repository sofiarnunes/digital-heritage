import React, { useState, useEffect } from 'react'
import DataProjects from './DataProjects';
import { useLocation, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';

const ComplexFormatMobile = () => {

  const { state } = useLocation(); 
  const [active, setActive] = useState(1);  
  const [img, setImg] = useState(1);  
  
  useEffect(() => {
    DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_3)));
    setTimeout(() => {
      DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_4)));
    }, 5000);
    setTimeout(() => {
      DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_5)));
    }, 10000);    
  }, [])

  const handleChange = (e) => {
    setActive(e.target.value)
  }

  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames='fade'>
    <div className='container'>
      {DataProjects.map((item) => {
        return(
          <>
          {item.name_1 === state.name &&
            <div className='container-1 mt-2'>
              <h2 className='sub-title uppercase center large'>{item.name_1}</h2>
              <p className='mb-2 center x-small'>{item.date_begin} - {item.date_end}</p>
              <div className='mb-2'>
                <img style={{width: '100%'}} src={img}/>
              </div>
              <ul className='project-menu x-small flex-bet uppercase'>
                <li onClick={handleChange} value={1} className={active === 1 && `project-menu-active`}>{item.title_1}</li>
                <li onClick={handleChange} value={2} className={active === 2 && `project-menu-active`}>{item.title_2}</li>
                <li onClick={handleChange} value={3} className={active === 3 && `project-menu-active`}>{item.title_3}</li>
              </ul>
              {active === 1 ?
                <div className='project-grid'>
                  <div className='grid-img1'></div>
                  <p className='grid-txt-1'>{item.description_1}</p>
                  <div className='grid-img2'></div>
                </div>
              : active === 2 ?
              <div className='project-grid'>
                <div className='grid-img1'></div>
                <p className='grid-txt-1'>{item.description_2}</p>
                <div className='grid-img2'></div>
              </div>
              :
              <div className='project-grid'>
                <div className='grid-img1'></div>
                <p className='grid-txt-1'>{item.description_3}</p>
                <div className='grid-img2'></div>
              </div>
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