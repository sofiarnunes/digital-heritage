import React from 'react';
import { Link } from 'react-router-dom';

const AboutSectionPT = () => {

    return (
      <div className='flex-bet container about-section'>
          <div className='about-hero-txt play medium' >
            <p className='mb-2'>Nesta era digital, o registo, a preservação e a reconstrução digitais constituem uma necessidade cada vez maior de garantir a divulgação e compreensão do património cultural e natural pelo público geral.</p>
            <p className='mb-3'>Da digitalização de bens culturais à descoberta de novos níveis de significado em artefactos reconstruídos e restaurados, garantimos resultados estéticos e informativos e encaramos cada projeto como um empreendimento único.</p>
            <Link to='/contact'>
              <button className='btn btn-light'>Contactos</button>
            </Link>
          </div>
      </div>
    )
};

export default AboutSectionPT;
