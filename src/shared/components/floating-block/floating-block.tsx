import { motion } from 'motion/react';
import type { Variants } from 'motion';
import { cn } from '../../lib/classnames.utils.ts';
import { useSectionContext } from '../../providers/section/section.context.ts';
import { AllSections } from '../../providers/section/sections.data.tsx';

export interface FloatingBlockProps {
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
  name?: string;
  backgroundImg?: string;
}

const FloatingBlock: React.FC<FloatingBlockProps> = ({
  className,
  containerClassName,
  children,
  name,
  backgroundImg,
}) => {
  const { setSection } = useSectionContext();

  const variants: Variants = {
    hidden: {
      x: -1000,
      y: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 1,
        mass: 0.1,
        stiffness: 4,
        velocity: 20,
        restSpeed: 4,
        restDelta: 0.2,
      },
    },
    exit: {
      x: 0,
      y: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const handleHeaderButtonClick = () => {
    setSection(AllSections['re-main']);
  };

  return (
    <>
      <motion.div
        key={`floating-block-${name}`}
        className={cn('rounded-xl shadow-lg relative', containerClassName)}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{ ...variants }}
      >
        <motion.div
          className={cn(
            'w-full h-full rounded-lg overflow-hidden overflow-y-auto relative',
            className,
          )}
          animate={{
            x: [0, -2, 2, -2, 2, 0],
            y: [0, 1, -1, 1, -1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
          }}
        >
          <div
            className={
              'w-full flex justify-between items-start z-10 relative xxl:mb-10 mb-4'
            }
          >
            <span className={'text-xl text-white opacity-50'}>{name}</span>

            <div className={'flex gap-2 *:cursor-pointer'}>
              {['bg-menu-yellow', 'bg-menu-green', 'bg-menu-red'].map(
                (item) => (
                  <a key={item} href={'#'}>
                    <div
                      onClick={handleHeaderButtonClick}
                      className={'rounded-full h-5 w-5' + ' ' + item}
                    ></div>
                  </a>
                ),
              )}
            </div>
          </div>

          <div className={'relative w-4/6 z-10 text-shadow-lg'}>{children}</div>

          {backgroundImg && (
            <img
              src={backgroundImg}
              alt="Background image"
              className={
                'user-select-none pointer-events-none absolute object-cover right-0 bottom-0 aspect-square xl:w-4/6 lg:w-4/7 md:w-3/6 w-1/3 z-0'
              }
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default FloatingBlock;
