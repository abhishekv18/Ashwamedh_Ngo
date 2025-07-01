

// import React from 'react';
// import { 
//   Heart, 
//   Users, 
//   Target, 
//   BookOpen, 
//   Lightbulb, 
//   HandHeart,
//   Award,
//   TreePine,
//   Stethoscope,
//   GraduationCap,
//   ArrowRight,
//   Star
// } from 'lucide-react';

// const ApproachMethodology = () => {
//   const methodologyCards = [
//     {
//       icon: <Heart className="w-10 h-10" />,
//       title: "Child-Centric Approach",
//       description: "Every decision and program is designed with the child's best interests at heart, ensuring their safety, development, and happiness through personalized care and attention.",
//       image: "/public/images/logo/istockphoto-1318617341-612x612.jpg",
//     gradient: "from-amber-500 via-orange-500 to-orange-600",
//       bgPattern: "bg-gradient-to-br from-amber-50 via-white to-orange-100"
//     },
//     {
//       icon: <Users className="w-10 h-10" />,
//       title: "Community Integration",
//       description: "We work closely with local communities, families, and stakeholders to create sustainable change from within, building lasting partnerships.",
//       image: "/public/images/logo/istockphoto-535896491-612x612.webp",
//       gradient: "from-teal-600 via-teal-700 to-teal-800",
//       bgPattern: "bg-gradient-to-br from-teal-50 via-white to-teal-100"
//     },
//     {
//       icon: <Target className="w-10 h-10" />,
//       title: "Evidence-Based Programs",
//       description: "Our interventions are backed by extensive research and proven methodologies, ensuring maximum impact and measurable effectiveness in every initiative.",
//       image: "/public/images/logo/istockphoto-1541867674-612x612.jpg",
//      gradient: "from-teal-600 via-teal-700 to-teal-800",
//       bgPattern: "bg-gradient-to-br from-teal-50 via-white to-teal-100"
//     },
//     {
//       icon: <BookOpen className="w-10 h-10" />,
//       title: "Holistic Development",
//       description: "We address multiple aspects of a child's growth - education, health, emotional well-being, and social skills for comprehensive development.",
//       image: "/public/images/logo/yannis-h-uaPaEM7MiQQ-unsplash.jpg",
//       gradient: "from-amber-500 via-orange-500 to-orange-600",
//       bgPattern: "bg-gradient-to-br from-amber-50 via-white to-orange-100"
//     }
//   ];

//   const coreValues = [
//     {
//       icon: <Lightbulb className="w-8 h-8" />,
//       title: "Innovation",
//       description: "Continuously evolving our methods to meet changing needs and embrace new technologies",
//       bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
//       iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
//       borderColor: "border-orange-300"
//     },
//     {
//       icon: <HandHeart className="w-8 h-8" />,
//       title: "Compassion",
//       description: "Leading with empathy and understanding in every interaction with children and families",
//       bgColor: "bg-gradient-to-br from-teal-100 to-teal-200",
//       iconBg: "bg-gradient-to-br from-teal-600 to-teal-700",
//       borderColor: "border-teal-300"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Excellence",
//       description: "Maintaining high standards in all our programs and services to achieve outstanding results",
//        bgColor: "bg-gradient-to-br from-teal-100 to-teal-200",
//       iconBg: "bg-gradient-to-br from-teal-600 to-teal-700",
//       borderColor: "border-teal-300"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Collaboration",
//       description: "Building strong partnerships for greater collective impact and sustainable community change",
//     bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
//       iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
//       borderColor: "border-orange-300"
//     }
//   ];

//   const focusAreas = [
//     {
//       icon: <GraduationCap className="w-12 h-12" />,
//       title: "Education & Learning",
//       description: "Quality education that opens doors to opportunities and builds foundational skills for life success",
//       stats: "500+ Children Educated",
//       image: "/public/images/logo/istockphoto-1740994754-612x612.webp",
//       bgGradient: "bg-gradient-to-br from-orange-50 via-white to-orange-100",
//       iconColor: "text-white",
//       iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
//       statsBg: "bg-orange-200",
//       statsText: "text-orange-800"
//     },
//     {
//       icon: <Stethoscope className="w-12 h-12" />,
//       title: "Health & Nutrition",
//       description: "Comprehensive healthcare and nutrition programs ensuring healthy physical and mental development",
//       stats: "300+ Health Checkups",
//       image: "/public/images/logo/istockphoto-182145531-612x612.webp",
//       bgGradient: "bg-gradient-to-br from-teal-50 via-white to-teal-100",
//       iconColor: "text-white",
//       iconBg: "bg-gradient-to-br from-teal-600 to-teal-700",
//       statsBg: "bg-teal-200",
//       statsText: "text-teal-800"
//     },
//     {
//       icon: <TreePine className="w-12 h-12" />,
//       title: "Environmental Awareness",
//       description: "Building eco-conscious future leaders through environmental education and sustainable practices",
//       stats: "50+ Green Projects",
//       image: "/public/images/logo/istockphoto-1555696380-612x612.webp",
//       bgGradient: "bg-gradient-to-br from-amber-50 via-white to-amber-100",
//       iconColor: "text-white",
//       iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
//       statsBg: "bg-amber-200",
//       statsText: "text-amber-800"
//     }
//   ];

