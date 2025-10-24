'use client'; // This directive is required for client components

import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import { Button } from "@/components/ui/button";

const HeroSection = () => {

  const router = useRouter();

  const onNavigate = (section: string) => {
    router.push(`/#${section}`);
  };

  return (
    <section className="container min-h-[90vh] flex items-center py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-5xl w-full"
      >
        <div className="space-y-8">
          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="font-sans inline-flex items-center !px-3 !py-1 bg-primary/40 border border-primary text-primary-foreground rounded-full text-sm backdrop-blur-sm">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Developer Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-heading leading-tight text-6xl md:text-7xl font-bold tracking-tight text-foreground"
          >
            <div className="flex items-center gap-5 flex-wrap">
              Sayantan
              <span className="bg-[radial-gradient(at_top_right,transparent_20%,white_60%)] text-transparent bg-clip-text">
                Sinharay
              </span>
            </div>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-primary-light text-2xl md:text-3xl leading-tight"
          >
            Building Digital Experiences<br />That Matter
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl font-contrast leading-relaxed text-lg"
          >
            I craft beautiful, performant web applications with modern technologies.
            Passionate about creating intuitive user experiences and writing clean, maintainable code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >

            <Button size="lg" onClick={() => onNavigate('feature_projects')} className="">
              View Projects
              {/* <ArrowRight size={20} /> */}
            </Button>
            <Button variant="secondary" size="lg" onClick={() => onNavigate('contact')}>
              Get In Touch
            </Button>

          </motion.div>

          {/* Spotify Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-8"
          >
            <SpotifyNowPlaying />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
