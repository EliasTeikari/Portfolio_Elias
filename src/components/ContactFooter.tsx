"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/eliasteikari",
    href: "https://www.linkedin.com/in/eliasteikari",
    meta: "Professional profile",
  },
  {
    label: "GitHub",
    value: "github.com/EliasTeikari",
    href: "https://github.com/EliasTeikari",
    meta: "Projects and code",
  },
  {
    label: "Email",
    value: "elias.tkri@gmail.com",
    href: "mailto:elias.tkri@gmail.com",
    meta: "Fastest response",
  },
];

export default function ContactFooter() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="story-section-container relative z-10">
        <div className="mb-12">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase">
                Contact
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Let's <span className="text-accent">Connect</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <ScrollReveal key={link.label} delay={0.1 * index}>
              <motion.a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{ y: -6 }}
                className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-muted">
                  {link.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {link.value}
                </p>
                <p className="mt-2 text-sm text-muted">{link.meta}</p>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
