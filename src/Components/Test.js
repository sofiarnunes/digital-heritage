import React, {Suspense, useEffect, useState, useRef} from 'react'
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Venus from './Venus';
import Manip from '../Assets/click.svg';

const Model = () => {
  const [venus, setVenus] = useState();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if(window.innerWidth > 1001){
      setVenus('side')
    } else if(window.innerWidth <= 1001 ){
      setVenus('middle')
    }
  }, [setVenus, window.innerWidth])

  let hoverRef = useRef();

  useEffect(() => {
    let handler = (event) => {
        if(hoverRef.current.contains(event.target)){
            setHover(true);
        }
    }

    document.addEventListener("mouseover", handler)

    return () => {
        document.removeEventListener("mouseover", handler)
    }
}, [])


  // useEffect(() => {
  //     let handler = (event) => {
  //       if(!hoverRef.current.contains(event.target)){
  //           setHover(false);
  //       }
  //     }

  //     document.addEventListener("mouseout", handler)

  //     return () => {
  //         document.removeEventListener("mouseout", handler)
  //     }

  // }, [])

  return (
    <div>
      {venus === 'side' ?
      <div>
        <img ref={hoverRef} src={Manip} style={hover === true ? {display: 'none', position: 'absolute', zIndex: '2000', top: '80vh', left: '45%'} : {position: 'absolute', top: '80vh', left: '50%', zIndex: '2000', opacity: '0.4', width: '90px'}}/>
        <Canvas style={hover === true ? {height: '140vh', width:'500px',  position: 'relative'} : {height: '140vh', width:'500px',  position: 'relative', opacity: '0.6'}}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus  style={{position:'absolute'}}/>
          </Suspense>
        </Canvas>
      </div> 
        :
      <div>
        <img ref={hoverRef} src={Manip} style={hover === true ? {display: 'none', position: 'absolute', zIndex: '2000', top: '30vh', left: '45%'} : {position: 'absolute', top: '55vh', left: '50%', zIndex: '2000', opacity: '0.4', width: '90px'}}/>        {/* <p className='uppercase' style={hover === true ? {display: 'none', zIndex: '2000', position: 'absolute', top: '65vh', left: '40%'}: {zIndex: '2000', position: 'absolute', top: '65vh', left: '40%'}}>Click to manipulate</p> */}
        <Canvas style={hover === true ? {height: '90vh', width:'500px',  position: 'relative'} : {height: '90vh', width:'500px',  position: 'relative', opacity: '0.7'}} >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus style={{position:'absolute'}}/>
          </Suspense>
        </Canvas>
      </div>
      }
      
    </div>
  )
}


export default Model