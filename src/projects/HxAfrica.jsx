import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import reico from './../assets/reico/body.svg'
import body from './../assets/reico/hxafrica.svg'
import login from './../assets/reico/login.svg'
import avater from './../assets/reico/setAvater.png'
import setup from './../assets/reico/setup.png'
import signup from './../assets/reico/sign-up.svg'
import success from './../assets/reico/AvaterSuccess.png'
import otp from './../assets/reico/verification.svg'
import CasestudyLayout from '../components/layout/casestudyLayout';



function HxAfrica() {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);

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
    const tools = ['ReactJs', 'Figma', 'Tailwind', 'Git']
    const content = <p>
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

    return (
        <CasestudyLayout title={"HxAfrica"} projectImages={projectImages} technologies={tools} external={"https://hxafrica.com"} content={content} />
    )
}

export default HxAfrica