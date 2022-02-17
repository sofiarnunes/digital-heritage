import React, {useState} from 'react'
import DataProjects from './DataProjects';
import { useLocation, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
            <div>
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
              {active === 1 ?
                <div className='flex-bet'>
                  <p>{item.description_1}</p>
                  {/* <div className='side-cont-projects-1'>
                    <img className='side-img-projects' src={item.img_4}/>
                  </div> */}
                </div>
              : active === 2 ?
              <div className='flex-bet'>
                <p>{item.description_2}</p>
                {/* <div className='side-cont-projects-1'>
                  <img className='side-img-projects' src={item.img_4}/>
                </div> */}
              </div>
              :
              <div className='flex-bet'>
              <p>{item.description_3}</p>
              {/* <div className='side-cont-projects-1'>
                <img className='side-img-projects' src={item.img_4}/>
              </div> */}
            </div>
            }  
            </div> 
          }
          </>
        ) 
      })}
        {/* <div className='footer-project'>
          <div className='border flex-around'>
            <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank'><img src={LinkedIn} alt='linkedin'/></a>
            <Link to='/contact'>
              <img src={Message} alt='message'/>
            </Link>
          </div>
        </div> */}
    </div>
    </CSSTransition>
  )
}


export default ComplexFormat