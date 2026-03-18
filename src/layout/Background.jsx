import React from 'react'
import { motion } from "framer-motion"

function Background() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='absolute top-0 left-0 -z-10 overflow-hidden sm:mt-20 mt-40'
        >
            <svg className="w-full h-screen" viewBox="0 0 250 1">
                {/* left */}
                <g transform="scale(1,-1) translate(0,-40)">
                    <path className='blur-bg' d="M0,-10 Q50,10 400,20 Q50,30 0,40 Z" fill="#7453FA" />
                    <path className='blur-second ' d="M0,-5  Q50,20 400,20 Q50,20 0,35 Z" fill="#a78bfa" />
                    <path className='blur-fst z-5' d="M0,0  Q50,20 400,20 Q50,20 0,30 Z" fill="#F3F4FF" />
                    <path className='blur-fst z-5' d="M0,0  Q50,20 400,20 Q50,20 0,40 Z" fill="#F3F4FF" />
                </g>
                {/* right */}
                <g transform="rotate(180, 125, 20)">
                    <path className='blur-bg' d="M0,-10 Q50,10 100,20 Q50,30 0,40 Z" fill="#7453FA" />
                    <path className='blur-second ' d="M0,-5  Q50,20 400,20 Q50,20 0,35 Z" fill="#a78bfa" />
                    <path className='blur-white' d="M0,0  Q50,20 400,20 Q50,20 0,30 Z" fill="#F3F4FF" />
                    <path className='blur-fst z-5' d="M0,0  Q50,20 400,20 Q50,20 0,40 Z" fill="#F3F4FF" />
                </g>
            </svg>
            <span className=' hidden absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#030711] pointer-events-none' />
        </motion.div>
    )
}

export default React.memo(Background)
