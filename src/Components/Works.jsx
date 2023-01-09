import React from 'react';
import paralax from '../Assets/paralax.jpg';
import startech from '../Assets/startech.png'
import '../Style/Works.css';

const Works = () => {



    return (
        <div name="works" className="worksSection pt-28">
            <div className="max-w-screen-md lg:max-w-screen-lg  mx-auto px-5 sm:px-12">
                <div className='flex gap-2 mb-10 items-center'>
                    <span className='text-[#5FF1D0] text-[24px]'>03.</span>
                    <h1 className='text-[24px] text-[#ccd6f6] m-0'>Some Things I've Built</h1>
                </div>

                <div className="grid grid-cols-1 md:gap-[150px] pb-[50px]">
                    <div className='project1'>
                        <div className='md:flex relative items-center hidden'>
                            <div className='w-[60%] relative'>
                                <img src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1673291931/Screenshot_49_pcy6um.png" className='w' alt="" />
                                <div className='overlay'></div>
                            </div>
                            <div className='w-[60%] z-10 absolute right-0'>
                                <div className='text-right'>
                                    <p className='text-[#64ffda] mb-1 text-[15px]'>Featured Project</p>
                                    <h1 className='text-[22px] text-[#d7dce2]'>Star Tech</h1>
                                </div>
                                <div className='bg-[#112240] p-6 my-5'>
                                    <p className='text-right text-[#B4C0DE] text-[14px]'>
                                        StarTech is a e-commerce web application that's user order their filter product . User can payment uses cash on delivery or online payment . In admin panel only admin can do CRUD on database 
                                        
                                    </p>
                                </div>
                                <div>
                                    <ul className='flex gap-3 text-[#B4C0DE] text-[14px] justify-end mb-8'>
                                        <li>Redux</li>
                                        <li>Stripe</li>
                                        <li>Tailwind</li>
                                        <li>MongoDB</li>
                                        <li>Node.js</li>
                                        <li>JWT</li>
                                    </ul>
                                </div>
                                <div className='flex text-[20px] gap-5 items-center justify-end'>
                                    <a className='icons' href="https://github.com/ohnadir/startech" rel="noreferrer noopener" target='_blank'>
                                        <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                    <a className='icons -mt-[5px]' href="https://startech-nu.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                        <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className='w-full '>
                                <img src={paralax} className="w-full overlayImg"  alt="" />
                            </div>
                            <div className='overlayContainer'>
                                <div>
                                    <div className=' px-6 header'>
                                        <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                        <h1 className='text-2xl'>Star Tech</h1>
                                    </div>
                                    <div className='px-6 py-3 sm:py-8'>
                                        <p className=' text-[14px]'>
                                            StarTech is a e-commerce web application that's user order their 
                                            filter product . User can payment uses cash on delivery or online 
                                            payment . In admin panel only admin can do CRUD on database 
                                        </p>
                                    </div>
                                    <div className='px-6  pb-2 ulList'>
                                        <ul className='flex flex-wrap leading-[14px] gap-2  mb-2'>
                                            <li>Redux</li>
                                            <li>Stripe</li>
                                            <li>Tailwind</li>
                                            <li>MongoDB</li>
                                            <li>Node.js</li>
                                            <li>JWT</li>
                                        </ul>
                                    </div>
                                    <div className='iconContainer flex text-[20px] px-6 gap-5 items-center pt-5'>
                                        <a className='icons' href="https://github.com/ohnadir/startech" rel="noreferrer noopener" target='_blank'>
                                            <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                        <a className='icons -mt-[5px]' href="https://startech-nu.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                            <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
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
                                    <p className='text-[#64ffda] mb-1 text-[15px]'>Featured Project</p>
                                    <h1 className='text-[22px]'>Halcyon Theme</h1>
                                </div>
                                <div className='bg-[#112240] p-6 my-5'>
                                    <p className='text-left text-[#B4C0DE] text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </div>
                                <div>
                                    <ul className='flex gap-3 justify-start text-[#B4C0DE] text-[14px] mb-8'>
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
                                        <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                    <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                        <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='w-[60%] absolute right-0'>
                                <div className='relative'>
                                    <img src={paralax} className='' alt="" />
                                    <div className='overlay'></div>
                                </div>
                            </div>

                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className='w-full '>
                                <img src={paralax} className="w-full overlayImg"  alt="" />
                            </div>
                            <div className='overlayContainer'>
                                <div>
                                    <div className=' px-6 header'>
                                        <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                        <h1 className='text-2xl'>startech</h1>
                                    </div>
                                    <div className='px-6 py-3 sm:py-8'>
                                        <p className=' text-[14px]'>
                                            Startech is a e-commerce web application.
                                        </p>
                                    </div>
                                    <div className='px-6 ulList'>
                                        <ul className='flex flex-wrap leading-[14px] gap-3  mb-2'>
                                            <li>React.js</li>
                                            <li>Node.js</li>
                                            <li>Redux</li>
                                            <li>MongoDB</li>
                                        </ul>
                                    </div>
                                    <div className='iconContainer flex text-[20px] px-6 gap-5 items-center pt-5'>
                                        <a className='icons' href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'>
                                            <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                        <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                            <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
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
                                <img src={paralax} className='' alt="" />
                                <div className='overlay'></div>
                            </div>
                            <div className='w-[60%] z-10 absolute right-0'>
                            <div className='text-right'>
                                    <p className='text-[#64ffda] mb-1 text-[15px]'>Featured Project</p>
                                    <h1 className='text-[22px]'>Halcyon Theme</h1>
                                </div>
                                <div className='bg-[#112240] p-6 my-5'>
                                    <p className='text-right text-[#B4C0DE] text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </div>
                                <div>
                                    <ul className='flex gap-3 text-[#B4C0DE] text-[14px] justify-end mb-8'>
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
                                        <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                    <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                        <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className='w-full '>
                                <img src={paralax} className="w-full overlayImg"  alt="" />
                            </div>
                            <div className='overlayContainer'>
                                <div>
                                    <div className=' px-6 header'>
                                        <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                        <h1 className='text-2xl'>Fruits</h1>
                                    </div>
                                    <div className='px-6 py-3 sm:py-8'>
                                        <p className=' text-[14px]'>
                                            Fruits is a e-commerce web application.
                                        </p>
                                    </div>
                                    <div className='px-6 ulList'>
                                        <ul className='flex flex-wrap leading-[14px] gap-3  mb-2'>
                                            <li>React.js</li>
                                            <li>Node.js</li>
                                            <li>Redux</li>
                                            <li>MongoDB</li>
                                            <li>MongoDB</li>
                                            <li>MongoDB</li>
                                        </ul>
                                    </div>
                                    <div className='iconContainer flex text-[20px] px-6 gap-5 items-center pt-5'>
                                        <a className='icons' href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'>
                                            <svg  width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                        <a className='icons -mt-[5px]' href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'>
                                            <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-external" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='seeMoreBtn pb-[100px]'>See more</div>
            </div>
        </div>
    );
};

export default Works;