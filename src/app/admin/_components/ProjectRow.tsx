'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectRowProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    category: string;
  };
}

const ProjectRow = ({ project }: ProjectRowProps) => {
  return (
    <motion.tr
      whileHover={{ scale: 1.01 }}
      className='border-b border-border transition-all duration-200 hover:bg-surface'
    >
      <td className='p-4'>{project.title}</td>
      <td className='p-4 text-text-secondary'>{project.description}</td>
      <td className='p-4'>
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant='secondary'>
              {tech}
            </Badge>
          ))}
        </div>
      </td>
      <td className='p-4'>
        <Badge variant='outline'>{project.category}</Badge>
      </td>
      <td className='p-4'>
        <div className='flex gap-2'>
          <Button variant='ghost' size='icon'>
            <Pencil size={16} />
          </Button>
          <Button variant='ghost' size='icon' className='text-red-500'>
            <Trash2 size={16} />
          </Button>
        </div>
      </td>
    </motion.tr>
  );
};

export default ProjectRow;
