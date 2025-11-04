import React, { useState } from 'react';
import { SectionContext } from './section.context.ts';
import type { BasicSection } from './section.types.ts';
import { AllSections, type SectionKeys } from './sections.data.tsx';
import { AnimatePresence } from 'motion/react';

export interface SectionProviderProps {
  defaultSection?: SectionKeys;
}

const SectionProvider: React.FC<SectionProviderProps> = ({
  defaultSection = 'main',
}) => {
  const [currentSection, setCurrentSection] = useState<BasicSection>(
    AllSections[defaultSection],
  );

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
