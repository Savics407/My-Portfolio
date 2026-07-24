import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin } from 'react-icons/fi'
import { ImQuotesRight, ImStarFull } from 'react-icons/im'
import tayo from './assets/Temitayo Gbadebo..png'
import victor from './assets/Victor Ojochuma.jpg'
import josh from './assets/Uzo.jpeg'

const TESTIMONIALS = [
  {
    quote:
      "It's a pleasure working with Savics. He's a talented frontend developer. I was surprised he pulled off the project frontend single-handedly in React. Highly recommend working with him.",
    name: 'Temitayo S. Gbadebo',
    role: 'CTO',
    company: 'HxAfrica',
    avatar: tayo,
    linkedin: null,
  },
  {
    quote:
      "I worked with Victor as a frontend engineer and was impressed with his skills and dedication. He has a strong grasp of frontend technologies and a talent for creating user-friendly, visually appealing web interfaces. Victor is a great team player — excellent communication skills, a positive attitude, and a creative approach to problem-solving.",
    name: 'Akoh Ojochuma Victor',
    role: 'CEO',
    company: 'Chukolo Core',
    avatar: victor,
    linkedin: null,
  },
  {
    quote:
      "It was tough getting a good programmer to design my company's website. I had to scrap my first site — it wasn't up to standard. When I contracted Victor, I was so pleased with the result that I made him our official CTO. If you're looking for quality, Victor is one of the best out there.",
    name: 'Hon. Joshua Uzoigwe',
    role: 'CEO',
    company: 'Fabulous Edutainment',
    avatar: josh,
    linkedin: null,
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent text-xs">
      {[...Array(5)].map((_, i) => <ImStarFull key={i} />)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Social proof</p>
          <h2 className="section-title mb-4">What colleagues say</h2>
          <p className="section-subtitle text-secondary">
            From the people who've worked alongside me and trusted me to deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-6 flex flex-col justify-between hover-lift"
            >
              {/* Top — stars + quote mark */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <Stars />
                  <ImQuotesRight className="text-accent/20 text-2xl flex-shrink-0 ml-2" />
                </div>

                {/* Quote */}
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom — person */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #27272a' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  style={{ border: '2px solid #27272a' }}
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-fg text-sm font-medium truncate">{t.name}</p>
                    {t.linkedin && (
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors flex-shrink-0"
                        aria-label={`${t.name} on LinkedIn`}
                      >
                        <FiLinkedin size={13} />
                      </a>
                    )}
                  </div>
                  <p className="text-muted text-xs">
                    {t.role} · <span className="text-accent">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
