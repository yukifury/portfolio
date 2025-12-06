import MainMenuSection from '../../../sections/main-menu/main-menu.section.tsx';
import type { BasicSection } from './section.types.ts';
import FloatingSection from '../../../sections/floating/floating.section.tsx';
import WorkSection from '../../../sections/work/work.section.tsx';
import MobileSection from '../../../sections/mobile/mobile.section.tsx';

export type SectionKeys =
  | 'main'
  | 're-main'
  | 'about-me'
  | 'skills'
  | 'work'
  | 'mobile';

export const isValidSection = (value: string): value is SectionKeys => {
  return ['main', 're-main', 'about-me', 'skills', 'work', 'mobile'].includes(
    value,
  );
};

export const AllSections: Record<SectionKeys, BasicSection> = {
  'main': {
    name: 'main',
    node: <MainMenuSection />,
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
  'mobile': {
    name: 'mobile',
    node: <MobileSection />,
  },
};
