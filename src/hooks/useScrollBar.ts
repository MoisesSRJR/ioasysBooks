export default function useScrollBar() {
  // Função para remover scrollBar quando abrir o modal
  function hideScrollBar() {
    const windowWidth = window.innerWidth;
    const bodyWidth = document.getElementsByTagName('body')[0].clientWidth;
    const scrollWidth = windowWidth - bodyWidth;
    document.getElementsByTagName('body')[0].setAttribute('class', 'hidden-bar');
    document.getElementsByTagName('body')[0].setAttribute('style', `padding-right: ${scrollWidth}px`);
  }

  function showScrollBar() {
    document.getElementsByTagName('body')[0].removeAttribute('class');
    document.getElementsByTagName('body')[0].removeAttribute('style');
  }

  return { hideScrollBar, showScrollBar };
}
