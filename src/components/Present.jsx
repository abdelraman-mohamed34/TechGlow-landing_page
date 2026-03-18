import { motion } from "framer-motion"
import HeroButtons from './HeroButtons'

function Present() {
    return (
        <section id="home" className='min-h-[80vh] flex flex-col items-center justify-center sm:pt-0 pt-20 px-4 relative'>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className='text-center md:text-7xl sm:text-6xl text-4xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]'
            >
                Where <span className="text-[#7453FA]">Technology</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                    Meets Light
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-center mt-6 text-sm md:text-xl text-gray-400 sm:max-w-2xl max-w-sm leading-relaxed'
            >
                Where energy meets motion, innovation comes to life. <br className="hidden md:block" />
                Experience the future of digital engineering today.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-0"
            >
                <HeroButtons />
            </motion.div>
        </section >
    )
}

export default Present