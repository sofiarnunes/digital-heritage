import React, {useEffect, useState} from 'react';
import Footer from '../Footer/Footer';
import Img3 from '../../Assets/img/about/img_1.JPG';
import Img2 from '../../Assets/img/about/img_2.JPG';
import Img1 from '../../Assets/img/about/img_3.JPG';
import ImgBW from '../../Assets/img/about/img_bw.JPG';

const About = (props) => {

  const [active, setActive] = useState(1);

  useEffect(() => {
    props.home()
  }, [props.home])
  
  return (
    <div>
      {/* FIRST */}
      <div>
        <div className='flex-bet about-container'> 
          <div>
            {active === 1 ?
            <img className='big-image' src={Img1}/>
            : active === 2 ?
            <img className='big-image' src={Img2}/>
            : active === 3 &&
            <img className='big-image' src={Img3}/>
            }
          </div>
          <div className='about-text'>
            <h2 className='sub-title uppercase mb-2'>Digital heritage</h2>
            <p className='about-p play x-medium'>I’m a Specialist in Virtual Restoration of cultural heritage, with a Master in Virtual Heritage. I also have a degree and a master’s degree in Conservation and Restoration, which proves to be a valuable asset in the manipulation, study, and understanding of cultural heritage objects in any digital project.</p>
          </div>
        </div>
      </div>
      <div className='small'>
        <img src={ImgBW}/>
      </div>
      {/* LINHA */}
      <div>
        <div className='lineAbout'>
          <div className='flex-bet line' style={{width: '25%'}}>
            <div onClick={() => setActive(1)} className={active === 1 ? 'circleAc' :'circleDe'}>
              {active === 1 &&
                <p className='x-small'>1/3</p>
              }
            </div>
            <div onClick={() => setActive(2)} className={active === 2 ? 'circleAc' :'circleDe'}>
              {active === 2 &&
                <p className='x-small'>2/3</p>
              }
            </div>
            <div onClick={() => setActive(3)} className={active === 3 ? 'circleAc' :'circleDe'}>
              {active === 3 &&
                <p className='x-small'>3/3</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
