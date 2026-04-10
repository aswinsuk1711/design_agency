export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}
          >
            V
          </span>
          <span className="font-display text-lg" style={{ color: 'var(--text)' }}>
            Void Studio
          </span>
        </div>

        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          © {year} Void Studio. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {['Twitter', 'Dribbble', 'LinkedIn'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs transition-colors hover:opacity-100"
              style={{ color: 'var(--muted)' }}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
