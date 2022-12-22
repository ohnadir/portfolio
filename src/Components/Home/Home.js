import React from 'react'
import { Link } from "react-scroll";
import { BsArrowRightShort } from "react-icons/bs";
import '../../Style/Home.css'

const Home = () => {
  return (
    <div name="home" className='home md:h-screen'>
        <div className=' max-w-screen-md  lg:max-w-screen-lg px-5 sm:px-12 md:px-0 mx-auto md:flex py-16 md:py-0 items-center h-full'>
            <div className=''>
                <h2 className='text-[#64ffda] mb-[15px]'>Hi, my name is</h2>
                <h1 className='big-heading'>Nadir Hossain.</h1>
                <h3 class="big-heading2">I build things for the web.</h3>
                <p className='text-[#8892B0] py-4 text-[17px]'>
                    I'm a software engineer specializing in building (and occasionally <br className='hidden md:block' /> designing) exceptional digital experiences. Currently, I’m focused on <br className='hidden md:block'/> building accessible, human-centered products at <span className='text-[#5FF1D0]'>Airbnb</span>.
                </p>
                <div>
                    <Link
                        to="portfolio"
                        smooth
                        duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'>Portfolio
                        <span className='group-hover:rotate-90 duration-300'><BsArrowRightShort size={25} />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home