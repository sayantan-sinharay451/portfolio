import React from 'react';
import SectionHeading from '../../../_components/SectionHeading';

const AboutMeSection = () => {
  return (
    <section>
      <SectionHeading heading="Who I am?" />
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
        <div className="md:col-span-1"></div>
        <div className="md:col-span-2">
          <p className="mb-6 text-lg text-gray-400">
            Hello! I'm a passionate and results-oriented software engineer with a strong foundation
            in full-stack web development. I thrive on turning complex ideas into elegant and
            user-friendly solutions. My journey in tech has been driven by a relentless curiosity
            and a desire to build things that make a difference.
          </p>
          <p className="text-lg text-gray-400">
            When I'm not coding, you can find me exploring the latest technology trends,
            contributing to open-source projects, or enjoying a good cup of coffee. I'm always eager
            to learn new things and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
