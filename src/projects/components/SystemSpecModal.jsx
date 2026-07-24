import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiX, FiExternalLink, FiGithub, FiArrowRight, FiShield, FiCheckCircle, FiLayers } from 'react-icons/fi'

export default function SystemSpecModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      const originalOverflow = document.body.style.overflow
      const originalPaddingRight = document.body.style.paddingRight

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = originalOverflow
        document.body.style.paddingRight = originalPaddingRight
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [project, onClose])

  if (!project) return null

  const isProprietary = project.caseStudyStatus === 'Proprietary Product' || project.caseStudyStatus === 'Enterprise System' || !project.casestudyRoute

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 bg-[#09090b]/90"
            onClick={onClose}
          />

          {/* Modal / Drawer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-raised border border-border/80 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10 flex flex-col justify-between"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg bg-bg/60 border border-border/60 text-secondary hover:text-fg hover:border-accent transition-colors"
              aria-label="Close modal"
            >
              <FiX size={18} />
            </button>

            <div>
              {/* Top Metadata Row */}
              <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono">
                <span className="font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                  {project.industry}
                </span>
                <span className="text-secondary bg-bg px-2.5 py-1 rounded border border-border/80">
                  {project.displayStatus || 'Production'} · {project.year}
                </span>
                {project.caseStudyStatus && (
                  <span className="inline-flex items-center gap-1.5 text-secondary font-medium bg-bg px-2.5 py-1 rounded border border-border/80">
                    {project.caseStudyStatus === 'Proprietary Product' ? <FiShield className="text-accent" /> : '📑'}
                    {project.caseStudyStatus}
                  </span>
                )}
              </div>

              {/* Title & Role */}
              <div className="mb-6 border-b border-border/60 pb-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-1.5 tracking-tight">
                  {project.title}
                </h2>
                <div className="text-sm font-mono text-secondary flex flex-wrap items-center gap-2">
                  <span className="text-fg font-semibold">{project.role}</span>
                  <span className="text-muted">at {project.company}</span>
                </div>
              </div>

              {/* System Overview */}
              <div className="mb-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-2 flex items-center gap-2">
                  <FiLayers className="text-accent" /> // System Overview & Purpose
                </h3>
                <p className="text-secondary text-base leading-relaxed bg-bg/50 border border-border/60 rounded-xl p-4">
                  {project.desc}
                </p>
              </div>

              {/* Core Engineering Responsibilities */}
              {(project.quickSpec?.responsibilities || (project.engineeringFocus && project.engineeringFocus.length > 0)) && (
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-3 flex items-center gap-2">
                    <FiCheckCircle className="text-accent" /> // Core Responsibilities & Engineering Scope
                  </h3>
                  {project.quickSpec?.responsibilities ? (
                    <ul className="space-y-2.5">
                      {project.quickSpec.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-secondary leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {project.engineeringFocus.map((focus) => (
                        <span
                          key={focus}
                          className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Key Architectural Constraints */}
              {project.quickSpec?.constraints && project.quickSpec.constraints.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-2.5">
                    // Key Architectural & Operational Constraints
                  </h3>
                  <div className="space-y-2">
                    {project.quickSpec.constraints.map((c, idx) => (
                      <div key={idx} className="text-sm font-mono text-muted bg-bg/70 border border-border/70 rounded-lg px-3.5 py-2.5">
                        ⚡ {c}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Stack */}
              <div className="mb-8">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-2.5">
                  // Built With
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech && project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-fg bg-bg border border-border/80 px-3 py-1 rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions / Note */}
            <div className="pt-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-secondary flex items-center gap-2">
                {isProprietary && (
                  <span className="flex items-center gap-1.5 text-muted">
                    <FiShield className="text-accent flex-shrink-0" size={14} />
                    <span>Proprietary enterprise architecture</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {project.casestudyRoute && (
                  <Link
                    to={project.casestudyRoute}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-bg font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    Read Full Case Study <FiArrowRight size={16} />
                  </Link>
                )}

                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg border border-border hover:border-accent text-fg font-semibold text-sm transition-colors"
                  >
                    Live Site <FiExternalLink size={15} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-bg border border-border hover:border-accent text-secondary hover:text-fg transition-colors"
                    aria-label="GitHub repository"
                  >
                    <FiGithub size={18} />
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-bg/80 border border-border/80 text-secondary hover:text-fg text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
