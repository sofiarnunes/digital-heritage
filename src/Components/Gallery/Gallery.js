import React, {useEffect} from 'react';

const Gallery = (props) => {

  useEffect(() => {
    props.home()
  }, [props.home])

  return (
    <div>
        Gallery
    </div>
  )
};

export default Gallery;
