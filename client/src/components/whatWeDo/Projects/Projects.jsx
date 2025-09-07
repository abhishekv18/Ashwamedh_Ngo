


// import React, { useState, useEffect } from 'react';
// import { BookOpen, Users, Target, Award, Lightbulb, Briefcase, Heart, Star, ChevronRight, Calendar, MapPin, TrendingUp, ChevronLeft } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProjectAnkur = () => {
//   const [currentSlides, setCurrentSlides] = useState({});
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
  
//   useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user]);

//   const currentProjects = [
//     {
//       id: 1,
//       title: "Project Ankur",
//       subtitle: "Foundation Building Program",
//       tagline: "Catch Them Young - Build Strong Foundations",
//       description: "Empowering young minds through early intervention and strong foundational education that shapes their academic journey.",
//       fullDescription: "Project Ankur embodies the 'catch them young' philosophy, focusing on building robust educational foundations for students before they reach 8th standard. Our comprehensive approach addresses the critical gap in basic literacy and numeracy skills that often goes unnoticed in traditional educational systems. Through interactive learning methods, hands-on activities, and personalized attention, we ensure every child develops the fundamental skills necessary for academic success.",
//       keyFeatures: [
//         "Reading and Writing proficiency in English and regional languages",
//         "Mathematical concepts through interactive learning methods",
//         "Science fundamentals with hands-on experiments",
//         "Critical thinking and problem-solving skills development",
//         "Creative arts integration for holistic development",
//         "Regular assessment and progress tracking"
//       ],
//       highlights: [
//         { label: "Target Audience", value: "Students up to 7th Standard", icon: Users },
//         { label: "Program Duration", value: "Ongoing Program", icon: Calendar },
//         { label: "Annual Impact", value: "500+ Students Benefited", icon: TrendingUp },
//         { label: "Partnerships", value: "Schools, NGOs & Local Bodies", icon: Heart }
//       ],
//       icon: BookOpen,
//       color: "from-primary to-primary-dark",
//       accentColor: "text-primary",
//       bgGradient: "from-orange-50 to-red-50",
//       images: [
//         { url: "/ankur/WhatsApp Image 2025-06-29 at 1.56.51 PM.jpeg" },
//         { url: "/ankur/WhatsApp Image 2025-06-29 at 1.57.31 PM.jpeg" },
//         { url: "/ankur/WhatsApp Image 2025-06-29 at 1.57.45 PM.jpeg" },
//         { url: "/ankur/WhatsApp Image 2025-06-29 at 1.58.07 PM.jpeg" }
//       ]
//     },
//     {
//       id: 2,
//       title: "Project Aakaar",
//       subtitle: "Personality Development Course",
//       tagline: "Shaping Tomorrow's Leaders Today",
//       description: "Transforming students into confident, ethical, and capable individuals through comprehensive personality development programs.",
//       fullDescription: "Project Aakaar is our flagship personality development initiative designed to nurture well-rounded individuals who are ready to face the challenges of tomorrow. This certified course goes beyond academic learning to develop communication skills, leadership qualities, emotional intelligence, and moral values. Our holistic approach ensures that students not only excel academically but also develop the personality traits necessary for success in life.",
//       keyFeatures: [
//         "Value Education and Moral Development programs",
//         "Advanced Communication Skills Training workshops",
//         "Time Management and Productivity enhancement techniques",
//         "Stress Management and Mental Wellness sessions",
//         "Yoga and Physical Wellness programs",
//         "Leadership and Team Building skill development"
//       ],
//       highlights: [
//         { label: "Target Audience", value: "Students 8th to 10th Standard", icon: Users },
//         { label: "Course Duration", value: "6-month Certificate Program", icon: Calendar },
//         { label: "Annual Graduates", value: "300+ Certified Students", icon: Award },
//         { label: "Certification", value: "Recognized Certificate Awarded", icon: Star }
//       ],
//       icon: Award,
//       color: "from-secondary to-secondary-dark",
//       accentColor: "text-secondary",
//       bgGradient: "from-teal-50 to-green-50",
//       images: [
//         { url: "/aakar/WhatsApp Image 2025-06-29 at 6.43.56 PM (1).jpeg" },
//         { url: "/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM (1).jpeg" },
//         { url: "/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM (1).jpeg" },
//         { url: "/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM.jpeg" }
//       ]
//     }
//   ];

//   const futureProject = {
//     id: 3,
//     title: "Skills Development Center",
//     subtitle: "Vocational Training Programs",
//     tagline: "Bridging Education and Employment",
//     description: "Comprehensive vocational training programs designed to equip youth with industry-relevant skills for better employment opportunities.",
//     fullDescription: "Our upcoming Skills Development Center recognizes that traditional degrees alone don't guarantee employment in today's competitive market. This initiative will provide hands-on, industry-relevant training programs that directly address the skills gap in various sectors. By partnering with industry leaders and government bodies, we aim to create a pipeline of skilled professionals ready to contribute to India's growing economy.",
//     plannedPrograms: [
//       "Digital Marketing and E-commerce Management",
//       "Computer Hardware and Software Maintenance",
//       "Tailoring, Fashion Design and Garment Technology",
//       "Electrical and Electronic Equipment Repairs",
//       "Food Processing, Packaging and Quality Control",
//       "Beauty, Wellness and Healthcare Services"
//     ],
//     highlights: [
//       { label: "Target Audience", value: "Youth aged 16-25 years", icon: Users },
//       { label: "Launch Timeline", value: "Coming Soon in 2025", icon: Calendar },
//       { label: "Expected Impact", value: "500+ Skilled Professionals", icon: TrendingUp },
//       { label: "Industry Partners", value: "Government & Private Sector", icon: Briefcase }
//     ],
//     icon: Briefcase,
//     color: "from-accent-gold to-accent-gold-dark",
//     accentColor: "text-accent-gold",
//     bgGradient: "from-orange-50 to-white",
//     images: [
//       { url: "/images/projects/7-7 (1).jpg", alt: "Digital marketing training facility" },
//       { url: "/images/projects/5-5 (1).jpg", alt: "Computer hardware workshop setup" },
//       { url: "/images/projects/8-8 (1).jpg", alt: "Fashion design and tailoring unit" },
//       { url: "/images/projects/3-3.jpg", alt: "Modern skills development center" }
//     ]
//   };

//   // Initialize slide states
//   useEffect(() => {
//     const initialSlides = {};
//     [...currentProjects, futureProject].forEach(project => {
//       initialSlides[project.id] = 0;
//     });
//     setCurrentSlides(initialSlides);
//   }, []);

