import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Void Studio — Design Agency',
  description: 'We craft bold digital experiences that make brands unforgettable. UI/UX, Web Development, Branding & Digital Strategy.',
  keywords: ['design agency', 'UI/UX design', 'web development', 'branding', 'digital marketing'],
  openGraph: {
    title: 'Void Studio — Design Agency',
    description: 'We craft bold digital experiences that make brands unforgettable.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSerif.variable} ${dmSans.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
