'use client';
import { Navbar } from '@/components/site/Navbar';
import { useEffect, useState } from 'react';
import { AnimatedBackground } from '@/components/site/AnimatedBackground';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    const path = pathName.split('/')[1] || '';
    setCurrentPage(path);
  }, [pathName]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="relative h-full w-full overflow-y-scroll">
        <AnimatedBackground />
        {children}
      </div>
    </div>
  );
}
