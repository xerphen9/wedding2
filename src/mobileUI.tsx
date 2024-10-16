import React from 'react'

import Home from './pages/mobile/Home'
import OurStory from './pages/mobile/OurStory'
import Gallery from './pages/mobile/Gallery'
import RSVP from './pages/mobile/RSVP'

import Header from './components/mobile/header'
import Banner from './components/mobile/banner'
import Footer from './components/mobile/footer'

const MobileUI = () => {
    return (
    <> 
        <div className='container size-full block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
          <Header title='D&M' menuBar={true} />
          <Home />
          <OurStory />
          <Banner imageFile='/src/assets/images/banner2.jpg' fixed={false}>
            <div className='absolute inset-x-0 top-10 text-center tracking-widest font-cormorantgaramond'>
              <h1 className='text-4xl text-dark-brown'>THE</h1>
              <h1 className='text-5xl italic text-neutral-500'>Wedding</h1>
              <h1 className='text-4xl text-dark-brown'>DAY</h1>
            </div>
          </Banner>
          <Gallery />
          <RSVP />
          <Footer />
        </div>
    </>
  )
}

export default MobileUI