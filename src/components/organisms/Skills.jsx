import React from 'react'
import { motion } from 'framer-motion'

const TECH_CATEGORIES = [
  {
    name: 'Core Stack',
    items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Redux Toolkit', 'Zustand'],
  },
  {
    name: 'Real-Time & Telephony',
    items: ['WebRTC', 'SIP.js', 'Asterisk PBX', 'Socket.io', 'Pusher', 'Laravel Echo'],
  },
  {
    name: 'Systems & SDKs',
    items: ['Electron', 'Rollup SDK Bundling', 'npm Monorepos', 'REST APIs', 'TanStack Query', 'Tailwind CSS'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: '#111113' }}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center md:text-left"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="section-title mb-4">Core Technologies</h2>
          <p className="section-subtitle text-secondary max-w-2xl">
            Production-grade technologies, APIs, and frameworks I use to build robust client systems and developer integrations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-6 bg-raised/30 p-6 md:p-8 rounded-2xl border border-border/80"
        >
          {TECH_CATEGORIES.map((cat, index) => (
            <div
              key={cat.name}
              className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-8 ${
                index !== TECH_CATEGORIES.length - 1 ? 'pb-5 border-b border-border/40' : ''
              }`}
            >
              <span className="text-xs font-mono text-muted uppercase tracking-wider flex-shrink-0">
                {cat.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="skill-tag text-xs py-1 px-3 bg-bg border border-border/70 text-fg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
