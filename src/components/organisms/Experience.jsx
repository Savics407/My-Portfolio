import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { YEARS_EXPERIENCE } from '../../data/narrative'

const EXPERIENCE = [
  {
    product: 'Enterprise Platforms: Records, Konvoy, PetroData & PayStream',
    company: 'NoemDek',
    role: 'Senior Frontend Engineer',
    period: '2025 — Present',
    type: 'Full-time',
    url: null,
    companyIntro:
      'NoemDek develops enterprise platforms that power business intelligence, logistics, payroll, and industrial operations, helping organizations streamline complex workflows through modern software.',
   
    roleSummary:
      'Led the frontend architecture and delivery of multiple enterprise platforms, owning greenfield product development, shared engineering foundations, and scalable frontend systems across business-critical applications.',
    highlights: [
      'Architected Records from the ground up, establishing the frontend architecture, application structure, and engineering standards for a modern business intelligence platform designed to help organizations research, evaluate, and manage company data.',
      'Engineered a shared stateful data engine powered by Zustand and TanStack Table, creating reusable abstractions adopted across Records, Konvoy, PetroData, and PayStream while significantly accelerating feature delivery and reducing duplicated engineering effort.',
       'Designed high-performance operational dashboards supporting industrial telemetry, logistics, payroll, and enterprise reporting, leveraging virtualization and efficient state management to handle large datasets with responsive user experiences.',
      'Partnered directly with product owners and backend engineers to design type-safe APIs, model complex business domains, and resolve data synchronization challenges across evolving enterprise systems.',
      'Championed maintainable frontend architecture through reusable components, consistent engineering patterns, and code quality practices that improved long-term scalability across multiple products.'
    ],
    tech: ['Next.js', 'TypeScript', 'Enterprise SaaS', 'Zustand', 'TanStack Table', 'REST APIs'],
  },
  {
    product: 'SimpooBusiness Platform, POS & Marketplace Ecosystem',
    company: 'Jiffypay',
    role: 'Lead Frontend Engineer',
    period: '2023 — 2025',
    type: 'Full-time',
    url: 'https://simpoobusiness.com',
     companyIntro:
      'Jiffypay builds digital commerce and retail solutions that enable businesses to manage inventory, sales, payments, and day-to-day operations through an integrated software ecosystem.',
    roleSummary:
      'Architected the frontend foundation of the Simpoo ecosystem from inception, enabling the platform to scale across 185 retail locations while supporting centralized multi-branch operations and modern commerce workflows.',
    highlights: [
      'POS Checkout: Engineered a fault-tolerant Point of Sale checkout engine using Redux Toolkit and local storage persistence, reducing checkout latency to sub-seconds while ensuring zero lost carts during intermittent network outages.',
      'Simpoo Marketplace: Led the development of a multi-vendor digital storefront that synchronized with physical store inventories in real-time, designing a split-cart checkout engine to route sub-orders and compute shipping fees per merchant.',
      'Developer Experience: Authored, documented, and published the company\'s standalone JavaScript SDKs (@simpoobusiness/sdk), bundling the code via Rollup with encapsulated CSS to allow partner sites to integrate within 10 lines of code.',
      'Invoice and Reporting: Integrated custom rich document editors (Tiptap) and high-speed PDF/Excel exporting pipelines, eliminating manual billing overhead for thousands of daily retail transactions.',
    ],
    tech: ['Next.js 14', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Electron', 'Rollup SDK', 'Tiptap', 'Tailwind CSS'],
  },
  {
    product: 'Dora Cell Telephony Infrastructure & Dora Fleet Logistics',
    company: 'Dora',
    role: 'Founding Engineer (Frontend Lead)',
    period: '2023 — Present',
    type: 'Founding Engineer',
    url: 'https://usedora.com',

    companyIntro:
      'Dora provides carrier-grade communication infrastructure and logistics software, enabling businesses to embed reliable voice capabilities and streamline operational workflows.',
    roleSummary:
      "Joined Dora as one of its founding engineers, leading frontend engineering from day one and establishing the technical foundations behind Dora Cell, Dora Fleet, and the company's embeddable developer platform.",
    highlights: [
      'Carrier-Grade Communications: Architected and implemented the client signaling layer using WebRTC and SIP.js over Asterisk media servers, overcoming complex NAT traversal challenges to achieve 99.9% signaling reliability.',
      'SDK Platform: Created and published the modular NPM packages (@dora-cell/sdk, @dora-cell/sdk-react), enabling both internal products and third-party platforms such as GoHighLevel to embed calling capabilities seamlessly.',
      'Dora Fleet: Designed real-time dispatch experiences using React-Leaflet, Socket.IO, and Geoman geofencing, providing operations teams with sub-second updates across active delivery routes.',
      'Engineering Leadership: Mentored frontend engineers, established coding standards, led code reviews, and introduced scalable architecture patterns that improved maintainability as the engineering team expanded.',
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'WebRTC & SIP.js', 'Asterisk PBX', 'React-Leaflet', 'Socket.io', 'Monorepo SDK'],
  },
  {
    product: 'HxAfrica Real Estate & Asset Tokenization Platform',
    company: 'HxAfrica Platform',
    role: 'Frontend Engineer',
    period: '2022 — 2023',
    type: 'Contract',
    url: "https://hxafrica.com",

       companyIntro:
      'HxAfrica is a proptech platform connecting global investors with institutional real estate opportunities across Africa through secure digital investment experiences.',
    roleSummary:
      'Architected and delivered the investor portal from the ground up, building secure onboarding, portfolio management, and investment workflows for a regulated real estate platform.',
    highlights: [
      'Portal Architecture: Designed and developed the core web application using React and Tailwind CSS, implementing high-performance property discovery and interactive investment calculators.',
      'KYC & Compliance: Engineered structured KYC/AML onboarding and multi-step investor verification flows, balancing regulatory compliance with a frictionless onboarding experience.',
      'Portfolio Experience: Built real-time portfolio dashboards and dividend reporting interfaces, providing investors with transparent, exportable audit trails of their tokenized assets.',
    ],
    tech: ['React', 'Tailwind CSS', 'Figma', 'REST APIs', 'Portfolio Reporting'],
  },
  {
    product: 'High-Performance Institutional & Agency Web Platforms',
    company: 'Agency & Client Engineering',
    role: 'Frontend Engineer',
    period: '2019 — 2022',
    type: 'Freelance & Client Work',
    url: null,
     companyIntro:
      'Partnered with startups, educational institutions, NGOs, and agencies to build high-performance websites, custom CMS solutions, and scalable digital experiences.',
    roleSummary:
      'Designed and delivered performant web platforms that improved accessibility, maintainability, and Core Web Vitals while tailoring content management experiences to each client\'s operational needs.',
    highlights: [
      'Performance Engineering: Audited and optimized legacy websites using custom asset pipelines and modern frontend techniques, achieving excellent Core Web Vitals and consistently fast page-load times.',
      'CMS Engineering: Developed custom WordPress themes, donation platforms, and content management solutions for organizations including PMDAfrica and ACIMT, focusing on accessibility, maintainability, and secure user experiences.',
    ],
    tech: ['JavaScript', 'WordPress', 'Performance Engineering', 'Core Web Vitals', 'Custom Theme Architecture', 'HTML5/CSS3'],
  },
]

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0)
  const isPrimary = exp.type === 'Full-time' || exp.type === 'Founding Engineer'

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative lg:pl-8 pl-4"
    >
      {/* Timeline elements */}
      <div className="timeline-line" />
      <div className="timeline-dot" />

      <div className="card p-6 mb-6 space-y-4">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-fg font-bold text-lg leading-snug">{exp.product || exp.company}</h3>
              {exp.url && (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={`Visit ${exp.company}`}
                >
                  <FiExternalLink size={13} />
                </a>
              )}
            </div>
            <p className="text-accent text-sm font-semibold">
              {exp.role}
              <span className="text-muted font-normal text-[0.8125rem]"> · {exp.company}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-muted font-mono">{exp.period}</span>
            <span className="badge font-semibold" style={{
              color: isPrimary ? '#4ade80' : '#a1a1aa',
              borderColor: isPrimary ? 'rgba(74,222,128,0.25)' : 'rgba(161,161,170,0.2)',
              background: isPrimary ? 'rgba(74,222,128,0.08)' : 'rgba(161,161,170,0.05)',
            }}>
              {exp.type}
            </span>
          </div>
        </div>

