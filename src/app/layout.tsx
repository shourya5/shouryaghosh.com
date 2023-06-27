import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shourya Ghosh',
  description: 'Personal website and Portfolio of Shourya Ghosh',
}
let my_links : [string, string][] = [
  ["Home", "#home"],
  ["Experience", '#experience'],
  ["Portfolio", "#port"],
  ["About", "#about"],
  ["Contact", "#contact"],
];
export default function RootLayout({
 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar links={my_links} />

        {children}
        </body>
    </html>
  )
}
