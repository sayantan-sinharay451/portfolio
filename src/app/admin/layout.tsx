'use client';
import React from 'react';
import SideNavbar from '../../components/admin/SideNavbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <div className="bg-surface fixed flex h-screen w-full">
      <SideNavbar />
      <div className="flex h-screen w-full flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container flex-1 overflow-y-auto"
          key={pathName}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLayout;
