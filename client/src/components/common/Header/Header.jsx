

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart, Users } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Updated menu items with proper React Router paths
//   const menuItems = [
//     { 
//       name: 'Who We Are', 
//       href: '/who-we-are',
//       dropdown: [
//         { name: 'About Us', href: '/who-we-are/about-us' },
//         { name: 'Why Children?', href: '/who-we-are/why-children' },
//         { name: 'Our Approach', href: '/who-we-are/our-approach' }
//       ]
//     },
//     { 
//       name: 'What We Do', 
//       href: '/what-we-do',
//       dropdown: [
//         { name: 'Programs', href: '/what-we-do/programs' },
//         { name: 'Projects', href: '/what-we-do/projects' },
//         { name: 'Activities', href: '/what-we-do/activities' },
//         { name: 'Impact Stories', href: '/what-we-do/impact-stories' }
//       ]
//     },
//     { 
//       name: 'Get Involved', 
//       href: '/get-involved',
//       dropdown: [
//         { name: 'Donate', href: '/get-involved/donate' },
//         { name: 'Volunteer', href: '/get-involved/volunteer' },
//        { name:'Contact Us', href: '/get-involved/contact' },
       
//       ]
//     },
//     { 
//       name: 'Resources', 
//       href: '/resources',
//       dropdown: [
      
//         { name: 'Gallery', href: '/resources/gallery' },
      
      
//       ]
//     }
//   ];

//   const handleDropdownToggle = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//     setActiveDropdown(null);
//   };

//   // Helper function to check if current path matches menu item
//   const isActivePath = (path) => {
//     return location.pathname === path || location.pathname.startsWith(path + '/');
//   };

//   // Helper function to check if dropdown has active item
//   const hasActiveDropdownItem = (dropdown) => {
//     return dropdown.some(item => location.pathname === item.href);
//   };

//   return (
//     <>
//       {/* Enhanced Contact Bar - Large screens only */}
//       <div className="bg-gradient-to-r from-slate-50 to-orange-50 border-b text-white hidden lg:block relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-orange-800/30"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
//           <div className="flex items-center justify-between h-10 text-sm">
//             {/* Left Side - Contact Info */}
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2 text-orange-500 transition-all duration-300 group cursor-pointer">
//                 <div className="p-1.5 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300">
//                   <Mail className="h-3.5 w-3.5 text-orange-500" />
//                 </div>
//                 <div>
//                   <div className="font-medium text-orange-600 text-sm">info@ashwamedhfoundation.org</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-2 text-orange-100 hover:text-white transition-all duration-300 group cursor-pointer">
//                 <div className="p-1.5 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300">
//                   <Phone className="h-3.5 w-3.5 text-orange-500" />
//                 </div>
//                 <div>
//                   <div className="font-medium text-orange-600 text-sm">+91 9115 9115 00</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Side - Social Media */}
//             <div className="flex items-center space-x-4">
//               <span className="text-orange-400 font-medium text-sm">Follow Us:</span>
//               <div className="flex space-x-2">
//                 {[
//                   { name: 'facebook', icon: Facebook, color: 'hover:bg-orange-600 hover:text-white' },
//                     { name: 'twitter', icon: Twitter, color: 'hover:bg-orange-600 hover:text-white' },
//                     { name: 'instagram', icon: Instagram, color: 'hover:bg-orange-600 hover:text-white' },
//                     { name: 'linkedin', icon: Linkedin, color: 'hover:bg-orange-600 hover:text-white' }
//                 ].map((social) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={social.name}
//                       href={`#${social.name}`}
//                       className={`w-7 h-7 ${social.color} rounded-full flex items-center justify-center text-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 group`}
//                     >
//                       <IconComponent className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-300" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header 
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-orange-100' 
//             : 'bg-white shadow-lg border-b border-gray-100'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-18 lg:h-20">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link to="/" className="flex items-center group">
//                 <div className="relative p-2">
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                   <img 
//                     src="/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
//                     alt="Ashwamedh Foundation Logo"
//                     className="w-16 h-12 sm:w-18 sm:h-14 lg:w-28 lg:h-19 group-hover:scale-105 transition-transform duration-300 relative z-10"
//                     // className="w-24 h-16 sm:w-28 sm:h-20 lg:w-32 lg:h-24 group-hover:scale-105 transition-transform duration-300 relative z-10"
//                   />
//                 </div>
//                 {/* Foundation name - Desktop only */}
//                 <div className=" hidden lg:block">
//                   <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
//                     ashwamedh
//                   </div>
//                   <div className="text-sm font-bold text-gray-600 -mt-1 tracking-widest uppercase">
//                     Foundation
//                   </div>
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-1">
//               {menuItems.map((item, index) => (
//                 <div key={index} className="relative group">
//                   <button
//                     className={`relative flex items-center px-4 py-2.5 text-md font-semibold rounded-lg transition-all duration-300 group ${
//                       isActivePath(item.href) || hasActiveDropdownItem(item.dropdown)
//                         ? 'text-orange-600 bg-orange-50'
//                         : 'text-gray-700 hover:text-orange-600'
//                     }`}
//                     onMouseEnter={() => setActiveDropdown(index)}
//                     onMouseLeave={() => setActiveDropdown(null)}
//                   >
//                     <span className="relative z-10">{item.name}</span>
//                     <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 relative z-10" />
//                     <div className="absolute inset-0 bg-orange-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
//                   </button>
                  
