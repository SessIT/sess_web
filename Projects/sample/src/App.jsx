// import { Routes, Route } from "react-router-dom";

// import Login from "./pages/Home";
// // import Dashboard from "./pages/Dashboard";
// // import Dashboardbak from "./pages/Dashboardbak";

// function App() {
//   return (
//     <Routes>
//       {/* Default */}
//       <Route path="/" element={<Login />} />
//       {/* <Route path="/home" element={<Dashboard />} />
//       <Route path="/homebak" element={<Dashboardbak />} /> */}
//     </Routes>
//   );
// }

// export default App;






import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './framework/Header';
import Footer from './framework/Footer';
import Hero from './pages/Hero';
import Features from './pages/Features';
import AboutSection from './pages/AboutSection';
import Services from './pages/Services';
import ScrollToTop from './UI/ScrollTop';
import Preloader from './UI/Preloader';

// Placeholder components for other pages
const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen pt-24"
  >
    <div className="container-custom">
      <h1 className="text-4xl font-bold">About Us</h1>
    </div>
  </motion.div>
);

const Contact = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen pt-24"
  >
    <div className="container-custom">
      <h1 className="text-4xl font-bold">Contact Us</h1>
    </div>
  </motion.div>
);

const ServiceDetail = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen pt-24"
  >
    <div className="container-custom">
      <h1 className="text-4xl font-bold">Service Details</h1>
    </div>
  </motion.div>
);

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="butter"
      >
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <AboutSection />
              <Services />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </motion.div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;