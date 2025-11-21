'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AdminModalProps {
  title?: string;
  description?: string;
  triggerComponent?: React.ReactNode; // opens modal
  children?: React.ReactNode;

  /** External control */
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;

  /** Submit callback */
  onSubmit?: () => void;

  /** Optional custom footer */
  footer?: React.ReactNode;

  /** Disable default footer */
  disableDefaultFooter?: boolean;
}

export default function AdminModal({
  title,
  description,
  triggerComponent,
  children,
  isOpenExternal,
  onCloseExternal,
  onSubmit,
  footer,
  disableDefaultFooter = false,
}: AdminModalProps) {
  const [open, setOpen] = useState(false);

  /** Sync external open state */
  useEffect(() => {
    if (typeof isOpenExternal === 'boolean') {
      setOpen(isOpenExternal);
    }
  }, [isOpenExternal]);

  /** Handle close */
  const handleOpenChange = (state: boolean) => {
    setOpen(state);
    if (!state && onCloseExternal) onCloseExternal();
  };

  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.22 }}
    >
      {children}
    </motion.div>
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* Optional trigger */}
      {triggerComponent && <DialogTrigger asChild>{triggerComponent}</DialogTrigger>}

      <AnimatePresence mode="wait">
        {open && (
          <DialogContent
            className="bg-surface-elevated border-border shadow-lg backdrop-blur-md"
            forceMount
          >
            <MotionWrapper>
              <DialogHeader>
                {title && <DialogTitle>{title}</DialogTitle>}
                {description && (
                  <DialogDescription className="mt-1">{description}</DialogDescription>
                )}
              </DialogHeader>

              <div className="py-4">{children}</div>

              {/* Custom footer override */}
              {footer ? (
                footer
              ) : !disableDefaultFooter ? (
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>

                  <Button onClick={onSubmit}>Save</Button>
                </DialogFooter>
              ) : null}
            </MotionWrapper>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
