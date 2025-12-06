import { motion } from 'motion/react';
import type { Variants } from 'motion';
import React, { useMemo, useState } from 'react';
import ProjectCard from '../../shared/components/project-card/project-card.tsx';
import { Projects } from './projects.data.ts';
import { cn } from '../../shared/lib/classnames.utils.ts';
import Button from '../../shared/ui/button/button.tsx';
import { useBreakpoints } from '../../shared/providers/breakpoints/breakpoints.context.tsx';

export interface ProjectsBlockProps {
  maxItems?: number;
}

const ProjectsBlock: React.FC<ProjectsBlockProps> = ({ maxItems }) => {
  const [showAmount, setShowAmount] = useState<number>(maxItems ?? Infinity);
  const { breakpoints } = useBreakpoints();

  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const getSector = (number: number) => {
    return (number - 1) % 4 < 2 ? 1 : 2;
  };

  const data = useMemo(() => {
    const cards: React.ReactNode[] = [];

    for (let i = 0; i < 8; i++) {
      cards.push(<ProjectCard data={Projects[i]} />);
    }

    return cards;
  }, []);

  const handleMoreProjectsClick = () => {
    setShowAmount(Infinity);
  };

  const getCardSizing = (index: number) => {
    if (breakpoints.down('lg')) {
      return 'w-full';
    }

    if (index !== 0 && getSector(index) === 1) return 'col-span-2';

    return 'col-span-3';
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{ ...variants }}
      className={'space-y-10 h-full'}
    >
      <h3
        className={
          'opacity-50 text-white 2xl:text-4xl text-2xl lg:block hidden'
        }
      >
        projects:
      </h3>

      <div
        className={'h-full 2xl:max-h-[93%] overflow-y-auto scrollbar-disable'}
      >
        <div
          className={
            'grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 h-full'
          }
        >
          {data.slice(0, showAmount).map((item, index) => (
            <div
              key={`project-block-${index}`}
              className={cn(
                '2xl:h-[300px] lg:h-[200px] h-[256px]',
                getCardSizing(index),
              )}
            >
              {item}
            </div>
          ))}
        </div>

        {maxItems && Projects.length > maxItems && showAmount !== Infinity && (
          <div className={'w-full flex justify-center items-center mt-8'}>
            <Button
              onClick={handleMoreProjectsClick}
              className={
                'bg-blueish !py-[14px] !px-15 !text-xl active:bg-blueish-light'
              }
            >
              more projects
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsBlock;
