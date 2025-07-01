

// import React from 'react';
// import { Target, Eye, Compass, Lightbulb, Users, Heart, BookOpen, Shield, Award, Globe, Zap, CheckCircle, Palette, HandHeart, GraduationCap } from 'lucide-react';

// const MissionVision = () => {
//   const missionPoints = [
//     {
//       icon: <GraduationCap className="w-6 h-6" />,
//       title: "Quality Education Access",
//       description: "Ensure children from underprivileged backgrounds receive excellent quality education through innovative programs and dedicated support.",
//       gradient: "from-[#FF5722] to-[#E64A19]"
//     },
//     {
//       icon: <BookOpen className="w-6 h-6" />,
//       title: "Knowledge & Values",
//       description: "Impart comprehensive knowledge and strong moral values through well-designed curriculum and specialized programs for holistic development.",
//       gradient: "from-[#00695C] to-[#004D40]"
//     },
    
//   ];

//   const visionElements = [
//     {
//       title: "Quality Education",
//       description: "Comprehensive educational programs that transform lives and create opportunities",
//       icon: <BookOpen className="w-8 h-8" />,
//       color: "text-[#FF5722]",
//       bgColor: "bg-[#FFF3E0]",
//       borderColor: "border-[#FF5722]/20"
//     },
//     {
//       title: "Healthcare Access",
//       description: "Essential medical care and health awareness for every child in our programs",
//       icon: <Shield className="w-8 h-8" />,
//       color: "text-[#00695C]",
//       bgColor: "bg-[#E0F2F1]",
//       borderColor: "border-[#00695C]/20"
//     },
//     {
//       title: "Livelihood Programs",
//       description: "Sustainable skill development and employment opportunities for youth empowerment",
//       icon: <HandHeart className="w-8 h-8" />,
//       color: "text-[#FFC107]",
//       bgColor: "bg-[#FFF8E1]",
//       borderColor: "border-[#FFC107]/20"
//     }
//   ];

//   const coreValues = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Impact-Driven",
//       description: "Every program is designed to create measurable, lasting impact in children's lives through focused interventions.",
//       gradient: "from-[#FF8A65] to-[#FF7043]"
//     },
//     {
//       icon: <Eye className="w-8 h-8" />,
//       title: "Transparency",
//       description: "Complete accountability in operations, funding, and impact reporting with open communication to all stakeholders.",
//      gradient: "from-[#26A69A] to-[#00695C]"
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Innovation",
//       description: "Continuously evolving our methods to serve children better through creative solutions and modern approaches.",
//       gradient: "from-[#26A69A] to-[#00695C]"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Excellence",
//       description: "Maintaining the highest standards in all programs while ensuring quality delivery and sustainable outcomes.",
//        gradient: "from-[#FF8A65] to-[#FF7043]"
//     }
//   ];

