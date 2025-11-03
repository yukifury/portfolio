import Header from '../../shared/components/header/header.tsx';
import { SectionsButtons } from '../../shared/components/section-buttons/section-buttons.tsx';
import { useState } from 'react';
import { motion } from 'motion/react';

export interface MainMenuSectionProps {
  prerender?: boolean;
}

const MainMenuSection: React.FC<MainMenuSectionProps> = ({
  prerender = false,
}) => {
  const [showSectionsButtons, setShowSectionsButtons] = useState(prerender);

  const handleAnimationEnd = () => {
    setShowSectionsButtons(true);
  };

  return (
    <div className={'flex flex-col items-center justify-center w-full h-5/6'}>
      <div className={'w-full flex flex-col gap-25'}>
        <Header onAnimationEnd={handleAnimationEnd} animate={!prerender} />

        <motion.div
          className={'w-full items-center flex justify-center'}
          initial={prerender ? { opacity: 1 } : { opacity: 0 }}
          animate={
            showSectionsButtons || prerender ? { opacity: 1 } : { opacity: 0 }
          }
        >
          <SectionsButtons />
        </motion.div>
      </div>
    </div>
  );
};

export default MainMenuSection;
