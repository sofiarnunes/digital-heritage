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
    } else if(window.innerWidth <= 1001 && window.innerWidth > 480){
      setVenus('middle1')
    } else if(window.innerWidth <= 480 ){
      setVenus('middle2')
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
    <>
      {venus === 'side' ?
      <>
        <img ref={hoverRef} src={Manip} style={hover === true ? {display: 'none', position: 'absolute', zIndex: '2000', top: '80vh', left: '45%'} : {position: 'absolute', top: '40vh', left: '50%', zIndex: '2000', opacity: '0.4', width: '90px'}}/>
        <Canvas style={hover === true ? {height: '140vh', width:'500px',  position: 'relative',zIndex: '-100', top: '-300px'} : {height: '140vh', width:'500px',  position: 'relative', opacity: '0.6', zIndex: '-100', top: '-300px'}}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus/>
          </Suspense>
        </Canvas>
      </> 
        : venus === 'middle1' ?
      <>
        <img ref={hoverRef} src={Manip} style={hover === true ? {display: 'none', position: 'absolute', zIndex: '2000', top: '25vh', left: '45%'} : {position: 'absolute', top: '25vh', left: '50%', zIndex: '2000', opacity: '0.4', width: '90px'}}/>   
        <Canvas style={hover === true ? {height: '90vh',  position: 'absolute', top: '-270px', left:'-20px'} : {height: '90vh', position: 'absolute', left: '-30px', top: '-290px', opacity: '0.7'}} >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus style={{position:'absolute'}}/>
          </Suspense>
        </Canvas>
      </>
        : venus === 'middle2' &&
      <>
        <img ref={hoverRef} src={Manip} style={hover === true ? {display: 'none', position: 'absolute', zIndex: '2000', top: '25vh', left: '50%', transform: 'translateX(-50%)'} : {position: 'absolute', top: '25vh',  left: '50%', transform: 'translateX(-50%)', zIndex: '2000', opacity: '0.4', width: '60px'}}/>
        <Canvas style={hover === true ? {height: '680px', width:'300px',  position: 'absolute', top: '-210px', left:'-20px'} : {height: '680px', width:'300px',  position: 'absolute', top: '-210px', left:'-20px', opacity: '0.7'}} >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus style={{position:'absolute'}}/>
          </Suspense>
        </Canvas>
      </>
      }
      
    </>
  )
}


export default Model