'use client'

import { useState, useRef, useEffect } from 'react'

export default function ContactSection() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message too short'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }, 1400)
  }

  const inputBase = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--card-bg)',
    color: 'var(--text)',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  }

  return (
    <section id="contact" className="py-28 px-6" style={{ backgroundColor: 'var(--bg)' }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4 animate-on-scroll" style={{ color: 'var(--accent)' }}>
              Contact
            </p>
            <h2
              className="font-display leading-tight mb-6 animate-on-scroll delay-100"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text)' }}
            >
              Let's Build
              <br />
              Something
              <br />
              <span style={{ color: 'var(--muted)' }}>Together.</span>
            </h2>
            <p className="text-base leading-relaxed mb-10 animate-on-scroll delay-200" style={{ color: 'var(--muted)', maxWidth: '380px' }}>
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            {/* Contact links */}
            <div className="space-y-4 animate-on-scroll delay-300">
              {[
                { label: 'Email', value: 'hello@voidstudio.co' },
                { label: 'Location', value: 'Mumbai, India' },
                { label: 'Availability', value: 'Open for projects' },
              ].map((item) => (
                <div key={item.label} className="flex gap-6">
                  <span className="text-sm w-24 shrink-0" style={{ color: 'var(--muted)' }}>{item.label}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-on-scroll delay-200">
            {submitted ? (
              <div
                className="rounded-2xl p-10 flex flex-col items-center text-center gap-5"
                style={{ border: '1px solid var(--accent)', backgroundColor: 'var(--card-bg)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl" style={{ color: 'var(--text)' }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Thanks for reaching out. We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm underline"
                  style={{ color: 'var(--muted)' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    style={{
                      ...inputBase,
                      borderColor: errors.name ? '#ef4444' : 'var(--border)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border)')}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    style={{
                      ...inputBase,
                      borderColor: errors.email ? '#ef4444' : 'var(--border)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border)')}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    style={{
                      ...inputBase,
                      resize: 'vertical',
                      borderColor: errors.message ? '#ef4444' : 'var(--border)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)')}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
