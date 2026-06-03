import { motion } from 'motion/react';
import type { Variants } from 'motion';

export interface ExperienceItem {
  startYear: number | string;
  endYear: number | string;
  company: string;
  position: string;
  description: string[];
}

const ExperienceBlock = () => {
  const experience: ExperienceItem[] = [
    {
      startYear: 'Jun 2025',
      endYear: 'Mar 2026',
      company: 'Proova',
      position: 'Frontend developer',
      description: [
        '• Migrated the legacy admin panel to a Feature-Sliced Design architecture,\n' +
          'reducing technical debt and improving code maintainability, which\n' +
          'accelerated feature development by ~30%.\n',
        '• Refactored the API layer and integrated TanStack React Query, introducing\n' +
          'caching and request deduplication that reduced redundant API calls by\n' +
          '~40% and improved data consistency across the application.\n',
        '• Designed and implemented a DSL-driven auto-generating table system,\n' +
          'standardizing data presentation and reducing development time for new\n' +
          'admin screens by ~50%.\n',
        '• Developed and optimized Next.js landing pages, implementing code\n' +
          'splitting and lazy loading to reduce bundle size by ~35% and improve page\n' +
          'load time by ~25%.',
      ],
    },
    {
      startYear: 'Feb 2024',
      endYear: 'Jun 2025',
      company: 'Self Employed - Freelance',
      position: 'Frontend developer',
      description: [
        '• Built React interfaces for gaming server operations and white-label\n' +
          'commerce products, with a focus on maintainability and architecture.\n',
        '• Reworked a legacy gaming server management web interface into a\n' +
          'faster, more stable product used across multiple projects and 30+ server\n' +
          'instances, covering player activity, logs, console access, permissions, and\n' +
          'moderation workflows.\n',
        '• Developed a reusable TanStack Table system with auto-generated columns,\n' +
          'i18n labels, pagination, filtering, and extensible custom cells.\n',
        '• Built a white-label commerce CMS covering 10+ core modules, including\n' +
          'stores, products, categories, clients, orders, mailings, RBAC permissions,\n' +
          'audit logs, and support.\n',
        '• Implemented configurable storefront flows that let new partner stores\n' +
          'launch in ~10 admin actions, integrating dynamic settings into separate\n' +
          'Next.js storefront instances.',
      ],
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
                {item.startYear} - {item.endYear}
              </span>
              <div className={'flex flex-col gap-1'}>
                <span
                  className={
                    'text-white 2xl:text-xl lg:text-lg md:text-xl text-sm italic'
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
              <div
                className={
                  'text-white 2xl:text-md lg:text-sm md:text-md text-xs opacity-50 flex flex-col gap-3'
                }
              >
                {item.description.map((item) => (
                  <span>{item}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceBlock;
