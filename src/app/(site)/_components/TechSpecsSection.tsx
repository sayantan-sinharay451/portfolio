'use client';
import SkillsCarousel from '@/components/site/SkillsCarousel';
import { motion } from 'framer-motion';
const TechSpecsSection = () => {
  return (
    <section className="section-spacing bg-surface overflow-hidden backdrop-blur-md">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-heading text-primary">Tech Stack</h2>
          <p className="font-contrast text-muted-foreground max-w-2xl">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>
        <SkillsCarousel />
      </div>
    </section>
  );
};

export default TechSpecsSection;
