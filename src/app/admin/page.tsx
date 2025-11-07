'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  Folder,
  Award,
  User,
  Settings,
  Plus,
  Edit2,
  Trash2,
  Save,
  X,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
  LogOut,
  Menu,
  Eye,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminPageProps {
  projects: any[];
  onUpdateProjects: (projects: any[]) => void;
}

const AdminPage = ({ projects, onUpdateProjects }: AdminPageProps) => {
  // const [activeSection, setActiveSection] = useState('dashboard');
  // const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [editingProject, setEditingProject] = useState<number | null>(null);
  // const [showAddModal, setShowAddModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [successMessage, setSuccessMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // // Skills management state
  // const [skills, setSkills] = useState([
  //   { id: 1, name: 'React', category: 'Frontend', proficiency: 90 },
  //   { id: 2, name: 'Node.js', category: 'Backend', proficiency: 85 },
  //   { id: 3, name: 'TypeScript', category: 'Language', proficiency: 88 },
  //   { id: 4, name: 'Tailwind CSS', category: 'Styling', proficiency: 92 },
  // ]);
  // const [newSkill, setNewSkill] = useState({ name: '', category: '', proficiency: 75 });

  // // About management state
  // const [aboutData, setAboutData] = useState({
  //   name: 'Alex Johnson',
  //   role: 'Full Stack Developer',
  //   tagline: 'Building Digital Experiences That Matter',
  //   bio: 'I craft beautiful, performant web applications with modern technologies. Passionate about creating intuitive user experiences and writing clean, maintainable code.',
  // });

  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   technologies: '',
  //   category: 'Web Apps',
  //   imageUrl: '',
  //   liveUrl: '',
  //   githubUrl: '',
  // });

  // const stats = [
  //   {
  //     label: 'Total Projects',
  //     value: projects.length,
  //     color: 'var(--color-primary)',
  //     icon: Folder,
  //   },
  //   { label: 'Total Skills', value: skills.length, color: 'var(--color-accent)', icon: Award },
  //   { label: 'Profile Views', value: '2.4K', color: 'var(--color-success)', icon: Eye },
  //   { label: 'Last Updated', value: 'Today', color: 'var(--color-secondary)', icon: Calendar },
  // ];

  // const showSuccess = (message: string) => {
  //   setSuccessMessage(message);
  //   setTimeout(() => setSuccessMessage(''), 3000);
  // };

  // const showError = (message: string) => {
  //   setErrorMessage(message);
  //   setTimeout(() => setErrorMessage(''), 3000);
  // };

  // const handleEdit = (project: any) => {
  //   setEditingProject(project.id);
  //   setFormData({
  //     title: project.title,
  //     description: project.description,
  //     technologies: project.technologies.join(', '),
  //     category: project.category || 'Web Apps',
  //     imageUrl: project.imageUrl || '',
  //     liveUrl: project.liveUrl || '',
  //     githubUrl: project.githubUrl || '',
  //   });
  // };

  // const handleSave = async (projectId: number) => {
  //   setIsLoading(true);

  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 800));

  //   const updatedProjects = projects.map((p) =>
  //     p.id === projectId
  //       ? {
  //           ...p,
  //           title: formData.title,
  //           description: formData.description,
  //           technologies: formData.technologies.split(',').map((t) => t.trim()),
  //           category: formData.category,
  //           imageUrl: formData.imageUrl,
  //           liveUrl: formData.liveUrl,
  //           githubUrl: formData.githubUrl,
  //         }
  //       : p
  //   );
  //   onUpdateProjects(updatedProjects);
  //   setEditingProject(null);
  //   setIsLoading(false);
  //   showSuccess('Project updated successfully!');
  // };

  // const handleDelete = async (projectId: number) => {
  //   if (confirm('Are you sure you want to delete this project?')) {
  //     setIsLoading(true);
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     onUpdateProjects(projects.filter((p) => p.id !== projectId));
  //     setIsLoading(false);
  //     showSuccess('Project deleted successfully!');
  //   }
  // };

  // const handleAddProject = async () => {
  //   if (!formData.title || !formData.description) {
  //     showError('Please fill in all required fields');
  //     return;
  //   }

  //   setIsLoading(true);
  //   await new Promise((resolve) => setTimeout(resolve, 800));

  //   const newProject = {
  //     id: Math.max(...projects.map((p) => p.id), 0) + 1,
  //     title: formData.title,
  //     description: formData.description,
  //     technologies: formData.technologies.split(',').map((t) => t.trim()),
  //     category: formData.category,
  //     imageUrl:
  //       formData.imageUrl || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
  //     liveUrl: formData.liveUrl,
  //     githubUrl: formData.githubUrl,
  //   };

  //   onUpdateProjects([...projects, newProject]);
  //   setShowAddModal(false);
  //   setFormData({
  //     title: '',
  //     description: '',
  //     technologies: '',
  //     category: 'Web Apps',
  //     imageUrl: '',
  //     liveUrl: '',
  //     githubUrl: '',
  //   });
  //   setIsLoading(false);
  //   showSuccess('Project added successfully!');
  // };

  // const handleAddSkill = () => {
  //   if (!newSkill.name || !newSkill.category) {
  //     showError('Please fill in skill name and category');
  //     return;
  //   }

  //   const skill = {
  //     id: Math.max(...skills.map((s) => s.id), 0) + 1,
  //     ...newSkill,
  //   };
  //   setSkills([...skills, skill]);
  //   setNewSkill({ name: '', category: '', proficiency: 75 });
  //   showSuccess('Skill added successfully!');
  // };

  // const handleDeleteSkill = (skillId: number) => {
  //   setSkills(skills.filter((s) => s.id !== skillId));
  //   showSuccess('Skill removed successfully!');
  // };

  // const handleUpdateAbout = async () => {
  //   setIsLoading(true);
  //   await new Promise((resolve) => setTimeout(resolve, 800));
  //   setIsLoading(false);
  //   showSuccess('About section updated successfully!');
  // };

  return (
    // <div className="flex min-h-screen bg-[var(--color-bg)]">
    //   {/* Sidebar */}
    //   <motion.aside
    //     initial={{ x: -20, opacity: 0 }}
    //     animate={{
    //       x: 0,
    //       opacity: 1,
    //       width: sidebarOpen ? '280px' : '80px',
    //     }}
    //     transition={{ duration: 0.3 }}
    //     className="flex min-h-screen flex-col border-r border-[var(--color-border)] bg-[var(--color-surface-elevated)]"
    //   >
    //     {/* Sidebar Header */}
    //     <div className="border-b border-[var(--color-border)] p-6">
    //       {sidebarOpen ? (
    //         <div>
    //           <h4 className="mb-1">Admin Dashboard</h4>
    //           <p className="text-sm text-[var(--color-text-secondary)]">Manage your portfolio</p>
    //         </div>
    //       ) : (
    //         <div className="flex justify-center">
    //           <LayoutDashboard size={24} className="text-[var(--color-primary)]" />
    //         </div>
    //       )}
    //     </div>

    //     {/* Navigation */}
    //     <nav className="flex-1 space-y-2 p-4">
    //       {menuItems.map((item) => {
    //         const Icon = item.icon;
    //         return (
    //           <motion.button
    //             key={item.value}
    //             onClick={() => setActiveSection(item.value)}
    //             whileHover={{ scale: 1.02 }}
    //             whileTap={{ scale: 0.98 }}
    //             className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-4 py-3 transition-all duration-200 ${
    //               activeSection === item.value
    //                 ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]'
    //                 : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'
    //             }`}
    //           >
    //             <Icon size={20} />
    //             {sidebarOpen && <span className="text-base">{item.label}</span>}
    //           </motion.button>
    //         );
    //       })}
    //     </nav>

    //     {/* Sidebar Footer */}
    //     <div className="border-t border-[var(--color-border)] p-4">
    //       <button
    //         onClick={() => setSidebarOpen(!sidebarOpen)}
    //         className="flex w-full items-center justify-center gap-3 rounded-[var(--radius-md)] px-4 py-3 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
    //       >
    //         <Menu size={20} />
    //         {sidebarOpen && <span>Collapse</span>}
    //       </button>
    //     </div>
    //   </motion.aside>

    //   {/* Main Content */}
    //   <main className="flex min-h-screen flex-1 flex-col">
    //     {/* Top Bar */}
    //     <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-8 py-4">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <h2 className="mb-1 capitalize">{activeSection}</h2>
    //           <p className="text-sm text-[var(--color-text-secondary)]">
    //             {activeSection === 'dashboard' && 'Overview of your portfolio'}
    //             {activeSection === 'projects' && 'Manage your projects and case studies'}
    //             {activeSection === 'skills' && 'Update your skills and technologies'}
    //             {activeSection === 'about' && 'Edit your personal information'}
    //             {activeSection === 'settings' && 'Configure your preferences'}
    //           </p>
    //         </div>
    //         <button className="flex items-center gap-2 rounded-[var(--radius-md)] px-4 py-2 text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-surface)] hover:text-[var(--color-error)]">
    //           <LogOut size={18} />
    //           <span>Logout</span>
    //         </button>
    //       </div>
    //     </div>

    //     {/* Success/Error Messages */}
    //     <AnimatePresence>
    //       {successMessage && (
    //         <motion.div
    //           initial={{ opacity: 0, y: -20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           exit={{ opacity: 0, y: -20 }}
    //           className="mx-8 mt-6 flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-success)] bg-[var(--color-success)]/10 p-4 text-[var(--color-success)]"
    //         >
    //           <CheckCircle size={20} />
    //           <span>{successMessage}</span>
    //         </motion.div>
    //       )}
    //       {errorMessage && (
    //         <motion.div
    //           initial={{ opacity: 0, y: -20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           exit={{ opacity: 0, y: -20 }}
    //           className="mx-8 mt-6 flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-error)] bg-[var(--color-error)]/10 p-4 text-[var(--color-error)]"
    //         >
    //           <AlertCircle size={20} />
    //           <span>{errorMessage}</span>
    //         </motion.div>
    //       )}
    //     </AnimatePresence>

    //     {/* Content Area */}
    //     <div className="flex-1 overflow-auto p-8">
    //       {/* Dashboard Overview */}
    //       {activeSection === 'dashboard' && (
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           className="space-y-8"
    //         >
    //           {/* Welcome Section */}
    //           <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 p-8">
    //             <h3 className="mb-2">Welcome back, {aboutData.name} 👋</h3>
    //             <p className="text-[var(--color-text-secondary)]">
    //               Here's what's happening with your portfolio today
    //             </p>
    //           </div>

    //           {/* Stats Grid */}
    //           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    //             {stats.map((stat, index) => {
    //               const Icon = stat.icon;
    //               return (
    //                 <motion.div
    //                   key={index}
    //                   initial={{ opacity: 0, y: 20 }}
    //                   animate={{ opacity: 1, y: 0 }}
    //                   transition={{ delay: index * 0.1 }}
    //                   className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 transition-all duration-300 hover:border-[var(--color-primary)]/40"
    //                 >
    //                   <div className="mb-4 flex items-center justify-between">
    //                     <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)]/10">
    //                       <Icon size={20} style={{ color: stat.color }} />
    //                     </div>
    //                   </div>
    //                   <p className="mb-2 text-sm text-[var(--color-text-secondary)]">
    //                     {stat.label}
    //                   </p>
    //                   <p className="text-3xl font-semibold" style={{ color: stat.color }}>
    //                     {stat.value}
    //                   </p>
    //                 </motion.div>
    //               );
    //             })}
    //           </div>

    //           {/* Recent Activity */}
    //           <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
    //             <div className="border-b border-[var(--color-border)] p-6">
    //               <h3>Recent Activity</h3>
    //             </div>
    //             <div className="space-y-4 p-6">
    //               {projects.slice(0, 5).map((project, index) => (
    //                 <div
    //                   key={index}
    //                   className="flex items-center justify-between border-b border-[var(--color-border)] py-3 last:border-0"
    //                 >
    //                   <div className="flex items-center gap-4">
    //                     <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary)]/10">
    //                       <Folder size={18} className="text-[var(--color-primary)]" />
    //                     </div>
    //                     <div>
    //                       <p className="mb-1 font-medium">{project.title}</p>
    //                       <p className="text-sm text-[var(--color-text-secondary)]">
    //                         Updated recently
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <span className="rounded-[var(--radius-full)] bg-[var(--color-success)]/10 px-3 py-1.5 text-sm font-medium text-[var(--color-success)]">
    //                     Published
    //                   </span>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </motion.div>
    //       )}

    //       {/* Projects Management */}
    //       {activeSection === 'projects' && (
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           className="space-y-6"
    //         >
    //           {/* Header with Add Button */}
    //           <div className="flex items-center justify-between">
    //             <div>
    //               <h3 className="mb-1">All Projects</h3>
    //               <p className="text-sm text-[var(--color-text-secondary)]">
    //                 {projects.length} total projects
    //               </p>
    //             </div>
    //             <Button size="md" onClick={() => setShowAddModal(true)}>
    //               <Plus size={20} />
    //               Add New Project
    //             </Button>
    //           </div>

    //           {/* Projects Table */}
    //           <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
    //             <div className="overflow-x-auto">
    //               <table className="w-full">
    //                 <thead className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
    //                   <tr>
    //                     <th className="px-6 py-4 text-left text-sm font-medium text-[var(--color-text-secondary)]">
    //                       Title
    //                     </th>
    //                     <th className="px-6 py-4 text-left text-sm font-medium text-[var(--color-text-secondary)]">
    //                       Description
    //                     </th>
    //                     <th className="px-6 py-4 text-left text-sm font-medium text-[var(--color-text-secondary)]">
    //                       Technologies
    //                     </th>
    //                     <th className="px-6 py-4 text-left text-sm font-medium text-[var(--color-text-secondary)]">
    //                       Category
    //                     </th>
    //                     <th className="px-6 py-4 text-right text-sm font-medium text-[var(--color-text-secondary)]">
    //                       Actions
    //                     </th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   {projects.map((project) => (
    //                     <tr
    //                       key={project.id}
    //                       className="border-b border-[var(--color-border)] transition-colors last:border-0 hover:bg-[var(--color-surface)]"
    //                     >
    //                       <td className="px-6 py-4">
    //                         {editingProject === project.id ? (
    //                           <input
    //                             type="text"
    //                             value={formData.title}
    //                             onChange={(e) =>
    //                               setFormData({ ...formData, title: e.target.value })
    //                             }
    //                             className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                           />
    //                         ) : (
    //                           <p className="font-medium">{project.title}</p>
    //                         )}
    //                       </td>
    //                       <td className="max-w-md px-6 py-4">
    //                         {editingProject === project.id ? (
    //                           <textarea
    //                             value={formData.description}
    //                             onChange={(e) =>
    //                               setFormData({ ...formData, description: e.target.value })
    //                             }
    //                             rows={2}
    //                             className="w-full resize-none rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                           />
    //                         ) : (
    //                           <p className="line-clamp-2 text-[var(--color-text-secondary)]">
    //                             {project.description}
    //                           </p>
    //                         )}
    //                       </td>
    //                       <td className="px-6 py-4">
    //                         {editingProject === project.id ? (
    //                           <input
    //                             type="text"
    //                             value={formData.technologies}
    //                             onChange={(e) =>
    //                               setFormData({ ...formData, technologies: e.target.value })
    //                             }
    //                             placeholder="React, Node.js, ..."
    //                             className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                           />
    //                         ) : (
    //                           <div className="flex flex-wrap gap-2">
    //                             {project.technologies.slice(0, 3).map((tech: string, i: number) => (
    //                               <span
    //                                 key={i}
    //                                 className="rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs"
    //                               >
    //                                 {tech}
    //                               </span>
    //                             ))}
    //                             {project.technologies.length > 3 && (
    //                               <span className="px-3 py-1 text-xs text-[var(--color-text-secondary)]">
    //                                 +{project.technologies.length - 3}
    //                               </span>
    //                             )}
    //                           </div>
    //                         )}
    //                       </td>
    //                       <td className="px-6 py-4">
    //                         <span className="rounded-[var(--radius-full)] bg-[var(--color-primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-primary)]">
    //                           {project.category || 'Web Apps'}
    //                         </span>
    //                       </td>
    //                       <td className="px-6 py-4">
    //                         <div className="flex items-center justify-end gap-2">
    //                           {editingProject === project.id ? (
    //                             <>
    //                               <button
    //                                 onClick={() => handleSave(project.id)}
    //                                 disabled={isLoading}
    //                                 className="rounded-[var(--radius-md)] p-2 text-[var(--color-success)] transition-colors hover:bg-[var(--color-success)]/10 disabled:opacity-50"
    //                               >
    //                                 {isLoading ? (
    //                                   <Loader2 size={18} className="animate-spin" />
    //                                 ) : (
    //                                   <Save size={18} />
    //                                 )}
    //                               </button>
    //                               <button
    //                                 onClick={() => setEditingProject(null)}
    //                                 disabled={isLoading}
    //                                 className="rounded-[var(--radius-md)] px-3 py-2 text-sm transition-colors hover:bg-[var(--color-bg)]"
    //                               >
    //                                 Cancel
    //                               </button>
    //                             </>
    //                           ) : (
    //                             <>
    //                               <button
    //                                 onClick={() => handleEdit(project)}
    //                                 className="rounded-[var(--radius-md)] p-2 text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/10"
    //                               >
    //                                 <Edit2 size={18} />
    //                               </button>
    //                               <button
    //                                 onClick={() => handleDelete(project.id)}
    //                                 className="rounded-[var(--radius-md)] p-2 text-[var(--color-error)] transition-colors hover:bg-[var(--color-error)]/10"
    //                               >
    //                                 <Trash2 size={18} />
    //                               </button>
    //                             </>
    //                           )}
    //                         </div>
    //                       </td>
    //                     </tr>
    //                   ))}
    //                 </tbody>
    //               </table>
    //             </div>
    //           </div>
    //         </motion.div>
    //       )}

    //       {/* Skills Management */}
    //       {activeSection === 'skills' && (
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           className="space-y-6"
    //         >
    //           {/* Add New Skill */}
    //           <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
    //             <h3 className="mb-6">Add New Skill</h3>
    //             <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
    //               <input
    //                 type="text"
    //                 placeholder="Skill name"
    //                 value={newSkill.name}
    //                 onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
    //                 className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //               />
    //               <input
    //                 type="text"
    //                 placeholder="Category"
    //                 value={newSkill.category}
    //                 onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
    //                 className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //               />
    //               <div className="flex flex-col gap-2">
    //                 <label className="text-sm text-[var(--color-text-secondary)]">
    //                   Proficiency: {newSkill.proficiency}%
    //                 </label>
    //                 <input
    //                   type="range"
    //                   min="0"
    //                   max="100"
    //                   value={newSkill.proficiency}
    //                   onChange={(e) =>
    //                     setNewSkill({ ...newSkill, proficiency: parseInt(e.target.value) })
    //                   }
    //                   className="w-full"
    //                 />
    //               </div>
    //               <Button onClick={handleAddSkill}>
    //                 <Plus size={18} />
    //                 Add Skill
    //               </Button>
    //             </div>
    //           </div>

    //           {/* Skills Grid */}
    //           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    //             {skills.map((skill) => (
    //               <motion.div
    //                 key={skill.id}
    //                 initial={{ opacity: 0, scale: 0.95 }}
    //                 animate={{ opacity: 1, scale: 1 }}
    //                 className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 transition-all duration-300 hover:border-[var(--color-primary)]/40"
    //               >
    //                 <div className="mb-4 flex items-start justify-between">
    //                   <div className="flex-1">
    //                     <h4 className="mb-1">{skill.name}</h4>
    //                     <p className="text-sm text-[var(--color-text-secondary)]">
    //                       {skill.category}
    //                     </p>
    //                   </div>
    //                   <button
    //                     onClick={() => handleDeleteSkill(skill.id)}
    //                     className="rounded-[var(--radius-md)] p-2 text-[var(--color-error)] transition-colors hover:bg-[var(--color-error)]/10"
    //                   >
    //                     <Trash2 size={16} />
    //                   </button>
    //                 </div>
    //                 <div className="space-y-2">
    //                   <div className="flex justify-between text-sm">
    //                     <span className="text-[var(--color-text-secondary)]">Proficiency</span>
    //                     <span className="font-medium">{skill.proficiency}%</span>
    //                   </div>
    //                   <div className="h-2 overflow-hidden rounded-full bg-[var(--color-surface)]">
    //                     <div
    //                       className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-500"
    //                       style={{ width: `${skill.proficiency}%` }}
    //                     />
    //                   </div>
    //                 </div>
    //               </motion.div>
    //             ))}
    //           </div>
    //         </motion.div>
    //       )}

    //       {/* About Section */}
    //       {activeSection === 'about' && (
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           className="space-y-6"
    //         >
    //           <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8">
    //             <h3 className="mb-8">Personal Information</h3>
    //             <div className="space-y-6">
    //               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    //                 <div>
    //                   <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                     Full Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     value={aboutData.name}
    //                     onChange={(e) => setAboutData({ ...aboutData, name: e.target.value })}
    //                     className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                   />
    //                 </div>
    //                 <div>
    //                   <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                     Role
    //                   </label>
    //                   <input
    //                     type="text"
    //                     value={aboutData.role}
    //                     onChange={(e) => setAboutData({ ...aboutData, role: e.target.value })}
    //                     className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                   />
    //                 </div>
    //               </div>

    //               <div>
    //                 <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                   Tagline
    //                 </label>
    //                 <input
    //                   type="text"
    //                   value={aboutData.tagline}
    //                   onChange={(e) => setAboutData({ ...aboutData, tagline: e.target.value })}
    //                   className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                 />
    //               </div>

    //               <div>
    //                 <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                   Bio
    //                 </label>
    //                 <textarea
    //                   value={aboutData.bio}
    //                   onChange={(e) => setAboutData({ ...aboutData, bio: e.target.value })}
    //                   rows={6}
    //                   className="w-full resize-none rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                 />
    //               </div>

    //               <div>
    //                 <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                   Profile Image
    //                 </label>
    //                 <div className="flex items-center gap-4">
    //                   <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
    //                     <User size={32} className="text-[var(--color-text-secondary)]" />
    //                   </div>
    //                   <Button variant="secondary">
    //                     <Upload size={18} />
    //                     Upload Image
    //                   </Button>
    //                 </div>
    //               </div>

    //               <div className="flex justify-end pt-4">
    //                 <Button onClick={handleUpdateAbout} disabled={isLoading}>
    //                   {isLoading ? (
    //                     <>
    //                       <Loader2 size={18} className="animate-spin" />
    //                       Saving...
    //                     </>
    //                   ) : (
    //                     <>
    //                       <Save size={18} />
    //                       Save Changes
    //                     </>
    //                   )}
    //                 </Button>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
    //       )}

    //       {/* Settings Section */}
    //       {activeSection === 'settings' && (
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           className="space-y-6"
    //         >
    //           <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8">
    //             <h3 className="mb-8">Preferences</h3>
    //             <div className="space-y-6">
    //               <div className="flex items-center justify-between border-b border-[var(--color-border)] py-4">
    //                 <div>
    //                   <h5 className="mb-1">Spotify Integration</h5>
    //                   <p className="text-sm text-[var(--color-text-secondary)]">
    //                     Display currently playing music
    //                   </p>
    //                 </div>
    //                 <label className="relative inline-flex cursor-pointer items-center">
    //                   <input type="checkbox" className="peer sr-only" defaultChecked />
    //                   <div className="peer h-6 w-11 rounded-full bg-[var(--color-surface)] peer-checked:bg-[var(--color-primary)] peer-focus:ring-2 peer-focus:ring-[var(--color-primary)] peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
    //                 </label>
    //               </div>

    //               <div className="flex items-center justify-between border-b border-[var(--color-border)] py-4">
    //                 <div>
    //                   <h5 className="mb-1">Email Notifications</h5>
    //                   <p className="text-sm text-[var(--color-text-secondary)]">
    //                     Receive updates about new messages
    //                   </p>
    //                 </div>
    //                 <label className="relative inline-flex cursor-pointer items-center">
    //                   <input type="checkbox" className="peer sr-only" />
    //                   <div className="peer h-6 w-11 rounded-full bg-[var(--color-surface)] peer-checked:bg-[var(--color-primary)] peer-focus:ring-2 peer-focus:ring-[var(--color-primary)] peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
    //                 </label>
    //               </div>

    //               <div className="flex items-center justify-between py-4">
    //                 <div>
    //                   <h5 className="mb-1">Analytics</h5>
    //                   <p className="text-sm text-[var(--color-text-secondary)]">
    //                     Track page views and visitor data
    //                   </p>
    //                 </div>
    //                 <label className="relative inline-flex cursor-pointer items-center">
    //                   <input type="checkbox" className="peer sr-only" defaultChecked />
    //                   <div className="peer h-6 w-11 rounded-full bg-[var(--color-surface)] peer-checked:bg-[var(--color-primary)] peer-focus:ring-2 peer-focus:ring-[var(--color-primary)] peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
    //                 </label>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8">
    //             <h3 className="mb-8">API Keys</h3>
    //             <div className="space-y-4">
    //               <div>
    //                 <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                   Spotify API Key
    //                 </label>
    //                 <div className="flex gap-3">
    //                   <input
    //                     type="password"
    //                     placeholder="••••••••••••••••"
    //                     className="flex-1 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                   />
    //                   <Button variant="secondary">Update</Button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
    //       )}
    //     </div>
    //   </main>

    //   {/* Add Project Modal */}
    //   <AnimatePresence>
    //     {showAddModal && (
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    //         onClick={() => setShowAddModal(false)}
    //       >
    //         <motion.div
    //           initial={{ scale: 0.95, opacity: 0 }}
    //           animate={{ scale: 1, opacity: 1 }}
    //           exit={{ scale: 0.95, opacity: 0 }}
    //           onClick={(e) => e.stopPropagation()}
    //           className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]"
    //         >
    //           <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
    //             <h3>Add New Project</h3>
    //             <button
    //               onClick={() => setShowAddModal(false)}
    //               className="rounded-[var(--radius-md)] p-2 transition-colors hover:bg-[var(--color-surface)]"
    //             >
    //               <X size={20} />
    //             </button>
    //           </div>

    //           <div className="space-y-6 p-6">
    //             <div>
    //               <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                 Project Title *
    //               </label>
    //               <input
    //                 type="text"
    //                 value={formData.title}
    //                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
    //                 placeholder="Enter project title"
    //                 className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //               />
    //             </div>

    //             <div>
    //               <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                 Description *
    //               </label>
    //               <textarea
    //                 value={formData.description}
    //                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
    //                 placeholder="Describe your project"
    //                 rows={4}
    //                 className="w-full resize-none rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //               />
    //             </div>

    //             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    //               <div>
    //                 <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                   Technologies
    //                 </label>
    //                 <input
    //                   type="text"
    //                   value={formData.technologies}
    //                   onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
    //                   placeholder="React, Node.js, MongoDB"
    //                   className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                 />
    //               </div>

    //               <div>
    //                 <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                   Category
    //                 </label>
    //                 <select
    //                   value={formData.category}
    //                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
    //                   className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                 >
    //                   <option>Web Apps</option>
    //                   <option>Mobile</option>
    //                   <option>Open Source</option>
    //                   <option>UI/UX</option>
    //                 </select>
    //               </div>
    //             </div>

    //             <div>
    //               <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                 Image URL
    //               </label>
    //               <input
    //                 type="text"
    //                 value={formData.imageUrl}
    //                 onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
    //                 placeholder="https://example.com/image.jpg"
    //                 className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //               />
    //             </div>

    //             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    //               <div>
    //                 <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                   Live URL
    //                 </label>
    //                 <input
    //                   type="text"
    //                   value={formData.liveUrl}
    //                   onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
    //                   placeholder="https://example.com"
    //                   className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                 />
    //               </div>

    //               <div>
    //                 <label className="mb-3 block text-sm font-medium text-[var(--color-text-secondary)]">
    //                   GitHub URL
    //                 </label>
    //                 <input
    //                   type="text"
    //                   value={formData.githubUrl}
    //                   onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
    //                   placeholder="https://github.com/..."
    //                   className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
    //                 />
    //               </div>
    //             </div>
    //           </div>

    //           <div className="sticky bottom-0 flex justify-end gap-3 border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
    //             <Button variant="secondary" onClick={() => setShowAddModal(false)}>
    //               Cancel
    //             </Button>
    //             <Button onClick={handleAddProject} disabled={isLoading}>
    //               {isLoading ? (
    //                 <>
    //                   <Loader2 size={18} className="animate-spin" />
    //                   Adding...
    //                 </>
    //               ) : (
    //                 <>
    //                   <Plus size={18} />
    //                   Add Project
    //                 </>
    //               )}
    //             </Button>
    //           </div>
    //         </motion.div>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>
    <div>Hello</div>
  );
};

export default AdminPage;
