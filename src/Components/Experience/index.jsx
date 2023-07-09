import React from 'react';
import './Experience.scss'

const Experience = () => {
  return (
    <div className='experience experience-container' >
        <div data-aos="flip-up">
            <div className='mb-7'>
                <h1 className='text-[24px] text-[#ccd6f6] m-0'>Where I've Worked</h1>
            </div>
            <div className='flex flex-col md:flex-row   gap-10'>
                <div className='hidden md:block'>
                    <p className='text-[#5FF1D0] max-w-fit bg-[#112240] px-2 py-2'>
                        eRevolute
                    </p>
                </div>
                <div>
                    <h3 className='text-[#ccd6f6]'>Intern <span className='text-[#5FF1D0]'>@ eRevolute</span></h3>
                    <p className='text-[#8892B0] text-[17px]'>June 2022 - September 2022</p>
                    <ul className='mt-5 criteria text-[#8892B0] text-[15px]'>
                        <li>Write modern, performant, maintainable code for a diverse array of client  and internal projects</li>
                        <li>Work with a variety of different languages, platforms, frameworks, and  content management systems such as JavaScript, TypeScript, Redux, Next.js etc.</li>
                        <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience