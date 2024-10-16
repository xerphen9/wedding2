import React, {useState, FormEvent} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { FaHeart, FaHeartBroken, FaCopy } from 'react-icons/fa'

import BCA from '../../assets/images/bca.png'
import banner3 from '../../assets/images/banner3.jpg'

import Modal from '../../components/mobile/modal'
import Button from '../../components/mobile/button'
import Banner from '../../components/mobile/banner'

const RSVP = () => {
    const [rsvp, setRSVP] = useState<boolean>(false)
    const [attend, setAttend] = useState<number>(0)
    const [transfer, setTransfer] = useState<boolean>(false)
    const [copy, setCopy] = useState<boolean>(false) 

    const handleRSVP = () => {
        console.log('registry')
        setRSVP(true)
      }
    
      const handleClipboard = () => {
        setCopy(true)
      }
    
      const handleAttendance = (val: number) => {
        if (attend === val) {
          setAttend(0)
        } else {
          setAttend(val)
        }
      }
    
      const handleConfirmRSVP = (e: FormEvent<EventTarget>): void => {
        e.preventDefault()
        if (attend === 2) {
          setTransfer(true)
        } else {
          setTransfer(false)
        }
      } 

    return (
        <section>
            <Banner imageFile={banner3}>
                <div className='absolute top-10 w-full'>
                    <div className='relative'>
                        <h1 className='font-cormorantgaramond text-left mx-5 tracking-widest text-5xl text-gray-200'>WEDDING</h1>
                    </div>
                    <div className='w-3/4 m-auto'>
                        <h1 className='font-cormorantgaramond text-right tracking-widest mr-5 text-4xl text-gray-200'>RSVP</h1>
                    </div>
                    <div className='px-7 py-5 text-gray-200 font-cormorantgaramond text-center w-full m-auto text-2xl leading-10'>
                        <p>Your presence and prayers on our big day are all we ask for!</p>
                        <p>However, should you wish to help us celebrate with a gift, please find our RSVP information below.</p>
                    </div>
                </div>
                {
                    rsvp ?
                        <Modal>
                            {
                                transfer ?
                                    <div className='text-center pb-5'>
                                        <p></p>
                                        <img src={BCA} alt="" width={120} className='m-auto' />
                                        <div className='flex gap-3'>
                                            <div className='w-[70%] flex justify-end items-center gap-3'>
                                                <p className='font-bold text-lg'>6320435097</p>
                                                <CopyToClipboard text='6320435097' onCopy={handleClipboard}>
                                                    <FaCopy className='text-2xl' />
                                                </CopyToClipboard>
                                            </div>
                                            <p className={`text-red-500 text-lg relative ${copy ? 'block' : 'hidden'}`}>Copied!</p>
                                        </div>
                                        <p className='font-bold text-2xl'>David Kristiawan</p>
                                    </div>
                                    :
                                    <>
                                        <h1 className='text-center font-cormorantgaramond text-3xl mt-5'>RSVP Form</h1>
                                        <form className='p-5 font-quicksand'>
                                            <div className='w-full py-3'>
                                                <input type="text" placeholder='Name' name='name' className='w-full rounded-full px-3 py-1' />
                                            </div>
                                            <div className='w-full py-3'>
                                                <input type="text" placeholder='Email address' name='email' className='w-full rounded-full px-3 py-1' />
                                            </div>
                                            <div className='w-full py-3'>
                                                <input type="text" placeholder='Message' name='message' className='w-full justify-start rounded-xl px-3 pb-10' />
                                            </div>
                                            <div className='w-full text-center p-1'>
                                                <p>Will you attend ?</p>
                                            </div>
                                            <div className='grid grid-cols-2 py-3'>
                                                <div className='flex items-center justify-center w-full'>
                                                    <div className='flex gap-3' onClick={() => handleAttendance(1)}>
                                                        <FaHeart className={`text-center text-2xl ${attend === 1 ? 'text-red-600' : 'text-black'}`} />
                                                        <p className={`${attend === 1 ? 'text-red-600 font-bold' : 'text-black'}`}>YES, of course</p>
                                                    </div>
                                                </div>
                                                <div className='flex w-full items-center justify-center'>
                                                    <div className='flex gap-3' onClick={() => handleAttendance(2)}>
                                                        <FaHeartBroken className={`text-center text-2xl ${attend === 2 ? 'text-red-600' : 'text-black'}`} />
                                                        <p className={`${attend === 2 ? 'text-red-600 font-bold' : 'text-black'}`}>I'm sorry, No</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center mt-3'>
                                                <Button label='Confirm' onClick={(e) => handleConfirmRSVP(e)} />
                                            </div>
                                        </form>
                                    </>
                            }
                        </Modal>
                        :
                        <div className='absolute bottom-0 mb-5 w-full text-center'>
                            <Button label='RSVP' onClick={handleRSVP} />
                        </div>
                }
            </Banner>
        </section>
    )
}

export default RSVP