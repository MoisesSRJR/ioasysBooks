import { useEffect, useState } from 'react';

type WindowSizeProps = {
  width: number;
  height: number | undefined;
};

export default function useWindowSize() {
  // Const para utilizar Windows Size 
  const [windowSize, setWindowSize] = useState({} as WindowSizeProps);

  // UseEffect que verifica e exibe no tamanho correto da tela
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
