'use client';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Check if the window width is less than or equal to 768px for mobile
      if (window.innerWidth <= 768 && window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility); // Update visibility on resize

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 rounded-full text-white hover:bg-blue-800 transition duration-300"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
