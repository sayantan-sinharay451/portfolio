'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Copy,
  Check,
  Users,
} from 'lucide-react';

export default function ContactInfo() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      window.prompt('Copy to clipboard:', value);
    }
  };

  const contactBoxes = [
    {
      icon: <Mail size={22} />,
      label: 'E-mail',
      value: 'sayatansinharay@gmail.com',
      href: 'mailto:sayatansinharay@gmail.com',
      actionType: 'link' as const,
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone number',
      value: '+91 8777549369',
      href: 'tel:+918777549369',
      actionType: 'copy' as const,
    },
    {
      icon: <MapPin size={22} />,
      label: 'Address',
      value: 'Pune, Maharashtra, India',
      href: null,
      actionType: 'copy' as const,
      colSpan: true,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      href: 'https://github.com/Sayantansinharay451',
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sayantan-sinharay',
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-white/5 pb-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400">
          <Users size={20} />
        </div>
        <div>
          <h3 className="font-heading text-[15px] font-semibold text-white">Contact information</h3>
          <p className="mt-0.5 text-xs text-zinc-400">
            Feel free to reach out through any of these channels.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Contact Boxes Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contactBoxes.map((box, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 rounded-xl border border-white/[0.06] bg-black/30 p-4 transition-all duration-200 hover:border-emerald-500/15 ${
                box.colSpan ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/10 bg-emerald-950/20 text-emerald-400/80">
                {box.icon}
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm text-zinc-300">{box.value}</span>
                <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  {box.label}
                </span>
              </div>

              {box.actionType === 'link' && box.href && (
                <a
                  href={box.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-black/40 text-zinc-500 transition-all duration-200 hover:border-emerald-500/20 hover:text-emerald-400"
                  aria-label={`Open ${box.label}`}
                >
                  <ExternalLink size={15} />
                </a>
              )}

              {box.actionType === 'copy' && (
                <button
                  type="button"
                  onClick={() => handleCopy(box.value, index)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-black/40 text-zinc-500 transition-all duration-200 hover:border-emerald-500/20 hover:text-emerald-400"
                  aria-label={`Copy ${box.label}`}
                >
                  {copiedIndex === index ? (
                    <Check size={15} className="text-emerald-400" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Socials Section */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400">
              <Users size={18} />
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-white">Socials</h3>
              <p className="mt-0.5 text-[11px] text-zinc-400">Follow me on these platforms.</p>
            </div>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/30 px-5 py-3 text-sm text-zinc-400 transition-all duration-200 hover:border-emerald-500/20 hover:text-emerald-400"
                aria-label={social.label}
              >
                {social.icon}
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
