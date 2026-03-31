import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextRotate = ({ texts, period = 2000, className = "" }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(period);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(1000);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts, period, typingSpeed]);

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-primary font-bold"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 text-primary"
      >
        |
      </motion.span>
    </span>
  );
};

export default TextRotate;