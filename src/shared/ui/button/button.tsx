import React, { type CSSProperties } from 'react';
import { cn } from '../../lib/classnames.utils';

export interface ButtonProps {
  redirectSrc?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

const Button = ({
  redirectSrc,
  children,
  className,
  onClick,
  style,
  ...props
}: ButtonProps) => {
  const sharedClassNames = cn(
    className,
    'rounded-lg py-1 px-4 text-white transition select-none cursor-pointer',
  );

  if (redirectSrc) {
    return (
      <a
        {...props}
        style={style}
        onClick={onClick}
        target={'_blank'}
        className={cn(sharedClassNames, 'w-fit block')}
        href={redirectSrc}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...props}
      onClick={onClick}
      style={style}
      className={sharedClassNames}
    >
      {children}
    </button>
  );
};

export default Button;
