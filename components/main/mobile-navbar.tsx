import { Socials } from "@/constants"
import Image from "next/image"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "../ui/dropdown-menu"
import { BrainCircuit, FileText, FolderKanban, Menu, MessageCircle, User } from "lucide-react"

const MobileNavbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 md:hidden'>
            <div className="w-[300px] h-full flex items-center justify-center mx-auto ">
                <div className="flex items-center justify-between gap-5 w-full h-auto border border-[#7042f861] bg-[#0300145e]  px-[20px] py-[10px] rounded-full ">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu className=" text-white" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start"
                            className="backdrop-blur-xs rounded-md bg-[#0300145e]/80 border border-[#7042f861] "
                        >
                            <DropdownMenuItem>
                                <FileText className="w-5 h-5 mr-2 text-white" />
                                <a href="/sandesh-resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white">Resume</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BrainCircuit className="w-5 h-5 mr-2 text-white" />
                                <a href="#skills" className="cursor-pointer text-white">Skills</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FolderKanban className="w-5 h-5 mr-2 text-white" />
                                <a href="#projects" className="cursor-pointer text-white ">Projects</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <MessageCircle className="w-5 h-5 mr-2 text-white" />
                                <a href="#contact" className="cursor-pointer text-white">Contact</a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

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
        </div>
    )
}

export default MobileNavbar
