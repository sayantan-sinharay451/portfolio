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
    <header className='flex items-center justify-between border-b border-border p-6'>
      <div>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-text-secondary'>{subtitle}</p>
      </div>
      <Button variant='outline' size='icon'>
        <LogOut size={20} />
      </Button>
    </header>
  );
};

export default Header;
