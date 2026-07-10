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
import CasestudyLayout from '../components/layout/CasestudyLayout';



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


    return (
        <CasestudyLayout title={"HxAfrica"} projectImages={projectImages} technologies={tools} external={"https://hxafrica.com"}>
            <div className="space-y-5">
                <div>
                    <h2 className="text-fg font-semibold text-base mb-2">Introduction</h2>
                    <p>HxAfrica is a cutting-edge real estate investment platform that utilizes blockchain technology to provide a secure and efficient platform for investors. The platform was designed and developed with a focus on user experience, and leverages the latest web technologies, including React, Tailwind CSS, Figma, Git, and RESTful APIs.</p>
                </div>
                <div>
                    <h2 className="text-fg font-semibold text-base mb-2">The Challenge</h2>
                    <p>One of the biggest challenges in developing HxAfrica was creating a user-friendly interface that made it easy for users to navigate and access information. The platform needed to be optimized for speed and performance while also being secure and reliable — and seamlessly integrated with the backend RESTful APIs.</p>
                </div>
                <div>
                    <h2 className="text-fg font-semibold text-base mb-2">Design &amp; Development</h2>
                    <p>I leveraged React and Tailwind CSS to build a high-performance, responsive platform. Figma was used for the design system, and Git for version control. The backend integration was handled via RESTful APIs consumed using Postman for thorough testing before integration.</p>
                    <p className="mt-3">The HxAfrica platform is a strong example of how modern web technologies can be used to deliver a high-performing, visually polished product. By focusing on design, performance, and user experience, we shipped a platform that looks great and delivers real results.</p>
                </div>
            </div>
        </CasestudyLayout>
    )
}

export default HxAfrica