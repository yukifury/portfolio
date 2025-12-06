import type { Breakpoints } from './breakpoints.types';
import { createContext, useContext } from 'react';

interface BreakpointContextInterface {
  breakpoints: {
    up: (bp: keyof Breakpoints) => boolean;
    down: (bp: keyof Breakpoints) => boolean;
  };
  width: number;
}

export const BreakpointContext = createContext(
  {} as BreakpointContextInterface,
);

export const useBreakpoints = () => useContext(BreakpointContext);
