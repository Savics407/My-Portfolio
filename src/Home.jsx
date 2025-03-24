import React, { useState } from 'react'
import Header from './components/organisms/Header'
import profile from './assets/profile.jpg'
import africurve from './assets/africurve.svg'
import reico from './assets/reico/body.svg'
import fe from './assets/FE.svg'

import project from './assets/project.png'
import { GoLinkExternal } from 'react-icons/go'
import { FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Testimonials from './Testimonials'
import { Link } from 'react-router-dom'
import Footer from './components/organisms/Footer'
import { useEffect } from 'react'
import Form from './Form'
import dora from './assets/dora/dora.svg'
import About from './components/organisms/About'
import DefaultLayout from './components/layout/DefaultLayout'


function Home() {
    // TODO: Create  your website layout
    const list = {
        visible: {
            opacity: 1, transition: {
                when: "beforeChildren",
                staggerChildren: 0.05
            }
        },
        hidden: {
            opacity: 0, transition: {
                when: "afterChildren"
            }
        },
    }

    const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
    }


    
    const projects = [
        {
            title: "Dora",
            desc: "Dora: Advanced delivery optimization tool for multi-channel order management. It automates processes, selects optimal delivery methods, and ensures reliable and cost-effective delivery. Notifies sales teams for seamless coordination.",
            tech: [
                "Figma", 'Reactjs', "Nextjs", "TailwindCss", "Git"
            ],
            casestudy: false,
            text: "usedora.com",
            git: false,
            git_url: "link",
            external: true,
            link: "https://usedora.com",
            image: dora,
            hover_src: 'before:bg-[url("/src/assets/dora/logo.svg")]',
            overlay_color: "before:bg-[#2266EE]/50"
        },
        // {
        //     title: "Africurve",
        //     desc: "Africurve is a unique modeling agency and human resource management platform that aims to equip talented models with the skills and resources they need to succeed in the modelling industry.",
        //     tech: [
        //         'Wordpress', "Elementor", "RevSlider"
        //     ],
        //     casestudy: true,
        //     text: "africurve.com",
        //     git: false,
        //     git_url: "link",
        //     external: false,
        //     link: "/projects/africurve",
        //     image: africurve,
        //     hover_src: 'before:bg-[url("/src/assets/Africurve.png")]',
        //     overlay_color: "before:bg-[#ffffffd6]"
        // },
        {
            title: "HxAfrica",
            desc: "HxAfrica is a cutting-edge real estate investment platform that utilizes blockchain technology to provide a secure and efficient platform for investors. ",
            tech: [
                'React', "TailwindCss", "Figma", "Git"
            ],
            casestudy: true,
            text: "hxafrica.com",
            git: false,
            git_url: "link",
            external: false,
            link: "/projects/hxafrica",
            image: reico,
            hover_src: 'before:bg-[url("/src/assets/reicoLogo.svg")]',
            overlay_color: "before:bg-[#092327d6]"
        },
        {
            title: "Fabulous Edutainment",
            desc: "Fabulous Edutainment is a talent management website that connects people to talent and talent to limitless opportunities ",
            tech: [
                'JavaScript', "Html", "Css3"
            ],
            casestudy: false,
            text: "CaseStudy",
            git: true,
            git_url: "https://github.com/Savics407/Fabulous-Edutainment",
            external: true,
            link: "https://fabulousedutainment.com/",
            image: fe,
            hover_src: 'before:bg-[url("/src/assets/FE-logo.png")]',
            overlay_color: "before:bg-[#191a22d6]"
        },
    ]


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mail = '<a href="mailto:savicstech@gmail.com" class="text-white"> savicstech@gmail.com</a>'

    return (
        <DefaultLayout>
        
            {/* Header Session */}
            {/* <div className='contain border max-w-[1172px] m-auto'> */}
                {/* Hero Session */}
                <div className='glow'>
                    <div className="container flex-col-reverse flex md:flex-row  items-center pt-24 md:h-[580px] lg:h-[680px] lap">
                        <div className='flex flex-col md:w-1/2 items-center justify-center'>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className='rounded-full border-10 border-[#0a2e2f] w-[265px] h-96 shadow-2xl'>
                                <img src={profile} alt="Victor Adighibe" className='object-cover w-full h-full rounded-full' />
                            </motion.div>
                        </div>
                        <motion.div

                            initial="hidden"
                            // transition={{ duration: 0.5 }}
                            whileInView="visible"
                            variants={list}
                            className=' md:ml-10 md:w-1/2 py-20 px-10'>
                            <div className='font-josefin mb-5'>
                                <motion.h1
                                    variants={item}

                                    className='text-intro mb-5'>Hi, my name is
                                </motion.h1>
                                <motion.h1 variants={item} className='md:text-6xl text-5xl text-white font-bold tracking-wider '>Victor <br />Adighibe. <br />
                                    {/* &lt;savics /&gt; */}
                                </motion.h1>
                                {/* <h2 className='text-5xl text-light '>Frontend Engineer.</h2> */}
                            </div>
                            <div>
                                <motion.h1
                                    variants={item}
                                    className='font-Montserrat text-gray-300 text-sm lg:w-[450px]'>
                                    I’m a software engineer specializing in building exceptional frontend products with great user experience.
                                </motion.h1>
                            </div>
                            <motion.div
                                variants={item}

                                className='pt-10 font-Montserrat'>
                                <a href='#contact'>
                                    <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro'>Let's work </button></a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* About session */}
                <About />
                

                {/* Projects */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={list}
                    className="xl:p-40 lg:px-20 glow2 px-5">
                    <div className="container">
                        <motion.div
                            variants={item}
                            className=' lg:w-[78%] m-auto'>
                            <h1 className='text-intro font-josefin text-center lg:text-left text-3xl md:text-4xl mb-10 md:mb-3 lines lg:before:w-[42%]'>Some Noteworthy Projects</h1>
                        </motion.div>

                        {projects.map((project, index) => (
                            <motion.div key={index}
                                variants={item}
                                className={`flex flex-col  items-center md:py-12 ${(index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                                <div className={`md:w-[60%] projects rounded-lg ${project.overlay_color} ${project.hover_src}`}
                                >
                                    <Link to={project.link}>
                                        <img src={project.image} className='rounded-lg' alt={project.title} />
                                    </Link>
                                </div>
                                <div className={`md:w-1/2 w-full z-20 py-10 md:px-0 ${(index + 1) % 2 !== 0 && "text-right"}`}>
                                    <h1 className='font-josefin text-white mb-5 text-2xl'>{project.title}</h1>
                                    <div
                                        className={`bg-[#0a2e2f] md:p-7 p-5 rounded text-gray-300 text-sm md:text-base ${(index + 1) % 2 === 0 ? "md:-mr-20" : "md:-ml-20"} `}>
                                        <motion.p
                                            initial={(index + 1) % 2 === 0 ? {
                                                opacity: 0,
                                                x: -20
                                            } : {
                                                opacity: 0,
                                                x: 20
                                            }
                                            }
                                            transition={{ duration: 0.5, type: "tween" }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                        >{project.desc}</motion.p>
                                    </div>
                                    <div className={`flex justify-center flex-wrap text-gray-400 font-light font-montserrat text-xs py-3 gap-3 ${(index + 1) % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
                                        {project.tech.map((tech, index) => (
                                            <h1 key={index} className='px-4 bg-border rounded py-1'>{tech}</h1>
                                        ))}

                                    </div>
                                    <div className={`text-gray-400 flex items-center justify-center py-3 gap-5 text-xl ${(index + 1) % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                                        {project.casestudy &&
                                            <Link to={project.link}>
                                                <div className='bg-border rounded px-4 py-1 flex items-center'>
                                                    <span className='text-xs mr-2 font-light'>{project.text}</span>
                                                    <GoLinkExternal />
                                                </div>
                                            </Link>
                                        }

                                        {project.external && <a href={project.link} target='_blank'>
                                            <div className='bg-border rounded px-4 py-1 flex items-center'>
                                                <span className='text-xs mr-2 font-light'>{project.text}</span>
                                                <GoLinkExternal />
                                            </div>
                                        </a>}
                                        {project.git &&
                                            <a href={project.git_url} target='_blank'>
                                                <div className='text-gray-300'>
                                                    <FiGithub />
                                                </div>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className={`sm:-mt-12 font-Montserrat flex justify-center ${(projects.length) % 2 === 0 ? "lg:justify-start" : "lg:justify-end "} `}>
                            <Link to="/projects" >
                                <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center'>View my project archive

                                    {/* <GoLinkExternal className='ml-3' /> */}
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials */}
                <Testimonials />
                <div
                    className='pt-28 glow4' id='contact'>
                    <Form info={{
                        title: "Let's Connect",
                        description: `Thank you for visiting my website. Got a question or interested in working with me, my inbox is always open. Kindly reach out via email at <a href="mailto:savicstech@gmail.com" class="text-intro hover:underline">savicstech@gmail.com</a>, or use the form below to send me a message. I look forward to hearing from you!`,
                        message: "enter your message"

                    }}
                    />

                </div>



      
        </DefaultLayout>
    )
}

export default Home