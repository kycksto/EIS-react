import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

import { Effects } from '../components/main/Effects'
import Voice from '../components/main/Voice'
import EnvLight from '../components/main/EnvLight'
import CubeWhole from '../components/main/CubeWhole'
import { useStateContext } from '../contexts/ContextProvider'

function Home() {
  const { currentMode } = useStateContext();
  return (
    <div className='position: fixed w-full h-full'>
      <Voice/>
      <Canvas gl={{ logarithmicDepthBuffer: true, antialias: true }} dpr={[1, 1.5]} camera={{ position: [9, -3, 9], fov: 50 }}>
      <color attach="background" args={['black']} />
        <CubeWhole/>
        <EnvLight/>
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />
      <Effects />
        <OrbitControls 
        minPolarAngle={Math.PI/1.7} maxPolarAngle={Math.PI/1.7}
        autoRotate={0.1} autoRotateSpeed={0.5} 
        minDistance={12} maxDistance={22} enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default Home;
