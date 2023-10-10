'use client'

import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Contact from '@/components/Contact'
import ScorllToTop from '@/components/ScorllToTop'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Home({ }) {
  Aos.init();

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
