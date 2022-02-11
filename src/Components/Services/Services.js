import React, {useEffect} from 'react';

const Services = (props) => {

  useEffect(() => {
    props.home()
  }, [props.home])
  

  return (
    <div>
        Services
    </div>
  )
};

export default Services;
