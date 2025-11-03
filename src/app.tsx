import { motion } from 'motion/react';
import MainLayout from './shared/layouts/main.tsx';
import SectionProvider from './shared/providers/section/section.provider.tsx';

const App = () => {
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
        <SectionProvider />
      </MainLayout>
    </>
  );
};

export default App;
