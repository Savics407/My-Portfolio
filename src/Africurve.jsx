import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import Header from './Header';
import apply from './assets/africurve/Apply.png'
import home from './assets/africurve/Home.png'
import login from './assets/africurve/Login.png'
import Footer from './Footer';
import { BsArrowRight } from 'react-icons/bs';
import Form from './Form';
import { GoLinkExternal } from 'react-icons/go'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hoverEffect from 'hover-effect';

import africurve from './assets/africurve.svg'


function Africurve() {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
            }
        }]
    };

    const projectImages =
        [{
            id: 1,
            src: africurve,
            // src: "Images/1.png",
            alt: "Image 1"
        },
        {
            id: 2,
            src: home,
            alt: "Image 2 "
        },
        {
            id: 3,
            src: apply,
            // src: "Images/3.png",
            alt: "Image 3"
        },
        {
            id: 4,
            src: login,
            // src: "Images/3.png",
            alt: "Image 4"
        }
        ]

    return (
        <div className='font-Montserrat'>

            <Header />
            <div className='glow hidden md:flex lg:h-[400px] h-[400px] px-10 items-end justify-center py-20'>
                <div className="text-center ">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-intro font-josefin text-3xl lg:text-4xl mb-3'>Africurve</motion.h1>
                </div>

            </div>
            <div className='md:hidden h-[300px] px-10 items-end justify-center flex py-10'>
                <div className="text-center ">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-intro font-josefin text-3xl lg:text-4xl mb-3'>Africurve</motion.h1>
                </div>

            </div>
            <div className='md:px-10 p-5'>

                <div className="container pb-20">

                    <Slider {...settings}>
                        {projectImages.map((item) => (
                            <div key={item.id} className="lg:px-5">
                                <img src={item.src} alt={item.alt} className="rounded-xl" />
                                {/* <h1> {item.alt}</h1> */}

                            </div>
                        ))}

                    </Slider>
                </div>
                <div className="container p-5 md:p-10 lg:p-20 text-gray-300 bg-border text-sm md:text-base">
                    <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-between items-center'>
                        <div className='flex flex-wrap'>
                            <h1 className=' px-4 bg-border rounded py-1 mb-2'>Wordpress</h1>
                            <h1 className=' px-4 mx-2 bg-border rounded py-1 mb-2'>Elementor</h1>
                            <h1 className=' px-4 bg-border rounded py-1 mb-2'>RevSlider</h1>

                        </div>
                        <div className='text-2xl'>
                            <a href="https://africurve.com" target="_blank">  <GoLinkExternal /></a>
                        </div>
                    </div>
                    <p>
                        {/* Introduction: */}
                        Africurve is a unique modeling agency and human resource management platform that aims to equip talented models with the skills and resources they need to succeed in the modelling industry. The company approached me to develop a custom WordPress website that would reflect its brand, and provide a comprehensive platform for managing models and resources.

                        <br />
                        <br />
                        One of the main challenges in developing the Africurve website was to create a platform that would be both user-friendly and functional. The website needed to provide a centralized location for managing resources and models, while also offering a visually-appealing and engaging platform for users to explore.
                        <br />
                        <br />
                        To meet these challenges, I utilized WordPress and the Elementor page builder to create a custom website for Africurve. The website was designed to be both user-friendly and functional, with a focus on delivering an engaging user experience.

                        <br />
                        <br />
                        The website was designed to reflect the company's brand, giving it an afrocentric experience with a modern and clean layout, and a color scheme that conveyed a sense of sophistication and professionalism. I utilized Elementor to create custom pages and templates, and to ensure that the website was optimized for speed and performance.
                        <br />
                        <br />
                        Since the beta version launch of the website, Africurve has seen a significant increase in engagement and conversions. The platform has been well-received by users, who appreciate its design and functionality, and the company has received positive feedback from models and resources who have used the platform.

                        <br />
                        <br />
                        The Africurve website is a great example of how a custom WordPress website can help a business to succeed in a competitive market. By utilizing the latest tools and technologies, and focusing on design, performance, and user-experience, we were able to create a platform that not only looks great, but also delivers results.
                    </p>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='pt-28 glow4 '>
                <div className="container">
                    <Form info={{
                        title: "Let's Work together",
                        description: `Want to discuss about your project? <br />I would be more excited to hear from you. Let's get started!`,

                        message: "enter the project description"
                    }} />

                </div>

                <Footer />
            </motion.div>


        </div>
    )
}

export default Africurve