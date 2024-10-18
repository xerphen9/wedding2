import React from 'react'

const Footer = () => {
    const copyright = '\u00A9'

    return (
        <section>
            <div className='bg-dark-brown h-full w-full'>
                <div className='text-white text-center tracking-widest'>
                    <h1 className='font-cormorantgaramond pt-10 text-7xl text-broken-white text-center'>D & M</h1>
                    <p className='p-5 font-quicksand text-lg'>{copyright} 2024 By Joseph David</p>
                </div>
            </div>
        </section>
    )
}

export default Footer