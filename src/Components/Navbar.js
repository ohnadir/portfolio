import React, { useState } from 'react';
import '../Style/Navbar.css'
import { MdClose } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from "react-scroll";
import { Drawer } from 'antd';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'works'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'skills'
        },
        {
            id: 6,
            link: 'contact'
        }
    ]
    return (
        <div className='navbar  fixed w-full top-0  '>
            <div className=' max-w-7xl mx-auto flex justify-between items-center h-20'>
                
                    
                <div className='pl-5'>
                    <h1 className='logo m-0 p-0'>N</h1>
                </div>
                <div className='hidden md:flex items-center justify-center gap-4'>
                    <ul className='flex items-center mb-0'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='navLinks capitalize duration-200'>
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a href="/nadirhossainResume.pdf" target='_blank' download='nadirhossainResume'>
                        <button className='resumeBtn mr-5'>Resume</button>
                    </a>
                </div>
                
                <div onClick={() => setOpen(true)} className='cursor-pointer pr-4 z-10 m-0 text-gray-500 md:hidden'>
                    <BiMenuAltRight className='text-[#64ffda]' size={35} />
                </div>
            </div>
            <Drawer 
                title="Basic Drawer" 
                placement="right"
                bodyStyle={{"padding": "0px"}}
                headerStyle={{"borderBottom": "0px ", "display": "none"}}
                onClose={()=>setOpen(false)} open={open}>
                    <div className=' h-screen flex bg-[#101E34]  items-center justify-center '>
                        <div>
                            
                        
                        <div className=' flex items-center text-[#64ffda] justify-end absolute top-8 right-8 '>
                            <MdClose className='cursor-pointer' onClick={() => setOpen(false)} size={35} />
                        </div>
                        <div className='flex flex-col mobile items-center justify-center gap-4'>
                            <ul className='flex flex-col items-center mb-0'>
                                {links.map(({ id, link }) => (
                                    <li key={id} className='navLinks my-5  capitalize duration-200'>
                                        <Link  to={link} className="mobileLinks" smooth duration={500}>
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <a href="/nadirhossainResume.pdf" target='_blank' download='nadirhossainResume'>
                                <button className='resumeBtn '>Resume</button>
                            </a>
                        </div>
                        </div>
                    </div>
            </Drawer>

        </div>

    );
};

export default Navbar;