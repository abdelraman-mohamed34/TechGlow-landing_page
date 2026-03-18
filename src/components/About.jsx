import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    return (
        <section ref={containerRef} className="py-0 md:py-15 lg:py-32 px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden" id="about">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                <div className="flex-1 space-y-5 md:space-y-10 order-1 lg:order-2 text-center lg:text-left">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#a78bfa] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] bg-[#7453FA]/10 px-4 py-2 rounded-full inline-block"
                        >
                            Who We Are
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] lg:leading-[0.95] tracking-tighter">
                            Crafting Digital <br className="hidden md:block" />
                            <span className="text-gray-700">Atmospheres.</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 text-sm md:text-md leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                        At <span className='text-[#7453FA] font-bold'>TechGlow</span>, we don’t just build websites; we engineer <span className="text-white">visual symphonies</span>. Our focus is on cinematic motion that ensures your brand dominates the digital space.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 md:gap-12 pt-0 border-t border-white/5">
                        <div className="space-y-1">
                            <h3 className="text-3xl md:text-5xl font-bold text-white">12<span className="text-[#7453FA]">+</span></h3>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Projects</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-3xl md:text-5xl font-bold text-white">99</h3>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Score</p>
                        </div>
                    </div>
                </div>

                {/* Left Side: Interactive Card (نزلتها تحت في الموبايل باستخدام order-2) */}
                <motion.div
                    style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y : 0 }}
                    className="flex-1 relative group w-full order-2 lg:order-1"
                >
                    <div className="absolute -inset-4 md:-inset-10 bg-[#7453FA]/10 blur-[60px] md:blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 p-6 md:p-12 bg-[#050508]/60 border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl backdrop-blur-md"
                    >
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-center gap-4 md:gap-5">
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#7453FA] to-[#a78bfa] flex items-center justify-center text-xl md:text-2xl shadow-[0_0_20px_rgba(116,83,250,0.4)]">
                                    💡
                                </div>
                                <h4 className="text-white font-bold text-xl md:text-2xl tracking-tight">Our Mission</h4>
                            </div>

                            <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
                                We bridge the gap between complex logic and immersive aesthetics. Making every interaction feel <span className="text-white">premium</span> is our standard.
                            </p>

                            <div className="pt-6 md:pt-8 border-t border-white/10 space-y-3 md:space-y-4">
                                <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                                    <span>Precision</span>
                                    <span className="text-[#a78bfa]">90%</span>
                                </div>
                                <div className="h-[4px] md:h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '90%' }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                        className="h-full bg-gradient-to-r from-[#7453FA] to-[#a78bfa]"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}