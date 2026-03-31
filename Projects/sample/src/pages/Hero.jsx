import React from 'react';
import { motion } from 'framer-motion';
import TextRotate from '../UI/TextRotate';
import heroImg from '../assets/sess-123logo.png';

const Hero = () => {
  const rotatingTexts = [
    "WEB DESIGN & DEVELOPMENT",
    "CREATIVE DESIGN",
    "BRANDING SOLUTIONS",
    "DIGITAL MARKETING",
    "Bulk SMS and BULK EMAIL"
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-orange-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
              >
                GROW YOUR BUSINESS
              </motion.h1>
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                <TextRotate texts={rotatingTexts} period={2000} />
              </div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-600 text-lg max-w-lg"
            >
              Transform your digital presence with innovative solutions tailored to your business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img 
                src={heroImg} 
                alt="Hero Illustration" 
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;