import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import service1 from '../assets/login-bg.jpeg';
import service2 from '../assets/rg-logo.jpeg';
import service3 from '../assets/sess-123logo.png';
import service4 from '../assets/sess-logo.png';
import service5 from '../assets/sess_fav_icon.png';

const Services = () => {
  const services = [
    {
      icon: service1,
      title: "WEB DEVELOPMENT",
      description: "We turn your website into an efficacious means to connect with your audience and a high-performing marketing tool for your business."
    },
    {
      icon: service2,
      title: "CREATIVE DESIGN",
      description: "We are a team of creative designers, content producers, developers, and imaginative thinkers dedicated to meeting all your creative and design needs."
    },
    {
      icon: service3,
      title: "BRANDING SOLUTIONS",
      description: "SESS is your one-stop branding partner developing innovative branding ideas that are custom-made to meet your needs from ideas, through production."
    },
    {
      icon: service4,
      title: "DIGITAL MARKETING",
      description: "We offer an extensive range of digital marketing services, empowering you to pick the ones that are appropriate for you and which best suit your requirements and objectives."
    },
    {
      icon: service5,
      title: "Bulk SMS and BULK EMAIL",
      description: "In the digital age, timely communication is key to business success. Our Bulk SMS and Bulk Email Marketing Services help you connect with your customers instantly."
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We understand the significance of good design and a solid brand. Our zealous methodology to
            design pushes us to think differently; inspiring innovation across all our services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {service.description}
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="mt-6 flex justify-center"
              >
                <span className="text-primary text-sm font-semibold group-hover:underline cursor-pointer">
                  Learn More →
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;