import React from 'react'
import circle from '../../assets/images/circle.png'

const Storyline = () => {
    return (
        <>
            {/* LINE */}
            <div className='flex justify-center items-center h-full row-start-1 col-start-1 row-end-3 col-end-13'>
                <div className='relative w-[80%] h-[0.15rem] bg-[#dfdfdf] border-gray-[#dfdfdf] border-1 border-solid'></div>
            </div>

            {/* DOTS */}
            <div className={`flex justify-center items-center mt-3 row-start-1 col-start-2 row-end-3 col-end-4`}>
                <img src={circle} alt="" width={120} className='m-auto'/>
            </div>
            <div className={`flex justify-center items-center mt-3 row-start-1 col-start-3 row-end-3 col-end-6`}>
                <img src={circle} alt="" width={120} className='m-auto'/>
            </div>
            <div className={`flex justify-center items-center mt-4 row-start-1 col-start-5 row-end-3 col-end-7`}>
                <img src={circle} alt="" width={120} className='m-auto'/>
            </div>
            <div className={`flex justify-center items-center mt-4 row-start-1 col-start-7 row-end-3 col-end-8`}>
                <img src={circle} alt="" width={120} className='m-auto'/>
            </div>
            <div className={`flex justify-center items-center mt-4 row-start-1 col-start-9 row-end-3 col-end-9`}>
                <img src={circle} alt="" width={120} className='m-auto'/>
            </div>
        </>
    )
}

export default Storyline