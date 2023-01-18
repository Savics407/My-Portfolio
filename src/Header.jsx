import React, { useState } from 'react'
import logo from './assets/white logo.png'
import slogo from './assets/S-white logo.png'
import { GoLinkExternal } from 'react-icons/go'
import { motion, AnimatePresence } from 'framer-motion'



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
            <div className='flex justify-between items-center px-24 py-8 fixed right-0 left-0 z-40'>
                {/* <h1 className='text-white text-3xl'>Savics</h1> */}
                {active ?
                    <img src={logo} alt="savics" className='w-40' />
                    :
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1, scale: 1, transition: {
                                duration: 0.1
                            },
                        }}
                        src={slogo} alt="savics" className='w-16 transition duration-300' />
                }
                <div className='flex flex-col items-end cursor-pointer p-5 relative' onClick={() => setMenu(!menu)}>
                    <div className={`w-10 border transition duration-500 mb-3 ${menu && "border-main !w-8 -rotate-45 absolute"}`} onClick={() => setMenu(!menu)}></div>
                    <div className={`w-7 border transition duration-500 ${menu && "border-main !w-8 absolute rotate-45"}`} onClick={() => setMenu(!menu)}></div>
                </div>

            </div>
            <AnimatePresence>
                {menu &&
                    <motion.div
                        // initial={{ x: '100%', opacity: 0 }}
                        // animate={{
                        //     x: "0%", y: "0%", opacity: 1, transition: {
                        //         duration: 0.3,
                        //     },
                        // }}
                        exit={{
                            // x: "10%", y: "-10%",
                            opacity: 0,
                            // scale: 0
                        }}
                        initial="hidden"
                        animate="visible"
                        variants={list}
                        className='fixed w-1/4 p-10 right-20 top-8 bg-white z-30 rounded'>
                        <div className=''>
                            <motion.h1 variants={item} className="py-3 cursor-pointer"> Project Archive </motion.h1>
                            <motion.h1 variants={item} className="py-3 cursor-pointer"> Resources </motion.h1>

                            <motion.h1 variants={item} className="py-3 cursor-pointer"> Courses </motion.h1>
                            <motion.h1 variants={item} className="py-3 cursor-pointer"> Articles </motion.h1>
                        </div>
                        <motion.div variants={item} className='pt-10 font-Montserrat'>
                            <button className='border border-main font-semibold
                             text-main px-5 py-2 rounded  flex items-center dots after:bg-main before:bg-main after:border-white before:border-white justify-center after:-right-2 before:-left-2'> My Resume <GoLinkExternal className='ml-3' /></button>
                        </motion.div>




                    </motion.div>

                }
            </AnimatePresence>



        </div >
    )
}
