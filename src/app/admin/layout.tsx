'use client';
import React from 'react';
import Sidenavbar from './_components/Sidenavbar';
import Bottombar from './_components/Bottombar';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className='flex h-screen bg-surface'>
      <div className={`lg:block ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Sidenavbar />
      </div>
      <main className='flex-1 overflow-y-auto pb-16 lg:pb-0'>
        <div className='p-4 lg:hidden'>
          <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} variant='ghost' size='icon'>
            <Menu />
          </Button>
        </div>
        {children}
      </main>
      <Bottombar />
    </div>
  );
};

export default AdminLayout;
