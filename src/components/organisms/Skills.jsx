import React from 'react'
import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: '⬡',
    description: 'The core of my craft — building interfaces that are fast, accessible, and maintainable.',
    skills: [
      'React', 'Next.js', 'TypeScript', 'JavaScript (ES2022+)',
      'Tailwind CSS', 'Redux Toolkit', 'TanStack Query', 'Framer Motion',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: '⬡',
    description: 'Comfortable on the server — building the APIs and systems that power frontend products.',
    skills: [
      'Node.js', 'Express', 'REST APIs', 'WebSockets',
      'Authentication', 'JWT', 'Session Management',
    ],
  },
  {
    category: 'Architecture & Systems',
    icon: '⬡',
    description: 'Thinking beyond the feature — designing systems that scale with the team and the product.',
    skills: [
      'UI Architecture', 'Design Systems', 'Component Libraries',
      'SDK Development', 'npm Publishing', 'Monorepos',
    ],
  },
  {
    category: 'Real-time & Communication',
    icon: '⬡',
    description: 'Rare expertise in browser-based real-time systems — from VoIP to live collaboration.',
    skills: [
      'WebRTC', 'Socket.io', 'SIP.js', 'Janus Media Server',
      'Asterisk PBX', 'Electron',
    ],
  },
  {
    category: 'Tooling & DevOps',
    icon: '⬡',
    description: 'Serious about the developer experience — fast builds, clean pipelines, sharp tooling.',
    skills: [
      'Vite', 'Rollup', 'Webpack', 'Git', 'GitHub Actions',
      'Vercel', 'CI / CD', 'Docker (basics)',
    ],
  },
  {
    category: 'Performance & Quality',
    icon: '⬡',
    description: 'Performance isn\'t a checklist item — it\'s a discipline I apply from the first commit.',
    skills: [
      'Core Web Vitals', 'Lighthouse Optimisation', 'Lazy Loading',
      'Code Splitting', 'Bundle Analysis', 'Accessibility (WCAG)',
      'SEO', 'WordPress Performance',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="section-title mb-4">Technical skills</h2>
          <p className="section-subtitle text-secondary">
            Not a list of buzzwords — these are tools I've used to ship real software,
            solve real problems, and own real systems.
          </p>
        </motion.div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card p-6 group"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <h3 className="text-fg font-semibold text-sm">{group.category}</h3>
              </div>

              {/* Description */}
              <p className="text-muted text-xs leading-relaxed mb-4">
                {group.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