<div className='space-y-4'>
        {/* roleSummary */}
        <p className="text-[#c2c2cb] text-[0.875rem] leading-[1.85] font-semibold italic">{exp.companyIntro}</p>
        <p className="text-[#b4b4be] text-[0.875rem] leading-[1.85]">{exp.roleSummary}</p>
        </div>

        {/* Expandable highlights */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <ul className="space-y-3 mb-5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-[0.875rem] text-[#b0b0ba] leading-[1.8]">
                    <span className="text-accent mt-[0.2rem] flex-shrink-0 text-base leading-none">›</span>
                    <span className={h.startsWith('[') ? 'text-muted italic' : ''}>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech tags (neutral) + toggle */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-muted hover:text-accent transition-colors flex items-center gap-1 text-xs font-medium flex-shrink-0"
            aria-label={expanded ? 'Show less' : 'Show more'}
          >
            {expanded ? (
              <><FiChevronUp size={14} /> Less</>
            ) : (
              <><FiChevronDown size={14} /> Details</>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="section-title mb-4">Where I've worked</h2>
          <p className="section-subtitle text-secondary">
            {YEARS_EXPERIENCE}+ years building enterprise software across startups, product companies, and open source — always as the engineer
            who owns the system end-to-end, not just the ticket.
          </p>
        </motion.div>

        <div className="relative">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
