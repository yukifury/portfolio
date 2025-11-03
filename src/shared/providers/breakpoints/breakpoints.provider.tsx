import type { PropsWithChildren } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { Breakpoints } from './breakpoints.types';
import { BreakpointContext } from './breakpoints.context';

const gridBreakpoints: Breakpoints = {
  'xs': 0,
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536,
};

const BreakpointsProvider = ({ children }: PropsWithChildren) => {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => setWidth(window.innerWidth);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const breakpoints = useMemo(
    () => ({
      up: (bp: keyof Breakpoints) => width >= gridBreakpoints[bp],
      down: (bp: keyof Breakpoints) => width <= gridBreakpoints[bp],
    }),
    [width],
  );

  return (
    <BreakpointContext.Provider value={{ breakpoints }}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointsProvider;
