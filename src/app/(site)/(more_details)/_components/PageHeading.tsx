'use client';
import React from 'react';
import { motion } from 'framer-motion';

export interface PageHeadingProps {
  title: string;
  subTitle?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, subTitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-transparent-gradient w-fit">{title}</h1>
      <p className="max-w-3xl text-lg text-[var(--color-text-secondary)]">{subTitle}</p>
    </motion.div>
  );
};

export default PageHeading;
