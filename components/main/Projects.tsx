// import React from 'react'
// import ProjectCard from '../sub/ProjectCard'
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

// const Projects = ({ }) => {
//   return (
//     <div id='projects' className='flex flex-col items-center justify-center mb-20'>
//       <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
//         My Projects
//       </h1>

//       <div className='h-full w-full px-10 md:px-20'>
//         <div className='md:hidden flex flex-col gap-10'>
//           <ProjectCard
//             src="/ecommerce-dashboard.png"
//             title="Ecommerce Dashboard"
//             description="E-commerce Admin Dashboard to manage products, stores, and seamlessly connect with the storefront."
//           />
//           <ProjectCard
//             websiteLink=""
//             githubLink=''
//             src="/ecommerce-store1.png"
//             title="Ecommerce Store"
//             description="E-commerce Admin Dashboard to manage products, stores, and seamlessly connect with the storefront."
//           />
//           <ProjectCard
//             src="/discord-clone3.png"
//             title="Discord Clone"
//             description="Real-time Discord Clone with servers, channels, and direct messaging powered by Socket.io."
//           />
//           <ProjectCard
//                 src="/messenger-clone.png"
//                 title="Messaging App"
//                 description="Real-time Messaging App for one-to-one chats, powered by Pusher."
//               />
//         </div>

//         <Carousel className='hidden md:block'>
//           <CarouselContent>
//             <CarouselItem className='basis-1/3 '>
//               <ProjectCard
//                 src="/ecommerce-dashboard.png"
//                 title="Ecommerce Dashboard"
//                 description="E-commerce Admin Dashboard to manage products, stores, and seamlessly connect with the storefront."
//               />
//             </CarouselItem>

//             <CarouselItem className='basis-1/3'>
//               <ProjectCard
//                 src="/ecommerce-store1.png"
//                 title="Ecommerce Store "
//                 description="E-commerce Storefront managed by the Admin Dashboard, enabling product browsing and secure Stripe payments."
//               />
//             </CarouselItem>

//             <CarouselItem className='basis-1/3'>
//               <ProjectCard
//                 src="/discord-clone3.png"
//                 title="Team Chat Application"
//                 description="Real-time Team chat application inspired from Discord with servers, channels, and direct messaging powered by Socket.io."
//               />
//             </CarouselItem>

//             <CarouselItem className='basis-1/3'>
//               <ProjectCard
//                 src="/messenger-clone.png"
//                 title="Messaging App"
//                 description="Real-time Messaging App for one-to-one chats, powered by Pusher."
//               />
//             </CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>

//       </div>
//     </div>
//   )
// }

// export default Projects

// "use client";

// import { useEffect, useRef } from "react";
// import ProjectCard from "../sub/ProjectCard";
// import { Projects } from "@/constants";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register plugin at module level
// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScrollProjects = () => {
//   const projectsSectionRef = useRef(null);
//   const projectsContainerRef = useRef(null);
//   const progressRef = useRef(null);

//   useEffect(() => {
//     // Ensure refs are available
//     if (!projectsSectionRef.current || !projectsContainerRef.current) {
//       return;
//     }

//     // Create the horizontal scroll timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: projectsSectionRef.current,
//         start: "top top",
//         end: () => `+=${Projects.length * 200}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         onUpdate: (self) => {
//           // Update progress bar
//           if (progressRef.current) {
//             const progress = self.progress * 100;
//             progressRef.current.style.width = `${progress}%`;
//           }
//         }
//       }
//     });

//     // Animate the horizontal movement
//     tl.to(projectsContainerRef.current, {
//       x: `-${(Projects.length * 28) - 75}vw`,
//       ease: "none"
//     });

//     // Cleanup function
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [Projects.length]);

//   return (
//     <div 
//     id="projects"
//     className="py-20 px-10 hidden md:block">
//       {/* Projects Section - Horizontal Scroll */}
//       <div 
//         ref={projectsSectionRef}
//         className="relative overflow-hidden"
//       >
//         {/* Fixed header and progress bar */}
//         <div className="">
//           <h2 className="text-[50px] font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//             My Projects
//           </h2>
          
//           {/* Progress Bar */}
//           <div className="max-w-md mx-auto">
//             <div className="w-full bg-gray-700 rounded-full h-3">
//               <div 
//                 ref={progressRef}
//                 className="bg-gradient-to-r  from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-300 ease-out"
//                 style={{ width: '0%' }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* Projects Container */}
//         <div 
//           ref={projectsContainerRef}
//           className="flex pt-20 gap-12 px-8"
//           style={{ width: `${Projects.length * 28}vw` }}
//         >
//           {Projects.map((project, index) => (
//             <div 
//               key={project.title}
//               className="flex-shrink-0 flex items-center justify-center"
//               style={{ width: '25vw' }}
//             >
//               {/* Use your ProjectCard component here */}
//               <ProjectCard
//                 src={project.src}
//                 title={project.title}
//                 description={project.description}
//                 websiteLink={project.websiteLink}
//                 githubLink={project.githubLink}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScrollProjects;

"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects } from "@/constants";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin at module level
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollProjects = () => {
  const projectsSectionRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure refs are available
    if (!projectsSectionRef.current || !projectsContainerRef.current) {
      return;
    }

    // Calculate exact scroll distance - show 3 cards at a time
    const scrollDistance = (Projects.length - 3) * 33.33; // Each card is 33.33vw (100/3)

    // Create the horizontal scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSectionRef.current,
        start: "top top",
        end: () => `+=${Projects.length * 200}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Update progress bar
          if (progressRef.current) {
            const progress = self.progress * 100;
            progressRef.current.style.width = `${progress}%`;
          }
        }
      }
    });

    // Animate using vw units for consistency
    tl.to(projectsContainerRef.current, {
      x: `-${scrollDistance}vw`,
      ease: "none"
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [Projects.length]);

  return (
    <div 
      id="projects"
      className="py-20 hidden md:block"
    >
      {/* Projects Section - Horizontal Scroll */}
      <div 
        ref={projectsSectionRef}
        className="relative overflow-hidden"
      >
        {/* Fixed header and progress bar */}
        <div className="px-10 mb-10">
          <h2 className="text-[50px] font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            My Projects
          </h2>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                ref={progressRef}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Projects Container */}
        <div 
          ref={projectsContainerRef}
          className="flex gap-8"
          style={{ paddingLeft: '60px', paddingRight: '60px' }}
        >
          {Projects.map((project, index) => (
            <div 
              key={project.title}
              className="flex-shrink-0"
              style={{ width: 'calc(33.33vw - 60px)' }}
            >
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
                websiteLink={project.websiteLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollProjects;