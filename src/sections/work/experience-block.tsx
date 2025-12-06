import { motion } from 'motion/react';
import type { Variants } from 'motion';

export interface ExperienceItem {
  startYear: number | string;
  endYear: number | string;
  company: string;
  position: string;
  description: string;
}

const ExperienceBlock = () => {
  const experience: ExperienceItem[] = [
    {
      startYear: 2025,
      endYear: 'Present',
      company: 'Proova',
      position: 'Frontend developer',
      description:
        'CMS using React, TypeScript and TailAdmin (+Tailwind). Next.JS for landing pages. Focused on architecture and speed.',
    },
    {
      startYear: 2024,
      endYear: 2025,
      company: 'Millida',
      position: 'Frontend developer',
      description:
        'E-commerce game store in Telegram MiniApps and CMS. UI implementation, team collaboration. Next.js, Typescript and Shadcn/ui (Tailwind).',
    },

    {
      startYear: 2023,
      endYear: 2024,
      company: 'MetaLabs',
      position: 'Frontend developer',
      description:
        'Created an admin panel (CMS) with React, TypeScript, Bootstrap. Developed responsive landing pages',
    },
  ];

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{ ...variants }}
      className={'md:space-y-10 space-y-5'}
    >
      <h3
        className={
          'opacity-50 text-white 2xl:text-4xl lg:text-2xl md:text-[36px] text-xl'
        }
      >
        professional-experience:
      </h3>

      <div className={'flex relative'}>
        <div className={'!h-full absolute border-white border-l-1'}></div>

        <ul
          className={
            'flex flex-col gap-10 lg:pl-5 md:pl-4 pl-3 overflow-y-auto scrollbar-disable 2xl:max-h-[400px] lg:max-h-[300px] max-h-auto'
          }
        >
          {experience.map((item, index) => (
            <li
              className={'flex flex-col lg:gap-4 md:gap-3 gap-2 max-w-120'}
              key={index}
            >
              <span
                className={
                  'text-white 2xl:text-md lg:text-sm md:text-md text-xs'
                }
              >
                {item.startYear}-{item.endYear}
              </span>
              <div className={'flex flex-col gap-1'}>
                <span
                  className={
                    'text-white 2xl:text-xl lg:text-lg md:text-xl text-sm'
                  }
                >
                  {item.position}
                </span>
                <span
                  className={
                    'text-white 2xl:text-xl lg:text-lg md:text-xl text-sm'
                  }
                >
                  {item.company}
                </span>
              </div>
              <p
                className={
                  'text-white 2xl:text-md lg:text-sm md:text-md text-xs opacity-50'
                }
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceBlock;
