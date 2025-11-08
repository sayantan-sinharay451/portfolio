'use client';
import React from 'react';
import {
  Award,
  Folder,
  LayoutDashboard,
  User,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Bottombar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '/admin',
    },
    {
      icon: Folder,
      label: 'Projects',
      href: '/admin/Project',
    },
    { icon: Award, label: 'Skills', href: '/admin/Skills' },

    {
      icon: Settings,
      label: 'Settings',
      href: '/admin/Settings',
    },
  ];

  return (
    <div className='fixed bottom-0 left-0 z-50 w-full border-t border-border bg-surface-elevated lg:hidden'>
      <div className='grid h-16 grid-cols-5'>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.label}>
              <div
                className={`flex h-full flex-col items-center justify-center gap-1 transition-all duration-200 ${
                  isActive ? 'text-primary' : 'text-text-secondary'
                }`}
              >
                <Icon size={24} />
                <span className='text-xs'>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Bottombar;
