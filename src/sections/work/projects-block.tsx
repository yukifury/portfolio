import { motion } from 'motion/react';
import type { Variants } from 'motion';
import React, { useMemo } from 'react';
import ProjectCard from '../../shared/components/project-card/project-card.tsx';
import { Projects } from './projects.data.ts';
import { cn } from '../../shared/lib/classnames.utils.ts';

const ProjectsBlock = () => {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{ ...variants }}
      className={'space-y-10 h-full'}
    >
      <h3 className={'opacity-50 text-white 2xl:text-4xl text-2xl'}>
        projects:
      </h3>

      <div
        className={'h-full 2xl:max-h-[93%] overflow-y-auto scrollbar-disable'}
      >
        <div className={'grid grid-cols-5 gap-10 h-full'}>
          {data.map((item, index) => (
            <div
              className={cn(
                'h-[300px]',
                index !== 0 && getSector(index) === 1
                  ? 'col-span-2'
                  : 'col-span-3',
              )}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsBlock;
