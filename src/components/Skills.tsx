'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

interface Skill {
    name: string;
    icon: string;
    description: string;
}

const skills: Skill[] = [
    {
        name: 'Strategy',
        icon: '🎯',
        description: 'Building roadmaps that turn vision into reality',
    },
    {
        name: 'Leadership',
        icon: '🚀',
        description: 'Inspiring teams to achieve extraordinary results',
    },
    {
        name: 'Innovation',
        icon: '💡',
        description: 'Finding creative solutions to complex problems',
    },
    {
        name: 'Technology',
        icon: '⚡',
        description: 'Leveraging tech to create competitive advantages',
    },
    {
        name: 'Growth',
        icon: '📈',
        description: 'Scaling businesses from zero to hero',
    },
    {
        name: 'Design',
        icon: '✨',
        description: 'Creating experiences that users love',
    },
];

const techStack = [
    { name: 'TypeScript', className: 'bg-sky-600/80 text-white' },
    { name: 'React', className: 'bg-cyan-500/80 text-slate-900' },
    { name: 'Tailwind CSS', className: 'bg-teal-500/80 text-slate-900' },
    { name: 'Node.js', className: 'bg-emerald-600/80 text-white' },
    { name: 'MongoDB', className: 'bg-emerald-700/80 text-white' },
    { name: 'Vite', className: 'bg-purple-500/80 text-white' },
    { name: 'Python', className: 'bg-yellow-400/90 text-slate-900' },
    { name: 'Java', className: 'bg-orange-500/80 text-white' },
    { name: 'Bash', className: 'bg-slate-700/80 text-white' },
    { name: 'Git', className: 'bg-orange-600/80 text-white' },
    { name: 'PostgreSQL', className: 'bg-blue-600/80 text-white' },
    { name: 'HTML5', className: 'bg-orange-500/80 text-white' },
    { name: 'CSS3', className: 'bg-blue-500/80 text-white' },
    { name: 'Docker', className: 'bg-sky-500/80 text-white' },
    { name: 'AWS', className: 'bg-amber-500/90 text-slate-900' },
    { name: 'Bootstrap', className: 'bg-violet-600/80 text-white' },
    { name: 'JavaScript', className: 'bg-yellow-400/90 text-slate-900' },
    { name: 'Joi', className: 'bg-indigo-500/80 text-white' },
    { name: 'Next.js', className: 'bg-zinc-800/90 text-white' },
    { name: 'Bun', className: 'bg-amber-600/80 text-white' },
    { name: 'Linux', className: 'bg-yellow-500/90 text-slate-900' },
    { name: 'Vercel', className: 'bg-foreground text-background' },
    { name: 'Railway', className: 'bg-zinc-900 text-white' },
    { name: 'Render', className: 'bg-emerald-500/80 text-slate-900' },
    { name: 'JWT', className: 'bg-rose-600/80 text-white' },
    { name: 'bcrypt', className: 'bg-indigo-600/80 text-white' },
];

const marqueeText =
    'ENTREPRENEUR • BUILDER • INNOVATOR • LEADER • CREATOR • VISIONARY • ';

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
    const marqueeXReverse = useTransform(
        scrollYProgress,
        [0, 1],
        ['-50%', '0%'],
    );

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden">
            {/* Marquee text backgrounds */}
            <div className="absolute inset-0 flex flex-col justify-center gap-20 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <motion.div
                    style={{ x: marqueeX }}
                    className="whitespace-nowrap text-[15vw] font-bold"
                >
                    {marqueeText.repeat(4)}
                </motion.div>
                <motion.div
                    style={{ x: marqueeXReverse }}
                    className="whitespace-nowrap text-[15vw] font-bold"
                >
                    {marqueeText.repeat(4)}
                </motion.div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="mb-20">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-accent" />
                            <span className="text-accent text-sm tracking-[0.2em] uppercase">
                                Expertise
                            </span>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title">
                                What I{' '}
                                <span className="text-accent">Bring</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-muted text-lg max-w-md">
                                A unique blend of skills honed through years of
                                building, failing, learning, and succeeding.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                        />
                    ))}
                </div>

                {/* Tech stack */}
                <div className="mt-16 bg-card border border-border rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">🛠️</span>
                        <h3 className="text-2xl font-bold">Tech Stack</h3>
                    </div>
                    <p className="text-muted mb-6 max-w-2xl">
                        The technologies I&apos;ve built with across frontend,
                        backend, DevOps, and deployment.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech) => (
                            <span
                                key={tech.name}
                                className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold tracking-[0.2em] uppercase border border-white/10 ${tech.className}`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <ScrollReveal delay={0.5} className="mt-20 text-center">
                    <p className="text-muted text-lg mb-6">
                        Want to know more about what I can do?
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-dark transition-colors"
                    >
                        Let's Talk
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </motion.a>
                </ScrollReveal>
            </div>
        </section>
    );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ y: -8 }}
            className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-500"
        >
            {/* Icon */}
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                {skill.name}
            </h3>

            {/* Description */}
            <p className="text-muted leading-relaxed">{skill.description}</p>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Background glow on hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-accent/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}
