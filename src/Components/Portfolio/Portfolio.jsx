import React from 'react';
import arrayDestruct from '../../Assets/arrayDestruct.jpeg';
import installNode from '../../Assets/installNode.jpeg';
import navbar from '../../Assets/navbar.jpeg';
import reactParallax from '../../Assets/reactParallax.jpeg';
import reactSmooth from '../../Assets/reactSmooth.jpeg';
import reactWeather from '../../Assets/reactWeather.jpeg'
import paralax from '../../Assets/paralax.jpg';
import { RiExternalLinkFill, RiGithubLine } from 'react-icons/ri';
import '../../Style/Works.css'

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
        <div
            name="portfolio"
            className="worksSection "
        >
            <div className="max-w-screen-md lg:max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-12">
                    <p className="text-xl font-bold heading">Some Things I’ve Built</p>
                </div>

                <div className="grid grid-cols-1 gap-[150px]">
                    <div className='project1'>
                        <div className='md:flex relative items-center hidden'>
                            <div className='w-[60%] relative'>
                                <img src={paralax} className='w-[600px]' alt="" />
                                <div className='overlay'>

                                </div>
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
                                    <a href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'><RiGithubLine/></a>
                                    <a href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'><RiExternalLinkFill/></a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className=''>
                                <img src={paralax}  alt="" />
                            </div>
                            <div className='absolute top-0 bg-red-600 h-full py-10'>
                                <div className='w-[600px] px-6 pt-6'>
                                    <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                    <h1 className='text-2xl'>Halcyon Theme</h1>
                                </div>
                                <div className='px-6 py-8'>
                                    <p className=' text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </div>
                                <div className='px-6'>
                                    <ul className='flex gap-3  mb-2'>
                                        <li>Vs Code</li>
                                        <li>Sublime Text</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                    </ul>
                                </div>
                                <div className='flex text-[20px] px-6 gap-5 items-center '>
                                    <a href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'><RiGithubLine/></a>
                                    <a href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'><RiExternalLinkFill/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project2'>
                        <div className='md:flex relative items-center hidden'>
                            
                            <div className='w-[60%] z-10 '>
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
                                    </ul>
                                </div>
                                <div className='flex text-[20px] gap-5 items-center justify-start'>
                                    <a href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'><RiGithubLine/></a>
                                    <a href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'><RiExternalLinkFill/></a>
                                </div>
                            </div>
                            <div className='w-[60%] absolute right-0'>
                                <img src={paralax} className='w-[600px]' alt="" />
                                <div className='overlay'>

                                </div>
                            </div>
                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className=''>
                                <img src={paralax}  alt="" />
                            </div>
                            <div className='absolute top-0 bg-red-600 h-full py-10'>
                                <div className='w-[600px] px-6 pt-6'>
                                    <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                    <h1 className='text-2xl'>Halcyon Theme</h1>
                                </div>
                                <div className='px-6 py-8'>
                                    <p className=' text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </div>
                                <div className='px-6'>
                                    <ul className='flex gap-3  mb-2'>
                                        <li>Vs Code</li>
                                        <li>Sublime Text</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                    </ul>
                                </div>
                                <div className='flex text-[20px] px-6 gap-5 items-center '>
                                    <a href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'><RiGithubLine/></a>
                                    <a href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'><RiExternalLinkFill/></a>
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
                                    <a href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'><RiGithubLine/></a>
                                    <a href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'><RiExternalLinkFill/></a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 relative md:hidden'>
                            <div className=''>
                                <img src={paralax}  alt="" />
                            </div>
                            <div className='absolute top-0 bg-red-600 h-full py-10'>
                                <div className='w-[600px] px-6 pt-6'>
                                    <p className='text-[#64ffda] mb-1'>Featured Project</p>
                                    <h1 className='text-2xl'>Halcyon Theme</h1>
                                </div>
                                <div className='px-6 py-8'>
                                    <p className=' text-[14px]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                </div>
                                <div className='px-6'>
                                    <ul className='flex gap-3  mb-2'>
                                        <li>Vs Code</li>
                                        <li>Sublime Text</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                        <li>Atom</li>
                                    </ul>
                                </div>
                                <div className='flex text-[20px] px-6 gap-5 items-center '>
                                    <a href="https://github.com/ohnadir/portfolio" rel="noreferrer noopener" target='_blank'><RiGithubLine/></a>
                                    <a href="https://portfolio-nadirhossain.vercel.app/" rel="noreferrer noopener" target='_blank'><RiExternalLinkFill/></a>
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