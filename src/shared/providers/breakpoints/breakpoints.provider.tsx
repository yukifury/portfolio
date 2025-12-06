import { type PropsWithChildren, useCallback } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { Breakpoints } from './breakpoints.types';
import { BreakpointContext } from './breakpoints.context';

const gridBreakpoints: Breakpoints = {
  'xs': 0,
  'sm': 640,
  'md': 768,
  'lg': 1023,
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

  const up = useCallback(
    (bp: keyof Breakpoints) => {
      return width >= gridBreakpoints[bp];
    },
    [width],
  );

  const down = useCallback(
    (bp: keyof Breakpoints) => {
      return width <= gridBreakpoints[bp];
    },
    [width],
  );

  const breakpoints = useMemo(
    () => ({
      up: up,
      down: down,
    }),
    [down, up],
  );

  return (
    <BreakpointContext.Provider value={{ breakpoints, width }}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointsProvider;
