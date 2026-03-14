import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HomeFit Ware — Premium Footwear',
  description: 'Shop premium shoes for every occasion. Running, Casual, Luxury & Sports.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
