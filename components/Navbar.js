'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const navLinks = ['Services', 'Portfolio', 'Contact']

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-md'
          : 'py-5'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}
          >
            V
          </span>
          <span className="font-display text-xl tracking-tight" style={{ color: 'var(--text)' }}>
            Void Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-60"
              style={{ color: 'var(--text)' }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}
          >
            Let's Talk
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text)' }} />
            <span className={`block w-5 h-0.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--text)' }} />
            <span className={`block w-5 h-0.5 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium border-b"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}
