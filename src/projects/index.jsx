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
import EditorialCard from './components/EditorialCard'
import ArchiveTable from './components/ArchiveTable'
import SystemSpecModal from './components/SystemSpecModal'

const FILTER_TABS = [
  { id: 'all', label: 'All Work' },
  { id: 'case-studies', label: 'Featured Case Studies' },
  { id: 'professional-products', label: 'Professional Products' },
  { id: 'selected-projects', label: 'Selected Projects' },
  { id: 'enterprise-saas', label: 'Enterprise SaaS' },
  { id: 'telecommunications', label: 'Telecommunications' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'developer-tooling', label: 'Developer Tooling' },
  { id: 'business-intelligence', label: 'Business Intelligence' },
  { id: 'e-commerce', label: 'E-Commerce' },
  { id: 'internal-systems', label: 'Internal Systems' },
]

/* ─── Page Component ────────────────────────────────────────────────── */
export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('table') // 'table' | 'grid'
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      // 1. Tab match
      let tabMatch = false
      if (activeTab === 'all') {
        tabMatch = true
      } else if (activeTab === 'case-studies') {
        tabMatch = Boolean(p.casestudyRoute) || p.caseStudyStatus === 'Case Study Available' || p.flagship
      } else if (activeTab === 'professional-products') {
        tabMatch = ['dora', 'konvoy', 'paystream', 'petrodata', 'simpoo', 'simpoo-marketplace', 'sdk', 'paymable', 'dora-fleet', 'records', 'hxafrica', 'acimt'].includes(p.id)
      } else if (activeTab === 'selected-projects') {
        tabMatch = ['portfolio', 'africurve', 'fe', 'pmdafrica'].includes(p.id) || (Array.isArray(p.categories) && (p.categories.includes('personal-projects') || p.categories.includes('client-work')))
      } else {
        tabMatch =
          (Array.isArray(p.categories) && p.categories.includes(activeTab)) ||
          (p.industry && p.industry.toLowerCase().replace(/\s+/g, '-') === activeTab)
      }

      // 2. Search match
      if (!tabMatch) return false
      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase()
      const titleMatch = p.title.toLowerCase().includes(query)
      const descMatch = p.desc.toLowerCase().includes(query)
      const roleMatch = p.role.toLowerCase().includes(query)
      const companyMatch = p.company.toLowerCase().includes(query)
      const industryMatch = p.industry && p.industry.toLowerCase().includes(query)
      const techMatch = p.tech && p.tech.some((t) => t.toLowerCase().includes(query))
      const focusMatch = p.engineeringFocus && p.engineeringFocus.some((f) => f.toLowerCase().includes(query))

      return titleMatch || descMatch || roleMatch || companyMatch || industryMatch || techMatch || focusMatch
    })
  }, [activeTab, searchQuery])

  return (
    <DefaultLayout>
      {/* Hero Header */}
      <div className="pt-28 pb-12 px-5 md:px-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-muted text-sm hover:text-accent transition-colors mb-8"
            >
              <FiArrowLeft size={14} /> Back to home
            </Link>
            <p className="section-label mb-3">Engineering Work & Systems</p>
            <h1 className="section-title mb-4">Complete Work Archive</h1>
            <p className="section-subtitle text-secondary max-w-2xl text-base md:text-lg leading-relaxed">
              A comprehensive ledger of professional products, embeddable developer SDKs,
              real-time telephony platforms, and selected engineering work across 7+ years.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter, Search & View Controls */}
      <div
        className="sticky top-[64px] z-30 px-5 md:px-10 py-4 bg-[#09090b] gpu-layer shadow-md"
        style={{
          borderBottom: '1px solid #27272a',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
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
                  className={`text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
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
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech, focus, domain..."
                className="w-full bg-raised border border-border rounded-lg pl-9 pr-8 py-2 text-xs md:text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-fg"
                >
                  <FiX size={14} />
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
                <FiList size={16} />
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
                <FiGrid size={16} />
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
              <p className="text-fg font-semibold mb-1 text-lg">No matching systems found</p>
              <p className="text-muted text-sm mb-4">
                No systems matched "{searchQuery}" in this category.
              </p>
              <button
                onClick={() => {
                  setActiveTab('all')
                  setSearchQuery('')
                }}
                className="btn-ghost text-sm"
              >
                Reset filters
              </button>
            </div>
          ) : viewMode === 'table' ? (
            <ArchiveTable projects={filteredProjects} onSelectProject={setSelectedProject} />
          ) : (
            <motion.div
              layout
              className="grid sm:grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence>
                {filteredProjects.map((project, i) => (
                  <EditorialCard key={project.id} project={project} index={i} onSelectProject={setSelectedProject} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      <SystemSpecModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </DefaultLayout>
  )
}