import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';

// https://markoskon.com/scroll-reveal-animations-with-react-spring/#a-solution-with-css-transitions

interface Props {
  children?: ReactNode;
  timing?: string;
}

/**
 * A dead simple component for scroll reveal animation.
 */

function ScrollRevealAnimation({ children, timing = '0.7' }: Props) {
  return (
    <InView>
      {({ inView, ref }) => (
        <div
          ref={ref}
          style={
            inView
              ? { transition: `${timing}s ease-in-out`, opacity: 1 }
              : {
                  opacity: 0,
                  transform: 'translateY(-13px)',
                  transition: `${timing}s ease-in-out`,
                }
          }
        >
          {children}
        </div>
      )}
    </InView>
  );
}

export default ScrollRevealAnimation;
