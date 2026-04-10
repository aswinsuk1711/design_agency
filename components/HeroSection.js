'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const marqueeItems = [
  'UI/UX Design', '✦', 'Web Development', '✦', 'Branding', '✦',
  'Digital Marketing', '✦', 'Motion Design', '✦', 'Strategy', '✦',
  'UI/UX Design', '✦', 'Web Development', '✦', 'Branding', '✦',
  'Digital Marketing', '✦', 'Motion Design', '✦', 'Strategy', '✦',
]

export default function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    setTimeout(() => el.classList.add('hero-loaded'), 100)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Background decorative blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      {/* Grid lines background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--text) 1px, transparent 1px),
            linear-gradient(90deg, var(--text) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center py-20">
        {/* Small badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8 w-fit animate-fade-up"
          style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
          Available for new projects
        </div>

        {/* Headline */}
        <h1
          className="font-display leading-[0.95] tracking-tight mb-8 animate-fade-up"
          style={{
            fontSize: 'clamp(3rem, 9vw, 9rem)',
            color: 'var(--text)',
            animationDelay: '0.1s',
            animationFillMode: 'both',
            opacity: 0,
          }}
        >
          We Make
          <br />
          <span className="relative inline-block">
            Brands
            <span
              className="absolute -bottom-2 left-0 w-full h-3 rounded-sm -z-10"
              style={{ backgroundColor: 'var(--accent)', opacity: 0.5 }}
            />
          </span>
          <br />
          <span style={{ color: 'var(--muted)' }}>Unforgettable.</span>
        </h1>

        {/* Subtext + CTA row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-end gap-8 animate-fade-up"
          style={{ animationDelay: '0.25s', animationFillMode: 'both', opacity: 0 }}
        >
          <p
            className="text-lg leading-relaxed max-w-md"
            style={{ color: 'var(--muted)' }}
          >
            A design studio obsessed with craft. We build digital experiences that convert, captivate, and endure.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#portfolio"
              className="group flex items-center gap-3 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--text)', color: 'var(--bg)' }}
            >
              View Work
              <svg
                className="group-hover:translate-x-1 transition-transform"
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex gap-10 mt-16 pt-8 animate-fade-up"
          style={{
            borderTop: '1px solid var(--border)',
            animationDelay: '0.4s',
            animationFillMode: 'both',
            opacity: 0,
          }}
        >
          {[
            { value: '80+', label: 'Projects Delivered' },
            { value: '5★', label: 'Average Rating' },
            { value: '3yr', label: 'In Business' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl mb-1" style={{ color: 'var(--text)' }}>
                {stat.value}
              </div>
              <div className="text-xs tracking-wider uppercase" style={{ color: 'var(--muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee band */}
      <div
        className="relative z-10 py-4 overflow-hidden"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="text-sm font-medium px-6 whitespace-nowrap"
              style={{
                color: item === '✦' ? 'var(--accent)' : 'var(--muted)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
