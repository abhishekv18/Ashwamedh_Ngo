
import { useLocation, Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const ContactButtonHomeOnly = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  if (!isHome || !show) return null;

  return (
   
    <Link
      to="/get-involved/contact"
      className="fixed bottom-20 right-5 md:bottom-6 md:right-16 bg-gradient-to-t from-white via-orange-500 to-orange-600 hover:bg-orange-600 text-white p-3  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl rounded-full shadow-lg transition duration-300 z-50"
      title="Contact Us"
    >
      <Mail className="w-5 h-5" />
    </Link>

    
    
  );
};

export default ContactButtonHomeOnly;
