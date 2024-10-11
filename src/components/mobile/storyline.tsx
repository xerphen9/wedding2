import React from 'react'
import circle from '../../assets/images/circle.png'

const Storyline = () => {
    return (
        <>
            {/* LINE */}
            <div className='flex justify-center items-center h-full row-start-2 col-start-1 row-end-13 col-end-2'>
                <div className='relative w-1 h-full bg-[#dfdfdf] border-gray-[#dfdfdf] border-1 border-solid'></div>
            </div>

            {/* DOTS */}
            <div className={`flex justify-center items-center row-start-3 col-start-1 row-end-4 col-end-2`}>
                <img src={circle} alt="" width={120} />
            </div>
            <div className={`flex justify-center items-center mt-11 mb-7 row-start-6 col-start-1 row-end-7 col-end-2`}>
                <img src={circle} alt="" width={120} />
            </div>
            <div className={`flex justify-center items-center mt-11 mb-7 row-start-8 col-start-1 row-end-9 col-end-2`}>
                <img src={circle} alt="" width={120} />
            </div>
            <div className={`flex justify-center items-center mt-11 mb-7 row-start-10 col-start-1 row-end-11 col-end-2`}>
                <img src={circle} alt="" width={120} />
            </div>
            <div className={`flex justify-center items-center mt-11 mb-7 row-start-12 col-start-1 row-end-13 col-end-2`}>
                <img src={circle} alt="" width={120} />
            </div>
        </>
    )
}

export default Storyline