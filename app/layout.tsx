import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Technologistics - Vision to code',
  description: 'Professional technology services and solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
