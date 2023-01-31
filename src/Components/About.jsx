import React from 'react';
import '../Style/About.css';
import nadir from '../Assets/Experience/nadir.jpg'
const About = () => {

    return (
        
        <div name="about" className="about w-full  md:h-screen pb-16 pt-28 md:py-0  text-white">
            
            <div className="max-w-screen-md  lg:max-w-screen-lg px-5 sm:px-12  mx-auto flex flex-col justify-center w-full h-full">
                <div className='flex gap-2 mb-10 items-center'>
                    <span className='text-[#5FF1D0] text-[24px]'>01.</span>
                    <h1 className='text-[24px] text-[#ccd6f6] m-0'>About me</h1>
                </div>
                <div className='flex flex-col-reverse md:flex-row gap-10'>
                    <div className='w-full md:w-[60%]'>
                        <p className="">
                            Hello! My name is Nadir and 
                            I enjoy creating things that live on the internet. 
                            My interest in web development started back in 2020 
                            when I decided to try editing custom web site — turns out 
                            coding together a custom reblog button taught me a lot about 
                            HTML, JS & CSS!
                        </p>
                        <br />
                        <p className="">
                            Fast-forward to today, and I’ve had the privilege of working at a software company, a start-up. 
                            My main focus these days is building accessible, inclusive products and 
                            digital experiences.
                        </p> <br />
                        <p> I also recently working into a project that covers everything you 
                            need to build a web app with the REST API using Node & React.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <div className=''>
                            <ul className='skills-list'>
                                <li>JavaScript</li>
                                <li>Redux</li>
                                <li>Socket.io</li>
                                <li>TypeScript</li>
                                <li>Next.js</li>
                                <li>0auth2</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[40%] mb-8 md:mb-0 h-fit relative flex mx-auto flex-col gap-10'>
                        <img src={nadir} className="z-10" alt="" />
                        <div className='borderOverlay'>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;