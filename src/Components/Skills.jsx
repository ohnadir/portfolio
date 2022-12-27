import React from 'react';
import html from '../Assets/Experience/html.png';
import css from '../Assets/Experience/css.png';
import javascript from '../Assets/Experience/javascript.png';
import reactImage from '../Assets/Experience/react.png';
import nextjs from '../Assets/Experience/nextjs.png';
import graphql from '../Assets/Experience/graphql.png';
import github from '../Assets/Experience/github.png';
import tailwind from '../Assets/Experience/tailwind.png';
import node from '../Assets/Experience/node.js.png';
import mongodb from '../Assets/Experience/mongodb.png';
import express from '../Assets/Experience/express.png';
import jwt from '../Assets/Experience/jwt.png';
import redux from '../Assets/Experience/redux.png';
import firebase from '../Assets/Experience/firebase.png';
import angular from '../Assets/Experience/angular.png';
import '../Style/Skills.css';
import Slider from "react-slick";


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white",
        },
        {
            id: 7,
            src: graphql,
            title: "GraphQL",
            style: "shadow-pink-400",
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 9,
            src: node,
            title: "Node.js",
            style: "shadow-[#7ab463]",
        },{
            id: 10,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-[#4c9245]",
        },{
            id: 11,
            src: express,
            title: "Express.js",
            style: "shadow-gray-400",
        },{
            id: 12,
            src: jwt,
            title: "JWT",
            style: "shadow-[#00b9f1]",
        },{
            id: 13,
            src: redux,
            title: "Redux",
            style: "shadow-[#764abc]",
        },{
            id: 14,
            src: firebase,
            title: "Firebase",
            style: "shadow-[#ffcb2b]",
        },{
            id: 15,
            src: angular,
            title: "Angular",
            style: "shadow-[#c3002e]",
        },
    ];
    const settings = {
        arrow:false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
      };

    return (
        <div name="skills" className="skills pt-28">
            <div className="max-w-screen-md   lg:max-w-screen-lg px-5 sm:px-12   mx-auto text-white">
                <div className=''>
                    <div className='flex gap-2 items-center'>
                        <span className='text-[#5FF1D0] text-[24px]'>04.</span>
                        <h1 className='text-[24px] text-[#ccd6f6] m-0'>Skills</h1>
                    </div>

                    <div className="overflow-x-hidden py-20">
                        <Slider {...settings}>
                            {techs.map(({ id, src, title, style }) => (
                                <div key={id} className={style}>
                                    <img src={src} alt="" className="w-16 mx-auto" />
                                    <p className="mt-4 text-center text-[#8892B0]">{title}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;