//   const achievements = [
//     { number: "15+", label: "Years of Impact", color: "text-[#FF5722]" },
//     { number: "100K+", label: "Children Supported", color: "text-[#00695C]" },
//     { number: "500+", label: "Communities Reached", color: "text-[#26A69A]" },
//     { number: "1000+", label: "Volunteers Engaged", color: "text-[#FFC107]" }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-teal-50  via-orange-100 to-white ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] rounded-full text-sm font-semibold text-white mb-8 shadow-lg">
//             <Compass className="w-5 h-5 mr-3" />
//             Our Mission, Vision & Values
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold text-[#212121] mb-6">
//             Guided by Purpose,
//             <span className="block text-[#FF5722] mt-2">Driven by Impact</span>
//           </h2>
//           <p className="text-xl text-[#616161] max-w-4xl mx-auto leading-relaxed">
//             Our mission, vision, and values form the foundation of everything we do. 
//             They guide our decisions, shape our programs, and inspire our team to create lasting change.
//           </p>
//         </div>

//         {/* Vision Section */}
//         <div className="mb-20">
//           <div className="bg-gradient-to-br from-[#FF5722] to-[#E64A19] rounded-3xl overflow-hidden shadow-2xl relative">
//             {/* Background Image */}
//             <div className="absolute inset-0 z-0">
//               <img 
//                 src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" 
//                 alt="Children in education program"
//                 className="w-full h-full object-cover opacity-95"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/90 to-[#E64A19]/80"></div>
//             </div>
            
//             <div className="flex flex-col lg:flex-row relative z-10">
//               {/* Left side - Content */}
//               <div className="lg:w-2/3 p-12 lg:p-16 text-white">
//                 <div className="mb-8">
//                   <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6">
//                     <Eye className="w-10 h-10 text-white" />
//                   </div>
//                   <h3 className="text-3xl md:text-4xl font-bold mb-6">
//                     Our Vision
//                   </h3>
//                   <p className="text-xl text-white/95 leading-relaxed font-medium mb-8">
//                     To empower the underprivileged children and youth through quality education, healthcare and livelihood programs.
//                   </p>
//                 </div>

//                 {/* Vision Elements */}
//                 <div className="grid md:grid-cols-3 gap-6">
//                   {visionElements.map((element, index) => (
//                     <div key={index} className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300">
//                       <div className="text-[#FFD54F] mb-4">
//                         {element.icon}
//                       </div>
//                       <h4 className="text-lg font-bold text-white mb-2">
//                         {element.title}
//                       </h4>
//                       <p className="text-white/85 text-sm leading-relaxed">
//                         {element.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right side - Stats with Image */}
//               <div className="lg:w-1/3 relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
//                 <div className="relative z-10 p-12 lg:p-16">
//                   <h4 className="text-2xl font-bold text-white mb-8 text-center">Our Impact</h4>
//                   <div className="space-y-8">
//                     {achievements.map((achievement, index) => (
//                       <div key={index} className="text-center">
//                         <div className="text-4xl font-bold text-[#FFD54F] mb-2">
//                           {achievement.number}
//                         </div>
//                         <div className="text-white/90 font-medium">
//                           {achievement.label}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mission Section */}
//         <div className="mb-20">
//           {/* Mission Header with Background */}
//           <div className="relative mb-16 rounded-3xl overflow-hidden">
//             <div className="absolute inset-0 z-0">
//               <img 
//                 src="/public/images/logo/istockphoto-2193713844-612x612.webp" 
//                 alt="Mission background"
//                 className="w-full h-full object-cover opacity-100"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
//             </div>
            
//             <div className="relative z-10 text-center py-20 px-8">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 shadow-lg">
//                 <Target className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 Our Mission
//               </h3>
//               <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
//                 We are committed to creating comprehensive change through focused interventions that address the core needs of underprivileged children and communities.
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 bg-gradient-to-t from-orange-50 to-white">
//             {missionPoints.map((point, index) => (
//               <div key={index} className="group ">
//                 <div className="bg-gradient-to-t from-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-[#E0E0E0] h-full">
//                   {/* Card Image Header */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img 
//                       src={index === 0 ? "/public/images/logo/gettyimages-1344964565-612x612.jpg" : 
//                            index === 1 ? "/public/images/logo/gettyimages-1788257385-612x612.jpg" :
//                            index === 2 ? "/public/images/logo/gettyimages-2195741267-612x612.jpg" :
//                            index === 3 ? "/public/images/logo/istockphoto-537311780-612x612.webp" :
//                            "/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg"} 
//                       alt={point.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//                     <div className={`absolute bottom-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} shadow-lg`}>
//                       <div className="text-white">
//                         {point.icon}
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Card Content */}
//                   <div className="p-8">
//                     <h4 className="text-xl font-bold text-[#212121] mb-4">
//                       {point.title}
//                     </h4>
//                     <p className="text-[#616161] leading-relaxed">
//                       {point.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="mb-20 bg-gradient-to-t from-white">
//           <div className="text-center mb-16">
//             <h3 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
//               Our Core Values
//             </h3>
//             <p className="text-xl text-[#616161] max-w-3xl mx-auto leading-relaxed">
//               These fundamental principles guide our work and define who we are as an organization committed to creating positive change.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {coreValues.map((value, index) => (
//               <div key={index} className="group">
//                 <div className="bg-[#FFFFFF] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-[#E0E0E0] h-full">
//                   <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 bg-gradient-to-br ${value.gradient} shadow-lg`}>
//                     <div className="text-white">
//                       {value.icon}
//                     </div>
//                   </div>
//                   <h4 className="text-xl font-bold text-[#212121] mb-4">
//                     {value.title}
//                   </h4>
//                   <p className="text-[#616161] leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Promise Section */}
//         <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//           {/* Background Image */}
//           <div className="absolute inset-0 z-0">
//             <img 
//               src="/public/images/logo/istockphoto-537311780-612x612.webp" 
//               alt="Children and community"
//               className="w-full h-full object-cover opacity-100"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r opacity-75 from-[#212121]/95 to-[#424242]/90"></div>
//           </div>
          
//           <div className="relative z-10 p-12 lg:p-14 text-white">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF5722] to-[#E64A19] rounded-3xl mb-8 shadow-lg">
//                 <Heart className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-3xl md:text-4xl font-bold mb-6">
//                 Our Promise to Every Child
//               </h3>
//               <p className="text-xl text-[#EEEEEE] mb-12 leading-relaxed">
//                 We promise to treat every child with dignity, provide them with opportunities to learn and grow, 
//                 and never give up on their dreams. Every child deserves a chance to succeed, and we're committed 
//                 to making that chance a reality.
//               </p>
              
//               <div className="grid md:grid-cols-3 gap-8">
//                 <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
//                   <div className="text-4xl font-bold text-[#FF7043] mb-2">100%</div>
//                   <div className="text-[#EEEEEE] font-medium">Commitment to Transparency</div>
//                 </div>
//                 <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
//                   <div className="text-4xl font-bold text-[#26A69A] mb-2">24/7</div>
//                   <div className="text-[#EEEEEE] font-medium">Support for Our Communities</div>
//                 </div>
//                 <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
//                   <div className="text-4xl font-bold text-[#FFD54F] mb-2">∞</div>
//                   <div className="text-[#EEEEEE] font-medium">Belief in Every Child's Potential</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MissionVision;



import React from 'react';
import { Target, Eye, Compass, Lightbulb, Users, Heart, BookOpen, Shield, Award, Globe, Zap, CheckCircle, Palette, HandHeart, GraduationCap } from 'lucide-react';

