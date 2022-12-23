import React from 'react';
import '../Style/Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
        <div className='max-w-screen-md  lg:max-w-screen-lg px-10 sm:px-12 md:px-0 pb-16 pt-28 md:py-0 mx-auto flex text-white  items-center md:h-screen'>
            <div>
                <div className='flex gap-2 mb-10 items-center'>
                    <span className='text-[#5FF1D0] text-[24px]'>02.</span>
                    <h1 className='text-[24px]'>Where I've Worked</h1>
                </div>
                <div className='flex flex-col md:flex-row   gap-10'>
                    <div className='hidden md:block'>
                        <p className='text-[#5FF1D0] max-w-fit bg-[#112240] px-2 py-2'>
                            eRevolute
                        </p>
                    </div>
                    <div>
                        <h3>Intern <span className='text-[#5FF1D0]'>@ eRevolute</span></h3>
                        <p className='text-[#8892B0] text-[17px]'>May 2018 - Present</p>

                        <ul className='mt-5 criteria text-[#8892B0] text-[15px]'>
                            <li>Write modern, performant, maintainable code for a diverse array of client  and internal projects</li>
                            <li>Work with a variety of different languages, platforms, frameworks, and  content management systems such as JavaScript, TypeScript, Gatsby,  React, ---- Craft, WordPress, Prismic, and Netlify</li>
                            <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience