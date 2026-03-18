import { motion } from 'framer-motion';

const social = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/abdelrhman-mohamed-se?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'GitHub', link: 'https://github.com/abdelraman-mohamed34' },
    { name: 'Facebook', link: 'https://www.facebook.com/share/19qePwEhv6/' },
]

const Footer = () => {
    return (
        <footer id='footer' className="w-full py-12 px-10 border-t border-white/5 relative overflow-hidden backdrop-blur-sm bg-[#030308]/50">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#7453FA] to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center sm:gap-8 gap-3 relative z-10">
                {/* Brand */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col gap-1 items-center md:items-start"
                >
                    <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                        TECH<span className="text-[#a78bfa]">GLOW</span>
                    </span>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
                        © 2026 Crafted with light and code.
                    </p>
                </motion.div>

                {/* Social Links */}
                <div className="flex sm:gap-10 gap-5 items-center">
                    {social.map((link) => (
                        <motion.a
                            target='_blank'
                            key={link.name}
                            href={link.link}
                            whileHover={{ y: -3, color: '#a78bfa' }}
                            className="text-gray-500 text-[11px] uppercase tracking-[0.2em] font-black transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Status Indicator */}
                <div className="items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/5 shadow-inner sm:flex hidden">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-black">Systems Online</span>
                </div>
            </div>

            {/* Subtle Gradient Glow*/}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7453FA]/5 blur-[80px] rounded-full pointer-events-none" />
        </footer>
    );
};

export default Footer;