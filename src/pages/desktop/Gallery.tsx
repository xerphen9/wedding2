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

const Gallery = ({ cols, imageData }: GalleryProps) => {
    const columns = []
    const gridTotalColumns = `py-5 w-4/6 m-auto grid gap-2 grid-cols-${cols} items-start`

    for (let i = 0; i < cols!; i++) {
        columns.push(
            <div className='relative grid grid-cols-norepeat gap-y-2'>
            </div>
        )
    }

    return (
        <section>
            <div className='bg-dark-gray p-3'>
                <div className='py-10'>
                    <h1 className='font-dancing text-6xl text-center text-broken-white'>Our Gallery...</h1>
                </div>
                <div className='w-5/6 m-auto'>
                    <div className='flex flex-wrap'>
                        <div className='basis-1/3 max-w-[33%]'>
                            <img src={gallery1} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                            <img src={gallery2} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                            <img src={gallery8} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                        </div>
                        <div className='basis-1/3 max-w-[33%]'>
                            <img src={gallery7} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                            <img src={gallery4} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                            <img src={gallery6} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                        </div>
                        <div className='basis-1/3 max-w-[33%]'>
                            <img src={gallery3} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                            <img src={gallery5} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                            <img src={gallery9} alt="" loading='lazy' className='w-full min-h-0 object-cover align-middle p-1' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Gallery