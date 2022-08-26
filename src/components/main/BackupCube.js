import { useGLTF } from '@react-three/drei'


  function Cube({ btntext, onClick, position }) {
    const { nodes, materials } = useGLTF('/cube exp.gltf')

    
  
    return (
      <mesh geometry={nodes['cubeMetal'].geometry} material={materials.HardShell} 
      position={position}
      scale={[2,2,2]}
      />
    )
  }

  export default Cube