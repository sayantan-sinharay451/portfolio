'use client';

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'sayatansinharay@gmail.com',
      href: 'mailto:sayatansinharay@gmail.com',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sayantan-sinharay',
      href: 'https://www.linkedin.com/in/sayantan-sinharay',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/Sayantansinharay451',
      href: 'https://github.com/Sayantansinharay451',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 8777549369',
      href: 'tel:+918777549369',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: null,
    },
  ];

  return (
    <div className="space-y-6">
      <p className="max-w-md text-gray-400">
        Feel free to reach out through any of these channels.
      </p>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="hover:border-primary/40 flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 p-5 transition"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black/60">
              {item.icon}
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-300">{item.label}</span>

              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  className="hover:text-primary text-base text-gray-400 transition"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-base text-gray-400">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
