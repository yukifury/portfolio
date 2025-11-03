import MainMenuSection from '../../../sections/main-menu/main-menu.section.tsx';
import type { BasicSection } from './section.types.ts';
import FloatingSection from '../../../sections/floating/floating.section.tsx';
import WorkSection from '../../../sections/work/work.section.tsx';

export const AllSections: Record<string, BasicSection> = {
  'main': {
    name: 'main',
    node: <MainMenuSection prerender />,
  },
  're-main': {
    name: 'main',
    node: <MainMenuSection prerender />,
  },
  'about-me': {
    name: 'about-me',
    node: <FloatingSection defaultValue={'about-me'} />,
  },
  'skills': {
    name: 'skills',
    node: <FloatingSection defaultValue={'skills'} />,
  },
  'work': {
    name: 'work',
    node: <WorkSection />,
  },
};
