import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Venus from './Venus';

const Model = () => {
  const [venus, setVenus] = useState()

  useEffect(() => {
    if(window.innerWidth > 1001){
      setVenus('side')
    } else if(window.innerWidth <= 1001 ){
      setVenus('middle')
    }
  }, [setVenus, window.innerWidth])

  return (
    <div>
      {venus === 'side' ?
        <Canvas style={{height: '140vh', width:'500px',  position: 'relative'}}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus style={{position:'absolute'}}/>
          </Suspense>
        </Canvas>
        :
        <Canvas style={{height: '90vh', width:'500px',  position: 'relative'}}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Venus style={{position:'absolute'}}/>
          </Suspense>
        </Canvas>
      }
      
    </div>
  )
}


export default Model