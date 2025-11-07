'use client';
import React from 'react';
import { motion } from 'framer-motion';
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
      <AboutMeSection />
      <TechSpecSection />
      <ExperienceSection />
      <EducationSection />
    </>
  );
};

export default AboutPage;
