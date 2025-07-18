import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setShowScrollDown(false);
      } else {
        setIsVisible(false);
        setShowScrollDown(window.pageYOffset < window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial state
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowScrollDown(true);
  }, [location]);

  return (
    <>
      {/* Scroll Down Button - Only on Home Page */}
      {isHomePage && (
        <AnimatePresence>
          {showScrollDown && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollDown}
              style={{ 
                position: 'fixed',
                bottom: '2rem',
                left: '45.5%',
                transform: 'translateX(-50%)',
                zIndex: 40,
                minWidth: '140px'
              }}
              className="bg-white/10 backdrop-blur-md text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20 flex items-center justify-center space-x-2 border border-white/30"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium text-center">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center"
              >
                <FaArrowDown size={16} className="text-white" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>
      )}

      {/* Back to Top Button - On All Pages */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowUp size={20} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 bg-dark-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap"
            >
              Back to Top
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackToTop; 