import { useEffect, useRef, RefObject } from 'react';

export const useScrollAnimation = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const elementsRef = useRef<(Element | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          if (entry.target.classList.contains('card-animate-wrap')) {
            const cards = entry.target.querySelectorAll('.card-lift');
            cards.forEach((card, i) => {
              (card as HTMLElement).style.animationDelay = `${i * 100}ms`;
              card.classList.add('animate-stagger-lift');
            });
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [options]);

  const addToRefs = (el: Element | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
};
