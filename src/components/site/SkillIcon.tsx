'use client';

import React from 'react';
import * as simpleIcons from 'simple-icons';
import { Icon } from '@iconify/react';

interface SkillIconProps {
  name: string;
  size?: number;
  variant?: 'color' | 'monochrome';
  className?: string;
}

/* ----------------------------- OVERRIDES ----------------------------- */

const SIMPLE_ICON_OVERRIDES: Record<string, string> = {
  'c++': 'siCplusplus',
  cpp: 'siCplusplus',
  cplusplus: 'siCplusplus',
  'c#': 'siCsharp',
  csharp: 'siCsharp',
};

const DEVICON_OVERRIDES: Record<string, string> = {
  'c++': 'devicon:cplusplus',
  cpp: 'devicon:cplusplus',
  cplusplus: 'devicon:cplusplus',
  'c#': 'devicon:csharp',
  csharp: 'devicon:csharp',
};

/* --------------------------- NORMALIZATION --------------------------- */

function normalizeSimpleIconKey(name: string) {
  const lower = name.toLowerCase().trim();

  // Handle overrides first
  if (SIMPLE_ICON_OVERRIDES[lower]) return SIMPLE_ICON_OVERRIDES[lower];

  // Convert dots to "dot" for frameworks like next.js → nextdotjs
  const dotConverted = lower.replace(/\./g, 'dot');

  // Remove weird symbols except alphanumeric
  const cleaned = dotConverted
    .replace(/\s+/g, '')
    .replace(/[-_]+/g, '')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase();

  return 'si' + cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function normalizeDevIconName(name: string) {
  const lower = name.toLowerCase().trim();

  // Handle Devicon overrides
  if (DEVICON_OVERRIDES[lower]) return DEVICON_OVERRIDES[lower];

  // Generic Devicon normalization
  const cleaned = lower
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '')
    .toLowerCase();

  return `devicon:${cleaned}`;
}

/* ------------------------------- COMPONENT ------------------------------ */

const SkillIcon: React.FC<SkillIconProps> = ({ name, size = 48, variant = 'color', className }) => {
  const simpleKey = normalizeSimpleIconKey(name);
  const devIconKey = normalizeDevIconName(name);

  // Simple Icons instance
  const simpleIcon = (simpleIcons as any)[simpleKey];

  // Fallback UI
  const fallback = (
    <div
      style={{ width: size, height: size }}
      className="bg-muted flex items-center justify-center rounded"
    >
      <span className="text-xs opacity-60">{name.charAt(0).toUpperCase()}</span>
    </div>
  );

  // MONOCHROME
  if (variant === 'monochrome') {
    if (!simpleIcon?.svg) return fallback;
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        dangerouslySetInnerHTML={{ __html: simpleIcon.svg }}
        className={className}
      />
    );
  }

  // COLOR
  return (
    <Icon icon={devIconKey} width={size} height={size} fallback={fallback} className={className} />
  );
};

export default SkillIcon;
