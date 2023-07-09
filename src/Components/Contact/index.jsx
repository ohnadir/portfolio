import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import {  toast } from 'react-toastify';
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentText} from "react-icons/hi";
import { GrLinkedinOption } from "react-icons/gr";
import Nadir from "../../Assets/Experience/IMG-1016.JPG"
const initialItem = {
    name: '',
    email: '',
    message: ''
}
const Contact = () => {
    const [item, setItem]= useState([initialItem]);
    const form = useRef();
    const handleChange = (e)=>{
        setItem( (prev)=> ({...prev, [e.target.name]: e.target.value}))
    }
    if(!item){
        document.getElementById("Button").disabled = true;
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if(!item.name || !item.email || !item.message){
            toast.error("Fill the all field", {
                autoClose: 2000,
            });
        } else{
            emailjs.sendForm('service_xnetf2c', 'template_d9b3uug', form.current, 'eDYPKkkHpzrxJc33H')
            .then((result) => {
                if(result.text ==="OK"){
                    e.target.reset()
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }

    };
    
    
    return (
        <div name="contact" className="contact-container">
            <div className="flex flex-col w-full">
                <h1 className='heading'>Get in touch</h1>

                <div className="form md:flex flex-col lg:flex-row  gap-10 w-full">
                    <div className='border border-[#8892B0] rounded-[6px] w-[50%] hidden md:block p-5 mx-auto'>
                        <img className='max-w-[50%] rounded-[10px] mx-auto' src={Nadir} alt="" />
                        <h1 className='text-[#8892B0] text-2xl font-semibold mt-3'>Nadir Hossain</h1>
                        <h2 className='text-[#8892B0] text-lg font-semibold'>Frontend Developer</h2>
                        <p className='text-[#8892B0] mb-5'>Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
                        <h3 className='text-[#8892B0] text-lg font-semibold '>Contact with me</h3>
                        <div className='contact-option'>
                            <div className="contact-item ">
                                <a href="https://github.com/ohnadir" target='_blank' rel="noreferrer noopener">
                                    <FaGithub size={17} />
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="https://www.linkedin.com/in/ohnadir/" target='_blank' rel="noreferrer noopener" >
                                    <GrLinkedinOption size={20}/>
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nadirhossain336@gmail.com" target='_blank' rel="noreferrer noopener">
                                    <HiOutlineMail size={20}/>
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="/nadirhossainResume.pdf" download='nadirhossainResume' target='_blank' rel="noreferrer noopener">
                                    <HiOutlineDocumentText size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <form
                        ref={form} onSubmit={sendEmail}
                        className=" flex flex-col w-full lg:w-[70%]  h-fit mt-5  lg:mt-0">
                        <input
                            type="text" name="name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            className="p-2 bg-transparent text-white"
                        />
                        <input
                            type="email" name="email"
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            onChange={handleChange}
                            rows="10"
                            
                            className="p-2 bg-transparent"
                        ></textarea>
                        <button 
                        type="submit"
                        className="mx-auto flex items-center talkBtn">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;