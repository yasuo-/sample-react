import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * Scroll to top on route change
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
};

ScrollToTop.displayName = 'ScrollToTop';
