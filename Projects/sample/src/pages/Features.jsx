import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import feature1 from '../assets/comname.jpeg';
import feature2 from '../assets/comname.jpeg';
import feature3 from '../assets/comname.jpeg';

const Features = () => {
  const features = [
    {
      icon: feature1,
      title: "Feature Products",
      description: "We're passionate about the work we do and enjoy delivering featured products to our clients."
    },
    {
      icon: feature2,
      title: "The Big Ideas",
      description: "We will help your business set goals, objectives and generate big ideas that can lead a change in your business."
    },
    {
      icon: feature3,
      title: "Creative Solutions",
      description: "We always try to implement our creative ideas at the highest level. You can see it by looking at our portfolio."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <img src={feature.icon} alt={feature.title} className="w-24 h-24" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;