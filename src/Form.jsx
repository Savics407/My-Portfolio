import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'

const CONTACT_LINKS = [
  {
    icon: <FiMail size={16} />,
    label: 'Email',
    value: 'savicstech@gmail.com',
    href: 'mailto:savicstech@gmail.com',
    description: 'Fastest way to reach me',
  },
  {
    icon: <FiGithub size={16} />,
    label: 'GitHub',
    value: 'github.com/Savics407',
    href: 'https://github.com/Savics407',
    description: 'See the code',
  },
  {
    icon: <FiLinkedin size={16} />,
    label: 'LinkedIn',
    value: 'Victor Adighibe',
    href: 'https://www.linkedin.com/in/victor-adighibe-b4a89923a/',
    description: 'Professional profile',
  },
]

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="card p-10 text-center"
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
        <FiCheck size={20} className="text-accent" />
      </div>
      <h3 className="text-fg font-semibold text-lg mb-2">Message received.</h3>
      <p className="text-secondary text-sm">I'll get back to you as soon as I can — usually within 24 hours.</p>
    </motion.div>
  )
}

export default function Form() {
  const [state, handleSubmit] = useForm('mzbqdrlg')

  if (state.succeeded) return (
    <section id="contact" className="section">
      <div className="container mx-auto max-w-2xl">
        <SuccessMessage />
      </div>
    </section>
  )

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — CTA copy */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="section-label mb-3">Contact</p>
            <h2 className="section-title mb-6">
              Looking for someone who can<br />
              <span className="text-accent">own it end to end?</span>
            </h2>
            <p className="text-secondary text-sm leading-relaxed mb-8 max-w-md">
              Whether you're building a new product, scaling an existing one, or need
              a senior engineer who can work independently — I'd love to hear about it.
              I'm currently open to full-time, contract, and remote opportunities.
            </p>

            {/* Direct links */}
            <div className="space-y-4">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card group hover-lift"
                >
                  <div className="w-9 h-9 rounded-lg bg-raised border border-stroke flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/30 transition-all flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-fg text-sm font-medium">{link.value}</p>
                    <p className="text-muted text-xs">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="card p-8">
              <h3 className="text-fg font-semibold text-base mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-muted font-medium mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-raised border border-stroke rounded-lg px-4 py-2.5 text-sm text-fg placeholder:text-muted/50 outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-muted font-medium mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-raised border border-stroke rounded-lg px-4 py-2.5 text-sm text-fg placeholder:text-muted/50 outline-none focus:border-accent/50 transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs text-muted font-medium mb-2">
                    What's this about?
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Job opportunity, project, collaboration..."
                    className="w-full bg-raised border border-stroke rounded-lg px-4 py-2.5 text-sm text-fg placeholder:text-muted/50 outline-none focus:border-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-muted font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about the role, your stack, the problem you're trying to solve..."
                    className="w-full bg-raised border border-stroke rounded-lg px-4 py-2.5 text-sm text-fg placeholder:text-muted/50 outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <>Sending…</>
                  ) : (
                    <><FiSend size={14} /> Send message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}