import React from 'react'
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


function Home() {
    return (
        <div className='font-Montserrat'>
            {/* Header Session */}
            <div className=''>
                <Header />
                <div className='flex items-center px-24 pt-24 h-screen'>
                    <div className=' w-1/2 flex flex-col items-center justify-center'>
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
                        <div >
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
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={js} alt="Javascript-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>JavaScript [Es6+]</h1>
                            </div>

                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={react} alt="react-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>ReactJs</h1>
                            </div>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={ts} alt="typescript-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>TypeScript</h1>
                            </div>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={git} alt="git-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>Git</h1>
                            </div>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={figma} alt="figma-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>Figma</h1>
                            </div>
                            <div className='bg-border rounded-lg w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                                <div className='w-10 h-10 mb-2 shadow-lg rounded'>
                                    <img src={wp} alt="wordpress-icon" className='object-contain w-full h-full' />

                                </div>
                                <h1 className='text-xs'>Wordpress</h1>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="p-40 border-white border">
                    <div className=' w-[78%] m-auto'>
                        <h1 className='text-intro font-josefin text-4xl mb-3 lines before:w-[42%]'>Some Noteworthy Projects</h1>
                    </div>
                    <div className='flex items-center py-10'>
                        <div className='w-[60%]'>
                            <img src={project} alt="project name" />
                        </div>
                        <div className='w-1/2 text-right '>
                            <h1 className='font-josefin text-white mb-5 text-2xl'>Name of Project</h1>
                            <div className='bg-[#0a2e2f] p-7 rounded text-gray-300 -ml-20'>
                                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center py-10'>
                        <div className='w-[60%] z-10 '>
                            <img src={project} alt="project name" />
                        </div>
                        <div className='w-1/2 z-20 '>
                            <h1 className='font-josefin text-white mb-5 text-2xl'>Name of Project</h1>
                            <div className='bg-[#0a2e2f] p-7 rounded text-gray-300 -mr-28'>
                                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div >
    )
}

export default Home