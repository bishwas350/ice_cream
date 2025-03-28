import { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#F83D8E] hover:shadow-[0_5px_15px_rgba(248,61,142,0.6)] text-white py-4 px-4 rounded-full shadow-lg"
        >
          <FaChevronUp />

        </button>
      )}
    </div>
  );
};

export default BackToTopButton;