const MissionVision = () => {
  const missionPoints = [
    {
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Quality Education Access",
      description: "Ensure children from underprivileged backgrounds receive excellent quality education through innovative programs and dedicated support.",
      gradient: "from-[#FF5722] to-[#E64A19]"
    },
    {
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Knowledge & Values",
      description: "Impart comprehensive knowledge and strong moral values through well-designed curriculum and specialized programs for holistic development.",
      gradient: "from-[#00695C] to-[#004D40]"
    },
    
  ];

  const visionElements = [
    {
      title: "Quality Education",
      description: "Comprehensive educational programs that transform lives and create opportunities",
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-[#FF5722]",
      bgColor: "bg-[#FFF3E0]",
      borderColor: "border-[#FF5722]/20"
    },
    {
      title: "Healthcare Access",
      description: "Essential medical care and health awareness for every child in our programs",
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-[#00695C]",
      bgColor: "bg-[#E0F2F1]",
      borderColor: "border-[#00695C]/20"
    },
    {
      title: "Livelihood Programs",
      description: "Sustainable skill development and employment opportunities for youth empowerment",
      icon: <HandHeart className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-[#FFC107]",
      bgColor: "bg-[#FFF8E1]",
      borderColor: "border-[#FFC107]/20"
    }
  ];

  const coreValues = [
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Impact-Driven",
      description: "Every program is designed to create measurable, lasting impact in children's lives through focused interventions.",
      gradient: "from-[#FF8A65] to-[#FF7043]"
    },
    {
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Transparency",
      description: "Complete accountability in operations, funding, and impact reporting with open communication to all stakeholders.",
     gradient: "from-[#26A69A] to-[#00695C]"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Innovation",
      description: "Continuously evolving our methods to serve children better through creative solutions and modern approaches.",
      gradient: "from-[#26A69A] to-[#00695C]"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in all programs while ensuring quality delivery and sustainable outcomes.",
       gradient: "from-[#FF8A65] to-[#FF7043]"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Impact", color: "text-[#FF5722]" },
    { number: "100K+", label: "Children Supported", color: "text-[#00695C]" },
    { number: "500+", label: "Communities Reached", color: "text-[#26A69A]" },
    { number: "1000+", label: "Volunteers Engaged", color: "text-[#FFC107]" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-50 via-orange-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] rounded-full text-xs sm:text-sm font-semibold text-white mb-6 sm:mb-8 shadow-lg">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Our Mission, Vision & Values
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#212121] mb-4 sm:mb-6 px-4">
            Guided by Purpose,
            <span className="block text-[#FF5722] mt-1 sm:mt-2">Driven by Impact</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#616161] max-w-4xl mx-auto leading-relaxed px-4">
            Our mission, vision, and values form the foundation of everything we do. 
            They guide our decisions, shape our programs, and inspire our team to create lasting change.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-gradient-to-br from-[#FF5722] to-[#E64A19] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" 
                alt="Children in education program"
                className="w-full h-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/90 to-[#E64A19]/80"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row relative z-10">
              {/* Left side - Content */}
              <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12 xl:p-16 text-white">
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl mb-4 sm:mb-6">
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                    Our Vision
                  </h3>
                  <p className="text-lg sm:text-xl text-white/95 leading-relaxed font-medium mb-6 sm:mb-8">
                    To empower the underprivileged children and youth through quality education, healthcare and livelihood programs.
                  </p>
                </div>

                {/* Vision Elements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {visionElements.map((element, index) => (
                    <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 hover:bg-white/20 transition-all duration-300">
                      <div className="text-[#FFD54F] mb-3 sm:mb-4">
                        {element.icon}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                        {element.title}
                      </h4>
                      <p className="text-white/85 text-sm leading-relaxed">
                        {element.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Stats with Image */}
              <div className="lg:w-1/3 relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative z-10 p-6 sm:p-8 lg:p-12 xl:p-16">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Our Impact</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F] mb-1 sm:mb-2">
                          {achievement.number}
                        </div>
                        <div className="text-white/90 font-medium text-sm sm:text-base">
                          {achievement.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Mission Header with Background */}
          <div className="relative mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="/public/images/logo/istockphoto-2193713844-612x612.webp" 
                alt="Mission background"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
            </div>
            
            <div className="relative z-10 text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-lg">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Our Mission
              </h3>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
                We are committed to creating comprehensive change through focused interventions that address the core needs of underprivileged children and communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 bg-gradient-to-t from-orange-50 to-white">
            {missionPoints.map((point, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-t from-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-[#E0E0E0] h-full">
                  {/* Card Image Header */}
                  <div className="relative h-36 sm:h-48 overflow-hidden">
                    <img 
                      src={index === 0 ? "/public/images/logo/gettyimages-1344964565-612x612.jpg" : 
                           index === 1 ? "/public/images/logo/gettyimages-1788257385-612x612.jpg" :
                           index === 2 ? "/public/images/logo/gettyimages-2195741267-612x612.jpg" :
                           index === 3 ? "/public/images/logo/istockphoto-537311780-612x612.webp" :
                           "/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg"} 
                      alt={point.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${point.gradient} shadow-lg`}>
                      <div className="text-white">
                        {point.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <h4 className="text-lg sm:text-xl font-bold text-[#212121] mb-3 sm:mb-4">
                      {point.title}
                    </h4>
                    <p className="text-[#616161] leading-relaxed text-sm sm:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-t from-white">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-4 sm:mb-6">
              Our Core Values
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-[#616161] max-w-3xl mx-auto leading-relaxed px-4">
              These fundamental principles guide our work and define who we are as an organization committed to creating positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-[#E0E0E0] h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 bg-gradient-to-br ${value.gradient} shadow-lg`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#212121] mb-3 sm:mb-4">
                    {value.title}
                  </h4>
                  <p className="text-[#616161] leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promise Section */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/public/images/logo/istockphoto-537311780-612x612.webp" 
              alt="Children and community"
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r opacity-75 from-[#212121]/95 to-[#424242]/90"></div>
          </div>
          
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 xl:p-14 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FF5722] to-[#E64A19] rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 shadow-lg">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Our Promise to Every Child
              </h3>
              <p className="text-lg sm:text-xl text-[#EEEEEE] mb-8 sm:mb-12 leading-relaxed">
                We promise to treat every child with dignity, provide them with opportunities to learn and grow, 
                and never give up on their dreams. Every child deserves a chance to succeed, and we're committed 
                to making that chance a reality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF7043] mb-1 sm:mb-2">100%</div>
                  <div className="text-[#EEEEEE] font-medium text-sm sm:text-base">Commitment to Transparency</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#26A69A] mb-1 sm:mb-2">24/7</div>
                  <div className="text-[#EEEEEE] font-medium text-sm sm:text-base">Support for Our Communities</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F] mb-1 sm:mb-2">∞</div>
                  <div className="text-[#EEEEEE] font-medium text-sm sm:text-base">Belief in Every Child's Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;