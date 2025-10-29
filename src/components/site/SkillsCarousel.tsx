import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion';
import {
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  siMongodb,
  siExpress,
  siHtml5,
  siCss,
  siJavascript,
  siBootstrap,
  siNodedotjs,
  siRubyonrails,
  siI18next,
  siSass,
  siCssmodules,
  siJest,
  siSonarqubecloud,
  siRedux,
  siGraphql,
} from 'simple-icons/icons';
import { Marquee } from '../ui/marquee';

const SkillsCarousel = () => {
  const stack = [
    siReact,
    siNextdotjs,
    siTailwindcss,
    siTypescript,
    siMongodb,
    siExpress,
    siNodedotjs,
    siJavascript,
    siHtml5,
    siCss,
    siBootstrap,
    siRubyonrails,
    siI18next,
    siSass,
    siCssmodules,
    siJest,
    siSonarqubecloud,
    siRedux,
    siGraphql,
  ];

  const skillItem = (icon: (typeof stack)[number], i: number) => (
    <svg
      key={`${icon.title}-${i}`}
      viewBox="0 0 24 24"
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      className="hover:fill-secondary-dark h-15 w-15 gap-10 overflow-visible fill-white opacity-70 transition-all duration-300 hover:scale-150 hover:opacity-100"
    />
  );

  return (
    <>
      <div className="item-center relative flex h-40 justify-center">
        <div className="absolute top-2/9 flex h-full items-center overflow-hidden">
          <Marquee
            pauseOnHover
            className="item-center flex justify-center overflow-visible [--duration:20s] [--gap:40px]"
          >
            {stack.map((skill, i) => skillItem(skill, i))}
          </Marquee>
        </div>
      </div>
      <div className="from-secondary pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r to-transparent"></div>
      <div className="from-secondary pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l to-transparent"></div>
    </>
  );
};

export default SkillsCarousel;
