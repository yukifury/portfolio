import React from 'react';
import Button from '../../ui/button/button.tsx';
import { cn } from '../../lib/classnames.utils.ts';
import { motion } from 'motion/react';

export interface ContactButtonsProps {
  className?: string;
  selfAlignment?: 'left' | 'right' | 'center';
}

export interface ContactButtonProps {
  logoSrc: string;
  alt?: string;
  color?: string;
  urlSrc?: string;
}

export const ContactButtons: React.FC<ContactButtonsProps> = ({
  className,
  selfAlignment = 'center',
}) => {
  const ContactButtonsData: ContactButtonProps[] = [
    {
      logoSrc: '/svgs/github.svg',
      alt: 'github',
      color: '#241660',
      urlSrc: 'https://github.com/yukifury',
    },
    {
      logoSrc: '/svgs/gmail.svg',
      alt: 'gmail',
      color: '#EA4335',
      urlSrc: 'mailto:yukifury.work@gmail.com',
    },
    {
      logoSrc: '/svgs/linkedin.svg',
      alt: 'linkedin',
      color: '#0A66C2',
      urlSrc: 'https://www.linkedin.com/in/yukifury/',
    },
  ];

  return (
    <motion.div
      className={cn(
        'relative md:w-auto w-full',
        selfAlignment === 'center' && 'self-center',
        selfAlignment === 'right' && 'self-end',
        selfAlignment === 'left' && 'self-start',
      )}
    >
      <div className={cn('flex gap-2', className)}>
        {ContactButtonsData.map((button, index) => (
          <ContactButton key={button.alt + index.toString()} {...button} />
        ))}
      </div>
    </motion.div>
  );
};

const ContactButton: React.FC<ContactButtonProps> = ({
  logoSrc,
  alt = 'Contact button logo',
  color,
  urlSrc,
}) => {
  return (
    <Button
      redirectSrc={urlSrc}
      className={cn(
        'transition duration-400 md:!w-auto !w-full lg:!h-auto !h-[50px]',
        alt === 'github' && 'hover:shadow-github',
        alt === 'linkedin' && 'hover:shadow-linkedin',
        alt === 'gmail' && 'hover:shadow-gmail',
      )}
      style={{ backgroundColor: `${color}` }}
    >
      <div
        className={
          'lg:h-6 lg:w-6 w-full h-full flex items-center justify-center'
        }
      >
        <img src={logoSrc} alt={alt} />
      </div>
    </Button>
  );
};
