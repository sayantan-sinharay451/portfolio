'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

const PaginationControls = ({ page, totalPages, onPageChange, isLoading }: Props) => {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <Button
        variant="ghost"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page <= 1 || isLoading}
        aria-label="Previous page"
      >
        Previous
      </Button>

      <div className="text-muted-foreground text-sm">
        Page <span className="font-semibold">{page}</span> of <span>{totalPages}</span>
      </div>

      <Button
        variant="ghost"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page >= totalPages || isLoading}
        aria-label="Next page"
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
