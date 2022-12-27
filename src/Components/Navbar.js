import React from 'react';
import '../Style/Navbar.css'
import { Link } from "react-scroll";

const Navbar = () => {

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
                        <button className='resumeBtn mr-5'>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;