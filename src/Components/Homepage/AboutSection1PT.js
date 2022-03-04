import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection1PT = () => {

    return (
      <div className='flex-col-bet container about-section' >
        <p className='mb medium play'>Nesta era digital, o registo, a preservação e a reconstrução digitais constituem uma necessidade cada vez maior de garantir a divulgação e compreensão do património cultural e natural pelo público geral.</p>
        <div></div>
        <div>
          <p className='mb medium play'>Da digitalização de bens culturais à descoberta de novos níveis de significado em artefactos reconstruídos e restaurados, garantimos resultados estéticos e informativos e encaramos cada projeto como um empreendimento único.</p>
          <Link to='/contact'>
            <button className='btn-center btn btn-light mt-2'>Contactos</button>
          </Link>
        </div>
      </div>
    )
};

export default AboutSection1PT;
