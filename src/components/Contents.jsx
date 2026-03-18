import React, { useRef } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { TiltCard } from './TiltCard';
import { features } from '../data';

function Contents() {
    return (
        <div id="services" className="w-full mb-20 bg-transparent px-10 md:mt-60 sm:mt-50 mt-35">
            {/* 1. Header Section */}
            <section className="text-center sm:mb-20 mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Revolutionizing the <span className="text-[#a78bfa]">Digital Experience</span>
                </motion.h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    We combine engineering excellence with creative vision to build products that stand out.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-8 gap-3 max-w-7xl mx-auto">
                {features.map((item, index) => (
                    <TiltCard key={index} feature={item} />
                ))}
            </div>
        </div>
    );
}

export default Contents;