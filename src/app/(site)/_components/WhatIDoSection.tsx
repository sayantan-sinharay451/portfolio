'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Zap } from 'lucide-react';
import FeatureCard from '@/components/site/FeatureCard';

const WhatIDoSection = () => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable solutions',
    },
    {
      icon: Layers,
      title: 'Modern Stack',
      description: 'Using cutting-edge technologies and best practices',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized for speed and user experience',
    },
  ];

  return (
    <section className="section-spacing bg-secondary-dark/50 backdrop-blur-3xl">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-primary font-heading text-4xl">What I Do</h2>
          <p className="font-contrast text-foreground max-w-2xl font-medium">
            My approach to development and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <FeatureCard
                  Icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
