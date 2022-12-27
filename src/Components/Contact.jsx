import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xnetf2c', 'template_d9b3uug', form.current, 'eDYPKkkHpzrxJc33H')
            .then((result) => {
                if(result.text ==="OK"){
                    e.target.reset()
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div
            name="contact"
            className="w-full pb-16  md:py-0 md:h-screen bg-[#101E34] pt-28  text-white"
        >
            <div className="flex flex-col justify-center max-w-screen-md  lg:max-w-screen-lg px-5 sm:px-12  mx-auto h-full">
            <div className='flex gap-2  items-center'>
                    <span className='text-[#5FF1D0] text-[24px]'>05.</span>
                    <h1 className='text-[24px] text-[#ccd6f6]'>Get in touch</h1>
                </div>
                <p className='text-center text-[#8892B0] pt-5 mb-10'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>

                <div className="form flex justify-center items-center">
                    <form
                        ref={form} onSubmit={sendEmail}
                        className=" flex flex-col w-full md:w-1/2">
                        <input
                            type="text" name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent text-white"
                        />
                        <input
                            type="email" name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent"
                        ></textarea>

                        <button type="submit" className="mx-auto flex items-center talkBtn">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;