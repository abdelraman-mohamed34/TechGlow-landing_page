import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const MagneticButton = ({ children }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current || window.innerWidth < 768) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        x.set(middleX * 0.35);
        y.set(middleY * 0.35);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="relative group">
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute inset-0 bg-[#7453FA]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />
            <motion.button
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: window.innerWidth < 768 ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white text-black sm:px-11 sm:py-5 px-6 py-3 rounded-full font-bold text-md overflow-hidden whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[#a78bfa]/50 transition-shadow duration-500 uppercase tracking-wider w-full sm:w-auto"
            >
                <motion.span
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "circIn" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent z-10"
                />

                <span className="relative z-20 flex items-center justify-center gap-3">
                    {children}
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </motion.span>
                </span>
            </motion.button>
        </div>
    );
};