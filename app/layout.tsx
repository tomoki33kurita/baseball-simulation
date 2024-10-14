import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import "./globals.css"

// App Routerの場合、このファイルが必須
// Pages Routerにおける、_app.tsxと_document.tsxと同じ役割

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baseball Simulator',
  description: '野球用品のシミュレーションシステムサイト'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
