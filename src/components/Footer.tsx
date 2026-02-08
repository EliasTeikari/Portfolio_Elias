"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Connect", href: "#contact" },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const footerText = "Always bringing the fight.";
  const words = footerText.split(" ");

  return (
    <footer ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Large background text */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[20vw] font-bold text-foreground/[0.02] whitespace-nowrap">
          ELIAS TEIKARI
        </span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Animated tagline */}
          <div ref={textRef} className="mb-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold flex flex-wrap justify-center gap-x-4">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={
                    ["Always", "fight."].includes(word)
                      ? "text-accent"
                      : ""
                  }
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* CTA Button */}
          <ScrollReveal delay={0.4}>
            <motion.a
              href="mailto:hello@eliasteikari.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-background transition-all duration-300"
            >
              Business Enquiries
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.a>
          </ScrollReveal>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo/Name */}
            <ScrollReveal>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-background font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold">Elias Teikari</span>
              </motion.div>
            </ScrollReveal>

            {/* Navigation */}
            <ScrollReveal delay={0.1}>
              <nav className="flex items-center gap-8">
                {footerLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ y: -2 }}
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </ScrollReveal>

            {/* Copyright */}
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-sm">
                © {new Date().getFullYear()} Elias Teikari. All rights reserved.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-accent/50 to-transparent"
        />
      </div>
    </footer>
  );
}
