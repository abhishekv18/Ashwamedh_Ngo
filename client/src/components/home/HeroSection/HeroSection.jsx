

// import React, { useState, useEffect } from 'react';
// import { Heart, Users, BookOpen, Shield, ArrowRight, Star, Award, Globe } from 'lucide-react';

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//    const imageList=[
//     "/public/images/logo/school-298680-1557380003.jpg",
//     "/public/images/logo/atul-pandey-0f3bZHXZSz8-unsplash.jpg",
//     "/public/images/logo/yannis-h-uaPaEM7MiQQ-unsplash.jpg",
    
//    ]

//   const [currentIndex, setCurrentIndex] = useState(0);

//    const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false); // start fade-out

//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % imageList.length);
//         setFade(true); // fade-in new image
//       }, 400); // wait 0.5s for fade-out before switching
//     }, 4000); // every 3 seconds

//     return () => clearInterval(interval);
//   }, []);


//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const impactStats = [
//     { icon: <Users className="w-6 h-6" />, number: "10,000+", label: "Children Reached", gradient: "from-orange-200 to-orange-300", iconColor: "text-orange-700" },
//     { icon: <BookOpen className="w-6 h-6" />, number: "50+", label: "Schools Supported", gradient: "from-teal-200 to-teal-300", iconColor: "text-teal-700" },
//     { icon: <Shield className="w-6 h-6" />, number: "25+", label: "Communities Served", gradient: "from-teal-200 to-teal-300", iconColor: "text-teal-700" },
//     { icon: <Heart className="w-6 h-6" />, number: "15+", label: "Active Programs", gradient: "from-orange-300 to orange-400", iconColor: "text-orange-700" }
//   ];

//   const achievements = [
//     { icon: <Award className="w-5 h-5" />, text: "Registered NGO" },
//     { icon: <Star className="w-5 h-5" />, text: "80G Tax Exemption" },
//     { icon: <Globe className="w-5 h-5" />, text: "Pan-India Presence" }
//   ];

//   return (
//     <section className="relative min-h-screen bg-gradient-to-b from-orange-50 via-orange-100 to-orange-100 overflow-hidden">
//       {/* Elegant Background Pattern */}
//       <div className="absolute inset-0">
//         <div 
//           className="absolute inset-0 opacity-40"
//           style={{
//             backgroundImage: `
//               radial-gradient(circle at 25% 25%, #FF5722 0%, transparent 50%),
//               radial-gradient(circle at 75% 75%, #00695C 0%, transparent 50%)
//             `,
//             filter: 'blur(100px)'
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/60" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20 pb-16">
          
//           {/* Left Content */}
//           <div className={`flex-1 lg:pr-16 text-center lg:text-left max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
//             {/* Achievement Badges */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
//               {achievements.map((achievement, index) => (
//                 <div key={index} className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
//                   <span className="text-orange-600 mr-2">{achievement.icon}</span>
//                   {achievement.text}
//                 </div>
//               ))}
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//               <span className="text-gray-900 block mb-2">
//                 Empowering Lives,
//               </span>
//               <span className="bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 bg-clip-text text-transparent block">
//                 Transforming Futures
//               </span>
//             </h1>

//             {/* Beautiful Tagline */}
//             <div className="relative mb-8">
//               <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
//               <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed italic pl-8">
//                 "Conquering our world through love"
//               </p>
//             </div>

//             {/* Description */}
//             <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
//               At Ashwamedh Foundation, we believe that every child deserves access to quality education, healthcare, and opportunities. Join us in building a brighter tomorrow through compassionate action and sustainable development.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
//               <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                 <span className="relative flex items-center justify-center">
//                   Start Your Impact Journey
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </span>
//               </button>
              
//               <button className="px-8 py-4 border-2 border-orange-200 text-orange-600 font-semibold text-lg rounded-2xl hover:bg-orange-50 transition-all duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div className={`flex-1 w-full mt-9 lg:mt-0 max-w-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="relative">
//               {/* Main Image Container */}
//            <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
//           <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
//             <img
//               src={imageList[currentIndex]}
//               alt="Children learning and playing together"
//               className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
//                 fade ? "opacity-100" : "opacity-0"
//               }`}
//               key={currentIndex}
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10"></div>

//             {/* Floating Heart */}
//             <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-10">
//               <Heart className="w-6 h-6 text-orange-600 fill-current" />
//             </div>
//           </div>
//         </div>

//               {/* Floating Stats Cards */}
//               <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
//                     <Users className="w-6 h-6 text-orange-600" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-lg text-gray-900">500+</div>
//                     <div className="text-sm text-gray-600">Volunteers</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-teal-200 to-teal-300 rounded-xl flex items-center justify-center">
//                     <Shield className="w-6 h-6 text-teal-700" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-lg text-gray-900">25+</div>
//                     <div className="text-sm text-gray-600">Communities</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Elements */}
//               <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-80"></div>
//               <div className="absolute bottom-1/4 -right-2 w-6 h-6 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-60"></div>
//             </div>
//           </div>
//         </div>

