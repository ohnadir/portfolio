import React from 'react';
const About = () => {

    return (
        
        <div
            name="about"
            className="w-full 0 h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20 capitalize">
                    I have already known HTML5, CSS3, BOOTSTRAP,
                    TAILWIND,DEISY UI, JAVASCRIPT, ES6, REACT js, REDUX, SASS, NODE
                    JS,EXPRESS JS,FIREBASE, JWT, JSON, HEROKU, STRIPE, MONGODB, POSTMAN.And now I
                    am learning Python.
                </p>

                <br />

                <p className="text-xl">
                    I need to get ready for remembering my dream.Program myself for waking
                    up as soon as me dream what I want to dream.
                </p>
                <p> I wanna learn full stack web developer and career build up in this
                    field.</p>
            </div>
        </div>
    );
};

export default About;