'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { IProject } from '@/lib/models/Project';
import { MoreHorizontalIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectRowProps {
  project: IProject;
  onEdit: (project: IProject) => void;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, onEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isArchiving, setIsArchiving] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const router = useRouter();

  const shortDescription =
    project.description.length > 150
      ? `${project.description.slice(0, 150)}...`
      : project.description;

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/projects?id=${project._id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Project deleted successfully');
        router.refresh();
      } else {
        toast.error('Failed to delete project');
      }
    } catch {
      toast.error('An error occurred while deleting the project');
    } finally {
      setIsDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  const handleArchive = async () => {
    setIsArchiving(true);
    try {
      const response = await fetch(`/api/projects?id=${project._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ isArchived: !project.isArchived }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        toast.success(`Project ${project.isArchived ? 'unarchived' : 'archived'} successfully`);
        router.refresh();
      } else {
        toast.error('Failed to archive project');
      }
    } catch {
      toast.error('An error occurred while archiving the project');
    } finally {
      setIsArchiving(false);
    }
  };

  return (
    <>
      <Card className="border-border/30 hover:border-border bg-surface-elevated/30 hover:shadow-glow rounded-sm border p-5 shadow-sm transition-all">
        <div className="flex items-start justify-between">
          <div className="flex-grow">
            <div className="flex items-center gap-4">
              <h3 className="text-primary text-lg font-semibold">{project.title}</h3>
              {project.category && (
                <Badge variant="outline" className="h-fit">
                  {project.category}
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground mt-2 text-sm transition-all duration-300">
              {isExpanded ? project.description : shortDescription}
            </p>
            {project.description.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary mt-2 text-sm"
              >
                {isExpanded ? 'See less' : 'See more'}
              </button>
            )}
          </div>
          <DropdownMenu modal={true}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                aria-label="Open menu"
                size="icon"
                className="ml-4"
                disabled={isDeleting || isArchiving}
              >
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem onSelect={() => onEdit(project)}>Edit</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setShowDeleteDialog(true)} disabled={isDeleting}>
                  Delete
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleArchive} disabled={isArchiving}>
                  {isArchiving ? 'Archiving...' : project.isArchived ? 'Unarchive' : 'Archive'}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Project</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this project? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectRow;
