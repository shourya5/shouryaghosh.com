import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })
import React, { useEffect } from 'react';
import Footer from './components/footer'

export default function Home() {
 
  return (
   <>
   <div>
      <Head>
        <title>Home | Shourya Ghosh</title>
      </Head>
     
    </div>
   <Navbar></Navbar>
   <Hero></Hero>
   <Footer></Footer>
   </>
)
}
