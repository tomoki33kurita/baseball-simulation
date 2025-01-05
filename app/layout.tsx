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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
