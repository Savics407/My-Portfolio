import React, { useState } from 'react'
import DefaultLayout from './DefaultLayout'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Form from '../../Form'

function CaseStudyCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0)
  if (!images.length) return null

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-xl bg-raised border border-border relative aspect-[16/10] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].alt || `Screenshot ${current + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full object-contain"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg/80 border border-border flex items-center justify-center text-fg hover:bg-accent hover:text-bg transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg/80 border border-border flex items-center justify-center text-fg hover:bg-accent hover:text-bg transition-colors"
            >
              <FiChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                current === idx ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function CasestudyLayout({ children, title, projectImages = [], technologies = [], external }) {
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
          <CaseStudyCarousel images={projectImages} />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 md:px-10 pb-16">
        <div className="container mx-auto max-w-4xl">
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
            <div className="text-secondary text-sm leading-relaxed space-y-4">
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
