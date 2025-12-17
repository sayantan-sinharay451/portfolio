'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/site/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading, { SectionHeadingProps } from '@/components/site/SectionHeading';
import ProjectsGrid from '@/components/site/ProjectsGrid';
import { projectSeeds } from '@/lib/mock/Project';

const sectionHeadingData: SectionHeadingProps = {
  heading: 'Featured Projects',
  subheading: 'A selection of my recent work',
  id: 'featured-projects-section',
};
const FeatureProjects = () => {
  const initialProjects = projectSeeds;

  return (
    <section className="section-spacing bg-surface">
      <div className="container">
        <SectionHeading {...sectionHeadingData} />
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {initialProjects.slice(0, 3).map((project, i) => (
            <ProjectCard {...project} key={i} isFeatured={true} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="secondary" className="border-none bg-transparent shadow-none">
            <Link href={'/projects'} className="flex items-center gap-1">
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
