import TextTypingIntro from '../text-typing-intro/text-typing-intro.tsx';
import { cn } from '../../lib/classnames.utils.ts';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ContactButtons } from '../contact-buttons/contact-buttons.tsx';

export interface HeaderProps {
  className?: string;
  buttonsAlignment?: 'left' | 'right' | 'center';
  showFooter?: boolean;
  onAnimationEnd?: () => void;
  animate?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  className,
  buttonsAlignment = 'center',
  showFooter = true,
  onAnimationEnd,
  animate = false,
}) => {
  const [showOthers, setShowOthers] = useState(!animate);

  const handleAnimationEnd = () => {
    setShowOthers(true);

    if (onAnimationEnd) {
      onAnimationEnd();
    }
  };

  return (
    <>
      <motion.div
        layoutId={'header'}
        className={cn(
          className,
          'flex h-full flex-col items-center justify-center',
        )}
      >
        <motion.h1
          layoutId={'header-title'}
          initial={false}
          animate={showOthers ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn('2xl:text-4xl text-2xl !mb-3 text-white font-light')}
        >
          mamedov amir
        </motion.h1>

        <TextTypingIntro
          preRender={!animate}
          className={'mb-5'}
          onAnimationEnd={handleAnimationEnd}
        />

        <motion.div
          layoutId={'contact-buttons'}
          initial={false}
          animate={showOthers ? { opacity: 1 } : { opacity: 0 }}
        >
          <ContactButtons selfAlignment={buttonsAlignment} />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showFooter && (
          <motion.span
            exit={{ opacity: 0 }}
            key={'footer'}
            initial={{ opacity: 0 }}
            animate={showOthers && { opacity: 0.5 }}
            className={cn(
              'text-white absolute bottom-10 left-1/2 -translate-x-1/2 lg:text-md',
            )}
          >
            © 2025 Mamedov Amir. Please don't steal — write your own code.
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
