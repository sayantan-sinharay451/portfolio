"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
// import { ProjectCard } from '../components/ProjectCard';

interface ProjectsPageProps {
  projects: any[];
  onProjectClick: (project: any) => void;
}

const categories = ['All', 'Web Apps', 'Mobile', 'Open Source', 'UI/UX'];

export default function ProjectsPage({ projects, onProjectClick }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-12 md:pt-20"
          >
            <h1 className="mb-8">My Projects</h1>
            <p className="text-[var(--color-text-secondary)] max-w-3xl text-lg">
              A collection of projects I've worked on, showcasing my skills and passion for building great software
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container py-12">
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
                className={`px-6 py-3 rounded-[var(--radius-full)] transition-all duration-200 font-medium ${activeCategory === category
                  ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]'
                  : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-text)]'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* {filteredProjects.map((project) => (
              // <ProjectCard
              //   key={project.id}
              //   {...project}
              //   onClick={() => onProjectClick(project)}
              // />
            ))} */}
          </motion.div>

          {/* {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <p className="text-[var(--color-text-secondary)] text-lg mb-4">
                  No projects found in this category.
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  Try selecting a different category to see more projects.
                </p>
              </div>
            </motion.div>
          )} */}
        </div>
      </section>
    </div>
  );
}