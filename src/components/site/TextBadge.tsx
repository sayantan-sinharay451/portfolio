// components/TextBadge.tsx
'use client';

import React from 'react';
import { Badge } from '../ui/badge';

interface TextBadgeProps {
  text: string;
  size?: 'sm' | 'md';
}

export default function TextBadge({ text, size = 'sm' }: TextBadgeProps) {
  const pad = size === 'sm' ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base';
  return (
    <Badge
      variant="outline"
      className={`inline-flex items-center rounded-full border border-white/10 bg-transparent ${pad} text-foreground/70`}
      title={text}
    >
      {text}
    </Badge>
  );
}
