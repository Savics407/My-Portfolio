import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'

/* ─── Work Archive Table ─────────────────────────────────── */
export default function ArchiveTable({ projects, onSelectProject }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr
            className="text-muted text-[0.6875rem] font-mono font-semibold uppercase tracking-widest border-b border-border/60"
          >
            <th className="py-3.5 pr-6 pl-2 w-20">Year</th>
            <th className="py-3.5 pr-6">Project</th>
            <th className="py-3.5 pr-6 hidden sm:table-cell">Made At</th>
            <th className="py-3.5 pr-6 hidden lg:table-cell">Built With</th>
            <th className="py-3.5 pl-6 text-right">Links</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="archive-row group border-b border-border/30 last:border-0"
            >
              {/* Year */}
              <td className="py-5 pr-6 pl-2 text-xs font-mono font-semibold text-muted align-top pt-[1.35rem] whitespace-nowrap">
                {project.year}
              </td>

              {/* Project title & role */}
              <td className="py-5 pr-6 align-top">
                {/* Title — clickable only, not the whole row */}
                <div className="mb-1">
                  {project.casestudyRoute ? (
                    <Link
                      to={project.casestudyRoute}
                      className="project-title-link font-semibold text-base md:text-[1.0625rem] inline-flex items-center gap-1.5 leading-snug"
                    >
                      {project.title}
                      <FiArrowRight
                        size={13}
                        className="opacity-0 group-hover:opacity-60 transition-opacity -rotate-45 flex-shrink-0"
                      />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="project-title-link font-semibold text-base md:text-[1.0625rem] inline-flex items-center gap-1.5 leading-snug text-left"
                    >
                      {project.title}
                      <span className="text-[10px] text-muted font-mono opacity-0 group-hover:opacity-70 transition-opacity font-normal">
                        (spec)
                      </span>
                    </button>
                  )}
                </div>

                {/* Role */}
                <div className="text-sm font-mono text-muted leading-relaxed">
                  {project.role}
                </div>

                {/* Inline badges — only if notable */}
                <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                  {project.flagship && (
                    <span className="text-[10px] font-mono text-bg bg-accent px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      ★ Flagship
                    </span>
                  )}
                  {project.caseStudyStatus === 'Proprietary Product' && (
                    <span
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="text-[10px] font-mono text-zinc-400 bg-zinc-800/60 border border-zinc-700/50 px-2 py-0.5 rounded-full font-medium cursor-pointer hover:border-zinc-600 transition-colors"
                    >
                      ⚡ Proprietary
                    </span>
                  )}
                </div>
              </td>

              {/* Made At / Company */}
              <td className="py-5 pr-6 hidden sm:table-cell align-top pt-[1.35rem]">
                <div className="text-sm font-medium text-fg/90 leading-snug">{project.company}</div>
                <div className="text-xs text-muted mt-0.5">{project.industry}</div>
              </td>

              {/* Built With — neutral dark chips */}
              <td className="py-5 pr-6 hidden lg:table-cell align-top pt-[1.35rem]">
                <div className="flex flex-wrap gap-1.5 max-w-sm">
                  {project.tech && project.tech.slice(0, 6).map((t) => (
                    <span key={t} className="tech-chip">
                      {t}
                    </span>
                  ))}
                  {project.tech && project.tech.length > 6 && (
                    <span className="text-[0.6875rem] font-mono text-muted py-0.5">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>
              </td>

              {/* Links */}
              <td className="py-5 pl-6 text-right align-top pt-[1.35rem] whitespace-nowrap">
                <div className="inline-flex items-center justify-end gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-fg transition-colors duration-200 p-1.5 rounded-md hover:bg-raised"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                  {project.casestudyRoute ? (
                    <Link
                      to={project.casestudyRoute}
                      className="inline-flex items-center gap-1 text-accent hover:text-accent/80 text-xs font-semibold font-mono transition-colors duration-200 px-1 py-0.5"
                    >
                      Case study <FiArrowRight size={12} />
                    </Link>
                  ) : project.caseStudyStatus === 'Proprietary Product' ? (
                    <button
                      type="button"
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 text-xs font-mono transition-colors duration-200 px-1 py-0.5 cursor-pointer"
                    >
                      ⚡ Spec
                    </button>
                  ) : project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-fg transition-colors duration-200 p-1.5 rounded-md hover:bg-raised"
                      aria-label="Live site"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="text-muted hover:text-fg text-xs font-mono transition-colors duration-200 cursor-pointer"
                    >
                      Spec
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
