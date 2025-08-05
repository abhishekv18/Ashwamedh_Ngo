

// import React, { useState } from 'react';
// import { MapPin, Users, Heart, BookOpen, Home, TreePine, Shield, Utensils, GraduationCap, Stethoscope, CheckCircle, Star, Target } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const WorkingAreas = () => {
//   const [selectedProjects, setSelectedProjects] = useState(['Project Ankur', 'Project Aakaar']);

//   const projects = [
//     { 
//       name: 'Project Ankur', 
//       icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />, 
//       color: 'bg-orange-500',
//       description: 'Catch them young concept - Early childhood development and education',
//       focus: ['Early Education', 'Child Development', 'Nutrition']
//     },
//     { 
//       name: 'Project Aakaar', 
//       icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />, 
//       color: 'bg-teal-500',
//       description: 'Personality Development Course by Ashwamedh Foundation',
//       focus: ['Personality Development', 'Life Skills', 'Confidence Building']
//     }
//   ];

//   const workingLocations = [
//     { 
//       name: 'Vasai', 
//       lat: 180, 
//       lng: 160, 
//       projects: ['Project Ankur', 'Project Aakaar'],
//       population: '1.2M',
//       activeProjects: 7,
//       centers: 1
//     }
//   ];

//   const toggleProject = (project) => {
//     setSelectedProjects(prev => 
//       prev.includes(project) 
//         ? prev.filter(item => item !== project)
//         : [...prev, project]
//     );
//   };

//   const getVisibleLocations = () => {
//     return workingLocations.filter(location => 
//       location.projects.some(project => selectedProjects.includes(project))
//     );
//   };

//   const getTotalPrograms = () => {
//     return getVisibleLocations().reduce((total, location) => total + location.activePrograms, 0);
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-yellow-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-orange-400 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
//         {/* Header */}
//         <div className="mb-6 sm:mb-10 lg:mb-12">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Our Projects</h1>
//           <p className="text-base sm:text-lg lg:text-xl text-orange-50 max-w-3xl">
//             Transforming lives through Project Ankur and Project Aakaar in Vasai, focusing on early childhood development and personality enhancement programs.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
//           {/* Controls Panel - Simplified after removing state selection */}
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm h-full">
//             <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg">
//               Toggle the options to see our project locations and their areas of focus.
//             </p>

//             {/* Project Selection - Made more compact */}
//             <div className="mb-4 sm:mb-6 lg:mb-8">
//               <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 lg:mb-6 uppercase tracking-wide">
//                 Select Projects
//               </h3>
//               <div className="space-y-3 sm:space-y-4">
//                 {projects.map((project) => (
//                   <div key={project.name} className="border border-gray-200 rounded-lg p-2 sm:p-3">
//                     <button
//                       onClick={() => toggleProject(project.name)}
//                       className={`flex items-center justify-between w-full p-2 sm:p-2 rounded-lg border-2 transition-all duration-200 ${
//                         selectedProjects.includes(project.name)
//                           ? 'border-teal-500 bg-teal-50 text-teal-700'
//                           : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
//                       }`}
//                     >
//                       <div className="flex items-center space-x-2 sm:space-x-3">
//                         <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${project.color} flex items-center justify-center text-white flex-shrink-0`}>
//                           {project.icon}
//                         </div>
//                         <div className="text-left">
//                           <div className="font-bold text-sm sm:text-base">{project.name}</div>
//                         </div>
//                       </div>
//                       {selectedProjects.includes(project.name) && (
//                         <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 flex-shrink-0" />
//                       )}
//                     </button>
//                     <div className="mt-1 sm:mt-2 ml-1 sm:ml-2">
//                       <p className="text-xs sm:text-sm text-gray-600 mb-1">{project.description}</p>
//                       <div className="flex flex-wrap gap-1 sm:gap-2">
//                         {project.focus.map((area, index) => (
//                           <span key={index} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full border border-orange-200">
//                             {area}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Stats - Kept original size */}
//             <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
//               <div className="text-center">
//                 <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">1</div>
//                 <div className="text-xs sm:text-sm text-gray-600">Active City</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">7</div>
//                 <div className="text-xs sm:text-sm text-gray-600">Projects Running</div>
//               </div>
//             </div>
//           </div>

//           {/* Map Section - Kept original size */}
//           <div className="relative h-full">
//             <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm h-full">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
//                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
//                   Maharashtra Operations
//                 </h3>
//                 <div className="bg-orange-100 text-orange-600 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto">
//                   1 Active City
//                 </div>
//               </div>

