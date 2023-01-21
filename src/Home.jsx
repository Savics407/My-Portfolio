import React, { useState } from 'react'
import Header from './Header'
import profile from './assets/profile.jpg'
import react from './assets/react.svg'
import js from './assets/javascript.svg'
import ts from './assets/typescript.svg'
import wp from './assets/wordpress.svg'
import figma from './assets/figma.svg'

import git from './assets/git.svg'
import project from './assets/project.png'
import { GoLinkExternal } from 'react-icons/go'
import { FiGithub } from 'react-icons/fi'
import { TiSocialLinkedin, TiSocialYoutube, TiSocialGithub, TiSocialTwitter } from 'react-icons/ti'
import { GiLoveHowl } from 'react-icons/gi'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

import moment from 'moment/moment'
import Testimonials from './Testimonials'


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
    return (
        <div className='font-Montserrat'>
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

                                    className='text-intro mb-5'>Hi, my name is </motion.h1>
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
                                <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro'>Let's work </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="md:py-40 py-56">
                    <div className="container flex flex-wrap items-center px-5 md:px-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={list}
                            className='lg:w-1/2 w-full' >
                            <motion.h1
                                variants={item}
                                className='text-intro font-josefin text-3xl md:text-4xl mb-3 lines before:w-3/5'>About me.</motion.h1>
                            <motion.div
                                variants={item}

                                className='font-Montserrat text-gray-300 text-sm'>
                                <p>
                                    Hi there! My name is [Name] and I'm a web developer with [X years/decades] of experience building responsive and user-friendly websites. With a strong background in [specific technologies or programming languages], I pride myself on my ability to create clean, efficient code and bring creative ideas to life on the web. <br className='mb-4' /> <br />

                                    In my current role at [Company], I've had the opportunity to work on a variety of projects, ranging from small business websites to large e-commerce platforms. I'm comfortable collaborating with cross-functional teams and enjoy the challenge of finding solutions to complex problems.
                                    <br /> <br />
                                    Outside of work, I'm an avid reader and enjoy staying up-to-date with the latest trends in web development. I also love to travel and have been fortunate enough to visit [X] different countries so far.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={item}
                                className='py-10 font-Montserrat flex justify-center lg:justify-start'>
                                <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center'>Take a look at my Resume <GoLinkExternal className='ml-3' /></button>
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

                            </div>
                            <div className='flex justify-around flex-wrap'>
                                <div className='bg-border rounded-lg w-auto hover:border-intro border border-transparent text-gray-300 flex flex-col w-1/2 justify-center items-center p-3 px-10 mb-5'>
                                    <div className=' text-4xl font-josefin text-intro shadow-lg rounded'>
                                        <h1>
                                            {/* {moment().format('MMMM Do YYYY, h:mm:ss a')} */}
                                            {/* {moment(new Date()).diff('2017', "Days")} */}
                                            0{moment().format('yyyy') - moment("2017").format('yyyy')}
                                        </h1>

                                    </div>
                                    <h1 className='text-xs'>Years of Experience</h1>
                                </div>
                                <div className='bg-border rounded-lg w-auto hover:border-intro border border-transparent text-gray-300 flex flex-col w-1/2 justify-center items-center p-3 px-10 mb-5'>
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
                            <h1 className='text-intro font-josefin text-center lg:text-right text-3xl md:text-4xl mb-10 md:mb-3 lines lg:before:w-[42%]'>Some Noteworthy Projects</h1>
                        </motion.div>
                        <motion.div
                            variants={item}
                            className='flex flex-col md:flex-row items-center md:py-12'>
                            <div className='md:w-[60%] projects before:bg-[url("/src/assets/figma.svg")]'
                            >
                                <img src={project} alt="project name" />
                            </div>
                            <div className='md:w-1/2 text-right z-20 py-10'>
                                <h1 className='font-josefin text-white mb-5 text-2xl'>Name of Project</h1>
                                <div
                                    className='bg-[#0a2e2f] p-7 rounded text-gray-300 md:-ml-20 text-sm md:text-base'>
                                    <motion.p
                                        initial={{ opacity: 0, x: 30 }}
                                        transition={{ duration: 0.5, type: "tween" }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                    >A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</motion.p>
                                </div>
                                <div className=' flex justify-end text-gray-400 font-light font-montserrat text-xs py-3'>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>Express</h1>
                                    <h1 className='px-4 mx-2 bg-border rounded py-1'>Heroku</h1>
                                </div>
                                <div className='text-gray-300 flex justify-center md:justify-end py-3 text-xl'>
                                    <div className='px-5'>
                                        <FiGithub />

                                    </div>
                                    <div className=''>
                                        <GoLinkExternal />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            // variants={item}
                            className='flex flex-col md:flex-row-reverse items-center py-12'>
                            <div className='md:w-[60%] z-10 projects'>
                                <img src={project} alt="project name" />
                            </div>
                            <div className='md:w-1/2 z-20 py-10'>
                                <h1 className='font-josefin text-white mb-5 text-2xl'>Name of Project</h1>
                                <div
                                    className='bg-[#0a2e2f] p-7 rounded text-gray-300 md:-mr-20 text-sm md:text-base'>
                                    <motion.p
                                        initial={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.5 }}
                                        whileInView={{ opacity: 1, x: 0 }}>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</motion.p>
                                </div>
                                <div className=' flex justify-start text-gray-400 font-light font-montserrat text-xs py-3'>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>Express</h1>
                                    <h1 className='px-4 mx-2 bg-border rounded py-1'>Heroku</h1>
                                </div>
                                <div className='text-gray-300 flex justify-center md:justify-start py-3 text-xl'>
                                    <div className='pr-5'>
                                        <FiGithub />

                                    </div>
                                    <div className=''>
                                        <GoLinkExternal />

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}

                            className='flex flex-col md:flex-row items-center py-12'>
                            <div className='md:w-[60%] projects'>
                                <img src={project} alt="project name" />
                            </div>
                            <div className='md:w-1/2 text-right z-10 py-10'>
                                <h1 className='font-josefin text-white mb-5 text-2xl'>Name of Project</h1>
                                <div
                                    className='bg-[#0a2e2f] p-7 rounded text-gray-300 md:-ml-20 text-sm md:text-base'>
                                    <motion.p
                                        initial={{ opacity: 0, x: 30 }}
                                        transition={{ duration: 0.5 }}
                                        whileInView={{ opacity: 1, x: 0 }}>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</motion.p>
                                </div>
                                <div className=' flex justify-end text-gray-400 font-light font-montserrat text-xs py-3'>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>
                                    <h1 className=' px-4 mx-2 bg-border rounded py-1'>Express</h1>
                                    <h1 className='px-4 mx-2 bg-border rounded py-1'>Heroku</h1>
                                </div>
                                <div className='text-gray-300 flex justify-center md:justify-end py-3 text-xl'>
                                    <div className='px-5'>
                                        <FiGithub />

                                    </div>
                                    <div className=''>
                                        <GoLinkExternal />

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className='-mt-12 font-Montserrat flex justify-center lg:justify-end '>
                            <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center'>View my project archive

                                {/* <GoLinkExternal className='ml-3' /> */}
                            </button>
                        </div>
                    </div>
                </motion.div>

                <Testimonials />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='pt-28 glow4 '>
                    <div className="container">
                        <div className='lg:w-[60%] md:px-20 px-5 lg:px-0 m-auto'>
                            <h1 className='text-intro font-josefin text-3xl md:text-4xl mb-3 text-center'>Let's Connect</h1>
                            <h1 className='text-gray-300 text-center m-auto text-sm md:text-base'>Thank you for visiting my website. If you have any questions or are interested in working with me, please don't hesitate to reach out. You can contact me via email at <a href="mailto:savicstech@gmail.com" className='text-intro hover:underline'> savicstech@gmail.com</a>, or use the form below to send me a message. <br />I look forward to hearing from you!</h1>
                        </div>
                        <div className='pt-20 pb-40'>
                            <form action="" method="post">
                                <div className='lg:w-[60%] md:px-20 px-5 lg:px-0 m-auto'>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col w-[45%]' >
                                            <label className='text-intro font-josefin text-sm'>Your Name</label>
                                            <input type="text" name="" id="" required placeholder='enter your name' className='bg-transparent border-b rounded-md border-[#c4ffb245] p-3 text-gray-300 outline-none' />

                                        </div>
                                        <div className='flex flex-col w-[45%]'>
                                            <label className='text-intro text-sm font-josefin'>Email Address</label>
                                            <input type="email" name="" id="" required placeholder='enter your email' className='bg-transparent border-b rounded-md border-[#c4ffb245] text-gray-300 p-3 outline-none' />

                                        </div>
                                    </div>
                                    <div className='flex flex-col py-10'>
                                        <label className='text-intro text-sm font-josefin'>Your Message</label>
                                        <textarea name="" id="" rows={3} placeholder='enter your message' className='bg-transparent border-b rounded-md border-[#c4ffb245] text-gray-300 p-3 outline-none' ></textarea>

                                    </div>
                                    <div className=' font-Montserrat flex justify-center '>
                                        <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center cursor-pointer'>Shoot
                                            <span className='ml-3 text-xl'>

                                                <BsArrowRight />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='border-t border-[#c4ffb245] lg:px-28 text-gray-300 text-sm'>
                        <div className="container py-5 flex items-center justify-between">
                            <div>
                                <h1> &copy; Victor Adighibe {moment().format('yyyy')}.</h1>
                            </div>
                            <div className='text-gray-300 flex w-36 items-center justify-between text-xl'>
                                <div className='bg-border p-1 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                                    <TiSocialLinkedin />
                                </div>
                                <div className='bg-border p-1 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                                    <TiSocialTwitter />
                                </div>
                                <div className='bg-border p-1 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                                    <TiSocialGithub />
                                </div>
                                <div className='bg-border p-1 rounded hover:border-[#80a674] shadow border border-[#0b4345] cursor-pointer'>
                                    <TiSocialYoutube />
                                </div>
                            </div>
                            <div >
                                <h1 className='flex items-center'>Built with
                                    {/* <AiFillHeart /> */}
                                    <span className='px-1 '>
                                        <GiLoveHowl />
                                    </span>
                                    by Savics</h1>
                            </div>
                        </div>
                    </div>
                </motion.div>



            </div >
        </div >
    )
}

export default Home