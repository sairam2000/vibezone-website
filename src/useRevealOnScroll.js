import { useEffect } from 'react';

const useRevealOnScroll = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom > 0) {
          element.classList.add('revealed');
        }
      }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
};

export default useRevealOnScroll;
