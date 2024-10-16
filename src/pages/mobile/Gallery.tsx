import React from 'react'
import { motion, Variants } from "framer-motion"
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import gallery3 from '../../assets/images/gallery3.jpg'
import gallery4 from '../../assets/images/gallery4.jpg'
import gallery5 from '../../assets/images/gallery5.jpg'
import gallery6 from '../../assets/images/gallery6.jpg'

const Gallery = () => {
    const imageGallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

    const imgVariants: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "ease-out",
                duration: 1.5,
            }
        }
    };

    return (
        <section>
            <div className='bg-dark-gray p-3'>
                <div className='py-5'>
                    <h1 className='font-dancing text-4xl text-center text-broken-white'>Our Gallery...</h1>
                </div>
                <div className='static py-5 grid gap-2 grid-cols-2 items-start'>
                    <div className='relative grid grid-cols-norepeat gap-2'>
                        {
                            imageGallery.map((v, i) => {
                                if (i % 2 === 0) {
                                    return (
                                        <motion.img initial="offscreen" whileInView="onscreen" variants={imgVariants}
                                            viewport={{ once: true, amount: 0.8 }}
                                            src={v} alt="" loading='lazy' className='w-full min-h-0 object-cover' key={i} />
                                    )
                                }
                            })
                        }
                    </div>
                    <div className='relative grid grid-cols-norepeat gap-2'>
                        {
                            imageGallery.map((v, i) => {
                                if (i % 2 !== 0) {
                                    return (
                                        <motion.img initial="offscreen" whileInView="onscreen" variants={imgVariants}
                                            viewport={{ once: true, amount: 0.8 }}
                                            src={v} alt="" loading='lazy' className='w-full min-h-0 object-cover' key={i} />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery