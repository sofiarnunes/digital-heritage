import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Img3 from '../../Assets/img/about/img_1.JPG';
import Img2 from '../../Assets/img/about/img_2.JPG';
import Img1 from '../../Assets/img/about/img_3.JPG';
import ImgBW from '../../Assets/img/about/img_bw.JPG';
import LinkedIn from '../../Assets/linkedin.svg';
import Message from '../../Assets/message.svg';
import {CSSTransition} from 'react-transition-group';
import AboutCatOne from './AboutCatOne';
import AboutCatTwo from './AboutCatTwo';
import AboutCatThree from './AboutCatThree';

const About = (props) => {

  const [active, setActive] = useState(1);
  const [click, setClick] = useState(false);

  useEffect(() => {
    props.home()
    if(active === 1 && !click){
      setTimeout(() => {
        setActive(2)
      }, 5000);
    } else if (active === 2 && !click){
      setTimeout(() => {
        setActive(3)
      }, 5000);
    } else if (active === 3 && !click){
      setTimeout(() => {
        setActive(1)
      }, 5000);
    }
  }, [props.home, active])

  const imgAppear = (data) => {
    setClick(true);
    setActive(data);
  }

  const nextCat = (data) => {
    setClick(true);
    setActive(data);
  }

      return(
        <div>
      <div>
        {active === 1 ?
          <CSSTransition
            in={active === 1 && true}
            appear={true}
            timeout={500}
            classNames='fade'
          >
            <AboutCatOne active={active} img={Img1} text='Digital Heritage was created by Rute Rebocho, in 2022. Our work aims for the digital preservation, restoration, and reconstruction of cultural and natural heritage. This company responds to the pressing need for the digital preservation and dissemination of heritage and allow us to be transported in time and perceive cultural heritage in a way that cannot be attainable in its current physical state.' next={() => nextCat(2)}/>
          </CSSTransition>
        : active === 2 ?
        <CSSTransition
          in={active === 2 && true}
          appear={true}
          timeout={500}
          classNames='fade'
        >
          <AboutCatTwo active={active} img={Img2} text='Rute is a specialist in Virtual Restoration of cultural heritage, with a Master in Virtual Heritage. She also has a degree and a master’s degree in Conservation and Restoration, which proves to be a valuable asset in the manipulation, study, and understanding of cultural heritage objects in any digital project.'  next={() => nextCat(3)}/>
        </CSSTransition>
        : active === 3 &&
        <CSSTransition
          in={active === 3 && true}
          appear={true}
          timeout={500}
          classNames='fade'
        >
          <AboutCatThree active={active} img={Img3} text='Using the rare level of access provided to Rute, by the Calouste Gulbenkian Museum (Lisbon, Portugal), she further developed techniques for the digital capture, preservation, and reconstruction of invaluable artworks at a national and international level, generating new meaning for historical artifacts'  next={() => nextCat(1)}/>
        </CSSTransition>
    }
      </div>
      <div className='small'>
        <img src={ImgBW}/>
      </div>
      {/* LINHA */}
      <div>
        <div className='lineAbout'>
          <div className='flex-bet line' style={{width: '25%'}}>
            <div onClick={() => imgAppear(1)} className={active === 1 ? 'circleAc' :'circleDe'}>
              {active === 1 &&
                <p className='x-small'>1/3</p>
              }
            </div>
            <div onClick={() => imgAppear(2)} className={active === 2 ? 'circleAc' :'circleDe'}>
              {active === 2 &&
                <p className='x-small'>2/3</p>
              }
            </div>
            <div onClick={() => imgAppear(3)} className={active === 3 ? 'circleAc' :'circleDe'}>
              {active === 3 &&
                <p className='x-small'>3/3</p>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='footer-about flex-around'>
        <a href='https://www.linkedin.com/in/rute-rebocho-1a1079155/' target='_blank'><img src={LinkedIn} alt='linkedin'/></a>
        <Link to='/contact'>
          <img src={Message} alt='message'/>
        </Link>
      </div>
    </div>
      )
    }

export default About;
