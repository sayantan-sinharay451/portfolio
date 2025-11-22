import SectionHeading, { SectionHeadingProps } from '@/components/site/SectionHeading';
import SkillsCarousel from '@/components/site/SkillsCarousel';
const sectionHeadingData: SectionHeadingProps = {
  heading: 'Tech Stack',
  subheading: 'Technologies I work with to bring ideas to life',
  id: 'tech-stack-section',
};

const TechSpecsSection = () => {
  return (
    <section className="section-spacing bg-surface overflow-hidden backdrop-blur-md">
      <div className="container">
        <SectionHeading {...sectionHeadingData} />
        <SkillsCarousel />
      </div>
    </section>
  );
};

export default TechSpecsSection;
