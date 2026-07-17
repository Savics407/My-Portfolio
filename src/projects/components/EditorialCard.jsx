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
      className="card hover-lift flex flex-col justify-between p-6 md:p-7 group border border-border/80 bg-raised/60 hover:bg-raised transition-all rounded-xl"
      style={{ minHeight: '300px' }}
    >
      <div>
        {/* Top Metadata Row: Year, Industry & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-muted font-bold">{project.year}</span>
            <span className="text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-medium">
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
        <div className="flex items-center justify-between gap-2 mb-1.5">
          {project.casestudyRoute ? (
            <Link to={project.casestudyRoute} className="text-fg font-bold text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors flex items-center gap-2">
              {project.title}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onSelectProject && onSelectProject(project)}
              className="text-fg font-bold text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors flex items-center gap-2 text-left cursor-pointer"
            >
              {project.title}
            </button>
          )}
          {project.flagship && (
            <span className="text-[10px] font-mono font-bold text-bg bg-accent px-2 py-0.5 rounded-full uppercase tracking-wider">
              ★ Flagship
            </span>
          )}
        </div>

        {/* Role & Company */}
        <div className="text-sm font-mono text-secondary mb-4 flex items-center gap-1.5">
          <span className="text-fg font-normal">{project.role}</span>
          <span className="text-muted">at {project.company}</span>
        </div>

        {/* Concise Description */}
        <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
          {project.desc}
        </p>
      </div>

      <div>
        {/* Minimal Built-With Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech && project.tech.map((t) => (
            <span
              key={t}
              className="text-xs text-secondary bg-bg/80 border border-border/80 px-2.5 py-1 rounded-md"
            >
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