//               {/* Map Container */}
//               <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-8 min-h-48 sm:min-h-64 lg:min-h-96 overflow-hidden">
//                 {/* Maharashtra Map SVG */}
//                 <svg viewBox="0 0 400 300" className="w-full h-full">
//                   {/* Maharashtra outline */}
//                   <path
//                     d="M50 80 L320 60 L350 90 L380 130 L370 200 L320 240 L280 270 L220 280 L160 270 L100 240 L60 200 L40 150 L45 120 Z"
//                     fill="#FFC107"
//                     stroke="#FF8F00"
//                     strokeWidth="2"
//                     className="drop-shadow-lg"
//                   />
                  
//                   {/* Location marker - Vasai */}
//                   {getVisibleLocations().map((location, index) => (
//                     <g key={location.name}>
//                       <circle 
//                         cx={location.lat} 
//                         cy={location.lng} 
//                         r="6" 
//                         fill="#00695C"
//                         className="animate-pulse drop-shadow-lg sm:r-8 lg:r-10"
//                       />
//                       <circle 
//                         cx={location.lat} 
//                         cy={location.lng} 
//                         r="10" 
//                         fill="none"
//                         stroke="#00695C"
//                         strokeWidth="2"
//                         opacity="0.5"
//                         className="animate-ping sm:r-12 lg:r-15"
//                       />
//                       <text 
//                         x={location.lat + 12} 
//                         y={location.lng + 4} 
//                         className="text-xs sm:text-sm font-bold fill-gray-800 drop-shadow-sm"
//                       >
//                         {location.name}
//                       </text>
//                       <text 
//                         x={location.lat + 12} 
//                         y={location.lng + 16} 
//                         className="text-xs fill-gray-600"
//                       >
//                         {location.activeProjects} projects
//                       </text>
//                     </g>
//                   ))}
                  
//                   {/* Legend */}
//                   <g transform="translate(8, 8)">
//                     <rect x="0" y="0" width="120" height="80" fill="white" stroke="#E0E0E0" rx="6" className="drop-shadow-md sm:width-140 sm:height-90 lg:width-160 lg:height-100" />
//                     <circle cx="12" cy="20" r="4" fill="#00695C" className="sm:cx-15 sm:cy-25 sm:r-6 lg:cx-20 lg:cy-30 lg:r-8" />
//                     <text x="20" y="24" className="text-xs fill-gray-700 font-medium sm:x-25 sm:y-29 lg:x-35 lg:y-35">Active City</text>
//                     <rect x="10" y="30" width="12" height="8" fill="#FFC107" stroke="#FF8F00" className="sm:x-12 sm:y-35 sm:width-15 sm:height-10 lg:x-15 lg:y-45 lg:width-20 lg:height-15" />
//                     <text x="24" y="37" className="text-xs fill-gray-700 sm:x-30 sm:y-43 lg:x-40 lg:y-55">Maharashtra</text>
//                     <text x="10" y="50" className="text-xs fill-orange-600 font-bold sm:x-12 sm:y-58 lg:x-15 lg:y-75">Project Ankur</text>
//                     <text x="10" y="60" className="text-xs fill-teal-600 font-bold sm:x-12 sm:y-70 lg:x-15 lg:y-90">Project Aakaar</text>
//                   </g>
//                 </svg>
//               </div>

//               {/* Location Details */}
//               <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 max-h-40 sm:max-h-48 overflow-y-auto">
//                 {getVisibleLocations().map((location) => (
//                   <div key={location.name} className="bg-gray-50 rounded-lg p-2 sm:p-3 lg:p-4">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
//                       <div className="flex items-center space-x-2 sm:space-x-3">
//                         <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-teal-500 rounded-full flex-shrink-0"></div>
//                         <span className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">{location.name}</span>
//                         <span className="text-xs sm:text-sm text-gray-500">Pop: {location.population}</span>
//                       </div>
//                       <div className="text-xs sm:text-sm font-medium text-orange-600 ml-4 sm:ml-0">
//                         {location.activeProjects} Active Projects
//                       </div>
//                     </div>
//                     <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2 ml-4 sm:ml-5 lg:ml-7">
//                       <span className="mr-2">Centers:</span>
//                       <span className="font-medium">{location.centers}</span>
//                     </div>
//                     <div className="flex flex-wrap gap-1 sm:gap-2 ml-4 sm:ml-5 lg:ml-7">
//                       {location.projects.filter(project => selectedProjects.includes(project)).map((project) => {
//                         const projectConfig = projects.find(p => p.name === project);
//                         return (
//                           <div key={project} className={`flex items-center space-x-1 ${projectConfig?.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs`}>
//                             {projectConfig?.icon}
//                             <span className="font-medium">{project.replace('Project ', '')}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Project Details Banner - Kept original size */}
//         <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
//           <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:scale-105 transition-transform duration-200">
//             <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
//                 <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
//               </div>
//               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Project Ankur</h3>
//             </div>
//             <p className="text-orange-50 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
//               "Catch them young" Our early childhood development program focusing on foundational education, nutrition, and development.
//             </p>
//             <Link to='/what-we-do/projects'>
//               <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-xs sm:text-sm lg:text-base">
//               Learn More About Ankur
//             </button>
//             </Link>
//           </div>

