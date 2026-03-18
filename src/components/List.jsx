import { AnimatePresence, motion } from 'framer-motion';
import { useScrollTo } from '../../customHooks/useScrollTo';
import { navList } from '../../data';

function List({ isOpen, setIsOpen }) {

    const containerVariants = {
        hidden: { opacity: 0, x: '100%' },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                when: "beforeChildren",
                staggerChildren: 0.1,
            }
        },
        exit: {
            opacity: 0,
            x: '100%',
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='fixed inset-0 bg-[#050508]/95 backdrop-blur-xl flex flex-col items-center justify-center z-[150] md:hidden'
                >
                    <button className='top-2 right-2 absolute' onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className='flex flex-col gap-10 text-center'>
                        {navList.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                onClick={() => {
                                    useScrollTo(item.id);
                                    setIsOpen(false);
                                }}
                                className='text-4xl font-bold text-white uppercase tracking-tighter hover:text-[#a78bfa] transition-colors cursor-pointer relative group'
                            >
                                <span className="relative z-10">{item.name}</span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#7453FA] rounded-full"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                />
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom-10 text-gray-500 text-sm tracking-widest"
                    >
                        TECHGLOW © 2026
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default List;