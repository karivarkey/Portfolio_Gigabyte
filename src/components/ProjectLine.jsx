import React from 'react'
import ProjectDetails from './ProjectDetails'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'motion/react'

const ProjectLine = ({title, description, subDescription, href, image, tags, setPreview}) => {
    const [isHidden,setIsHidden] = useState(false);
  return (
    <>
        <div className='flex-wrap items-center justify-between flex gap-2 p-2 bg-gradient-to-r from-transparent via-[#13132b] to-transparent mt-6 mb-6 sm:flex sm:space-y-0'
        onMouseEnter={()=>setPreview(image)}
        onMouseLeave={()=>setPreview(null)}>
          <div className="flex-1">
            <p className='text-2xl'>{title}</p>
            <div className='flex gap-5 mt-2 text-[#698382]'>
              {Array.isArray(tags) && tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </div>
          </div>
          <button onClick={()=>setIsHidden(true)} className='flex items-center gap-1 cursor-pointer hover-animation'>
            Learn More
            <img src='assets/arrow-right.svg' className='w-5'/>
          </button>
        </div>
        <div className='bg-gradient-to-r from-transparent via-[#516968] to-transparent h-[1px] w-full'/>
        { isHidden && (
            <ProjectDetails title={title} 
            description={description} subDescription={subDescription} image={image} tags={tags} href={href} 
            closeModal={()=>setIsHidden(false)}/>
        )}
    </>
  )
}

export default ProjectLine