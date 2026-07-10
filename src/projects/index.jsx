import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiGithub,
  FiExternalLink,
  FiArrowLeft,
  FiArrowRight,
  FiSearch,
  FiX,
  FiList,
  FiGrid,
} from 'react-icons/fi'
import DefaultLayout from '../components/layout/DefaultLayout'
import { ALL_PROJECTS } from '../data/projects'

function getProjectCategory(p) {
  if (p.id === 'dora' || p.id === 'simpoo' || p.id === 'paymable') return 'systems'
  if (p.id === 'sdk') return 'sdks'
  return 'web'
}

function getProjectYear(p) {
  if (p.id === 'dora') return '2025'
  if (p.id === 'simpoo' || p.id === 'sdk') return '2024'
  if (p.id === 'hxafrica' || p.id === 'paymable') return '2023'
  if (p.id === 'africurve') return '2022'
  return '2021'
}

const FILTER_TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'systems', label: 'Platforms & Real-Time Systems' },
  { id: 'sdks', label: 'SDKs & Developer Tooling' },
  { id: 'web', label: 'Client & Web Applications' },
]

/* ─── Editorial Showcase Card (Grid View) ───────────────────────────── */
function EditorialCard({ project, index }) {
  const year = getProjectYear(project)
  const categoryLabel =
    getProjectCategory(project) === 'systems'
      ? 'Real-Time System & SaaS'
      : getProjectCategory(project) === 'sdks'
      ? 'Developer SDK & Tooling'
      : 'Web Application'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="card hover-lift flex flex-col justify-between p-6 md:p-8"
      style={{ minHeight: '320px' }}
    >
      <div>
        {/* Header Badge Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
            {categoryLabel}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-secondary font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            Live · {year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-fg font-bold text-xl md:text-2xl mb-1.5 tracking-tight">
          {project.title}
        </h3>

        {/* Role & Company */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
          <span className="text-fg font-medium">{project.role}</span>
          <span className="text-muted">at {project.company}</span>
        </div>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed mb-6">
          {project.desc}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="skill-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Actions Row */}
        <div
          className="pt-4 flex flex-wrap items-center justify-between gap-3"
          style={{ borderTop: '1px solid #27272a' }}
        >
          <div className="flex items-center gap-4">
            {project.casestudyRoute && (
              <Link
                to={project.casestudyRoute}
                className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:underline"
              >
                Read Case Study <FiArrowRight size={14} />
              </Link>
            )}
            {!project.casestudyRoute && project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-fg text-sm font-medium hover:text-accent transition-colors"
              >
                Live Site <FiExternalLink size={14} />
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors p-1"
                aria-label={`${project.title} GitHub repository`}
              >
                <FiGithub size={17} />
              </a>
            )}
            {project.externalUrl && project.casestudyRoute && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors p-1"
                aria-label={`${project.title} Live site`}
              >
                <FiExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Brittany Chiang Style Engineering Archive Table ────────────────── */
function ArchiveTable({ projects }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-raised">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr
            className="text-muted text-xs font-mono uppercase tracking-wider"
            style={{ borderBottom: '1px solid #27272a' }}
          >
            <th className="py-4 px-5">Year</th>
            <th className="py-4 px-5">System / Project</th>
            <th className="py-4 px-5 hidden sm:table-cell">Domain & Role</th>
            <th className="py-4 px-5 hidden md:table-cell">Built With</th>
            <th className="py-4 px-5 text-right">Links</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-sm">
          {projects.map((project) => {
            const year = getProjectYear(project)
            return (
              <tr
                key={project.id}
                className="hover:bg-bg/60 transition-colors group"
              >
                {/* Year */}
                <td className="py-4 px-5 font-mono text-xs text-secondary whitespace-nowrap align-top">
                  {year}
                </td>

                {/* Title & Desc */}
                <td className="py-4 px-5 align-top">
                  <div className="font-semibold text-fg group-hover:text-accent transition-colors text-base mb-1">
                    {project.casestudyRoute ? (
                      <Link to={project.casestudyRoute}>{project.title}</Link>
                    ) : project.externalUrl ? (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </div>
                  <p className="text-secondary text-xs line-clamp-2 max-w-md">
                    {project.desc}
                  </p>
                </td>

                {/* Domain & Role */}
                <td className="py-4 px-5 hidden sm:table-cell align-top text-xs">
                  <div className="text-fg font-medium mb-0.5">{project.role}</div>
                  <div className="text-muted">{project.company}</div>
                </td>

                {/* Built With Tags */}
                <td className="py-4 px-5 hidden md:table-cell align-top">
                  <div className="flex flex-wrap gap-1.5 max-w-sm">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Links */}
                <td className="py-4 px-5 text-right align-top whitespace-nowrap">
                  <div className="inline-flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label="GitHub repo"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.casestudyRoute && (
                      <Link
                        to={project.casestudyRoute}
                        className="text-muted hover:text-accent transition-colors"
                        aria-label="Case study"
                      >
                        <FiArrowRight size={16} />
                      </Link>
                    )}
                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label="External link"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

/* ─── Page Component ────────────────────────────────────────────────── */
export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('table') // 'table' | 'grid'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      // 1. Tab match
      const category = getProjectCategory(p)
      const tabMatch = activeTab === 'all' || category === activeTab

      // 2. Search match
      if (!tabMatch) return false
      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase()
      const titleMatch = p.title.toLowerCase().includes(query)
      const descMatch = p.desc.toLowerCase().includes(query)
      const roleMatch = p.role.toLowerCase().includes(query)
      const companyMatch = p.company.toLowerCase().includes(query)
      const techMatch = p.tech.some((t) => t.toLowerCase().includes(query))

      return titleMatch || descMatch || roleMatch || companyMatch || techMatch
    })
  }, [activeTab, searchQuery])

  return (
    <DefaultLayout>
      {/* Hero Header */}
      <div
        className="pt-28 pb-12 px-5 md:px-10"
        // style={{ borderBottom: '1px solid #27272a' }}
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-muted text-xs hover:text-accent transition-colors mb-8"
            >
              <FiArrowLeft size={12} /> Back to home
            </Link>
            <p className="section-label mb-3">Systems Archive & Directory</p>
            <h1 className="section-title mb-4">Everything I've Shipped</h1>
            <p className="section-subtitle text-secondary max-w-2xl">
              A comprehensive ledger of production platforms, embeddable developer SDKs,
              real-time telephony systems, and client applications built across 7+ years.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter, Search & View Controls */}
      <div
        className="sticky top-[65px] z-30 px-5 md:px-10 py-4 bg-bg/95 backdrop-blur-md"
        style={{ borderBottom: '1px solid #27272a' }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-accent text-bg font-semibold'
                      : 'text-secondary hover:text-fg hover:bg-raised'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Search Bar + View Mode Toggle */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <FiSearch
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech, domain, keywords..."
                className="w-full bg-raised border border-border rounded-lg pl-9 pr-8 py-1.5 text-xs text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-fg"
                >
                  <FiX size={13} />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-raised border border-border rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('table')}
                aria-label="Table view"
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'table'
                    ? 'bg-accent text-bg'
                    : 'text-muted hover:text-fg'
                }`}
              >
                <FiList size={15} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-accent text-bg'
                    : 'text-muted hover:text-fg'
                }`}
              >
                <FiGrid size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-5 md:px-10 py-12 min-h-[500px]">
        <div className="container mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 card">
              <p className="text-fg font-semibold mb-1">No matching projects found</p>
              <p className="text-muted text-xs mb-4">
                No projects matched "{searchQuery}" in this category.
              </p>
              <button
                onClick={() => {
                  setActiveTab('all')
                  setSearchQuery('')
                }}
                className="btn-ghost text-xs"
              >
                Reset filters
              </button>
            </div>
          ) : viewMode === 'table' ? (
            <ArchiveTable projects={filteredProjects} />
          ) : (
            <motion.div
              layout
              className="grid sm:grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence>
                {filteredProjects.map((project, i) => (
                  <EditorialCard key={project.id} project={project} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </DefaultLayout>
  )
}