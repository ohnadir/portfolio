import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CgOptions } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandGithub } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import './SocialLinks.scss';
const SocialLinks = () => {
    const [open, setOpen] = useState(false)
    const links = [
        {
            id: 1,
            child: <TbBrandGithub size={22} />,
            href: "https://github.com/ohnadir",
        },
        {
            id: 2,
            child: <GrLinkedinOption size={22} />,
            href: "https://www.linkedin.com/in/ohnadir/"
        },
        {
            id: 3,
            child: <HiOutlineMail size={22} />,
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=nadirhossain336@gmail.com",
        },
        {
            id: 4,
            child: <BiUser size={22} />,
            href: "/nadirhossainResume.pdf",
            download: true,
        },
    ];
    return (
        <div className='socialLink'>
            <div className="hidden md:flex flex-col items-center justify-center top-[40%] right-5 fixed">
                <ul className=''>
                    {links.map(({ id, child, href, download }) => (
                        <li key={id} className= "iconItem">
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-[#A8B2D1]"
                                download={download}
                                target="_blank"
                                rel="noreferrer noopener">{child}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=''>
                <div className='hidden h-[50px] w-[50px] bg-gray-500 rounded-full flex items-center justify-center p-1 top-[85%] right-10 fixed cursor-pointer'>
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