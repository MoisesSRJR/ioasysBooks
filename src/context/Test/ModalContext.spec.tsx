import { act, renderHook } from '@testing-library/react-hooks';
import { ModalProvider, useModal } from '../ModalContext';

describe('Modal Hook', () => {
  it('open a modal', async () => {
    const { result } = renderHook(() => useModal(), {
      wrapper: ModalProvider,
    });

    act(() => {
      result.current.openModal('teste');
    });

    expect(result.current.isModalOpen).toBe(true);
  });

  it('close a modal', async () => {
    const { result } = renderHook(() => useModal(), {
      wrapper: ModalProvider,
    });

    act(() => {
      result.current.removeModal();
    });

    expect(result.current.isModalOpen).toBe(false);
  });
});
