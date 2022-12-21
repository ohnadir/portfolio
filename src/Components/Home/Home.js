

import React from 'react'
import { Link } from "react-scroll";
import { BsArrowRightShort } from "react-icons/bs";
import '../Home/Home.css'
import img from "../../Assets/nadir.JPG"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg p-4 mx-auto flex md:flex-row flex-col-reverse  items-center justify-center h-full px-4'>
            <div className='w-1/2 '>
                <h2 className='text-3xl sm:text-4xl text-red-300'>A full stack web developer</h2>
                <p className='text-gray-500 py-4'>
                   This is Nadir Hossain.I have experience
                  in web dev skill since 2021. And I've good at HTML5, CSS3, BOOTSTRAP,
                   TAILWIND,DEISY UI, JAVASCRIPT, ES6, REACT js, REDUX, SASS, NODE
                   JS,EXPRESS JS,FIREBASE, JWT, JSON, HEROKU, STRIPE, MONGODB, POSTMAN.
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
            <div className='w-1/2  '>
                <figure className=''>
                    <img className='' src={img} alt=""/>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Home