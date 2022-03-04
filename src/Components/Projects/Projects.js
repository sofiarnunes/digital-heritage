import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataProjects from './DataProjects';
import Arrow from '../../Assets/arrow-down.svg';
import Bg from '../../Assets/img/projects/bg.png';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import { CSSTransition } from 'react-transition-group';

const Gallery = (props) => {

  const [type, setType] = useState('all');

  useEffect(() => {
    props.home()
  }, [props.home])

  const handleSort = (e) => {
    setType(e.target.value);
  }

  const navigate = useNavigate();

  const goToComponent = (item) => {
      navigate(item.link, {state: { name: item.name_1 } });    
  }

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames='fade'>
      <div className='container-1 container-projects' style={{height: '100%'}}>
        <img className='bg-projects' src={Bg}/>
        <div className='title-cont mt'>
          <h2 className='sub-title mb-2 uppercase'>All projects</h2>
          <div>
            <select className='dropdown uppercase mt-1' onChange={handleSort}>
              <option value='all'>All</option>
              <option value='1'>Virtual Restoration and Reconstruction</option>
              <option value='2'>Digitalized Objects and Collections</option>
              <option value='3'>Architectural 3D Models</option>
            </select>
            <img className='drop-arrow' src={Arrow}/>
          </div>
        </div>
        {type !== 'all' ?
          <div className='all-projects'>
            {DataProjects.filter(data => data.type === type).map((item, index) => {
              return(
                <div className='project-size' key={index}>
                    <div onClick={() => goToComponent (item)} className='project-cat ml-0' key={index}>
                      <div className='img-projects-cont'>
                      <img className='img-projects' src={item.img_2}/>
                      </div>
                      <div>
                        <p className='projects-title uppercase medium bold'>{item.name_1}</p>
                        <p className='mb x-small'>{item.date_begin} - {item.date_end}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            :
            <div className='all-projects'>
            {DataProjects.map((item, index) => {
              return(
                <div className='project-size' key={index}>
                    <div onClick={() => goToComponent (item)} className='project-cat ml-0' key={index}>
                      <div className='img-projects-cont'>
                      <img className='img-projects' src={item.img_2}/>
                      </div>
                      <div>
                        <p className='projects-title uppercase medium bold'>{item.name_1}</p>
                        <p className='mb x-small'>{item.date_begin} - {item.date_end}</p>
                      </div>
                    </div>
                  </div>
              )
            })}
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

export default Gallery;
