import React from 'react'
import { motion, Variants } from "framer-motion"

import couples1 from '../../assets/images/couples1.jpg'
import couples2 from '../../assets/images/couples2.jpg'
import couples3 from '../../assets/images/couples3.jpg'
import couples4 from '../../assets/images/couples4.jpg'
import couples5 from '../../assets/images/couples5.jpg'

import Storyline from '../../components/mobile/storyline'

const OurStory = () => {
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
        {/* OUR STORY LINE */ }
        < section className = 'bg-dark-gray p-5' >
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
        </section >
        </>
  )
}

export default OurStory