import { useState } from 'react';
import { SectionContext } from './section.context.ts';
import type { BasicSection } from './section.types.ts';
import { AllSections } from './sections.data.tsx';
import { AnimatePresence } from 'motion/react';

const SectionProvider = () => {
  const [currentSection, setCurrentSection] = useState<BasicSection>(
    AllSections['main'],
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
