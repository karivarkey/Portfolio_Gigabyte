import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false)
    const email = "giribalaarun@gmail.com"
    const copyClipboard = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 5000)
    }

    return (
        <motion.button
            onClick={copyClipboard}
            className='relative bg-[#0c0c1b] text-white px-4 py-2 font-semibold w-[18rem] overflow-hidden cursor-pointer rounded-lg shadow-lg transition-all duration-300 hover:bg-[#0c0c1f] hover:shadow-xl'
        >
            <AnimatePresence mode="wait">
                {copied ? (
                    <motion.p
                        key="copied"
                        className='flex items-center justify-center text-center mb-2'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        Email has been copied
                    </motion.p>
                ) : (
                    <motion.p
                        key="default"
                        className='flex items-center justify-center text-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src="assets/copy.svg" alt="copy icon" className='inline-block mr-2' />
                        Connect With Me Through Email
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export default CopyEmailButton