import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Arrow from '../../Assets/arrow-right-grey.svg';
import Dots from '../../Assets/three-dots-two.svg';


const AboutCatTwo = ({img, text, next, title}) => {

  return (
      <div>
        <div className='about-container'> 
          <div className='about-image-cont'>
          <CSSTransition
              in={true}
              appear={true}
              timeout={300}
              classNames='drag'
          >
              <img className='big-image' src={img} alt='Rute working'/>
          </CSSTransition>
          <img className='dots' src={Dots} alt='dots'/>
          </div>
          <div className='about-text'>
            <h2 className='sub-title uppercase mb-2'>{title}</h2>
            <p className='about-p play x-medium'>{text}</p>
          </div>
        </div>
        <img className='arrowAbout pointer' src={Arrow} onClick={next} alt='arrow'/>
      </div>
  )
}


export default AboutCatTwo