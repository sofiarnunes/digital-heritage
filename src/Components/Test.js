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
        : venus === 'middle2' ?
      <div style={{width: '100%', height: '90vh', overflow: 'hidden'}}>
        <img ref={hoverRef} src={Manip} style={hover === true ? {display: 'none', position: 'absolute', zIndex: '2000', top: '30vh', left: '45%'} : {position: 'absolute', top: '55vh', left: '50%', zIndex: '2000', opacity: '0.4', width: '90px'}}/>   
        <Canvas style={hover === true ? {height: '90vh', width:'400px',  position: 'relative', left:'4%'} : {height: '90vh', width:'400px',  position: 'relative', left: '10%', opacity: '0.7'}} >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus style={{position:'absolute'}}/>
          </Suspense>
        </Canvas>
      </div>
        : venus === 'middle1' &&
      <div>
        <img ref={hoverRef} src={Manip} style={hover === true ? {display: 'none', position: 'absolute', zIndex: '2000', top: '30vh', left: '45%'} : {position: 'absolute', top: '55vh', left: '50%', zIndex: '2000', opacity: '0.4', width: '90px'}}/>
        <Canvas style={hover === true ? {height: '90vh', width:'450px',  position: 'relative', left:'4%'} : {height: '90vh', width:'450px',  position: 'relative', left: '4%', opacity: '0.7'}} >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus style={{position:'absolute'}}/>
          </Suspense>
        </Canvas>
      </div>
      }
      
    </>
  )
}


export default Model