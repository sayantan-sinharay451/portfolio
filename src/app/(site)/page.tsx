"use client";
import { motion } from 'motion/react';
import HeroSection from './_components/HeroSection';
import TechSpecsSection from './_components/TechSpecsSection';
const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TechSpecsSection />
    </>
  )
};

export default HomePage;