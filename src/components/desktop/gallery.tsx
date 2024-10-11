import React from 'react'
import { motion, Variants } from "framer-motion"
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import gallery3 from '../../assets/images/gallery3.jpg'
import gallery4 from '../../assets/images/gallery4.jpg'
import gallery5 from '../../assets/images/gallery5.jpg'
import gallery6 from '../../assets/images/gallery6.jpg'
import gallery7 from '../../assets/images/gallery7.jpg'
import gallery8 from '../../assets/images/gallery8.jpg'
import gallery9 from '../../assets/images/gallery9.jpg'

export type GalleryProps = {
    cols?: number
    imageData?: string[]
}

const Gallery = ({cols, imageData}: GalleryProps) => {
    const imageGallery = [
        gallery1, gallery2, gallery3, 
        gallery4, gallery5, gallery6, 
        gallery7, gallery8, gallery9
    ]

    return (
        <section>
            <div className='bg-dark-gray p-3'>
                <div className='py-10'>
                    <h1 className='font-dancing text-6xl text-center text-broken-white'>Our Gallery...</h1>
                </div>
                <div className={`static py-5 w-5/6 m-auto grid gap-2 grid-cols-${cols} items-start`}>
                    <div className='relative grid grid-cols-norepeat gap-y-2'>
                        {
                            imageGallery.map((v, i) => {
                                if (i % 2 === 0) {
                                    return (
                                        <figure className='m-0'>
                                            <div className='flex flex-col gap-y-3'>
                                                <img src={v} alt="" loading='lazy' className='w-full min-h-0 object-cover' key={i} />
                                            </div>
                                        </figure>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className='relative grid grid-cols-norepeat gap-y-2'>
                        {
                            imageGallery.map((v, i) => {
                                if (i % 2 !== 0) {
                                    return (
                                        <figure className='m-0'>
                                            <div className='flex flex-col gap-y-3'>
                                                <img src={v} alt="" loading='lazy' className='w-full min-h-0 object-cover' key={i} />
                                            </div>
                                        </figure>
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