//           <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:scale-105 transition-transform duration-200">
//             <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
//                 <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
//               </div>
//               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Project Aakaar</h3>
//             </div>
//             <p className="text-orange-50 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
//               Our comprehensive personality development course designed to build confidence, life skills, and character among children and youth.
//             </p>
//             <Link to='/what-we-do/projects'>
//               <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-xs sm:text-sm lg:text-base">
//               Learn More About Aakaar
//             </button>
//             </Link>
//           </div>
//         </div>

//         {/* Call to Action - Kept original size */}
//         <div className="mt-8 sm:mt-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 text-center">
//           <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Join Our Mission in Vasai</h3>
//           <p className="text-orange-50 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
//             Help us expand Project Ankur and Project Aakaar to reach more children in Vasai through our 1 centers.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//             <Link to='/get-involved/donate'>
//               <button className="bg-white text-orange-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base">
//               Support Our Projects
//             </button> 
//             </Link>
//             <Link to='/get-involved/volunteer'>
//               <button className="bg-transparent border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 text-sm sm:text-base">
//               Become a Volunteer
//             </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkingAreas;

// import React, { useState } from 'react';
// import { MapPin, Users, Heart, BookOpen, Home, TreePine, Shield, GraduationCap, Stethoscope, CheckCircle, Star, Target, Music } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const WorkingAreas = () => {
//   // Initialize with all projects selected
//   const [selectedProjects, setSelectedProjects] = useState([
//     'Project Ankur', 'Project Aakaar', 'Project Aagaaz', 
//     'Project Aakalan', 'Project Anubhav', 'Project Aarogya', 'Project Aalaap'
//   ]);

//   const projectCategories = [
//     {
//       name: 'Educational',
//       icon: <BookOpen className="w-4 h-4" />,
//       color: 'bg-orange-500',
//       projects: [
//         { 
//           name: 'Project Ankur', 
//           icon: <Star className="w-4 h-4" />,
//           description: 'Early childhood development and education'
//         },
//         { 
//           name: 'Project Aagaaz', 
//           icon: <GraduationCap className="w-4 h-4" />,
//           description: 'Academic support and mentorship for school children'
//         },
//         { 
//           name: 'Project Aakalan', 
//           icon: <Home className="w-4 h-4" />,
//           description: 'Bridging educational gaps through tutoring'
//         }
//       ]
//     },
//     {
//       name: 'Personality Development',
//       icon: <Users className="w-4 h-4" />,
//       color: 'bg-teal-500',
//       projects: [
//         { 
//           name: 'Project Aakaar', 
//           icon: <Target className="w-4 h-4" />,
//           description: 'Personality development and life skills'
//         },
//         { 
//           name: 'Project Anubhav', 
//           icon: <Shield className="w-4 h-4" />,
//           description: 'Career guidance and professional training'
//         }
//       ]
//     },
//     {
//       name: 'Healthcare',
//       icon: <Stethoscope className="w-4 h-4" />,
//       color: 'bg-red-500',
//       projects: [
//         { 
//           name: 'Project Aarogya', 
//           icon: <Heart className="w-4 h-4" />,
//           description: 'Health camps and medical support'
//         }
//       ]
//     },
//     {
//       name: 'Arts & Culture',
//       icon: <Music className="w-4 h-4" />,
//       color: 'bg-purple-500',
//       projects: [
//         { 
//           name: 'Project Aalaap', 
//           icon: <TreePine className="w-4 h-4" />,
//           description: 'Promoting Indian arts and culture'
//         }
//       ]
//     }
//   ];

