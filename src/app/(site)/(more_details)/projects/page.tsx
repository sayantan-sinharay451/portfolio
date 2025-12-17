'use client';
import { motion } from 'motion/react';
import PageHeading, { PageHeadingProps } from '../_components/PageHeading';
import ProjectCard from '@/components/site/ProjectCard';
import { projectSeeds } from '@/lib/mock/Project';
import { IProject } from '@/lib/models/Project';

const pageHeadingData: PageHeadingProps = {
  title: 'My Projects',
  subTitle:
    "A collection of projects I've worked on, showcasing my skills and passion for building great software",
};
const projects = projectSeeds as unknown as IProject[];

export default function ProjectsPage() {
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
        ></motion.div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing">
        <motion.div layout className="grid grid-cols-1 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
