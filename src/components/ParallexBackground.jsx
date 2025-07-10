import { motion, useScroll, useTransform } from 'motion/react'
import React from 'react'

export const ParallexBackground = () => {
    const { scrollYProgress } = useScroll()
    const cloudY = useTransform(scrollYProgress, [0, 0.5], ['0%', '80%'])
    const ground3Y = useTransform(scrollYProgress, [0, 0.5], ['0%', '90%'])
    const ground2Y = useTransform(scrollYProgress, [0, 0.5], ['0%', '60%'])
    const ground1Y = useTransform(scrollYProgress, [0, 0.5], ['0%', '10%'])
    const plantsY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-20%'])

    return (
        <section className='absolute inset-0 bg-black/40'>
            <div className='relative h-screen overflow-y-hidden'>
                {/* Sky background */}
                <div className='absolute inset-0 w-full h-screen -z-60'
                    style={{
                        backgroundImage: "url(/assets/sky.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }} />
                {/* Cloud layer */}
                <motion.div className='absolute inset-0 -z-50'
                    style={{
                        backgroundImage: "url(/assets/clouds_1.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        y: cloudY,
                    }} />
                {/* Ground layers */}
                <motion.div className='absolute inset-0 -z-40'
                    style={{
                        backgroundImage: "url(/assets/ground_1.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        y: ground3Y,
                    }} />
                <motion.div className='absolute inset-0 -z-30'
                    style={{
                        backgroundImage: "url(/assets/ground_2.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        y: ground2Y,
                    }} />
                <motion.div className='absolute inset-0 -z-20'
                    style={{
                        backgroundImage: "url(/assets/ground_3.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        y: ground1Y,
                    }} />
                {/* Plants layer */}
                <motion.div className='absolute inset-0 -z-10'
                    style={{
                        backgroundImage: "url(/assets/plants.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        y: plantsY,
                    }} />
            </div>
        </section>
    )
}
