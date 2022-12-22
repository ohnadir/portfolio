import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wdm0m0k', 'template_ayhu5jo', form.current, 'Yj-98tghvdyFwPy1I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col  justify-center max-w-screen-md  lg:max-w-screen-lg px-5 sm:px-12 md:px-0 mx-auto h-full">
                <div className="pb-8">
                    <p className="text-2xl font-bold text-center">
                    Get In Touch
                    </p>
                    <p className='text-center py-5'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                </div>

                <div className=" flex justify-center items-center">
                    <form
                        ref={form} onSubmit={sendEmail}
                        className=" flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text" name="user_name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="email" name="user_email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;