import React from 'react'

export type NavigationProps = {
  list: string[]
}

const Navigation = ({ list }: NavigationProps) => {
  return (
    <section>
      <div className='fixed z-30 w-1/6 h-full'>
          <ul className='absolute size-full top-1/4 left-7 italic text-xl text-gray-500'>
            {
              list.map((v,i) => 
                <li key={i} className='py-5 hover:cursor-pointer hover:text-pink-200 hover:font-semibold'>{v}</li>
              )
            }
          </ul>
      </div>
    </section>
  )
}

export default Navigation