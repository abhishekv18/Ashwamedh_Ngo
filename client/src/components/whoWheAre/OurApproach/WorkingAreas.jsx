
// import React, { useState } from 'react';
// import { MapPin, Users, Heart, BookOpen, Home, TreePine, Shield, Utensils, GraduationCap, Stethoscope, CheckCircle, ChevronDown, Star, Target } from 'lucide-react';

// const WorkingAreas = () => {
//   const [selectedState, setSelectedState] = useState('Maharashtra');
//   const [selectedProjects, setSelectedProjects] = useState(['Project Ankur', 'Project Aakaar']);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const states = ['Maharashtra'];
  
//   const projects = [
//     { 
//       name: 'Project Ankur', 
//       icon: <Star className="w-5 h-5" />, 
//       color: 'bg-orange-500',
//       description: 'Catch them young concept - Early childhood development and education',
//       focus: ['Early Education', 'Child Development', 'Nutrition']
//     },
//     { 
//       name: 'Project Aakaar', 
//       icon: <Target className="w-5 h-5" />, 
//       color: 'bg-teal-500',
//       description: 'Personality Development Course by Ashwamedh Foundation',
//       focus: ['Personality Development', 'Life Skills', 'Confidence Building']
//     }
//   ];

//   const workingLocations = [
//     { 
//       name: 'Mumbai', 
//       lat: 180, 
//       lng: 160, 
//       projects: ['Project Ankur', 'Project Aakaar'],
//       population: '12.4M',
//       activePrograms: 1
//     },
//     { 
//       name: 'Navi Mumbai', 
//       lat: 200, 
//       lng: 180, 
//       projects: ['Project Ankur', 'Project Aakaar'],
//       population: '1.1M',
//       activePrograms: 2
//     },
//     { 
//       name: 'Thane', 
//       lat: 160, 
//       lng: 140, 
//       projects: ['Project Ankur', 'Project Aakaar'],
//       population: '1.8M',
//       activePrograms: 1
//     },
//     { 
//       name: 'Pune', 
//       lat: 140, 
//       lng: 220, 
//       projects: ['Project Ankur', 'Project Aakaar'],
//       population: '3.1M',
//       activePrograms: 2
//     },
//     { 
//       name: 'Solapur', 
//       lat: 180, 
//       lng: 260, 
//       projects: ['Project Aakaar'],
//       population: '950K',
//       activePrograms: 2
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
//     <div className="min-h-screen  relative overflow-hidden bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"
// //style={{ background: 'linear-gradient(135deg, #26A69A 0%, #FFFFFF 100%)' }}
// //style={{ background: 'linear-gradient(135deg, #00897B 0%)' }}


//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-400 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
//         {/* Header */}
//         <div className="mb-8 sm:mb-12">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Our Projects</h1>
//           <p className="text-lg sm:text-xl text-orange-100 max-w-3xl">
//             Transforming lives through Project Ankur and Project Aakaar across Maharashtra, focusing on early childhood development and personality enhancement programs.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//           {/* Controls Panel */}
//           <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm">
//             <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
//               Toggle the options to see our project locations and their areas of focus.
//             </p>

