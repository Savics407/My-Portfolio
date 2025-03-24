import React from 'react'
import DefaultLayout from './DefaultLayout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { GoLinkExternal } from 'react-icons/go'
import Form from '../../Form';


function CasestudyLayout({ children, title, projectImages, technologies, external }) {
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

    return (
        <DefaultLayout >
            <div className='glow hidden md:flex lg:h-[400px] h-[400px] px-10 items-end justify-center py-20'>
                <div className="text-center ">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-intro font-josefin text-3xl lg:text-4xl mb-3 capitalize'>{title}</motion.h1>
                </div>

            </div>
            <div className='md:hidden h-[300px] px-10 items-end justify-center flex py-10 '>
                <div className="text-center ">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-intro font-josefin text-3xl lg:text-4xl mb-3 capitalize'>{title}</motion.h1>
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
                        <div className='flex flex-wrap gap-2'>
                            {technologies.map((tech, index) => (
                                <h1 key={index} className=' px-4 bg-border rounded py-1'>{tech}</h1>
                            ))}
                        </div>
                        {external &&
                            <div className='text-2xl'>
                                <a href={external} target="_blank">  <GoLinkExternal /></a>
                            </div>
                        }
                    </div>
                    {/* Introduction: */}
                    <div>
                        {children}
                        
                    </div>

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


            </motion.div>
        </DefaultLayout>
    )
}

export default CasestudyLayout
