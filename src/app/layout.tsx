import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import '@fontsource/ysabeau';
import AOScall from '@/layout/components/Aos';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cryptech Services',
  description: 'We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency, blockchain technology and cyber security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
        <body className={inter.className}>{children}</body>
      <AOScall />
    </html>
  )
}
