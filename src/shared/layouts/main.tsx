import React, { type PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        'h-full w-full 2xl:px-[100px] 2xl:py-[85px] lg:px-[60px] lg:py-[42px] md:p-[40px] px-4 py-8'
      }
    >
      {children}
    </div>
  );
};

export default MainLayout;
