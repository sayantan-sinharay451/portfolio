'use client';
import React from 'react';
import { motion } from 'framer-motion';

export interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  id: string;
}

const SectionHeading = ({ heading, subheading, id }: SectionHeadingProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mb-12"
    >
      <h2 className="text-primary font-heading text-4xl">{heading}</h2>
      <p className="font-contrast text-foreground max-w-2xl font-medium">{subheading}</p>
    </motion.div>
  );
};

export default SectionHeading;
