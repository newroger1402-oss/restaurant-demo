import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const elementId = decodeURIComponent(hash.slice(1));
    const offset = 96;
    let attempts = 0;

    const scrollToAnchor = () => {
      const target = document.getElementById(elementId);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }

      attempts += 1;
      if (attempts < 10) {
        window.setTimeout(scrollToAnchor, 60);
      }
    };

    scrollToAnchor();
  }, [pathname, hash]);

  return null;
};