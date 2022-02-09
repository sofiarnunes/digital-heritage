import React, {useState, useEffect} from 'react';

const PopUp = ({text}) => {

  return (
    <div className='popup'>
        <p className='small normal play'>{text}</p>
    </div>
  )
};

export default PopUp;
