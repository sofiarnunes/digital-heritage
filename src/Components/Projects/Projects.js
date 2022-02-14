import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import DataProjects from './DataProjects';
import Arrow from '../../Assets/arrow-down.svg';
import Bg from '../../Assets/img/projects/bg.png';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';

const Gallery = (props) => {

  const [type, setType] = useState('all');

  useEffect(() => {
    props.home()
  }, [props.home])

  const handleSort = (e) => {
    setType(e.target.value);
  }

  return (
    <div className='container' style={{height: '87vh'}}>
      <img className='bg-projects' src={Bg}/>
      <div className='flex-bet mt'>
        <h2 className='sub-title mb-2 uppercase'>All projects</h2>
        <div>
          <select className='dropdown uppercase' onChange={handleSort}>
            <option value='all'>All</option>
            <option value='1'>Virtual Restoration and Reconstruction</option>
            <option value='2'>Digitalized Objects and Collections</option>
            <option value='3'>Architectural 3D Models</option>
          </select>
          <img className='drop-arrow' src={Arrow}/>
        </div>
      </div>

      <div className='flex-wrap' style={{display: 'flex', justifyContent: 'left'}}>
        {DataProjects.map((item, index) => {
          return(
            <div>
              {item.type === type ?
              <Link to={item.link}>
                <div className='project-cat ml-0' key={index}>
                  <div className='img-projects-cont'>
                  <img className='img-projects' src={item.img_2}/>
                  </div>
                  <div>
                    <p className='projects-title uppercase medium bold'>{item.name_1}</p>
                    <p className='mb x-small'>{item.date_begin}-{item.date_end}</p>
                  </div>
                </div>
              </Link>
              : type === 'all' ?
              <Link to={item.link}>
                <div className='project-cat ml-0' key={index}>
                  <div className='img-projects-cont'>
                  <img className='img-projects' src={item.img_2}/>
                  </div>
                  <div>
                    <p className='projects-title uppercase medium bold'>{item.name_1}</p>
                    <p className='mb x-small'>{item.date_begin}-{item.date_end}</p>
                  </div>
                </div>
              </Link>
              : null
              }
            </div>
          )
        })}
      </div>
      <div className='footer-projects'>
        <div className='border flex-around'>
          <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank'><img src={LinkedIn} alt='linkedin'/></a>
          <Link to='/contact'>
            <img src={Message} alt='message'/>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Gallery;
