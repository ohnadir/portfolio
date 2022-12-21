import React from 'react';
import '../Style/About.css'
const About = () => {

    return (
        
        <div
            name="about"
            className="w-full 0 h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me 
                    </p>
                </div>

                <p className="text-xl mt-20 capitalize">
                    Hello! My name is Nadir and 
                    I enjoy creating things that live on the internet. 
                    My interest in web development started back in 2012 
                    when I decided to try editing custom Tumblr themes — turns out 
                    hacking together a custom reblog button taught me a lot about 
                    HTML & CSS!
                </p>

                <br />

                <p className="text-xl">
                Fast-forward to today, and I’ve had the privilege of working at an 
                advertising agency, a start-up, a huge corporation, and a student-led design studio. 
                My main focus these days is building accessible, inclusive products and 
                digital experiences at <span className='text-[#5FF1D0]'>Upstatement</span> for a variety of clients.
                </p>
                <p> I also recently launched a course that covers everything you 
                    need to build a web app with the Spotify API using Node & React.
                </p>
                <p>
                    Here are a few technologies I've been working with recently:
                </p>
                <div className='experience'>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>TypeScript</li>
                        <li>Next.js</li>
                        <li>Passport.js</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;