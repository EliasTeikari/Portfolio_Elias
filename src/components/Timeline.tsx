'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import ParallaxImage from './ui/ParallaxImage';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    location?: string;
    image?: string;
}

const timelineData: TimelineItem[] = [
    {
        year: '2024',
        title: 'Latest Venture',
        description:
            'Launched a groundbreaking project that pushes the boundaries of innovation.',
        location: 'Helsinki, Finland',
    },
    {
        year: '2023',
        title: 'Major Milestone',
        description:
            'Achieved a significant breakthrough that changed the trajectory of my career.',
        location: 'Global',
    },
    {
        year: '2022',
        title: 'New Beginnings',
        description:
            'Started a new chapter with fresh ideas and renewed determination.',
        location: 'Europe',
    },
    {
        year: '2021',
        title: 'Foundation',
        description:
            'Laid the groundwork for future success with strategic planning and execution.',
        location: 'Finland',
    },
    {
        year: '2020',
        title: 'The Journey Begins',
        description:
            'Took the first steps into entrepreneurship, embracing uncertainty with excitement.',
        location: 'Helsinki',
    },
];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden">
            {/* Section header */}
            <div className="container mx-auto px-6 mb-20">
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-accent" />
                        <span className="text-accent text-sm tracking-[0.2em] uppercase">
                            The Journey
                        </span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                        My <span className="text-accent">Story</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mt-6">
                        A journey of continuous growth, learning, and building.
                        Every step has shaped who I am today.
                    </p>
                </ScrollReveal>
            </div>

            {/* Timeline content */}
            <div className="container mx-auto px-6">
                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
                        <motion.div
                            className="w-full bg-accent origin-top"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    {/* Timeline items */}
                    <div className="space-y-24 md:space-y-32">
                        {timelineData.map((item, index) => (
                            <TimelineCard
                                key={item.year}
                                item={item}
                                index={index}
                                isEven={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom quote */}
            <div className="container mx-auto px-6 mt-32">
                <ScrollReveal>
                    <blockquote className="text-center max-w-3xl mx-auto">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-light italic text-muted">
                            "It doesn't matter where you{' '}
                            <span className="text-accent not-italic font-medium">
                                start
                            </span>
                            , it's how you{' '}
                            <span className="text-accent not-italic font-medium">
                                progress
                            </span>{' '}
                            from there."
                        </p>
                    </blockquote>
                </ScrollReveal>
            </div>
        </section>
    );
}

function TimelineCard({
    item,
    index,
    isEven,
}: {
    item: TimelineItem;
    index: number;
    isEven: boolean;
}) {
    return (
        <div
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
        >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 bg-background border-2 border-accent rounded-full z-10">
                <div className="absolute inset-1 bg-accent rounded-full animate-pulse" />
            </div>

            {/* Content side */}
            <div
                className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
            >
                <ScrollReveal
                    delay={0.1 * index}
                    direction={isEven ? 'right' : 'left'}
                >
                    <div className="space-y-4">
                        {/* Year badge */}
                        <div
                            className={`flex items-center gap-3 ${isEven ? 'md:justify-end' : ''}`}
                        >
                            <span className="text-accent font-mono text-sm tracking-wider">
                                {item.location}
                            </span>
                            <span className="text-3xl md:text-4xl font-bold text-foreground">
                                {item.year}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-semibold">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Image side */}
            <div
                className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
            >
                <ScrollReveal
                    delay={0.2 + 0.1 * index}
                    direction={isEven ? 'left' : 'right'}
                >
                    <div className="relative group">
                        <ParallaxImage
                            src=""
                            alt={item.title}
                            placeholder={true}
                            placeholderText={`Image for ${item.year}\n(600 x 400px)`}
                            className="aspect-[3/2] rounded-xl"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        {/* Decorative corner */}
                        <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/20 rounded-xl -z-10 group-hover:border-accent/40 transition-colors duration-300" />
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
