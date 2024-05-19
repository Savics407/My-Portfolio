import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import apply from './../assets/africurve/Apply.png'
import home from './../assets/africurve/Home.png'
import login from './../assets/africurve/Login.png'

import africurve from './../assets/africurve.svg'
import CasestudyLayout from '../components/layout/casestudyLayout';


function Africurve() {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);



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
    const tools = ["Wordpress", "Elementor", "RevSlider"]
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

        <CasestudyLayout title={"Africurve"} projectImages={projectImages} technologies={tools} external={"https://africurve.com"} content={content} />

    )
}

export default Africurve