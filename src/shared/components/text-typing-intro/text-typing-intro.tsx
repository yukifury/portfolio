import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { cn } from '../../lib/classnames.utils.ts';

export interface TextTypingIntroProps {
  onAnimationEnd?: () => void;
  className?: string;
  preRender: boolean;
}

const TextTypingIntro: React.FC<TextTypingIntroProps> = ({
  onAnimationEnd,
  className,
  preRender,
}) => {
  const handleEndTyping = () => {
    setTimeout(() => {
      onAnimationEnd?.();
    }, 750);
  };

  return (
    <motion.div
      layoutId={'typing-text-animation'}
      className={cn(' text-white', className)}
    >
      <TypeAnimation
        preRenderFirstString={preRender}
        wrapper={'h2'}
        className={
          'intro-after-content 2xl:text-5xl lg:text-4xl md:text-5xl text-2xl font-medium'
        }
        sequence={[
          'Frontend developer',
          () => {
            handleEndTyping();
          },
        ]}
        speed={1}
      />
    </motion.div>
  );
};

export default TextTypingIntro;
