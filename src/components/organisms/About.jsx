import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profile from '../../assets/profile.jpg'

const QUICK_FACTS = [
  { label: 'Location', value: 'Nigeria — Remote worldwide' },
  { label: 'Current focus', value: 'Full-stack product engineering' },
  { label: 'Availability', value: 'Open to new opportunities' },
  { label: 'Blog', value: 'blog.victoradighibe.com', href: 'https://blog.victoradighibe.com' },
]

export default function About() {
  return (
    <section className="section" style={{ background: '#111113' }}>
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

            <div className="space-y-4 text-secondary text-sm leading-relaxed">
              <p>
                I'm Victor Adighibe — a Senior Frontend Engineer with over 7 years of experience
                building production software that people actually use. I've led frontend at Jiffypay,
                built browser-based VoIP systems from scratch, published npm packages, and shipped
                WordPress sites with 90+ Lighthouse scores.
              </p>
              <p>
                My edge isn't just that I can write clean React and TypeScript. It's that I think
                like a product engineer. I understand the business logic behind the UI. I ask
                why before how. And I own features end-to-end — from architecture decisions to
                production monitoring.
              </p>
              <p>
                I'm actively working toward becoming a well-rounded Full Stack Engineer while
                maintaining deep frontend expertise. If you're building something that needs
                someone who can ship independently and communicate clearly with design, product,
                and backend — I'm your person.
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

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/resume.pdf" download className="btn-primary">
                <FiDownload size={14} />
                Download Resume
              </a>
              <a
                href="mailto:savicstech@gmail.com"
                className="btn-ghost"
              >
                <FiMail size={14} />
                Say hello
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/Savics407"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub profile"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-adighibe-b4a89923a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right — photo + card */}
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
                  style={{ maxHeight: '440px', objectPosition: 'top' }}
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

            {/* Terminal card */}
            <div className="terminal">
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#ef4444' }} />
                <span className="terminal-dot" style={{ background: '#f59e0b' }} />
                <span className="terminal-dot" style={{ background: '#22c55e' }} />
                <span className="text-muted text-xs ml-2">victor.config.ts</span>
              </div>
              <div className="p-4 text-xs space-y-1" style={{ color: '#a1a1aa' }}>
                <div><span style={{ color: '#7c3aed' }}>const</span> <span style={{ color: '#4ade80' }}>victor</span> = {'{'}</div>
                <div className="pl-4"><span style={{ color: '#f59e0b' }}>role</span>: <span style={{ color: '#86efac' }}>"Senior Frontend Engineer"</span>,</div>
                <div className="pl-4"><span style={{ color: '#f59e0b' }}>experience</span>: <span style={{ color: '#fb923c' }}>7</span>,  <span style={{ color: '#3f3f46' }}>// years</span></div>
                <div className="pl-4"><span style={{ color: '#f59e0b' }}>stack</span>: [<span style={{ color: '#86efac' }}>"React"</span>, <span style={{ color: '#86efac' }}>"TS"</span>, <span style={{ color: '#86efac' }}>"Node"</span>],</div>
                <div className="pl-4"><span style={{ color: '#f59e0b' }}>available</span>: <span style={{ color: '#4ade80' }}>true</span>,</div>
                <div>{'}'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
