import { useState, useEffect } from 'react';

export interface Size {
  width: number | undefined;
  height: number | undefined;
}

/**
 * This hook returns current window size and updates state if window if resized.
 * @return [width, height]
 */

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

// https://usehooks.com/useWindowSize/
