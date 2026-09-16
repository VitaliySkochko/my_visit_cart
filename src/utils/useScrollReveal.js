import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin });

    observer.observe(section);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { sectionRef, isVisible };
}
