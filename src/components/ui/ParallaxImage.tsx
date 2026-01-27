"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
  placeholder?: boolean;
  placeholderText?: string;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.5,
  imgClassName = "",
  placeholder = false,
  placeholderText = "Image placeholder",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale }}
        className="relative w-full h-full"
      >
        {placeholder ? (
          <div className={`w-full h-full img-placeholder ${imgClassName}`}>
            <span className="text-center px-4">{placeholderText}</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover ${imgClassName}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </motion.div>
    </div>
  );
}
