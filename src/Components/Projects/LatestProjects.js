import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DataProjects from './DataProjects';
import Exit from '../../Assets/exit.svg';

const LatestProjects = (props) => {

  const [hover, setHover] = useState(false);
  const [img, setImg] = useState();

  useEffect(() => {
    props.home()
  }, [props.home])

  const hoverHandler = (item) => {
    setHover(true);
    setImg(item.img_1)
  }
  const hoverOut = () => {
    setHover(false);
    setImg()
  }

  return (
    <div className='latest-container'>
      <Link to='/projects'>
        <img className='exit' src={Exit}/>
      </Link>
      <div className='bg-container'>
        <img className='bg-img' src={img}/>
      </div>
      <div className='latest-projects'>
      {DataProjects.map((item, index) => {
        return(
          <ul key={index}>
            {index < 5 &&
              <Link to={item.link}>
                <li onMouseOver={() => hoverHandler(item)} onMouseOut={() => hoverOut()} className='uppercase txt-center bold'>{index + 1}. {item.name_1}</li>
              </Link>
            }
          </ul>
        )
      })}
        <Link to='/projects'>
          <p className='small grey-text'>show all</p>
        </Link>
      </div>

    </div>
  )
}


export default LatestProjects