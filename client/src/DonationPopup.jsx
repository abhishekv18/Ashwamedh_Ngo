// import React, { useState, useEffect } from 'react';
// import { X, Heart, Users, BookOpen } from 'lucide-react';

// const DonationPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     // Check if popup has already been shown in this session
//     const hasShownPopup = sessionStorage.getItem('donation-popup-shown');
    
//     if (!hasShownPopup) {
//       // Show popup after 17 seconds
//       const timer = setTimeout(() => {
//         setIsVisible(true);
//         setIsAnimating(true);
//         // Mark as shown for this session
//         sessionStorage.setItem('donation-popup-shown', 'true');
//       }, 17000);
      
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleClose = () => {
//     setIsAnimating(false);
//     setTimeout(() => {
//       setIsVisible(false);
//     }, 300);
//   };

//   const handleDonate = () => {
//     // Add your donation logic here
//     console.log('Redirecting to donation page...');
//     handleClose();
//   };

 
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop with blur effect */}
//       <div 
//         className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
//           isAnimating ? 'opacity-100' : 'opacity-0'
//         }`}
//         onClick={handleClose}
//       />
      
//       {/* Popup Content */}
//       <div 
//         className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 ${
//           isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
//         >
//           <X size={20} />
//         </button>

//         {/* Header with Gradient Background */}
//         <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white p-6 rounded-t-2xl relative overflow-hidden">
//           {/* Decorative Elements */}
//           <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
//           <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
          
//           <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="bg-white/20 p-2 rounded-full">
//                 <Heart className="w-6 h-6 text-white fill-current" />
//               </div>
//               <h2 className="text-xl font-bold">A better tomorrow starts with education</h2>
//             </div>
//             <p className="text-orange-100 text-sm leading-relaxed">
//               Help children stay in school and thrive with your generous contribution
//             </p>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           {/* Impact Stats */}
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100">
//               <Users className="w-5 h-5 text-orange-600 mx-auto mb-1" />
//               <div className="text-lg font-bold text-gray-800">500+</div>
//               <div className="text-xs text-gray-600">Children Helped</div>
//             </div>
//             <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100">
//               <BookOpen className="w-5 h-5 text-orange-600 mx-auto mb-1" />
//               <div className="text-lg font-bold text-gray-800">50+</div>
//               <div className="text-xs text-gray-600">Schools Supported</div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mb-6">
//             <p className="text-gray-700 text-sm mb-4">
//               Your <span className="font-semibold text-orange-600">₹100</span> can provide educational materials for a child for a month
//             </p>
            
//             {/* Donation Amounts */}
//             <div className="flex gap-2 justify-center mb-4">
//               {['₹100', '₹500', '₹1000'].map((amount) => (
//                 <button
//                   key={amount}
//                   className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors"
//                 >
//                   {amount}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="space-y-3">
//             <button
//               onClick={handleDonate}
//               className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
//             >
//               ❤️ Donate And Save Tax
//             </button>
            
          
//           </div>

//           {/* Trust Indicators */}
//           <div className="mt-4 pt-4 border-t border-gray-100">
//             <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
//               <span className="flex items-center gap-1">
//                 <div className="w-2 h-2 bg-green-500 rounded-full" />
//                 80G Tax Benefits
//               </span>
//               <span className="flex items-center gap-1">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                 Secure Payment
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonationPopup;

import React, { useState, useEffect } from 'react';
import { X, Heart, Users, BookOpen } from 'lucide-react';

const DonationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('donation-popup-shown');
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
        sessionStorage.setItem('donation-popup-shown', 'true');
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleDonate = () => {
    console.log('Redirecting to donation page...');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 text-white bg-black/30 hover:bg-black/50 rounded-full z-20"
        >
          <X size={18} />
        </button>

        {/* Header with Background Image + Gradient */}
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white p-5 rounded-t-2xl overflow-hidden">
          <img
            src="/public/images/logo/istockphoto-1252924066-612x612.webp" // Replace with actual path
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
          <div className="absolute bottom-0 left-0 w-14 h-14 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-white/20 p-2 rounded-full">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold">A better tomorrow starts with education</h2>
            </div>
            <p className="text-orange-100 text-xs sm:text-sm">
              Help children stay in school and thrive with your generous contribution
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
            <div className="text-center p-2 bg-orange-50 rounded-lg border border-orange-100">
              <Users className="w-4 h-4 text-orange-600 mx-auto mb-1" />
              <div className="text-base font-bold text-gray-800">500+</div>
              <div className="text-xs text-gray-600">Children Helped</div>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded-lg border border-orange-100">
              <BookOpen className="w-4 h-4 text-orange-600 mx-auto mb-1" />
              <div className="text-base font-bold text-gray-800">50+</div>
              <div className="text-xs text-gray-600">Schools Supported</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-5">
            <p className="text-gray-700 text-xs sm:text-sm mb-3">
              Your <span className="font-semibold text-orange-600">₹100</span> can provide educational materials for a month
            </p>
            <div className="flex gap-2 justify-center mb-3">
              {['₹100', '₹500', '₹1000'].map((amount) => (
                <button
                  key={amount}
                  className="px-3 py-1 sm:py-2 bg-orange-100 text-orange-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-orange-200 transition-colors"
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <button
            onClick={handleDonate}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-xl font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-700 transition-transform transform hover:scale-[1.02] shadow-md"
          >
            ❤️ Donate And Save Tax
          </button>

          {/* Trust Indicators */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                80G Tax Benefits
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Secure Payment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;
