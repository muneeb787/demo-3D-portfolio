
import React, { useRef , useLayoutEffect  } from 'react'
import { useGLTF , useScroll } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'
import { MeshStandardMaterial } from 'three';

export function BgModel1(props) {
  const { nodes, materials } = useGLTF('/bgchips-transformed.glb')

  const robot = useRef()
  const scroll = useScroll()
  const tl = useRef()

  const glassMaterial = new MeshStandardMaterial({
    color: 0x0d1224, // Light gray color
    transparent: true,
    opacity: 0.5, // Adjust the opacity as desired
    envMapIntensity: 1, // Increase this value for more reflections
    metalness: 0.1, // Increase for a more metallic look
    roughness: 0.2, // Decrease for a smoother surface
  });

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
    console.log(scroll.offset * tl.current.duration());
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  
    tl.current
      .to(robot.current.rotation, { x: 1.9, duration: 4 })
      .to(robot.current.rotation, { y: 0.1, duration: 4 }, "<")
      .to(robot.current.rotation, { z: 7, duration: 4 }, "<")
      .to(robot.current.position, { x: 0, duration: 4 }, "<")
      .to(robot.current.position, { y: 0, duration: 4 }, "<")
      .to(robot.current.position, { z: 3.5, duration: 4 }, "<")

      .to(robot.current.rotation, { x: 0.3, duration: 8 })
      .to(robot.current.rotation, { y: 2.1, duration: 8 }, "<")
      .to(robot.current.rotation, { z: 1, duration: 8 }, "<")
      .to(robot.current.position, { x: -1.3, duration: 8 }, "<")
      .to(robot.current.position, { y: 0.2, duration: 8 }, "<")
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

useGLTF.preload('/bgchips-transformed.glb')
