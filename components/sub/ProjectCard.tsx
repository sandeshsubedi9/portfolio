// import Image from 'next/image';
// import React from 'react'

// interface Props {
//     src: string;
//     title: string;
//     description: string;
// }

// const ProjectCard = ({ src , title , description}: Props ) => {
//   return (
//     <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
//         <Image
//             src={src}
//             alt={title}
//             width={1000}
//             height={1000}
//             className='w-full object-contain '
//         />

//         <div className='relative p-4'>
//           <h1 className='text-2xl font-semibold text-white '>{title}</h1>
//           <p className='mt-2 text-gray-300'>{description}</p>
//         </div>
//     </div>
//   )
// }

// const ProjectCard = ({ src, title, description }: Props) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group hover:cursor-pointer ">
//       {/* Image wrapper for animation */}
//       <div className="overflow-hidden">
//         <Image
//           src={src}
//           alt={title}
//           width={1000}
//           height={1000}
//           className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//         <span className="text-white text-lg font-semibold">View Site</span>
//       </div>

//       {/* Text Content */}
//       <div className="relative p-4">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard

"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
  websiteLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ src, title, description, websiteLink, githubLink }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageShift, setImageShift] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Determine which edge the mouse entered from
    const fromLeft = mouseX < rect.width * 0.3;
    const fromRight = mouseX > rect.width * 0.7;
    const fromTop = mouseY < rect.height * 0.3;
    const fromBottom = mouseY > rect.height * 0.7;

    let shiftX = 0;
    let shiftY = 0;

    // Set shift direction based on entry point
    if (fromLeft) shiftX = 12;
    if (fromRight) shiftX = -12;
    if (fromTop) shiftY = 12;
    if (fromBottom) shiftY = -12;

    setImageShift({ x: shiftX, y: shiftY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImageShift({ x: 0, y: 0 });
  };

  return (
    <div
      className='relative overflow-hidden rounded-lg shadow-lg shadow-[#2A0E61]/50 border border-[#2A0E61] cursor-pointer group'
    >
      {/* Image with mouse-following transform */}
      <div
        ref={cardRef}
        className="relative overflow-hidden h-64"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full h-full object-cover transition-transform duration-300 ease-out scale-110'
          style={{
            transform: `scale(1.1) translate(${imageShift.x}px, ${imageShift.y}px)`
          }}
        />

        {/* Simple overlay that appears on hover */}
        <div
          className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* <span className="text-white font-semibold text-lg hover:text-cyan-400 hover:scale-105 transition-all duration-300">Visit Site</span> */}
          <div className='flex flex-col gap-1 items-center justify-center'>
            <a href={websiteLink} target='_blank' rel='noopener noreferrer' className="text-white text-lg hover:text-black transition-colors duration-100">
              <span className="inline-block hover:scale-107 transition-transform duration-300">
                Visit Site
              </span>
            </a>

            <a href={githubLink} target='_blank' rel='noopener noreferrer' className="text-white text-lg hover:text-black transition-colors duration-100">
              <span className="inline-block hover:scale-107 transition-transform duration-300">
                View Code
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* Content section */}
      <div className='relative p-4 '>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;