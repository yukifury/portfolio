import React, { type ReactNode, useCallback, useState } from 'react';
import { type BasicModal, ModalContext } from './modal.context.tsx';
import { AnimatePresence, motion } from 'motion/react';
import type { Variants } from 'motion';

export interface AlertProviderProps {
  children?: ReactNode;
}

const ModalProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [modal, setModal] = useState<BasicModal | null>(null);

  const callModal = useCallback((modal: BasicModal) => {
    setModal(modal);

    setIsShow(true);
  }, []);

  const handleClose = () => {
    setIsShow(false);
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <ModalContext.Provider value={{ callModal }}>
      {children}

      <AnimatePresence>
        {isShow && modal && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ ...variants }}
            className={
              'w-screen h-screen fixed inset-0 flex items-center justify-center z-[9999]'
            }
          >
            <div
              onClick={handleClose}
              className="fixed inset-0 z-[9999] bg-black/50"
              aria-hidden="true"
            />

            <div className="w-full bg-black z-[10000] shadow-float-blueish text-white max-w-[800px] rounded-lg  xl:p-20 p-10 lg:mx-0 mx-5">
              <h2 className={'xl:text-3xl mb-5 uppercase text-2xl'}>
                {modal.title}
              </h2>

              <p className={'xl:text-xl text-sm mb-10'}>{modal.description}</p>

              <p className={'xl:text-xl text-sm mb-10'}>
                <span className={'text-greenish'}>Tech stack: </span>{' '}
                {modal.stack}
              </p>

              {modal.link && (
                <span className={'xl:text-xl text-sm break-all'}>
                  View more:{' '}
                  <a
                    className={'text-pinky underline'}
                    href={modal.link}
                    target={'_blank'}
                  >
                    {modal.link}
                  </a>
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
