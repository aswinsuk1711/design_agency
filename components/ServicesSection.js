'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'UI/UX Design',
    description:
      'Interfaces that feel inevitable. We design with precision — wireframes, prototypes, and pixel-perfect handoffs that elevate user experience.',
    tag: '01',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web Development',
    description:
      'Fast, scalable, and accessible. We build with Next.js and modern tooling to create sites that perform as beautifully as they look.',
    tag: '02',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Branding',
    description:
      'Identity systems that own their space. From logomarks to brand books, we build the visual language your business lives and breathes.',
    tag: '03',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Digital Marketing',
    description:
      'Growth that compounds. SEO, content strategy, and performance campaigns — engineered for brands that want long-term momentum.',
    tag: '04',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-28 px-6" style={{ backgroundColor: 'var(--bg)' }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4 animate-on-scroll" style={{ color: 'var(--accent)' }}>
              What We Do
            </p>
            <h2 className="font-display leading-tight animate-on-scroll" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text)' }}>
              Services Built
              <br />
              for Impact
            </h2>
          </div>
          <p className="max-w-xs text-base leading-relaxed animate-on-scroll delay-200" style={{ color: 'var(--muted)' }}>
            End-to-end digital solutions for startups, scale-ups, and established brands.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card animate-on-scroll p-7 rounded-2xl flex flex-col gap-5 cursor-default"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Tag + Icon row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--bg-soft)', color: 'var(--accent)' }}
                >
                  {service.icon}
                </div>
                <span
                  className="font-display text-4xl"
                  style={{ color: 'var(--border)', lineHeight: 1 }}
                >
                  {service.tag}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl mb-2" style={{ color: 'var(--text)' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {service.description}
                </p>
              </div>

              {/* Arrow link */}
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium hover:gap-3 transition-all"
                  style={{ color: 'var(--accent)' }}
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
