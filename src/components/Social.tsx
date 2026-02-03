'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from './ui/ScrollReveal';

const socialImages = [
    {
        id: 1,
        src: '/images/social/on-stage.jpg',
        alt: 'Speaking on stage',
    },
    {
        id: 2,
        src: '/images/social/pitch.jpg',
        alt: 'Pitching a product',
    },
    {
        id: 3,
        src: '/images/social/anton-osika.jpg',
        alt: 'With Anton Osika',
    },
    {
        id: 4,
        src: '/images/social/asking-question.jpg',
        alt: 'Asking a question',
    },
    {
        id: 5,
        src: '/images/social/harry.jpg',
        alt: 'With Harry',
    },
    {
        id: 6,
        src: '/images/social/Screenshot%202026-02-03%20at%2016.03.25.jpg',
        alt: 'Social highlight',
    },
];

export default function Social() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section
            ref={containerRef}
            className="relative py-32 overflow-hidden"
            id="contact"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

            <div className="story-section-container relative z-10">
                {/* Section header */}
                <div className="mb-20">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-accent" />
                            <span className="text-accent text-sm tracking-[0.2em] uppercase">
                                Connect
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            What's <span className="text-accent">Up</span>
                            <br />
                            On Socials
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Social images grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                    {socialImages.map((image, index) => (
                        <ScrollReveal
                            key={image.id}
                            delay={0.1 * index}
                            className={
                                index === 0 || index === 3
                                    ? 'md:row-span-2'
                                    : ''
                            }
                        >
                            <motion.div
                                style={{ y: index % 2 === 0 ? y1 : y2 }}
                                whileHover={{ scale: 1.02 }}
                                className={`relative overflow-hidden rounded-xl group ${
                                    index === 0 || index === 3
                                        ? 'aspect-[3/4]'
                                        : 'aspect-square'
                                }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                                    className="object-cover"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
