import React from 'react'
import { motion } from 'framer-motion'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Deterministic State Over Ad-Hoc Sync',
    body: "Client state should be a predictable function of server truth and local intent. I eliminate race conditions by designing normalized state trees and optimistic caching rules before writing UI components.",
  },
  {
    number: '02',
    title: 'Strict Public API Boundaries',
    body: "Whether designing a React component, a client SDK, or a network protocol wrapper, make illegal states unrepresentable. Strong type contracts and clear ergonomic boundaries prevent downstream regressions.",
  },
  {
    number: '03',
    title: 'Resilience Under Unfavorable Network Conditions',
    body: "Production systems must degrade gracefully when corporate NATs drop packets or high-volume merchant terminals encounter flaky networks—not just in idealized localhost environments.",
  },
  {
    number: '04',
    title: 'Performance & Accessibility as Architectural Primitives',
    body: "Sub-second Core Web Vitals, deterministic rendering, keyboard focus management, and WCAG compliance are structural engineering foundations—never post-launch patches.",
  },
  {
    number: '05',
    title: 'Zero-Collision Encapsulation',
    body: "Building embeddable tooling and distributed modules demands strict CSS scoping, automated prefixing, and aggressive tree-shaking so consumer host applications remain decoupled and lightweight.",
  },
  {
    number: '06',
    title: 'Optimizing for the Next Maintainer',
    body: "Code is read ten times more than it is written. Clear architectural separation, explicit naming, and self-documenting APIs create compounding velocity for the entire engineering team.",
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
