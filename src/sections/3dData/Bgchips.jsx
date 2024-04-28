
import React, { useRef , useLayoutEffect  } from 'react'
import { useGLTF , useScroll } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'
import { MeshStandardMaterial } from 'three';

export function BgModel(props) {
  const { nodes, materials } = useGLTF('./src/utils/models/bgchips-transformed.glb')

  const robot = useRef()
  const scroll = useScroll()
  const tl = useRef()

  const glassMaterial = new MeshStandardMaterial({
    color: 0x0f191d, // Light gray color
    transparent: true,
    opacity: 0.5, // Adjust the opacity as desired
    envMapIntensity: 2, // Increase this value for more reflections
    metalness: 0.01, // Increase for a more metallic look
    roughness: 0.01, // Decrease for a smoother surface
  });

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
    console.log(scroll.offset * tl.current.duration());
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  
    tl.current
      .to(robot.current.rotation, { x: 1.9, duration: 4 })
      .to(robot.current.rotation, { y: -0.2, duration: 4 }, "<")
      .to(robot.current.rotation, { z: 0, duration: 4 }, "<")
      .to(robot.current.position, { x: 0, duration: 4 }, "<")
      .to(robot.current.position, { y: 0, duration: 4 }, "<")
      .to(robot.current.position, { z: 3.5, duration: 4 }, "<")

      .to(robot.current.rotation, { x: 4.3, duration: 8 })
      .to(robot.current.rotation, { y: 1.7, duration: 8 }, "<")
      .to(robot.current.rotation, { z: 0, duration: 8 }, "<")
      .to(robot.current.position, { x: 0.7, duration: 8 }, "<")
      .to(robot.current.position, { y: -0.8, duration: 8 }, "<")
      .to(robot.current.position, { z: 3.9, duration: 8 }, "<")

      .to(robot.current.rotation, { x: 1.3, duration: 15 })
      .to(robot.current.rotation, { y: 0.7, duration: 15 }, "<")
      .to(robot.current.rotation, { z: 0, duration: 15 }, "<")
      .to(robot.current.position, { x: 0, duration: 15 }, "<")
      .to(robot.current.position, { y: -0.8, duration: 15 }, "<")
      .to(robot.current.position, { z: 3.9, duration: 15 }, "<");
  }, []);
  return (
    <group {...props} ref={robot} >
      <instancedMesh
        args={[nodes.mesh_0.geometry, glassMaterial, 75]}
        instanceMatrix={nodes.mesh_0.instanceMatrix}
      />
    </group>
  )
}

useGLTF.preload('./src/utils/models/bgchips-transformed.glb')
