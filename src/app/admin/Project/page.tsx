'use client';
import React from 'react';
import Header from '../_components/Header';
import ProjectsTable from '../_components/ProjectsTable';

const ProjectsPage = () => {
  return (
    <div className='flex h-screen flex-col'>
      <Header title='Projects' subtitle='Manage your projects and case studies' />
      <div className='flex-1 overflow-y-auto'>
        <ProjectsTable />
      </div>
    </div>
  );
};

export default ProjectsPage;