//   // Vasai location data
//   const vasaiLocation = {
//     name: 'Vasai',
//     lat: 180,
//     lng: 160,
//     population: '1.2M',
//     centers: 3,
//     activeProjects: selectedProjects.length
//   };

//   const toggleProject = (project) => {
//     setSelectedProjects(prev => 
//       prev.includes(project) 
//         ? prev.filter(item => item !== project)
//         : [...prev, project]
//     );
//   };

//   const toggleAllProjects = () => {
//     const allProjects = projectCategories.flatMap(c => c.projects).map(p => p.name);
//     setSelectedProjects(prev => 
//       prev.length === allProjects.length ? [] : allProjects
//     );
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90">
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-orange-400 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-white mb-2">Our Projects</h1>
//           <p className="text-orange-50 text-lg">
//             Transforming lives through various initiatives
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Project Categories */}
//           <div className="lg:col-span-1 bg-white rounded-xl shadow-xl p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-gray-800">Project Categories</h2>
//               <button 
//                 onClick={toggleAllProjects}
//                 className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
//               >
//                 {selectedProjects.length === projectCategories.flatMap(c => c.projects).length ? 'Deselect All' : 'Select All'}
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               {projectCategories.map((category) => (
//                 <div key={category.name} className="border border-gray-200 rounded-lg overflow-hidden">
//                   <div className={`${category.color} p-3 text-white font-medium flex items-center`}>
//                     {category.icon}
//                     <span className="ml-2">{category.name}</span>
//                   </div>
//                   <div className="p-3 space-y-2">
//                     {category.projects.map((project) => (
//                       <div 
//                         key={project.name}
//                         onClick={() => toggleProject(project.name)}
//                         className={`p-2 rounded cursor-pointer flex items-center justify-between ${selectedProjects.includes(project.name) ? 'bg-teal-50 border border-teal-200' : 'hover:bg-gray-50'}`}
//                       >
//                         <div className="flex items-center">
//                           <div className={`w-6 h-6 rounded-md ${category.color} flex items-center justify-center text-white mr-2`}>
//                             {project.icon}
//                           </div>
//                           <div>
//                             <div className="font-medium text-gray-800">{project.name}</div>
//                             <div className="text-xs text-gray-500">{project.description}</div>
//                           </div>
//                         </div>
//                         {selectedProjects.includes(project.name) && (
//                           <CheckCircle className="w-4 h-4 text-teal-500" />
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Map and Location Info */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Map */}
//             <div className="bg-white rounded-xl shadow-xl p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-bold text-gray-800">Vasai Operations</h2>
//                 <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
//                   {selectedProjects.length} Active Projects
//                 </span>
//               </div>
              
//               <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-4 h-64 relative">
//                 <svg viewBox="0 0 400 300" className="w-full h-full">
//                   <path
//                     d="M50 80 L320 60 L350 90 L380 130 L370 200 L320 240 L280 270 L220 280 L160 270 L100 240 L60 200 L40 150 L45 120 Z"
//                     fill="#FFC107"
//                     stroke="#FF8F00"
//                     strokeWidth="2"
//                   />
                  
//                   {/* Vasai Marker */}
//                   <g>
//                     <circle 
//                       cx={vasaiLocation.lat} 
//                       cy={vasaiLocation.lng} 
//                       r="6" 
//                       fill="#00695C"
//                       className="animate-pulse"
//                     />
//                     <circle 
//                       cx={vasaiLocation.lat} 
//                       cy={vasaiLocation.lng} 
//                       r="10" 
//                       fill="none"
//                       stroke="#00695C"
//                       strokeWidth="2"
//                       opacity="0.5"
//                       className="animate-ping"
//                     />
//                     <text 
//                       x={vasaiLocation.lat + 12} 
//                       y={vasaiLocation.lng + 4} 
//                       className="text-xs font-bold fill-gray-800"
//                     >
//                       {vasaiLocation.name}
//                     </text>
//                     <text 
//                       x={vasaiLocation.lat + 12} 
//                       y={vasaiLocation.lng + 16} 
//                       className="text-xs fill-gray-600"
//                     >
//                       {selectedProjects.length} projects
//                     </text>
//                   </g>
//                 </svg>
//               </div>
//             </div>

//             {/* Location Details */}
//             <div className="bg-white rounded-xl shadow-xl p-6">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Vasai Projects</h2>
//               <div className="space-y-3">
//                 <div className="border border-gray-200 rounded-lg p-4">
//                   <div className="flex justify-between items-center mb-2">
//                     <div className="flex items-center">
//                       <MapPin className="w-4 h-4 text-teal-500 mr-2" />
//                       <h3 className="font-bold">{vasaiLocation.name}</h3>
//                       <span className="text-xs text-gray-500 ml-2">Pop: {vasaiLocation.population}</span>
//                       <span className="text-xs text-gray-500 ml-2">Centers: {vasaiLocation.centers}</span>
//                     </div>
//                     <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
//                       {selectedProjects.length} active projects
//                     </span>
//                   </div>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {selectedProjects.map((project) => {
//                       const category = projectCategories.find(cat => 
//                         cat.projects.some(p => p.name === project));
//                       return (
//                         <span 
//                           key={project} 
//                           className={`text-xs text-white px-2 py-1 rounded-full ${category?.color}`}
//                         >
//                           {project}
//                         </span>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
//           <h3 className="text-3xl font-bold text-white mb-3">Join Our Mission</h3>
//           <p className="text-orange-50 mb-4 text-lg">
//             Help us expand our projects to reach more communities.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <Link to='/get-involved/donate'>
//               <button className="bg-white  text-orange-600 px-7 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg">
//                 Support Our Projects
//               </button>
//             </Link>
//             <Link to='/get-involved/volunteer'>
//               <button className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200">
//                 Become a Volunteer
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkingAreas;


import React, { useState } from 'react';
import { MapPin, Users, Heart, BookOpen, Home, TreePine, Shield, GraduationCap, Stethoscope, CheckCircle, Star, Target, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkingAreas = () => {
  // Initialize with all projects selected
  const [selectedProjects, setSelectedProjects] = useState([
    'Project Ankur', 'Project Aakaar', 'Project Aagaaz', 
    'Project Aakalan', 'Project Anubhav', 'Project Aarogya', 'Project Aalaap'
  ]);

  const projectCategories = [
    {
      name: 'Educational',
      icon: <BookOpen className="w-4 h-4" />,
      color: 'bg-orange-500',
      projects: [
        { 
          name: 'Project Ankur', 
          icon: <Star className="w-4 h-4" />,
          description: 'Early childhood development and education'
        }
      ]
    },
    {
      name: 'Skills Development',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'bg-blue-500',
      projects: [
        { 
          name: 'Project Aagaaz', 
          icon: <Home className="w-4 h-4" />,
          description: 'Academic support and mentorship for school children'
        },
        { 
          name: 'Project Aakalan', 
          icon: <Home className="w-4 h-4" />,
          description: 'Bridging educational gaps through tutoring'
        }
      ]
    },
    {
      name: 'Personality Development',
      icon: <Users className="w-4 h-4" />,
      color: 'bg-teal-500',
      projects: [
        { 
          name: 'Project Aakaar', 
          icon: <Target className="w-4 h-4" />,
          description: 'Personality development and life skills'
        },
        { 
          name: 'Project Anubhav', 
          icon: <Shield className="w-4 h-4" />,
          description: 'Career guidance and professional training'
        }
      ]
    },
    {
      name: 'Healthcare',
      icon: <Stethoscope className="w-4 h-4" />,
      color: 'bg-red-500',
      projects: [
        { 
          name: 'Project Aarogya', 
          icon: <Heart className="w-4 h-4" />,
          description: 'Health camps and medical support'
        }
      ]
    },
    {
      name: 'Arts & Culture',
      icon: <Music className="w-4 h-4" />,
      color: 'bg-purple-500',
      projects: [
        { 
          name: 'Project Aalaap', 
          icon: <TreePine className="w-4 h-4" />,
          description: 'Promoting Indian arts and culture'
        }
      ]
    }
  ];

  // Vasai location data
  const vasaiLocation = {
    name: 'Vasai',
    lat: 180,
    lng: 160,
    population: '1.2M',
    center: 1,
    activeProjects: selectedProjects.length
  };

  const toggleProject = (project) => {
    setSelectedProjects(prev => 
      prev.includes(project) 
        ? prev.filter(item => item !== project)
        : [...prev, project]
    );
  };

  const toggleAllProjects = () => {
    const allProjects = projectCategories.flatMap(c => c.projects).map(p => p.name);
    setSelectedProjects(prev => 
      prev.length === allProjects.length ? [] : allProjects
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Our Projects</h1>
          <p className="text-orange-50 text-lg max-w-2xl mx-auto">
            Transforming lives through comprehensive initiatives in Vasai
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project Categories */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Project Categories</h2>
              <button 
                onClick={toggleAllProjects}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
              >
                {selectedProjects.length === projectCategories.flatMap(c => c.projects).length ? 'Deselect All' : 'Select All'}
              </button>
            </div>
            
            <div className="space-y-4">
              {projectCategories.map((category) => (
                <div key={category.name} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className={`${category.color} p-3 text-white font-medium flex items-center`}>
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </div>
                  <div className="p-3 space-y-2">
                    {category.projects.map((project) => (
                      <div 
                        key={project.name}
                        onClick={() => toggleProject(project.name)}
                        className={`p-2 rounded cursor-pointer flex items-center justify-between ${selectedProjects.includes(project.name) ? 'bg-teal-50 border border-teal-200' : 'hover:bg-gray-50'}`}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-md ${category.color} flex items-center justify-center text-white mr-2`}>
                            {project.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{project.name}</div>
                            <div className="text-xs text-gray-500">{project.description}</div>
                          </div>
                        </div>
                        {selectedProjects.includes(project.name) && (
                          <CheckCircle className="w-4 h-4 text-teal-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map and Location Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-xl p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Our Presence in Vasai</h2>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                  {selectedProjects.length} Active Projects
                </span>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-4 h-96 relative">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <path
                    d="M50 80 L320 60 L350 90 L380 130 L370 200 L320 240 L280 270 L220 280 L160 270 L100 240 L60 200 L40 150 L45 120 Z"
                    fill="#FFC107"
                    stroke="#FF8F00"
                    strokeWidth="2"
                  />
                  
                  {/* Vasai Marker */}
                  <g>
                    <circle 
                      cx={vasaiLocation.lat} 
                      cy={vasaiLocation.lng} 
                      r="8" 
                      fill="#00695C"
                      className="animate-pulse"
                    />
                    <circle 
                      cx={vasaiLocation.lat} 
                      cy={vasaiLocation.lng} 
                      r="14" 
                      fill="none"
                      stroke="#00695C"
                      strokeWidth="2"
                      opacity="0.5"
                      className="animate-ping"
                    />
                    <text 
                      x={vasaiLocation.lat + 18} 
                      y={vasaiLocation.lng + 5} 
                      className="text-sm font-bold fill-gray-800"
                    >
                      {vasaiLocation.name}
                    </text>
                    <text 
                      x={vasaiLocation.lat + 18} 
                      y={vasaiLocation.lng + 20} 
                      className="text-xs fill-gray-600"
                    >
                      {selectedProjects.length} active initiatives
                    </text>
                  </g>

                  {/* Map Legend */}
                  <g transform="translate(20, 20)">
                    <rect x="0" y="0" width="120" height="60" rx="6" fill="white" stroke="#E0E0E0" />
                    <circle cx="15" cy="20" r="5" fill="#00695C" />
                    <text x="25" y="24" className="text-xs fill-gray-700">Vasai</text>
                    <rect x="10" y="35" width="15" height="10" fill="#FFC107" stroke="#FF8F00" />
                    <text x="30" y="43" className="text-xs fill-gray-700">Maharashtra</text>
                  </g>
                </svg>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mt-7">
                <div className="bg-gray-50 p-5 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">{vasaiLocation.population}</div>
                  <div className="text-xs text-gray-500">Population Served</div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-600">{vasaiLocation.center}</div>
                  <div className="text-xs text-gray-500">Community Center</div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">{selectedProjects.length}</div>
                  <div className="text-xs text-gray-500">Active Programs</div>
                </div>
              </div>
              {/* Call to Action */}
<div className="mt-12">
  <div className="bg-white border border-orange-100 rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Explore Our Projects in Detail</h3>
      <p className="text-sm text-gray-500">Discover how each initiative is making a lasting impact in Vasai and beyond.</p>
    </div>
    <a
      href="/what-we-do/projects"
      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-sm font-medium shadow-md transition-all duration-300"
    >
      Explore Projects
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Mission</h3>
          <p className="text-orange-50 mb-6 text-lg">
            Your support can help us expand our reach and impact more lives through these initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to='/get-involved/donate'>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base flex items-center justify-center">
                <Heart className="w-4 h-4 mr-2" />
                Support Our Projects
              </button>
            </Link>
            <Link to='/get-involved/volunteer'>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 text-sm sm:text-base flex items-center justify-center">
                <Users className="w-4 h-4 mr-2" />
                Become a Volunteer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default WorkingAreas;