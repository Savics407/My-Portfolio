import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profile from '../../assets/victor_adighibe.jpeg'
import { RESUME_URL, GITHUB_URL, LINKEDIN_URL, EMAIL, ROLE_TITLE, YEARS_EXPERIENCE } from '../../data/narrative'

const QUICK_FACTS = [
  { label: 'Location', value: 'Nigeria — Remote worldwide' },
  { label: 'Current focus', value: 'Full-stack product engineering' },
  { label: 'Availability', value: 'Open to new opportunities' },
  // { label: 'Blog', value: 'blog.victoradighibe.com', href: 'https://blog.victoradighibe.com' },
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: '#111113' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-3">About</p>
            <h2 className="section-title mb-6">
              I don't just build UIs.<br />
              <span className="text-accent">I solve business problems.</span>
            </h2>

            <div className="space-y-5 text-[0.9375rem] leading-[1.9]" style={{ color: '#d4d4d8' }}>
              <p>
                I view frontend engineering not as the process of implementing static layouts, but as the design of runtime client systems. A user interface is the final presentation of a complex state machine that spans local state caches, network layers, and asynchronous server synchronization. When a product feels slow, confusing, or brittle, the issue is rarely a styling error—it is almost always a failure of data state modeling or boundary management.
              </p>
              <p>
                Working across high-volume retail POS systems, multi-location inventory engines, and real-time WebRTC communication platforms taught me that client architecture must be designed defensively. I am drawn to high-stakes frontend problems: building offline-resilient checkout terminals, managing complex WebRTC voice peer connections with Asterisk PBXs, and packaging modular client SDKs that third-party teams can drop into their apps with absolute safety.
              </p>
              <p>
                My approach focuses on making illegal states unrepresentable. By establishing strict API contracts, using deterministic state systems (like Zustand and Redux Toolkit), and implementing proper error isolation, I build products that are predictable and robust under load. I take ownership of the client pipeline end-to-end—from system data schemas and server network calls down to micro-interactions and Core Web Vitals.
              </p>
              <p>
                Known professionally across engineering teams as <span className="text-fg font-semibold">Savics</span>, I build software that lasts. I thrive in teams that value structural maintainability, clean documentation, and defensive engineering over post-launch firefighting.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 space-y-2">
              {QUICK_FACTS.map(({ label, value, href }) => (
                <div key={label} className="flex items-center gap-4 text-sm">
                  <span className="text-muted w-28 flex-shrink-0">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-fg">{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Unique About CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
              >
                <FiGithub size={15} />
                Explore Code & Open Source
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm flex items-center gap-1.5"
              >
                <FiLinkedin size={15} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Photo */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid #27272a' }}
              >
                <img
                  src={profile}
                  alt="Victor Adighibe"
                  className="w-full object-cover"
                  style={{ maxHeight: '480px', objectPosition: 'top' }}
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-sm flex items-center gap-2"
                style={{
                  background: 'rgba(9,9,11,0.85)',
                  border: '1px solid #27272a',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="badge-dot" style={{ display: 'inline-block' }} />
                <span className="text-secondary text-xs">Available for new opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
