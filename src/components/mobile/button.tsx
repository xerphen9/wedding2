import React from 'react'

export type ButtonProps = {
    label: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ label, onClick, ...rest}: ButtonProps) => {
  return (
    <button 
        className='bg-dark-brown z-20 text-white rounded-lg border-double border-8 border-gray-300 text-xl py-2 px-7 hover:cursor-pointer'
        onClick={onClick}
        {...rest}>
        {label}
    </button>
  )
}

export default Button