import React, {useEffect} from 'react';

const Contact = (props) => {
  
  useEffect(() => {
    props.home()
  }, [props.home])
  
  return (
    <div>
        Contact
    </div>
  )
};

export default Contact;
