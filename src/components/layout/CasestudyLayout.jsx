import React from 'react'
import DefaultLayout from './DefaultLayout'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import Form from '../../Form'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  responsive: [{ breakpoint: 800, settings: { arrows: false } }],
}

function CasestudyLayout({ children, title, projectImages, technologies, external }) {
  return (
    <DefaultLayout>
      {/* Hero banner */}
      <div
        className="flex items-end justify-center px-5 md:px-10 pb-16 pt-32"
        style={{
          background: 'linear-gradient(to bottom, rgba(74,222,128,0.04) 0%, transparent 100%)',
          borderBottom: '1px solid #27272a',
        }}
      >
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label mb-3"
          >
            Case Study
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title capitalize"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* Image carousel */}
      <div className="px-5 md:px-10 py-12">
        <div className="container mx-auto">
          <Slider {...sliderSettings}>
            {projectImages.map((item) => (
              <div key={item.id} className="px-2 md:px-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="rounded-xl w-full"
                  style={{ border: '1px solid #27272a' }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 md:px-10 pb-16">
        <div className="container mx-auto">
          <div
            className="rounded-xl p-6 md:p-10 lg:p-12"
            style={{ background: '#111113', border: '1px solid #27272a' }}
          >
            {/* Tech + external link header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6" style={{ borderBottom: '1px solid #27272a' }}>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
              {external && (
                <a
                  href={external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm py-1.5 px-3"
                  aria-label="View live site"
                >
                  <FiExternalLink size={13} /> Live site
                </a>
              )}
            </div>

            {/* Case study body */}
            <div className="text-secondary text-sm leading-relaxed prose-style">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <Form />
    </DefaultLayout>
  )
}

export default CasestudyLayout
