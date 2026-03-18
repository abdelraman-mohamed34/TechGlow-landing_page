import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useScrollTo } from '../customHooks/useScrollTo';
import { navList } from '../data';

function Header({ isOpen, setIsOpen }) {
    return (
        <header className='fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-10 bg-[#050508]/80 backdrop-blur-md z-[100] border-b border-white/5'>
            {/* Logo */}
            <div
                className="text-white font-bold text-2xl tracking-tighter cursor-pointer z-[110]"
                onClick={() => useScrollTo('home')}
            >
                TECH<span className="text-[#a78bfa]">GLOW</span>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden md:block'>
                <ul className='flex gap-10 text-white/80 font-medium'>
                    {navList.map((item, index) => (
                        <motion.li
                            key={index}
                            onClick={() => useScrollTo(item.id)}
                            whileHover={{ scale: 1.05, color: "#fff" }}
                            whileTap={{ scale: 0.95 }}
                            className='cursor-pointer transition-all duration-300 relative group text-sm uppercase tracking-widest'
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#7453FA] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#7453FA]"></span>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Actions (Sign Up + Mobile Menu Toggle) */}
            <div className='flex items-center gap-4'>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[#a78bfa]/40 transition-all text-sm"
                >
                    Sign Up
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden text-white z-[110]'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="space-y-1.5">
                        <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-white"></motion.span>
                        <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-white"></motion.span>
                        <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-white"></motion.span>
                    </div>
                </button>
            </div>


        </header>
    )
}

export default Header;