import React from 'react'
import { motion, Variants } from "framer-motion"

import couples1 from './assets/images/couples1.jpg'
import couples2 from './assets/images/couples2.jpg'
import couples3 from './assets/images/couples3.jpg'
import couples4 from './assets/images/couples4.jpg'
import couples5 from './assets/images/couples5.jpg'
import banner2 from './assets/images/banner2.jpg'
import banner3 from './assets/images/banner3.jpg'

import Banner from './components/desktop/banner'
import Navigation from './components/desktop/navigation'
import Storyline from './components/desktop/storyline'
import Gallery from './components/desktop/gallery'

// import gallery1 from './assets/images/gallery1.jpg'
// import gallery2 from './assets/images/gallery2.jpg'
// import gallery3 from './assets/images/gallery3.jpg'
// import gallery4 from './assets/images/gallery4.jpg'
// import gallery5 from './assets/images/gallery5.jpg'
// import gallery6 from './assets/images/gallery6.jpg'
// import gallery7 from './assets/images/gallery7.jpg'
// import gallery8 from './assets/images/gallery8.jpg'
// import gallery9 from './assets/images/gallery9.jpg'

const DesktopUI = () => {
  const copyright = '\u00A9'
  const listNav = ['Home', 'Our Story', 'Gallery', 'RSVP']
  // const imageGallery = [
  //   gallery1, gallery2, gallery3,
  //   gallery4, gallery5, gallery6,
  //   gallery7, gallery8, gallery9
  // ]

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
      <section>
        <Navigation list={listNav} />
      </section>
      <section>
        <div className='sm:size-full md:size-full lg:size-full xl:size-full 2xl:size-full'>
          <div className='flex size-full bg-fixed bg-cover min-h-[100vh] bg-center' style={{ backgroundImage: `url('/src/assets/images/banner_desktop.jpg')` }}>
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} variants={motionVariants}
              className='w-full py-10'>
              <h1 className='font-darleston tracking-widest text-center text-8xl text-gray-400'>David & Melia</h1>
              <p className='tracking-widest text-center text-md text-gray-400'>Please Join Us for Our Wedding Celebration</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className='sm:size-full sm:bg-dark-gray'>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} variants={motionVariants}
            className='flex justify-center items-center lg:h-60'>
            <h1 className='text-white text-center font-gustatory
              lg:text-extralarge lg:leading-4'>
              Our Story...
            </h1>
          </motion.div>

          <div className='static h-auto min-h-full w-full py-16 grid grid-rows-2 grid-cols-10'>
            <Storyline />

            {/* ROW 1*/}
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 0.5
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mt-11 row-start-2 col-start-1 row-end-3 col-end-5'>
              <div
                className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                <motion.img whileHover={{ scale: 1.1, cursor: 'pointer' }} src={couples1} alt="" className='lg:w-40 lg:h-full object-cover' loading='lazy' />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 0.5
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mt-16 row-start-1 col-start-1 row-end-2 col-end-5'>
              <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                <div className='w-3/4'>
                  <p className='text-center text-white'>We met & fell in love</p>
                  <p className='text-center text-white text-xl font-bold '>2021</p>
                </div>
              </div>
            </motion.div>

            {/* ROW 2 */}
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 1
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mb-16 row-start-1 col-start-3 row-end-2 col-end-6'>
              <div
                className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                <motion.img whileHover={{ scale: 1.1, cursor: 'pointer' }} src={couples2} alt="" className='md:w-40 md:h-full object-cover' loading='lazy' />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 1
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mb-16 row-start-2 col-start-3 row-end-3 col-end-6'>
              <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                <div className='m-auto w-3/4'>
                  <p className='text-center text-white'>We enjoyed football world cup.</p>
                  <p className='text-center text-white text-xl font-bold '>2022</p>
                </div>
              </div>
            </motion.div>

            {/* ROW 3 */}
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 1.5
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mt-11 row-start-2 col-start-5 row-end-3 col-end-7'>
              <div
                className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                <motion.img whileHover={{ scale: 1.1, cursor: 'pointer' }} src={couples3} alt="" className='md:w-40 md:h-full object-cover' loading='lazy' />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 1.5
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mt-16 row-start-1 col-start-5 row-end-2 col-end-7'>
              <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                <div className='m-auto'>
                  <p className='text-center text-white'>We tracked at the Fuji mountain.</p>
                  <p className='text-center text-white text-xl font-bold '>2023</p>
                </div>
              </div>
            </motion.div>

            {/* ROW 4 */}
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 2
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mb-16 row-start-1 col-start-7 row-end-2 col-end-8'>
              <div
                className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                <motion.img whileHover={{ scale: 1.1, cursor: 'pointer' }} src={couples4} alt="" className='md:w-40 md:h-full object-cover' loading='lazy' />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 2
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mb-16 row-start-2 col-start-7 row-end-3 col-end-8'>
              <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                <div className='m-auto'>
                  <p className='text-center text-white'>We adopted our Snoopy</p>
                  <p className='text-center text-white text-xl font-bold '>2024</p>
                </div>
              </div>
            </motion.div>

            {/* ROW 5 */}
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 2.5
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mt-11 row-start-2 col-start-9 row-end-3 col-end-9'>
              <div
                className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                <motion.img whileHover={{ scale: 1.1, cursor: 'pointer' }} src={couples5} alt="" className='md:w-40 md:h-full object-cover' loading='lazy' />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{
              opacity: 1,
              transition: {
                type: "ease-out",
                duration: 1.5,
                delay: 2.5
              }
            }} viewport={{ once: true, amount: 0.8 }}
              className='flex justify-center items-center mt-16 row-start-1 col-start-9 row-end-2 col-end-9'>
              <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                <div className='m-auto'>
                  <p className='text-center text-white'>WE'RE ENGAGED!</p>
                  <p className='text-center text-white text-xl font-bold '>2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
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
      <section>
        <div className='bg-dark-brown h-full w-full'>
          <footer className='text-white text-center tracking-widest'>
            <h1 className='font-cormorantgaramond pt-10 text-7xl text-broken-white text-center'>D & M</h1>
            <p className='p-5 font-quicksand text-lg'>{copyright} 2024 By Joseph David</p>
          </footer>
        </div>
      </section>
    </div>
  )
}

export default DesktopUI