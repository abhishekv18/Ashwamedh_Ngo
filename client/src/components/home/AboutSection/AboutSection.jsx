
// import React, { useState, useEffect } from 'react';
// import { Heart, Users, Award, Globe, ArrowRight, CheckCircle, BookOpen, Scale, Zap, Target, ShieldCheck, Lightbulb } from 'lucide-react';

// const AboutSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { 
//         threshold: 0.05, // Reduced threshold for better mobile detection
//         rootMargin: '50px 0px -50px 0px' // Added root margin for earlier trigger
//       }
//     );

//     const section = document.getElementById('about-section');
//     if (section) observer.observe(section);

//     // Fallback for mobile - trigger after a short delay if observer doesn't work
//     const fallbackTimer = setTimeout(() => {
//       setIsVisible(true);
//     }, 500);

//     return () => {
//       observer.disconnect();
//       clearTimeout(fallbackTimer);
//     };
//   }, []);

//   const achievements = [
//     {
//       icon: <Users className="w-6 h-6" />,
//       number: "10,000+",
//       label: "Children Impacted",
//       description: "Across 25+ communities",
//       gradient: "from-orange-200 to-orange-300",
//       iconColor: "text-orange-700"
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       number: "15+",
//       label: "Years of Service",
//       description: "Dedicated to children's welfare",
//       gradient: "from-teal-200 to-teal-300",
//       iconColor: "text-teal-700"
//     },
//     {
//       icon: <BookOpen className="w-6 h-6" />,
//       number: "50+",
//       label: "Partner Schools",
//       description: "Quality education network",
//       gradient: "from-teal-200 to-teal-300",
//       iconColor: "text-teal-700"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       number: "500+",
//       label: "Active Volunteers",
//       description: "Passionate changemakers",
//       gradient: "from-orange-200 to-orange-300",
//       iconColor: "text-orange-700"
//     }
//   ];

//   const philosophyPillars = [
//     {
//       title: "Social Justice",
//       description: "Fighting inequality through systematic change and advocacy for the marginalized.",
//       icon: <Scale className="w-8 h-8" />,
//       gradient: "from-orange-500 to-orange-600",
//       bgGradient: "from-orange-100 to-orange-200"
//     },
//     {
//       title: "Equality",
//       description: "Ensuring every child has equal access to opportunities regardless of background.",
//       icon: <ShieldCheck className="w-8 h-8" />,
//       gradient: "from-teal-500 to-teal-600",
//       bgGradient: "from-teal-100 to-teal-200"
//     },
//     {
//       title: "Empowerment",
//       description: "Building capacity and confidence in communities to create sustainable change.",
//       icon: <Zap className="w-8 h-8" />,
//       gradient: "from-orange-500 to-orange-600",
//       bgGradient: "from-orange-100 to-orange-200"
//     }
//   ];

//   const coreValues = [
//     {
//       title: "Transparency",
//       description: "Every donation, every impact - tracked and reported with complete transparency.",
//       icon: <CheckCircle className="w-6 h-6" />,
//       color: "orange"
//     },
//     {
//       title: "Dignity",
//       description: "We believe every child deserves to be treated with respect and dignity.",
//       icon: <Heart className="w-6 h-6" />,
//       color: "teal"
//     },
//     {
//       title: "Sustainability",
//       description: "Creating lasting change through sustainable programs and community involvement.",
//       icon: <Globe className="w-6 h-6" />,
//       color: "teal"
//     },
//     {
//       title: "Innovation",
//       description: "Leveraging technology and innovative approaches to maximize our impact.",
//       icon: <Lightbulb className="w-6 h-6" />,
//       color: "orange"
//     }
//   ];

//   const getValueColors = (color) => {
//     const colorMap = {
//       orange: { bg: "from-orange-100 to-orange-200", icon: "from-orange-200 to-orange-300", text: "text-orange-600" },
//       rose: { bg: "from-rose-50 to-rose-100", icon: "from-orange-200 to-orange-300", text: "text-rose-600" },
//       teal: { bg: "from-teal-100 to-teal-200", icon: "from-teal-200 to-teal-300", text: "text-teal-600" },
//       amber: { bg: "from-amber-50 to-amber-100", icon: "from-amber-100 to-amber-200", text: "text-amber-600" }
//     };
//     return colorMap[color];
//   };

