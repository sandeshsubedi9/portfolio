import { Projects } from '@/constants'
import React from 'react'
import MobileProjectCard from '../sub/mobile-project-card'

const MobileProjects = () => {
    return (
        <div id='projects' className='flex flex-col items-center justify-center mb-20 md:hidden'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>

            <div className='h-full w-full px-10 md:px-20'>
                <div className='flex flex-col gap-10'>
                    {Projects.map((project, index) => (
                        <MobileProjectCard
                            key={index}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            websiteLink={project.websiteLink}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileProjects
