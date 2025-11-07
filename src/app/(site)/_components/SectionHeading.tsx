import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  heading?: string;
  subheading?: string;
  id?: string;
}

const SectionHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mb-12"
    >
      <h2 className="text-primary font-heading text-4xl">What I Do</h2>
      <p className="font-contrast text-foreground max-w-2xl font-medium">
        My approach to development and design
      </p>
    </motion.div>
  );
};

export default SectionHeading;
