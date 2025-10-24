import { useState } from "react";
import { Menu, X, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Projects", value: "projects" },
  { label: "Contact", value: "contact" },
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
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/60"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="text-xl md:text-2xl font-semibold tracking-tight text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-colors"
        >
          <span>&lt;</span>
          <span className="mx-1 text-primary font-mono">Devfolio</span>
          <span>/&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`relative py-2 font-medium transition-all duration-200 ${currentPage === item.value
                ? "text-primary"
                : "text-muted hover:text-foreground hover:-translate-y-px"
                } focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm`}
            >
              {item.label}
              {currentPage === item.value && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}

          {/* Admin Link */}
          <button
            onClick={() => onNavigate("admin")}
            title="Admin Dashboard"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-all duration-200 ${currentPage === "admin"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted hover:text-primary hover:bg-surface-elevated"
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
          >
            <Lock size={16} strokeWidth={1.8} />
            <span className="text-sm">Admin</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-border bg-surface-elevated/90 backdrop-blur-lg shadow-md"
          >
            <div className="container py-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 font-semibold transition-colors ${currentPage === item.value
                    ? "text-primary"
                    : "text-muted hover:text-foreground"
                    }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-border mt-4 pt-4">
                <button
                  onClick={() => {
                    onNavigate("admin");
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full text-left py-2 ${currentPage === "admin"
                    ? "text-primary"
                    : "text-muted hover:text-primary"
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
