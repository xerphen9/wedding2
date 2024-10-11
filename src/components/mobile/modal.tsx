import React, {PropsWithChildren} from 'react'
import { motion } from "framer-motion"

const Modal = ({children}: PropsWithChildren) => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-11/12 h-auto backdrop-blur-md rounded-xl shadow-xl'>
                {children}
            </motion.div>
        </div>
    )
}

export default Modal