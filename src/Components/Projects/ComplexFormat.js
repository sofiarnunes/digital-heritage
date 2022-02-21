import React, {useState} from 'react'
import DataProjects from './DataProjects';
import { useLocation, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';

const ComplexFormat = () => {

  const { state } = useLocation(); 
  const [active, setActive] = useState(1);   

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
              <ul className='project-menu x-small flex-bet uppercase'>
                <li onClick={handleChange} value={1} className={active === 1 && `project-menu-active`}>{item.title_1}</li>
                <li onClick={handleChange} value={2} className={active === 2 && `project-menu-active`}>{item.title_2}</li>
                <li onClick={handleChange} value={3} className={active === 3 && `project-menu-active`}>{item.title_3}</li>
              </ul>
              {active === 1 && item.name_1 === 'touch collection' ?
                <div className='project-grid'>
                  <div className='grid-img1'><img className='touch' src={item.v1}/></div>
                  <div className='grid-img2'><img className='touch' src={item.h1}/></div>
                  <p className='grid-txt-1'>{item.description_1}</p>
                </div>
              : active === 1 && item.name_1 === 'Egyptian low relief (300-250 BC)' ?
                <div className='project-grid'>
                  <div className='grid-img1'><img src={item.v1}/></div>
                  <div className='grid-img2'><img src={item.h1}/></div>
                  <p className='grid-txt-1'>{item.description_1}</p>
                </div>
              : active === 2 && item.name_1 === 'Egyptian low relief (300-250 BC)' ?
              <div className='project-grid'>
                <div className='grid-img1'>
                  <video autoPlay loop muted>
                    <source src={item.v2} type="video/mp4"/>
                  </video>
                </div>
                <div className='grid-img2'>
                  <video autoPlay loop muted>
                    <source src={item.h2} type="video/mp4"/>
                  </video>
                </div> 
                <p className='grid-txt-1'>{item.description_2}</p>
              </div>
              : active === 2 && item.name_1 === 'touch collection' ?
              <div className='project-grid'>
                  <div className='grid-img1'><img className='touch' src={item.v1}/></div>
                  <div className='grid-img2'><img className='touch' src={item.h1}/></div>
                <p className='grid-txt-1'>{item.description_2}</p>
              </div>
              : active === 3 && item.name_1 === 'Egyptian low relief (300-250 BC)' ?
              <div className='project-grid'>
                <div className='grid-img1'><img className='relief' src={item.v3}/></div>
                <div className='grid-img2'><img className='relief' src={item.h3}/></div>
                <p className='grid-txt-1'>{item.description_3}</p>
              </div>
              : active === 3 && item.name_1 === 'touch collection' ?
              <div className='project-grid'>
                <div className='grid-img1'><img src={item.v3}/></div>
                <div className='grid-img2'>
                  <video autoPlay loop muted>
                    <source src={item.h3} type="video/mp4"/>
                  </video>
                </div>
                <p className='grid-txt-1'>{item.description_3}</p>
              </div>
              : null
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


export default ComplexFormat