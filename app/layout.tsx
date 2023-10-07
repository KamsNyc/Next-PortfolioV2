import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const FC = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${FC.className} bg-[#011627] w-full h-screen rounded-lg border border-color flex flex-col p-10`}>
        <header className='' >
          <Navbar />
        </header>
        <div className="w-full h-full">
        {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
