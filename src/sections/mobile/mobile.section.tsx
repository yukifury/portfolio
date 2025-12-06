import Header from '../../shared/components/header/header.tsx';
import ProjectsBlock from '../work/projects-block.tsx';
import ExperienceBlock from '../work/experience-block.tsx';
import { cn } from '../../shared/lib/classnames.utils.ts';
import type { Variants } from 'motion';
import { motion } from 'motion/react';

const MobileSection = () => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div
      className={'h-full flex flex-col space-y-[60px] w-full justify-between'}
    >
      <Header
        className={'!justify-items-start !items-start !h-auto'}
        animate={false}
        showFooter={false}
      />

      {/*About me & Skills*/}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ ...variants }}
        className={'flex md:flex-row flex-col w-full gap-10'}
      >
        <div className={'flex flex-col gap-4 md:w-1/2'}>
          <span
            key={'about-me'}
            className={'md:text-[36px] text-[20px] text-white opacity-50'}
          >
            about-me
          </span>

          <ul className={'text-white space-y-2 font-normal'}>
            {[
              <>
                Hi! I`m Amir —{' '}
                <span className={'text-pinky-light'}>frontend developer</span>{' '}
                based in Ireland, originally from Ukraine.
              </>,
              <>
                1.5 years of{' '}
                <span className={'text-pinky-light'}>
                  commercial experience
                </span>{' '}
                in UI development.
              </>,
              <>
                Worked on <span className={'text-pinky-light'}>e-commerce</span>
                , <span className={'text-pinky-light'}>CMS</span>,{' '}
                <span className={'text-pinky-light'}>landing-pages</span>,{' '}
                <span className={'text-pinky-light'}>
                  Telegram Webapps & Bots
                </span>
                ,{' '}
                <span className={'text-pinky-light'}>
                  third-party services integrations
                </span>{' '}
                and many more
              </>,
              <>
                Focused on{' '}
                <span className={'text-pinky-light'}>responsive</span> layouts,{' '}
                <span className={'text-pinky-light'}>clean code</span> and{' '}
                <span className={'text-pinky-light'}>usability</span>.
              </>,
              <>
                I care about <span className={'text-pinky-light'}>speed</span>,{' '}
                <span className={'text-pinky-light'}>architecture</span> and{' '}
                <span className={'text-pinky-light'}>bringing</span> design to
                life.
              </>,
              <>
                I study at the
                <span className={'text-pinky-light'}> KROK University</span> in
                Kyiv, majoring in{' '}
                <span className={'text-pinky-light'}>Computer Science</span>
              </>,
            ].map((item, index) => (
              <li className={'flex'} key={`about-me-list-item-${index}`}>
                <span
                  className={
                    'md:text-[20px] text-sm text-white opacity-50 mr-2'
                  }
                >
                  {index + 1}
                </span>
                <p>
                  <span className={'md:text-[20px] text-sm '}>{item}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className={'flex flex-col gap-4 md:w-1/2'}>
          <span
            key={'skills'}
            className={'md:text-[36px] text-[20px] text-white opacity-50'}
          >
            skills
          </span>

          <ul className={'text-white space-y-2 font-normal w-full'}>
            {[
              { name: 'Languages', text: 'JavaScript, TypeScript' },
              { name: 'Frameworks', text: 'React, Next.js, Preact' },
              { name: 'UI-kits', text: 'Shadcn/ui, Radix UI' },
              { name: 'CSS', text: 'Tailwind, Bootstrap, PostCSS, SASS' },
              { name: 'Testing', text: 'Vitest, Jest, React Testing Library' },
              { name: 'Documentation', text: 'Storybook, Docusaurus' },
              { name: 'Tools', text: 'Webstorm, Postman, Figma, Photoshop' },
              { name: 'Core', text: 'CSS3, HTML5, GitHub' },
              {
                name: 'Other libraries',
                text: 'Redux, Zustand, ESLint, Prettier, Tanstack Queries/Tables etc.',
              },
            ].map((item, index) => (
              <li className={'flex'} key={`skills-list-item-${index}`}>
                <span
                  className={
                    'md:text-[20px] text-sm text-white opacity-50 mr-2'
                  }
                >
                  {index + 1}
                </span>
                <p>
                  <span
                    className={'text-greenish-light md:text-[20px] text-sm '}
                  >
                    {item.name}:{' '}
                  </span>
                  <span className={'md:text-[20px] text-sm '}>{item.text}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/*Projects block*/}
      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView={'visible'}
        variants={{ ...variants }}
        className={'flex flex-col gap-4'}
      >
        <span className={'md:text-[36px] text-[20px] text-white opacity-50'}>
          side-projects:
        </span>

        <ProjectsBlock maxItems={4} />
      </motion.div>

      {/*Experience*/}
      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView={'visible'}
        variants={{ ...variants }}
      >
        <ExperienceBlock />
      </motion.div>

      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView={'visible'}
        variants={{ ...variants }}
        className={'w-full flex justify-center items-center md:mt-[40px] mt-5'}
      >
        <span
          className={cn('text-white md:text-sm text-xs text-center opacity-50')}
        >
          © 2025 Mamedov Amir. Please don't steal — write your own code.
        </span>
      </motion.div>
    </div>
  );
};

export default MobileSection;
