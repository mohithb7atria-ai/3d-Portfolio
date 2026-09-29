import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-cursor') ||
        target.closest('[data-cursor]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-[90] pointer-events-none rounded-full transition-transform duration-100 ease-out hidden md:block border ${
        isHovered
          ? 'w-14 h-14 -ml-7 -mt-7 border-[rgba(223,231,224,0.6)] bg-[rgba(223,231,224,0.07)] scale-110'
          : 'w-7 h-7 -ml-3.5 -mt-3.5 border-[rgba(223,231,224,0.35)] bg-transparent'
      }`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }}
    />
  );
}
