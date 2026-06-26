'use client';

import { useState, useEffect } from 'react';

export interface UseScrollReturn {
  isScrolled: boolean;
  activeSection: string;
}

export function useScroll(sectionIds: string[], offset: number = 100): UseScrollReturn {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past threshold
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run immediately on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Section Observer for Scroll Spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -40% 0px`, // Offset to match navigation height
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return { isScrolled, activeSection };
}
