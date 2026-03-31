import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBriefcase
} from 'react-icons/fa';
import logo from '../assets/sess_logo_png_color.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/sesstechno', color: 'hover:bg-blue-600' },
    { icon: FaInstagram, href: 'https://www.instagram.com/sesstechno/', color: 'hover:bg-pink-600' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/sesschennai/', color: 'hover:bg-blue-700' },
    { icon: FaYoutube, href: 'https://www.youtube.com/sess', color: 'hover:bg-red-600' },
    { icon: FaTwitter, href: 'https://twitter.com/sesstechno', color: 'hover:bg-blue-400' },
  ];

  const services = [
    'Web Development',
    'Creative Design',
    'Branding Solutions',
    'Digital Marketing',
    'Bulk SMS & Email'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-light pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <motion.div {...fadeInUp} className="space-y-6">
            <img src={logo} alt="SESS Logo" className="h-16 w-auto" />
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 shadow-md`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Pages */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Pages</h3>
            <ul className="space-y-2">
              {['Home', 'About us', 'Contact us'].map((page, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={`/${page.toLowerCase().replace(/\s+/g, '')}`} className="text-gray-600 hover:text-primary transition-colors">
                    {page}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Contact us</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  No.2/298, ANE Garden, Paraniputhur Post, Iyyappanthangal, Chennai - 600 122.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <FaBriefcase className="text-primary" />
                <span className="text-gray-600">Careers:</span>
                <a href="tel:+919444427748" className="text-gray-600 hover:text-primary">+91 94444 27748</a>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <FaPhone className="text-primary" />
                <span className="text-gray-600">Office:</span>
                <a href="tel:+919444459430" className="text-gray-600 hover:text-primary">+91 94444 59430</a>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <FaEnvelope className="text-primary" />
                <a href="mailto:info@sess.co.in" className="text-gray-600 hover:text-primary">info@sess.co.in</a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-300 text-center"
        >
          <p className="text-gray-600">
            Copyright © {currentYear} All Rights Reserved by <span className="font-bold text-primary">SESS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;