'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const blobColors = [
  'rgba(16, 185, 129, 0.16)',
  'rgba(20, 184, 166, 0.14)',
  'rgba(34, 197, 94, 0.1)',
  'rgba(5, 163, 202, 0.1)',
  'rgba(6, 88, 94, 0.16)',
  'rgba(100, 224, 255, 0.18)',
];

type BlobMotion = {
  color: string;
  initial: { x: string; y: string; scale: number };
  animate: { x: string[]; y: string[]; scale: number[]; rotate: number[] };
  duration: number;
  delay: number;
};

const Blob = ({ config, reducedMotion }: { config: BlobMotion; reducedMotion: boolean }) => {
  const animate = reducedMotion
    ? { opacity: [0.3, 0.45, 0.3] }
    : config.animate;
  const transition = reducedMotion
    ? { duration: 8, repeat: Infinity, ease: 'easeInOut' as const }
    : {
        duration: config.duration,
        ease: 'easeInOut' as const,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        delay: config.delay,
      };

  return (
    <motion.div
      className="absolute rounded-full blur-3xl will-change-transform"
      style={{
        width: '38vmax',
        height: '38vmax',
        backgroundColor: config.color,
      }}
      initial={config.initial}
      animate={animate}
      transition={transition}
    />
  );
};

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();
  const blobs = useMemo<BlobMotion[]>(
    () =>
      blobColors.map((color, index) => {
        const random = (min: number, max: number) => Math.random() * (max - min) + min;

        return {
          color,
          initial: {
            x: `${random(-38, 38)}vw`,
            y: `${random(-36, 36)}vh`,
            scale: random(0.9, 1.15),
          },
          animate: {
            x: [
              `${random(-38, 38)}vw`,
              `${random(-24, 24)}vw`,
              `${random(-38, 38)}vw`,
            ],
            y: [
              `${random(-34, 34)}vh`,
              `${random(-18, 18)}vh`,
              `${random(-34, 34)}vh`,
            ],
            scale: [1, random(1.05, 1.2), 1],
            rotate: [0, random(-18, 18), 0],
          },
          duration: random(18, 26),
          delay: index * 0.35,
        };
      }),
    []
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((config, index) => (
        <Blob key={index} config={config} reducedMotion={!!reducedMotion} />
      ))}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[96px]" />
    </div>
  );
}
