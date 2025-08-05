

// import React from 'react';
// import { BookOpen, Heart, Users, Sprout, ArrowRight, CheckCircle, Target, Award, Globe, GraduationCap, UserCheck } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const ProgramsOverview = () => {
//   const mainPrograms = [
//     {
//       id: 'ankur',
//       title: 'Project Ankur',
//       subtitle: 'Seeds of Education - Building Strong Foundations',
//       description: 'Following the "catch them young" philosophy, Project Ankur focuses on strengthening educational foundations for students up to 7th standard. We address the critical gap where students reach 8th grade without basic reading and writing skills, ensuring every child has a solid academic foundation.',
//       image: '/science/photo-1574097656146-0b43b7660cb6.avif',
//       icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
//       color: 'from-[#FF5722] to-[#FF7043]',
//       bgColor: 'bg-gradient-to-br from-[#FFF3E0] to-[#FFF8F5]',
//       borderColor: 'border-[#FF5722]/20',
//       targetGroup: 'Students up to 7th Standard',
//       stats: [
//         { number: '5K+', label: 'Students Educated' },
       
//       ],
//       features: [
//         'Part of Flagship Program',
//         'Focuses on Education and Literacy',
//         'Age Group: 6 to 15 Years',
        
//       ],
//       methodology: 'Partnership-based approach with schools, NGOs, and local bodies to ensure comprehensive coverage and sustainable impact.'
//     },
//     {
//       id: 'aakaar',
//       title: 'Project Aakaar',
//       subtitle: 'Shaping Personalities - Certificate Course Program',
//       description: 'A comprehensive Personality Development Certificate Course designed for students in 8th to 10th standard. Project Aakaar focuses on holistic development through value education, communication skills, and essential life skills that prepare students for future challenges.',
//       image: '/images/logo/vecteezy_group-of-hands-holding-together_5380829.JPG',
//       icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
//       color: 'from-[#00695C] to-[#26A69A]',
//       bgColor: 'bg-gradient-to-br from-[#E0F2F1] to-[#F0F8F7]',
//       borderColor: 'border-[#00695C]/20',
//       targetGroup: '8th to 10th Standard Students',
//       stats: [
//         { number: '4K+', label: 'Students Trained' },
      
//       ],
//       features: [
//         'Focuses on overall Personality Development',
//         'Communication Skills Development',
//         'Age Group: 10 to 17 Years',
      
//       ],
//       methodology: 'Structured curriculum combining theoretical knowledge with practical application to ensure comprehensive personality development.'
//     }
//   ];

//   const focusAreas = [
//     {
//       icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
//       title: 'Foundation Education',
//       description: 'Building strong academic foundations through focused learning',
//       color: 'text-[#FF5722]',
//       bgColor: 'bg-[#FF5722]/30',
//       gradient: "from-orange-100 to-orange-200"
//     },
//     {
//       icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
//       title: 'Personality Development',
//       description: 'Comprehensive skill development for holistic growth',
//       color: 'text-[#00695C]',
//       bgColor: 'bg-[#00695C]/30',
//         gradient: "from-teal-100 to-teal-200"
//     },
//     {
//       icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
//       title: 'Value Education',
//       description: 'Instilling strong moral and ethical values',
//     color: 'text-[#00695C]',
//       bgColor: 'bg-[#00695C]/30',
//         gradient: "from-teal-100 to-teal-200"
//     },
//     {
//       icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
//       title: 'Holistic Wellness',
//       description: 'Physical and mental well-being through yoga and stress management',
//        color: 'text-[#FF5722]',
//       bgColor: 'bg-[#FF5722]/30',
//         gradient: "from-orange-100 to-orange-200"
//     }
//   ];

//   const impactMetrics = [
//     { number: '5K+', label: 'Lives Impacted', icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'text-[#FF5722]' },
//     { number: '50+', label: 'Partner Schools', icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'text-[#00695C]' },
//     { number: '13+', label: 'Years of Service', icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'text-[#00695C]' },
//     { number: '20+', label: 'Active Volunteers', icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'text-[#FF5722]' }
//   ];

