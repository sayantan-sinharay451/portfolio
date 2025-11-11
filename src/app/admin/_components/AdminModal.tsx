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
  title: string;
  children: React.ReactNode;
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
  description?: string;
  triggerComponent?: React.ReactNode;
}

const AdminModal = ({
  title,
  description,
  triggerComponent,
  children,
  isOpenExternal,
  onCloseExternal,
}: AdminModalProps) => {
  const [isOpen, setIsOpen] = useState(false || isOpenExternal);

  return (
    <AnimatePresence>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {triggerComponent && <DialogTrigger asChild>{triggerComponent}</DialogTrigger>}
        <DialogContent className="bg-surface-elevated border-border shadow-lg backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription className="mt-2 text-3xl">{description}</DialogDescription>
            </DialogHeader>
            <div className="py-5">{children}</div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </motion.div>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
};

export default AdminModal;
