import React, { useEffect, useState } from 'react';
import './Navbar.scss'
import { MdClose } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from "react-scroll";
import { Drawer } from 'antd';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('')
    const [show, setShow] = useState(false);

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
            link: 'experience'
        },
        {
            id: 4,
            link: 'works'
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
    
    const controlNavbar = () => {
        if (window.scrollY > 550) {
            setShow(true)
          } else {
            setShow(false)
          }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);
    return (
        <div className='navbar'>
            <div data-aos="fade-down" className='navbar-container'>
                <h1 className='logo'>NADIR</h1>
                <div className='hidden md:flex items-center justify-center gap-4'>
                    <ul className='flex items-center mb-0'>
                        {links.map(({ id, link }) => (
                            <li onClick={()=>setColor(id)} tabIndex={id} key={id} className='nav-links capitalize'>
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {
                        show &&
                        <a href="/nadirhossainResume.pdf" target='_blank' download='nadirhossainResume'>
                            <button className='resume-btn'>Resume</button>
                        </a>
                    }
                </div>
                
                <div onClick={() => setOpen(true)} className='cursor-pointer pr-4 z-10 m-0 text-gray-500 md:hidden'>
                    <BiMenuAltRight className='text-[#00abf0]' size={35} />
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
                            <div className=' flex items-center text-[#00abf0] justify-end absolute top-8 right-8 '>
                                <MdClose className='cursor-pointer' onClick={() => setOpen(false)} size={35} />
                            </div>
                            <div className='flex flex-col mobile items-center justify-center gap-4'>
                                <ul className='flex flex-col items-center mb-0'>
                                    {links.map(({ id, link }) => (
                                        <li key={id} className='navLinks my-5  capitalize duration-200'>
                                            <Link  to={link} className="mobile-links" smooth duration={500}>
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <a href="/nadirhossainResume.pdf" target='_blank' download='nadirhossainResume'>
                                    <button className='resume-btn'>Resume</button>
                                </a>
                            </div>
                        </div>
                    </div>
            </Drawer>
        </div>

    );
};

export default Navbar;