import React from 'react'
import react from '../../assets/react.svg'
import js from '../../assets/javascript.svg'
import ts from '../../assets/typescript.svg'
import wp from '../../assets/wordpress.svg'
import figma from '../../assets/figma.svg'
import node from '../../assets/nodejs.svg'
import next from '../../assets/next-js.svg'
import git from '../../assets/git.svg'
import moment from 'moment/moment'
import { motion } from 'framer-motion'
import { GoLinkExternal } from 'react-icons/go'

function About() {
    const technologies = [
        {
            title: "javaScript [Es6+]",
            src: js,
        },
        {
            title: "ReactJs",
            src: react,
        },
        {
            title: "TypeScript",
            src: ts,
        },
        {
            title: "NodeJS",
            src: node,
        },
        {
            title: "Git",
            src: git,
        },
        {
            title: "Figma",
            src: figma,
        },
        {
            title: "Wordpress",
            src: wp,
        },
        {
            title: "Nextjs",
            src: next,
        },
    ]

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
                      <a href="/resume.pdf" target='_blank'>

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
                      {technologies.map((tech, index) => (
                          <div key={index} className='bg-border rounded-lg w-36 md:w-32 hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 mb-5'>
                              <div className={`w-10 h-10 mb-2 shadow-lg rounded ${tech.title === "Nextjs" && "bg-white p-1"}`}>
                                  <img src={tech.src} alt={tech.title} className='object-contain w-full h-full' />
                              </div>
                              <h1 className='text-xs'>{tech.title}</h1>
                          </div>
                      ))}
                  </div>

                  <div className='flex justify-around flex-wrap'>
                      <div className='bg-border rounded-lg w-auto hover:border-intro border border-transparent text-gray-300 flex flex-col justify-center items-center p-3 px-10 mb-5'>
                          <div className=' text-4xl font-josefin text-intro shadow-lg rounded'>
                              <h1>
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
  )
}

export default About
