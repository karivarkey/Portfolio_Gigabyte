import React from 'react'
import { myProjects } from '../lib'
import ProjectLine from '../components/ProjectLine'
import { motion, useMotionValue, useSpring } from 'motion/react'

const Projects = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { damping: 20, stiffness: 50 })
    const springY = useSpring(y, { damping: 20, stiffness: 50 })

    const handleMouseMove = (event) => {
        x.set(event.clientX + 40) 
        y.set(event.clientY + 40) 
    }

    const [preview, setPreview] = React.useState(null)

  return <section 
  onMouseMove={handleMouseMove}
  className='relative c-space section-spacing'>
     <h2 className='text-4xl md:text-5xl font-bold text-center'>My Works</h2>
     <div className='bg-gradient-to-r from-transparent via-[#516968] to-transparent mt-6 w-full h-[1px]'/>
     {
        myProjects.map((project) => (
            <ProjectLine key={project.id} {...project} setPreview={setPreview}/>
        ))
     }
     {preview && (
        <motion.img className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80' src={preview} style={{ x:springX, y:springY }}/>
    )}
  </section>
}

export default Projects