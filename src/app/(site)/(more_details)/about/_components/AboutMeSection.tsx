import React from 'react';
import SectionHeading from '../../../_components/SectionHeading';

const AboutMeSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <img
              src="/placeholder.jpg"
              alt="Your Name"
              className="rounded-full w-48 h-48 mx-auto md:mx-0"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-gray-400 mb-6">
              Hello! I'm a passionate and results-oriented software engineer with a strong foundation
              in full-stack web development. I thrive on turning complex ideas into elegant and
              user-friendly solutions. My journey in tech has been driven by a relentless curiosity
              and a desire to build things that make a difference.
            </p>
            <p className="text-lg text-gray-400">
              When I'm not coding, you can find me exploring the latest technology trends,
              contributing to open-source projects, or enjoying a good cup of coffee. I'm always
              eager to learn new things and take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
