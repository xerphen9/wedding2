import React from 'react'
import { motion, Variants } from "framer-motion"

import couples1 from '../../assets/images/couples1.jpg'
import couples2 from '../../assets/images/couples2.jpg'
import couples3 from '../../assets/images/couples3.jpg'
import couples4 from '../../assets/images/couples4.jpg'
import couples5 from '../../assets/images/couples5.jpg'

import Storyline from '../../components/desktop/storyline'

const OurStory = () => {
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
  )
}

export default OurStory