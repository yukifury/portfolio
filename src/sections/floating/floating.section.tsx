import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AboutMeBlockFeature from './about-me-block.feature.tsx';
import SkillsBlockFeature from './skills-block.feature.tsx';
import Header from '../../shared/components/header/header.tsx';
import { SectionsButtons } from '../../shared/components/section-buttons/section-buttons.tsx';

export interface FloatingSectionProps {
  defaultValue: 'about-me' | 'skills';
}

const FloatingSection: React.FC<FloatingSectionProps> = ({ defaultValue }) => {
  const [currentFloatingSection, setCurrentFloatingSection] = useState<
    'about-me' | 'skills'
  >(defaultValue);

  const handleSectionsClick = (type: 'about-me' | 'skills' | 'work') => {
    if (type !== 'work') {
      setCurrentFloatingSection(type);
    }
  };

  return (
    <>
      <div
        className={'flex flex-row items-center justify-between w-full h-full'}
      >
        <div className={' flex h-full flex-col justify-between'}>
          <Header
            className={'!justify-items-start !items-start !h-auto'}
            animate={false}
            showFooter={false}
          />

          <SectionsButtons
            customClickHandler={handleSectionsClick}
            className={'!self-start'}
          />
        </div>

        <AnimatePresence mode={'wait'}>
          {currentFloatingSection === 'about-me' && (
            <AboutMeBlockFeature key={`floating-section-about-me`} />
          )}
          {currentFloatingSection === 'skills' && (
            <SkillsBlockFeature key={`floating-section-skills`} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingSection;
