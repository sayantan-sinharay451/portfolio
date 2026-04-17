'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="container flex min-h-[calc(100svh-4rem)] items-center py-16 md:min-h-[calc(100svh-5rem)] md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full md:max-w-5xl"
      >
        <div className="space-y-2 md:space-y-4">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-primary-container/20 border-primary text-primary-foreground inline-flex items-center rounded-full border px-3 py-1 font-sans text-xs backdrop-blur-sm sm:text-sm">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-heading text-transparent-gradient text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Sayantan Sinharay
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedGradientText
              duration={4}
              gradientStops="from-primary-light to-accent"
              className="font-body bg-gradient-to-r text-2xl leading-snug font-semibold text-transparent md:text-3xl lg:text-5xl"
            >
              Building Digital Experiences
              <br />
              That Matter
            </AnimatedGradientText>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-contrast max-w-xl py-5 text-base leading-relaxed font-light sm:text-lg md:max-w-2xl md:pt-5 md:text-xl"
          >
            I craft beautiful, performant web applications with modern technologies. Passionate
            about creating intuitive user experiences and writing clean, maintainable code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex w-full flex-col gap-4 sm:w-[70%] sm:flex-row sm:gap-6 md:w-[55%] lg:w-[45%]"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary-container text-primary-light border-primary-light hover:bg-primary hover:text-primary-container w-full"
            >
              <Link href="/projects">
                View Projects <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-light hover:text-primary-light hover:border-primary-container w-full border-2"
            >
              <Link href="/contact">
                Get In Touch <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
