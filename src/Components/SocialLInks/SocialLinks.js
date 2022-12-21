import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgOptions } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import '../../Style/SocialLinks.css'

const SocialLinks = () => {
    const [open, setOpen] = useState(false)
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} /> LinkedIn 
                </>
            ),
            href: "https://www.linkedin.com/in/ohnadir/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} /> GitHub 
                </>
            ),
            href: "https://github.com/ohnadir",
        },
        {
            id: 3,
            child: (
                <>
                   <HiOutlineMail size={30} /> Mail 
                </>
            ),
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=qx.nadir@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill size={30} /> Resume 
                </>
            ),
            href: "/nadirResume2.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];
    return (
        <div className='socialLink'>
            <div className="hidden md:flex flex-col top-[35%] right-0 fixed">
                <ul>
                    {links.map(({ id, child, href, style, download }) => (
                        <li
                            key={id}
                            className={
                                "iconItem" +
                                " " +
                                style
                            }
                        >
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=''>
                <div className='block  md:hidden h-[50px] w-[50px] bg-gray-500 rounded-full flex items-center justify-center p-1 top-[85%] right-10 fixed cursor-pointer'>
                    <CgOptions className='text-white text-5xl' onClick={()=>setOpen(!open)} />
                    {
                        open && <div className='flex'>
                            <a href="https://github.com/ohnadir" target='_blank'>
                                <FaGithub className='absolute top-[-40px] left-2 text-3xl text-white'/>
                            </a>
                            <a href="https://www.linkedin.com/in/ohnadir/" target='_blank'>
                                <GrLinkedinOption className='absolute bottom-[-35px] left-3 text-3xl text-white'/>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=qx.nadir@gmail.com" target='_blank'>
                                <HiOutlineMail className='absolute top-[10px] right-[-40px] text-3xl text-white'/>
                            </a>
                            <a href="https://www.facebook.com/qx.nadir/" target='_blank'>
                                <FaFacebookF className='absolute top-[10px] left-[-35px] text-3xl text-white'/>
                            </a>
                        </div>
                    }
                    
                </div>
                
            </div>
        </div>
    );
};

export default SocialLinks;