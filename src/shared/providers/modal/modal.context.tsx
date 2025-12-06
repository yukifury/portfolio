import React from 'react';

export interface BasicModal {
  title: string;
  description: string;
  stack: string;
  className?: string;
  link?: string;
}

export interface ModalContextProps {
  callModal: (modal: BasicModal) => void;
}

export const ModalContext = React.createContext({} as ModalContextProps);

export const useModal = () => React.useContext(ModalContext);
