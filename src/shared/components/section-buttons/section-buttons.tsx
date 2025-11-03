import React from 'react';
import Button from '../../ui/button/button.tsx';
import { cn } from '../../lib/classnames.utils.ts';
import { motion } from 'motion/react';
import { useSectionContext } from '../../providers/section/section.context.ts';
import { AllSections } from '../../providers/section/sections.data.tsx';

export interface SectionButtonsProps {
  className?: string;
  selfAlignment?: 'left' | 'right' | 'center';
  customClickHandler?: (type: 'about-me' | 'skills' | 'work') => void;
  interrupt?: boolean;
}

export interface SectionButtonProps {
  type: 'about-me' | 'skills' | 'work';
  className?: string;
  customClickHandler?: (type: 'about-me' | 'skills' | 'work') => void;
  interrupt?: boolean;
}

export const SectionsButtons: React.FC<SectionButtonsProps> = ({
  className,
  selfAlignment = 'center',
  customClickHandler,
  interrupt = false,
}) => {
  const SectionsButtonsData: SectionButtonProps[] = [
    {
      type: 'about-me',
      className:
        'data-[type=work]:bg-blueish data-[type=skills]:bg-greenish bg-pinky data-[active=true]:shadow-pinky data-[active=true]:bg-pinky-dark data-[active=false]:hover:bg-pinky-light data-[active=false]:active:bg-pinky-light hover:shadow-pinky disabled:bg-pinky-dark',
    },
    {
      type: 'skills',
      className:
        'data-[type=work]:bg-blueish data-[type=about-me]:bg-pinky bg-greenish data-[active=true]:shadow-greenish data-[active=true]:bg-greenish-dark data-[active=false]:hover:bg-greenish-light data-[active=false]:active:bg-greenish-light hover:shadow-greenish disabled:bg-greenish-dark',
    },
    {
      type: 'work',
      className:
        'data-[type=skills]:bg-greenish data-[type=about-me]:bg-pinky bg-blueish data-[active=true]:shadow-blueish data-[active=true]:bg-blueish-dark data-[active=false]:hover:bg-blueish-light data-[active=false]:active:bg-blueish-light hover:shadow-blueish disabled:bg-blueish-dark',
    },
  ];

  return (
    <motion.div
      layoutId={'sections-buttons'}
      className={cn(
        'relative',
        selfAlignment === 'center' && 'self-center',
        selfAlignment === 'right' && 'self-end',
        selfAlignment === 'left' && 'self-start',
        className,
      )}
    >
      <div className={cn('flex gap-2')}>
        {SectionsButtonsData.map((button, index) => (
          <SectionButton
            customClickHandler={customClickHandler}
            interrupt={interrupt}
            key={button.type + index.toString()}
            {...button}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SectionButton: React.FC<SectionButtonProps> = ({
  type,
  className,
  customClickHandler,
  interrupt = false,
}) => {
  const { setSection, section } = useSectionContext();

  const handleButtonClick = (type: 'about-me' | 'skills' | 'work') => {
    if (customClickHandler) {
      customClickHandler(type);

      if (interrupt) {
        return;
      }
    }

    if (section.name === type) {
      return;
    }

    setSection(AllSections[type]);
  };

  return (
    <Button
      onClick={() => {
        handleButtonClick(type);
      }}
      data-type={section.name}
      data-active={section.name === type}
      className={cn(
        'transition duration-400 text-white !px-5 !py-3',
        className,
      )}
    >
      <div className={'flex items-center justify-center'}>
        <span className={'text-xl font-normal'}>{type}</span>
      </div>
    </Button>
  );
};
