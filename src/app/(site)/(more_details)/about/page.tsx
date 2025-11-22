import React from 'react';
import PageHeading from '../_components/PageHeading';
import AboutMeSection from './_components/AboutMeSection';
import TechSpecSection from './_components/TechSpecSection';
import ExperienceSection from './_components/ExperienceSection';
import EducationSection from './_components/EducationSection';

const data = {
  title: 'About Me',
  subTitle: 'A passionate developer dedicated to creating exceptional digital experiences',
};

const AboutPage = () => {
  return (
    <>
      <PageHeading title={data.title} subTitle={data.subTitle} />
      <div className="section-spacing mx-auto flex flex-col gap-30">
        <AboutMeSection />
        <TechSpecSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </>
  );
};

export default AboutPage;
