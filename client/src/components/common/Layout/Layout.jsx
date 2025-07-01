import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../../../ScrollToTopButton';
import DonationPopup from '../../../DonationPopUp';
import FloatingContactButton from '../../../FloatingContactButton';
import FloatingWhatsAppButton from '../../../FloatingWhatsAppButton';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayoutRoutes = ['/admin-login' , '/admin-dashboard']; // pages where we hide header & footer

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      {!shouldHideLayout && <Header />}

      {/* Animated Main Content */}
      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.main>

      {/* Footer & Extras */}
      {!shouldHideLayout && (
        <>
          <Footer />
          <ScrollToTopButton />
          <FloatingWhatsAppButton />
          <DonationPopup />
        </>
      )}
    </div>
  );
};

export default Layout;



// src/components/common/Layout/Layout.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import ScrollToTopButton from '../../../ScrollToTopButton';
// import DonationPopup from '../../../DonationPopUp';
// import FloatingContactButton from '../../../FloatingContactButton';
// import FloatingWhatsAppButton from '../../../FloatingWhatsAppButton';
// import { useLocation } from 'react-router-dom';

// const Layout = ({ children }) => {
//    const location = useLocation();

//   const hideNavbarRoutes = ['/admin-login'];
//   return (
//     <div className="min-h-screen bg-gray-50 font-inter">
//        {!hideNavbarRoutes.includes(location.pathname) && <Header />}
//       {/* Header */}
//       <Header />

//       {/* Animated Main Content */}
//       <motion.main
//         className="flex-1"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         {children}
//       </motion.main>

//       {/* Footer */}
//       <Footer />
//       <ScrollToTopButton/>
//       {/* <FloatingContactButton/> */}
//       <FloatingWhatsAppButton/>
//       <DonationPopup/>
//     </div>
//   );
// };

// export default Layout;