//   return (
//     <div className="relative overflow-hidden">
//       {/* Orange Background Header Section */}
//   <div className="relative py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
//   {/* Background Image */}
//   <div className="absolute inset-0 opacity-50">
//     <img 
//       src="/public/images/logo/gettyimages-535555239-612x612.jpg"
//       alt="Children learning together"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* Orange-Teal Transparent Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 via-orange-600/80 to-teal-700/80 opacity-90 z-10"></div>

//   {/* Header Content */}
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     <div className="text-center -mt-4">
//       <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 shadow-lg">
//         <Star className="w-8 h-8 text-white" />
//       </div>
//       <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//         Our <span className="text-orange-100">Methodology</span>
//       </h2>
//       <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-10 leading-relaxed">
//         A focused, hands-on approach to ensure every child and community flourishes.
//       </p>

//       <div className="grid sm:grid-cols-3 gap-6 text-left text-white max-w-4xl mx-auto">
//         <div className="text-md">
//           <span className="font-semibold">📘 Personalized Learning</span>
//           <p className="opacity-90 mt-2 mb-2">Adapting to each child's pace and curiosity.</p>
//         </div>
//         <div className="text-md">
//           <span className="font-semibold">🤝 Community First</span>
//           <p className="opacity-90 mt-2 mb-2">Empowering locals for long-term sustainability.</p>
//         </div>
//         <div className="text-md">
//           <span className="font-semibold">🌱 Wellbeing Focused</span>
//           <p className="opacity-90 mt-2 mb-2">Supporting education, health & emotional growth.</p>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Bottom Fade */}
//   <div className="absolute bottom-0 left-0 right-0 h-20 z-20 bg-gradient-to-t from-white to-transparent"></div>
// </div>


