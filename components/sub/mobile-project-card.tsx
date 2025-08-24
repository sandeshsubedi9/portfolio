import Image from 'next/image'
import React from 'react'

interface MobileProjectCardProps {
    src: string;
    title: string;
    description: string;
    websiteLink?: string;
    githubLink?: string;
}

const MobileProjectCard = ({ src, title, description, websiteLink, githubLink }: MobileProjectCardProps) => {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg shadow-[#2A0E61]/50 border border-[#2A0E61]'>
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className='w-full object-contain'
            />

            <div className='relative p-4'>
                <h1 className='text-2xl font-semibold text-white '>{title}</h1>
                <p className='mt-2 text-gray-300'>{description}</p>
            </div>
            <div className='m-4 flex gap-2 items-center justify-around md:hidden'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="py-2 px-4 text-sm button-primary  text-center text-white cursor-pointer rounded-lg max-w-[200px]" >
                    View Code
                </a>
                <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="py-2 px-4 text-sm button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" >
                    View Site
                </a>
            </div>
        </div>
    )
}

export default MobileProjectCard
