import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import { GoLinkExternal } from 'react-icons/go'
import logo from './assets/white logo.png'
import { FiGithub } from 'react-icons/fi'
import Footer from './Footer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import reico from './assets/reicoLogo.svg'
import fe from './assets/FE-logo.png'
import pmd from './assets/pmdlogo.png'

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
            <Link to="/">
              <div
                className='py-10 w-48'>
                <img src={logo} alt='logo name' className='' />
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>A Personal Wesbite</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>ReactJs</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>TailwindCss</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              <a target="_blank" href="https://github.com/Savics407/My-Portfolio">
                <div className='mr-4'>
                  <FiGithub />

                </div>
              </a>
              <Link to="/">
                <div className=''>
                  <GoLinkExternal />
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 hover:translate-y-6'>
            <Link to="/africurve">
              <div
                className='py-10'>
                <h1 className='text-white text-4xl font-josefin font-bold uppercase py-4'>Africurve</h1>
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>A Modeling Agency</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Wordpress</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Elementor</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>RevSlider</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              {/* <div classNamr-4px-5'>
                <FiGithub />

              </div> */}
              <Link to="/africurve" >
                <div className='px-5'>
                  <GoLinkExternal />
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <Link to="/reico">
              <div
                className='py-10 w-48 '>
                <img src={reico} alt='logo name' className='w-full' />
              </div>
            </Link>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>Real Estate Company</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>ReactJs</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Figma</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>TailwindCss</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              {/* <div className='mr-4'>
                <FiGithub />

              </div> */}
              <Link to="/reico" >
                <div className=''>
                  <GoLinkExternal />
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <a target="_blank" href="https://fabulousedutainment.com/">
              <div
                className='py-12 w-52'>
                <img src={fe} alt='logo name' className='w-full' />
              </div>
            </a>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>Talent Management website</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>JavaScript</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>HTML</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              <a target="_blank" href="https://github.com/Savics407/Fabulous-Edutainment">
                <div className='mr-4'>
                  <FiGithub />

                </div>
              </a>
              <a target="_blank" href="https://fabulousedutainment.com/">
                <div className=''>
                  <GoLinkExternal />

                </div>
              </a>

            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <a target="_blank" href="https://acimt.org/">
              <div
                className='py-10'>
                <h1 className='text-white text-4xl font-josefin font-bold uppercase py-4'>ACIMT</h1>
              </div>

            </a>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>African college of Information and Medical Technology</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Wordpress</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Elementor</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              {/* <div className='mr-4'>
                <FiGithub />

              </div> */}
              <a target="_blank" href="https://acimt.org/">
                <div className=''>
                  <GoLinkExternal />
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <a target="_blank" href="http://povertymustdie.africa/">
              <div
                className='py-8 w-44'>
                <img src={pmd} alt='logo name' />
              </div>
            </a>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>A Non-Governmental Organization</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Wordpress</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Elementor</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              {/* <div className='mr-4'>
                <FiGithub />

              </div> */}
              <a target="_blank" href="http://povertymustdie.africa/">
                <div className=''>
                  <GoLinkExternal />
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <a target="_blank" href="http://ufedo.povertymustdie.africa/">
              <div
                className='py-10'>
                <h1 className='text-white text-4xl font-josefin font-bold uppercase py-4'>UFEDO</h1>
              </div>
            </a>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>An eCommerce Marketplace inspired to providing free stores to online vendors </h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Wordpress</h1>
              {/* <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Elementor</h1> */}

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              {/* <div className='mr-4'>
                <FiGithub />

              </div> */}
              <a target="_blank" href="http://ufedo.povertymustdie.africa/">
                <div className=''>
                  <GoLinkExternal />
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <a target="_blank" href="https://savics-music-app.netlify.com/">
              <div
                className='py-10 w-44'>
                <img src={logo} alt='logo name' />
              </div>
            </a>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>A music inspired web app</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>JavaScript</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Git</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Netlify</h1>

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              <a href="https://github.com/Savics407/music-app" target="_blank" rel="noopener noreferrer"></a>
              <div className='mr-4'>
                <FiGithub />

              </div>
              <a target="_blank" href="https://savics-music-app.netlify.com/">
                <div className=''>
                  <GoLinkExternal />
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className='lg:w-[32%] w-full md:w-[48%] bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl mb-10 transition ease-in-out duration-300 relative hover:-translate-y-2 '>
            <a target="_blank" href="https://edomba.com/">
              <div
                className='py-10'>
                <h1 className='text-white text-4xl font-josefin font-bold uppercase py-4'>edo.mba</h1>
              </div>
            </a>
            <div className='text-gray-300 w-full font-josefin px-4 text-center'>
              <h1>A Personal website</h1>
            </div>
            <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap'>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>JavaScript</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>CSS</h1>
              <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Html</h1>
              {/* <h1 className=' px-4 mx-2 bg-border mb-2 rounded py-1'>Elementor</h1> */}

            </div>
            <div className='text-gray-300 flex w-full py-3 text-xl justify-center'>
              {/* <div className='mr-4'>
                <FiGithub />

              </div> */}
              <a target="_blank" href="https://edomba.com/">
                <div className=''>
                  <GoLinkExternal />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div >

    </div >
  )
}

export default Projects