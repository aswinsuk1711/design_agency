# Void Studio — Design Agency Homepage

A modern, responsive design agency homepage built with **Next.js 14** (App Router), **Tailwind CSS**, and **Next/Image** optimization.

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.0 | React framework (App Router) |
| React | 18 | UI library |
| Tailwind CSS | 3.3 | Utility-first styling |
| Next/Font | built-in | Google Fonts optimization |
| Next/Image | built-in | Image optimization |

---

## 📁 Folder Structure

```
design-agency/
├── app/
│   ├── layout.js        # Root layout, metadata, fonts
│   ├── page.js          # Home page assembling all sections
│   └── globals.css      # CSS variables, animations, dark mode
├── components/
│   ├── Navbar.js        # Sticky nav with dark mode toggle + mobile menu
│   ├── HeroSection.js   # Full-screen hero with marquee
│   ├── ServicesSection.js  # 4 animated service cards
│   ├── PortfolioSection.js # Image grid with hover overlays
│   ├── ContactSection.js   # Form with validation + success state
│   └── Footer.js        # Simple footer
├── public/              # Static assets
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ⚙️ Setup Instructions

```bash
# 1. Clone or download the project
cd design-agency

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Open http://localhost:3000

# 4. Build for production
npm run build
npm start
```

---

## ✅ Features Implemented

### Sections
- **Hero** — Agency name, tagline, dual CTAs, stats strip, animated marquee ticker
- **Services** — 4 cards (UI/UX, Web Dev, Branding, Digital Marketing) with icons and descriptions
- **Portfolio** — 5-project masonry-style grid using Next/Image, with hover overlay animations
- **Contact** — Controlled form with client-side validation, loading state, and success confirmation

### Bonus Features
- ✅ **Tailwind CSS** — utility classes throughout
- ✅ **Dark Mode Toggle** — persistent via `localStorage`, toggled in Navbar
- ✅ **SEO Metadata** — `title`, `description`, `keywords`, and `openGraph` in `layout.js`
- ✅ **Next/Image** — optimized images with `fill`, `sizes`, and `priority` attributes
- ✅ **Animations** — scroll-triggered fade-up on all sections, hover effects on cards, marquee ticker, page load stagger
- ✅ **Responsive** — fully mobile-first with hamburger menu

### Design Decisions
- **Aesthetic**: Editorial / refined brutalist — warm off-white (`#f5f0e8`) + electric yellow-green (`#c8ff00`) accent
- **Typography**: `DM Serif Display` (display) + `DM Sans` (body) — loaded via `next/font/google` for zero layout shift
- **CSS Variables** — all colors defined as CSS vars that swap between light/dark; no duplicated Tailwind overrides
- **Grain overlay** — subtle SVG noise texture via `body::before` for tactile depth
- **IntersectionObserver** — used in every section for performant scroll-based reveal animations (no library dependency)

---

## 🌐 Deployment

Deploy instantly to Vercel:

```bash
npx vercel
```

Or connect the GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on push.

---

## 📬 Notes

- The contact form is front-end only (no backend). It simulates a submission with a 1.4s delay.
- Portfolio images are pulled from Unsplash via `next.config.js` remote pattern allowlist.
- All components are functional (no class components).
