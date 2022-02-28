import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import DataProjects from './DataProjects';
import { CSSTransition } from 'react-transition-group';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';

const SimpleFormat = () => {

  const { state } = useLocation();  
  const [img, setImg] = useState('');

  useEffect(() => {
    DataProjects.map(item => setImg(item.img_6))
    setTimeout(() => {
      DataProjects.map(item => setImg(item.img_5))
    }, 7000);
    setTimeout(() => {
      DataProjects.map(item => setImg(item.img_4))
    }, 14000);
    
  }, [])
  
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
              <div className='flex'>
                <Link to='/projects'>
                  <p className='x-small breadcrumb-last'>Projects</p>
                </Link>
                <p className='x-small ml-0 breadcrumb-last'>/</p>
                <p className='x-small ml breadcrumb-current'>{item.name_1}</p>
              </div>
              <h2 className='sub-title uppercase'>{item.name_1}</h2>
              <p className='mb-2'>{item.date_begin} - {item.date_end}</p>
              <div className='mb-2'>
                <img style={{width: '100%'}} src={item.img_3}/>
              </div>
              {item.name_1 === 'Casa Guerrero' ?
              <div className='flex-bet pb'>
                <p className='project-description'>{item.description}</p>
                <div className='side-cont-projects'>
                  <img className='side-img-projects' src={img}/>
                </div>
              </div>
              :
              <div className='flex-bet pb'>
                <p className='project-description-1'>{item.description}</p>
                <div className='side-cont-projects-1'>
                  <img className='side-img-projects' src={item.img_4}/>
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


export default SimpleFormat