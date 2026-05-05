'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes disappear {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-25rem);
          }
        }
        .scroll-to-top-disappear {
          animation: disappear 0.5s ease-in-out forwards;
        }
      `}</style>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold shadow-xl transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl active:scale-95 z-50 flex items-center justify-center group ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-12 pointer-events-none'
        } ${isClicked ? 'scroll-to-top-disappear pointer-events-none' : ''}`}
        aria-label="Scroll to top"
      >
        <span className="transition-transform duration-300 group-hover:-translate-y-1 text-xl">
          ↑
        </span>
      </button>
    </>
  );
}
