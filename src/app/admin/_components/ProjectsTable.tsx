'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import ProjectRow from './ProjectRow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A web application for managing tasks and projects.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Web App',
  },
  {
    title: 'Project Beta',
    description: 'A mobile app for tracking fitness goals.',
    technologies: ['React Native', 'Firebase'],
    category: 'Mobile App',
  },
  {
    title: 'Project Gamma',
    description: 'An e-commerce platform for selling digital products.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    category: 'E-commerce',
  },
];

const ProjectsTable = () => {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>All Projects</h3>
          <p className='text-text-secondary'>{projects.length} total projects</p>
        </div>
        <Button>
          <PlusCircle size={20} className='mr-2' />
          Add New Project
        </Button>
      </div>

      {/* Desktop Table */}
      <div className='mt-6 hidden overflow-x-auto lg:block'>
        <table className='w-full table-auto'>
          <thead className='text-left text-text-secondary'>
            <tr>
              <th className='p-4'>Title</th>
              <th className='p-4'>Description</th>
              <th className='p-4'>Technologies</th>
              <th className='p-4'>Category</th>
              <th className='p-4'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <ProjectRow key={index} project={project} />
              ))
            ) : (
              <tr>
                <td colSpan={5} className='p-4 text-center text-text-secondary'>
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className='mt-6 grid gap-4 lg:hidden'>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-text-secondary'>{project.description}</p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant='secondary'>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className='mt-4'>
                  <Badge variant='outline'>{project.category}</Badge>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className='text-center text-text-secondary'>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsTable;
