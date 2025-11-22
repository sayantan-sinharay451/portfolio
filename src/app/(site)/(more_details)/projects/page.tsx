'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import PageHeading, { PageHeadingProps } from '../_components/PageHeading';
import ProjectCard from '@/components/site/ProjectCard';

const categories = ['All', 'Web Apps', 'Mobile', 'Open Source', 'UI/UX'];
const pageHeadingData: PageHeadingProps = {
  title: 'My Projects',
  subTitle:
    "A collection of projects I've worked on, showcasing my skills and passion for building great software",
};
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration',
    longDescription:
      'Built a comprehensive e-commerce platform with features including product catalog, shopping cart, checkout process, payment integration with Stripe, order management, and admin dashboard. The application uses React for the frontend and Node.js with Express for the backend API.',
    image:
      'https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjA0NzczOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'Web Apps',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    longDescription:
      'Developed a collaborative task management application with real-time synchronization using WebSockets. Features include task creation, assignment, status tracking, comments, file attachments, and team collaboration tools. Implemented responsive design for mobile and desktop use.',
    image:
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MDUwNjYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
    category: 'Web Apps',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking with interactive maps',
    longDescription:
      'Created a comprehensive weather dashboard that displays current conditions, forecasts, and historical data. Integrated multiple weather APIs and implemented interactive maps using Mapbox. Features location search, favorites, and customizable widgets.',
    image:
      'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDQ1MjExN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Next.js', 'API Integration', 'Mapbox', 'Chart.js'],
    category: 'Web Apps',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    longDescription:
      'Built an analytics dashboard that aggregates data from multiple social media platforms. Features include engagement metrics, audience insights, post scheduling, and detailed analytics reports. Implemented data visualization using Recharts.',
    image:
      'https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjA0NzczOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Recharts', 'REST API', 'Material-UI'],
    category: 'Web Apps',
  },
  {
    id: 5,
    title: 'Portfolio Generator',
    description: 'Open-source tool for creating developer portfolios',
    longDescription:
      'Developed an open-source portfolio generator that allows developers to create professional portfolios without coding. Features include customizable templates, drag-and-drop interface, and one-click deployment to various hosting platforms.',
    image:
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MDUwNjYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'Open Source',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Code Snippet Manager ddddeeeeeeeeeeeeeeeeee',
    description: 'Organize and share code snippets efficiently',
    longDescription:
      'Created a code snippet manager with syntax highlighting, tagging system, and sharing capabilities. Features include collections, search functionality, version history, and collaboration tools for teams.',
    image:
      'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDQ1MjExN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Vue.js', 'Firebase', 'Prism.js', 'CSS3'],
    category: 'Open Source',
    githubUrl: 'https://github.com',
  },
];

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
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
