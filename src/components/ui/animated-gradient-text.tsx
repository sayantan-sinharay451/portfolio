'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  gradientStops?: string;
}

/**
 * GradientText
 * - animates background-position so the gradient appears to sweep across the text
 * - uses background-clip:text and text-transparent
 */
export default function AnimatedGradientText({
  children,
  duration = 4,
  className,
  gradientStops,
}: AnimatedGradientTextProps) {
  // keyframe anim: backgroundPosition X from 0% -> 100% -> 0% for seamless loop
  const animateBg = {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  };

  const transition = {
    duration,
    ease: 'linear' as const,
    repeat: Infinity,
    repeatType: 'loop' as const,
  };

  return (
    <motion.span
      aria-hidden={false}
      initial={true}
      animate={animateBg}
      transition={transition}
      className={`${className} ${gradientStops} bg-[length:200%_200%] bg-clip-text text-transparent`}
    >
      {children}
    </motion.span>
  );
}
