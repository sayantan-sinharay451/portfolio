"use client";
import React from 'react';

interface PageHeadingProps {
  title: string;
  subtitle?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 px-4">
      <h1 className="text-3xl font-bold text-primary-text tracking-tight">{title}</h1>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default PageHeading;
