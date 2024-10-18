import React from 'react'
import { motion, Variants } from "framer-motion"

const Home = () => {
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
    )
}

export default Home