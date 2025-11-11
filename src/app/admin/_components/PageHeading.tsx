'use client';
import React from 'react';

interface PageHeadingProps {
  title: string;
  subtitle?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="py-8">
      <h1 className="text-primary text-3xl font-bold tracking-tight">{title}</h1>
      {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
    </div>
  );
};

export default PageHeading;
