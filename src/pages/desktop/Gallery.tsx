import gallery1 from '../../assets/images/gallery1.webp'
import gallery2 from '../../assets/images/gallery2.webp'
import gallery3 from '../../assets/images/gallery3.webp'
import gallery4 from '../../assets/images/gallery4.webp'
import gallery5 from '../../assets/images/gallery5.webp'
import gallery6 from '../../assets/images/gallery6.webp'
import gallery7 from '../../assets/images/gallery7.jpg'
import gallery8 from '../../assets/images/gallery8.jpg'
import gallery9 from '../../assets/images/gallery9.jpg'

const Gallery = () => {
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