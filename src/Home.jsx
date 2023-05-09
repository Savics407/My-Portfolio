import React, { useState } from 'react'
import Header from './Header'
import profile from './assets/profile.jpg'
import react from './assets/react.svg'
import js from './assets/javascript.svg'
import ts from './assets/typescript.svg'
import wp from './assets/wordpress.svg'
import figma from './assets/figma.svg'
import node from './assets/nodejs.svg'
import africurve from './assets/africurve.svg'
import reico from './assets/reico/body.svg'
import fe from './assets/FE.svg'
import next from './assets/next-js.svg'

import git from './assets/git.svg'
import project from './assets/project.png'
import { GoLinkExternal } from 'react-icons/go'
import { FiGithub } from 'react-icons/fi'

import { motion } from 'framer-motion'

import moment from 'moment/moment'
import Testimonials from './Testimonials'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useEffect } from 'react'
import Form from './Form'


function Home() {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mail = '<a href="mailto:savicstech@gmail.com" class="text-white"> savicstech@gmail.com</a>'

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }} className='font-Montserrat'>
            {/* Header Session */}
            {/* <div className='contain border max-w-[1172px] m-auto'> */}
            <div>
                <Header />
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
                <div className="md:py-40 py-56">
                    <div className="container flex flex-wrap items-center px-5 md:px-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={list}
                            className='lg:w-1/2 w-full' >
                            <motion.h1
                                variants={item}
                                className='text-intro font-josefin text-3xl md:text-4xl mb-3 lines md:before:w-3/5'>About me</motion.h1>
                            <motion.div
                                variants={item}

                                className='font-Montserrat text-gray-300 text-sm'>
                                <p>
                                    As a Software engineer with over 1/2 a decade of experience building responsive and user-friendly websites,
                                    I have been able to deliver high-performing and visually stunning web applications that drive engagement and conversion. With a strong background in core web technologies such as <span className=' text-intro'>JavaScript, Reactjs, Wordpress etc</span>, I pride myself on my ability to create clean, efficient code and bring creative ideas to life on the web. <br className='mb-4' /> <br />

                                    I've had the opportunity to work on a variety of projects, ranging from small business websites to large e-commerce platforms. Whether you're looking to build a new website, improve an existing one, or develop a complex e-commerce platform, I can help you achieve your goals and exceed your expectations.
                                    <br /> <br />

                                    I'm comfortable collaborating with cross-functional teams and enjoy the challenge of finding solutions to complex problems.
                                    <br />
                                    <br />

                                    In my free time, I'm an avid learner who stays on top of the latest trends in web development. I also love traveling, as it allows me to gain new insights and inspiration for my work. These experiences have given me a fresh perspective and an appreciation for different cultures, which I bring back to my work.
                                    <br />
                                    My ability to adapt, think creatively and continuously learn enables me to provide innovative solutions.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={item}
                                className='py-10 font-Montserrat flex justify-center lg:justify-start'>
                                <a href="../src/assets/resume.pdf">
                                    <button className='border-2 border-double border-main hover:text-main text-intro px-5 md:px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center'>Take a look at my Resume <GoLinkExternal className='ml-3' /></button></a>
                            </motion.div>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}

                            className='lg:w-1/2 w-full lg:pl-10 mt-10 lg:mt-0'>
                            <h1 className='text-intro mb-5 font-josefin text-base bg-border p-3 rounded text-center'>Core Technologies I work with </h1>
                            <div className='flex justify-around flex-wrap'>
                                <div className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                    <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                        <img src={js} alt="Javascript-icon" className='object-contain w-full h-full' />

                                    </div>
                                    <h1 className='text-xs'>JavaScript [Es6+]</h1>
                                </div>

                                <div className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                    <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                        <img src={react} alt="react-icon" className='object-contain w-full h-full' />

                                    </div>
                                    <h1 className='text-xs'>ReactJs</h1>
                                </div>
                                <div className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                    <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                        <img src={ts} alt="typescript-icon" className='object-contain w-full h-full' />

                                    </div>
                                    <h1 className='text-xs'>TypeScript</h1>
                                </div>
                                <div className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                    <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                        <img src={node} alt="nodeJS-icon" className='object-contain w-full h-full' />

                                    </div>
                                    <h1 className='text-xs'>NodeJs</h1>
                                </div>
                                <div className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                    <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                        <img src={git} alt="git-icon" className='object-contain w-full h-full' />

                                    </div>
                                    <h1 className='text-xs'>Git</h1>
                                </div>
                                <div className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                    <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                        <img src={figma} alt="figma-icon" className='object-contain w-full h-full' />

                                    </div>
                                    <h1 className='text-xs'>Figma</h1>
                                </div>
                                <div className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                    <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                        <img src={wp} alt="wordpress-icon" className='object-contain w-full h-full' />

                                    </div>
                                    <h1 className='text-xs'>Wordpress</h1>
                                </div>
                                <div className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                    <div className='w-10 h-10 mb-2 shadow-lg rounded bg-white p-1'>
                                        <img src={next} alt="next-js Icon" className='object-contain w-full h-full' />

                                    </div>
                                    <h1 className='text-xs'>Nextjs</h1>
                                </div>

                            </div>
                            <div className='flex justify-around flex-wrap'>
                                <div className='bg-border rounded-lg w-auto hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 px-10 mb-5'>
                                    <div className=' text-4xl font-josefin text-intro shadow-lg rounded'>
                                        <h1>
                                            {/* {moment().format('MMMM Do YYYY, h:mm:ss a')} */}
                                            {/* {moment(new Date()).diff('2017', "Days")} */}
                                            0{moment().format('yyyy') - moment("2017").format('yyyy')}
                                        </h1>

                                    </div>
                                    <h1 className='text-xs'>Years of Experience</h1>
                                </div>
                                <div className='bg-border rounded-lg w-auto hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 px-10 mb-5'>
                                    <div className=' text-4xl font-josefin text-intro shadow-lg rounded'>
                                        <h1>
                                            10+
                                        </h1>

                                    </div>
                                    <h1 className='text-xs'>Projects completed</h1>
                                </div>




                            </div>
                        </motion.div>
                    </div>
                </div>

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
                        <motion.div
                            variants={item}
                            className='flex flex-col md:flex-row items-center md:py-12'>
                            <div className='md:w-[60%] projects before:bg-[#ffffffd6] before:bg-[url("/src/assets/Africurve.png")]'
                            >
                                <Link to="/africurve">

                                    <img src={africurve} alt="Africurve" />
                                </Link>

                            </div>
                            <div className='md:w-1/2 w-full text-right z-20 py-10 md:px-0'>
                                <h1 className='font-josefin text-white mb-5 text-2xl'>Africurve</h1>
                                <div
                                    className='bg-[#0a2e2f] md:p-7 p-5 rounded text-gray-300 md:-ml-20 text-sm md:text-base'>
                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5, type: "tween" }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                    >Africurve is a unique modeling agency and human resource management platform that aims to equip talented models with the skills and resources they need to succeed in the modelling industry.</motion.p>
                                </div>
                                <div className=' flex lg:justify-end justify-center flex-wrap text-gray-400 font-light font-montserrat text-xs py-3'>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1 mb-2 '>Wordpress</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1 mb-2'>Elementor</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1 mb-2'>RevSlider 6</h1>
                                    {/* <h1 className='px-4 mt-3 lg:mt-0 mx-2 bg-border rounded py-1'>Heroku</h1> */}
                                </div>
                                <div className='text-gray-400 flex justify-center md:justify-end py-3 text-lg'>
                                    {/* <div className='px-5'>
                                        <FiGithub />

                                    </div> */}
                                    <Link to="/africurve">

                                        <div className='bg-border rounded px-4 py-1 flex items-center'>
                                            <span className='text-xs mr-2 font-light'>CaseStudy</span>

                                            <GoLinkExternal />
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            // variants={item}
                            className='flex flex-col md:flex-row-reverse items-center py-12'>
                            <div className='md:w-[60%] z-10 projects before:bg-[#092327d6] before:bg-[url("/src/assets/reicoLogo.svg")]'>
                                <img src={reico} alt="HxAfrica" />
                            </div>
                            <div className='md:w-1/2 w-full z-20 py-10 md:px-0'>
                                <h1 className='font-josefin text-white mb-5 text-2xl'> HxAfrica</h1>
                                <div
                                    className='bg-[#0a2e2f] md:p-7 p-5 rounded text-gray-300 md:-mr-20 text-sm md:text-base'>
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        whileInView={{ opacity: 1, x: 0 }}>HxAfrica is a cutting-edge real estate investment platform that utilizes blockchain technology to provide a secure and efficient platform for investors. </motion.p>
                                </div>
                                <div className=' flex lg:justify-start justify-center flex-wrap text-gray-400 font-light font-montserrat text-xs py-3'>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>Figma</h1>
                                    <h1 className='px-4 mx-2 mt-3 lg:mt-0 bg-border rounded py-1'>Git</h1>
                                </div>
                                <div className='text-gray-400 flex justify-center md:justify-start py-3 text-lg'>
                                    {/* <div className='pr-5'>
                                        <FiGithub />

                                    </div> */}
                                    <Link to="/hxafrica">

                                        <div className='bg-border rounded px-4 py-1 flex items-center'>
                                            <span className='text-xs mr-2 font-light'>CaseStudy</span>

                                            <GoLinkExternal />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}

                            className='flex flex-col md:flex-row items-center py-12'>
                            <div className='md:w-[60%] projects before:bg-[#191a22d6] before:bg-[url("/src/assets/FE-logo.png")]'>
                                <img src={fe} alt="Fabulous Edutainment" />
                            </div>
                            <div className='md:w-1/2 w-full text-right z-10 py-10 md:px-0'>
                                <h1 className='font-josefin text-white mb-5 text-2xl'>Fabulous Edutainment</h1>
                                <div
                                    className='bg-[#0a2e2f] md:p-7 p-5 rounded text-gray-300 md:-ml-20 text-sm md:text-base'>
                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5 }}
                                        whileInView={{ opacity: 1, x: 0 }}>Fabulous Edutainment is a talent management website that connects people to talent and talent to limitless opportunities</motion.p>
                                </div>
                                <div className=' flex flex-wrap justify-center lg:justify-end text-gray-400 font-light font-montserrat text-xs py-3'>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>JavaScript</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>Html</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>Css3</h1>
                                </div>
                                <div className='text-gray-300 flex justify-center md:justify-end py-3 text-xl'>
                                    <a href="https://github.com/Savics407/Fabulous-Edutainment">
                                        <div className='px-5'>
                                            <FiGithub />

                                        </div>
                                    </a>
                                    <a href="https://fabulousedutainment.com/">
                                        <div className=''>
                                            <GoLinkExternal />

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <div className='-mt-12 font-Montserrat flex justify-center lg:justify-end '>
                            <Link to="/projects" >
                                <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center'>View my project archive

                                    {/* <GoLinkExternal className='ml-3' /> */}
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <Testimonials />
                <div
                    className='pt-28 glow4' id='contact'>
                    <Form info={{
                        title: "Let's Connect",
                        description: `Thank you for visiting my website. Got a question or interested in working with me, my inbox is always open. Kindly reach out via email at <a href="mailto:savicstech@gmail.com" class="text-intro hover:underline">savicstech@gmail.com</a>, or use the form below to send me a message. I look forward to hearing from you!`,
                        message: "enter your message"

                    }}
                    />
                    <Footer />

                </div>



            </div >
        </motion.div >
    )
}

export default Home