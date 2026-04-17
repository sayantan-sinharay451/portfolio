import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Sayantansinharay451', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sayantan-sinharay', icon: Linkedin },
  { label: 'Email', href: 'mailto:sayatansinharay@gmail.com', icon: Mail },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-md">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_0.6fr] md:py-16">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-sm text-primary-light">&lt;Devfolio /&gt;</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">
            Building thoughtful, performant interfaces for the web.
          </h2>
          <p className="max-w-xl text-base text-[var(--color-text-secondary)]">
            Open to frontend, full-stack, and product-minded engineering roles. If you are hiring
            or want to collaborate, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="text-primary-light inline-flex items-center gap-2 text-sm font-semibold transition hover:text-white"
          >
            Start a conversation
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Explore
            </p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-text-secondary)] transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-[var(--color-text-secondary)] inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
