import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import Header from './Header';
import savics from './assets/Portfolio Screen Shot.png'
import Footer from './Footer';
import { BsArrowRight } from 'react-icons/bs'
import Form from './Form';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";



function CaseStudy() {
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
            src: savics,
            // src: "Images/1.png",
            alt: "Image 1"
        },
        {
            id: 2,
            src: savics,
            alt: "Image 2 "
        },
        {
            id: 3,
            src: savics,
            // src: "Images/3.png",
            alt: "Image 3"
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
                        className='text-intro font-josefin text-3xl lg:text-4xl mb-3'>Savics</motion.h1>
                </div>

            </div>
            <div className='md:hidden h-[300px] px-10 items-end justify-center flex py-10'>
                <div className="text-center ">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-intro font-josefin text-3xl lg:text-4xl mb-3'>Savics</motion.h1>
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
                    <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full'>
                        <h1 className=' px-4 bg-border rounded py-1'>React</h1>
                        <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>

                    </div>
                    <p>
                        hellotax is a suite of tools and services tailored at providing robust and fast VAT Registration & Returns solutions for all kinds of online traders across Europe.
                        <br />
                        <br />
                        The company already had a functioning web app but needed a professional to create an entirely new experience with the latest technologies to leverage speed and provide an optimal user experience as their customers were increasing. At the core of the product is data so there was heavy data transformation and manipulation involved and they needed to make that process as fast as possible.
                        <br />
                        <br />
                        With this information in mind, I examined the existing platform, started documenting flaws and identifying strategies to tackle them. We settled to use Vue as their in-house team was more familiar with it. I bootstrapped the project, and within a few weeks the designated MVP which included a partial component library optimized for accessibility was ready.
                        <br />
                        <br />
                        Usually, systems that require loads of data manipulation and all sorts of computations settle to perform these operations server-side. But since we were dealing with really huge data (reaching megabytes at times), the round trip time (RTT) was in high numbers which resulted in delayed updates. To tackle this, I had to implement a lot of the processing and manipulation logic on the frontend, leaving special computation work and business logic for the backend.
                        <br />
                        <br />
                        Now, it's easy to go wrong and pollute data in these computations which made it clear that we needed solid assertion mechanisms so I created a bunch of fail-safe optimized utility libraries which implemented solid type-checks and validation techniques to ensure fast, yet accurate data diffing and transformation work to preserve the integrity of the information displayed and minimize runtime errors and unusability.
                        <br />
                        <br />
                        After nine months of work, we were finally ready to go live and the beta version was launched. It not only met but exceeded the expectations and beat the previous version at speed, accessibility and reliabilty.
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

export default CaseStudy