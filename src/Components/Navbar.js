import React, { useState } from 'react';
import '../Style/Navbar.css'
import { FaTimes } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from "react-scroll";

const Navbar = () => {

    const [nav, setNav] = useState(false);

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
        <div className='navbar  fixed w-full top-0  px-4'>
            <div className=' max-w-7xl mx-auto flex justify-between items-center h-20'>
                <div>
                    <h1 className='logo'>N</h1>
                </div>
                <div className='hidden md:flex items-center justify-center gap-4'>
                    <ul className='flex'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='navLinks capitalize duration-200'>
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a href="/nadirResume2.pdf" target='_blank' download='nadirResume'>
                        <button className='resumeBtn'>Resume</button>
                    </a>
                </div>
                
                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                    {
                        nav ? <FaTimes size={25} /> : <BiMenuAltRight className='text-[#64ffda]' size={35} />
                    }
                </div>

                {
                    nav && (
                        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>

                            {links.map(({ id, link }) => (
                                <li key={id} className='px-4 cursor-pointer capitalize py-4 text-xl hover:text-[#64ffda] hover:scale-105 duration-200'>
                                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>

        </div>

    );
};

export default Navbar;