import React from 'react'
import { Link } from "react-scroll";
import { BsArrowRightShort } from "react-icons/bs";
import '../../Style/Home.css'
import img from "../../Assets/nadir.png"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg p-4 mx-auto flex gap-10 md:flex-row flex-col-reverse  items-center justify-center h-full px-4'>
            <div className='w-full md:w-1/2 '>
                <h2 className='text-red-300'>Hi, my name is</h2>
                <h1 className='big-heading'>Nadir Hossain.</h1>
                <h3 class="big-heading">I build things for the web.</h3>
                <p className='text-gray-500 py-4'>
                    I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span className='text-[#5FF1D0]'>Upstatement</span>.
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
            <div className='w-[50%]'>
                <figure className=''>
                    <img className='' src={img} alt=""/>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Home