//                   {/* Dropdown Menu */}
//                   <div 
//                     className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${
//                       activeDropdown === index 
//                         ? 'opacity-100 visible translate-y-0' 
//                         : 'opacity-0 invisible -translate-y-4'
//                     }`}
//                     onMouseEnter={() => setActiveDropdown(index)}
//                     onMouseLeave={() => setActiveDropdown(null)}
//                   >
//                     <div className="py-2">
//                       {item.dropdown.map((subItem, subIndex) => (
//                         <Link
//                           key={subIndex}
//                           to={subItem.href}
//                           className={`relative block px-5 py-3 text-sm transition-all duration-300 group ${
//                             location.pathname === subItem.href
//                               ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg mx-1'
//                               : 'text-gray-700 hover:text-orange-600'
//                           }`}
//                         >
//                           <div className="relative z-10">
//                             <div className="font-semibold">{subItem.name}</div>
//                           </div>
//                           <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg mx-1 scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </nav>

           


// <div className="hidden lg:flex items-center space-x-2">
//   <Link
//     to="/donate"
//     className="relative bg-gradient-to-r flex items-center from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden group"
//   >
//     <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//     <span className="relative z-10 flex items-center gap-2 font-semibold">
//       <Heart className="w-4 h-4" />
//       Donate
//     </span>
//   </Link>

//   <Link
//     to="/join-us"
//     className="relative bg-gradient-to-r flex items-center from-[#00695C]/95 to-[#004D40]/90 hover:from-teal-800 hover:to-teal-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden group"
//   >
//     <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//     <span className="relative z-10 flex items-center gap-2 font-semibold">
//       <Users className="w-4 h-4" />
//       Join Us
//     </span>
//   </Link>
// </div>

//             {/* Mobile - Right Side with Buttons and Menu */}
//             <div className="lg:hidden flex items-center space-x-1">
//               {/* Mobile Donate Button */}
//               <Link
//                 to="/donate"
//                 className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
//               >
//                 <span className="font-semibold">Donate</span>
//               </Link>
              
//               {/* Mobile Join Us Button */}
//               <Link
//                 to="/join-us"
//                 className="relative bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90 hover:from-teal-800 hover:to-teal-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
//               >
//                 <span className="font-semibold">Join</span>
//               </Link>
              
//               {/* Mobile Menu Button */}
//               <button
//                 onClick={handleMenuToggle}
//                 className="relative p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 group"
//               >
//                 <div className="absolute inset-0 bg-orange-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
//                 {isMenuOpen ? <X className="h-6 w-6 relative z-10" /> : <Menu className="h-6 w-6 relative z-10" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div 
//             className={`lg:hidden transition-all duration-500 ease-in-out ${
//               isMenuOpen 
//                 ? 'max-h-screen opacity-100 pb-6' 
//                 : 'max-h-0 opacity-0 overflow-hidden'
//             }`}
//           >
//             <div className="border-t border-gray-100 pt-4 bg-gradient-to-b from-gray-50 to-white rounded-b-xl -mx-4 px-4">
//               <Link 
//                 to="/" 
//                 className={`block py-3.5 px-5 text-sm font-semibold rounded-lg transition-all duration-300 mb-2 ${
//                   location.pathname === '/'
//                     ? 'text-orange-600 bg-orange-50'
//                     : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
              