//       {/* Main Content Section */}
//       <div className="py-20 bg-gradient-to-br from-white via-orange-50 to-teal-50 relative">
//         {/* Background Pattern using brand colors */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//           <div className="absolute top-40 right-10 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
//           <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 relative">
//           {/* Main Methodology Cards */}
//           <div className="grid lg:grid-cols-2 gap-10 mb-24">
//             {methodologyCards.map((card, index) => (
//               <div key={index} 
//                    className={`${card.bgPattern} rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-white/80 backdrop-blur-sm`}>
//                 {/* Image Header with Gradient Overlay */}
//                 <div className="relative h-56 overflow-hidden">
//                   <img 
//                     src={card.image || "/api/placeholder/600/300"} 
//                     alt={card.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-85`}></div>
//                   <div className="absolute inset-0 flex items-center justify-center text-center p-6">
//                     <div className="text-white">
//                       <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 shadow-lg">
//                         {card.icon}
//                       </div>
//                       <h3 className="text-2xl font-bold">{card.title}</h3>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Content */}
//                 <div className="p-8">
//                   <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                     {card.description}
//                   </p>
//                   <div className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors cursor-pointer">
//                     <span>Learn More</span>
//                     <ArrowRight className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Core Values Section */}
//           <div className="mb-24">
//             <div className="text-center mb-16">
//               <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                 Our Core <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Values</span>
//               </h3>
//               <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//                 These fundamental principles guide every aspect of our work and decision-making process.
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {coreValues.map((value, index) => (
//                 <div key={index} 
//                      className={`${value.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 ${value.borderColor} transform hover:-translate-y-2 hover:scale-105`}>
//                   <div className={`inline-flex items-center justify-center w-16 h-16 ${value.iconBg} rounded-full mb-6 shadow-lg`}>
//                     <div className="text-white">
//                       {value.icon}
//                     </div>
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-4">
//                     {value.title}
//                   </h4>
//                   <p className="text-gray-700 leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Focus Areas Section */}
//           <div className="mb-20">
//             <div className="text-center mb-16">
//               <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                 Key Focus <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Areas</span>
//               </h3>
//               <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//                 Our multi-dimensional approach addresses critical aspects of child development and community building.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-10">
//               {focusAreas.map((area, index) => (
//                 <div key={index} 
//                      className={`${area.bgGradient} rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-white/80`}>
//                   {/* Image Header */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img 
//                       src={area.image || "/api/placeholder/400/200"} 
//                       alt={area.title}
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="p-8">
//                     <div className={`inline-flex items-center justify-center w-20 h-20 ${area.iconBg} rounded-2xl mb-6 shadow-lg transform -translate-y-12`}>
//                       <div className={area.iconColor}>
//                         {area.icon}
//                       </div>
//                     </div>
//                     <div className="-mt-6">
//                       <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                         {area.title}
//                       </h4>
//                       <p className="text-gray-700 mb-6 leading-relaxed">
//                         {area.description}
//                       </p>
//                       <div className={`inline-block ${area.statsBg} ${area.statsText} px-4 py-2 rounded-full text-sm font-semibold shadow-sm`}>
//                         {area.stats}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Process Flow Section */}
//           <div className="bg-gradient-to-br from-white via-teal-50 to-white rounded-3xl shadow-2xl p-8 lg:p-16 mb-20 border-2 border-teal-100">
//             <div className="text-center mb-16">
//               <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                 Our <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Process</span>
//               </h3>
//               <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//                 A systematic approach that ensures effective implementation and measurable outcomes.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-4 gap-8">
//               {[
//                 { 
//                   step: "01", 
//                   title: "Assessment", 
//                   desc: "Understanding community needs and challenges through comprehensive research", 
//                   icon: <Target className="w-6 h-6" />,
//                   color: "from-orange-500 to-orange-600",
//                   bgColor: "from-orange-100 to-orange-200"
//                 },
//                 { 
//                   step: "02", 
//                   title: "Planning", 
//                   desc: "Developing targeted intervention strategies with stakeholder input", 
//                   icon: <BookOpen className="w-6 h-6" />,
//                   color: "from-teal-600 to-teal-700",
//                   bgColor: "from-teal-100 to-teal-200"
//                 },
//                 { 
//                   step: "03", 
//                   title: "Implementation", 
//                   desc: "Executing programs with community involvement and continuous support", 
//                   icon: <Users className="w-6 h-6" />,
//                 color: "from-teal-600 to-teal-700",
//                   bgColor: "from-teal-100 to-teal-200"
//                 },
//                 { 
//                   step: "04", 
//                   title: "Evaluation", 
//                   desc: "Measuring impact and continuous improvement for sustained results", 
//                   icon: <Award className="w-6 h-6" />,
//                   color: "from-orange-500 to-orange-600",
//                   bgColor: "from-orange-100 to-orange-200"
//                 }
//               ].map((item, index) => (
//                 <div key={index} className="text-center relative">
//                   <div className={`bg-gradient-to-br ${item.bgColor} rounded-2xl p-6 mb-6 border-2 border-white shadow-lg`}>
//                     <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.color} text-white rounded-2xl font-bold text-2xl mb-4 shadow-lg`}>
//                       {item.step}
//                     </div>
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-md">
//                       <div className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
//                         {item.icon}
//                       </div>
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-3">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-700 leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                   {index < 3 && (
//                     <div className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-orange-300 via-teal-300 to-orange-300 transform -translate-y-0.5 rounded-full"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center">
//   <div className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 rounded-3xl p-8 lg:p-16 text-white shadow-2xl overflow-hidden">
    
//     {/* ✅ Background Image Layer */}
//     <img 
//       src="/public/images/logo/istockphoto-1555696380-612x612.webp" // 🔁 Replace with your actual image path
//       alt="Helping children background"
//       className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
//     />

//     <div className="relative z-10">
//       <h3 className="text-3xl lg:text-4xl font-bold mb-6">
//         Ready to Make a Difference?
//       </h3>
//       <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
//         Join us in our mission to create lasting positive change in children's lives through our proven methodology and compassionate approach.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-6 justify-center">
//         <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//           Learn More About Our Programs
//         </button>
//         <button className="border-3 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//           Get Involved Today
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//             </div>
//       </div>
//     </div>
//   );
// };

// export default ApproachMethodology;



import React from 'react';
import { 
  Heart, 
  Users, 
  Target, 
  BookOpen, 
  Lightbulb, 
  HandHeart,
  Award,
  TreePine,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  Star
} from 'lucide-react';

const ApproachMethodology = () => {
  const methodologyCards = [
    {
      icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Child-Centric Approach",
      description: "Every decision and program is designed with the child's best interests at heart, ensuring their safety, development, and happiness through personalized care and attention.",
      image: "/public/images/logo/istockphoto-1318617341-612x612.jpg",
    gradient: "from-amber-500 via-orange-500 to-orange-600",
      bgPattern: "bg-gradient-to-br from-amber-50 via-white to-orange-100"
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Community Integration",
      description: "We work closely with local communities, families, and stakeholders to create sustainable change from within, building lasting partnerships.",
      image: "/public/images/logo/istockphoto-535896491-612x612.webp",
      gradient: "from-teal-600 via-teal-700 to-teal-800",
      bgPattern: "bg-gradient-to-br from-teal-50 via-white to-teal-100"
    },
    {
      icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Evidence-Based Programs",
      description: "Our interventions are backed by extensive research and proven methodologies, ensuring maximum impact and measurable effectiveness in every initiative.",
      image: "/public/images/logo/istockphoto-1541867674-612x612.jpg",
     gradient: "from-teal-600 via-teal-700 to-teal-800",
      bgPattern: "bg-gradient-to-br from-teal-50 via-white to-teal-100"
    },
    {
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Holistic Development",
      description: "We address multiple aspects of a child's growth - education, health, emotional well-being, and social skills for comprehensive development.",
      image: "/public/images/logo/yannis-h-uaPaEM7MiQQ-unsplash.jpg",
      gradient: "from-amber-500 via-orange-500 to-orange-600",
      bgPattern: "bg-gradient-to-br from-amber-50 via-white to-orange-100"
    }
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Innovation",
      description: "Continuously evolving our methods to meet changing needs and embrace new technologies",
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      borderColor: "border-orange-300"
    },
    {
      icon: <HandHeart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Compassion",
      description: "Leading with empathy and understanding in every interaction with children and families",
      bgColor: "bg-gradient-to-br from-teal-100 to-teal-200",
      iconBg: "bg-gradient-to-br from-teal-600 to-teal-700",
      borderColor: "border-teal-300"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Excellence",
      description: "Maintaining high standards in all our programs and services to achieve outstanding results",
       bgColor: "bg-gradient-to-br from-teal-100 to-teal-200",
      iconBg: "bg-gradient-to-br from-teal-600 to-teal-700",
      borderColor: "border-teal-300"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Collaboration",
      description: "Building strong partnerships for greater collective impact and sustainable community change",
    bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      borderColor: "border-orange-300"
    }
  ];

  const focusAreas = [
    {
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Education & Learning",
      description: "Quality education that opens doors to opportunities and builds foundational skills for life success",
      stats: "500+ Children Educated",
      image: "/public/images/logo/istockphoto-1740994754-612x612.webp",
      bgGradient: "bg-gradient-to-br from-orange-50 via-white to-orange-100",
      iconColor: "text-white",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      statsBg: "bg-orange-200",
      statsText: "text-orange-800"
    },
    {
      icon: <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Health & Nutrition",
      description: "Comprehensive healthcare and nutrition programs ensuring healthy physical and mental development",
      stats: "300+ Health Checkups",
      image: "/public/images/logo/istockphoto-182145531-612x612.webp",
      bgGradient: "bg-gradient-to-br from-teal-50 via-white to-teal-100",
      iconColor: "text-white",
      iconBg: "bg-gradient-to-br from-teal-600 to-teal-700",
      statsBg: "bg-teal-200",
      statsText: "text-teal-800"
    },
    // {
    //   icon: <TreePine className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    //   title: "Environmental Awareness",
    //   description: "Building eco-conscious future leaders through environmental education and sustainable practices",
    //   stats: "50+ Green Projects",
    //   image: "/public/images/logo/istockphoto-1555696380-612x612.webp",
    //   bgGradient: "bg-gradient-to-br from-amber-50 via-white to-amber-100",
    //   iconColor: "text-white",
    //   iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    //   statsBg: "bg-amber-200",
    //   statsText: "text-amber-800"
    // }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Orange Background Header Section */}
  <div className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 opacity-50">
    <img 
      src="/public/images/logo/gettyimages-535555239-612x612.jpg"
      alt="Children learning together"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Orange-Teal Transparent Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 via-orange-600/80 to-teal-700/80 opacity-90 z-10"></div>

  {/* Header Content */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 shadow-lg">
        <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
        Our <span className="text-orange-100">Methodology</span>
      </h2>
      <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0">
        A focused, hands-on approach to ensure every child and community flourishes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left text-white max-w-4xl mx-auto">
        <div className="text-sm sm:text-base">
          <span className="font-semibold">📘 Personalized Learning</span>
          <p className="opacity-90 mt-2 mb-2">Adapting to each child's pace and curiosity.</p>
        </div>
        <div className="text-sm sm:text-base">
          <span className="font-semibold">🤝 Community First</span>
          <p className="opacity-90 mt-2 mb-2">Empowering locals for long-term sustainability.</p>
        </div>
        <div className="text-sm sm:text-base">
          <span className="font-semibold">🌱 Wellbeing Focused</span>
          <p className="opacity-90 mt-2 mb-2">Supporting education, health & emotional growth.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-20 z-20 bg-gradient-to-t from-white to-transparent"></div>
</div>


      {/* Main Content Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-orange-50 to-teal-50 relative">
        {/* Background Pattern using brand colors */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Main Methodology Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
            {methodologyCards.map((card, index) => (
              <div key={index} 
                   className={`${card.bgPattern} rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-white/80 backdrop-blur-sm`}>
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                  <img 
                    src={card.image || "/api/placeholder/600/300"} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-85`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-center p-4 sm:p-6">
                    <div className="text-white">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 shadow-lg">
                        {card.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">{card.title}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    {card.description}
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors cursor-pointer">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Values Section */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Core <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Values</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                These fundamental principles guide every aspect of our work and decision-making process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {coreValues.map((value, index) => (
                <div key={index} 
                     className={`${value.bgColor} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 ${value.borderColor} transform hover:-translate-y-2 hover:scale-105`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${value.iconBg} rounded-full mb-4 sm:mb-6 shadow-lg`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas Section */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Key Focus <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Areas</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Our multi-dimensional approach addresses critical aspects of child development and community building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {focusAreas.map((area, index) => (
                <div key={index} 
                     className={`${area.bgGradient} rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-white/80`}>
                  {/* Image Header */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={area.image || "/api/placeholder/400/200"} 
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 ${area.iconBg} rounded-2xl mb-6 shadow-lg transform -translate-y-8 sm:-translate-y-12`}>
                      <div className={area.iconColor}>
                        {area.icon}
                      </div>
                    </div>
                    <div className="-mt-4 sm:-mt-6">
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {area.title}
                      </h4>
                      <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {area.description}
                      </p>
                      <div className={`inline-block ${area.statsBg} ${area.statsText} px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm`}>
                        {area.stats}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Flow Section */}
          <div className="bg-gradient-to-br from-white via-teal-50 to-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-16 mb-16 sm:mb-20 border-2 border-teal-100">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Process</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                A systematic approach that ensures effective implementation and measurable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { 
                  step: "01", 
                  title: "Assessment", 
                  desc: "Understanding community needs and challenges through comprehensive research", 
                  icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
                  color: "from-orange-500 to-orange-600",
                  bgColor: "from-orange-100 to-orange-200"
                },
                { 
                  step: "02", 
                  title: "Planning", 
                  desc: "Developing targeted intervention strategies with stakeholder input", 
                  icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
                  color: "from-teal-600 to-teal-700",
                  bgColor: "from-teal-100 to-teal-200"
                },
                { 
                  step: "03", 
                  title: "Implementation", 
                  desc: "Executing programs with community involvement and continuous support", 
                  icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
                color: "from-teal-600 to-teal-700",
                  bgColor: "from-teal-100 to-teal-200"
                },
                { 
                  step: "04", 
                  title: "Evaluation", 
                  desc: "Measuring impact and continuous improvement for sustained results", 
                  icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
                  color: "from-orange-500 to-orange-600",
                  bgColor: "from-orange-100 to-orange-200"
                }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className={`bg-gradient-to-br ${item.bgColor} rounded-2xl p-4 sm:p-6 mb-6 border-2 border-white shadow-lg`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.color} text-white rounded-2xl font-bold text-lg sm:text-2xl mb-4 shadow-lg`}>
                      {item.step}
                    </div>
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full mb-4 shadow-md">
                      <div className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-orange-300 via-teal-300 to-orange-300 transform -translate-y-0.5 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
  <div className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 rounded-3xl p-6 sm:p-8 lg:p-16 text-white shadow-2xl overflow-hidden">
    
    {/* ✅ Background Image Layer */}
    <img 
      src="/public/images/logo/istockphoto-1555696380-612x612.webp" // 🔁 Replace with your actual image path
      alt="Helping children background"
      className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
    />

    <div className="relative z-10">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
        Ready to Make a Difference?
      </h3>
      <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
        Join us in our mission to create lasting positive change in children's lives through our proven methodology and compassionate approach.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
        <button className="bg-white text-orange-600 px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Learn More About Our Programs
        </button>
        <button className="border-2 sm:border-3 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Get Involved Today
        </button>
      </div>
    </div>
  </div>
</div>

            </div>
      </div>
    </div>
  );
};

export default ApproachMethodology;