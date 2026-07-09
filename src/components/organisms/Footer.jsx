import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'

const SOCIAL = [
  { icon: <FiGithub size={16} />, href: 'https://github.com/Savics407', label: 'GitHub' },
  { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/victor-adighibe-b4a89923a/', label: 'LinkedIn' },
  { icon: <FiTwitter size={16} />, href: 'https://twitter.com/_Savics', label: 'Twitter / X' },
  { icon: <FiMail size={16} />, href: 'mailto:savicstech@gmail.com', label: 'Email' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ borderTop: '1px solid #27272a' }}>
      <div className="container mx-auto px-5 md:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left — brand + copy */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-accent font-mono text-xs font-bold">V</span>
            </div>
            <p className="text-muted text-xs">
              © {currentYear} Victor Adighibe. Built with React & TypeScript.
            </p>
          </div>

          {/* Centre — social links */}
          <div className="flex items-center gap-1">
            {SOCIAL.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:text-accent hover:bg-raised transition-all"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Right — back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <FiArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}