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
    <div className="mt-6 flex items-center justify-end gap-3">
      <Button
        variant="ghost"
        onClick={() => onPageChange(page - 1)}
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
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages || isLoading}
        aria-label="Next page"
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
