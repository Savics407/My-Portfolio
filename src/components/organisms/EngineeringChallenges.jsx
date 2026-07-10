import React from 'react'
import { motion } from 'framer-motion'

const CHALLENGES = [
  {
    category: 'Real-Time Telephony',
    title: 'Browser-Based SIP & WebRTC Infrastructure',
    problem: 'Off-the-shelf VoIP widgets drop calls behind corporate NATs and offer zero programmatic control over multi-line SIP telephony states.',
    solution:
      'Engineered custom client-side signaling pipelines with SIP.js, WebRTC, and Socket.io over Asterisk & Janus media servers—shipping deterministic device routing and an Electron wrapper for logistics dispatchers.',
    tags: ['WebRTC', 'SIP.js', 'Janus', 'Asterisk', 'Electron'],
  },
  {
    category: 'Enterprise SaaS Architecture',
    title: 'Offline-Resilient POS & Multi-Warehouse Stock Sync',
    problem: 'Multi-location retail operators experience stock drift and checkout failures when high-volume cashier terminals encounter intermittent network drops.',
    solution:
      'Architected sub-second POS checkout flows with optimistic transaction caching and normalized Redux Toolkit + TanStack Query state sync across distributed enterprise warehouses.',
    tags: ['State Sync', 'Redux Toolkit', 'TanStack Query', 'RBAC', 'POS'],
  },
  {
    category: 'Developer Tooling & Platform',
    title: 'Embeddable TypeScript SDKs & Zero-Collision Bundles',
    problem: 'Integrating shared telephony and POS workflows into multi-repo host apps causes CSS class collisions, dependency conflicts, and fragile integration.',
    solution:
      'Authored standalone TypeScript client SDKs bundled via Rollup with automated CSS encapsulation and strict tree-shaking, enabling third-party engineers to integrate full workflows in <10 lines of code.',
    tags: ['TypeScript SDK', 'Rollup', 'npm', 'API Design', 'Encapsulation'],
  },
  {
    category: 'Industrial Data Governance',
    title: 'High-Throughput Enterprise Analytics & Compliance',
    problem: 'Complex industrial workflows (oil & gas data, logistics dispatch, enterprise payroll) require rendering dense tabular data and strict multi-tier auditability.',
    solution:
      'Built high-performance enterprise portals (Records v2, PetroData, PayStream) with responsive virtualized tables, granular RBAC security models, and end-to-end auditable compliance.',
    tags: ['Enterprise SaaS', 'Records Governance', 'Oil & Gas Analytics', 'Security'],
  },
]

export default function EngineeringChallenges() {
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
          <p className="section-label mb-3">// Core Engineering Capabilities</p>
          <h2 className="section-title mb-4">Engineering Challenges Solved</h2>
          <p className="section-subtitle text-secondary max-w-2xl">
            Recurring architectural problems engineered across browser telephony infrastructure,
            high-volume enterprise SaaS platforms, and developer tooling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CHALLENGES.map((challenge, i) => (
            <motion.article
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-7 flex flex-col justify-between"
              style={{ background: '#09090b', border: '1px solid #27272a' }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-accent text-xs font-mono tracking-wide uppercase">
                    {challenge.category}
                  </span>
                  <span className="text-muted text-xs font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-fg font-bold text-xl mb-3 leading-snug">
                  {challenge.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <p className="text-secondary text-sm leading-relaxed">
                    <span className="text-fg font-medium">Problem:</span> {challenge.problem}
                  </p>
                  <p className="text-secondary text-sm leading-relaxed">
                    <span className="text-accent font-medium">Engineered Solution:</span> {challenge.solution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {challenge.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-tag"
                    style={{ fontSize: '0.72rem', padding: '0.25rem 0.6rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
