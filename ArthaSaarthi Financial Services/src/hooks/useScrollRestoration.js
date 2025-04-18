import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    const handleScrollRestore = () => {
      const scrollPosition = sessionStorage.getItem(
        `scroll_${location.pathname}`,
      );

      if (scrollPosition) {
        window.scrollTo({
          top: parseInt(scrollPosition, 10),
          behavior: 'instant',
        });
        sessionStorage.removeItem(`scroll_${location.pathname}`);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const handleBeforeUnload = () => {
      sessionStorage.setItem(
        `scroll_${location.pathname}`,
        window.scrollY.toString(),
      );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    handleScrollRestore();

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);
}
