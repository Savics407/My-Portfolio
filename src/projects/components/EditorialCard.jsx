import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'

/* ─── Minimalist Grid Card (EditorialCard) ─────────────────────────── */
export default function EditorialCard({ project, index, onSelectProject }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="card hover-lift flex flex-col justify-between p-6 md:p-8 group border border-border/70 bg-raised/50 hover:bg-raised transition-all rounded-xl"
      style={{ minHeight: '300px' }}
    >
      <div>
        {/* Top Metadata Row: Year, Industry & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-muted">{project.year}</span>
            {/* Industry — neutral chip, not green */}
            <span className="tech-chip">
              {project.industry}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-secondary">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: project.displayStatus === 'Production' ? '#4ade80' : '#a1a1aa' }}
            />
            <span>{project.displayStatus || 'Production'}</span>
          </div>
        </div>

        {/* Title + Flagship pill */}
        <div className="flex items-start justify-between gap-2 mb-2">
          {project.casestudyRoute ? (
            <Link
              to={project.casestudyRoute}
              className="project-title-link font-bold text-[1.1rem] md:text-[1.2rem] tracking-tight leading-snug flex items-center gap-2"
            >
              {project.title}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onSelectProject && onSelectProject(project)}
              className="project-title-link font-bold text-[1.1rem] md:text-[1.2rem] tracking-tight leading-snug flex items-center gap-2 text-left cursor-pointer"
            >
              {project.title}
            </button>
          )}
          {project.flagship && (
            <span className="text-[10px] font-mono font-bold text-bg bg-accent px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
              ★ Flagship
            </span>
          )}
        </div>

        {/* Role & Company — subordinate to title */}
        <div className="text-[0.8125rem] font-mono mb-4 flex items-center gap-1.5 flex-wrap">
          <span className="text-zinc-300 font-medium">{project.role}</span>
          <span className="text-muted">·</span>
          <span className="text-muted">{project.company}</span>
        </div>

        {/* Concise Description — improved contrast & line-height */}
        <p className="text-[#b4b4be] text-[0.875rem] leading-[1.8] mb-6 line-clamp-3">
          {project.desc}
        </p>
      </div>

      <div>
        {/* Tech Stack — neutral chips, not green */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech && project.tech.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

        {/* Clean Action Links Row */}
        <div
          className="pt-4 flex items-center justify-between gap-3 text-xs font-mono border-t border-border/60"
        >
          <div className="flex items-center gap-4">
            {project.casestudyRoute ? (
              <Link
                to={project.casestudyRoute}
                className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline"
              >
                Case Study <FiArrowRight size={14} />
              </Link>
            ) : project.caseStudyStatus === 'Proprietary Product' ? (
              <button
                type="button"
                onClick={() => onSelectProject && onSelectProject(project)}
                className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline cursor-pointer"
              >
                ⚡ Proprietary Spec
              </button>
            ) : project.caseStudyStatus ? (
              <button
                type="button"
                onClick={() => onSelectProject && onSelectProject(project)}
                className="text-muted font-medium hover:text-accent transition-colors cursor-pointer"
              >
                📑 {project.caseStudyStatus} (Spec)
              </button>
            ) : null}

            {!project.casestudyRoute && project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-fg font-semibold hover:text-accent transition-colors"
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
                aria-label="GitHub repository"
              >
                <FiGithub size={16} />
              </a>
            )}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors p-1"
                aria-label="Live site"
              >
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
