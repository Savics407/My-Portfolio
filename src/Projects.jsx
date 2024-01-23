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
import dora from "./assets/dora/logo.svg"
import simpoo from "./assets/simpoo/logo.svg"
import paymable from "./assets/paymable/logo.svg"

function Projects() {
  const projects = [
    {
      image: true,
      src: paymable,
      title: "Paymable",
      desc: "A Virtual payment processor",
      tech: ["figma", "Nextjs", "TypeScript", "TailwindCss", "Git"],
      git: false,
      external: true,
      git_url: "https://github.com/Savics407/My-Portfolio",
      link: "https://paymable.co",
      live: true
    },
    {
      image: true,
      src: simpoo,
      title: "SimpooBusiness",
      desc: "An Inventory Managment Tool",
      tech: ["figma", "Laravel", "Javascript", "TailwindCss", "Git"],
      git: false,
      external: true,
      git_url: "https://github.com/Savics407/My-Portfolio",
      link: "https://simpoobusiness.com",
      live: false
    }, {
      image: true,
      src: dora,
      title: "Dora",
      desc: "A Delivery Automation Tool",
      tech: ["figma", "ReactJs", "NextJs", "TypeScript", "TailwindCss", "Git"],
      git: false,
      external: true,
      git_url: "https://github.com/Savics407/My-Portfolio",
      link: "https://usedora.com",
      live: true

    },
    {
      image: true,
      src: logo,
      title: "Savics",
      desc: "A Personal Website",
      tech: ["ReactJs", "TailwindCss", "Git"],
      git: true,
      external: false,
      git_url: "https://github.com/Savics407/My-Portfolio",
      link: "/",
      live: true

    },
    {
      image: false,
      src: "",
      title: "Africurve",
      desc: "A Modeling Agency",
      tech: ["Wordpress", "Elementor", "RevSlider"],
      git: false,
      external: false,
      git_url: "",
      link: "/africurve",
      live: true

    },
    {
      image: true,
      src: reico,
      title: "HxAfrica",
      desc: "Real Estate Company",
      tech: ["Reactjs", "Figma", "TailwindCss", "Git"],
      git: false,
      external: false,
      git_url: "",
      link: "/hxafrica",
      live: true

    },
    {
      image: true,
      src: fe,
      title: "Fe",
      desc: "Talent Management company",
      tech: ["JavaScript", "Html", "Css3"],
      git: true,
      external: true,
      git_url: "https://github.com/Savics407/Fabulous-Edutainment",
      link: "https://fabulousedutainment.com/",
      live: true

    },
    {
      image: false,
      src: "fe",
      title: "ACIMT",
      desc: "African college of Information and Medical Technology",
      tech: ["Wordpress", "Elementor"],
      git: false,
      external: true,
      git_url: "",
      link: "https://acimt.org/",
      live: true

    },
    {
      image: true,
      src: pmd,
      title: "PmdAfrica",
      desc: "A Non-Governmental Organization",
      tech: ["Wordpress", "Elementor"],
      git: false,
      external: true,
      git_url: "",
      link: "http://povertymustdie.africa/",
      live: true

    },
    {
      image: false,
      src: "",
      title: "UFEDO",
      desc: "An eCommerce Marketplace inspired to providing free stores to online vendors ",
      tech: ["Wordpress"],
      git: false,
      external: true,
      git_url: "",
      link: "http://ufedo.povertymustdie.africa/",
      live: true

    },
    {
      image: true,
      src: logo,
      title: "Savics",
      desc: "A music inspired web app ",
      tech: ["JavaScript", "git", "Netlify"],
      git: true,
      external: true,
      git_url: "https://github.com/Savics407/music-app",
      link: "https://savics-music-app.netlify.com/",
      live: true

    },
    {
      image: false,
      src: "",
      title: "edo.mba",
      desc: "A musician personal website ",
      tech: ["JavaScript", "Html", "Css3"],
      git: false,
      external: true,
      git_url: "",
      link: "https://edomba.com/",
      live: true

    },

  ]

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
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center pb-36 px-5 md:px-10'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`bg-[#0a2e2f] flex flex-col items-center shadow-2xl p-5 rounded-xl transition ease-in-out duration-300 relative hover:-translate-y-2 ${projects.length % 3 !== 0 && projects.length - 1 === index && 'lg:col-start-2'}`}>
              <div className='absolute left-5 top-5 rounded bg-border px-2 py-1 text-xs font-normal text-gray-400'>{project.live ? <h1 className='flex gap-1 items-center'><span className='w-2 h-2 rounded-full bg-intro'></span> Live</h1> : <h1 className='flex gap-2 items-center'>
                <span className='w-2 h-2 rounded-full bg-gray-400'></span>
                in development</h1>}</div>
              {project.external ?
                <a href={project.link} target='_blank'>
                  {project.image ?
                    <div
                      className='py-10 w-44'>
                      <img src={project.src} alt='logo name' className='w-full' />
                    </div> : <div
                      className='py-10'>
                      <h1 className='text-white text-4xl font-josefin font-bold uppercase py-4'>{project.title}</h1>
                    </div>
                  }
                </a>
                :
                <Link to={project.link}>
                  {project.image ?
                    <div
                      className='py-10 w-44'>
                      <img src={project.src} alt='logo name' className='w-full' />
                    </div> : <div
                      className='py-10'>
                      <h1 className='text-white text-4xl font-josefin font-bold uppercase py-4'>{project.title}</h1>
                    </div>
                  }
                </Link>}

              <div className='text-gray-300 w-full font-josefin px-4 text-center'>
                <h1>{project.desc}</h1>
              </div>
              <div className=' flex text-gray-400 font-light font-montserrat text-xs py-3 w-full justify-center flex-wrap gap-3'>
                {project.tech.map((tech, index) => (
                  <h1 className=' px-4 bg-border rounded py-1'>{tech}</h1>

                ))}
              </div>
              <div className='text-gray-300 flex w-full py-3 text-xl justify-center items-center'>
                {project.git && <a target="_blank" href={project.git_url}>
                  <div className='mr-4'>
                    <FiGithub />
                  </div>
                </a>}

                {project.external ? <a href={project.link} target='_blank'>
                  <div className=''>
                    <GoLinkExternal />
                  </div>
                </a> : <Link to={project.link}>
                  <div className=''>
                    <GoLinkExternal />
                  </div>
                </Link>}

              </div>
            </motion.div>
          ))}

        </div>
        <Footer />
      </div >

    </div >
  )
}

export default Projects