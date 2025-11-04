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
        'CMS using React, TypeScript and TailAdmin (+Tailwind). Focused on architecture and speed.',
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
      className={'space-y-10'}
    >
      <h3 className={'opacity-50 text-white 2xl:text-4xl text-2xl'}>
        professional-experience:
      </h3>

      <div className={'flex relative'}>
        <div className={'!h-full absolute border-white border-l-1'}></div>

        <ul
          className={
            'flex flex-col gap-10 pl-5 overflow-y-auto scrollbar-disable 2xl:max-h-[400px] max-h-[300px]'
          }
        >
          {experience.map((item, index) => (
            <li className={'flex flex-col gap-4 max-w-120'} key={index}>
              <span className={'text-white 2xl:text-md text-sm'}>
                {item.startYear}-{item.endYear}
              </span>
              <div className={'flex flex-col gap-1'}>
                <span className={'text-white 2xl:text-xl text-lg'}>
                  {item.position}
                </span>
                <span className={'text-white 2xl:text-xl text-lg'}>
                  {item.company}
                </span>
              </div>
              <p className={'text-white 2xl:text-md text-sm opacity-50'}>
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
