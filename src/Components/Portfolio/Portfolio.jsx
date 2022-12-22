import React from 'react';
import arrayDestruct from '../../Assets/arrayDestruct.jpeg';
import installNode from '../../Assets/installNode.jpeg';
import navbar from '../../Assets/navbar.jpeg';
import reactParallax from '../../Assets/reactParallax.jpeg';
import reactSmooth from '../../Assets/reactSmooth.jpeg';
import reactWeather from '../../Assets/reactWeather.jpeg'
import paralax from '../../Assets/paralax.jpg';
import { RiExternalLinkFill, RiGithubLine } from 'react-icons/ri';
import '../../Style/Works.css';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
        },
        {
            id: 2,
            src: reactParallax,
        },
        {
            id: 3,
            src: navbar,
        },
        {
            id: 4,
            src: reactSmooth,
        },
        {
            id: 5,
            src: installNode,
        },
        {
            id: 6,
            src: reactWeather,
        },
    ];

    return (
        <div name="portfolio" className="worksSection ">
            <div className="max-w-screen-md lg:max-w-screen-lg  mx-auto px-12 md:px-0">
                <div className="pb-12">
                    <p className="text-xl font-bold heading">Some Things I’ve Built</p>
                </div>

                <div className="grid grid-cols-1 md:gap-[150px] pb-[100px]">
                    <div className='project1'>
                        <div className='md:flex relative items-center hidden'>
                            <div className='w-[60%] relative'>
                                <img src={paralax} className='w-[600px]' alt="" />
                                <div className='overlay'></div>
                            </div>
                            <div className='w-[60%] z-10 absolute right-0'>
                                <div className='text-right'>
                                    <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                    <h1 className='text-2xl'>Halcyon Theme</h1>
                                </div>
                                <div className='bg-[#112240] p-6 my-5'>
                                    <p className='text-right text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </div>
                                <div>
                                    <ul className='flex gap-3 justify-end mb-2'>
                                        <li>Vs Code</li>
                                        <li>Sublime Text</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                    </ul>
                                </div>
                                <div className='flex text-[20px] gap-5 items-center justify-end'>
                                    <a className='icons' href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'>
                                        <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                    <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                        <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className='w-full '>
                                <img src={paralax} className="w-full"  alt="" />
                            </div>
                            <div className='overlayContainer'>
                                <div>
                                    <div className=' px-6'>
                                        <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                        <h1 className='text-2xl'>Halcyon Theme</h1>
                                    </div>
                                    <div className='px-6 py-3 sm:py-8'>
                                        <p className=' text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                    </div>
                                    <div className='px-6'>
                                        <ul className='flex gap-3  mb-2'>
                                            <li>Vs Code</li>
                                            <li>Sublime Text</li>
                                            <li>Atom</li>
                                            <li>Atom</li>
                                            <li>Atom</li>
                                        </ul>
                                    </div>
                                    <div className='flex text-[20px] px-6 gap-5 items-center '>
                                        <a className='icons' href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'>
                                            <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                        <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                            <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project2'>
                        <div className='md:flex relative items-center hidden'>
                            
                            <div className='w-[60%] z-10'>
                                <div className='text-left'>
                                    <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                    <h1 className='text-2xl'>Halcyon Theme</h1>
                                </div>
                                <div className='bg-[#112240] p-6 my-5'>
                                    <p className='text-left text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </div>
                                <div>
                                    <ul className='flex gap-3 justify-start mb-2'>
                                        <li>Vs Code</li>
                                        <li>Sublime Text</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                    </ul>
                                </div>
                                <div className='flex text-[20px] gap-5 items-center justify-start'>
                                    <a className='icons' href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'>
                                        <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                    <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                        <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='w-[60%] absolute right-0'>
                                <div className='relative'>
                                    <img src={paralax} className='w-[600px] ' alt="" />
                                    <div className='overlay'></div>
                                </div>
                            </div>

                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className=''>
                                <img src={paralax}  alt="" />
                            </div>
                            <div className='overlayContainer'>
                                <div>
                                    <div className=' px-6'>
                                        <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                        <h1 className='text-2xl'>Halcyon Theme</h1>
                                    </div>
                                    <div className='px-6 py-3 sm:py-8'>
                                        <p className=' text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                    </div>
                                    <div className='px-6'>
                                        <ul className='flex gap-3  mb-2'>
                                            <li>Vs Code</li>
                                            <li>Sublime Text</li>
                                            <li>Atom</li>
                                            <li>Atom</li>
                                            <li>Atom</li>
                                        </ul>
                                    </div>
                                    <div className='flex text-[20px] px-6 gap-5 items-center '>
                                        <a className='icons' href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'>
                                            <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                        <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                            <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project3'>
                        <div className='md:flex relative items-center hidden'>
                            <div className='w-[60%] relative'>
                                <img src={paralax} className='w-[600px] ' alt="" />
                                <div className='overlay'></div>
                            </div>
                            <div className='w-[60%] z-10 absolute right-0'>
                                <div className='text-right'>
                                    <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                    <h1 className='text-2xl'>Halcyon Theme</h1>
                                </div>
                                <div className='bg-[#112240] p-6 my-5'>
                                    <p className='text-right text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </div>
                                <div>
                                    <ul className='flex gap-3 justify-end mb-2'>
                                        <li>Vs Code</li>
                                        <li>Sublime Text</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                    </ul>
                                </div>
                                <div className='flex text-[20px] gap-5 items-center justify-end'>
                                    <a className='icons' href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'>
                                        <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                    <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                        <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className=''>
                                <img src={paralax}  alt="" />
                            </div>
                            <div className='overlayContainer'>
                                <div>
                                    <div className=' px-6'>
                                        <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                        <h1 className='text-2xl'>Halcyon Theme</h1>
                                    </div>
                                    <div className='px-6 py-3 sm:py-8'>
                                        <p className=' text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                    </div>
                                    <div className='px-6'>
                                        <ul className='flex gap-3  mb-2'>
                                            <li>Vs Code</li>
                                            <li>Sublime Text</li>
                                            <li>Atom</li>
                                            <li>Atom</li>
                                            <li>Atom</li>
                                        </ul>
                                    </div>
                                    <div className='flex text-[20px] px-6 gap-5 items-center '>
                                        <a className='icons' href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'>
                                            <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                        <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                            <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;