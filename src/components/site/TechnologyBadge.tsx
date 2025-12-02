'use client';

import React from 'react';
import SkillIcon from './SkillIcon';
import { Badge } from '../ui/badge';

interface TechnologyBadgeProps {
  name: string;
  iconKey?: string;
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md';
}

export default function TechnologyBadge({
  name,
  iconKey,
  variant = 'outline',
  size = 'sm',
}: TechnologyBadgeProps) {
  // Sizing presets
  const sizeMap = {
    sm: {
      padding: 'px-2 py-0.5',
      font: 'text-xs',
      iconBox: 'h-4 w-4',
      iconSize: 14,
    },
    md: {
      padding: 'px-3 py-1',
      font: 'text-sm',
      iconBox: 'h-5 w-5',
      iconSize: 18,
    },
  };

  const { padding, font, iconBox, iconSize } = sizeMap[size];

  // Variant styles
  const variantClasses =
    variant === 'outline'
      ? `
        border border-white/10
        bg-transparent
        text-foreground/80
        hover:border-primary/40
      `
      : `
        border border-primary/40
        text-white
        shadow-[0_0_15px_rgba(16,185,129,0.15)]
        bg-gradient-to-br
        from-primary/25
        via-secondary/20
        to-black/20
        backdrop-blur-sm
      `;

  return (
    <Badge
      variant="outline"
      className={`relative inline-flex items-center gap-2 rounded-lg transition-all duration-300 select-none ${padding} ${font} ${variantClasses} `}
      title={name}
    >
      {/* subtle glow layer ONLY for filled variant */}
      {variant === 'filled' && (
        <div
          aria-hidden
          className="bg-primary/10 pointer-events-none absolute inset-0 rounded-lg blur-md"
        />
      )}

      {/* icon + label */}
      <span className="relative z-10 flex items-center gap-2">
        {/* Icon */}
        <span className={`relative z-10 flex items-center justify-center ${iconBox}`}>
          <SkillIcon name={iconKey || name} size={iconSize} />
        </span>

        {/* Label */}
        <span className="relative z-10 capitalize">{name}</span>
      </span>
    </Badge>
  );
}
