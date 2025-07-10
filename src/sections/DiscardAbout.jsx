import React from 'react'
import { motion } from 'motion/react'
import Card from '../components/Card'

const About = () => {
  return (
    <section className='c-space section-spacing'>
        <h2 className='text-heading'>More About Me</h2>
        <div className='grid grid-cols-1 md:grid-cols-6 md:auto-rows-[1fr] gap-4 mt-12'>
            {/** Grid 1 */}
            <div className='relative flex items-center grid-plain-color grid-1 min-h-[200px] sm:min-h-[px] md:min-h-0'>
                <img 
                    src="assets/grid.png" 
                    alt="grid background"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
                />
                <img
                    src="assets/undraw_reading-time_gcvc.svg" 
                    className="scale-[0.67] max-w-full h-auto object-contain" />
            </div>

            {/** Grid 2 */}
            <div className='grid-default-color grid-2'>
                <div className='flex items-center justify-center w-full h-full'>
                    <img src="assets/carbon.png"
                         className='sm:hidden md:absolute md:scale-[1] md:left-0 md:block' />
                </div>
            </div>

            {/** Grid 3 */}
            <div className='grid-black-color grid-3'></div>
            {/** Grid 4 */}
            <div className='grid-black-color grid-4'></div>
            {/** Grid 5 */}
            <div className='grid-default-color grid-5'></div>
        </div>
    </section>
  )
}

export default About