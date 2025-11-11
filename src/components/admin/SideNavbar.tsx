'use client';
import React from 'react';
import { Award, Folder, LayoutDashboard, Settings, Menu, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SideNavbar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '/admin',
    },
    {
      icon: Folder,
      label: 'Projects',
      href: '/admin/projects',
    },
    { icon: Award, label: 'Skills', href: '/admin/skills' },

    {
      icon: Settings,
      label: 'Settings',
      href: '/admin/settings',
    },
  ];

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        width: isCollapsed ? '80px' : '280px',
      }}
      transition={{ duration: 0.3 }}
      className="border-border bg-surface-elevated relative z-50 flex min-h-screen flex-col border-r"
    >
      {/* Sidebar Header */}
      <div className="border-border flex items-center justify-between border-b p-6">
        {!isCollapsed && <h4 className="mb-1">Admin Dashboard</h4>}
        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={20} />
        </motion.button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.label}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex w-full items-center gap-3 rounded-md px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary shadow-primary/50 shadow-inner'
                    : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                }`}
              >
                <Icon size={20} />
                {!isCollapsed && <span className="text-base">{item.label}</span>}
              </motion.button>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="border-border border-t p-4">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-text-secondary hover:bg-surface hover:text-text-primary flex w-full items-center justify-center gap-3 rounded-md px-4 py-3 transition-all duration-200"
          >
            <ArrowLeft size={20} />
            {!isCollapsed && <span>Back to Home</span>}
          </motion.button>
        </Link>
      </div>
    </motion.aside>
  );
};

export default SideNavbar;
