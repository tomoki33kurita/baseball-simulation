import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import "./globals.css"

// App Routerの場合、このファイルが必須
// Pages Routerにおける、_app.tsxと_document.tsxと同じ役割

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '小売店 - ログインページ'
  //   description: ''
}

export default function FivePitcherLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
