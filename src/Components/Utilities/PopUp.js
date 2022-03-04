import React from 'react';

const PopUp = ({text}) => {

  return (
    <div className='popup' >
        <p className='play' style={{fontSize:'15px'}}>{text}</p>
    </div>
  )
};

export default PopUp;
