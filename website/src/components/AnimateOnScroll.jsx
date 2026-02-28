import React from 'react';
import { useInView } from '../hooks/useInView';

/**
 * Wraps children and animates them when they scroll into view.
 * Uses existing CSS classes: .animate-on-scroll and .animate-on-scroll.in-view
 */
const AnimateOnScroll = ({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  ...props
}) => {
  const [ref, isInView] = useInView({ threshold: 0.08, rootMargin: '-30px 0px -30px 0px' });

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll ${isInView ? 'in-view' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default AnimateOnScroll;
