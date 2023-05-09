import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import Header from './Header';
import reico from './assets/reico/body.svg'
import body from './assets/reico/hxafrica.svg'
import login from './assets/reico/login.svg'
import avater from './assets/reico/setAvater.png'
import setup from './assets/reico/setup.png'
import signup from './assets/reico/sign-up.svg'
import success from './assets/reico/AvaterSuccess.png'
import otp from './assets/reico/verification.svg'
import Footer from './Footer';
import { BsArrowRight } from 'react-icons/bs';
import Form from './Form';
import { GoLinkExternal } from 'react-icons/go'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hoverEffect from 'hover-effect';

import africurve from './assets/africurve.svg'


function HxAfrica() {
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
            src: body,
            // src: "Images/1.png",
            alt: "Image 1"
        },
        {
            id: 2,
            src: reico,
            alt: "Image 2 "
        },
        {
            id: 3,
            src: signup,
            // src: "Images/3.png",
            alt: "Image 3"
        },
        {
            id: 4,
            src: otp,
            // src: "Images/3.png",
            alt: "Image 4"
        },
        // {
        //     id: 5,
        //     src: setup,
        //     // src: "Images/3.png",
        //     alt: "Image 5"
        // },
        {
            id: 5,
            src: avater,
            // src: "Images/3.png",
            alt: "Image 6"
        },
        {
            id: 6,
            src: success,
            // src: "Images/3.png",
            alt: "Image 7"
        },
        {
            id: 7,
            src: login,
            // src: "Images/3.png",
            alt: "Image 8"
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
                        className='text-intro font-josefin text-3xl lg:text-4xl mb-3'>HxAfrica</motion.h1>
                </div>

            </div>
            <div className='md:hidden h-[300px] px-10 items-end justify-center flex py-10'>
                <div className="text-center ">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-intro font-josefin text-3xl lg:text-4xl mb-3'>HxAfrica</motion.h1>
                </div>

            </div>
            <div className='md:px-10 p-5'>

                <div className="container pb-20">

                    <Slider {...settings}>
                        {projectImages.map((item) => (
                            <div key={item.id} className="lg:px-24">
                                <img src={item.src} alt={item.alt} className="rounded-xl" />
                                {/* <h1> {item.alt}</h1> */}

                            </div>
                        ))}

                    </Slider>
                </div>
                <div className="container p-5 md:p-10 lg:p-20 text-gray-300 bg-border text-sm md:text-base">
                    <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-between items-center'>
                        <div className='flex flex-wrap'>
                            <h1 className=' px-4 mr-2 bg-border rounded py-1 mb-2'>ReactJs</h1>
                            <h1 className=' px-4 mx-2 bg-border rounded py-1 mb-2'>Figma</h1>
                            <h1 className=' px-4 mx-2 bg-border rounded py-1 mb-2'>TailwindCss</h1>
                            <h1 className=' px-4 mx-2 bg-border rounded py-1 mb-2'>Git</h1>

                        </div>
                        <div className='text-2xl'>
                            <a href="https://hxafrica.com/" target="_blank">  <GoLinkExternal /></a>
                        </div>
                    </div>
                    <p>
                        <span className='font-josefin text-intro'> Introduction:</span>
                        <br />
                        HxAfrica is a cutting-edge real estate investment platform that utilizes blockchain technology to provide a secure and efficient platform for investors. The platform was designed and developed with a focus on user experience, and leverages the latest web technologies, including Reactjs, TailwindCss, Figma, Git, and RESTful APIs.
                        <br />
                        <br />
                        One of the biggest challenges in developing the HxAfrica platform was to create a user-friendly interface that would make it easy for users to navigate the platform and access the information they need. Additionally, the platform needed to be optimized for speed and performance, while also being secure and reliable. The platform was also required to seamlessly integrate with the backend services provided by the RESTful APIs.
                        <br />
                        <br />



                        To meet these challenges, I leveraged the latest web technologies, including Reactjs, TailwindCss, Figma, and Git, to create a high-performance and user-friendly real estate investment platform. We used Figma to design a clean and modern interface that was easy to navigate, and I utilized Reactjs and TailwindCss to ensure that the platform was both fast and responsive. Additionally, I consumed the RESTful APIs provided by the backend developer using POSTMAN, which allowed us to seamlessly integrate the frontend and backend services.
                        <br />
                        <br />

                        <span className='font-josefin text-intro'> Design and Development:</span>
                        <br />

                        The HxAfrica platform was designed to be user-friendly and easy to navigate, with a clean and modern interface. We used Figma to create a visual design that was both aesthetically pleasing and functional, and I leveraged the power of Reactjs and TailwindCss to ensure that the platform was fast and responsive. I also utilized Git for version control, which allowed me to easily manage and track changes to the platform as it was developed. The platform was integrated with the backend services using the RESTful APIs provided by the backend developer, ensuring seamless communication between the frontend and backend.
                        <br />
                        <br />

                        The HxAfrica real estate investment platform is a great example of how the latest web technologies can be leveraged to create a user-friendly and high-performing platform. By focusing on design, performance, integration, and user experience, we were able to create a platform that not only looks great, but also delivers results. The seamless integration of the frontend and backend services using RESTful APIs has been a key factor in the success of the platform.</p>
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

export default HxAfrica