//   // Auto-advance slides
//   useEffect(() => {
//     const intervals = {};
//     [...currentProjects, futureProject].forEach(project => {
//       intervals[project.id] = setInterval(() => {
//         setCurrentSlides(prev => ({
//           ...prev,
//           [project.id]: (prev[project.id] + 1) % project.images.length
//         }));
//       }, 3000);
//     });

//     return () => {
//       Object.values(intervals).forEach(interval => clearInterval(interval));
//     };
//   }, [currentProjects, futureProject]);

//   const goToSlide = (projectId, slideIndex) => {
//     setCurrentSlides(prev => ({
//       ...prev,
//       [projectId]: slideIndex
//     }));
//   };

//   const ImageCarousel = ({ project }) => {
//     const currentSlide = currentSlides[project.id] || 0;
    
//     return (
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
//         <div 
//           className="flex transition-transform duration-700 ease-in-out h-64 sm:h-80 md:h-96"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {project.images.map((image, index) => (
//             <div key={index} className="w-full h-full flex-shrink-0 relative bg-gray-200 overflow-hidden">
//               <img 
//                 src={image.url} 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//             </div>
//           ))}
//         </div>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
//           {project.images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(project.id, index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide 
//                   ? 'bg-white scale-125 shadow-lg' 
//                   : 'bg-white/60 hover:bg-white/80 hover:scale-110'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const ProjectSection = ({ project, index }) => {
//     const IconComponent = project.icon;
//     const isEven = index % 2 === 0;
    
//     return (
//       <section className={`py-12 bg-gradient-to-br ${project.bgGradient}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
            
//             {/* Content Section */}
//             <div className={`space-y-6 md:space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
//               <div className="space-y-4 md:space-y-6">
//                 <div className="flex items-center space-x-3 sm:space-x-4">
//                   <div className={`bg-gradient-to-r ${project.color} p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg`}>
//                     <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">{project.title}</h2>
//                     <p className="text-lg sm:text-xl text-gray-600 font-medium">{project.subtitle}</p>
//                   </div>
//                 </div>
                
//                 <div className={`border-l-4 border-primary pl-4 sm:pl-6`}>
//                   <p className={`text-2xl sm:text-2xl font-bold ${project.accentColor} mb-1 sm:mb-2`}>{project.tagline}</p>
//                   <p className=" text-lg sm:text-lg text-gray-700 leading-relaxed">{project.description}</p>
//                 </div>
//               </div>

//               <div className="prose prose-sm sm:prose-lg max-w-none">
//                 <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
//               </div>

//               {/* Key Features */}
//               <div className="space-y-3 sm:space-y-4">
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
//                   <Star className={`w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 ${project.accentColor}`} />
//                   {project.plannedPrograms ? 'Planned Programs' : 'Key Features'}
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
//                   {(project.plannedPrograms || project.keyFeatures).map((feature, idx) => (
//                     <div key={idx} className="flex items-start bg-white/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-white/50">
//                       <ChevronRight className={`w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 ${project.accentColor} mt-0.5 flex-shrink-0`} />
//                       <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Highlights */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                 {project.highlights.map((highlight, idx) => {
//                   const HighlightIcon = highlight.icon;
//                   return (
//                     <div key={idx} className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-white/50">
//                       <div className="flex items-center mb-2 sm:mb-3">
//                         <HighlightIcon className={`w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 ${project.accentColor}`} />
//                         <span className="text-xs sm:text-sm font-bold text-gray-700">{highlight.label}</span>
//                       </div>
//                       <p className="text-xs sm:text-sm text-gray-600 font-semibold">{highlight.value}</p>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* CTA Button */}
//               <Link to='/get-involved/contact'>
//                 <button className={`bg-gradient-to-r ${project.color} mt-6 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
//                 Learn More & Get Involved
//               </button>
//               </Link>
            
//             </div>

//             {/* Image Carousel Section */}
//             <div className={`mt-8 lg:mt-0 ${!isEven ? 'lg:col-start-1' : ''}`}>
//               <ImageCarousel project={project} />
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   const FutureProjectSection = ({ project }) => {
//     const IconComponent = project.icon;
    
//     return (
//       <section className={`py-8 sm:py-12 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden`}>
//         {/* Background decoration */}
//         <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full -translate-y-32 sm:-translate-y-48 translate-x-32 sm:translate-x-48"></div>
//         <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full translate-y-24 sm:translate-y-32 -translate-x-24 sm:-translate-x-32"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           {/* Section Header */}
//           <div className="text-center mb-10 sm:mb-14">
//             <div className="flex items-center justify-center mb-4 sm:mb-6">
//               <div className={`bg-gradient-to-r ${project.color} p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl`}>
//                 <IconComponent className="w-8 sm:w-12 h-8 sm:h-12 text-white" />
//               </div>
//             </div>
//             <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-white/50 mb-4 sm:mb-6">
//               <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 text-gray-600" />
//               <span className="text-sm sm:text-base font-bold text-gray-700">Coming Soon in 2026</span>
//             </div>
//             <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">{project.title}</h2>
//             <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-4 sm:mb-6">{project.subtitle}</p>
           
// <div className="border-l-4 border-accent-gold pl-4 sm:pl-6 max-w-3xl">
//   <div className="inline-block text-left align-top">
//     <div>
//       <p className={`text-2xl sm:text-3xl font-bold ${project.accentColor} mb-3 sm:mb-4`}>
//         {project.tagline}
//       </p>
//     </div>
//     <div>
//       <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
//         {project.description}
//       </p>
//     </div>
//   </div>
// </div>



//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
//             {/* Content */}
//             <div className="space-y-6 sm:space-y-8">
//               <div className="prose prose-sm sm:prose-lg max-w-none">
//                 <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{project.fullDescription}</p>
//               </div>

//               {/* Planned Programs */}
//               <div className="space-y-4 sm:space-y-6">
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
//                   <Lightbulb className={`w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 ${project.accentColor}`} />
//                   Planned Training Programs
//                 </h3>
//                 <div className="space-y-2 sm:space-y-3">
//                   {project.plannedPrograms.map((program, idx) => (
//                     <div key={idx} className="flex items-start bg-white/80 backdrop-blur-sm p-3 sm:p-5 rounded-lg sm:rounded-xl shadow-lg border border-white/50">
//                       <div className={`bg-gradient-to-r ${project.color} p-1 sm:p-2 rounded-md sm:rounded-lg mr-3 sm:mr-4 flex-shrink-0`}>
//                         <span className="text-white font-bold text-xs sm:text-sm">{String(idx + 1).padStart(2, '0')}</span>
//                       </div>
//                       <span className="text-sm sm:text-base text-gray-700 font-semibold">{program}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Highlights */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
//                 {project.highlights.map((highlight, idx) => {
//                   const HighlightIcon = highlight.icon;
//                   return (
//                     <div key={idx} className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xl border border-white/50">
//                       <div className="flex items-center mb-2 sm:mb-4">
//                         <HighlightIcon className={`w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 ${project.accentColor}`} />
//                         <span className="text-sm sm:text-base font-bold text-gray-700">{highlight.label}</span>
//                       </div>
//                       <p className="text-sm sm:text-base text-gray-600 font-semibold">{highlight.value}</p>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* CTA */}
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <a href="#footer">
//   <button className={`bg-gradient-to-r ${project.color} text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
//     Get Updates
//   </button>
// </a>

              
//                 <Link to='/get-involved/contact'>
//                   <button className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1">
//                   Partner With Us
//                 </button>
//                 </Link>
              
//               </div>
//             </div>

//             {/* Image Carousel */}
//             <div className="lg:sticky lg:top-8 mt-6 sm:mt-32">
//               <ImageCarousel project={project} />
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Custom CSS */}
//       <style jsx>{`
//         .from-primary { background: linear-gradient(135deg, #FF5722 0%, #E64A19 100%); }
//         .from-primary-dark { background: linear-gradient(135deg, #E64A19 0%, #BF360C 100%); }
//         .from-secondary { background: linear-gradient(135deg, #00695C 0%, #004D40 100%); }
//         .from-secondary-dark { background: linear-gradient(135deg, #004D40 0%, #00251A 100%); }
//         .from-accent-gold { background: linear-gradient(135deg, #FFC107 0%, #FF8F00 100%); }
//         .from-accent-gold-dark { background: linear-gradient(135deg, #FF8F00 0%, #E65100 100%); }
//         .text-primary { color: #FF5722; }
//         .text-secondary { color: #00695C; }
//         .text-accent-gold { color: #FF8F00; }
//         .border-primary { border-color: #FF5722; }
//         .border-accent-gold { border-color: #FFC107; }
//       `}</style>

