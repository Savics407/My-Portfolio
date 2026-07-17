import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'

/* ─── Minimalist Brittany Chiang Style Archive Table ─────────────────── */
export default function ArchiveTable({ projects, onSelectProject }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr
            className="text-secondary text-xs font-mono font-semibold uppercase tracking-wider border-b border-border/80"
          >
            <th className="py-4 pr-6 pl-2 w-20">Year</th>
            <th className="py-4 pr-6">Project & Role</th>
            <th className="py-4 pr-6 hidden sm:table-cell">Made At</th>
            <th className="py-4 pr-6 hidden lg:table-cell">Built With</th>
            <th className="py-4 pl-6 text-right">Link</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50 text-sm">
          {projects.map((project) => (
            <tr
              key={project.id}
              className="hover:bg-raised/60 transition-colors group"
            >
              {/* Year */}
              <td className="py-4 pr-6 pl-2 font-mono text-sm text-muted font-semibold align-middle whitespace-nowrap">
                {project.year}
              </td>

              {/* Project & Role */}
              <td className="py-4 pr-6 align-middle">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-fg group-hover:text-accent transition-colors text-base md:text-lg inline-flex items-center gap-1.5">
                    {project.casestudyRoute ? (
                      <Link to={project.casestudyRoute} className="inline-flex items-center gap-1.5 hover:underline">
                        {project.title} <FiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -rotate-45" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onSelectProject && onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 hover:underline text-left cursor-pointer"
                      >
                        {project.title}
                        <span className="text-xs text-muted font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          (View Spec)
                        </span>
                      </button>
                    )}
                  </span>
                  {project.flagship && (
                    <span className="text-[10px] font-mono text-bg bg-accent px-2 rounded-full font-bold uppercase tracking-wider">
                      ★ Flagship
                    </span>
                  )}
                  {project.caseStudyStatus === 'Proprietary Product' && (
                    <span
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full font-medium cursor-pointer hover:bg-accent/20 transition-colors"
                    >
                      ⚡ Proprietary Spec
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-secondary mt-0.5">
                  {project.role}
                </div>
              </td>

              {/* Made At / Domain */}
              <td className="py-4 pr-6 hidden sm:table-cell align-middle text-sm">
                <div className="font-semibold text-fg">{project.company}</div>
                <div className="text-xs font-mono text-muted">{project.industry}</div>
              </td>

              {/* Built With (Clean minimalist pills, no descriptions cluttering rows) */}
              <td className="py-4 pr-6 hidden lg:table-cell align-middle">
                <div className="flex flex-wrap gap-1.5 max-w-lg">
                  {project.tech && project.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono bg-accent/10 text-accent border border-accent/20 px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech && project.tech.length > 6 && (
                    <span className="text-xs font-mono text-muted py-0.5 px-1">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>
              </td>

              {/* Link */}
              <td className="py-4 pl-6 text-right align-middle whitespace-nowrap">
                <div className="inline-flex items-center justify-end gap-3 font-mono text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent transition-colors p-1.5"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={17} />
                    </a>
                  )}
                  {project.casestudyRoute ? (
                    <Link
                      to={project.casestudyRoute}
                      className="text-accent hover:underline inline-flex items-center gap-1 font-semibold p-1"
                    >
                      Case study <FiArrowRight size={14} />
                    </Link>
                  ) : project.caseStudyStatus === 'Proprietary Product' ? (
                    <button
                      type="button"
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="text-accent hover:underline inline-flex items-center gap-1 font-semibold p-1 cursor-pointer"
                    >
                      ⚡ Spec
                    </button>
                  ) : project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent transition-colors p-1.5"
                      aria-label="Live site"
                    >
                      <FiExternalLink size={17} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="text-muted hover:text-accent text-xs font-mono cursor-pointer"
                    >
                      Offline / Spec
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
