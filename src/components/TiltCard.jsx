import { useMotionValue, useTransform, motion } from 'framer-motion'
import { useRef, useState } from 'react';

export const TiltCard = ({ feature }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = feature.icon;
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const spotlightX = useMotionValue(0);
    const spotlightY = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], ["-12deg", "12deg"]);
    const rotateY = useTransform(x, [-0.5, 0.5], ["12deg", "-12deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(xPct);
        y.set(yPct);

        spotlightX.set(e.clientX - rect.left);
        spotlightY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-full rounded-[2rem] bg-[#070714] border border-white/5 p-10 overflow-hidden cursor-pointer shadow-2xl transition-colors duration-500 hover:border-[#a78bfa]/30"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] z-0"
                style={{
                    background: useTransform(
                        [spotlightX, spotlightY],
                        ([cx, cy]) => `radial-gradient(500px circle at ${cx}px ${cy}px, rgba(116, 83, 250, 0.12), transparent 70%)`
                    ),
                    opacity: isHovered ? 1 : 0,
                }}
            />

            {/* Content Layer */}
            <div
                style={{
                    transform: "translateZ(80px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative z-20 flex flex-col items-center justify-center text-center h-full pointer-events-none"
            >
                {/* Glow behind icon */}
                <div className="absolute w-24 h-24 bg-[#7453FA]/10 blur-[60px] rounded-full -z-10" />

                <motion.div
                    animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mb-6"
                >
                    <IconComponent
                        size={64}
                        className="text-[#a78bfa] drop-shadow-[0_0_15px_rgba(167,139,250,0.4)]"
                        strokeWidth={1.2}
                    />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm px-4">
                    {feature.desc}
                </p>
            </div>

            {/* Border Glow */}
            <div className={`absolute inset-0 border-[2px] rounded-[2rem] transition-colors duration-500 pointer-events-none z-30 ${isHovered ? 'border-[#a78bfa]/40' : 'border-transparent'}`} />
        </motion.div>
    );
};