//       <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
      
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="/images/logo/istockphoto-593332654-612x612.webp"
//             alt="Children Education Background"
//             className="w-full h-full object-cover opacity-50"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-75"></div>
//         </div>

//         <div className="relative z-20 text-center space-y-6 sm:space-y-8 md:space-y-10 px-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl">Our <span className='text-orange-200'>Projects</span></h1>
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
//             Transforming lives through education, skill development, and holistic personality growth. 
//             Discover our impactful initiatives creating lasting change in communities.
//           </p>


//           <div className="flex flex-row items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
//   <div className="text-center min-w-[100px]">
//     <div className="text-2xl sm:text-3xl md:text-4xl font-bold">5,000+</div>
//     <div className="text-white/90 text-xs sm:text-sm md:text-base">Students Impacted</div>
//   </div>

//   <div className="w-px h-8 sm:h-10 md:h-14 bg-white/30"></div>

//   <div className="text-center min-w-[100px]">
//     <div className="text-2xl sm:text-3xl md:text-4xl font-bold">4</div>
//     <div className="text-white/90 text-xs sm:text-sm md:text-base">Active Projects</div>
//   </div>

//   <div className="w-px h-8 sm:h-10 md:h-14 bg-white/30"></div>

//   <div className="text-center min-w-[100px]">
//     <div className="text-2xl sm:text-3xl md:text-4xl font-bold">2026</div>
//     <div className="text-white/90 text-xs sm:text-sm md:text-base">Future Goals</div>
//   </div>
// </div>

//         </div>

      
//       </section>


//       {/* Mission Statement */}
//       <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-orange-50 to-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 sm:space-y-8">
//             <div className="bg-gradient-to-r from-primary to-accent-gold p-4 sm:p-5 md:p-6 rounded-full w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto flex items-center justify-center shadow-xl">
//               <Target className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white" />
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Mission</h2>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed">
//               Ashwamedh Foundation believes education is the cornerstone of development for underprivileged children. 
//               Our comprehensive projects focus on building strong educational foundations and developing well-rounded 
//               personalities that empower children to contribute meaningfully to society.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Current Projects */}
//       <div className="space-y-0">
//         <div className="text-center py-12 sm:py-14 bg-white">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Current Projects</h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
//             Active initiatives making measurable impact in students' lives and communities
//           </p>
//         </div>
        
//         {currentProjects.map((project, index) => (
//           <ProjectSection key={project.id} project={project} index={index} />
//         ))}
//       </div>

//       {/* Future Projects */}
//       <div className="space-y-0">
//         <div className="text-center py-12 sm:py-14 bg-white">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Future Projects</h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
//             Innovative upcoming initiatives expanding our reach and community impact
//           </p>
//         </div>
        
//         <FutureProjectSection project={futureProject} />
//       </div>

//       <div className="relative py-12 sm:py-14 md:py-16 text-white overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/images/logo/gettyimages-535555239-612x612.jpg"
//             alt="Join Our Mission"
//             className="w-full h-full object-cover opacity-70"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
//         </div>

//         {/* Main Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
//           <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-lg">Join Our Mission</h2>
//           <p className="text-lg sm:text-xl text-white/95 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
//             Together, we can create transformative change and empower the next generation. 
//             Be part of our journey to build a better tomorrow.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
//             <Link to='/get-involved/volunteer'>
//              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl">
//               Volunteer With Us
//             </button>
//             </Link>
           
//             <Link to='/get-involved/donate'>
//             <button className="bg-transparent border-2 border-white text-white hover:bg-orange-500 hover:text-secondary px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl">
//               Support Our Cause
//             </button>
//             </Link>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectAnkur;

