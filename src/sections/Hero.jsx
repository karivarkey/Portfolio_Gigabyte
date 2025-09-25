import { Canvas } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import { ParallexBackground } from "../components/ParallexBackground"
import Cloud from "../components/Stone3d"

import React from 'react'

const Hero = () => {
  return <section className="flex items-start justify-center md:items-start min-h-screen overflow-hidden c-space" id="home">
    <HeroText />
    <ParallexBackground />
    {/*<figure className='absolute inset-0 '
    style={{ width:'100vw', height:'100vh' }}>
      <img
        src="/assets/clouds_1.png"
        alt="Clouds"
        className="w-full h-full object-cover opacity-90 animate-float"
      />
    </figure>*/}
  </section>
}

export default Hero