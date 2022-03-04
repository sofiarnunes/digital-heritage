import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Success = ({lang}) => {
  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={100}
    classNames='fade'
  >    
        <div className='popup center success' style={{position: 'absolute', zIndex: '1000', top: '50%', left: '50%', transform: 'translate(-50%)', backgroundColor:'#d8eed0'}}>
            {lang === 'en' ?
            <p className='uppercase'>Sent successfully</p>
            :
            <p className='uppercase'>Enviado com sucesso</p>
            }
        </div>
    </CSSTransition>
  )
}


export default Success