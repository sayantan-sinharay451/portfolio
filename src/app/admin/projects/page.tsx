'use client';

import React, { useEffect, useRef, useState } from 'react';
import PageHeading from '../_components/PageHeading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProjectRow from './_components/ProjectRow';
import AdminModal from '../_components/AdminModal';
import ProjectForm from './_components/ProjectFrom';
import { Button } from '@/components/ui/button';
import PaginationControls from '@/components/admin/PaginationControls';
import { IProject } from '@/lib/models/Project';

type Pagination = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

const PAGE_LIMIT = 10;

const ProjectsPage = () => {
  const [activeProjects, setActiveProjects] = useState<IProject[]>([]);
  const [archivedProjects, setArchivedProjects] = useState<IProject[]>([]);

  const [activePage, setActivePage] = useState(1);
  const [archivedPage, setArchivedPage] = useState(1);

  const [activePagination, setActivePagination] = useState<Pagination>({
    page: 1,
    limit: PAGE_LIMIT,
    totalItems: 0,
    totalPages: 1,
  });

  const [archivedPagination, setArchivedPagination] = useState<Pagination>({
    page: 1,
    limit: PAGE_LIMIT,
    totalItems: 0,
    totalPages: 1,
  });

  const [activeLoading, setActiveLoading] = useState(false);
  const [archivedLoading, setArchivedLoading] = useState(false);

  const [activeError, setActiveError] = useState<string | null>(null);
  const [archivedError, setArchivedError] = useState<string | null>(null);

  // Keep abort controllers to prevent duplicate/overlapping fetches
  const activeControllerRef = useRef<AbortController | null>(null);
  const archivedControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // fetch active projects
    const controller = new AbortController();
    activeControllerRef.current?.abort();
    activeControllerRef.current = controller;

    setActiveLoading(true);
    setActiveError(null);

    fetch(`/api/projects?page=${activePage}&limit=${PAGE_LIMIT}&archived=false`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((json) => {
        if (controller.signal.aborted) return;
        const pag = json.pagination || {
          page: activePage,
          limit: PAGE_LIMIT,
          totalItems: 0,
          totalPages: 1,
        };
        // If server reports fewer pages than our current page (e.g., items removed), clamp and refetch
        if (pag.totalPages && pag.page > pag.totalPages) {
          setActivePage(pag.totalPages);
          return;
        }

        setActiveProjects(json.data || []);
        setActivePagination(pag);
      })
      .catch((err) => {
        if (controller.signal.aborted) return;
        console.error('Failed to fetch active projects', err);
        setActiveError('Failed to fetch active projects');
      })
      .finally(() => {
        if (!controller.signal.aborted) setActiveLoading(false);
      });

    return () => controller.abort();
  }, [activePage]);

  useEffect(() => {
    // fetch archived projects
    const controller = new AbortController();
    archivedControllerRef.current?.abort();
    archivedControllerRef.current = controller;

    setArchivedLoading(true);
    setArchivedError(null);

    fetch(`/api/projects?page=${archivedPage}&limit=${PAGE_LIMIT}&archived=true`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((json) => {
        if (controller.signal.aborted) return;
        const pag = json.pagination || {
          page: archivedPage,
          limit: PAGE_LIMIT,
          totalItems: 0,
          totalPages: 1,
        };
        if (pag.totalPages && pag.page > pag.totalPages) {
          setArchivedPage(pag.totalPages);
          return;
        }

        setArchivedProjects(json.data || []);
        setArchivedPagination(pag);
      })
      .catch((err) => {
        if (controller.signal.aborted) return;
        console.error('Failed to fetch archived projects', err);
        setArchivedError('Failed to fetch archived projects');
      })
      .finally(() => {
        if (!controller.signal.aborted) setArchivedLoading(false);
      });

    return () => controller.abort();
  }, [archivedPage]);

  const totalProjects = activePagination.totalItems + archivedPagination.totalItems;

  return (
    <>
      <PageHeading title="Projects" subtitle="Manage your projects and portfolio work" />

      <div className="item-center flex justify-between">
        <div>
          <h3 className="text-xl font-bold">All Projects</h3>
          <p className="text-muted-foreground">Total projects: {totalProjects}</p>
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
            {activeLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-muted animate-pulse rounded-md p-4" />
                ))
              : activeProjects.length > 0
                ? activeProjects.map((project) => (
                    <ProjectRow key={(project as any)._id} project={project as any} />
                  ))
                : !activeLoading && (
                    <p className="text-muted-foreground mt-4">No active projects yet.</p>
                  )}
          </div>

          {activeError && <p className="mt-4 text-red-500">{activeError}</p>}

          <PaginationControls
            page={activePagination.page}
            totalPages={activePagination.totalPages}
            onPageChange={(p) =>
              setActivePage(Math.max(1, Math.min(p, activePagination.totalPages)))
            }
            isLoading={activeLoading}
          />
        </TabsContent>

        {/* Archived */}
        <TabsContent value="archived">
          <div className="grid gap-4">
            {archivedLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-muted animate-pulse rounded-md p-4" />
                ))
              : archivedProjects.length > 0
                ? archivedProjects.map((project) => (
                    <ProjectRow key={(project as any)._id} project={project as any} />
                  ))
                : !archivedLoading && (
                    <p className="text-muted-foreground mt-4">No archived projects.</p>
                  )}
          </div>

          {archivedError && <p className="mt-4 text-red-500">{archivedError}</p>}

          <PaginationControls
            page={archivedPagination.page}
            totalPages={archivedPagination.totalPages}
            onPageChange={(p) =>
              setArchivedPage(Math.max(1, Math.min(p, archivedPagination.totalPages)))
            }
            isLoading={archivedLoading}
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProjectsPage;
