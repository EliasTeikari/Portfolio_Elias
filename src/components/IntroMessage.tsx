'use client';

import { useRef, ReactElement } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

export default function IntroMessage() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    // Main quote as a static string
    const quote = "I build fast so my imposter syndrome can't catch up.";

    // Helper function to process quote and wrap special words in spans
    const processQuote = (text: string) => {
        const specialWords = ['future', 'extraordinary', 'opportunity'];
        const parts: (string | ReactElement)[] = [];
        const matches: Array<{ index: number; length: number; word: string }> =
            [];

        // Find all matches of special words with their positions
        for (let i = 0; i < specialWords.length; i++) {
            const word = specialWords[i];
            const regex = new RegExp(
                `\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`,
                'gi',
            );
            let match;

            while ((match = regex.exec(text)) !== null) {
                matches.push({
                    index: match.index,
                    length: match[0].length,
                    word: match[0],
                });
            }
        }

        // Sort matches by index to process in order
        matches.sort((a, b) => a.index - b.index);

        // Build parts array from matches
        let lastIndex = 0;
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];

            // Add text before the match
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }

            // Add the matched word with styling
            parts.push(
                <span
                    key={`special-${match.index}`}
                    className="text-accent font-medium"
                >
                    {match.word}
                </span>,
            );

            lastIndex = match.index + match.length;
        }

        // Add remaining text
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        // If no special words were found, return the original text
        if (parts.length === 0) {
            return <>{text}</>;
        }

        return <>{parts}</>;
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center py-32 overflow-hidden"
        >
            {/* Background accent gradient */}
            <motion.div
                style={{ y: backgroundY }}
                className="relative justify-content inset-0 opacity-30"
            >
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
                    style={{
                        background:
                            'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
                        filter: 'blur(120px)',
                    }}
                />
            </motion.div>

            {/* Background film texture image */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <img
                    src="/images/intromessage-overlay-film_Afterlight.jpg"
                    alt="Film texture background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="intro-message-wrapper">
                <div className="intro-message-content">
                    {/* Section label */}
                    <ScrollReveal delay={0}>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-px bg-accent" />
                            <span className="text-accent text-sm tracking-[0.2em] uppercase">
                                Message from Elias
                            </span>
                        </div>
                    </ScrollReveal>

                    {/* Main quote as static string */}
                    <div className="mb-16">
                        <ScrollReveal delay={0.1} direction="up" distance={20}>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight font-title">
                                {processQuote(quote)}
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Signature area */}
                    <ScrollReveal delay={0.8}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            {/* Signature placeholder */}
                            <div className="flex items-center gap-6">
                                <div className="w-32 h-16 img-placeholder rounded-lg flex items-center justify-center">
                                    <span className="text-xs text-muted">
                                        Signature
                                    </span>
                                </div>
                                <div>
                                    <p className="text-foreground font-medium">
                                        Elias Teikari
                                    </p>
                                    <p className="text-muted text-sm">
                                        Founder & Builder
                                    </p>
                                </div>
                            </div>

                            {/* Stats or highlights */}
                            <div className="flex gap-12">
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold text-accent">
                                        5+
                                    </p>
                                    <p className="text-muted text-sm mt-1">
                                        Years Building
                                    </p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold text-accent">
                                        10+
                                    </p>
                                    <p className="text-muted text-sm mt-1">
                                        Projects Launched
                                    </p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold text-accent">
                                        ∞
                                    </p>
                                    <p className="text-muted text-sm mt-1">
                                        Ideas Brewing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Decorative line */}
                    <ScrollReveal delay={1} className="mt-20">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
