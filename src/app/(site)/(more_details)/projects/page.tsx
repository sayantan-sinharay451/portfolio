'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import PageHeading, { PageHeadingProps } from '../_components/PageHeading';
import ProjectCard from '@/components/site/ProjectCard';
import { projectSeeds } from '@/lib/mock/Project';
// project types are defined locally for the page
import PaginationControls from '@/components/site/PaginationControls';

const pageHeadingData: PageHeadingProps = {
  title: 'My Projects',
  subTitle:
    "A collection of projects I've worked on, showcasing my skills and passion for building great software",
};
type LocalProject = {
  _id?: string;
  title: string;
  shortDescription?: string;
  description: string;
  technologies: string[];
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
};

const projects = projectSeeds as unknown as LocalProject[];
const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));

  const start = (page - 1) * PAGE_SIZE;
  const visible = projects.slice(start, start + PAGE_SIZE);

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
          {visible.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </motion.div>

        {/* Pagination UI */}
        <PaginationControls
          page={page}
          totalPages={totalPages}
          onPageChange={(p) => setPage(Math.max(1, Math.min(p, totalPages)))}
        />
      </section>
    </div>
  );
}
