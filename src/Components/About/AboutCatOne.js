import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Arrow from '../../Assets/arrow-right-grey.svg';
import Dots from '../../Assets/three-dots-one.svg';


const AboutCatOne = ({img, text, next}) => {

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
                <img className='big-image' src={img}/>
            </CSSTransition>
            <img className='dots' src={Dots}/>
          </div>
          <div className='about-text'>
            <h2 className='sub-title uppercase mb-2 mob-title-about'>Digital heritage</h2>
            <p className='about-p play x-medium'>{text}</p>
          </div>
        </div>
        <img className='arrowAbout pointer' src={Arrow} onClick={next}/>
      </div>
  )
}


export default AboutCatOne