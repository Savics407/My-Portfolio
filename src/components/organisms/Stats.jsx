import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { YEARS_EXPERIENCE } from '../../data/narrative'

const STATS = [
  {
    value: YEARS_EXPERIENCE,
    suffix: '+',
    label: 'Years Building Products',
    description: 'Shipping scalable software from idea to production.',
  },
  {
    value: 7,
    suffix: '+',
    label: 'Production Systems Shipped',
    description: 'Across fintech, telecom, logistics & enterprise',
  },
  {
    value: null,
    display: 'Real-time',
    label: 'Platforms & SDKs',
    description: 'WebRTC, VoIP, offline-first & developer tooling',
  },
  {
    value: null,
    display: 'End-to-End',
    label: 'Product Ownership',
    description: 'From architecture and UX to deployment',
  },
]

function Counter({ value, suffix, display, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started || value === null) return
    const start = performance.now()
    const raf = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(raf)
      else setCount(value)
    }
    requestAnimationFrame(raf)
  }, [started, value, duration])

  return (
    <span ref={ref}>
      {display ?? `${count}${suffix ?? ''}`}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="px-5 md:px-10 pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-6 gradient-border group"
            >
              <div className="stat-number text-fg group-hover:text-accent transition-colors duration-300">
                <Counter {...stat} />
              </div>
              <div className="mt-2 font-semibold text-sm text-fg/90">{stat.label}</div>
              <div className="text-xs text-muted mt-0.5">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
