import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import useScrollBar from '../hooks/useScrollBar';

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextData = {
  isModalOpen: boolean;
  modalId: string;
  openModal: (id: string) => void;
  removeModal: () => void;
};

const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  // Const para abrir o modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Const que abre o modal pelo id
  const [modalId, setModalId] = useState('');
  // Const que usa o scrollBar
  const { hideScrollBar, showScrollBar } = useScrollBar();
  const openModal = useCallback(
    (id: string) => {
      setModalId(id);
      setModalOpen(true);
      hideScrollBar();
    },
    [isModalOpen, modalId],
  );

  const removeModal = useCallback(() => {
    setModalOpen(false);
    setModalId('');
    showScrollBar();
  }, [isModalOpen, modalId]);

  const modalProps = useMemo(() => {
    return {
      isModalOpen,
      modalId,
      openModal,
      removeModal,
    };
  }, [isModalOpen, modalId]);

  return <ModalContext.Provider value={modalProps}>{children}</ModalContext.Provider>;
}

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}
