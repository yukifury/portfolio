import React, { type PropsWithChildren } from 'react';
import BreakpointsProvider from '../providers/breakpoints/breakpoints.provider';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <BreakpointsProvider>
      <div className={'h-full w-full lg:px-[100px] lg:py-[85px]'}>
        {children}
      </div>
    </BreakpointsProvider>
  );
};

export default MainLayout;
