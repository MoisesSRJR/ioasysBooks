import React from 'react';
import Container from './styles';

type ModalProps = {
  children: React.ReactNode;
  z?: number;
};

export function Modal({ children, z }: ModalProps) {
  return (
    <Container zIndex={z}>
      <div className="background">{children}</div>
    </Container>
  );
}

Modal.defaultProps = {
  z: 1,
};
