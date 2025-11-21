'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SkillIcon from './SkillIcon';

interface TechnologyBadgeProps {
  name: string;
  icon?: string; // optional, in case you want to override or predefine the icon key
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ name, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="from-primary/15 border-primary/30 text-primary-light hover:border-primary/50 relative inline-flex items-center gap-2 rounded-lg border bg-gradient-to-br to-transparent px-3 py-1.5 text-sm font-medium shadow-[0_0_10px_rgba(16,185,129,0.15)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]"
    >
      {/* Blurred green glow */}
      <div className="bg-primary/10 pointer-events-none absolute inset-0 rounded-lg blur-md" />

      {/* Icon */}
      <div className="relative z-10 flex h-5 w-5 items-center justify-center">
        <SkillIcon name={icon || name} />
      </div>

      {/* Label */}
      <span className="text-foreground/80 relative z-10 capitalize">{name}</span>
    </motion.div>
  );
};

export default TechnologyBadge;
