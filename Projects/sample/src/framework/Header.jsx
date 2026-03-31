import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/sess_logo_png_color.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        'Web Development',
        'Creative Design',
        'Branding Solutions',
        'Digital Marketing',
        'Bulk SMS and BULK EMAIL'
      ]
    },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="logo"
          >
            <Link to="/">
              <img src={logo} alt="SESS Logo" className="h-12 md:h-16 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.li>
            ))}
            
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block"
              >
                Contact us
              </Link>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-gray-700 hover:text-primary transition-colors z-50"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 bg-white lg:hidden z-40 pt-20"
              >
                <ul className="flex flex-col items-center space-y-6 p-8">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full text-center"
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-xl text-gray-700 hover:text-primary transition-colors block py-2"
                      >
                        {link.name}
                      </Link>
                      
                      {link.dropdown && (
                        <div className="mt-2 space-y-2">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-gray-500 hover:text-primary py-1"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.li>
                  ))}
                  
                  <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all inline-block"
                    >
                      Contact us
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;