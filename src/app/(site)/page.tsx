import HeroSection from './_components/HeroSection';
import TechSpecsSection from './_components/TechSpecsSection';
import WhatIDoSection from './_components/WhatIDoSection';
import FeatureProjects from './_components/FeatureProjects';
const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TechSpecsSection />
      <WhatIDoSection />
      <FeatureProjects />
    </>
  );
};

export default HomePage;
