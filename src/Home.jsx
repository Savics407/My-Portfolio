import React from 'react'
import Header from './Header'
import profile from './assets/profile.jpg'
import react from './assets/react.svg'
import js from './assets/javascript.svg'
import ts from './assets/typescript.svg'
import wp from './assets/wordpress.svg'
import figma from './assets/figma.svg'
import headshot from './assets/headshot.jpg'
import black from './assets/black afro.jpg'
import close from './assets/closeup.jpg'
import git from './assets/git.svg'
import project from './assets/project.png'
import { GoLinkExternal } from 'react-icons/go'
import { FiGithub } from 'react-icons/fi'
import { TiSocialLinkedin, TiSocialYoutube, TiSocialGithub, TiSocialTwitter } from 'react-icons/ti'
import { GiLoveHowl } from 'react-icons/gi'
import { BsArrowRight } from 'react-icons/bs'
import {
    ImQuotesRight, ImStarFull
} from 'react-icons/im'

import moment from 'moment/moment'


function Home() {
    return (
        <div className='font-Montserrat'>
            {/* Header Session */}
            {/* <div className='contain border max-w-[1172px] m-auto'> */}
            <div>
                <Header />
                <div className='flex items-center px-24 pt-24 h-screen'>
                    <div className=' w-1/2 flex flex-col w-1/2 items-center justify-center'>
                        <div className='rounded-full border-10 border-border w-[265px] h-96 shadow-2xl'>
                            <img src={profile} alt="Victor Adighibe" className='object-cover w-full h-full rounded-full' />
                        </div>
                    </div>
                    <div className=' w-1/2'>
                        <div className='font-josefin mb-5'>
                            <h1 className='text-intro mb-5'>Hi, my name is </h1>
                            <h1 className='text-6xl text-white font-bold tracking-wider '>Victor <br />Adighibe. <br />
                                {/* &lt;savics /&gt; */}
                            </h1>
                            {/* <h2 className='text-5xl text-light '>Frontend Engineer.</h2> */}
                        </div>
                        <div>
                            <h1 className='font-Montserrat text-gray-300 text-sm w-[450px]'>
                                I’m a software engineer specializing in building exceptional frontend products with great user experience.
                            </h1>
                        </div>
                        <div className='pt-10 font-Montserrat'>
                            <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro'>Let's work </button>
                        </div>
                    </div>
                </div>
                <div className="p-40 border-white flex items-center">
                    <div className='w-1/2'>
                        <h1 className='text-intro font-josefin text-4xl mb-3 lines before:w-3/5'>About me.</h1>
                        <div className='font-Montserrat text-gray-300 text-sm'>
                            <p>
                                Hi there! My name is [Name] and I'm a web developer with [X years/decades] of experience building responsive and user-friendly websites. With a strong background in [specific technologies or programming languages], I pride myself on my ability to create clean, efficient code and bring creative ideas to life on the web. <br className='mb-4' /> <br />

                                In my current role at [Company], I've had the opportunity to work on a variety of projects, ranging from small business websites to large e-commerce platforms. I'm comfortable collaborating with cross-functional teams and enjoy the challenge of finding solutions to complex problems.
                                <br /> <br />
                                Outside of work, I'm an avid reader and enjoy staying up-to-date with the latest trends in web development. I also love to travel and have been fortunate enough to visit [X] different countries so far.
                            </p>
                        </div>
                        <div className='pt-10 font-Montserrat'>
                            <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center'>Take a look at my Resume <GoLinkExternal className='ml-3' /></button>
                        </div>

                    </div>
                    <div className='w-1/2 pl-10'>
                        <h1 className='text-intro mb-5 font-josefin text-base bg-border p-3 rounded text-center'>Core Technologies I work with </h1>
                        <div className='flex justify-around flex-wrap'>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col w-1/2 justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={js} alt="Javascript-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>JavaScript [Es6+]</h1>
                            </div>

                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col w-1/2 justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={react} alt="react-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>ReactJs</h1>
                            </div>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col w-1/2 justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={ts} alt="typescript-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>TypeScript</h1>
                            </div>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col w-1/2 justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={git} alt="git-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>Git</h1>
                            </div>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col w-1/2 justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={figma} alt="figma-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>Figma</h1>
                            </div>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col w-1/2 justify-center items-center p-3 mb-5'>
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
                    </div>
                </div>

                <div className="p-40 ">
                    <div className=' w-[78%] m-auto'>
                        <h1 className='text-intro font-josefin text-4xl mb-3 lines before:w-[42%]'>Some Noteworthy Projects</h1>
                    </div>
                    <div className='flex items-center py-12'>
                        <div className='w-[60%] border-2'>
                            <img src={project} alt="project name" />
                        </div>
                        <div className='w-1/2 text-right'>
                            <h1 className='font-josefin text-white mb-5 text-2xl'>Name of Project</h1>
                            <div className='bg-[#0a2e2f] p-7 rounded text-gray-300 -ml-20'>
                                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            </div>
                            <div className=' flex justify-end text-gray-400 font-light font-montserrat text-xs py-3'>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>Express</h1>
                                <h1 className='px-4 mx-2 bg-border rounded py-1'>Heroku</h1>
                            </div>
                            <div className='text-gray-300 flex justify-end py-3 text-xl'>
                                <div className='px-5'>
                                    <FiGithub />

                                </div>
                                <div className=''>
                                    <GoLinkExternal />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center py-12'>
                        <div className='w-[60%] z-10'>
                            <img src={project} alt="project name" />
                        </div>
                        <div className='w-1/2 z-20 '>
                            <h1 className='font-josefin text-white mb-5 text-2xl'>Name of Project</h1>
                            <div className='bg-[#0a2e2f] p-7 rounded text-gray-300 -mr-20'>
                                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            </div>
                            <div className=' flex justify-start text-gray-400 font-light font-montserrat text-xs py-3'>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>Express</h1>
                                <h1 className='px-4 mx-2 bg-border rounded py-1'>Heroku</h1>
                            </div>
                            <div className='text-gray-300 flex justify-start py-3 text-xl'>
                                <div className='pr-5'>
                                    <FiGithub />

                                </div>
                                <div className=''>
                                    <GoLinkExternal />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center py-12'>
                        <div className='w-[60%]'>
                            <img src={project} alt="project name" />
                        </div>
                        <div className='w-1/2 text-right '>
                            <h1 className='font-josefin text-white mb-5 text-2xl'>Name of Project</h1>
                            <div className='bg-[#0a2e2f] p-7 rounded text-gray-300 -ml-20'>
                                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            </div>
                            <div className=' flex justify-end text-gray-400 font-light font-montserrat text-xs py-3'>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>
                                <h1 className=' px-4 mx-2 bg-border rounded py-1'>Express</h1>
                                <h1 className='px-4 mx-2 bg-border rounded py-1'>Heroku</h1>
                            </div>
                            <div className='text-gray-300 flex justify-end py-3 text-xl'>
                                <div className='px-5'>
                                    <FiGithub />

                                </div>
                                <div className=''>
                                    <GoLinkExternal />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' -mt-12 font-Montserrat flex justify-end '>
                        <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center'>View my project archive

                            {/* <GoLinkExternal className='ml-3' /> */}
                        </button>
                    </div>

                </div>

                <div className='px-32 py-20'>
                    <div className=' w-[60%] m-auto'>
                        <h1 className='text-intro font-josefin text-4xl mb-3 lines before:w-[60%]'>Testimonials </h1>
                    </div>
                    <div className='w-[70%] m-auto'>
                        <div className='bg-border rounded my-10 p-10 text-gray-300 flex justify-between items-start'>
                            <div className='w-[95%]'>
                                <div className='flex text-xs text-intro mb-5'>
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                </div>
                                <div>
                                    <h1>"I had the pleasure of working with Savics as a frontend engineer and I can confidently say that they are one of the most talented and dedicated developers I have had the opportunity to collaborate with. Their ability to understand and execute complex design requirements is truly impressive. I highly recommend Savics for any frontend development project."</h1>
                                </div>
                            </div>
                            <span className='text-main text-5xl'>
                                <ImQuotesRight />
                            </span>
                        </div>
                        <div className='border-b border-[#c4ffb245] flex justify-between'>
                            <div className='flex items-center hover:border-intro border-b border-intro cursor-pointer p-3 transition duration-300'>
                                <div className=' w-14 h-14 rounded-full mr-4'>
                                    <img src={headshot} alt="Benjamin Bryant" className='object-cover w-full h-full rounded-full' />
                                </div>
                                <div className='font-josefin'>
                                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>Benjamin Bryant</h1>
                                    <h1 className='text-gray-500 text-xs '>VP & Co-founder, <span className='text-intro'>Wiser</span></h1>
                                </div>
                            </div>
                            <div className='flex items-center hover:border-intro hover:border-b cursor-pointer p-3 transition duration-300'>
                                <div className=' w-14 h-14 rounded-full mr-4'>
                                    <img src={close} alt="Benjamin Bryant" className='object-cover w-full h-full rounded-full' />
                                </div>
                                <div className='font-josefin'>
                                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>Raaid Hossain Bryant</h1>
                                    <h1 className='text-gray-500 text-xs '>Project management, <span className='text-intro'>Focuslab</span></h1>
                                </div>
                            </div>
                            <div className='flex items-center hover:border-intro hover:border-b cursor-pointer p-3 transition duration-300'>
                                <div className=' w-14 h-14 rounded-full mr-4'>
                                    <img src={black} alt="Benjamin Bryant" className='object-cover w-full h-full rounded-full' />
                                </div>
                                <div className='font-josefin'>
                                    <h1 className='font-Montserrat text-gray-300 mb-1 text-sm'>Logan Cee</h1>
                                    <h1 className='text-gray-500 text-xs '>UI/UX Designer, <span className='text-intro'>Logan Cee</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-28'>
                    <div>
                        <h1 className='text-intro font-josefin text-4xl mb-3 text-center'>Let's Connect</h1>
                        <h1 className='text-gray-300 text-center w-1/2 m-auto text-base'>Thank you for visiting my website. If you have any questions or are interested in working with me, please don't hesitate to reach out. You can contact me via email at <a href="mailto:savicstech@gmail.com" className='text-intro underline'> savicstech@gmail.com</a>, or use the form below to send me a message. <br />I look forward to hearing from you!</h1>
                    </div>
                    <div className='py-20'>
                        <form action="" method="post">
                            <div className=' w-1/2 m-auto'>
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
                                    <button className='border-2 border-double border-main hover:text-main text-intro px-10 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center'>Shoot
                                        <span className='ml-3 text-xl'>

                                            <BsArrowRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='border-t border-[#c4ffb245] m-auto py-5 flex items-center justify-between px-28 text-gray-300 text-sm'>
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
            </div >
        </div >
    )
}

export default Home