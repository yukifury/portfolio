import { motion } from 'motion/react';
import MainLayout from './shared/layouts/main.tsx';
import SectionProvider from './shared/providers/section/section.provider.tsx';
import { isValidSection } from './shared/providers/section/sections.data.tsx';
import { useBreakpoints } from './shared/providers/breakpoints/breakpoints.context.tsx';

const App = () => {
  const { breakpoints } = useBreakpoints();

  const section = breakpoints.down('lg')
    ? 'mobile'
    : window.location.hash.substring(1);

  return (
    <>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        className={'absolute'}
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'center',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        src="/imgs/noise.webp"
        alt="noise background"
      />
      <MainLayout>
        <SectionProvider
          defaultSection={isValidSection(section) ? section : undefined}
        />
      </MainLayout>
    </>
  );
};

export default App;
