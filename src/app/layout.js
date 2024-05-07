import { Inter } from 'next/font/google'
import 'prismjs/themes/prism-okaidia.css'
import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { ogMeta, twitterMeta } from '@/data/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://hyperui-clone.dev'),
  title: 'A Tailwind CSS UI Kit | SuperUI',
  description: 'Collection of components and templates built with Tailwind CSS.',
  openGraph: {
    ...ogMeta,
    title: 'A Tailwind CSS UI Kit | SuperUI',
    description: 'Collection of components and templates built with Tailwind CSS.',
  },
  twitter: {
    ...twitterMeta,
    title: 'A Tailwind CSS UI Kit | SuperUI',
    description: 'Collection of components and templates built with Tailwind CSS.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-screen-xl px-4 py-6">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  )
}
