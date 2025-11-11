import React from 'react';
import PageHeading from '../_components/PageHeading';
import { motion } from 'framer-motion';
import ProjectRow from './_components/ProjectRow';
import { IProject } from '@/lib/models/Project';
import AdminModal from '../_components/AdminModal';
import ProjectsTable from '../_components/ProjectsTable';

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: 'no-store', // disables caching for fresh data each request
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const projects = [
    {
      title: 'Project Alpha',
      description: 'A web application for managing tasks and projects.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'Web App',
    },
    {
      title: 'Project Beta',
      description: 'A mobile app for tracking fitness goals. ',
      technologies: ['React Native', 'Firebase'],
      category: 'Mobile App',
    },
    {
      title: 'Project Gamma',
      description:
        'An e-commerce platform for selling digital products. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit at molestiae illo quaerat fugit laudantium quisquam quidem sit maxime blanditiis. Rerum, magni? Nostrum suscipit nemo itaque excepturi cupiditate, earum sed omnis magni ratione minus illum, provident voluptatibus et possimus dolore. Consequatur, reprehenderit esse dolore corrupti facilis optio. Minus laborum tempore iusto perspiciatis commodi doloremque voluptas, explicabo nam dolore illum ad dolores fugit soluta animi. Quam unde alias nobis quia quisquam provident dolorem nesciunt ab, repellat corrupti eum recusandae iusto excepturi nulla magni distinctio reprehenderit officia quaerat culpa in fuga repellendus impedit vel atque! Culpa in exercitationem repellat praesentium. Dicta omnis dolorum sint incidunt blanditiis ipsam, laboriosam minus explicabo tenetur ipsa, ab iure aut quis at quibusdam assumenda aliquam laudantium debitis. Nisi enim esse aperiam voluptate cumque, et minus modi molestias magni repellendus harum tempora odio accusantium voluptatem quam nemo provident aliquid officiis? Doloribus cum deleniti unde inventore repellat nesciunt omnis nostrum animi consectetur molestias, esse explicabo, facere voluptates quam quisquam totam eveniet nihil. Beatae odit delectus eaque, odio minus vel aliquam tempora perferendis ipsum quas sequi ducimus voluptates asperiores perspiciatis repudiandae, tenetur accusamus? Voluptatum sapiente similique doloremque non iusto numquam excepturi dolores veniam laudantium totam modi nesciunt, optio quas magnam.',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      category: 'E-commerce',
    },
  ];

  return (
    <div>
      <PageHeading title="Projects" subtitle="Manage your projects and case studies" />
      <div className="flex-1">
        <div>
          <h3 className="text-xl font-bold">All Projects</h3>
          <p className="text-text-secondary">You have total of {projects.length} projects</p>
        </div>
        {projects.map((project: IProject) => {
          return <ProjectRow key={project._id as string} project={project} />;
        })}
      </div>
      <ProjectsTable />

      <AdminModal isOpenExternal={true} title="helo" description="hello">
        hello
      </AdminModal>
    </div>
  );
};

export default ProjectsPage;
