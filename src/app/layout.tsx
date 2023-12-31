import './globals.css'
import { Inter } from 'next/font/google'

// custom imports
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ weight: ["600", "400"] ,subsets: ['latin'] })

export const metadata = {
  title: 'Odotym',
  description: 'Task & Note manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