//   return (
//     <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-100 via-white to-orange-50">
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//           <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] rounded-full text-xs sm:text-sm font-semibold text-white mb-6 sm:mb-8 shadow-lg">
//             <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//             Our Impact Projects
//           </div>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#212121] mb-4 sm:mb-6 px-2">
//             Transforming Lives Through
//             <span className="block text-[#FF5722] mt-1 sm:mt-2">Educational Excellence</span>
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-[#616161] max-w-4xl mx-auto leading-relaxed px-4">
//             Our targeted programs address critical educational gaps and personality development needs, 
//             creating sustainable change through strategic interventions and community partnerships.
//           </p>
//         </div>

//         {/* Impact Metrics */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
//           {impactMetrics.map((metric, index) => (
//             <div key={index} className="bg-[#FFFFFF] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#E0E0E0] text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//               <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 		bg-[#FFFAF0] rounded-lg sm:rounded-xl mb-3 sm:mb-4">
//                 <div className={metric.color}>
//                   {metric.icon}
//                 </div>
//               </div>
//               <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#212121] mb-1 sm:mb-2">{metric.number}</div>
//               <div className="text-xs sm:text-sm lg:text-base text-[#757575] font-medium">{metric.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Main Programs */}
//         <div className="space-y-12 sm:space-y-16 lg:space-y-20 mb-12 sm:mb-16 lg:mb-20">
//           {mainPrograms.map((program, index) => (
//             <div key={program.id} className={`${program.bgColor} rounded-2xl sm:rounded-3xl overflow-hidden border-2 ${program.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300`}>
//               <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
               
//                 <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12">
//                   <div className="mb-4 sm:mb-6">
//                     <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${program.color} rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg`}>
//                       <div className="text-white">
//                         {program.icon}
//                       </div>
//                     </div>
//                     <div className="mb-3 sm:mb-4">
//                       <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#212121] mb-1 sm:mb-2">
//                         {program.title}
//                       </h3>
//                       <p className="text-base sm:text-lg text-[#FF5722] font-semibold mb-2">
//                         {program.subtitle}
//                       </p>
//                       <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF5722]/10 rounded-full text-xs sm:text-sm font-medium text-[#FF5722] mb-2 sm:mb-3">
//                         <UserCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                         Target: {program.targetGroup}
//                       </div>
//                     </div>
//                     <p className="text-sm sm:text-base text-[#424242] leading-relaxed mb-4 sm:mb-6">
//                       {program.description}
//                     </p>
//                   </div>

               
//                   <div className="mb-4 sm:mb-6">
//                     <h4 className="text-base sm:text-lg font-bold text-[#212121] mb-3 sm:mb-4">Key Features & Focus Areas</h4>
//                     <div className="grid grid-cols-1 gap-2 sm:gap-3">
//                       {program.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center space-x-2 sm:space-x-3 bg-[#FFFFFF]/60 rounded-lg p-2 sm:p-3">
//                           <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#4CAF50] flex-shrink-0" />
//                           <span className="text-[#424242] font-medium text-xs sm:text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#FFFFFF]/80 rounded-xl border border-[#E0E0E0]">
//                     <h4 className="text-sm sm:text-base font-bold text-[#212121] mb-2">Our Approach</h4>
//                     <p className="text-[#616161] leading-relaxed text-xs sm:text-sm">{program.methodology}</p>
//                   </div>

                 
//                   <Link to='/what-we-do/projects'>
//                     <button className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${program.color} text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105 text-sm sm:text-base`}>
//                     <span className="hidden sm:inline">Learn More About {program.title}</span>
//                     <span className="sm:hidden">Learn More</span>
//                     <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   </Link>
                
//                 </div>

         
//                 <div className="lg:w-1/2 relative order-first lg:order-none">
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/30 to-transparent z-10"></div>
//                   <img 
//                     src={program.image} 
//                     alt={program.title}
//                     className="w-full h-full object-cover min-h-[200px] sm:min-h-[250px] lg:min-h-[400px] xl:min-h-[500px]"
//                   />
                  
                
//                   <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 bg-[#FFFFFF]/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl z-20 border border-[#E0E0E0]">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-lg sm:text-xl font-bold text-[#212121]">
//                           {program.stats[0].number}
//                         </div>
//                         <div className="text-[#757575] font-medium text-xs sm:text-sm">
//                           {program.stats[0].label}
//                         </div>
//                       </div>
//                       <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center shadow-lg`}>
//                         <div className="text-white">
//                           <div className="w-4 h-4 sm:w-5 sm:h-5 text-center">
//                             {program.icon}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Focus Areas */}
   

//         {/* Call to Action */}
//         <div className="bg-gradient-to-br from-[#212121] to-[#424242] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 text-white text-center relative overflow-hidden shadow-2xl">
//           <div className="absolute inset-0 bg-[url('/images/logo/church-of-the-king-j9jZSqfH5YI-unsplash.jpg')] bg-cover bg-center opacity-20"></div>
//           <div className="relative z-10 max-w-4xl mx-auto">
//             <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#FF5722]/20 rounded-full text-xs sm:text-sm font-semibold text-[#FF8A65] mb-4 sm:mb-6">
//               <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//               Join Our Mission
//             </div>
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">
//               Ready to Shape Young Minds?
//             </h3>
//             <p className="text-base sm:text-lg lg:text-xl text-[#BDBDBD] mb-6 sm:mb-8 leading-relaxed px-2">
//               Partner with us in building stronger educational foundations and developing confident personalities. 
//               Every contribution creates a ripple effect of positive change.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
//               <Link to='/get-involved/donate'>
//                 <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 group hover:scale-105 text-sm sm:text-base">
//                 <span className="hidden sm:inline">Support Our Programs</span>
//                 <span className="sm:hidden">Support Programs</span>
//                 <Heart className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 group-hover:scale-110 transition-transform" />
//               </button>
//               </Link>
            
//               <Link to='/get-involved/volunteer'>
//                <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#FFFFFF]/10 backdrop-blur-sm border-2 border-[#FFFFFF]/20 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-[#FFFFFF]/20 transition-all duration-300 group text-sm sm:text-base">
//                 <span className="hidden sm:inline">Join Us as a Volunteer</span>
//                 <span className="sm:hidden">Join Us</span>
//                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//               </Link>
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsOverview;

// import React from 'react';
// import { BookOpen, Users, Activity, GraduationCap, Briefcase, HeartPulse, Music, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const ProjectsOverview = () => {
//   const projectCategories = [
//     {
//       title: 'Educational Projects',
//       icon: <BookOpen className="w-5 h-5" />,
//       description: 'Building strong academic foundations through early intervention programs',
//       color: 'text-[#FF5722]',
//       bgColor: 'bg-[#FF5722]/10',
//       projects: [
//         {
//           name: 'Project Ankur (Flagship Program)',
//           description: 'Early childhood education and development for underprivileged children (3-8 years)'
//         }
//       ]
//     },
//     {
//       title: 'Skills Development Projects',
//       icon: <Activity className="w-5 h-5" />,
//       description: 'Enhancing academic and vocational skills for holistic growth',
//       color: 'text-[#00695C]',
//       bgColor: 'bg-[#00695C]/10',
//       projects: [
//         {
//           name: 'Project Aagaaz',
//           description: 'Academic support and co-curricular development for school-age children (6-14 years)'
//         },
//         {
//           name: 'Project Aakalan',
//           description: 'Bridging educational gaps through tutoring and digital tools (10-18 years)'
//         }
//       ]
//     },
//     {
//       title: 'Personality & HRD Projects',
//       icon: <GraduationCap className="w-5 h-5" />,
//       description: 'Developing confident individuals and future-ready professionals',
//       color: 'text-[#7E22CE]',
//       bgColor: 'bg-[#7E22CE]/10',
//       projects: [
//         {
//           name: 'Project Aakaar',
//           description: 'Personality development with leadership and communication skills (15-25 years)'
//         },
//         {
//           name: 'Project Anubhav',
//           description: 'Career readiness through workshops and internships (18-25 years)'
//         }
//       ]
//     },
//     {
//       title: 'Healthcare Projects',
//       icon: <HeartPulse className="w-5 h-5" />,
//       description: 'Promoting community health and wellbeing',
//       color: 'text-[#DC2626]',
//       bgColor: 'bg-[#DC2626]/10',
//       projects: [
//         {
//           name: 'Project Aarogya',
//           description: 'Health camps and hygiene awareness for underserved communities'
//         }
//       ]
//     },
//     {
//       title: 'Arts & Culture Projects',
//       icon: <Music className="w-5 h-5" />,
//       description: 'Preserving heritage and nurturing artistic expression',
//       color: 'text-[#4F46E5]',
//       bgColor: 'bg-[#4F46E5]/10',
//       projects: [
//         {
//           name: 'Project Aalaap',
//           description: 'Cultural events and traditional arts workshops for youth'
//         }
//       ]
//     }
//   ];

//   return (
//     <section className="py-12 bg-gradient-to-br from-orange-50 to-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//             Our <span className="text-[#FF5722]">Comprehensive Projects</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Holistic interventions across five key focus areas to empower communities
//           </p>
//         </div>

//         {/* Project Categories */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {projectCategories.map((category, index) => (
//             <div 
//               key={index} 
//               className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
//             >
//               <div className={`inline-flex items-center justify-center w-10 h-10 ${category.bgColor} rounded-lg mb-4`}>
//                 <div className={category.color}>
//                   {category.icon}
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
//               <p className="text-gray-600 mb-4">{category.description}</p>
              
//               <div className="space-y-3 mb-6">
//                 {category.projects.map((project, idx) => (
//                   <div key={idx} className="flex items-start">
//                     <div className={`w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0 ${category.bgColor}`}></div>
//                     <div>
//                       <h4 className="font-medium text-gray-800">{project.name}</h4>
//                       <p className="text-sm text-gray-600">{project.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <Link 
//                 to="/projects" 
//                 className={`inline-flex items-center text-sm font-medium ${category.color} hover:opacity-80 group`}
//               >
//                 Explore {category.title.split(' ')[0]}
//                 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <Link to="/projects">
//             <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-medium rounded-lg hover:shadow-lg transition-all group">
//               Discover All Our Initiatives
//               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsOverview;


import React from 'react';
import { BookOpen, Users, Activity, GraduationCap, Briefcase, HeartPulse, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsOverview = () => {
  const projectCategories = [
    {
      title: 'Educational Initiatives',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Building strong academic foundations through innovative early intervention programs',
      color: 'text-[#FF5722]',
      bgColor: 'bg-[#FF5722]/10',
      projects: [
        {
          name: 'Project Ankur (Flagship Program)',
          description: 'Comprehensive early childhood education (3-8 years) focusing on literacy, numeracy, and cognitive development for underprivileged children'
        }
      ]
    },
    {
      title: 'Skills Development',
      icon: <Activity className="w-6 h-6" />,
      description: 'Equipping students with essential academic and 21st century skills',
      color: 'text-[#00695C]',
      bgColor: 'bg-[#00695C]/10',
      projects: [
        {
          name: 'Project Aagaaz',
          description: 'Holistic development program (6-14 years) combining academic support with mentorship and co-curricular activities'
        },
        {
          name: 'Project Aakalan',
          description: 'Targeted educational support (10-18 years) including digital learning tools and scholarship opportunities'
        }
      ]
    },
    {
      title: 'Personality & HRD',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Developing confident, capable leaders of tomorrow',
      color: 'text-[#7E22CE]',
      bgColor: 'bg-[#7E22CE]/10',
      projects: [
        {
          name: 'Project Aakaar',
          description: 'Certified personality development course (15-25 years) focusing on leadership, communication, and emotional intelligence'
        },
        {
          name: 'Project Anubhav',
          description: 'Experiential learning program (18-25 years) with industry internships and career counseling'
        }
      ]
    },
    {
      title: 'Healthcare Initiatives',
      icon: <HeartPulse className="w-6 h-6" />,
      description: 'Ensuring community wellbeing through preventive healthcare',
      color: 'text-[#DC2626]',
      bgColor: 'bg-[#DC2626]/10',
      projects: [
        {
          name: 'Project Aarogya',
          description: 'Mobile health clinics providing free checkups, medicines, and health education to underserved communities'
        }
      ]
    },
    {
      title: 'Arts & Culture',
      icon: <Music className="w-6 h-6" />,
      description: 'Preserving heritage while fostering creative expression',
      color: 'text-[#4F46E5]',
      bgColor: 'bg-[#4F46E5]/10',
      projects: [
        {
          name: 'Project Aalaap',
          description: 'Cultural preservation through workshops, performances, and artist mentorship programs'
        }
      ]
    }
  ];

  return (
    // <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
    //   <div className="max-w-7xl mx-auto px-6 sm:px-8">
    //     {/* Section Header */}
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
    //         Our <span className="text-[#FF5722]">Transformative Projects</span>
    //       </h2>
    //       <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
    //         Comprehensive interventions across multiple domains to create sustainable impact and empower communities.
    //       </p>
    //     </div>

    //     {/* Project Categories */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    //       {projectCategories.map((category, index) => (
    //         <div 
    //           key={index} 
    //           className="p-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300"
    //         >
    //           <div className={`inline-flex items-center justify-center w-12 h-12 ${category.bgColor} rounded-xl mb-6`}>
    //             <div className={category.color}>
    //               {category.icon}
    //             </div>
    //           </div>
    //           <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
    //           <p className="text-lg text-gray-700 mb-6 leading-relaxed">{category.description}</p>
              
    //           <div className="space-y-4 mb-8">
    //             {category.projects.map((project, idx) => (
    //               <div key={idx} className="flex items-start">
    //                 <div className={`w-3 h-3 rounded-full mt-2 mr-3 flex-shrink-0 ${category.bgColor}`}></div>
    //                 <div>
    //                   <h4 className="text-xl font-semibold text-gray-900 mb-1">{project.name}</h4>
    //                   <p className="text-base text-gray-700 leading-relaxed">{project.description}</p>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
              
    //           <Link 
    //             to="/what-we-do/projects" 
    //             className={`inline-flex items-center text-lg font-semibold ${category.color} hover:opacity-80 group transition-all`}
    //           >
    //             Explore {category.title.split(' ')[0]}
    //             <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    //           </Link>
    //         </div>
    //       ))}
    //     </div>

    //     {/* CTA */}
    //     <div className="text-center">
    //       <Link to="/what-we-do/projects">
    //         <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-semibold text-xl rounded-xl hover:shadow-xl transition-all group">
    //           Discover All Our Initiatives
    //           <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12 md:mb-16 lg:mb-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
        Our <span className="text-[#FF5722]">Transformative Projects</span>
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl md:max-w-4xl mx-auto leading-normal sm:leading-relaxed">
        Comprehensive interventions across multiple domains to create sustainable impact and empower communities.
      </p>
    </div>

    {/* Project Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 md:mb-16 lg:mb-20">
      {projectCategories.map((category, index) => (
        <div 
          key={index} 
          className="p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${category.bgColor} rounded-lg sm:rounded-xl mb-4 sm:mb-6`}>
            <div className={`${category.color} text-lg sm:text-xl`}>
              {category.icon}
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{category.title}</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">{category.description}</p>
          
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {category.projects.map((project, idx) => (
              <div key={idx} className="flex items-start">
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mt-2 sm:mt-3 mr-2 sm:mr-3 flex-shrink-0 ${category.bgColor}`}></div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{project.name}</h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Link 
            to="/what-we-do/projects" 
            className={`inline-flex items-center text-base sm:text-lg font-semibold ${category.color} hover:opacity-80 group transition-all`}
          >
            Explore {category.title.split(' ')[0]}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center">
      <Link to="/what-we-do/projects">
        <button className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-semibold text-lg sm:text-xl rounded-lg sm:rounded-xl hover:shadow-lg transition-all group">
          Discover All Our Initiatives
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  </div>
</section>
  );
};

export default ProjectsOverview;