import { useScrollY } from '../hooks/useScrollY';

function ScrollTop() {
  const windowScrollY = useScrollY();

  return (
    <a
      href="#home"
      className={
        windowScrollY >= 460 ? 'scroll__top show__scroll' : 'scroll__top'
      }
    >
      <i className="bx bx-up-arrow-alt icon"></i>
    </a>
  );
}

export default ScrollTop;
