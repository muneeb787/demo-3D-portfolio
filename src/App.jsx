import {ScrollControls, Scroll, Environment, Sparkles } from '@react-three/drei'
import { useEffect } from "react";
import HeroSection from './sections/heroSection';
import Experience from './sections/experience';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Education from './sections/education';
import Contact from './sections/contact';
import Navbar from './sections/components/navbar';
import { BgModel } from './sections/3dData/Bgchips';
import { BgModel1 } from './sections/3dData/Bgchips1';


function App() {

  useEffect(() => {
    
    document.getElementsByTagName("Canvas")[0].height = "700"
    
  }, [])
  

  return (
    <>
      <ambientLight intensity={1} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='night'
      />

      <ScrollControls pages={5.5} >

        <BgModel scale={0.2} position={[0.7, 0.4, 3.9]} rotation={[1.3, -1.7, 0]} />
        <BgModel1 scale={0.1} position={[-2.7, 0.7, 3]} rotation={[0.3, 2.0, 0]} />
        <Sparkles count={1000} speed={1} size={2} color={"#fff"} scale={[10]}></Sparkles>
        <Scroll>

        </Scroll>
        <Scroll html style={{ width: '100%', minHeight: `100%` }} className="flex justify-center relative">
          <div className="w-[80%]">
            <Navbar />

            <HeroSection />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </div>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default App
