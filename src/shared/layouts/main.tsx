import React, { type PropsWithChildren } from 'react';
import BreakpointsProvider from '../providers/breakpoints/breakpoints.provider';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <BreakpointsProvider>
      <div
        className={
          'h-full w-full 2xl:px-[100px] 2xl:py-[85px] px-[60px] py-[42px]'
        }
      >
        {children}
      </div>
    </BreakpointsProvider>
  );
};

export default MainLayout;
