import React from 'react'

import Banner from '../../components/mobile/banner'

const Home = () => {
    return (
        <Banner imageFile='/src/assets/images/banner.jpg' fixed={true}>
            <div className='flex w-full bg-transparent h-24 justify-between'>
                <section className='text-center text-lg py-5 px-10'>
                    <h2>Dec 7th,</h2>
                    <h2>2024</h2>
                </section>
                <section className='text-center text-lg py-2 px-5'>
                    <h1 className="text-6xl font-thin">|</h1>
                </section>
                <section className='text-center text-lg py-5 px-10'>
                    <h2>Westin,</h2>
                    <h2>Jakarta</h2>
                </section>
            </div>
            <div className='absolute inset-x-0 bottom-20 text-center'>
                <h1 className='font-darleston text-6xl text-dark-brown'>We're getting</h1>
                <h1 className='font-darleston text-6xl text-dark-brown'>married!</h1>
            </div>
        </Banner>
    )
}

export default Home;