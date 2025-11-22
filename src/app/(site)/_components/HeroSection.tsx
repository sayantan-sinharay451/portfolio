'use client'; // This directive is required for client components

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import SpotifyNowPlaying from './SpotifyNowPlaying';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';

const HeroSection = () => {
  const router = useRouter();

  const onNavigate = (section: string) => {
    router.push(`/#${section}`);
  };

  return (
    <section className="container flex min-h-[100vh] items-start py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-5xl"
      >
        <div className="space-y-1">
          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-primary-container/20 border-primary text-primary-foreground inline-flex items-center rounded-full border px-3 py-1 font-sans text-sm backdrop-blur-sm">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Developer Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-heading text-foreground text-6xl leading-tight font-bold tracking-tight md:!text-7xl lg:!text-8xl"
          >
            <div className="text-transparent-gradient">Sayantan Sinharay</div>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedGradientText
              duration={4}
              gradientStops="from-primary-light to-accent"
              className="font-body bg-gradient-to-r text-2xl leading-tight text-transparent md:text-3xl"
            >
              Building Digital Experiences
              <br />
              That Matter
            </AnimatedGradientText>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-contrast max-w-2xl text-lg leading-relaxed"
          >
            I craft beautiful, performant web applications with modern technologies. Passionate
            about creating intuitive user experiences and writing clean, maintainable code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              size="lg"
              className="bg-primary-container text-primary-light border-primary-light hover:bg-primary hover:text-primary-container"
            >
              View Projects <ArrowUpRight className="ml-1 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-light hover:text-primary-light hover:border-primary-container border-2"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Spotify Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-8"
          >
            <SpotifyNowPlaying />
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
