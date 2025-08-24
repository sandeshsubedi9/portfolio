import { Socials } from "@/constants"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 hidden md:block'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex-row items-center flex">
          <Image
            src={"/NavLogo.png"}
            alt="Logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold hidden lg:block ml-[10px] text-gray-300">
            Sandesh Subedi
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between">
          <div className="flex items-center justify-between gap-5 w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="/sandesh-resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-105 hover:text-white font-medium transition duration-200">Resume</a>
            <a href="#skills" className="cursor-pointer hover:scale-105 hover:text-white font-medium  transition duration-200">Skills</a>
            <a href="#projects" className="cursor-pointer hover:scale-105 hover:text-white font-medium transition duration-200">Projects</a>
            <a href="#contact" className="cursor-pointer hover:scale-105 hover:text-white font-medium transition duration-200">Contact</a>
          </div>
        </div>

        {/* <div className="flex flex-row gap-5  items-center ">
          {Socials.map((social) =>(
            <a key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
              src={social.src}
              alt={social.name}
              width={25}
              height={25}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            </a>
          ))}
        </div> */}

        <div className="flex flex-row gap-5 items-center">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <social.icon
                size={25}
                className={`text-white ${social.hoverColor} transition-colors duration-300`}
              />
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Navbar