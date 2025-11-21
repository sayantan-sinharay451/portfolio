'use client';

import React, { useEffect, useState } from 'react';
import PageHeading from '../_components/PageHeading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProjectRow from './_components/ProjectRow';
import AdminModal from '../_components/AdminModal';
import ProjectForm from './_components/ProjectFrom';
import { Button } from '@/components/ui/button';
import { IProject } from '@/lib/models/Project';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [activeProjects, setActiveProjects] = useState<IProject[]>([]);
  const [archivedProjects, setArchivedProjects] = useState<IProject[]>([]);

  // TODO: replace mock with API fetch
  useEffect(() => {
    const mock = [
      {
        _id: '1',
        title: 'Project Alpha',
        description: 'A web application for managing tasks.',
        technologies: ['React'],
        isArchived: false,
      },
      {
        _id: '2',
        title: 'Project Beta',
        description: 'A mobile app for fitness.',
        technologies: ['React Native'],
        isArchived: true,
      },
      {
        _id: '3',
        title: 'Project Gamma',
        description: 'E-commerce platform.',
        technologies: ['Next.js'],
        isArchived: false,
      },
    ];

    setProjects(mock);
    setActiveProjects(mock.filter((p) => !p.isArchived));
    setArchivedProjects(mock.filter((p) => p.isArchived));
  }, []);

  return (
    <>
      <PageHeading title="Projects" subtitle="Manage your projects and portfolio work" />

      <div className="item-center flex justify-between">
        <div>
          <h3 className="text-xl font-bold">All Projects</h3>
          <p className="text-muted-foreground">Total projects: {projects.length}</p>
        </div>
        <AdminModal
          triggerComponent={<Button>Add New Project</Button>}
          title="Add Project"
          description="Create a new project"
        >
          <ProjectForm onSubmit={(values) => console.log(values)} />
        </AdminModal>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="item-start bg-primary mb-4">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        {/* Active Projects */}
        <TabsContent value="active">
          <div className="grid gap-4">
            {activeProjects.map((project) => (
              <ProjectRow key={project._id} project={project} />
            ))}
          </div>
          {activeProjects.length === 0 && (
            <p className="text-muted-foreground mt-4">No active projects yet.</p>
          )}
        </TabsContent>

        {/* Archived */}
        <TabsContent value="archived">
          <div className="grid gap-4">
            {archivedProjects.map((project) => (
              <ProjectRow key={project._id} project={project} />
            ))}
          </div>
          {archivedProjects.length === 0 && (
            <p className="text-muted-foreground mt-4">No archived projects.</p>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProjectsPage;
