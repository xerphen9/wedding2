import React from 'react'

const Footer = () => {
    const copyright = '\u00A9'

    return (
        <section className='bg-dark-brown h-full w-full'>
            <footer className='text-white text-center tracking-widest'>
                <h1 className='font-cormorantgaramond pt-10 text-5xl text-broken-white text-center'>D & M</h1>
                <p className='p-5 font-quicksand text-sm'>{copyright} 2024 By Joseph David</p>
            </footer>
        </section>
    )
}

export default Footer