import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: "Para Suzana Celina Mawonso - Com Amor",
  description: "Uma página de amor dedicada à Suzana Celina Mawonso",
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
