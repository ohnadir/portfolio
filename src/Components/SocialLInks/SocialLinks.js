import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgOptions } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import '../../Style/SocialLinks.css'

const SocialLinks = () => {
    const [open, setOpen] = useState(false)
    const links = [
        {
            id: 2,
            child: <TbBrandGithub size={25} />,
            href: "https://github.com/ohnadir",
        },
        {
            id: 1,
            child: <TiSocialLinkedin size={30} />,
            href: "https://www.linkedin.com/in/ohnadir/"
        },
        {
            id: 3,
            child: <HiOutlineMail size={25} />,
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=nadirhossain336@gmail.com",
        },
        {
            id: 4,
            child: <BsFillPersonLinesFill size={25} />,
            href: "/nadirResume2.pdf",
            download: true,
        },
    ];
    return (
        <div className='socialLink'>
            <div className="hidden md:flex flex-col items-center justify-center top-[65%] left-9 fixed">
                <ul className=''>
                    {links.map(({ id, child, href, download }) => (
                        <li key={id} className= "iconItem">
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer noopener">{child}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=''>
                <div className='block  md:hidden h-[50px] w-[50px] bg-gray-500 rounded-full flex items-center justify-center p-1 top-[85%] right-10 fixed cursor-pointer'>
                    <CgOptions className='text-white text-5xl' onClick={()=>setOpen(!open)} />
                    {
                        open && <div className='flex'>
                            <a href="https://github.com/ohnadir" target='_blank' rel="noreferrer noopener">
                                <FaGithub className='absolute top-[-40px] left-2 text-3xl text-white'/>
                            </a>
                            <a href="https://www.linkedin.com/in/ohnadir/" target='_blank' rel="noreferrer noopener" >
                                <GrLinkedinOption className='absolute bottom-[-35px] left-3 text-3xl text-white'/>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nadirhossain336@gmail.com" target='_blank' rel="noreferrer noopener">
                                <HiOutlineMail className='absolute top-[10px] right-[-40px] text-3xl text-white'/>
                            </a>
                            <a href="https://www.facebook.com/qx.nadir/" target='_blank' rel="noreferrer noopener">
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