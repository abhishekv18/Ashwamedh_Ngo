// import React, { useState, useEffect } from 'react';
// import { BookOpen, Users, Target, Award, Lightbulb, Briefcase, Heart, Star, ChevronRight, Calendar, MapPin, TrendingUp, ChevronLeft } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProjectAnkur = () => {
//   const [currentSlides, setCurrentSlides] = useState({});
// const navigate=useNavigate();
//   const user = useSelector((state) => state.auth.user);
//     useEffect(() => {
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
//         { url: "/public/ankur/WhatsApp Image 2025-06-29 at 1.56.51 PM.jpeg",  },
//         { url: "/public/ankur/WhatsApp Image 2025-06-29 at 1.57.31 PM.jpeg",  },
//         { url: "/public/ankur/WhatsApp Image 2025-06-29 at 1.57.45 PM.jpeg",  },
//         { url: "/public/ankur/WhatsApp Image 2025-06-29 at 1.58.07 PM.jpeg",  }
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
//         { url: "/public/aakar/WhatsApp Image 2025-06-29 at 6.43.56 PM (1).jpeg" },
//         { url: "/public/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM (1).jpeg", },
//         { url: "/public/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM (1).jpeg",  },
//         { url: "/public/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM.jpeg",  }
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
//       { url: "/public/images/projects/7-7 (1).jpg", alt: "Digital marketing training facility" },
//       { url: "/public/images/projects/5-5 (1).jpg", alt: "Computer hardware workshop setup" },
//       { url: "/public/images/projects/8-8 (1).jpg", alt: "Fashion design and tailoring unit" },
//       { url: "/public/images/projects/3-3.jpg", alt: "Modern skills development center" }
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
     
// <div 
//   className="flex transition-transform duration-700 ease-in-out h-96"
//   style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// >
//   {project.images.map((image, index) => (
//     <div key={index} className="w-full h-full flex-shrink-0 relative bg-gray-200 overflow-hidden">
      
//       {/* Background Image */}
//       <img 
//         src={image.url} 
//         // alt={image.alt || `Slide ${index + 1}`} 
//         className="w-full h-full object-cover"
//       />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

     
//     </div>
//   ))}
// </div>

      

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
//         <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
//           <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
            
//             {/* Content Section */}
//             <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className={`bg-gradient-to-r ${project.color} p-4 rounded-2xl shadow-lg`}>
//                     <IconComponent className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-4xl font-bold text-gray-800">{project.title}</h2>
//                     <p className="text-xl text-gray-600 font-medium">{project.subtitle}</p>
//                   </div>
//                 </div>
                
//                 <div className={`border-l-4 border-primary pl-6`}>
//                   <p className={`text-2xl font-bold ${project.accentColor} mb-2`}>{project.tagline}</p>
//                   <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
//                 </div>
//               </div>

//               <div className="prose prose-lg max-w-none">
//                 <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
//               </div>

