import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import { GoLinkExternal } from 'react-icons/go'
import logo from './assets/white logo.png'
import { FiGithub } from 'react-icons/fi'
import Footer from './Footer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='font-Montserrat'>
      <Header />
      <div className='glow hidden md:flex lg:h-[500px] h-[400px] px-10 justify-center py-20 items-end   '>
        <div className=" text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-intro font-josefin text-3xl lg:text-5xl mb-3'>Project Archive</motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            className='text-gray-300'>Some selected projects I have worked on in the past</motion.h1>

        </div>

      </div>
      <div className=' md:hidden h-[400px] flex px-10 items-end py-20 '>
        <div className=" text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-intro font-josefin text-3xl lg:text-5xl mb-3'>Project Archive</motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            className='text-gray-300'>Some selected projects I have worked on in the past</motion.h1>

        </div>

      </div>
      <div className='glow4'>
        <div className='container flex justify-between flex-wrap pb-36 px-5 md:px-10'>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <Link to="/casestudy">
              <div
                className='py-10 w-48'>
                <img src={logo} alt='logo name' />
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4'>
              <h1>A Personal Wesbite</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full'>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl'>
              <div className='px-5'>
                <FiGithub />

              </div>
              <div className=''>
                <GoLinkExternal />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <Link to="/casestudy">
              <div
                className='py-10 w-48'>
                <img src={logo} alt='logo name' />
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4'>
              <h1>A Personal Wesbite</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full'>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl'>
              <div className='px-5'>
                <FiGithub />

              </div>
              <div className=''>
                <GoLinkExternal />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <Link to="/casestudy">
              <div
                className='py-10 w-48'>
                <img src={logo} alt='logo name' />
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4'>
              <h1>A Personal Wesbite</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full'>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl'>
              <div className='px-5'>
                <FiGithub />

              </div>
              <div className=''>
                <GoLinkExternal />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <Link to="/casestudy">
              <div
                className='py-10 w-48'>
                <img src={logo} alt='logo name' />
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4'>
              <h1>A Personal Wesbite</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full'>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl'>
              <div className='px-5'>
                <FiGithub />

              </div>
              <div className=''>
                <GoLinkExternal />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <Link to="/casestudy">
              <div
                className='py-10 w-48'>
                <img src={logo} alt='logo name' />
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4'>
              <h1>A Personal Wesbite</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full'>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl'>
              <div className='px-5'>
                <FiGithub />

              </div>
              <div className=''>
                <GoLinkExternal />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <Link to="/casestudy">
              <div
                className='py-10 w-48'>
                <img src={logo} alt='logo name' />
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4'>
              <h1>A Personal Wesbite</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full'>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>React</h1>
              <h1 className=' px-4 mx-2 bg-border rounded py-1'>TailwindCss</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl'>
              <div className='px-5'>
                <FiGithub />

              </div>
              <div className=''>
                <GoLinkExternal />
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>

    </div>
  )
}

export default Projects