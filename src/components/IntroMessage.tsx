"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

export default function IntroMessage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Split the quote into words for staggered animation
  const quote = "Building the future, one idea at a time. Every challenge is an opportunity to create something extraordinary.";
  const words = quote.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background accent gradient */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 60%)",
            filter: "blur(120px)",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase">
                Message from Elias
              </span>
            </div>
          </ScrollReveal>

          {/* Main quote with word-by-word reveal */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
              {words.map((word, index) => (
                <ScrollReveal
                  key={index}
                  delay={0.1 + index * 0.03}
                  direction="up"
                  distance={20}
                  className="inline-block mr-[0.3em]"
                >
                  <span
                    className={
                      ["future", "extraordinary", "opportunity"].includes(word.replace(/[.,]/g, ""))
                        ? "text-accent font-medium"
                        : ""
                    }
                  >
                    {word}
                  </span>
                </ScrollReveal>
              ))}
            </h2>
          </div>

          {/* Signature area */}
          <ScrollReveal delay={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              {/* Signature placeholder */}
              <div className="flex items-center gap-6">
                <div className="w-32 h-16 img-placeholder rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted">Signature</span>
                </div>
                <div>
                  <p className="text-foreground font-medium">Elias Teikari</p>
                  <p className="text-muted text-sm">Founder & Builder</p>
                </div>
              </div>

              {/* Stats or highlights */}
              <div className="flex gap-12">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-accent">5+</p>
                  <p className="text-muted text-sm mt-1">Years Building</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-accent">10+</p>
                  <p className="text-muted text-sm mt-1">Projects Launched</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-accent">∞</p>
                  <p className="text-muted text-sm mt-1">Ideas Brewing</p>
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
