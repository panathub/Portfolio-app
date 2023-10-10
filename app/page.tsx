'use client'

import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Contact from '@/components/Contact'
import ScorllToTop from '@/components/ScorllToTop'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Home({ }) {

  useEffect(() => {
    AOS.init({
      once: false
    })
  }, [])
  
  return (
    <>
      <ScorllToTop />
      <Navbar />
      <Main />
      <About />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}
