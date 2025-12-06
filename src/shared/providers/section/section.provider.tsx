import React, { useEffect, useState } from 'react';
import { SectionContext } from './section.context.ts';
import type { BasicSection } from './section.types.ts';
import { AllSections, type SectionKeys } from './sections.data.tsx';
import { AnimatePresence } from 'motion/react';
import { useBreakpoints } from '../breakpoints/breakpoints.context.tsx';
import { debounce } from 'ts-debounce';

export interface SectionProviderProps {
  defaultSection?: SectionKeys;
}

const SectionProvider: React.FC<SectionProviderProps> = ({
  defaultSection = 'main',
}) => {
  const { width } = useBreakpoints();

  const [currentSection, setCurrentSection] = useState<BasicSection>(
    AllSections[defaultSection],
  );

  const onResize = debounce(() => {
    if (width >= 1024 && currentSection.name !== 'mobile') {
      return;
    }

    if (width < 1024 && currentSection.name !== 'mobile') {
      setCurrentSection(AllSections.mobile);
    }

    if (width >= 1024 && currentSection.name === 'mobile') {
      setCurrentSection(AllSections.main);
    }
  }, 100);

  useEffect(() => {
    void onResize();
  }, [width]);

  return (
    <AnimatePresence>
      <SectionContext.Provider
        value={{ section: currentSection, setSection: setCurrentSection }}
      >
        {currentSection.node}
      </SectionContext.Provider>
    </AnimatePresence>
  );
};

export default SectionProvider;
