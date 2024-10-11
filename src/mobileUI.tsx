import React, {useState, FormEvent} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { motion, Variants } from "framer-motion"
import { FaHeart, FaHeartBroken, FaCopy } from 'react-icons/fa'

import couples1 from './assets/images/couples1.jpg'
import couples2 from './assets/images/couples2.jpg'
import couples3 from './assets/images/couples3.jpg'
import couples4 from './assets/images/couples4.jpg'
import couples5 from './assets/images/couples5.jpg'
import BCA from './assets/images/bca.png'

import Storyline from './components/mobile/storyline'
import Header from './components/mobile/header'
import Banner from './components/mobile/banner'
import Gallery from './components/mobile/gallery'
import Modal from './components/mobile/modal'
import Button from './components/mobile/button'

const MobileUI = () => {
    const copyright = '\u00A9'

    const [rsvp, setRSVP] = useState<boolean>(false)
    const [attend, setAttend] = useState<number>(0)
    const [transfer, setTransfer] = useState<boolean>(false)
    const [copy, setCopy] = useState<boolean>(false)
  
    const handleRSVP = () => {
      console.log('registry')
      setRSVP(true)
    }
  
    const handleClipboard = () => {
      setCopy(true)
    }
  
    const handleAttendance = (val: number) => {
      if (attend === val) {
        setAttend(0)
      } else {
        setAttend(val)
      }
    }
  
    const handleConfirmRSVP = (e: FormEvent<EventTarget>): void => {
      e.preventDefault()
      if (attend === 2) {
        setTransfer(true)
      } else {
        setTransfer(false)
      }
    }
  
    const imgVariants: Variants = {
      offscreen: {
        y: 300
      },
      onscreen: {
        y: 5,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1.5
        }
      }
    };  
    
    return (
    <> 
        <div className='container size-full block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
          <Header title='D&M' menuBar={true} />
          <Banner imageFile='/src/assets/images/banner.jpg' fixed={true}>
            <div className='flex w-full bg-transparent h-24 justify-between'>
              <section className='text-center text-lg py-5 px-10'>
                <h2>Dec 7th,</h2>
                <h2>2024</h2>
              </section>
              <section className='text-center text-lg py-2 px-5'>
                <h1 className="text-6xl font-thin">|</h1>
              </section>
              <section className='text-center text-lg py-5 px-10'>
                <h2>Westin,</h2>
                <h2>Jakarta</h2>
              </section>
            </div>
            <div className='absolute inset-x-0 bottom-20 text-center'>
              <h1 className='font-darleston text-6xl text-dark-brown'>We're getting</h1>
              <h1 className='font-darleston text-6xl text-dark-brown'>married!</h1>
            </div>
          </Banner>
          {/* OUR STORY LINE */ }
          <section className='bg-dark-gray p-5'>
            <div className='static h-auto min-h-full w-full grid grid-rows-19 grid-cols-full'>
              <div className='relative mx-0 my-16 row-start-1 col-start-1 row-end-2 col-end-2'>
                <h1 className='text-white text-center font-gustatory text-[5rem] leading-4 row-start-1 row-end-1 col-start-1 col-end-1'>
                  Our Story...
                </h1>
              </div>

              <Storyline />

              {/* ROW 1*/}
              <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}
                className='relative left-6 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-2 col-start-1 row-end-6 col-end-2'>
                <motion.div variants={imgVariants}
                  className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                  <img src={couples1} alt="" className='size-40 object-cover' loading='lazy' />
                </motion.div>
              </motion.div>
              <div className='relative left-60 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-2 col-start-1 row-end-6 col-end-2'>
                <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                  <div className='m-auto'>
                    <p className='text-center text-white'>We met & fell in love</p>
                    <p className='text-center text-white text-xl font-bold '>2021</p>
                  </div>
                </div>
              </div>

              {/* ROW 2 */}
              <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}
                className='relative left-60 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-6 col-start-1 row-end-8 col-end-2'>
                <motion.div variants={imgVariants}
                  className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                  <img src={couples2} alt="" className='size-40 object-cover' loading='lazy' />
                </motion.div>
              </motion.div>
              <div className='relative left-6 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-6 col-start-1 row-end-8 col-end-2'>
                <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                  <div className='m-auto'>
                    <p className='text-center text-white'>We enjoyed football world cup.</p>
                    <p className='text-center text-white text-xl font-bold '>2022</p>
                  </div>
                </div>
              </div>

              {/* ROW 3 */}
              <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}
                className='relative left-6 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-8 col-start-1 row-end-10 col-end-2'>
                <motion.div variants={imgVariants}
                  className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                  <img src={couples3} alt="" className='size-40 object-cover' loading='lazy' />
                </motion.div>
              </motion.div>
              <div className='relative left-60 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-8 col-start-1 row-end-10 col-end-2'>
                <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                  <div className='m-auto'>
                    <p className='text-center text-white'>We tracked at the Fuji mountain.</p>
                    <p className='text-center text-white text-xl font-bold '>2023</p>
                  </div>
                </div>
              </div>

              {/* ROW 4 */}
              <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}
                className='relative left-60 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-10 col-start-1 row-end-12 col-end-2'>
                <motion.div variants={imgVariants}
                  className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                  <img src={couples4} alt="" className='size-40 object-cover' loading='lazy' />
                </motion.div>
              </motion.div>
              <div className='relative left-6 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-10 col-start-1 row-end-12 col-end-2'>
                <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                  <div className='m-auto'>
                    <p className='text-center text-white'>We adopted our Snoopy</p>
                    <p className='text-center text-white text-xl font-bold '>2024</p>
                  </div>
                </div>
              </div>

              {/* ROW 5 */}
              <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}
                className='relative left-6 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-12 col-start-1 row-end-14 col-end-2'>
                <motion.div variants={imgVariants}
                  className='bg-white border-white max-w-fit rounded-md border-2 block h-full overflow-hidden box-border'>
                  <img src={couples5} alt="" className='size-40 object-cover' loading='lazy' />
                </motion.div>
              </motion.div>
              <div className='relative left-60 mt-0 mb-7 ml-0 mr-[15.5rem] row-start-12 col-start-1 row-end-14 col-end-2'>
                <div className='flex overflow-hidden h-full box-border justify-center items-center'>
                  <div className='m-auto'>
                    <p className='text-center text-white'>WE'RE ENGAGED!</p>
                    <p className='text-center text-white text-xl font-bold '>2025</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Banner imageFile='/src/assets/images/banner2.jpg' fixed={false}>
            <div className='absolute inset-x-0 top-10 text-center tracking-widest font-cormorantgaramond'>
              <h1 className='text-4xl text-dark-brown'>THE</h1>
              <h1 className='text-5xl italic text-neutral-500'>Wedding</h1>
              <h1 className='text-4xl text-dark-brown'>DAY</h1>
            </div>
          </Banner>
          <Gallery />
          <section>
            <Banner imageFile='/src/assets/images/banner3.jpg'>
              <div className='absolute top-10 w-full'>
                <div className='relative'>
                  <h1 className='font-cormorantgaramond mx-5 tracking-widest text-4xl text-black'>WEDDING</h1>
                </div>
                <div>
                  <h1 className='font-quicksand text-center mr-5 text-4xl text-slate-500'>RSVP</h1>
                </div>
                <div className='px-7 py-5 font-cormorantgaramond text-center w-full m-auto text-2xl leading-10'>
                  <p>Your presence and prayers on our big day are all we ask for!</p>
                  <p>However, should you wish to help us celebrate with a gift, please find our RSVP information below.</p>
                </div>
              </div>
              {
                rsvp ?
                  <Modal>
                    {
                      transfer ?
                        <div className='text-center pb-5'>
                          <p></p>
                          <img src={BCA} alt="" width={120} className='m-auto'/>
                          <div className='flex gap-3'>
                            <div className='w-[70%] flex justify-end items-center gap-3'>
                              <p className='font-bold text-lg'>6320435097</p>
                              <CopyToClipboard text='6320435097' onCopy={handleClipboard}>
                                <FaCopy className='text-2xl' />
                              </CopyToClipboard>
                            </div>
                            <p className={`text-red-500 text-lg relative ${copy ? 'block' : 'hidden'}`}>Copied!</p>
                          </div>
                          <p className='font-bold text-2xl'>David Kristiawan</p>
                        </div>
                      : 
                      <>
                        <h1 className='text-center font-cormorantgaramond text-3xl mt-5'>RSVP Form</h1>
                        <form className='p-5 font-quicksand'>
                          <div className='w-full py-3'>
                            <input type="text" placeholder='Name' name='name' className='w-full rounded-full px-3 py-1' />
                          </div>
                          <div className='w-full py-3'>
                            <input type="text" placeholder='Email address' name='email' className='w-full rounded-full px-3 py-1' />
                          </div>
                          <div className='w-full py-3'>
                            <input type="text" placeholder='Message' name='message' className='w-full justify-start rounded-xl px-3 pb-10' />
                          </div>
                          <div className='w-full text-center p-1'>
                            <p>Will you attend ?</p>
                          </div>
                          <div className='grid grid-cols-2 py-3'>
                            <div className='flex items-center justify-center w-full'>
                              <div className='flex gap-3' onClick={() => handleAttendance(1)}>
                                <FaHeart className={`text-center text-2xl ${attend === 1 ? 'text-red-600' : 'text-black'}`}/>
                                <p className={`${attend === 1 ? 'text-red-600 font-bold' : 'text-black'}`}>YES, of course</p>
                              </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                              <div className='flex gap-3' onClick={() => handleAttendance(2)}>
                                <FaHeartBroken className={`text-center text-2xl ${attend === 2 ? 'text-red-600' : 'text-black'}`}/>
                                <p className={`${attend === 2 ? 'text-red-600 font-bold' : 'text-black'}`}>I'm sorry, No</p>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center justify-center mt-3'>
                            <Button label='Confirm' onClick={(e) => handleConfirmRSVP(e)}/>
                          </div>
                        </form>
                      </>
                    }
                  </Modal>
                  :
                  <div className='absolute bottom-0 mb-5 w-full text-center'>
                    <Button label='RSVP' onClick={handleRSVP} />
                  </div>
              }
            </Banner>
          </section>
          <section className='bg-dark-brown h-full w-full'>
            <footer className='text-white text-center tracking-widest'>
              <h1 className='font-cormorantgaramond pt-10 text-5xl text-broken-white text-center'>D & M</h1>
              <p className='p-5 font-quicksand text-sm'>{copyright} 2024 By Joseph David</p>
            </footer>
          </section>
        </div>
    </>
  )
}

export default MobileUI