import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextTopLoader color='purple' />
        <ul className='flex space-x-4 p-3'>
          <li>
            <Link href='/' className='hover:text-orange-200'>
              home
            </Link>
          </li>
          <li>
            <Link href='/shader-study' className='hover:text-orange-200'>
              shader
            </Link>
          </li>
          <li>
            <Link href='/login' className='hover:text-orange-200'>
              login
            </Link>
          </li>
          <li>
            <Link href='/doc' className='hover:text-orange-200'>
              doc
            </Link>
          </li>
          <li>
            <Link href='/mdx' className='hover:text-orange-200'>
              markdown
            </Link>
          </li>
        </ul>
        <div>{children}</div>
        <Toaster />
      </body>
    </html>
  )
}
