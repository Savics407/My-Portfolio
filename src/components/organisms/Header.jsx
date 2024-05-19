import React, { useState } from 'react'
import logo from '../../assets/white logo.png'
import slogo from '../../assets/S-white logo.png'
import blacklogo from '../../assets/savicsbk.png'
import { GoLinkExternal } from 'react-icons/go'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'



export default function () {

    const [active, setActive] = useState(true)

    const changeLogo = () => {
        window.scrollY >= 700 ? setActive(false) : setActive(true)
    }

    window.addEventListener('scroll', changeLogo);

    const [menu, setMenu] = useState(false)

    const list = {
        visible: {
            opacity: 1, scale: 1, transition: {
                when: "beforeChildren",
                staggerChildren: 0.05
            }
        },
        hidden: {
            opacity: 0, scale: 0.5, transition: {
                when: "afterChildren"
            }
        },
    }

    const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
    }


    return (
        <div>
            <div className='absolute md:fixed right-0 left-0 z-40'>
                <div className="container py-8 flex justify-between items-center relative">
                    {/* <h1 className='text-white text-3xl'>Savics</h1> */}
                    <Link to="/" >
                        {active ?
                            <><motion.img
                                initial={{ opacity: 0, x: "-10%" }}
                                animate={{
                                    opacity: 1, x: 0, transition: {
                                        duration: 0.1
                                    },
                                }} src={logo} alt="savics" className='md:w-40 w-32' /> </>
                            :
                            <motion.img
                                initial={{ opacity: 0, }}
                                animate={{
                                    opacity: 1, transition: {
                                        duration: 0.1
                                    },
                                }}
                                src={slogo} alt="savics" className='w-16 transition duration-300' />
                        }
                    </Link>
                    <div className='flex flex-col items-end cursor-pointer p-5 relative z-40' onClick={() => setMenu(!menu)}>
                        <div className={`md:w-10 w-8 border transition duration-500 mb-3 ${menu && "border-white md:border-main !w-8 -rotate-45 absolute"}`} onClick={() => setMenu(!menu)}></div>
                        <div className={`md:w-7 w-5 border transition duration-500 ${menu && "border-white md:border-main !w-8 absolute rotate-45"}`} onClick={() => setMenu(!menu)}></div>
                    </div>
                    <AnimatePresence>   
                        {menu &&
                            <motion.div
                                exit={{
                                    opacity: 0,
                                }}
                                initial="hidden"
                                animate="visible"
                                variants={list}
                                className='fixed md:absolute w-full h-screen md:h-auto md:w-1/2 lg:w-[350px] top-0 right-0 md:p-10 md:top-8 md:bg-white bg-[#0a2e2f] z-30 rounded font-semibold'>
                                <Link to="/"> <div className='py-8 md:hidden'>
                                    <img src={logo} alt="Savics logo" className='w-32' />
                                </div></Link>
                                <div className='px-5 md:px-0 text-white md:text-black'>
                                    <Link to={"/projects"} >
                                        <motion.h1 variants={item} className="py-3 lg:px-0 lg:shadow-none lg:my-0 cursor-pointer shadow rounded-lg px-5 my-5"> Project Archive </motion.h1> </Link>
                                    <a href="/#">

                                        <motion.h1 variants={item} className="py-3 lg:px-0 lg:shadow-none lg:my-0 cursor-pointer shadow rounded-lg px-5 my-5"> Resources </motion.h1></a>
                                    <a href="https://course.victoradighibe.com/">
                                        <motion.h1 variants={item} className="py-3 lg:px-0 lg:shadow-none lg:my-0 cursor-pointer shadow rounded-lg px-5 my-5"> Courses </motion.h1></a>
                                    <a href='https://blog.victoradighibe.com'>
                                        <motion.h1 variants={item} className="py-3 lg:px-0 lg:shadow-none lg:my-0 cursor-pointer shadow rounded-lg px-5 my-5"> My Articles </motion.h1>
                                    </a>
                                </div>
                                <motion.div variants={item} className='pt-10 px-5 md:px-0 font-Montserrat hidden md:block'>
                                    <a href="/resume.pdf" target='_blank'>
                                        <button className='flex border border-main font-semibold w-full lg:w-auto
                             md:text-main px-5 py-2 rounded items-center dots after:bg-main before:bg-main after:border-white before:border-white justify-center after:-right-2 before:-left-2'>My Resume <GoLinkExternal className='ml-3' /></button></a>
                                </motion.div>
                                <motion.div variants={item} className='p-10 md:px-0 font-Montserrat md:hidden'>
                                    <a href="/resume.pdf" target='_blank'>
                                        <button className='border-2 border-double border-main hover:text-main text-intro px-5 py-2 dots rounded hover:bg-intro hover:font-semibold outline outline-1 outline-intro flex items-center w-full justify-center'>My Resume <GoLinkExternal className='ml-3' /></button>
                                    </a>
                                </motion.div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </div>




        </div >
    )
}
