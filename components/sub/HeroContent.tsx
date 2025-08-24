"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ProfilePhoto from "./profile-photo";

const HeroContent = () => {
    return (
        <motion.div
            id="about-me"
            initial="hidden"
            animate="visible"
            className="flex md:flex-row flex-col-reverse items-center justify-center md:px-20 px-10 mt-48 gap-20 md:gap-0 w-full"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9] rounded-lg"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[18px]" >
                        FullStack Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className=" flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto "
                >
                    Hi, I am
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Sandesh Subedi
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a FullStack Web Developer passionate in developing and designing dynamic, scalable and responsive
                    web applications with modern Technologies like <span className="text-purple-500">React, Nextjs, Typescript, Nodejs, Prisma and Drizzle ORMs, tRPC </span> and daily learning new libraries, tools and services to meet the modern requirements.
                </motion.p>
                <motion.a
                href="/sandesh-resume.pdf" target="_blank" rel="noopener noreferrer"
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    View Resume
                </motion.a>
                
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="md:w-full md:h-full  flex justify-center items-center"
            >
                {/* <Image
                    src="/mainIconsdark.svg"
                    alt="work Icon"
                    height={650}
                    width={650}
                /> */}
                <ProfilePhoto />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent
