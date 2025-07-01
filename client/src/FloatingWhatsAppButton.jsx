// // components/FloatingWhatsAppButton.jsx
// import { FaWhatsapp } from "react-icons/fa";

// const FloatingWhatsAppButton = () => {
//   return (
//     <a
//       href="https://wa.me/919999999999" // Replace with your actual WhatsApp number
//       className="fixed bottom-6 left-1/2 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 z-50"
//       target="_blank"
//       rel="noopener noreferrer"
//       title="Chat on WhatsApp"
//     >
//       <FaWhatsapp size={24} />
//     </a>
//   );
// };

// export default FloatingWhatsAppButton;


import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppDrawer = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed z-50 p-3 rounded-full shadow-lg bg-[#00695C]/95 text-white hover:scale-105 hover:bg-green-600 transition-all
                  bottom-20 right-4 md:bottom-6 md:right-14"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Drawer Panel */}
    <div
  className={`fixed z-40 w-[92%] max-w-[300px] rounded-2xl shadow-2xl p-4 sm:p-5 transition-transform duration-500
              ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
              bottom-36 right-4 sm:bottom-36 sm:right-6
              max-h-[240px] sm:max-h-none overflow-y-auto
              bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90 text-white`}
>
  <p className="font-semibold text-[15px] sm:text-base mb-2 text-teal-100">
    Need Help?
  </p>
  <p className="text-sm sm:text-[15px] text-teal-50 mb-4 leading-relaxed">
    Chat with us on WhatsApp. Our team is ready to answer your queries and support you.
  </p>
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-[15px] font-medium px-4 py-2 rounded-md block text-center shadow-md transition duration-300"
  >
    Open WhatsApp
  </a>
</div>

    </>
  );
};

export default WhatsAppDrawer;
