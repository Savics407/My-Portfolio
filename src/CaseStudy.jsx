import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import savics from './assets/Portfolio Screen Shot.png'
import overlay from './assets/myDistorsionImage.webp'
import { BsArrowRight } from 'react-icons/bs';
import Form from './Form';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hoverEffect from 'hover-effect';

import africurve from './assets/Africurve.png'
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import CasestudyLayout from './components/layout/casestudyLayout';


function CaseStudy() {
    useEffect(() => {
        window.scrollTo(0, 0);
        var image_animate = new hoverEffect({
            parent: document.querySelector(".item-image"),
            intensity: .3,
            image1: savics,
            image2: africurve,
            displacementImage: overlay
        })
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

        const tools = ["Elementor", "Nextjs"]

    const content = <p>
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
    return (
       <CasestudyLayout title={"casestudy"} projectImages={projectImages} technologies={tools} external={"https://africurve.com"} content={content} />
    ) 
}

export default CaseStudy