import React from 'react';
import './About.scss';
import nadir from '../../Assets/Experience/nadir.jpg'
const About = () => {
    return (
        <div name="about" className="about-container">
            <div className="flex flex-col overflow-hidden">
                <div className='mb-10 '>
                    <h1 className='text-[24px] text-[#ccd6f6] m-0'>About me</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-20 lg:gap-0'>
                    <div  className='w-[30%] mb-8 md:mb-0 h-fit relative mx-auto lg:mx-0 flex flex-col gap-10'>
                        <img data-aos="fade-down"  src={nadir} className="z-10" alt="" />
                        <div className='border-overlay'></div>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <p>
                            Hello! My name is Nadir and 
                            I enjoy creating things that live on the internet. 
                            My interest in web development started back in 2020 
                            when I decided to try editing custom web site — turns out 
                            coding together a custom reblog button taught me a lot about 
                            HTML, JS & CSS!
                        </p>
                        <br />
                        <p>
                            Fast-forward to today, and I&apos;ve had the privilege of working at a software company, a start-up. 
                            My main focus these days is building accessible, inclusive products and 
                            digital experiences.
                        </p> <br />
                        <p> I also recently working into a project that covers everything you 
                            need to build a web app with the REST API using Node & React.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <div>
                            <ul className='skills-list'>
                                <li data-aos="fade-left">DSA & OOP</li>
                                <li data-aos="fade-left">Redux</li>
                                <li data-aos="fade-left">Socket.io</li>
                                <li data-aos="fade-left">TypeScript</li>
                                <li data-aos="fade-left">Next.js</li>
                                <li data-aos="fade-left">0auth2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;