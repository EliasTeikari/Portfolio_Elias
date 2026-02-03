'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        </section>
    );
}
