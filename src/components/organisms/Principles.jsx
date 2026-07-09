import React from 'react'
import { motion } from 'framer-motion'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Performance is a feature',
    body: "A slow product is a broken product. I treat Lighthouse scores, Core Web Vitals, and bundle size as first-class engineering concerns — not post-launch optimisations.",
  },
  {
    number: '02',
    title: 'Accessible by default',
    body: "Accessibility isn't a checklist I run at the end. Semantic HTML, keyboard navigation, focus management, and WCAG compliance are built in from the start.",
  },
  {
    number: '03',
    title: 'Architecture that scales with the team',
    body: "I build for the engineer who joins six months from now. Clear boundaries, documented patterns, and component APIs that are impossible to misuse.",
  },
  {
    number: '04',
    title: 'Business-first engineering',
    body: "Every technical decision has a business consequence. I ask why we're building this before I ask how. The best code is the code that directly moves a metric.",
  },
  {
    number: '05',
    title: 'Own it end to end',
    body: "I'm comfortable going from design token to deployed endpoint. Owning a feature fully — across frontend, API integration, and production monitoring — is what I do best.",
  },
  {
    number: '06',
    title: 'Code is communication',
    body: "Code is read far more than it is written. Naming, structure, and clarity are not luxuries — they are the foundation of a maintainable codebase.",
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
