'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Bloom Finance App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    span: 'lg:col-span-2',
  },
  {
    title: 'Nomad Travel Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    span: '',
  },
  {
    title: 'Arca Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80',
    span: '',
  },
  {
    title: 'Pulse Health Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    span: '',
  },
  {
    title: 'Solaris E-Commerce',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    span: 'lg:col-span-2',
  },
]

export default function PortfolioSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="portfolio"
      className="py-28 px-6"
      style={{ backgroundColor: 'var(--bg-soft)' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4 animate-on-scroll" style={{ color: 'var(--accent)' }}>
              Our Work
            </p>
            <h2 className="font-display leading-tight animate-on-scroll delay-100" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text)' }}>
              Selected
              <br />
              Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium pb-0.5 animate-on-scroll delay-200 hover:gap-4 transition-all"
            style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}
          >
            Start a project with us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`portfolio-card animate-on-scroll relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer ${project.span}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={i < 2}
              />

              {/* Overlay */}
              <div
                className="overlay absolute inset-0 flex flex-col justify-end p-6"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
              >
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full mb-2 w-fit"
                  style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}
                >
                  {project.category}
                </span>
                <h3 className="font-display text-xl text-white">{project.title}</h3>
              </div>

              {/* Always visible category label */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)' }}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
