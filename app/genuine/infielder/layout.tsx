import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import "./globals.css"

// App Routerの場合、このファイルが必須
// Pages Routerにおける、_app.tsxと_document.tsxと同じ役割

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genuine - 内野手用'
  //   description: ''
}

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main style={{ background: '#282828', height: '100vh' }}>{children}</main>
}
