'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const nameLetters = 'ELIAS'.split('');
    const surnameLetters = 'TEIKARI'.split('');

    const letterVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + i * 0.05,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
            },
        }),
    };

    const taglineWords = ['Entrepreneur', 'Builder', 'Visionary'];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/images/hero-bg.png"
                    alt="Landscape Background"
                    className="object-cover w-full h-full"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Bottom gradient to blend with portrait's black fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent bottom-0 h-full" />
            </div>

            {/* Animated background circles - reduced opacity for subtlety */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10"
                style={{
                    background:
                        'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                style={{ opacity, scale, y }}
                className="relative z-10 w-full"
            >
                <div className="container mx-auto px-6 text-center">
                    {/* Pre-title */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted text-sm md:text-base tracking-[0.3em] uppercase mb-8"
                    >
                        Welcome to my world
                    </motion.p>

                    {/* Main Name */}
                    <div className="overflow-hidden mb-8">
                        <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold leading-none tracking-tighter flex flex-wrap justify-center gap-[0.2em]">
                            <span className="flex">
                                {nameLetters.map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        initial="hidden"
                                        animate={
                                            isLoaded ? 'visible' : 'hidden'
                                        }
                                        variants={letterVariants}
                                        className="inline-block hover:text-accent transition-colors duration-300"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="flex text-accent">
                                {surnameLetters.map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i + nameLetters.length}
                                        initial="hidden"
                                        animate={
                                            isLoaded ? 'visible' : 'hidden'
                                        }
                                        variants={letterVariants}
                                        className="inline-block hover:text-foreground transition-colors duration-300"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>
                    </div>

                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isLoaded ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex items-center justify-center gap-4 md:gap-8 text-lg md:text-xl lg:text-2xl text-muted"
                    >
                        {taglineWords.map((word, index) => (
                            <span
                                key={word}
                                className="flex items-center gap-4 md:gap-8"
                            >
                                {index > 0 && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                )}
                                <span className="hover:text-foreground transition-colors duration-300">
                                    {word}
                                </span>
                            </span>
                        ))}
                    </motion.div>

                    {/* Hero image */}
                    <div className="mt-24 md:mt-32 flex justify-center w-full px-6 md:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="relative w-full max-w-5xl"
                        >
                            <div
                                className="aspect-[16/9] relative"
                                style={{
                                    maskImage:
                                        'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                                    WebkitMaskImage:
                                        'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                                }}
                            >
                                <img
                                    src="/images/hero-portrait-transparent.png"
                                    alt="Elias Teikari"
                                    className="object-cover w-full h-full opacity-90"
                                />
                            </div>

                            {/* Vignette Overlay for extra seamless blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0" />
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-0" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-muted text-xs tracking-widest uppercase">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="w-1 h-2 bg-accent rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
