import React from 'react'
import { FaBars } from "react-icons/fa6";

export type HeaderProps = {
    logo?: string,
    title?: string,
    menuBar?: boolean,
}

const Header = ({
    logo,
    title,
    menuBar
}: HeaderProps) => {
  return (
    <div className='flex w-full overflow-x-hidden h-16 bg-dark-brown justify-between items-center p-2'>
        <div>
            <img src={logo} alt="" />
            <label className='text-white text-3xl font-quicksand underline'>{title}</label>
        </div>
        <div>
            {
                menuBar ? <FaBars color='white' size={30}/> : null
            }
        </div>
    </div>
  )
}

export default Header;