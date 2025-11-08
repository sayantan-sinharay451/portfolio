"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  onEdit?: () => void;
  onDelete?: () => void;
}

const SkillCard = ({ name, icon, onEdit, onDelete }: SkillCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-surface-elevated/40 p-6 shadow-sm transition-all hover:shadow-glow hover:border-primary/30"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface">{icon}</div>
      <h3 className="font-semibold text-primary-text">{name}</h3>
      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onEdit}>
          <Edit size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-400" onClick={onDelete}>
          <Trash size={16} />
        </Button>
      </div>
    </motion.div>
  );
};

export default SkillCard;