//         {/* Impact Stats Section */}
//         <div className={`  pt-13 mt-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="text-center mb-12">
//             <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
//               Our Impact in Numbers
//             </h3>
//             <p className="text-gray-600 text-xl max-w-2xl mx-auto">
//               Every number represents a life touched, a dream nurtured, and a future transformed through love and dedication.
//             </p>
//           </div>
          
//           <div className="grid mb-2 grid-cols-2 md:grid-cols-4 gap-8">
//             {impactStats.map((stat, index) => (
//               <div key={index} className="text-center group cursor-pointer">
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${stat.gradient}`}>
//                   <span className={stat.iconColor}>{stat.icon}</span>
//                 </div>
//                 <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="flex flex-col items-center space-y-2 text-gray-400">
//           <span className="text-xs font-medium">Scroll to explore</span>
//           <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-bounce"></div>
//           </div>
//         </div>
//       </div>
   
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
import { Heart, Users, BookOpen, Shield, ArrowRight, Star, Award, Globe } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
   const imageList=[
    "/public/images/logo/school-298680-1557380003.jpg",
    "/public/images/logo/atul-pandey-0f3bZHXZSz8-unsplash.jpg",
    "/public/images/logo/yannis-h-uaPaEM7MiQQ-unsplash.jpg",
    
   ]

  const [currentIndex, setCurrentIndex] = useState(0);

   const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % imageList.length);
        setFade(true); // fade-in new image
      }, 400); // wait 0.5s for fade-out before switching
    }, 4000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const impactStats = [
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, number: "10,000+", label: "Children Reached", gradient: "from-orange-200 to-orange-300", iconColor: "text-orange-700" },
    { icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, number: "50+", label: "Schools Supported", gradient: "from-teal-200 to-teal-300", iconColor: "text-teal-700" },
    { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, number: "25+", label: "Communities Served", gradient: "from-teal-200 to-teal-300", iconColor: "text-teal-700" },
    { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, number: "15+", label: "Active Programs", gradient: "from-orange-300 to orange-400", iconColor: "text-orange-700" }
  ];

  const achievements = [
    { icon: <Award className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />, text: "Registered NGO" },
    { icon: <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />, text: "80G Tax Exemption" },
    { icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />, text: "Pan-India Presence" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-orange-50 via-orange-100 to-orange-100 overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #FF5722 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #00695C 0%, transparent 50%)
            `,
            filter: 'blur(100px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-8 sm:pt-18 pb-10 sm:pb-15">
          
          {/* Left Content */}
          <div className={`flex-1 lg:pr-8 xl:pr-16 text-center lg:text-left max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-orange-600 mr-1 sm:mr-2">{achievement.icon}</span>
                  <span className="whitespace-nowrap">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-gray-900 block mb-1 sm:mb-2">
                Empowering Lives,
              </span>
              <span className="bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 bg-clip-text text-transparent block">
                Transforming Futures
              </span>
            </h1>

            {/* Beautiful Tagline */}
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed italic pl-4 sm:pl-8">
                "Conquering our world through love"
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              At Ashwamedh Foundation, we believe that every child deserves access to quality education, healthcare, and opportunities. Join us in building a brighter tomorrow through compassionate action and sustainable development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative flex items-center justify-center">
                  <span className="hidden sm:inline">Start Your Impact Journey</span>
                  <span className="sm:hidden">Start Journey</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-200 text-orange-600 font-semibold text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl hover:bg-orange-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className={`flex-1 w-full mt-6 sm:mt-8 lg:mt-0 max-w-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative px-4 sm:px-0">
              {/* Main Image Container */}
           <div className="relative bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-4 shadow-2xl">
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src={imageList[currentIndex]}
              alt="Children learning and playing together"
              className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              key={currentIndex}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10"></div>

            {/* Floating Heart */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-10">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-600 fill-current" />
            </div>
          </div>
        </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-3 sm:-bottom-6 -left-2 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-5 border border-gray-100">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Volunteers</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 sm:-top-6 -right-2 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-5 border border-gray-100">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-teal-700" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">25+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Communities</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-80"></div>
              <div className="absolute bottom-1/4 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Impact Stats Section */}
        <div className={`pt-8 sm:pt-12 lg:pt-13 mt-2 sm:mt-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-5">
              Our Impact in Numbers
            </h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-xl max-w-2xl mx-auto px-4 sm:px-0">
              Every number represents a life touched, a dream nurtured, and a future transformed through love and dedication.
            </p>
          </div>
          
          <div className="grid mb-2 grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${stat.gradient}`}>
                  <span className={stat.iconColor}>{stat.icon}</span>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-gray-400">
          <span className="text-xs font-medium hidden sm:block">Scroll to explore</span>
          <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-orange-400 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default HeroSection;