import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import DataProjects from './DataProjects';
import { CSSTransition } from 'react-transition-group';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';

const SimpleFormatMobile = () => {

  const { state } = useLocation();  
  const [img, setImg] = useState('');

  useEffect(() => {
    DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_7)));
    // DataProjects.map(item => setImg(item.img_7))
    setTimeout(() => {
      // DataProjects.map(item => setImg(item.img_8))
      DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_8)));
    }, 4000);
    setTimeout(() => {
      // DataProjects.map(item => setImg(item.img_9))
      DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_9)));

    }, 8000);
    setTimeout(() => {
      // DataProjects.map(item => setImg(item.img_10))
      DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_10)));
    }, 12000);
    setTimeout(() => {
      // DataProjects.map(item => setImg(item.img_11))
      DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_11)));
    }, 16000);
    setTimeout(() => {
      // DataProjects.map(item => setImg(item.img_12))
      DataProjects.filter(item => item.name_1 === state.name).map((data => setImg(data.img_12)));
    }, 20000);
    
  }, [])
  
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
            <div>
              <h2 className='sub-title uppercase center large'>{item.name_1}</h2>
              <p className='mb-2 center x-small'>{item.date_begin} - {item.date_end}</p>
              <div className='mb-2 center'>
                <img style={{width: '90%'}} src={img}/>
              </div>
              <p style={{width: '90%', margin: '0 auto'}} className='center'>{item.description}</p>
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


export default SimpleFormatMobile