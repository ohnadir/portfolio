import React from 'react'
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
    const links = [
        {
            id: 2,
            child: <TbBrandGithub size={20} />,
            href: "https://github.com/ohnadir",
        },
        {
            id: 1,
            child: <TiSocialLinkedin size={28} />,
            href: "https://www.linkedin.com/in/ohnadir/"
        },
        {
            id: 3,
            child: <HiOutlineMail size={23} />,
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=nadirhossain336@gmail.com",
        },
        {
            id: 4,
            child: <BsFillPersonLinesFill size={20} />,
            href: "/nadirhossainResume.pdf",
            download: true,
        },
    ];
  return (
    <div className='bg-[#101E34] text-white py-10'>
        <div className='md:hidden'>
            <div className="mb-5">
                    <ul className='flex items-center justify-center gap-5'>
                        {links.map(({ id, child, href, download }) => (
                            <li key={id} className= "">
                                <a
                                    href={href}
                                    className=" text-[#A8B2D1] hover:text-[#64ffda] transition-all"
                                    download={download}
                                    target="_blank"
                                    rel="noreferrer noopener">{child}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        <div className='text-center text-[14px]'>
            <p className='text-[#8892B0]'>Designed & Built by Nadir Hossain</p>
        </div>
    </div>
  )
}

export default Footer