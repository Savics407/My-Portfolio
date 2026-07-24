import React from 'react'
import { motion } from 'framer-motion'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Deterministic State Over Ad-Hoc Sync',
    body: "I design predictable state flows by separating server truth, local state, and user intent before building complex interfaces.",
  },
  {
    number: '02',
    title: 'Strict Public API Boundaries',
    body: "Whether designing a React component, a client SDK, or a network protocol wrapper, make illegal states unrepresentable. Strong type contracts and clear ergonomic boundaries prevent downstream regressions.",
  },
  {
    number: '03',
    title: 'Designing for Real-World Network Conditions',
    body: "Production applications must handle unreliable networks gracefully. Offline workflows, retry strategies, and synchronization patterns are part of building dependable systems.",
  },
  {
    number: '04',
    title: 'Performance & Accessibility as Architectural Decisions',
    body: "Performance and accessibility are considered from the beginning — shaping rendering strategies, loading behaviour, and user experiences.",
  },
  {
    number: '05',
    title: 'Zero-Collision Encapsulation',
    body: "Whether building embeddable widgets, client SDKs, or browser extensions, I use strict encapsulation and naming strategies to prevent style collisions and runtime conflicts.",
  },
  {
    number: '06',
    title: 'Optimizing for the Next Maintainer',
    body: "Code is maintained more often than it is written. Clear architecture, explicit naming, and thoughtful APIs create long-term velocity.",
  },
]

export default function Principles() {
  return (
    <section className="section" style={{ background: '#111113' }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Philosophy</p>
          <h2 className="section-title mb-4">Engineering principles</h2>
          <p className="section-subtitle text-secondary">
            The mental models that guide every decision I make — from component
            architecture to production deployments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-raised p-6 rounded-xl group hover:border-stroke/80 transition-all duration-300"
              style={{ border: '1px solid #27272a' }}
            >
              <span className="text-xs font-mono text-accent/60 mb-3 block">{p.number}</span>
              <h3 className="text-fg font-semibold text-base mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