//   return (
//     <section id="about-section" className="py-20  bg-gradient-to-br from-orange-100 via-orange-50 to-teal-50 -mt-1">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center px-6 py-3 bg-white border border-orange-200 rounded-full text-sm font-semibold text-orange-800 mb-6 shadow-sm">
//             <Heart className="w-4 h-4 mr-2 text-orange-600" />
//             About Ashwamedh Foundation
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Transforming Lives Through
//             <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mt-2">
//               Education & Care
//             </span>
//           </h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             For over 15 years, Ashwamedh Foundation has been dedicated to empowering underprivileged children 
//             through quality education, healthcare, and community development programs.
//           </p>
//         </div>

//         {/* Philosophy Section - New Addition */}
//         <div className={`mb-20 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="text-center mb-12">
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Philosophy
//             </h3>
//             <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Social Justice, Equality and empowerment can be achieved through educating, agitating and mobilizing the underprivileged
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {philosophyPillars.map((pillar, index) => (
//               <div key={index} className="group cursor-pointer">
//                 <div className={`bg-gradient-to-br ${pillar.bgGradient} rounded-3xl p-8 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border border-white/50`}>
//                   <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl mb-6 text-white shadow-lg`}>
//                     {pillar.icon}
//                   </div>
//                   <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                     {pillar.title}
//                   </h4>
//                   <p className="text-gray-700 leading-relaxed">
//                     {pillar.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//                 Our Story of Impact
//               </h3>
//               <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
//                 <p>
//                   Founded in 2008, Ashwamedh Foundation began with a simple yet powerful vision: 
//                   <strong className="text-gray-900"> every child deserves access to quality education and healthcare</strong>, 
//                   regardless of their socio-economic background.
//                 </p>
//                 <p>
//                   What started as a small initiative to support 50 children in rural Maharashtra has now 
//                   grown into a comprehensive movement reaching over <strong className="text-orange-600">10,000 children</strong> 
//                   across 25+ communities in India.
//                 </p>
//                 <p>
//                   Our holistic approach combines education, healthcare, nutrition, and community development 
//                   to create sustainable change that breaks the cycle of poverty and empowers entire communities.
//                 </p>
//               </div>
//             </div>

//             {/* Founder Quote */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
//               <blockquote className="text-lg text-gray-700 italic mb-4">
//                 "We believe that education is not just about books and classrooms - it's about nurturing 
//                 dreams, building confidence, and creating opportunities for every child to reach their full potential."
//               </blockquote>
//               <div className="flex items-center">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mr-4 overflow-hidden">
//   <img 
//     src="/images/logo/1740195950066.jpg" 
//     className="w-full h-full object-cover rounded-full" 
//     alt="User"
//   />
// </div>
//                 <div>
//                   <div className="font-semibold text-gray-900">Deepak Doddamani</div>
//                   <div className="text-sm text-gray-600">Founder & Director</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="relative">
//             <div className="bg-white rounded-3xl p-6 shadow-2xl">
//               <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
//                 <img 
//                   src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Children in classroom learning together"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* Overlay Stats */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl">
//                   <div className="text-2xl font-bold text-orange-600">15+</div>
//                   <div className="text-sm text-gray-600">Years Experience</div>
//                 </div>
//                 <div className="text-center p-4 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl">
//                   <div className="text-2xl font-bold text-teal-600">25+</div>
//                   <div className="text-sm text-gray-600">Communities</div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-2xl shadow-lg">
//               <Heart className="w-8 h-8" />
//             </div>
//             <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-500 to-teal-600 text-white p-4 rounded-2xl shadow-lg">
//               <Users className="w-8 h-8" />
//             </div>
//           </div>
//         </div>

//         {/* Achievements Grid */}
//         <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           {achievements.map((achievement, index) => (
//             <div key={index} className="text-center group">
//               <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
//                 <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl mb-4 transition-all duration-300`}>
//                   <div className={achievement.iconColor}>
//                     {achievement.icon}
//                   </div>
//                 </div>
//                 <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//                   {achievement.number}
//                 </div>
//                 <div className="text-lg font-semibold text-gray-800 mb-2">
//                   {achievement.label}
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   {achievement.description}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

// <div className="relative mt-16 overflow-hidden rounded-3xl">
//   {/* Background Image */}
//   <img
//     src="/public/images/logo/photo-1641538225752-2d996ea204d4.avif" // You can replace this with your own image URL or local path
//     alt="Impact Background"
//     className="absolute inset-0 w-full h-full object-cover opacity-85 z-0"
//   />

//   {/* Overlay Gradient (optional for readability) */}
//   <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722] to-[#E64A19] opacity-75  z-0"></div>

//   {/* Content Box */}
//   <div className={`relative z-10 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//     <div className="rounded-3xl p-8 md:p-12 text-white shadow-2xl">
//       <h3 className="text-2xl md:text-3xl font-bold mb-4">
//         Ready to Make a Difference?
//       </h3>
//       <p className="text-lg mb-8 text-orange-100 max-w-2xl mx-auto">
//         Join our mission to transform lives through education and community development. 
//         Every contribution creates lasting impact.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4 justify-center">
//         <button className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//           <span className="flex items-center justify-center">
//             Support Our Cause
//             <ArrowRight className="w-5 h-5 ml-2" />
//           </span>
//         </button>
//         <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
//           Learn More About Us
//         </button>
//       </div>
//     </div>
//   </div>
// </div>


//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React, { useState, useEffect } from 'react';
import { Heart, Users, Award, Globe, ArrowRight, CheckCircle, BookOpen, Scale, Zap, Target, ShieldCheck, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.05, // Reduced threshold for better mobile detection
        rootMargin: '50px 0px -50px 0px' // Added root margin for earlier trigger
      }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    // Fallback for mobile - trigger after a short delay if observer doesn't work
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const achievements = [
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      number: "10,000+",
      label: "Children Impacted",
      description: "Across 25+ communities",
      gradient: "from-orange-200 to-orange-300",
      iconColor: "text-orange-700"
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      number: "15+",
      label: "Years of Service",
      description: "Dedicated to children's welfare",
      gradient: "from-teal-200 to-teal-300",
      iconColor: "text-teal-700"
    },
    {
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      number: "50+",
      label: "Partner Schools",
      description: "Quality education network",
      gradient: "from-teal-200 to-teal-300",
      iconColor: "text-teal-700"
    },
    {
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      number: "500+",
      label: "Active Volunteers",
      description: "Passionate changemakers",
      gradient: "from-orange-200 to-orange-300",
      iconColor: "text-orange-700"
    }
  ];

  const philosophyPillars = [
    {
      title: "Social Justice",
      description: "Fighting inequality through systematic change and advocacy for the marginalized.",
      icon: <Scale className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-100 to-orange-200"
    },
    {
      title: "Equality",
      description: "Ensuring every child has equal access to opportunities regardless of background.",
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-100 to-teal-200"
    },
    {
      title: "Empowerment",
      description: "Building capacity and confidence in communities to create sustainable change.",
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-100 to-orange-200"
    }
  ];

  const coreValues = [
    {
      title: "Transparency",
      description: "Every donation, every impact - tracked and reported with complete transparency.",
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "orange"
    },
    {
      title: "Dignity",
      description: "We believe every child deserves to be treated with respect and dignity.",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "teal"
    },
    {
      title: "Sustainability",
      description: "Creating lasting change through sustainable programs and community involvement.",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "teal"
    },
    {
      title: "Innovation",
      description: "Leveraging technology and innovative approaches to maximize our impact.",
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "orange"
    }
  ];

  const getValueColors = (color) => {
    const colorMap = {
      orange: { bg: "from-orange-100 to-orange-200", icon: "from-orange-200 to-orange-300", text: "text-orange-600" },
      rose: { bg: "from-rose-50 to-rose-100", icon: "from-orange-200 to-orange-300", text: "text-rose-600" },
      teal: { bg: "from-teal-100 to-teal-200", icon: "from-teal-200 to-teal-300", text: "text-teal-600" },
      amber: { bg: "from-amber-50 to-amber-100", icon: "from-amber-100 to-amber-200", text: "text-amber-600" }
    };
    return colorMap[color];
  };

  return (
    <section id="about-section" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-100 via-orange-50 to-teal-50 -mt-1 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-14 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white border border-orange-200 rounded-full text-xs sm:text-sm font-semibold text-orange-800 mb-4 sm:mb-5 md:mb-6 shadow-sm">
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1.5 sm:mr-2 text-orange-600" />
            About Ashwamedh Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 px-2">
            Transforming Lives Through
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mt-1 sm:mt-1.5 md:mt-2">
              Education & Care
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            For over 15 years, Ashwamedh Foundation has been dedicated to empowering underprivileged children 
            through quality education, healthcare, and community development programs.
          </p>
        </div>

        {/* Philosophy Section - New Addition */}
        <div className={`mb-16 sm:mb-18 md:mb-20 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Our Philosophy
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Social Justice, Equality and empowerment can be achieved through educating, agitating and mobilizing the underprivileged
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {philosophyPillars.map((pillar, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${pillar.bgGradient} rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border border-white/50`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${pillar.gradient} rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6 text-white shadow-lg`}>
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {pillar.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-18 md:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                Our Story of Impact
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008, Ashwamedh Foundation began with a simple yet powerful vision: 
                  <strong className="text-gray-900"> every child deserves access to quality education and healthcare</strong>, 
                  regardless of their socio-economic background.
                </p>
                <p>
                  What started as a small initiative to support 50 children in rural Maharashtra has now 
                  grown into a comprehensive movement reaching over <strong className="text-orange-600">10,000 children</strong> 
                  across 25+ communities in India.
                </p>
                <p>
                  Our holistic approach combines education, healthcare, nutrition, and community development 
                  to create sustainable change that breaks the cycle of poverty and empowers entire communities.
                </p>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border-l-4 border-orange-500">
              <blockquote className="text-sm sm:text-base md:text-lg text-gray-700 italic mb-3 sm:mb-4 leading-relaxed">
                "We believe that education is not just about books and classrooms - it's about nurturing 
                dreams, building confidence, and creating opportunities for every child to reach their full potential."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mr-3 sm:mr-4 overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/logo/1740195950066.jpg" 
                    className="w-full h-full object-cover rounded-full" 
                    alt="User"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Deepak Doddamani</div>
                  <div className="text-xs sm:text-sm text-gray-600">Founder & Director</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Children in classroom learning together"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg sm:rounded-xl">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg sm:rounded-xl">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600">25+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Communities</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl shadow-lg">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6 bg-gradient-to-br from-teal-500 to-teal-600 text-white p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl shadow-lg">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-16 sm:mb-18 md:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 h-full">
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 ;g:h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl sm:rounded-2xl mb-3 sm:mb-4 transition-all duration-300`}>
                  <div className={achievement.iconColor}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {achievement.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                  {achievement.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-12 sm:mt-14 md:mt-16 overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background Image */}
          <img
            src="/public/images/logo/photo-1641538225752-2d996ea204d4.avif"
            alt="Impact Background"
            className="absolute inset-0 w-full h-full object-cover opacity-85 z-0"
          />

          {/* Overlay Gradient (optional for readability) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722] to-[#E64A19] opacity-75 z-0"></div>

          {/* Content Box */}
          <div className={`relative z-10 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 text-orange-100 max-w-2xl mx-auto leading-relaxed px-2">
                Join our mission to transform lives through education and community development. 
                Every contribution creates lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
                <button className="bg-white text-orange-600 hover:bg-gray-50 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex-1 sm:flex-none">
                  <span className="flex items-center justify-center">
                    Support Our Cause
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 flex-1 sm:flex-none">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;