//             {/* State Selection */}
//             <div className="mb-6 sm:mb-8">
//               <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
//                 Select States
//               </h3>
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
//                 >
//                   <span className="text-gray-700 font-medium">{selectedState}</span>
//                   <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
//                 {isDropdownOpen && (
//                   <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
//                     {states.map((state) => (
//                       <button
//                         key={state}
//                         onClick={() => {
//                           setSelectedState(state);
//                           setIsDropdownOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
//                       >
//                         {state}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Project Selection */}
//             <div className="mb-6 sm:mb-8">
//               <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide">
//                 Select Projects
//               </h3>
//               <div className="space-y-4">
//                 {projects.map((project) => (
//                   <div key={project.name} className="border border-gray-200 rounded-lg p-3 sm:p-4">
//                     <button
//                       onClick={() => toggleProject(project.name)}
//                       className={`flex items-center justify-between w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 ${
//                         selectedProjects.includes(project.name)
//                           ? 'border-teal-500 bg-teal-50 text-teal-700'
//                           : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
//                       }`}
//                     >
//                       <div className="flex items-center space-x-3">
//                         <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${project.color} flex items-center justify-center text-white flex-shrink-0`}>
//                           {project.icon}
//                         </div>
//                         <div className="text-left">
//                           <div className="font-bold text-base sm:text-lg">{project.name}</div>
//                         </div>
//                       </div>
//                       {selectedProjects.includes(project.name) && (
//                         <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500 flex-shrink-0" />
//                       )}
//                     </button>
//                     <div className="mt-3 ml-2">
//                       <p className="text-sm text-gray-600 mb-2">{project.description}</p>
//                       <div className="flex flex-wrap gap-2">
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

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
//               <div className="text-center">
//                 <div className="text-xl sm:text-2xl font-bold text-orange-600">1</div>
//                 <div className="text-xs sm:text-sm text-gray-600">Active Cities</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl sm:text-2xl font-bold text-teal-600">4</div>
//                 <div className="text-xs sm:text-sm text-gray-600">Programs Running</div>
//               </div>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="relative">
//             <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//                   {selectedState} Operations
//                 </h3>
//                 <div className="bg-orange-100 text-orange-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto">
//                   {getVisibleLocations().length} Active Cities
//                 </div>
//               </div>

//               {/* Map Container */}
//               <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-4 sm:p-8 min-h-64 sm:min-h-96 overflow-hidden">
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
                  
//                   {/* Location markers */}
//                   {getVisibleLocations().map((location, index) => (
//                     <g key={location.name}>
//                       <circle 
//                         cx={location.lat} 
//                         cy={location.lng} 
//                         r="8" 
//                         fill="#00695C"
//                         className="animate-pulse drop-shadow-lg sm:r-10"
//                       />
//                       <circle 
//                         cx={location.lat} 
//                         cy={location.lng} 
//                         r="12" 
//                         fill="none"
//                         stroke="#00695C"
//                         strokeWidth="2"
//                         opacity="0.5"
//                         className="animate-ping sm:r-15"
//                       />
//                       <text 
//                         x={location.lat + 15} 
//                         y={location.lng + 5} 
//                         className="text-xs sm:text-sm font-bold fill-gray-800 drop-shadow-sm"
//                       >
//                         {location.name}
//                       </text>
//                       <text 
//                         x={location.lat + 15} 
//                         y={location.lng + 18} 
//                         className="text-xs fill-gray-600"
//                       >
//                         {location.activePrograms} programs
//                       </text>
//                     </g>
//                   ))}
                  
//                   {/* Legend */}
//                   <g transform="translate(10, 10)">
//                     <rect x="0" y="0" width="140" height="90" fill="white" stroke="#E0E0E0" rx="8" className="drop-shadow-md sm:width-160 sm:height-100" />
//                     <circle cx="15" cy="25" r="6" fill="#00695C" className="sm:cx-20 sm:cy-30 sm:r-8" />
//                     <text x="25" y="29" className="text-xs fill-gray-700 font-medium sm:x-35 sm:y-35">Active Cities</text>
//                     <rect x="12" y="35" width="15" height="10" fill="#FFC107" stroke="#FF8F00" className="sm:x-15 sm:y-45 sm:width-20 sm:height-15" />
//                     <text x="30" y="43" className="text-xs fill-gray-700 sm:x-40 sm:y-55">Maharashtra</text>
//                     <text x="12" y="58" className="text-xs fill-orange-600 font-bold sm:x-15 sm:y-75">Project Ankur</text>
//                     <text x="12" y="70" className="text-xs fill-teal-600 font-bold sm:x-15 sm:y-90">Project Aakaar</text>
//                   </g>
//                 </svg>
//               </div>

