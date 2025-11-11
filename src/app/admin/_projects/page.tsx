'use client';

import { useEffect, useState } from 'react';
import { ProjectModal } from '@/components/admin/ProjectModal';
import { ProjectFormValues } from '@/lib/validators/projectSchema';
import { Button } from '@/components/ui/button';
import AdminModal from '../_components/AdminModal';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectFormValues[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    const response = await fetch('/api/projects');
    const data = await response.json();
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <ProjectModal onSuccess={fetchProjects} />
        <AdminModal title="helo">hello</AdminModal>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project._id} className="rounded-lg border p-4 shadow-md">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-2">
                {/* <strong>Tech Stack:</strong> {project.techStack.join(', ')} */}
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <ProjectModal project={project} onSuccess={fetchProjects} />
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
