import { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { label: 'Home', value: 'home' },
  { label: 'About', value: 'about' },
  { label: 'Projects', value: 'projects' },
  { label: 'Contact', value: 'contact' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-surface)]/90 backdrop-blur-lg border-b border-[var(--color-border)]">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-lg font-semibold tracking-tight hover:text-[var(--color-primary)] transition-colors bg-red-400"
          >
            <span></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`relative py-2 transition-colors ${currentPage === item.value
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                  }`}
              >
                {item.label}
                {currentPage === item.value && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Admin Link - Subtle, right side */}
            <button
              onClick={() => onNavigate('admin')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-md)] transition-all ${currentPage === 'admin'
                ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]'
                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-primary)]'
                }`}
              title="Admin Dashboard"
            >
              <Lock size={16} />
              <span className="text-sm">Admin</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]"
          >
            <div className="container py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors ${currentPage === item.value
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-secondary)]'
                    }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Admin Link - Mobile */}
              <button
                onClick={() => {
                  onNavigate('admin');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 text-left py-2 mt-4 pt-4 border-t border-[var(--color-border)] transition-colors ${currentPage === 'admin'
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-text-secondary)]'
                  }`}
              >
                <Lock size={16} />
                <span>Admin Dashboard</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
