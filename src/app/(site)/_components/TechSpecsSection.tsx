import { motion } from 'framer-motion';
const TechSpecsSection = () => {
  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'PostgreSQL', icon: '🐘' },
  ];

  return (
    <section className="section-spacing bg-primary-dark/30 backdrop-blur-md">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className='font-heading text-primary'>Tech Stack</h2>
          <p className="font-contrast max-w-2xl">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {/* {techStack.map((tech, index) => (
            // <SkillTag
            //   key={index}
            //   name={tech.name}
            //   icon={tech.icon}
            //   delay={index * 0.05}
            // />
          ))} */}
        </div>
      </div>
      <section className="section-spacing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-6">What I Do</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl">
              My approach to development and design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-8 bg-[var(--color-surface-elevated)] rounded-[var(--radius-lg)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 hover:shadow-[var(--shadow-md)] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-[var(--radius-md)] flex items-center justify-center mb-6">
                    <Icon className="text-[var(--color-primary)]" size={24} />
                  </div>
                  <h4 className="mb-3">{feature.title}</h4>
                  <p className="text-[var(--color-text-secondary)] text-base">{feature.description}</p>
                </motion.div>
              );
            })} */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechSpecsSection;