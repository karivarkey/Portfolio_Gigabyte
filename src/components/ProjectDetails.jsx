import React from 'react'
import { motion } from 'motion/react'

const ProjectDetails = ({title, description, subDescription, image, tags, href, closeModal}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <motion.div className='relative max-w-2xl border shadow-sm rounded-1xl bg-gradient-to-l from-[#132039] via-[#110b22] to-[#132039] border-white p-6'
        intial={{ opacity:0, scale:0.5 }}
        animate={{ opacity:1, scale:1 }}
        exit={{ opacity:0, scale:0.5 }}
        transition={{ duration: 0.3 }}>
            <button onClick={closeModal} className='absolute p-2 rounded-sm top-5 right-5 bg-[#110b22] hover:bg-[#132039] transition-colors duration-300'>
                <img src='assets/close.svg' className='w-6 h-6' />
            </button>
            <img src={image} alt={title} className='w-full '/>
            <div className='p-5'>
                <h5 className='font-bold text-2xl text-white mt-4 mb-2'>
                    {title}
                </h5>
                <p className='text-1xl'>
                    {description}
                </p>
                <p className='text-neutral-400'>
                    {subDescription.map((subDesc,index)=>(<p> ➜ {subDesc}</p>))}
                </p>
                <div className='flex items-center justify-between flex-wrap gap-2 mt-4'>
                    <div className='flex items-center gap-3'>
                        {tags.map((tag)=>(<img key={tag.id} src={tag.path} alt={tag.name} 
                        className='rounded-lg size-10 w-6 h-6 hover-animation'/>))}
                    </div>
                    <a
                        href={href} target="_blank" rel="noopener noreferrer"
                        className='inline-flex items-center gap-1 hover:underline cursor-pointer'>
                        View Repo <img src='assets/arrow-up.svg' className='size-4' />
                    </a>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectDetails