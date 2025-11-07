import { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', value: '' },
  { label: 'About', value: 'about' },
  { label: 'Projects', value: 'projects' },
  { label: 'Contact', value: 'contact' },
];

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-background/60 sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="text-foreground focus-visible:ring-ring rounded-md text-xl font-semibold tracking-tight transition-colors focus:outline-none focus-visible:ring-2 md:text-2xl"
        >
          <span>&lt;</span>
          <span className="text-primary mx-1 font-mono">Devfolio</span>
          <span>/&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              href={`/${item.value}`}
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`relative py-2 font-medium transition-all duration-200 ${
                currentPage === item.value
                  ? 'text-primary'
                  : 'text-muted hover:text-foreground hover:-translate-y-px'
              } focus-visible:ring-ring rounded-sm focus:outline-none focus-visible:ring-1`}
            >
              {item.label}
              {currentPage === item.value && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="bg-primary absolute right-0 bottom-0 left-0 h-[2px] rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}

          {/* Admin Link */}
          {/* <button
            onClick={() => onNavigate("admin")}
            title="Admin Dashboard"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-all duration-200 ${currentPage === "admin"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted hover:text-primary hover:bg-surface-elevated"
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
          >
            <Lock size={16} strokeWidth={1.8} />
            <span className="text-sm">Admin</span>
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-muted hover:text-primary focus-visible:ring-ring rounded-md p-2 transition-colors focus:outline-none focus-visible:ring-2 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="border-border bg-surface-elevated/90 border-t shadow-md backdrop-blur-lg md:hidden"
          >
            <div className="container flex flex-col gap-3 py-6">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full py-2 text-left font-semibold transition-colors ${
                    currentPage === item.value ? 'text-primary' : 'text-muted hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="border-border mt-4 border-t pt-4">
                <button
                  onClick={() => {
                    onNavigate('admin');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 py-2 text-left ${
                    currentPage === 'admin' ? 'text-primary' : 'text-muted hover:text-primary'
                  }`}
                >
                  <Lock size={16} />
                  <span className="font-medium">Admin Dashboard</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
