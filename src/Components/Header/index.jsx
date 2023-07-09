import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import './Header.scss'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    
  return (
    <div name="home" className='header-container  home '>
        <div className='flex justify-center py-16 md:py-0 items-center'>
            <div className='w-full  text-center'>
                <h1 className='heading'>Hi, I&apos;m Nadir Hossain.</h1>
                <h2 className='title'>

                
                <TypeAnimation
                    sequence={['Frontend' ,'Developer']}
                    speed={1}
                    // style={{ fontSize: '2em' }}
                    repeat={Infinity}
                    />
                    </h2>
                <p className='title-text'>
                    I'm a Fullstack developer specializing in building (and occasionally <br className='hidden md:block' /> front-end) exceptional digital experiences. 
                    Currently, I&apos;m focused on <br className='hidden md:block'/> building accessible, 
                    e-commerce web application like <span className='text-[#00abf0]'>Addidas</span>.
                </p>
                <div className='flex items-center justify-center'>
                    <a
                        href="/nadirhossainResume.pdf" download='nadirhossainResume'
                        smooth
                        duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'>Resume
                        <span className='group-hover:rotate-90 duration-300'><BsArrowRightShort size={25} />
                        </span>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header