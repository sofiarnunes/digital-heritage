import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection1 = () => {

    return (
      <div className='flex-col-bet container about-section' >
        <p className='mb medium play'>In this digital era, digital recording, preservation, and reconstruction, constitutes an ever-increasing need to guarantee general public outreach and comprehension of cultural and natural heritage.</p>
        <div></div>
        <div>
          <p className='mb medium play'>From digitizing cultural assets, to uncovering new layers of meaning in reconstructed and restored artifacts, we guarantee beautiful and informative results and treat each project as a unique undertaking.</p>
          <Link to='/contact'>
            <button className='btn-center btn btn-light mt-2'>Contact us</button>
          </Link>
        </div>
      </div>
    )
};

export default AboutSection1;
