import { useState, useEffect, useRef } from 'react';

/**
 * Hook that returns true once the element has entered the viewport (and stays true).
 * Keeps content visible when scrolling past it instead of resetting animations.
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Ratio of visibility (0-1). Default 0.1
 * @param {string} options.rootMargin - Margin around root. Default '-40px 0px -40px 0px'
 * @returns {[React.RefObject, boolean]} [ref, isInView]
 */
export function useInView({ threshold = 0.1, rootMargin = '-40px 0px -40px 0px' } = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isInView];
}

export default useInView;