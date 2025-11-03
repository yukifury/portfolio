import { createContext, type SetStateAction, useContext } from 'react';
import type { BasicSection } from './section.types.ts';

export interface SectionContextProps {
  section: BasicSection;
  setSection: React.Dispatch<SetStateAction<BasicSection>>;
}

export const SectionContext = createContext({} as SectionContextProps);

export const useSectionContext = () => useContext(SectionContext);
