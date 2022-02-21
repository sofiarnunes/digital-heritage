import React, {useState, useEffect} from 'react';

const PopUp = ({text}) => {

  console.log(text)

  return (
    <div className='popup' >
        <p className='play' style={{fontSize:'15px'}}>{text}</p>
    </div>
  )
};

export default PopUp;
