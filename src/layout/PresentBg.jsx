import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from 'framer-motion'

export const ParticlesBg = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    return init && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
        >
            <Particles
                id="tsparticles"
                className="absolute inset-0 -z-100 pointer-events-none"
                options={{
                    fullScreen: { enable: false },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                size: 5,
                                duration: 2,
                                opacity: 0.8,
                                color: "#ffffff"
                            },
                            push: { quantity: 5 },
                        },
                    },
                    particles: {
                        color: { value: ["#7453FA", "#a78bfa", "#ffffff"] },
                        move: {
                            enable: true,
                            speed: { min: 0.2, max: 0.5 },
                            direction: "top",
                            random: true,
                            straight: false,
                            outModes: "out",
                        },
                        number: {
                            value: 400,
                            density: { enable: true, area: 800 },
                        },
                        opacity: {
                            value: { min: 0.1, max: 0.4 },
                        },
                        shape: { type: "circle" },
                        size: {
                            value: { min: 1, max: 4 },
                        },
                        shadow: {
                            enable: true,
                            color: "#7453FA",
                            blur: 15,
                        },
                    },
                }}
            />
        </motion.div >

    );
};