import { useState, useEffect } from 'react';

/**
 * This hook returns window.scrollY
 * @return window.scrollY
 */

export function useScrollY() {
  const [windowScrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollTop = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', scrollTop);
    scrollTop();
    return () => window.removeEventListener('scroll', scrollTop);
  }, []);

  return windowScrollY;
}

// https://usehooks.com/useWindowSize/
