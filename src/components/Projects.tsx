"use client";

import { useRef, useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    year: string;
    image?: string;
    link?: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "earcandy",
        category: "Tech Startup",
        description:
            "An AI music tool catered for music producers and songwriters that helped me in my workflow.",
        year: "2024",
        image: "/images/selected_work/earcandy.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "PowerPlan",
        category: "SaaS Product",
        description:
            "I used to go to the gym with a Google spreadsheet, which was a terrible UX for me, so I decided to build something better.",
        year: "2023",
        image: "/images/selected_work/powerplan.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "LiftSense",
        category: "AI Fitness",
        description:
            "An AI-powered form corrector that we built at the Project Lovable Hackathon.",
        year: "2023",
        image: "/images/selected_work/liftsense.jpg",
        link: "#",
    },
    {
        id: 4,
        title: "earcandy landing page",
        category: "Product Landing",
        description:
            "Landing page where our app earcandy can be downloaded and authentication handled with payments.",
        year: "2022",
        image: "/images/selected_work/earcandy_landing.jpg",
        link: "#",
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        if (scrollContainerRef.current) {
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            setContainerWidth(scrollWidth - viewportWidth);
        }
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth]);

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: "300vh" }}
        >
            {/* Sticky container for horizontal scroll */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                {/* Section header */}
                <div className="container mx-auto px-6 mb-12">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-accent" />
                            <span className="text-accent text-sm tracking-[0.2em] uppercase">
                                Portfolio
                            </span>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title">
                                Selected{" "}
                                <span className="text-accent">Work</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-muted text-lg max-w-md">
                                A curated selection of projects that showcase my
                                passion for building and innovation.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Horizontal scroll container */}
                <motion.div
                    ref={scrollContainerRef}
                    style={{ x }}
                    className="flex gap-8 pl-6 pr-[50vw]"
                >
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Scroll progress indicator */}
                <div className="container mx-auto px-6 mt-12">
                    <div className="flex items-center gap-4">
                        <span className="text-muted text-sm">Scroll</span>
                        <div className="flex-1 h-px bg-border relative max-w-xs">
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-accent"
                                style={{
                                    width: useTransform(
                                        scrollYProgress,
                                        [0, 1],
                                        ["0%", "100%"],
                                    ),
                                }}
                            />
                        </div>
                        <span className="text-muted text-sm font-mono">
                            {projectsData.length} Projects
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), {
        stiffness: 300,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), {
        stiffness: 300,
        damping: 30,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative w-[400px] md:w-[500px] lg:w-[600px] flex-shrink-0"
        >
            <div className="relative bg-card rounded-2xl overflow-hidden border border-border group-hover:border-accent/50 transition-colors duration-500">
                {/* Project image placeholder */}
                <div
                    className={`aspect-[4/3] relative overflow-hidden ${
                        project.image ? "" : "img-placeholder"
                    }`}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 600px"
                            className="object-cover"
                        />
                    ) : (
                        <span className="text-muted text-sm">
                            Project Image
                            <br />
                            (800 x 600px)
                        </span>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View project button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <span className="text-foreground font-medium">
                            View Project
                        </span>
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-background"
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
                        </div>
                    </motion.div>
                </div>

                {/* Project info */}
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-accent text-sm font-medium tracking-wide uppercase">
                            {project.category}
                        </span>
                        <span className="text-muted text-sm font-mono">
                            {project.year}
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-muted leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Project number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 group-hover:text-accent/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                </div>
            </div>

            {/* Decorative shadow/glow on hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-accent/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-95" />
        </motion.div>
    );
}
