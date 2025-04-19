import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const current = sectionIds
        .map((sectionId) => {
          const element = document.getElementById(sectionId);
          if (!element) return { id: sectionId, position: -1 };

          const rect = element.getBoundingClientRect();
          const position = rect.top + window.scrollY;
          return { id: sectionId, position };
        })
        .filter(({ position }) => position >= 0)
        .sort((a, b) => a.position - b.position)
        .find(({ position }) => scrollPosition >= position);

      setActiveSection(current?.id || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
