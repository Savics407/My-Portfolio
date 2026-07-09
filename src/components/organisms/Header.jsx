import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Work',     href: '#work' },
  { label: 'Skills',   href: '#skills' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeSection, setActive] = useState('')

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)

    const sections = ['work', 'skills', 'about', 'contact']
    let current = ''
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el && window.scrollY >= el.offsetTop - 120) current = id
    }
    setActive(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ─── Desktop Nav ─────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-glass' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-5 md:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Victor Adighibe home">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <span className="text-accent font-mono text-sm font-bold leading-none">V</span>
            </div>
            <span className="text-fg font-semibold text-sm tracking-tight hidden sm:block">
              Victor Adighibe
            </span>
          </Link>

          {/* Desktop Centre Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                className={`nav-link px-3 py-1.5 rounded-md transition-colors ${
                  activeSection === href.slice(1)
                    ? 'text-fg bg-raised'
                    : 'hover:text-fg hover:bg-raised'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <span className="badge badge-green">
              <span className="badge-dot" />
              Available
            </span>
            <a
              href="/resume.pdf"
              download
              className="btn-ghost text-xs py-1.5 px-3"
              aria-label="Download resume"
            >
              <FiDownload size={13} />
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-secondary hover:text-fg transition-colors p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>

      {/* ─── Mobile Menu ─────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col"
          >
            {/* Mobile nav header */}
            <div className="h-16 flex items-center justify-between px-5 border-b border-stroke/40">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-mono text-sm font-bold">V</span>
                </div>
                <span className="text-fg font-semibold text-sm">Victor Adighibe</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-secondary hover:text-fg p-2 rounded-md"
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  className="text-2xl font-semibold text-secondary hover:text-fg py-3 border-b border-stroke/30 transition-colors"
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile footer links */}
            <div className="px-8 py-10 border-t border-stroke/40">
              <div className="flex gap-4 mb-6">
                <a href="https://github.com/Savics407" target="_blank" rel="noopener noreferrer"
                  className="btn-ghost text-sm py-2 px-4">
                  <FiGithub size={15} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/victor-adighibe-b4a89923a/" target="_blank" rel="noopener noreferrer"
                  className="btn-ghost text-sm py-2 px-4">
                  <FiLinkedin size={15} /> LinkedIn
                </a>
              </div>
              <a
                href="/resume.pdf"
                download
                className="btn-primary w-full justify-center"
              >
                <FiDownload size={15} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
