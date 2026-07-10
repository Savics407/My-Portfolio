import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { GITHUB_URL, LINKEDIN_URL, X_URL, EMAIL } from '../../data/narrative'
import savicsLogo from '../../assets/S-white logo.png'
import { FaXTwitter } from 'react-icons/fa6'

const SOCIAL = [
  { icon: <FiGithub size={16} />, href: GITHUB_URL, label: 'GitHub' },
  { icon: <FiLinkedin size={16} />, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: <FaXTwitter size={16} />, href: X_URL, label: 'Twitter / X' },
  { icon: <FiMail size={16} />, href: `mailto:${EMAIL}`, label: 'Email' },
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
            <div className="w-6 h-6 rounded bg-raised border border-border flex items-center justify-center p-1">
              <img src={savicsLogo} alt="Savics mark" className="w-full h-full object-contain opacity-85" />
            </div>
            <p className="text-muted text-xs">
              © {currentYear} <span className="text-fg font-medium">Victor Adighibe</span> <span className="font-mono">(Savics)</span>. 
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