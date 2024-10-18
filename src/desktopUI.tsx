import React from 'react'
import { motion, Variants } from "framer-motion"

import banner2 from './assets/images/banner2.jpg'

import Home from './pages/desktop/Home'
import OurStory from './pages/desktop/OurStory'
import Gallery from './pages/desktop/Gallery'
import RSVP from './pages/desktop/RSVP'
import Footer from './components/desktop/footer'

import Banner from './components/desktop/banner'
import Navigation from './components/desktop/navigation'

const DesktopUI = () => {
  const listNav = ['Home', 'Our Story', 'Gallery', 'RSVP']

  const motionVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "ease-out",
        duration: 1.5
      }
    }
  };

  return (
    <div className='hidden sm:hidden lg:block sm:size-full sm:overflow-x-hidden'>
      <Navigation list={listNav} />
      <Home />
      <OurStory />
      <section>
        <Banner imageFile={banner2} fixed={false}>
          <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: false, amount: 0.8 }}
            className='absolute w-1/4 m-auto inset-x-0 top-10 font-cormorantgaramond'>
            <h1 className='text-left text-5xl mb-5 tracking-widest let text-dark-brown'>THE</h1>
            <h1 className='text-center text-7xl mb-5 tracking-widest italic text-neutral-500'>Wedding</h1>
            <h1 className='text-right text-5xl mb-5 tracking-widest text-neutral-500'>DAY</h1>
          </motion.div>
        </Banner>
      </section>
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  )
}

export default DesktopUI