//               {menuItems.map((item, index) => (
//                 <div key={index} className="border-b border-orange-50 last:border-b-0 mb-1">
//                   <button
//                     onClick={() => handleDropdownToggle(index)}
//                     className={`flex items-center justify-between w-full py-3.5 px-5 text-sm font-semibold rounded-lg transition-all duration-300 ${
//                       isActivePath(item.href) || hasActiveDropdownItem(item.dropdown)
//                         ? 'text-orange-600 bg-orange-50'
//                         : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
//                     }`}
//                   >
//                     {item.name}
//                     <ChevronDown 
//                       className={`h-4.5 w-4.5 transition-transform duration-300 text-orange-500 ${
//                         activeDropdown === index ? 'rotate-180' : ''
//                       }`} 
//                     />
//                   </button>
                  
//                   <div 
//                     className={`overflow-hidden transition-all duration-500 ${
//                       activeDropdown === index ? 'max-h-72 pb-3' : 'max-h-0'
//                     }`}
//                   >
//                     <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-lg mx-2 p-2 border border-orange-200/50">
//                       {item.dropdown.map((subItem, subIndex) => (
//                         <Link
//                           key={subIndex}
//                           to={subItem.href}
//                           className={`block py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${
//                             location.pathname === subItem.href
//                               ? 'text-orange-600 bg-white shadow-sm border border-orange-200'
//                               : 'text-gray-600 hover:text-orange-600 hover:bg-white/70'
//                           }`}
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
              
//               {/* Mobile Contact Info */}
//               <div className="pt-4 border-t border-orange-200 mt-4 space-y-3 bg-gradient-to-t from-orange-50 to-white rounded-lg p-3">
//                 <div className="flex items-center space-x-3 text-gray-600">
//                   <div className="p-1.5 bg-orange-100 rounded-lg">
//                     <Phone className="h-3.5 w-3.5 text-orange-500" />
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-800 text-sm">+91 9115 9115 00</div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3 text-gray-600">
//                   <div className="p-1.5 bg-orange-100 rounded-lg">
//                     <Mail className="h-3.5 w-3.5 text-orange-500" />
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-800 text-sm">info@ashwamedhfoundation.org</div>
//                   </div>
//                 </div>
                
