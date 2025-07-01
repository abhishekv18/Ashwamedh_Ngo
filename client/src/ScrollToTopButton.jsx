
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
   
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    
     className={`fixed bottom-7 right-7 z-50 group p-2 bg-gradient-to-t from-white via-orange-500 to-orange-600 hover:bg-orange-600 text-white rounded-full shadow-xl 
        transform transition-all duration-500 ease-out
        hover:scale-110 hover:-translate-y-1 hover:shadow-2xl
        active:scale-95 active:transition-none
        ${show ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
        title="Scroll to Top"
       >
     
    
      <span className="block transition-transform duration-300 group-hover:rotate-12 font-bold">↑</span>
    </button>
  );
};

export default ScrollToTopButton;