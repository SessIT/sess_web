import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutImg from '../assets/comname.jpeg';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={aboutImg} 
                alt="About SESS" 
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 -z-10"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Sri Easwari Scientific Solution - Tech
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 text-gray-600"
            >
              <p>
                During the last two decades, there has been a significant revolution where a large part of our process has been digitized. Therefore, every company must engage in digital marketing to reach its customers. Now you must be asking yourself, what is digital marketing? And which company to choose to get the right service. Digital marketing is a very effective way to drive traffic to your website, generate leads and retain customers. Businesses use digital channels such as Google search, social media, email and websites to communicate with their current and future customers. The most effective digital marketing strategy is to generate the maximum number of leads for the lowest cost per lead.
              </p>
              <p>
                Step into SESS and lose your way into the enthralling world of innovative concepts. You have a message to divulge to the world, and we know how and where to tell it. You need to give us only a glimpse of what you want and leave the rest to Team SESS – to plan, create and implement the branding and present your message to the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Read More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;