import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { MagneticButton } from './StartBuildingBtn';

export default function Start() {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { left, top } = cardRef.current.getBoundingClientRect();
        x.set(e.clientX - left);
        y.set(e.clientY - top);
    };

    return (
        //-- container --//
        <div className='xl:px-40 px-6 w-full mb-10 relative z-10 sm:mt-0'>

            {/* card body top parent */}
            <motion.div
                ref={cardRef}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleMouseMove}
                className="group w-full max-w-7xl mx-auto p-[1px] md:p-[1.5px] rounded-[2rem] md:rounded-[3rem] relative overflow-hidden bg-white/5 shadow-2xl"
            >
                {/* border animation */}
                <div
                    className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] opacity-10 md:opacity-20 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                        background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, #7453FA 20%, #a78bfa 50%, #7453FA 80%, transparent 100%)'
                    }}
                />

                <div className="bg-[#070714] rounded-[1.9rem] md:rounded-[2.9rem] sm:p-8 px-3 sm:py-16 py-7 md:p-15 lg:p-24 text-center relative overflow-hidden z-10 border border-white/5">
                    {/* interactive spotlight */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-700 hidden md:block"
                        style={{
                            background: useTransform(
                                [mouseX, mouseY],
                                ([cx, cy]) => `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(116, 83, 250, 0.12), transparent 80%)`
                            ),
                        }}
                    />

                    <section className="relative z-20">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[2.1rem] md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-10 tracking-tighter leading-[1.05] md:leading-[1.1]"
                        >
                            Ready to light up <br />
                            <span className="bg-gradient-to-r text-[1.9rem] md:text-6xl lg:text-7xl from-[#7453FA] via-[#a78bfa] to-[#F3F4FF] bg-clip-text text-transparent">
                                your next project ?
                            </span>
                        </motion.h2>

                        <div className="flex justify-center mt-6 md:mt-10 scale-90 md:scale-110 lg:scale-125">
                            <MagneticButton>Start Building Now</MagneticButton>
                        </div>
                    </section>

                    {/* Glow Effects */}
                    <span className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#7453FA]/5 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <span className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#a78bfa]/5 blur-[80px] md:blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
            </motion.div>
        </div>
    );
}