import React from 'react';

const LangButton = () => {

    

  return (
    <div style={{position: 'absolute', top: '2rem', right: '2rem', cursor: 'pointer', zIndex: '2000'}}>
        <p><span className='en-active'>EN</span> /  <span className='pt'>PT</span></p>
    </div>
  )
}

export default LangButton