//               {/* Location Details */}
//               <div className="mt-6 space-y-3 max-h-48 overflow-y-auto">
//                 {getVisibleLocations().map((location) => (
//                   <div key={location.name} className="bg-gray-50 rounded-lg p-3 sm:p-4">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
//                       <div className="flex items-center space-x-2 sm:space-x-3">
//                         <div className="w-3 h-3 sm:w-4 sm:h-4 bg-teal-500 rounded-full flex-shrink-0"></div>
//                         <span className="font-bold text-gray-900 text-base sm:text-lg">{location.name}</span>
//                         <span className="text-xs sm:text-sm text-gray-500">Pop: {location.population}</span>
//                       </div>
//                       <div className="text-xs sm:text-sm font-medium text-orange-600 ml-5 sm:ml-0">
//                         {location.activePrograms} Active Programs
//                       </div>
//                     </div>
//                     <div className="flex flex-wrap gap-2 ml-5 sm:ml-7">
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

//             {/* Floating Back to Top Button */}
          
//           </div>
//         </div>

//         {/* Project Details Banner */}
//         <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8">
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:scale-105 transition-transform duration-200">
//             <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
//                 <Star className="w-5 h-5 sm:w-6 sm:h-6" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white">Project Ankur</h3>
//             </div>
//             <p className="text-orange-100 mb-4 text-sm sm:text-base">
//               "Catch them young" - Our early childhood development program focusing on foundational education, nutrition, and holistic child development.
//             </p>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
//               Learn More About Ankur
//             </button>
//           </div>

//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:scale-105 transition-transform duration-200">
//             <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
//                 <Target className="w-5 h-5 sm:w-6 sm:h-6" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white">Project Aakaar</h3>
//             </div>
//             <p className="text-orange-100 mb-4 text-sm sm:text-base">
//               Our comprehensive personality development course designed to build confidence, life skills, and character among children and youth.
//             </p>
//             <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
//               Learn More About Aakaar
//             </button>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
//           <h3 className="text-3xl font-bold text-white mb-4">Join Our Mission in Maharashtra</h3>
//           <p className="text-orange-100 text-lg mb-6">
//             Help us expand Project Ankur and Project Aakaar to reach more children across Mumbai, Pune, Thane, Navi Mumbai, and Solapur
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg">
//               Support Our Projects
//             </button>
//             <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200">
//               Become a Volunteer
//             </button>
//           </div>
//         </div>



//       </div>
//     </div>
//   );
// };

// export default WorkingAreas;




import React, { useState } from 'react';
import { MapPin, Users, Heart, BookOpen, Home, TreePine, Shield, Utensils, GraduationCap, Stethoscope, CheckCircle, ChevronDown, Star, Target } from 'lucide-react';

