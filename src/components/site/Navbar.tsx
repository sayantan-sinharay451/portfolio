'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', value: '' },
  { label: 'About', value: 'about' },
  { label: 'Projects', value: 'projects' },
  { label: 'Contact', value: 'contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [menuPathname, setMenuPathname] = useState(pathname);
  const currentPage = pathname.split('/')[1] || '';

  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-background/60 sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-foreground focus-visible:ring-ring rounded-md text-xl font-semibold tracking-tight transition-colors focus:outline-none focus-visible:ring-2 md:text-2xl"
        >
          <span>&lt;</span>
          <span className="text-primary mx-1 font-mono">Devfolio</span>
          <span>/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              href={`/${item.value}`}
              key={item.value}
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
                <Link
                  href={`/${item.value}`}
                  key={item.value}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full py-2 text-left font-semibold transition-colors ${
                    currentPage === item.value ? 'text-primary' : 'text-muted hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
