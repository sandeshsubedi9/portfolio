
import React from 'react'

const MobileBlackhole = () => {
    return (
        // <div className="relative w-[200px] h-[200px] rounded-full bg-red-700 md:hidden block">
        //     {/* Black hole video aura behind */}
        //     <video
        //         autoPlay
        //         muted
        //         loop
        //         playsInline
        //         className="absolute inset-0 w-full h-full object-cover z-0"
        //     >
        //         <source src="/blackhole.webm" type="video/webm" />
        //     </video>

        //     {/* Center black circular image (profile photo) */}
        //     <div className="absolute inset-0 z-10 flex items-center justify-center">
        //         <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-4 border-[#7042f88b] bg-black">
        //             <Image
        //                 src="/profile-photo.png"
        //                 alt="Profile Photo"
        //                 width={50}
        //                 height={50}
        //                 className="w-full h-full object-cover"
        //             />
        //         </div>
        //     </div>
        // </div>

        // <div className='w-[100px] h-[100px] overflow-hidden rounded-full '>
        //   <video autoPlay muted loop className="rotate-180 absolute top-[-47%] z-[1] w-full h-full md:hidden block object-center">
        //     <source src="/blackhole.webm" type="video/webm" />
        // </video> 
        // </div>

        // <div className='w-[100vw] h-[500px] mx-auto relative md:hidden block bg-red-800'>
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-18%] z-[-1] w-[100vw] h-[500px] object-cover md:hidden block"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
        // </div>

    )
}

export default MobileBlackhole
