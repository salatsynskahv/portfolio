import './styles/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ganna Salatsynska'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
