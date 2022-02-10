import React, {useEffect} from 'react';

const About = (props) => {

  useEffect(() => {
    props.home()
  }, [props.home])
  
  return (
    <div>
      <p>Hello About</p>
    </div>
  )
};

export default About;
