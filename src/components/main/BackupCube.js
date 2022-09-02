import { useGLTF } from '@react-three/drei'


  function Cube({ btntext, onClick, position }) {
    const { nodes, materials } = useGLTF('/EisReact.gltf')

    
  
    return (
      <>
      <mesh geometry={nodes['Core'].geometry} material={materials.Emission} position={position} scale={[0.5,0.5,0.5]} />
      <mesh geometry={nodes['cubeMetal'].geometry} material={materials.HardShell} 
      position={position}
      scale={[2,2,2]}
      />
      </>
    )
  }

  export default Cube