//                 {/* Mobile Social Media */}
//                 <div className="flex items-center justify-center space-x-3 pt-3">
//                   {[
//                   { name: 'facebook', icon: Facebook, color: 'hover:bg-orange-600 hover:text-white' },
//                     { name: 'twitter', icon: Twitter, color: 'hover:bg-orange-600 hover:text-white' },
//                     { name: 'instagram', icon: Instagram, color: 'hover:bg-orange-600 hover:text-white' },
//                     { name: 'linkedin', icon: Linkedin, color: 'hover:bg-orange-600 hover:text-white' }
//                   ].map((social) => {
//                     const IconComponent = social.icon;
//                     return (
//                       <a
//                         key={social.name}
//                         href={`#${social.name}`}
//                         className={`w-8 h-8  ${social.color} rounded-full flex items-center justify-center text-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
//                       >
//                         <IconComponent className="h-3.5 w-3.5" />
//                       </a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart, Users } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated menu items with proper React Router paths
  const menuItems = [
    { 
      name: 'Who We Are', 
      href: '/who-we-are',
      dropdown: [
        { name: 'About Us', href: '/who-we-are/about-us' },
        { name: 'Why Children?', href: '/who-we-are/why-children' },
        { name: 'Our Approach', href: '/who-we-are/our-approach' }
      ]
    },
    { 
      name: 'What We Do', 
      href: '/what-we-do',
      dropdown: [
        { name: 'Programs', href: '/what-we-do/programs' },
        { name: 'Projects', href: '/what-we-do/projects' },
        { name: 'Activities', href: '/what-we-do/activities' },
        { name: 'Impact Stories', href: '/what-we-do/impact-stories' }
      ]
    },
    { 
      name: 'Get Involved', 
      href: '/get-involved',
      dropdown: [
        { name: 'Donate', href: '/get-involved/donate' },
        { name: 'Volunteer', href: '/get-involved/volunteer' },
       { name:'Contact Us', href: '/get-involved/contact' },
       
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
      
        { name: 'Gallery', href: '/resources/gallery' },
      
      
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  // Helper function to check if current path matches menu item
  const isActivePath = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Helper function to check if dropdown has active item
  const hasActiveDropdownItem = (dropdown) => {
    return dropdown.some(item => location.pathname === item.href);
  };

  return (
    <>
      {/* Enhanced Contact Bar - Hidden on mobile and small tablets */}
      <div className="bg-gradient-to-r from-slate-50 to-orange-50 border-b text-white hidden lg:block relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-orange-800/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative">
          <div className="flex items-center justify-between h-8 sm:h-9 lg:h-10 text-xs sm:text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-orange-500 transition-all duration-300 group cursor-pointer">
                <div className="p-1 sm:p-1.5 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                  <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-500" />
                </div>
                <div>
                  <div className="font-medium text-orange-600 text-xs sm:text-sm">info@ashwamedhfoundation.org</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-orange-100 hover:text-white transition-all duration-300 group cursor-pointer">
                <div className="p-1 sm:p-1.5 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                  <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-500" />
                </div>
                <div>
                  <div className="font-medium text-orange-600 text-xs sm:text-sm">+91 9115 9115 00</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Social Media */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-orange-400 font-medium text-xs sm:text-sm hidden lg:inline">Follow Us:</span>
              <div className="flex space-x-1 sm:space-x-2">
                {[
                  { name: 'facebook', icon: Facebook, color: 'hover:bg-orange-600 hover:text-white' },
                    { name: 'twitter', icon: Twitter, color: 'hover:bg-orange-600 hover:text-white' },
                    { name: 'instagram', icon: Instagram, color: 'hover:bg-orange-600 hover:text-white' },
                    { name: 'linkedin', icon: Linkedin, color: 'hover:bg-orange-600 hover:text-white' }
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={`#${social.name}`}
                      className={`w-6 h-6 sm:w-7 sm:h-7 ${social.color} rounded-full flex items-center justify-center text-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 group`}
                    >
                      <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-orange-100' 
            : 'bg-white shadow-lg border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <div className="relative p-1 sm:p-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <img 
                    src="/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
                    alt="Ashwamedh Foundation Logo"
                    className="w-14 h-10 sm:w-16 sm:h-11 md:w-18 md:h-13 lg:w-20 lg:h-15 xl:w-24 xl:h-18 2xl:w-28 2xl:h-20 group-hover:scale-105 transition-transform duration-300 relative z-10"
                  />
                </div>
                {/* Foundation name - Hidden on mobile, visible from md up */}
                <div className="hidden md:block lg:block">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    ashwamedh
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-600 -mt-1 tracking-widest uppercase">
                    Foundation
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Hidden below lg */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className={`relative flex items-center px-3 lg:px-4 py-2 lg:py-2.5 text-sm lg:text-base font-semibold rounded-lg transition-all duration-300 group ${
                      isActivePath(item.href) || hasActiveDropdownItem(item.dropdown)
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <ChevronDown className="ml-1 lg:ml-1.5 h-3.5 w-3.5 lg:h-4 lg:w-4 transition-transform duration-300 group-hover:rotate-180 relative z-10" />
                    <div className="absolute inset-0 bg-orange-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-full left-0 mt-2 w-56 lg:w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                      activeDropdown === index 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-4'
                    }`}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className={`relative block px-4 lg:px-5 py-2.5 lg:py-3 text-sm transition-all duration-300 group ${
                            location.pathname === subItem.href
                              ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg mx-1'
                              : 'text-gray-700 hover:text-orange-600'
                          }`}
                        >
                          <div className="relative z-10">
                            <div className="font-semibold">{subItem.name}</div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg mx-1 scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Desktop Action Buttons - Hidden below lg */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                to="/donate"
                className="relative bg-gradient-to-r flex items-center from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10 flex items-center gap-1.5 lg:gap-2 font-semibold">
                  <Heart className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  Donate
                </span>
              </Link>

              <Link
                to="/join-us"
                className="relative bg-gradient-to-r flex items-center from-[#00695C]/95 to-[#004D40]/90 hover:from-teal-800 hover:to-teal-900 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10 flex items-center gap-1.5 lg:gap-2 font-semibold">
                  <Users className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  Join Us
                </span>
              </Link>
            </div>

            {/* Mobile/Tablet - Right Side with Buttons and Menu */}
            <div className="lg:hidden flex items-center space-x-1 sm:space-x-2">
              {/* Mobile Donate Button */}
              <Link
                to="/donate"
                className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 flex items-center gap-1"
              >
                <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:hidden" />
                <span className="font-semibold">Donate</span>
              </Link>
              
              {/* Mobile Join Us Button - Visible on all screen sizes */}
              <Link
                to="/join-us"
                className="relative bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90 hover:from-teal-800 hover:to-teal-900 text-white px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 flex items-center gap-1"
              >
                <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:hidden" />
                <span className="font-semibold hidden sm:inline">Join Us</span>
                <span className="font-semibold sm:hidden">Join</span>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={handleMenuToggle}
                className="relative p-1.5 sm:p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-orange-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden transition-all duration-500 ease-in-out ${
              isMenuOpen 
                ? 'max-h-screen opacity-100 pb-4 sm:pb-6' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="border-t border-gray-100 pt-3 sm:pt-4 bg-gradient-to-b from-gray-50 to-white rounded-b-xl -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
              <Link 
                to="/" 
                className={`block py-2.5 sm:py-3.5 px-3 sm:px-5 text-sm font-semibold rounded-lg transition-all duration-300 mb-1 sm:mb-2 ${
                  location.pathname === '/'
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-orange-50 last:border-b-0 mb-1">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`flex items-center justify-between w-full py-2.5 sm:py-3.5 px-3 sm:px-5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                      isActivePath(item.href) || hasActiveDropdownItem(item.dropdown)
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {item.name}
                    <ChevronDown 
                      className={`h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform duration-300 text-orange-500 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      activeDropdown === index ? 'max-h-72 pb-2 sm:pb-3' : 'max-h-0'
                    }`}
                  >
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-lg mx-1 sm:mx-2 p-1.5 sm:p-2 border border-orange-200/50">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className={`block py-2 sm:py-3 px-3 sm:px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${
                            location.pathname === subItem.href
                              ? 'text-orange-600 bg-white shadow-sm border border-orange-200'
                              : 'text-gray-600 hover:text-orange-600 hover:bg-white/70'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-3 sm:pt-4 border-t border-orange-200 mt-3 sm:mt-4 space-y-2 sm:space-y-3 bg-gradient-to-t from-orange-50 to-white rounded-lg p-2 sm:p-3">
                <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                  <div className="p-1 sm:p-1.5 bg-orange-100 rounded-lg">
                    <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-xs sm:text-sm">+91 9115 9115 00</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                  <div className="p-1 sm:p-1.5 bg-orange-100 rounded-lg">
                    <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-xs sm:text-sm break-all">info@ashwamedhfoundation.org</div>
                  </div>
                </div>
                
                {/* Mobile Social Media */}
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 pt-2 sm:pt-3">
                  {[
                  { name: 'facebook', icon: Facebook, color: 'hover:bg-orange-600 hover:text-white' },
                    { name: 'twitter', icon: Twitter, color: 'hover:bg-orange-600 hover:text-white' },
                    { name: 'instagram', icon: Instagram, color: 'hover:bg-orange-600 hover:text-white' },
                    { name: 'linkedin', icon: Linkedin, color: 'hover:bg-orange-600 hover:text-white' }
                  ].map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={`#${social.name}`}
                        className={`w-7 h-7 sm:w-8 sm:h-8 ${social.color} rounded-full flex items-center justify-center text-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      >
                        <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;