import React from 'react'
import Banner from '../../components/desktop/banner'

import banner3 from '../../assets/images/banner3.jpg'

const RSVP = () => {
  return (
    <section>
      <Banner imageFile={banner3}>
        <div className='relative top-10 w-full'>
          <div className='relative w-3/4 m-auto'>
            <h1 className='font-cormorantgaramond text-right tracking-widest text-7xl text-gray-600'>WEDDING</h1>
          </div>
          <div className='relative w-3/4 m-auto'>
            <h1 className='font-cormorantgaramond text-right mr-5 text-6xl text-gray-600'>RSVP</h1>
          </div>
          <div className='w-1/2 p-10 text-black font-quicksand text-center float-end text-2xl leading-10'>
            <p>Your presence and prayers on our big day are all we ask for!</p>
            <p>However, should you wish to help us celebrate with a gift, </p>
            <p>please find our RSVP information below.</p>
          </div>
        </div>
      </Banner>
    </section>
  )
}

export default RSVP