//               {/* Key Features */}
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-bold text-gray-800 flex items-center">
//                   <Star className={`w-6 h-6 mr-3 ${project.accentColor}`} />
//                   {project.plannedPrograms ? 'Planned Programs' : 'Key Features'}
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   {(project.plannedPrograms || project.keyFeatures).map((feature, idx) => (
//                     <div key={idx} className="flex items-start bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
//                       <ChevronRight className={`w-5 h-5 mr-3 ${project.accentColor} mt-0.5 flex-shrink-0`} />
//                       <span className="text-gray-700 font-medium">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Highlights */}
//               <div className="grid grid-cols-2 gap-4">
//                 {project.highlights.map((highlight, idx) => {
//                   const HighlightIcon = highlight.icon;
//                   return (
//                     <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
//                       <div className="flex items-center mb-3">
//                         <HighlightIcon className={`w-5 h-5 mr-3 ${project.accentColor}`} />
//                         <span className="text-sm font-bold text-gray-700">{highlight.label}</span>
//                       </div>
//                       <p className="text-sm text-gray-600 font-semibold">{highlight.value}</p>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* CTA Button */}
//               <button className={`bg-gradient-to-r ${project.color} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
//                 Learn More & Get Involved
//               </button>
//             </div>

//             {/* Image Carousel Section */}
//             <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
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
//       <section className={`py-8 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden`}>
//         {/* Background decoration */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           {/* Section Header */}
//           <div className="text-center mb-14">
//             <div className="flex items-center justify-center mb-6">
//               <div className={`bg-gradient-to-r ${project.color} p-6 rounded-3xl shadow-xl`}>
//                 <IconComponent className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50 mb-6">
//               <Calendar className="w-5 h-5 mr-3 text-gray-600" />
//               <span className="font-bold text-gray-700">Coming Soon in 2025</span>
//             </div>
//             <h2 className="text-5xl font-bold text-gray-800 mb-4">{project.title}</h2>
//             <p className="text-2xl text-gray-600 font-medium mb-6">{project.subtitle}</p>
//             <div className={`border-l-4 border-accent-gold pl-6 max-w-3xl mx-auto`}>
//               <p className={`text-3xl font-bold ${project.accentColor} mb-4`}>{project.tagline}</p>
//               <p className="text-xl text-gray-700 leading-relaxed">{project.description}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             {/* Content */}
//             <div className="space-y-8">
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-gray-600 leading-relaxed text-lg">{project.fullDescription}</p>
//               </div>

//               {/* Planned Programs */}
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-gray-800 flex items-center">
//                   <Lightbulb className={`w-6 h-6 mr-3 ${project.accentColor}`} />
//                   Planned Training Programs
//                 </h3>
//                 <div className="space-y-3">
//                   {project.plannedPrograms.map((program, idx) => (
//                     <div key={idx} className="flex items-start bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/50">
//                       <div className={`bg-gradient-to-r ${project.color} p-2 rounded-lg mr-4 flex-shrink-0`}>
//                         <span className="text-white font-bold text-sm">{String(idx + 1).padStart(2, '0')}</span>
//                       </div>
//                       <span className="text-gray-700 font-semibold text-lg">{program}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Highlights */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {project.highlights.map((highlight, idx) => {
//                   const HighlightIcon = highlight.icon;
//                   return (
//                     <div key={idx} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/50">
//                       <div className="flex items-center mb-4">
//                         <HighlightIcon className={`w-6 h-6 mr-3 ${project.accentColor}`} />
//                         <span className="font-bold text-gray-700">{highlight.label}</span>
//                       </div>
//                       <p className="text-gray-600 font-semibold text-lg">{highlight.value}</p>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* CTA */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className={`bg-gradient-to-r ${project.color} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
//                   Get Updates
//                 </button>
//                 <button className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1">
//                   Partner With Us
//                 </button>
//               </div>
//             </div>

//             {/* Image Carousel */}
//             <div className="lg:sticky lg:top-8 mt-64">
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

//       <section className="relative py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
//   {/* Background Image Layer */}
//   <div className="absolute inset-0 z-0">
//     <img 
//       src="/public/images/logo/istockphoto-593332654-612x612.webp"
//       alt="Children Education Background"
//       className="w-full h-full object-cover opacity-50"
//     />
//     <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-75"></div>
//   </div>

//   <div className="relative z-20 text-center space-y-10 px-4">
//     <h1 className="text-4xl md:text-6xl font-bold drop-shadow-2xl">Our <span className='text-orange-200'>Projects</span></h1>
//     <p className="text-lg md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium">
//       Transforming lives through education, skill development, and holistic personality growth. 
//       Discover our impactful initiatives creating lasting change in communities.
//     </p>

//     {/* Stats Section */}
//     <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
//       <div className="text-center">
//         <div className="text-4xl font-bold">500+</div>
//         <div className="text-white/90">Students Impacted</div>
//       </div>
//       <div className="w-px h-10 md:h-16 bg-white/30"></div>
//       <div className="text-center">
//         <div className="text-4xl font-bold">4</div>
//         <div className="text-white/90">Active Projects</div>
//       </div>
//       <div className="w-px h-10 md:h-16 bg-white/30"></div>
//       <div className="text-center">
//         <div className="text-4xl font-bold">2026</div>
//         <div className="text-white/90">Future Goals</div>
//       </div>
//     </div>
//   </div>

//   {/* Bottom Fade to White */}
//   <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-20"></div>
// </section>

//       {/* Mission Statement */}
//       <div className="py-20 bg-gradient-to-br from-orange-50 to-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-8">
//             <div className="bg-gradient-to-r from-primary to-accent-gold p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-xl">
//               <Target className="w-12 h-12 text-white" />
//             </div>
//             <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
//             <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
//               Ashwamedh Foundation believes education is the cornerstone of development for underprivileged children. 
//               Our comprehensive projects focus on building strong educational foundations and developing well-rounded 
//               personalities that empower children to contribute meaningfully to society.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Current Projects */}
//       <div className="space-y-0">
//         <div className="text-center py-16 bg-white">
//           <h2 className="text-5xl font-bold text-gray-800 mb-6">Current Projects</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Active initiatives making measurable impact in students' lives and communities
//           </p>
//         </div>
        
//         {currentProjects.map((project, index) => (
//           <ProjectSection key={project.id} project={project} index={index} />
//         ))}
//       </div>

//       {/* Future Projects */}
//       <div className="space-y-0">
//         <div className="text-center py-16 bg-white">
//           <h2 className="text-5xl font-bold text-gray-800 mb-6">Future Projects</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Innovative upcoming initiatives expanding our reach and community impact
//           </p>
//         </div>
        
//         <FutureProjectSection  project={futureProject} />
//       </div>
//       <div className="relative py-20 text-white overflow-hidden">
//   {/* Background Image */}
//   <div className="absolute inset-0 z-0">
//     <img
//       src="/public/images/logo/gettyimages-535555239-612x612.jpg" // Replace with your image path
//       alt="Join Our Mission"
//       className="w-full h-full object-cover opacity-70"
//     />
//     <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
//   </div>

//   {/* Main Content */}
//   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
//     <h2 className="text-4xl font-bold drop-shadow-lg">Join Our Mission</h2>
//     <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium">
//       Together, we can create transformative change and empower the next generation. 
//       Be part of our journey to build a better tomorrow.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
//       <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 text-white px-10 py-3 rounded-xl font-bold text-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
//         Volunteer With Us
//       </button>
//       <button className="bg-transparent border-2 border-white text-white  hover:bg-orange-500 hover:text-secondary px-10 py-3 rounded-xl font-bold text-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
//         Support Our Cause
//       </button>
//     </div>
//   </div>
// </div>
 
//     </div>
//   );
// };

// export default ProjectAnkur;




import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Target, Award, Lightbulb, Briefcase, Heart, Star, ChevronRight, Calendar, MapPin, TrendingUp, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProjectAnkur = () => {
  const [currentSlides, setCurrentSlides] = useState({});
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  
  useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  const currentProjects = [
    {
      id: 1,
      title: "Project Ankur",
      subtitle: "Foundation Building Program",
      tagline: "Catch Them Young - Build Strong Foundations",
      description: "Empowering young minds through early intervention and strong foundational education that shapes their academic journey.",
      fullDescription: "Project Ankur embodies the 'catch them young' philosophy, focusing on building robust educational foundations for students before they reach 8th standard. Our comprehensive approach addresses the critical gap in basic literacy and numeracy skills that often goes unnoticed in traditional educational systems. Through interactive learning methods, hands-on activities, and personalized attention, we ensure every child develops the fundamental skills necessary for academic success.",
      keyFeatures: [
        "Reading and Writing proficiency in English and regional languages",
        "Mathematical concepts through interactive learning methods",
        "Science fundamentals with hands-on experiments",
        "Critical thinking and problem-solving skills development",
        "Creative arts integration for holistic development",
        "Regular assessment and progress tracking"
      ],
      highlights: [
        { label: "Target Audience", value: "Students up to 7th Standard", icon: Users },
        { label: "Program Duration", value: "Ongoing Program", icon: Calendar },
        { label: "Annual Impact", value: "500+ Students Benefited", icon: TrendingUp },
        { label: "Partnerships", value: "Schools, NGOs & Local Bodies", icon: Heart }
      ],
      icon: BookOpen,
      color: "from-primary to-primary-dark",
      accentColor: "text-primary",
      bgGradient: "from-orange-50 to-red-50",
      images: [
        { url: "/public/ankur/WhatsApp Image 2025-06-29 at 1.56.51 PM.jpeg" },
        { url: "/public/ankur/WhatsApp Image 2025-06-29 at 1.57.31 PM.jpeg" },
        { url: "/public/ankur/WhatsApp Image 2025-06-29 at 1.57.45 PM.jpeg" },
        { url: "/public/ankur/WhatsApp Image 2025-06-29 at 1.58.07 PM.jpeg" }
      ]
    },
    {
      id: 2,
      title: "Project Aakaar",
      subtitle: "Personality Development Course",
      tagline: "Shaping Tomorrow's Leaders Today",
      description: "Transforming students into confident, ethical, and capable individuals through comprehensive personality development programs.",
      fullDescription: "Project Aakaar is our flagship personality development initiative designed to nurture well-rounded individuals who are ready to face the challenges of tomorrow. This certified course goes beyond academic learning to develop communication skills, leadership qualities, emotional intelligence, and moral values. Our holistic approach ensures that students not only excel academically but also develop the personality traits necessary for success in life.",
      keyFeatures: [
        "Value Education and Moral Development programs",
        "Advanced Communication Skills Training workshops",
        "Time Management and Productivity enhancement techniques",
        "Stress Management and Mental Wellness sessions",
        "Yoga and Physical Wellness programs",
        "Leadership and Team Building skill development"
      ],
      highlights: [
        { label: "Target Audience", value: "Students 8th to 10th Standard", icon: Users },
        { label: "Course Duration", value: "6-month Certificate Program", icon: Calendar },
        { label: "Annual Graduates", value: "300+ Certified Students", icon: Award },
        { label: "Certification", value: "Recognized Certificate Awarded", icon: Star }
      ],
      icon: Award,
      color: "from-secondary to-secondary-dark",
      accentColor: "text-secondary",
      bgGradient: "from-teal-50 to-green-50",
      images: [
        { url: "/public/aakar/WhatsApp Image 2025-06-29 at 6.43.56 PM (1).jpeg" },
        { url: "/public/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM (1).jpeg" },
        { url: "/public/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM (1).jpeg" },
        { url: "/public/aakar/WhatsApp Image 2025-06-29 at 6.43.57 PM.jpeg" }
      ]
    }
  ];

  const futureProject = {
    id: 3,
    title: "Skills Development Center",
    subtitle: "Vocational Training Programs",
    tagline: "Bridging Education and Employment",
    description: "Comprehensive vocational training programs designed to equip youth with industry-relevant skills for better employment opportunities.",
    fullDescription: "Our upcoming Skills Development Center recognizes that traditional degrees alone don't guarantee employment in today's competitive market. This initiative will provide hands-on, industry-relevant training programs that directly address the skills gap in various sectors. By partnering with industry leaders and government bodies, we aim to create a pipeline of skilled professionals ready to contribute to India's growing economy.",
    plannedPrograms: [
      "Digital Marketing and E-commerce Management",
      "Computer Hardware and Software Maintenance",
      "Tailoring, Fashion Design and Garment Technology",
      "Electrical and Electronic Equipment Repairs",
      "Food Processing, Packaging and Quality Control",
      "Beauty, Wellness and Healthcare Services"
    ],
    highlights: [
      { label: "Target Audience", value: "Youth aged 16-25 years", icon: Users },
      { label: "Launch Timeline", value: "Coming Soon in 2025", icon: Calendar },
      { label: "Expected Impact", value: "500+ Skilled Professionals", icon: TrendingUp },
      { label: "Industry Partners", value: "Government & Private Sector", icon: Briefcase }
    ],
    icon: Briefcase,
    color: "from-accent-gold to-accent-gold-dark",
    accentColor: "text-accent-gold",
    bgGradient: "from-orange-50 to-white",
    images: [
      { url: "/public/images/projects/7-7 (1).jpg", alt: "Digital marketing training facility" },
      { url: "/public/images/projects/5-5 (1).jpg", alt: "Computer hardware workshop setup" },
      { url: "/public/images/projects/8-8 (1).jpg", alt: "Fashion design and tailoring unit" },
      { url: "/public/images/projects/3-3.jpg", alt: "Modern skills development center" }
    ]
  };

  // Initialize slide states
  useEffect(() => {
    const initialSlides = {};
    [...currentProjects, futureProject].forEach(project => {
      initialSlides[project.id] = 0;
    });
    setCurrentSlides(initialSlides);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const intervals = {};
    [...currentProjects, futureProject].forEach(project => {
      intervals[project.id] = setInterval(() => {
        setCurrentSlides(prev => ({
          ...prev,
          [project.id]: (prev[project.id] + 1) % project.images.length
        }));
      }, 3000);
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [currentProjects, futureProject]);

  const goToSlide = (projectId, slideIndex) => {
    setCurrentSlides(prev => ({
      ...prev,
      [projectId]: slideIndex
    }));
  };

  const ImageCarousel = ({ project }) => {
    const currentSlide = currentSlides[project.id] || 0;
    
    return (
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-64 sm:h-80 md:h-96"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {project.images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative bg-gray-200 overflow-hidden">
              <img 
                src={image.url} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(project.id, index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/60 hover:bg-white/80 hover:scale-110'
              }`}
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
      <section className={`py-12 bg-gradient-to-br ${project.bgGradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
            
            {/* Content Section */}
            <div className={`space-y-6 md:space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className={`bg-gradient-to-r ${project.color} p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg`}>
                    <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">{project.title}</h2>
                    <p className="text-lg sm:text-xl text-gray-600 font-medium">{project.subtitle}</p>
                  </div>
                </div>
                
                <div className={`border-l-4 border-primary pl-4 sm:pl-6`}>
                  <p className={`text-2xl sm:text-2xl font-bold ${project.accentColor} mb-1 sm:mb-2`}>{project.tagline}</p>
                  <p className=" text-lg sm:text-lg text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="prose prose-sm sm:prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                  <Star className={`w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 ${project.accentColor}`} />
                  {project.plannedPrograms ? 'Planned Programs' : 'Key Features'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {(project.plannedPrograms || project.keyFeatures).map((feature, idx) => (
                    <div key={idx} className="flex items-start bg-white/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-white/50">
                      <ChevronRight className={`w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 ${project.accentColor} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.highlights.map((highlight, idx) => {
                  const HighlightIcon = highlight.icon;
                  return (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-white/50">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <HighlightIcon className={`w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 ${project.accentColor}`} />
                        <span className="text-xs sm:text-sm font-bold text-gray-700">{highlight.label}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-semibold">{highlight.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button className={`bg-gradient-to-r ${project.color} text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                Learn More & Get Involved
              </button>
            </div>

            {/* Image Carousel Section */}
            <div className={`mt-8 lg:mt-0 ${!isEven ? 'lg:col-start-1' : ''}`}>
              <ImageCarousel project={project} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const FutureProjectSection = ({ project }) => {
    const IconComponent = project.icon;
    
    return (
      <section className={`py-8 sm:py-12 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden`}>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full -translate-y-32 sm:-translate-y-48 translate-x-32 sm:translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full translate-y-24 sm:translate-y-32 -translate-x-24 sm:-translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className={`bg-gradient-to-r ${project.color} p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl`}>
                <IconComponent className="w-8 sm:w-12 h-8 sm:h-12 text-white" />
              </div>
            </div>
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-white/50 mb-4 sm:mb-6">
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 text-gray-600" />
              <span className="text-sm sm:text-base font-bold text-gray-700">Coming Soon in 2025</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">{project.title}</h2>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-4 sm:mb-6">{project.subtitle}</p>
            {/* <div className={`border-l-4 border-accent-gold pl-4 sm:pl-6 max-w-3xl mx-auto`}>
              <p className={`text-2xl sm:text-3xl font-bold ${project.accentColor} mb-3 sm:mb-4`}>{project.tagline}</p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{project.description}</p>
            </div> */}
            {/* <div className={`border-l-4 border-accent-gold pl-4 sm:pl-6`}>
  <p className={`text-2xl sm:text-3xl font-bold ${project.accentColor} mb-3 sm:mb-4`}>{project.tagline}</p>
  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{project.description}</p>
</div> */}
<div className="border-l-4 border-accent-gold pl-4 sm:pl-6 max-w-3xl">
  <div className="inline-block text-left align-top">
    <div>
      <p className={`text-2xl sm:text-3xl font-bold ${project.accentColor} mb-3 sm:mb-4`}>
        {project.tagline}
      </p>
    </div>
    <div>
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
        {project.description}
      </p>
    </div>
  </div>
</div>



          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="prose prose-sm sm:prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{project.fullDescription}</p>
              </div>

              {/* Planned Programs */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                  <Lightbulb className={`w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 ${project.accentColor}`} />
                  Planned Training Programs
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {project.plannedPrograms.map((program, idx) => (
                    <div key={idx} className="flex items-start bg-white/80 backdrop-blur-sm p-3 sm:p-5 rounded-lg sm:rounded-xl shadow-lg border border-white/50">
                      <div className={`bg-gradient-to-r ${project.color} p-1 sm:p-2 rounded-md sm:rounded-lg mr-3 sm:mr-4 flex-shrink-0`}>
                        <span className="text-white font-bold text-xs sm:text-sm">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-semibold">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
                {project.highlights.map((highlight, idx) => {
                  const HighlightIcon = highlight.icon;
                  return (
                    <div key={idx} className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xl border border-white/50">
                      <div className="flex items-center mb-2 sm:mb-4">
                        <HighlightIcon className={`w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 ${project.accentColor}`} />
                        <span className="text-sm sm:text-base font-bold text-gray-700">{highlight.label}</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 font-semibold">{highlight.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className={`bg-gradient-to-r ${project.color} text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  Get Updates
                </button>
                <button className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1">
                  Partner With Us
                </button>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="lg:sticky lg:top-8 mt-6 sm:mt-32">
              <ImageCarousel project={project} />
            </div>
          </div>
        </div>
      </section>
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
        .from-accent-gold { background: linear-gradient(135deg, #FFC107 0%, #FF8F00 100%); }
        .from-accent-gold-dark { background: linear-gradient(135deg, #FF8F00 0%, #E65100 100%); }
        .text-primary { color: #FF5722; }
        .text-secondary { color: #00695C; }
        .text-accent-gold { color: #FF8F00; }
        .border-primary { border-color: #FF5722; }
        .border-accent-gold { border-color: #FFC107; }
      `}</style>

      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/public/images/logo/istockphoto-593332654-612x612.webp"
            alt="Children Education Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-75"></div>
        </div>

        <div className="relative z-20 text-center space-y-6 sm:space-y-8 md:space-y-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl">Our <span className='text-orange-200'>Projects</span></h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
            Transforming lives through education, skill development, and holistic personality growth. 
            Discover our impactful initiatives creating lasting change in communities.
          </p>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">500+</div>
              <div className="text-white/90 text-sm sm:text-base">Students Impacted</div>
            </div>
            <div className="w-px h-10 sm:h-12 md:h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">4</div>
              <div className="text-white/90 text-sm sm:text-base">Active Projects</div>
            </div>
            <div className="w-px h-10 sm:h-12 md:h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">2026</div>
              <div className="text-white/90 text-sm sm:text-base">Future Goals</div>
            </div>
          </div>
        </div>

        {/* Bottom Fade to White */}
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-20 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* Mission Statement */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-primary to-accent-gold p-4 sm:p-5 md:p-6 rounded-full w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto flex items-center justify-center shadow-xl">
              <Target className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed">
              Ashwamedh Foundation believes education is the cornerstone of development for underprivileged children. 
              Our comprehensive projects focus on building strong educational foundations and developing well-rounded 
              personalities that empower children to contribute meaningfully to society.
            </p>
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <div className="space-y-0">
        <div className="text-center py-12 sm:py-16 bg-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Current Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Active initiatives making measurable impact in students' lives and communities
          </p>
        </div>
        
        {currentProjects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Future Projects */}
      <div className="space-y-0">
        <div className="text-center py-12 sm:py-16 bg-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Future Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Innovative upcoming initiatives expanding our reach and community impact
          </p>
        </div>
        
        <FutureProjectSection project={futureProject} />
      </div>

      <div className="relative py-12 sm:py-16 md:py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/public/images/logo/gettyimages-535555239-612x612.jpg"
            alt="Join Our Mission"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-lg">Join Our Mission</h2>
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
            Together, we can create transformative change and empower the next generation. 
            Be part of our journey to build a better tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 text-white px-8 sm:px-10 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl">
              Volunteer With Us
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-orange-500 hover:text-secondary px-8 sm:px-10 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl">
              Support Our Cause
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnkur;