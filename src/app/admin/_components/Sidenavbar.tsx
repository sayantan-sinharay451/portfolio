'use client';
import React from 'react';
import { Award, Folder, LayoutDashboard, Menu, User, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const SideNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState('dashboard');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', value: 'dashboard' },
    { icon: Folder, label: 'Projects', value: 'projects' },
    { icon: Award, label: 'Skills', value: 'skills' },
    { icon: User, label: 'About', value: 'about' },
    { icon: Settings, label: 'Settings', value: 'settings' },
  ];

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        width: sidebarOpen ? '280px' : '80px',
      }}
      transition={{ duration: 0.3 }}
      className="flex min-h-screen flex-col border-r border-[var(--color-border)] bg-[var(--color-surface-elevated)]"
    >
      {/* Sidebar Header */}
      <div className="border-b border-[var(--color-border)] p-6">
        {sidebarOpen ? (
          <div>
            <h4 className="mb-1">Admin Dashboard</h4>
            <p className="text-sm text-[var(--color-text-secondary)]">Manage your portfolio</p>
          </div>
        ) : (
          <div className="flex justify-center">
            <LayoutDashboard size={24} className="text-[var(--color-primary)]" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.value}
              onClick={() => setActiveSection(item.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-4 py-3 transition-all duration-200 ${
                activeSection === item.value
                  ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'
              }`}
            >
              <Icon size={20} />
              {sidebarOpen && <span className="text-base">{item.label}</span>}
            </motion.button>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="border-t border-[var(--color-border)] p-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex w-full items-center justify-center gap-3 rounded-[var(--radius-md)] px-4 py-3 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
        >
          <Menu size={20} />
          {sidebarOpen && <span>Collapse</span>}
        </button>
      </div>
    </motion.aside>
  );
};

export default SideNavbar;