import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Target, Award, Lightbulb, Briefcase, Heart, Star, ChevronRight, Calendar, MapPin, TrendingUp, ChevronLeft, Activity, Music, Smile, HeartPulse } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProjectsPage = () => {
  const [currentSlides, setCurrentSlides] = useState({});
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  
  useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  const educationalProjects = [
    {
      id: 1,
      title: "Project Ankur",
      subtitle: "Flagship Early Childhood Education Program",
      tagline: "Building Strong Foundations for Brighter Futures",
      description: "Providing foundational learning to underprivileged children to ensure a better start in life through holistic early childhood development.",
      fullDescription: "Project Ankur is our flagship initiative focused on early childhood education (3-8 years) that lays the groundwork for lifelong learning. We operate through community learning centers that provide a stimulating environment with age-appropriate learning materials, trained educators, and a structured curriculum focusing on cognitive, linguistic, socio-emotional, and physical development. Our program emphasizes learning through play, interactive activities, and parental involvement to create a strong educational foundation.",
      keyFeatures: [
        "Early literacy and numeracy skill development",
        "Cognitive and motor skills enhancement activities",
        "Social-emotional learning and behavioral development",
        "Nutrition and health awareness programs",
        "Parental engagement and home-learning support",
        "Regular developmental milestone assessments"
      ],
      highlights: [
        { label: "Age Group", value: "Children 3-8 years", icon: Users },
        { label: "Program Duration", value: "Year-round Engagement", icon: Calendar },
        { label: "Annual Impact", value: "1200+ Children", icon: TrendingUp },
        { label: "Centers", value: "15 Community Learning Hubs", icon: MapPin }
      ],
      icon: BookOpen,
      color: "from-primary to-primary-dark",
      accentColor: "text-primary",
      bgGradient: "from-orange-50 to-red-50",
      images: [
 { url: "/ankur/WhatsApp Image 2025-06-29 at 1.56.51 PM.jpeg" },
      { url: "/ankur/WhatsApp Image 2025-06-29 at 1.57.31 PM.jpeg" },
         { url: "/ankur/WhatsApp Image 2025-06-29 at 1.57.45 PM.jpeg" },
         { url: "/ankur/WhatsApp Image 2025-06-29 at 1.58.07 PM.jpeg" }
      ]
    }
  ];

  const skillsDevelopmentProjects = [
    {
      id: 2,
      title: "Project Aagaaz",
      subtitle: "Holistic Development Initiative",
      tagline: "Nurturing Potential Beyond the Classroom",
     description: "Empowering children through academic support, mentorship, and life skills training to foster all-round growth and digital readiness.",
     fullDescription: "Project Aagaaz addresses the critical need for holistic development among school-age children (6–14 years) from underprivileged communities. Through our structured after-school learning centers, we provide a balanced blend of academic tutoring and life skills development to empower children beyond the classroom. Trained mentors work closely with students to strengthen academic foundations while nurturing essential skills through sports, arts, and computer literacy. Our digital literacy component helps bridge the digital divide, preparing children for a tech-driven future. To ensure a strong support system, the program also includes parent-teacher meetings, career awareness sessions, and community engagement activities, fostering a collaborative environment for each child’s sustained growth and development.",
      keyFeatures: [
        "After-school academic support and tutoring",
        "Digital literacy and STEM workshops",
        "Sports and physical development programs",
        "Creative arts and expression workshops",
        "Life skills and values education",
        "Community engagement initiatives"
      ],
      highlights: [
        { label: "Age Group", value: "Children 6-14 years", icon: Users },
        { label: "Program Reach", value: "25+ Schools", icon: Target },
        { label: "Weekly Sessions", value: "15+ Hours", icon: Calendar },
        { label: "Volunteers", value: "50+ Dedicated Mentors", icon: Heart }
      ],
      icon: Activity,
      color: "from-secondary to-secondary-dark",
      accentColor: "text-secondary",
      bgGradient: "from-teal-50 to-green-50",
      images: [
        { url: "/Screenshot_20250617-201559 (1).png" },
        { url: "/Screenshot_20250617-201209 (1).png" },
        { url: "/IMG-20250624-WA0064.jpg" },
        { url: "/IMG-20240819-WA0003.jpg" }
      ]
    },
    {
      id: 3,
      title: "Project Aakalan",
      subtitle: "Educational Equity Initiative",
      tagline: "Bridging the Opportunity Gap",
      description: "Providing educational support to students from marginalized backgrounds through tutoring, digital tools, and study materials.",
      fullDescription: "Project Aakalan focuses on reducing educational inequality by providing targeted support to students (10-18 years) from disadvantaged communities. We identify learning gaps through diagnostic assessments and provide personalized academic support through both physical and digital platforms. Our program includes distribution of educational kits (books, stationery, tablets), access to digital learning resources, and scholarship opportunities for meritorious students. We also conduct career guidance sessions and exposure visits to inspire students to pursue higher education.",
      keyFeatures: [
        "Personalized academic support programs",
        "Digital learning resource centers",
        "Educational material distribution",
        "Scholarship and mentorship programs",
        "Career guidance and counseling",
        "STEM education initiatives"
      ],
      highlights: [
        { label: "Beneficiaries", value: "800+ Students Annually", icon: Users },
        { label: "Digital Centers", value: "10 Learning Hubs", icon: MapPin },
        { label: "Scholarships", value: "50+ Awarded Yearly", icon: Award },
        { label: "Success Rate", value: "85% Improved Performance", icon: TrendingUp }
      ],
      icon: Lightbulb,
      color: "from-blue-600 to-blue-800",
      accentColor: "text-blue-600",
      bgGradient: "from-blue-50 to-indigo-50",
      images: [
        { url: "/IMG-20240818-WA0005.jpg" },
        { url: "/IMG-20250804-WA0086.jpg" },
        { url: "/IMG-20240923-WA0002.jpg" },
        { url: "/IMG-20240923-WA0001 (1).jpg" }
      ]
    }
  ];

  const personalityDevelopmentProjects = [
    {
      id: 4,
      title: "Project Aakaar",
      subtitle: "Personality Development Program",
      tagline: "Shaping Confident Leaders of Tomorrow",
      description: "Developing leadership, communication, and soft skills among youth to prepare them for personal and professional challenges.",
      fullDescription: "Project Aakaar is our comprehensive personality development initiative for adolescents and young adults (15-25 years). The program focuses on building essential life skills through structured workshops, experiential learning activities, and mentorship. Participants undergo modules in effective communication, emotional intelligence, critical thinking, teamwork, and leadership. Our unique approach combines classroom sessions with outdoor activities, guest lectures from industry experts, and opportunities for community leadership. The program culminates in a certification that recognizes the participant's personal growth journey.",
      keyFeatures: [
        "Communication and public speaking workshops",
        "Leadership and team management training",
        "Emotional intelligence and interpersonal skills",
        "Career readiness and professional etiquette",
        "Community leadership projects",
        "Certification and recognition"
      ],
      highlights: [
        { label: "Duration", value: "6-month Intensive Program", icon: Calendar },
        { label: "Age Group", value: "Youth 15-25 years", icon: Users },
        { label: "Certified", value: "300+ Graduates", icon: Award },
        { label: "Placement", value: "60% Career Advancement", icon: Briefcase }
      ],
      icon: Smile,
      color: "from-purple-600 to-purple-800",
      accentColor: "text-purple-600",
      bgGradient: "from-purple-50 to-violet-50",
      images: [
       { url: "/aakar/WhatsApp Image 2025-06-29 at 6.43.56 PM (1).jpeg" },
       { url: "/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM (1).jpeg" },
         { url: "/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM (1).jpeg" },
         { url: "/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM.jpeg" }
      ]
    },
    {
      id: 5,
      title: "Project Anubhav",
      subtitle: "Experiential Learning Initiative",
      tagline: "From Classroom to Career",
      description: "Providing real-world exposure through workshops, internships, and career guidance to enhance employability.",
      fullDescription: "Project Anubhav bridges the gap between education and employment by providing practical exposure and skill development opportunities for young adults (18-25 years). We partner with local businesses and industries to create internship opportunities, conduct sector-specific skill training programs, and organize job fairs. The program includes resume building workshops, interview preparation sessions, and entrepreneurship training. Our alumni network provides ongoing mentorship and networking opportunities to support participants in their career journeys.",
      keyFeatures: [
        "Industry-aligned skill training programs",
        "Internship and apprenticeship opportunities",
        "Career counseling and placement support",
        "Entrepreneurship development workshops",
        "Sector-specific certification courses",
        "Alumni network and mentorship"
      ],
      highlights: [
        { label: "Placements", value: "200+ Youth Employed", icon: Briefcase },
        { label: "Partners", value: "30+ Corporate Allies", icon: Heart },
        { label: "Sectors", value: "5+ Industry Verticals", icon: Target },
        { label: "Success", value: "75% Placement Rate", icon: TrendingUp }
      ],
      icon: Briefcase,
      color: "from-amber-600 to-amber-800",
      accentColor: "text-amber-600",
      bgGradient: "from-amber-50 to-yellow-50",
      images: [
        { url: "/461199582_27663761526556299_5099480767436467893_n.jpg" },
        { url: "/PXL_20231217_122734770.NIGHT.jpg" },
        { url: "/505785264_1133530795469242_3528162867965802800_n.jpg" },
        { url: "/Screenshot_20250617-202601.png" }
      ]
    }
  ];

  const healthcareProjects = [
    {
      id: 6,
      title: "Project Aarogya",
      subtitle: "Community Health Initiative",
      tagline: "Healthy Communities, Stronger Nation",
      description: "Addressing basic healthcare needs through health camps, hygiene awareness, and medical support for underserved communities.",
      fullDescription: "Project Aarogya brings essential healthcare services to doorsteps of underserved communities through mobile health units and community health camps. Our program focuses on preventive healthcare, maternal and child health, hygiene education, and basic diagnostic services. We collaborate with local medical professionals to provide free consultations, distribute essential medicines, and conduct health awareness sessions. Special initiatives include menstrual hygiene programs, vaccination drives, and nutrition counseling to address specific community health needs.",
      keyFeatures: [
        "Mobile health clinics and diagnostic camps",
        "Preventive healthcare awareness programs",
        "Maternal and child health initiatives",
        "Hygiene and sanitation education",
        "Nutrition counseling and supplements",
        "Community health worker training"
      ],
      highlights: [
        { label: "Beneficiaries", value: "5000+ Served Annually", icon: Users },
        { label: "Health Camps", value: "50+ Conducted Yearly", icon: HeartPulse },
        { label: "Villages", value: "25+ Communities Reached", icon: MapPin },
        { label: "Focus Areas", value: "Women & Child Health", icon: Heart }
      ],
      icon: HeartPulse,
      color: "from-red-600 to-red-800",
      accentColor: "text-red-600",
      bgGradient: "from-red-50 to-pink-50",
      images: [
        { url: "/IMG-20240818-WA0005 (1).jpg" },
        { url: "/IMG-20240818-WA0004.jpg" },
        { url: "/IMG-20240818-WA0003.jpg" }
       
      ]
    }
  ];

  const artsCultureProjects = [
    {
      id: 7,
      title: "Project Aalaap",
      subtitle: "Arts & Cultural Preservation",
      tagline: "Celebrating India's Cultural Heritage",
      description: "Promoting Indian arts and culture through events, workshops, and talent showcases to encourage artistic expression.",
      fullDescription: "Project Aalaap works to preserve and promote India's rich cultural heritage through various artistic initiatives. We organize traditional art and craft workshops, music and dance classes, storytelling sessions, and cultural festivals. The program identifies and nurtures young talent from rural and urban underserved communities, providing them platforms to showcase their skills. Our initiatives also focus on reviving dying art forms by connecting master artisans with young learners through apprenticeship programs.",
      keyFeatures: [
        "Traditional art and craft workshops",
        "Music and dance training programs",
        "Cultural festivals and exhibitions",
        "Artisan support and market linkages",
        "Inter-generational knowledge transfer",
        "Digital documentation of heritage"
      ],
      highlights: [
        { label: "Art Forms", value: "15+ Preserved", icon: Music },
        { label: "Artisans", value: "100+ Supported", icon: Users },
        { label: "Events", value: "20+ Annual Showcases", icon: Calendar },
        { label: "Participants", value: "500+ Engaged Yearly", icon: TrendingUp }
      ],
      icon: Music,
      color: "from-indigo-600 to-indigo-800",
      accentColor: "text-indigo-600",
      bgGradient: "from-indigo-50 to-blue-50",
      images: [
        { url: "/IMG-20240623-WA0006.jpg" },
        { url: "/IMG-20240623-WA0007.jpg" },
        { url: "/IMG-20240818-WA0008.jpg" },
        { url: "/IMG-20240818-WA0009.jpg" }
      ]
    }
  ];

  // Initialize slide states
//   useEffect(() => {
//     const initialSlides = {};
//     [
//       ...educationalProjects,
//       ...skillsDevelopmentProjects,
//       ...personalityDevelopmentProjects,
//       ...healthcareProjects,
//       ...artsCultureProjects
//     ].forEach(project => {
//       initialSlides[project.id] = 0;
//     });
//     setCurrentSlides(initialSlides);
//   }, []);

//   // Auto-advance slides
//   useEffect(() => {
//     const intervals = {};
//     [
//       ...educationalProjects,
//       ...skillsDevelopmentProjects,
//       ...personalityDevelopmentProjects,
//       ...healthcareProjects,
//       ...artsCultureProjects
//     ].forEach(project => {
//       intervals[project.id] = setInterval(() => {
//         setCurrentSlides(prev => ({
//           ...prev,
//           [project.id]: (prev[project.id] + 1) % project.images.length
//         }));
//       }, 3000);
//     });

//     return () => {
//       Object.values(intervals).forEach(interval => clearInterval(interval));
//     };
//   }, [educationalProjects, skillsDevelopmentProjects, personalityDevelopmentProjects, healthcareProjects, artsCultureProjects]);

//   const goToSlide = (projectId, slideIndex) => {
//     setCurrentSlides(prev => ({
//       ...prev,
//       [projectId]: slideIndex
//     }));
//   };

//   const ImageCarousel = ({ project }) => {
//     const currentSlide = currentSlides[project.id] || 0;
    
//     return (
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
//         <div 
//           className="flex transition-transform duration-700 ease-in-out h-64 sm:h-80 md:h-96"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {project.images.map((image, index) => (
//             <div key={index} className="w-full h-full flex-shrink-0 relative bg-gray-200 overflow-hidden">
//               <img 
//                 src={image.url} 
//                 alt={`${project.title} - ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//             </div>
//           ))}
//         </div>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
//           {project.images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(project.id, index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide 
//                   ? 'bg-white scale-125 shadow-lg' 
//                   : 'bg-white/60 hover:bg-white/80 hover:scale-110'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const ProjectSection = ({ project, index }) => {
//     const IconComponent = project.icon;
//     const isEven = index % 2 === 0;
    
//     return (
//       <section className={`py-12 bg-gradient-to-br ${project.bgGradient}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
            
//             {/* Content Section */}
//             <div className={`space-y-6 md:space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
//               <div className="space-y-4 md:space-y-6">
//                 <div className="flex items-center space-x-3 sm:space-x-4">
//                   <div className={`bg-gradient-to-r ${project.color} p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg`}>
//                     <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">{project.title}</h2>
//                     <p className="text-lg sm:text-xl text-gray-600 font-medium">{project.subtitle}</p>
//                   </div>
//                 </div>
                
//                 <div className={`border-l-4 ${project.accentColor} pl-4 sm:pl-6`}>
//                   <p className={`text-2xl sm:text-2xl font-bold ${project.accentColor} mb-1 sm:mb-2`}>{project.tagline}</p>
//                   <p className="text-lg sm:text-lg text-gray-700 leading-relaxed">{project.description}</p>
//                 </div>
//               </div>

//               <div className="prose prose-sm sm:prose-lg max-w-none">
//                 <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
//               </div>

//               {/* Key Features */}
//               <div className="space-y-3 sm:space-y-4">
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
//                   <Star className={`w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 ${project.accentColor}`} />
//                   Key Features
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
//                   {project.keyFeatures.map((feature, idx) => (
//                     <div key={idx} className="flex items-start bg-white/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-white/50">
//                       <ChevronRight className={`w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 ${project.accentColor} mt-0.5 flex-shrink-0`} />
//                       <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Highlights */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                 {project.highlights.map((highlight, idx) => {
//                   const HighlightIcon = highlight.icon;
//                   return (
//                     <div key={idx} className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-white/50">
//                       <div className="flex items-center mb-2 sm:mb-3">
//                         <HighlightIcon className={`w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 ${project.accentColor}`} />
//                         <span className="text-xs sm:text-sm font-bold text-gray-700">{highlight.label}</span>
//                       </div>
//                       <p className="text-xs sm:text-sm text-gray-600 font-semibold">{highlight.value}</p>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* CTA Button */}
//               <Link to='/get-involved/contact'>
//                 <button className={`bg-gradient-to-r ${project.color} mt-6 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
//                   Learn More & Get Involved
//                 </button>
//               </Link>
//             </div>

//             {/* Image Carousel Section */}
//             <div className={`mt-8 lg:mt-0 ${!isEven ? 'lg:col-start-1' : ''}`}>
//               <ImageCarousel project={project} />
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   const ProjectCategorySection = ({ title, description, projects }) => {
//     return (
//       <div className="space-y-0">
//         <div className="text-center py-12 sm:py-14 bg-white">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">{title}</h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
//             {description}
//           </p>
//         </div>
        
//         {projects.map((project, index) => (
//           <ProjectSection key={project.id} project={project} index={index} />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Custom CSS */}
//       <style jsx>{`
//         .from-primary { background: linear-gradient(135deg, #FF5722 0%, #E64A19 100%); }
//         .from-primary-dark { background: linear-gradient(135deg, #E64A19 0%, #BF360C 100%); }
//         .from-secondary { background: linear-gradient(135deg, #00695C 0%, #004D40 100%); }
//         .from-secondary-dark { background: linear-gradient(135deg, #004D40 0%, #00251A 100%); }
//         .from-blue-600 { background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); }
//         .from-blue-800 { background: linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%); }
//         .from-purple-600 { background: linear-gradient(135deg, #9333EA 0%, #7E22CE 100%); }
//         .from-purple-800 { background: linear-gradient(135deg, #7E22CE 0%, #6B21A8 100%); }
//         .from-amber-600 { background: linear-gradient(135deg, #D97706 0%, #B45309 100%); }
//         .from-amber-800 { background: linear-gradient(135deg, #B45309 0%, #92400E 100%); }
//         .from-red-600 { background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%); }
//         .from-red-800 { background: linear-gradient(135deg, #B91C1C 0%, #991B1B 100%); }
//         .from-indigo-600 { background: linear-gradient(135deg, #4F46E5 0%, #4338CA 100%); }
//         .from-indigo-800 { background: linear-gradient(135deg, #4338CA 0%, #3730A3 100%); }
//         .text-primary { color: #FF5722; }
//         .text-secondary { color: #00695C; }
//         .text-blue-600 { color: #2563EB; }
//         .text-purple-600 { color: #9333EA; }
//         .text-amber-600 { color: #D97706; }
//         .text-red-600 { color: #DC2626; }
//         .text-indigo-600 { color: #4F46E5; }
//       `}</style>

//       <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="/images/logo/istockphoto-593332654-612x612.webp"
//             alt="Children Education Background"
//             className="w-full h-full object-cover opacity-50"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-75"></div>
//         </div>

//         <div className="relative z-20 text-center space-y-6 sm:space-y-8 md:space-y-10 px-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl">Our <span className='text-orange-200'>Impactful Projects</span></h1>
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
//             Transforming lives through comprehensive interventions in education, skill development, healthcare, and cultural preservation. 
//             Discover our initiatives creating sustainable change across communities.
//           </p>

//           <div className="flex flex-row items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
//             <div className="text-center min-w-[100px]">
//               <div className="text-2xl sm:text-3xl md:text-4xl font-bold">5,000+</div>
//               <div className="text-white/90 text-xs sm:text-sm md:text-base">Lives Impacted</div>
//             </div>

//             <div className="w-px h-8 sm:h-10 md:h-14 bg-white/30"></div>

//             <div className="text-center min-w-[100px]">
//               <div className="text-2xl sm:text-3xl md:text-4xl font-bold">7</div>
//               <div className="text-white/90 text-xs sm:text-sm md:text-base">Flagship Projects</div>
//             </div>

//             <div className="w-px h-8 sm:h-10 md:h-14 bg-white/30"></div>

//             <div className="text-center min-w-[100px]">
//               <div className="text-2xl sm:text-3xl md:text-4xl font-bold">10+</div>
//               <div className="text-white/90 text-xs sm:text-sm md:text-base">Communities Served</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-orange-50 to-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 sm:space-y-8">
//             <div className="bg-gradient-to-r from-primary to-accent-gold p-4 sm:p-5 md:p-6 rounded-full w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto flex items-center justify-center shadow-xl">
//               <Target className="w-8 sm:w-10 md:w-12 text-white" />
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Holistic Approach</h2>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed">
//               Ashwamedh Foundation adopts a 360-degree approach to community development, addressing education, skills, health, 
//               and cultural needs. Our projects are designed to complement each other, creating a comprehensive ecosystem for 
//               sustainable empowerment and social transformation.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Educational Projects */}
//       <ProjectCategorySection
//         title="Educational Initiatives"
//         description="Building strong academic foundations and creating equitable learning opportunities"
//         projects={educationalProjects}
//       />

//       {/* Skills Development Projects */}
//       <ProjectCategorySection
//         title="Skills Development Programs"
//         description="Equipping youth with essential skills for academic and professional success"
//         projects={skillsDevelopmentProjects}
//       />

//       {/* Personality Development Projects */}
//       <ProjectCategorySection
//         title="Personality & HRD Initiatives"
//         description="Developing confident individuals ready to face personal and professional challenges"
//         projects={personalityDevelopmentProjects}
//       />

//       {/* Healthcare Projects */}
//       <ProjectCategorySection
//         title="Healthcare Programs"
//         description="Ensuring community wellbeing through preventive and curative healthcare"
//         projects={healthcareProjects}
//       />

//       {/* Arts & Culture Projects */}
//       <ProjectCategorySection
//         title="Arts & Cultural Initiatives"
//         description="Preserving heritage while fostering creative expression and talent"
//         projects={artsCultureProjects}
//       />

//       {/* Call to Action */}
//       <div className="relative py-12 sm:py-14 md:py-16 text-white overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/images/logo/gettyimages-535555239-612x612.jpg"
//             alt="Join Our Mission"
//             className="w-full h-full object-cover opacity-70"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
//           <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-lg">Be Part of Our Journey</h2>
//           <p className="text-lg sm:text-xl text-white/95 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
//             Your support can help us expand our reach and create more impact. Whether through volunteering, 
//             partnerships, or donations, you can contribute to transforming lives and communities.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
//             <Link to='/get-involved/volunteer'>
//               <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl">
//                 Volunteer With Us
//               </button>
//             </Link>
            
//             <Link to='/get-involved/donate'>
//               <button className="bg-transparent border-2 border-white text-white hover:bg-orange-500 hover:text-secondary px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl">
//                 Support Our Cause
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;

 useEffect(() => {
    const initialSlides = {};
    [
      ...educationalProjects,
      ...skillsDevelopmentProjects,
      ...personalityDevelopmentProjects,
      ...healthcareProjects,
      ...artsCultureProjects
    ].forEach(project => {
      initialSlides[project.id] = 0;
    });
    setCurrentSlides(initialSlides);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const intervals = {};
    [
      ...educationalProjects,
      ...skillsDevelopmentProjects,
      ...personalityDevelopmentProjects,
      ...healthcareProjects,
      ...artsCultureProjects
    ].forEach(project => {
      intervals[project.id] = setInterval(() => {
        setCurrentSlides(prev => ({
          ...prev,
          [project.id]: (prev[project.id] + 1) % project.images.length
        }));
      }, 5000); // Increased interval for better mobile experience
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [educationalProjects, skillsDevelopmentProjects, personalityDevelopmentProjects, healthcareProjects, artsCultureProjects]);

  const goToSlide = (projectId, slideIndex) => {
    setCurrentSlides(prev => ({
      ...prev,
      [projectId]: slideIndex
    }));
  };

  const ImageCarousel = ({ project }) => {
    const currentSlide = currentSlides[project.id] || 0;
    
    return (
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl group">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-48 sm:h-64 md:h-80 lg:h-96"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {project.images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative bg-gray-200 overflow-hidden">
              <img 
                src={image.url} 
                alt={`${project.title} - ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy" // Added lazy loading for better performance
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Dots Indicator - Made larger for mobile */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(project.id, index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-md sm:shadow-lg' 
                  : 'bg-white/60 hover:bg-white/80 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const ProjectSection = ({ project, index }) => {
    const IconComponent = project.icon;
    const isEven = index % 2 === 0;
    
    return (
      <section className={`py-8 sm:py-12 bg-gradient-to-br ${project.bgGradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
            
            {/* Content Section - Reordered for mobile */}
            <div className={`space-y-4 sm:space-y-6 md:space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className={`bg-gradient-to-r ${project.color} p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg`}>
                    <IconComponent className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">{project.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">{project.subtitle}</p>
                  </div>
                </div>
                
                <div className={`border-l-4 ${project.accentColor} pl-3 sm:pl-4 md:pl-6`}>
                  <p className={`text-xl sm:text-2xl font-bold ${project.accentColor} mb-1 sm:mb-2`}>{project.tagline}</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="prose prose-sm sm:prose max-w-none">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Key Features - Adjusted for mobile */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 flex items-center">
                  <Star className={`w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 mr-2 ${project.accentColor}`} />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start bg-white/70 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-sm border border-white/50">
                      <ChevronRight className={`w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-2 ${project.accentColor} mt-0.5 flex-shrink-0`} />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Highlights - Adjusted spacing for mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {project.highlights.map((highlight, idx) => {
                  const HighlightIcon = highlight.icon;
                  return (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm p-2 sm:p-3 md:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-white/50">
                      <div className="flex items-center mb-1 sm:mb-2 md:mb-3">
                        <HighlightIcon className={`w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2 md:mr-3 ${project.accentColor}`} />
                        <span className="text-xs sm:text-sm font-bold text-gray-700">{highlight.label}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-semibold">{highlight.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button - Adjusted size for mobile */}
              <Link to='/get-involved/contact' className="block mt-4 sm:mt-6">
                <button className={`bg-gradient-to-r ${project.color} w-full sm:w-auto text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1`}>
                  Learn More & Get Involved
                </button>
              </Link>
            </div>

            {/* Image Carousel Section - Always appears after content on mobile */}
            <div className={`mt-4 sm:mt-6 lg:mt-0 ${!isEven ? 'lg:col-start-1' : ''}`}>
              <ImageCarousel project={project} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ProjectCategorySection = ({ title, description, projects }) => {
    return (
      <div className="space-y-0">
        <div className="text-center py-8 sm:py-10 md:py-12 bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            {description}
          </p>
        </div>
        
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS */}
      <style jsx>{`
        .from-primary { background: linear-gradient(135deg, #FF5722 0%, #E64A19 100%); }
        .from-primary-dark { background: linear-gradient(135deg, #E64A19 0%, #BF360C 100%); }
        .from-secondary { background: linear-gradient(135deg, #00695C 0%, #004D40 100%); }
        .from-secondary-dark { background: linear-gradient(135deg, #004D40 0%, #00251A 100%); }
        .from-blue-600 { background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); }
        .from-blue-800 { background: linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%); }
        .from-purple-600 { background: linear-gradient(135deg, #9333EA 0%, #7E22CE 100%); }
        .from-purple-800 { background: linear-gradient(135deg, #7E22CE 0%, #6B21A8 100%); }
        .from-amber-600 { background: linear-gradient(135deg, #D97706 0%, #B45309 100%); }
        .from-amber-800 { background: linear-gradient(135deg, #B45309 0%, #92400E 100%); }
        .from-red-600 { background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%); }
        .from-red-800 { background: linear-gradient(135deg, #B91C1C 0%, #991B1B 100%); }
        .from-indigo-600 { background: linear-gradient(135deg, #4F46E5 0%, #4338CA 100%); }
        .from-indigo-800 { background: linear-gradient(135deg, #4338CA 0%, #3730A3 100%); }
        .text-primary { color: #FF5722; }
        .text-secondary { color: #00695C; }
        .text-blue-600 { color: #2563EB; }
        .text-purple-600 { color: #9333EA; }
        .text-amber-600 { color: #D97706; }
        .text-red-600 { color: #DC2626; }
        .text-indigo-600 { color: #4F46E5; }
      `}</style>

      {/* Hero Section - Adjusted for mobile */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/logo/istockphoto-593332654-612x612.webp"
            alt="Children Education Background"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-75"></div>
        </div>

        <div className="relative z-20 text-center space-y-4 sm:space-y-6 md:space-y-8 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md">
            Our <span className='text-orange-200'>Impactful Projects</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
            Transforming lives through comprehensive interventions in education, skill development, healthcare, and cultural preservation. 
            Discover our initiatives creating sustainable change across communities.
          </p>

          <div className="flex flex-row items-center justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6">
            <div className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">10000+</div>
              <div className="text-white/90 text-xs sm:text-sm">Lives Impacted</div>
            </div>

            <div className="w-px h-6 sm:h-8 md:h-10 bg-white/30"></div>

            <div className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">7+</div>
              <div className="text-white/90 text-xs sm:text-sm">Flagship Projects</div>
            </div>

            <div className="w-px h-6 sm:h-8 md:h-10 bg-white/30"></div>

            <div className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">10+</div>
              <div className="text-white/90 text-xs sm:text-sm">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Adjusted for mobile */}
      <div className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-orange-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-primary to-accent-gold p-3 sm:p-4 md:p-5 rounded-full w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mx-auto flex items-center justify-center shadow-lg">
              <Target className="w-6 sm:w-8 md:w-10 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Our Holistic Approach</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed px-2">
              Ashwamedh Foundation adopts a 360-degree approach to community development, addressing education, skills, health, 
              and cultural needs. Our projects are designed to complement each other, creating a comprehensive ecosystem for 
              sustainable empowerment and social transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Educational Projects */}
      <ProjectCategorySection
        title="Educational Initiatives"
        description="Building strong academic foundations and creating equitable learning opportunities"
        projects={educationalProjects}
      />

      {/* Skills Development Projects */}
      <ProjectCategorySection
        title="Skills Development Programs"
        description="Equipping youth with essential skills for academic and professional success"
        projects={skillsDevelopmentProjects}
      />

      {/* Personality Development Projects */}
      <ProjectCategorySection
        title="Personality & HRD Initiatives"
        description="Developing confident individuals ready to face personal and professional challenges"
        projects={personalityDevelopmentProjects}
      />

      {/* Healthcare Projects */}
      <ProjectCategorySection
        title="Healthcare Programs"
        description="Ensuring community wellbeing through preventive and curative healthcare"
        projects={healthcareProjects}
      />

      {/* Arts & Culture Projects */}
      <ProjectCategorySection
        title="Arts & Cultural Initiatives"
        description="Preserving heritage while fostering creative expression and talent"
        projects={artsCultureProjects}
      />

      {/* Call to Action - Adjusted for mobile */}
      <div className="relative py-10 sm:py-12 md:py-14 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/logo/gettyimages-535555239-612x612.jpg"
            alt="Join Our Mission"
            className="w-full h-full object-cover opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-md">Be Part of Our Journey</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
            Your support can help us expand our reach and create more impact. Whether through volunteering, 
            partnerships, or donations, you can contribute to transforming lives and communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center pt-4 sm:pt-6">
            <Link to='/get-involved/volunteer' className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg">
                Volunteer With Us
              </button>
            </Link>
            
            <Link to='/get-involved/donate' className="w-full sm:w-auto">
              <button className="w-full bg-transparent border-2 border-white text-white hover:bg-orange-500 hover:text-secondary px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg">
                Support Our Cause
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;