'use client';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="border-border flex items-center justify-between border-b p-6">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-text-secondary">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
