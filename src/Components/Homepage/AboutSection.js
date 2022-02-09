import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {

    return (
      <div className='flex-bet container about-section'>
          <div className='about-hero-txt play medium' style={{zIndex: '100'}}>
            <p className='mb-2'>In this digital era, digital recording, preservation, and reconstruction, constitutes an ever-increasing need to guarantee general public outreach and comprehension of cultural and natural heritage.</p>
            <p className='mb-3'>From digitizing cultural assets, to uncovering new layers of meaning in reconstructed and restored artifacts, we guarantee beautiful and informative results and treat each project as a unique undertaking.</p>
            <Link to='/contact'>
              <button className='btn btn-light'>Contact us</button>
            </Link>
          </div>
          <div className='about-hero-img'></div>
      </div>
    )
};

export default AboutSection;
