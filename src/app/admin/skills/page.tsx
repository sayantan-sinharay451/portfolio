'use client';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import PageHeading from '../_components/PageHeading';
import SkillCard from '../_components/SkillCard';
import { useState } from 'react';
import AdminModal from '../_components/AdminModal';
import { Input } from '@/components/ui/input';

const skillsData = [
  {
    name: 'TypeScript',
    category: 'Language',
    icon: 'TS',
  },
  {
    name: 'React',
    category: 'Framework',
    icon: 'Re',
  },
  {
    name: 'Next.js',
    category: 'Framework',
    icon: 'N',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: 'Tw',
  },
];

const SkillsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete'>('add');
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const openModal = (type: 'add' | 'edit' | 'delete', skill?: any) => {
    setModalType(type);
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <>
      <PageHeading
        title="Manage Skills"
        subtitle="Add or remove technologies and frameworks you use."
      />
      <div className="mt-8 px-4">
        <AdminModal
          triggerComponent={<h1>Click me</h1>}
          title={
            modalType === 'add'
              ? 'Add New Skill'
              : modalType === 'edit'
                ? 'Edit Skill'
                : 'Confirm Deletion'
          }
        >
          {modalType === 'add' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-primary-text text-sm font-medium">Skill Name</label>
                <Input placeholder="e.g. React" className="bg-surface/80" />
              </div>
              <div className="space-y-2">
                <label className="text-primary-text text-sm font-medium">Category</label>
                <Input placeholder="e.g. Framework" className="bg-surface/80" />
              </div>
              <div className="space-y-2">
                <label className="text-primary-text text-sm font-medium">Icon (Shortname)</label>
                <Input placeholder="e.g. Re" className="bg-surface/80" />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Add Skill
              </Button>
            </div>
          )}
          {modalType === 'edit' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-primary-text text-sm font-medium">Skill Name</label>
                <Input defaultValue={selectedSkill?.name} className="bg-surface/80" />
              </div>
              <div className="space-y-2">
                <label className="text-primary-text text-sm font-medium">Category</label>
                <Input defaultValue={selectedSkill?.category} className="bg-surface/80" />
              </div>
              <div className="space-y-2">
                <label className="text-primary-text text-sm font-medium">Icon (Shortname)</label>
                <Input defaultValue={selectedSkill?.icon} className="bg-surface/80" />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Save Changes
              </Button>
            </div>
          )}
          {modalType === 'delete' && (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Are you sure you want to delete the skill "{selectedSkill?.name}"?
              </p>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={closeModal}>
                  Cancel
                </Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </div>
          )}
        </AdminModal>
        <div className="mb-4 flex justify-end">
          <Button
            onClick={() => openModal('add')}
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <PlusCircle size={18} />
            Add New Skill
          </Button>
        </div>
        <AnimatePresence>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                icon={skill.icon}
                onEdit={() => openModal('edit', skill)}
                onDelete={() => openModal('delete', skill)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default SkillsPage;