const WorkingAreas = () => {
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedProjects, setSelectedProjects] = useState(['Project Ankur', 'Project Aakaar']);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const states = ['Maharashtra'];
  
  const projects = [
    { 
      name: 'Project Ankur', 
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />, 
      color: 'bg-orange-500',
      description: 'Catch them young concept - Early childhood development and education',
      focus: ['Early Education', 'Child Development', 'Nutrition']
    },
    { 
      name: 'Project Aakaar', 
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />, 
      color: 'bg-teal-500',
      description: 'Personality Development Course by Ashwamedh Foundation',
      focus: ['Personality Development', 'Life Skills', 'Confidence Building']
    }
  ];

  const workingLocations = [
    { 
      name: 'Mumbai', 
      lat: 180, 
      lng: 160, 
      projects: ['Project Ankur', 'Project Aakaar'],
      population: '12.4M',
      activePrograms: 1
    },
    { 
      name: 'Navi Mumbai', 
      lat: 200, 
      lng: 180, 
      projects: ['Project Ankur', 'Project Aakaar'],
      population: '1.1M',
      activePrograms: 2
    },
    { 
      name: 'Thane', 
      lat: 160, 
      lng: 140, 
      projects: ['Project Ankur', 'Project Aakaar'],
      population: '1.8M',
      activePrograms: 1
    },
    { 
      name: 'Pune', 
      lat: 140, 
      lng: 220, 
      projects: ['Project Ankur', 'Project Aakaar'],
      population: '3.1M',
      activePrograms: 2
    },
    { 
      name: 'Solapur', 
      lat: 180, 
      lng: 260, 
      projects: ['Project Aakaar'],
      population: '950K',
      activePrograms: 2
    }
  ];

  const toggleProject = (project) => {
    setSelectedProjects(prev => 
      prev.includes(project) 
        ? prev.filter(item => item !== project)
        : [...prev, project]
    );
  };

  const getVisibleLocations = () => {
    return workingLocations.filter(location => 
      location.projects.some(project => selectedProjects.includes(project))
    );
  };

  const getTotalPrograms = () => {
    return getVisibleLocations().reduce((total, location) => total + location.activePrograms, 0);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-6 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Our Projects</h1>
          <p className="text-base sm:text-lg lg:text-xl text-orange-100 max-w-3xl">
            Transforming lives through Project Ankur and Project Aakaar across Maharashtra, focusing on early childhood development and personality enhancement programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Controls Panel */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg">
              Toggle the options to see our project locations and their areas of focus.
            </p>

            {/* State Selection */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
                Select States
              </h3>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  <span className="text-gray-700 font-medium">{selectedState}</span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                    {states.map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          setSelectedState(state);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-orange-50 hover:text-orange-600 transition-colors first:rounded-t-lg last:rounded-b-lg text-sm sm:text-base"
                      >
                        {state}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Project Selection */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 lg:mb-6 uppercase tracking-wide">
                Select Projects
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {projects.map((project) => (
                  <div key={project.name} className="border border-gray-200 rounded-lg p-2 sm:p-3 lg:p-4">
                    <button
                      onClick={() => toggleProject(project.name)}
                      className={`flex items-center justify-between w-full p-2 sm:p-3 lg:p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedProjects.includes(project.name)
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg ${project.color} flex items-center justify-center text-white flex-shrink-0`}>
                          {project.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-sm sm:text-base lg:text-lg">{project.name}</div>
                        </div>
                      </div>
                      {selectedProjects.includes(project.name) && (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-teal-500 flex-shrink-0" />
                      )}
                    </button>
                    <div className="mt-2 sm:mt-3 ml-1 sm:ml-2">
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.focus.map((area, index) => (
                          <span key={index} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full border border-orange-200">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">1</div>
                <div className="text-xs sm:text-sm text-gray-600">Active Cities</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">4</div>
                <div className="text-xs sm:text-sm text-gray-600">Programs Running</div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  {selectedState} Operations
                </h3>
                <div className="bg-orange-100 text-orange-600 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto">
                  {getVisibleLocations().length} Active Cities
                </div>
              </div>

              {/* Map Container */}
              <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-8 min-h-48 sm:min-h-64 lg:min-h-96 overflow-hidden">
                {/* Maharashtra Map SVG */}
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Maharashtra outline */}
                  <path
                    d="M50 80 L320 60 L350 90 L380 130 L370 200 L320 240 L280 270 L220 280 L160 270 L100 240 L60 200 L40 150 L45 120 Z"
                    fill="#FFC107"
                    stroke="#FF8F00"
                    strokeWidth="2"
                    className="drop-shadow-lg"
                  />
                  
                  {/* Location markers */}
                  {getVisibleLocations().map((location, index) => (
                    <g key={location.name}>
                      <circle 
                        cx={location.lat} 
                        cy={location.lng} 
                        r="6" 
                        fill="#00695C"
                        className="animate-pulse drop-shadow-lg sm:r-8 lg:r-10"
                      />
                      <circle 
                        cx={location.lat} 
                        cy={location.lng} 
                        r="10" 
                        fill="none"
                        stroke="#00695C"
                        strokeWidth="2"
                        opacity="0.5"
                        className="animate-ping sm:r-12 lg:r-15"
                      />
                      <text 
                        x={location.lat + 12} 
                        y={location.lng + 4} 
                        className="text-xs sm:text-sm font-bold fill-gray-800 drop-shadow-sm"
                      >
                        {location.name}
                      </text>
                      <text 
                        x={location.lat + 12} 
                        y={location.lng + 16} 
                        className="text-xs fill-gray-600"
                      >
                        {location.activePrograms} programs
                      </text>
                    </g>
                  ))}
                  
                  {/* Legend */}
                  <g transform="translate(8, 8)">
                    <rect x="0" y="0" width="120" height="80" fill="white" stroke="#E0E0E0" rx="6" className="drop-shadow-md sm:width-140 sm:height-90 lg:width-160 lg:height-100" />
                    <circle cx="12" cy="20" r="4" fill="#00695C" className="sm:cx-15 sm:cy-25 sm:r-6 lg:cx-20 lg:cy-30 lg:r-8" />
                    <text x="20" y="24" className="text-xs fill-gray-700 font-medium sm:x-25 sm:y-29 lg:x-35 lg:y-35">Active Cities</text>
                    <rect x="10" y="30" width="12" height="8" fill="#FFC107" stroke="#FF8F00" className="sm:x-12 sm:y-35 sm:width-15 sm:height-10 lg:x-15 lg:y-45 lg:width-20 lg:height-15" />
                    <text x="24" y="37" className="text-xs fill-gray-700 sm:x-30 sm:y-43 lg:x-40 lg:y-55">Maharashtra</text>
                    <text x="10" y="50" className="text-xs fill-orange-600 font-bold sm:x-12 sm:y-58 lg:x-15 lg:y-75">Project Ankur</text>
                    <text x="10" y="60" className="text-xs fill-teal-600 font-bold sm:x-12 sm:y-70 lg:x-15 lg:y-90">Project Aakaar</text>
                  </g>
                </svg>
              </div>

              {/* Location Details */}
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 max-h-40 sm:max-h-48 overflow-y-auto">
                {getVisibleLocations().map((location) => (
                  <div key={location.name} className="bg-gray-50 rounded-lg p-2 sm:p-3 lg:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-teal-500 rounded-full flex-shrink-0"></div>
                        <span className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">{location.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500">Pop: {location.population}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-orange-600 ml-4 sm:ml-0">
                        {location.activePrograms} Active Programs
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 ml-4 sm:ml-5 lg:ml-7">
                      {location.projects.filter(project => selectedProjects.includes(project)).map((project) => {
                        const projectConfig = projects.find(p => p.name === project);
                        return (
                          <div key={project} className={`flex items-center space-x-1 ${projectConfig?.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs`}>
                            {projectConfig?.icon}
                            <span className="font-medium">{project.replace('Project ', '')}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Banner */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Project Ankur</h3>
            </div>
            <p className="text-orange-100 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
              "Catch them young" - Our early childhood development program focusing on foundational education, nutrition, and holistic child development.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-xs sm:text-sm lg:text-base">
              Learn More About Ankur
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Project Aakaar</h3>
            </div>
            <p className="text-orange-100 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
              Our comprehensive personality development course designed to build confidence, life skills, and character among children and youth.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-xs sm:text-sm lg:text-base">
              Learn More About Aakaar
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Join Our Mission in Maharashtra</h3>
          <p className="text-orange-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
            Help us expand Project Ankur and Project Aakaar to reach more children across Mumbai, Pune, Thane, Navi Mumbai, and Solapur
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-orange-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base">
              Support Our Projects
            </button>
            <button className="bg-transparent border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 text-sm sm:text-base">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingAreas;