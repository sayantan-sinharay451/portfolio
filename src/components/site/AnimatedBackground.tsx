'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

// Configuration for the blobs
const blobConfig = {
  colors: [
    'rgba(16, 185, 129, 0.2)', // Primary Green
    'rgba(20, 184, 166, 0.15)', // Accent Teal
    'rgba(16, 185, 129, 0.18)', // Success Green
    'rgba(0, 0, 0, 0)',       // Black for contrast
    'rgba(0, 0, 0, 0)',       // Black for contrast
    'rgba(34, 197, 94, 0.1)',   // Lighter Primary Green
    'rgba(5, 163, 202, 0.3)', // Blue
    "rgba(6, 88, 94, 0.2)",
    "rgba(100, 224, 255, 0.3)"
  ],
};

// This component represents a single animated blob
const Blob = ({ index }: { index: number }) => {
  const color = blobConfig.colors[index % blobConfig.colors.length];

  const random = useCallback((min: number, max: number) => Math.random() * (max - min) + min, []);

  const [initialState, setInitialState] = useState({ x: '0vw', y: '0vh' });
  const [animationState, setAnimationState] = useState({
    x: [null, `${random(-50, 50)}vw`, `${random(-50, 50)}vw`, null],
    y: [null, `${random(-50, 50)}vh`, `${random(-50, 50)}vh`, null],
    scale: [1, 1, 1, 1],
    rotate: [0, 0, 0, 0],
    duration: 5,
  });

  useEffect(() => {
    setInitialState({
      x: `${random(-50, 50)}vw`,
      y: `${random(-50, 50)}vh`,
    });
    setAnimationState({
      x: [null, `${random(-50, 50)}vw`, `${random(-50, 50)}vw`, null],
      y: [null, `${random(-50, 50)}vh`, `${random(-50, 50)}vh`, null],
      scale: [1, random(0.8, 1.5), random(0.8, 1.5), 1],
      rotate: [0, random(-90, 90), random(-90, 90), 0],
      duration: random(20, 30),
    });
  }, [random]);

  return (
    <motion.div suppressHydrationWarning
      className="absolute rounded-full mix-blend-hard-light filter blur-3xl"
      style={{
        width: '50vmax', // Use vmax for size relative to largest viewport dimension
        height: '50vmax',
        backgroundColor: color,
      }}
      initial={initialState}
      animate={animationState}
      transition={{
        duration: animationState.duration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
        delay: index, // Stagger the start times
      }}
    />
  );
};

// This is the main component that renders the background
export function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <AnimatePresence>
        {Array.from({
          length: blobConfig.colors.length
        }).map((_, index) => (
          <Blob key={index} index={index} />
        ))}
      </AnimatePresence>
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-3xl" />
    </div>
  );
}
