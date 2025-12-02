'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import PageHeading, { PageHeadingProps } from '../_components/PageHeading';
import ProjectCard from '@/components/site/ProjectCard';
import { projectSeeds } from '@/lib/mock/Project';

const categories = ['All', 'Web Apps', 'Mobile', 'Open Source', 'UI/UX'];
const pageHeadingData: PageHeadingProps = {
  title: 'My Projects',
  subTitle:
    "A collection of projects I've worked on, showcasing my skills and passion for building great software",
};
const projects = projectSeeds;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <PageHeading {...pageHeadingData} />

      {/* Filter Section */}
      <section className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-[var(--radius-full)] px-6 py-3 font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]'
                  : 'border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-text)]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing">
        <motion.div layout className="grid grid-cols-1 gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <div className="mx-auto max-w-md">
              <p className="mb-4 text-lg text-[var(--color-text-secondary)]">
                No projects found in this category.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Try selecting a different category to see more projects.
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
