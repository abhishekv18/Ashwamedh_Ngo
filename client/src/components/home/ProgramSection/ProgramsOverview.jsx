


// import React from 'react';
// import { BookOpen, Heart, Users, Sprout, ArrowRight, CheckCircle, Target, Award, Globe, GraduationCap, UserCheck } from 'lucide-react';

// const ProgramsOverview = () => {
//   const mainPrograms = [
//     {
//       id: 'ankur',
//       title: 'Project Ankur',
//       subtitle: 'Seeds of Education - Building Strong Foundations',
//       description: 'Following the "catch them young" philosophy, Project Ankur focuses on strengthening educational foundations for students up to 7th standard. We address the critical gap where students reach 8th grade without basic reading and writing skills, ensuring every child has a solid academic foundation.',
//       image: '/public/images/logo/vecteezy_students-celebrating-successfully-finished-project_11615496.jpg',
//       icon: <BookOpen className="w-8 h-8" />,
//       color: 'from-[#FF5722] to-[#FF7043]',
//       bgColor: 'bg-gradient-to-br from-[#FFF3E0] to-[#FFF8F5]',
//       borderColor: 'border-[#FF5722]/20',
//       targetGroup: 'Students up to 7th Standard',
//       stats: [
//         { number: '50K+', label: 'Students Educated' },
//         { number: '200+', label: 'Schools Supported' },
//         { number: '1000+', label: 'Teachers Trained' }
//       ],
//       features: [
//         'English Reading & Writing Skills',
//         'Mathematics Foundation',
//         'Core Subject Strengthening',
//         'School & NGO Partnerships',
//         'Early Intervention Focus',
//         'Dropout Prevention'
//       ],
//       methodology: 'Partnership-based approach with schools, NGOs, and local bodies to ensure comprehensive coverage and sustainable impact.'
//     },
//     {
//       id: 'aakaar',
//       title: 'Project Aakaar',
//       subtitle: 'Shaping Personalities - Certificate Course Program',
//       description: 'A comprehensive Personality Development Certificate Course designed for students in 8th to 10th standard. Project Aakaar focuses on holistic development through value education, communication skills, and essential life skills that prepare students for future challenges.',
//       image: '/public/images/logo/vecteezy_group-of-hands-holding-together_5380829.JPG',
//       icon: <GraduationCap className="w-8 h-8" />,
//       color: 'from-[#00695C] to-[#26A69A]',
//       bgColor: 'bg-gradient-to-br from-[#E0F2F1] to-[#F0F8F7]',
//       borderColor: 'border-[#00695C]/20',
//       targetGroup: '8th to 10th Standard Students',
//       stats: [
//         { number: '30K+', label: 'Students Trained' },
//         { number: '15K+', label: 'Certificates Issued' },
//         { number: '100+', label: 'Schools Reached' }
//       ],
//       features: [
//         'Value Education Focus',
//         'Communication Skills Development',
//         'Time Management Training',
//         'Stress Management Techniques',
//         'Yoga & Wellness',
//         'Certificate Course Completion'
//       ],
//       methodology: 'Structured curriculum combining theoretical knowledge with practical application to ensure comprehensive personality development.'
//     }
//   ];

//   const focusAreas = [
//     {
//       icon: <BookOpen className="w-6 h-6" />,
//       title: 'Foundation Education',
//       description: 'Building strong academic foundations through focused learning',
//       color: 'text-[#FF5722]',
//       bgColor: 'bg-[#FF5722]/30',
//       gradient: "from-orange-100 to-orange-200"
//     },
//     {
//       icon: <GraduationCap className="w-6 h-6" />,
//       title: 'Personality Development',
//       description: 'Comprehensive skill development for holistic growth',
//       color: 'text-[#00695C]',
//       bgColor: 'bg-[#00695C]/30',
//         gradient: "from-teal-100 to-teal-200"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: 'Value Education',
//       description: 'Instilling strong moral and ethical values',
//     color: 'text-[#00695C]',
//       bgColor: 'bg-[#00695C]/30',
//         gradient: "from-teal-100 to-teal-200"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: 'Holistic Wellness',
//       description: 'Physical and mental well-being through yoga and stress management',
//        color: 'text-[#FF5722]',
//       bgColor: 'bg-[#FF5722]/30',
//         gradient: "from-orange-100 to-orange-200"
//     }
//   ];

//   const impactMetrics = [
//     { number: '100K+', label: 'Lives Impacted', icon: <Users className="w-5 h-5" />, color: 'text-[#FF5722]' },
//     { number: '300+', label: 'Partner Schools', icon: <Globe className="w-5 h-5" />, color: 'text-[#00695C]' },
//     { number: '15+', label: 'Years of Service', icon: <Award className="w-5 h-5" />, color: 'text-[#00695C]' },
//     { number: '1000+', label: 'Active Volunteers', icon: <Target className="w-5 h-5" />, color: 'text-[#FF5722]' }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-orange-100 via-white to-orange-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] rounded-full text-sm font-semibold text-white mb-8 shadow-lg">
//             <Target className="w-4 h-4 mr-2" />
//             Our Impact Programs
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold text-[#212121] mb-6">
//             Transforming Lives Through
//             <span className="block text-[#FF5722] mt-2">Educational Excellence</span>
//           </h2>
//           <p className="text-xl text-[#616161] max-w-4xl mx-auto leading-relaxed">
//             Our targeted programs address critical educational gaps and personality development needs, 
//             creating sustainable change through strategic interventions and community partnerships.
//           </p>
//         </div>

//         {/* Impact Metrics */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
//           {impactMetrics.map((metric, index) => (
//             <div key={index} className="bg-[#FFFFFF] rounded-2xl p-8 shadow-lg border border-[#E0E0E0] text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//               <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFE0B2] rounded-xl mb-4">
//                 <div className={metric.color}>
//                   {metric.icon}
//                 </div>
//               </div>
//               <div className="text-3xl font-bold text-[#212121] mb-2">{metric.number}</div>
//               <div className="text-[#757575] font-medium">{metric.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Main Programs */}
//         <div className="space-y-20 mb-20">
//           {mainPrograms.map((program, index) => (
//             <div key={program.id} className={`${program.bgColor} rounded-3xl overflow-hidden border-2 ${program.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300`}>
//               <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
//                 {/* Content Side */}
//                 <div className="lg:w-1/2 p-8 lg:p-12">
//                   <div className="mb-6">
//                     <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl mb-4 shadow-lg`}>
//                       <div className="text-white">
//                         {program.icon}
//                       </div>
//                     </div>
//                     <div className="mb-4">
//                       <h3 className="text-2xl md:text-3xl font-bold text-[#212121] mb-2">
//                         {program.title}
//                       </h3>
//                       <p className="text-lg text-[#FF5722] font-semibold mb-2">
//                         {program.subtitle}
//                       </p>
//                       <div className="inline-flex items-center px-4 py-2 bg-[#FF5722]/10 rounded-full text-sm font-medium text-[#FF5722] mb-3">
//                         <UserCheck className="w-4 h-4 mr-2" />
//                         Target: {program.targetGroup}
//                       </div>
//                     </div>
//                     <p className="text-base text-[#424242] leading-relaxed mb-6">
//                       {program.description}
//                     </p>
//                   </div>

//                   {/* Key Features */}
//                   <div className="mb-6">
//                     <h4 className="text-lg font-bold text-[#212121] mb-4">Key Features & Focus Areas</h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {program.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center space-x-3 bg-[#FFFFFF]/60 rounded-lg p-3">
//                           <CheckCircle className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
//                           <span className="text-[#424242] font-medium text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Methodology */}
//                   <div className="mb-6 p-4 bg-[#FFFFFF]/80 rounded-xl border border-[#E0E0E0]">
//                     <h4 className="text-base font-bold text-[#212121] mb-2">Our Approach</h4>
//                     <p className="text-[#616161] leading-relaxed text-sm">{program.methodology}</p>
//                   </div>

//                   {/* CTA Button */}
//                   <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${program.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105`}>
//                     Learn More About {program.title}
//                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>

//                 {/* Image Side */}
//                 <div className="lg:w-1/2 relative">
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/30 to-transparent z-10"></div>
//                   <img 
//                     src={program.image} 
//                     alt={program.title}
//                     className="w-full h-full object-cover min-h-[300px] lg:min-h-[500px]"
//                   />
                  
//                   {/* Floating Achievement Card */}
//                   <div className="absolute bottom-6 left-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-sm rounded-xl p-4 shadow-xl z-20 border border-[#E0E0E0]">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-xl font-bold text-[#212121]">
//                           {program.stats[0].number}
//                         </div>
//                         <div className="text-[#757575] font-medium text-sm">
//                           {program.stats[0].label}
//                         </div>
//                       </div>
//                       <div className={`w-10 h-10 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center shadow-lg`}>
//                         <div className="text-white">
//                           <div className="w-5 h-5 text-center">
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
//         <div className="mb-20 bg-gradient-to-t from-white to-orange-50">
//           <div className="text-center mb-16 bg-gradient-to-t from-orange-50 to-white">
//             <h3 className="text-3xl md:text-4xl font-bold text-[#212121] mb-6">
//               Our Core Focus Areas
//             </h3>
//             <p className="text-lg text-[#616161] max-w-3xl mx-auto">
//               We work across multiple educational domains to ensure comprehensive development and create lasting impact in students' lives.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {focusAreas.map((area, index) => (
//               <div key={index} className="group">
//                 <div className={`bg-gradient-to-br ${area.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 border border-[#E0E0E0] text-center h-full`}>
//                   <div className={`inline-flex items-center justify-center w-16 h-16 ${area.bgColor} rounded-2xl mb-6`}>
//                     <div className={area.color}>
//                       {area.icon}
//                     </div>
//                   </div>
//                   <h4 className="text-xl font-bold text-[#212121] mb-4">
//                     {area.title}
//                   </h4>
//                   <p className="text-[#616161] leading-relaxed">
//                     {area.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
        
       
//         <div className="bg-gradient-to-br from-[#212121] to-[#424242] rounded-3xl p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
//           <div className="absolute inset-0 bg-[url('/public/images/logo/church-of-the-king-j9jZSqfH5YI-unsplash.jpg')] bg-cover bg-center opacity-20"></div>
//           <div className="relative z-10 max-w-4xl mx-auto">
//             <div className="inline-flex items-center px-6 py-3 bg-[#FF5722]/20 rounded-full text-sm font-semibold text-[#FF8A65] mb-6">
//               <Heart className="w-4 h-4 mr-2" />
//               Join Our Mission
//             </div>
//             <h3 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Shape Young Minds?
//             </h3>
//             <p className="text-xl text-[#BDBDBD] mb-8 leading-relaxed">
//               Partner with us in building stronger educational foundations and developing confident personalities. 
//               Every contribution creates a ripple effect of positive change.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 group hover:scale-105">
//                 Support Our Programs
//                 <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
//               </button>
//               <button className="inline-flex items-center px-8 py-4 bg-[#FFFFFF]/10 backdrop-blur-sm border-2 border-[#FFFFFF]/20 text-white font-semibold rounded-2xl hover:bg-[#FFFFFF]/20 transition-all duration-300 group">
//                 Become a Partner School
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsOverview;



import React from 'react';
import { BookOpen, Heart, Users, Sprout, ArrowRight, CheckCircle, Target, Award, Globe, GraduationCap, UserCheck } from 'lucide-react';

const ProgramsOverview = () => {
  const mainPrograms = [
    {
      id: 'ankur',
      title: 'Project Ankur',
      subtitle: 'Seeds of Education - Building Strong Foundations',
      description: 'Following the "catch them young" philosophy, Project Ankur focuses on strengthening educational foundations for students up to 7th standard. We address the critical gap where students reach 8th grade without basic reading and writing skills, ensuring every child has a solid academic foundation.',
      image: '/public/images/logo/vecteezy_students-celebrating-successfully-finished-project_11615496.jpg',
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-[#FF5722] to-[#FF7043]',
      bgColor: 'bg-gradient-to-br from-[#FFF3E0] to-[#FFF8F5]',
      borderColor: 'border-[#FF5722]/20',
      targetGroup: 'Students up to 7th Standard',
      stats: [
        { number: '50K+', label: 'Students Educated' },
        { number: '200+', label: 'Schools Supported' },
        { number: '1000+', label: 'Teachers Trained' }
      ],
      features: [
        'English Reading & Writing Skills',
        'Mathematics Foundation',
        'Core Subject Strengthening',
        'School & NGO Partnerships',
        'Early Intervention Focus',
        'Dropout Prevention'
      ],
      methodology: 'Partnership-based approach with schools, NGOs, and local bodies to ensure comprehensive coverage and sustainable impact.'
    },
    {
      id: 'aakaar',
      title: 'Project Aakaar',
      subtitle: 'Shaping Personalities - Certificate Course Program',
      description: 'A comprehensive Personality Development Certificate Course designed for students in 8th to 10th standard. Project Aakaar focuses on holistic development through value education, communication skills, and essential life skills that prepare students for future challenges.',
      image: '/public/images/logo/vecteezy_group-of-hands-holding-together_5380829.JPG',
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-[#00695C] to-[#26A69A]',
      bgColor: 'bg-gradient-to-br from-[#E0F2F1] to-[#F0F8F7]',
      borderColor: 'border-[#00695C]/20',
      targetGroup: '8th to 10th Standard Students',
      stats: [
        { number: '30K+', label: 'Students Trained' },
        { number: '15K+', label: 'Certificates Issued' },
        { number: '100+', label: 'Schools Reached' }
      ],
      features: [
        'Value Education Focus',
        'Communication Skills Development',
        'Time Management Training',
        'Stress Management Techniques',
        'Yoga & Wellness',
        'Certificate Course Completion'
      ],
      methodology: 'Structured curriculum combining theoretical knowledge with practical application to ensure comprehensive personality development.'
    }
  ];

  const focusAreas = [
    {
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Foundation Education',
      description: 'Building strong academic foundations through focused learning',
      color: 'text-[#FF5722]',
      bgColor: 'bg-[#FF5722]/30',
      gradient: "from-orange-100 to-orange-200"
    },
    {
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Personality Development',
      description: 'Comprehensive skill development for holistic growth',
      color: 'text-[#00695C]',
      bgColor: 'bg-[#00695C]/30',
        gradient: "from-teal-100 to-teal-200"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Value Education',
      description: 'Instilling strong moral and ethical values',
    color: 'text-[#00695C]',
      bgColor: 'bg-[#00695C]/30',
        gradient: "from-teal-100 to-teal-200"
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Holistic Wellness',
      description: 'Physical and mental well-being through yoga and stress management',
       color: 'text-[#FF5722]',
      bgColor: 'bg-[#FF5722]/30',
        gradient: "from-orange-100 to-orange-200"
    }
  ];

  const impactMetrics = [
    { number: '100K+', label: 'Lives Impacted', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'text-[#FF5722]' },
    { number: '300+', label: 'Partner Schools', icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'text-[#00695C]' },
    { number: '15+', label: 'Years of Service', icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'text-[#00695C]' },
    { number: '1000+', label: 'Active Volunteers', icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'text-[#FF5722]' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-100 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] rounded-full text-xs sm:text-sm font-semibold text-white mb-6 sm:mb-8 shadow-lg">
            <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Our Impact Programs
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#212121] mb-4 sm:mb-6 px-2">
            Transforming Lives Through
            <span className="block text-[#FF5722] mt-1 sm:mt-2">Educational Excellence</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#616161] max-w-4xl mx-auto leading-relaxed px-4">
            Our targeted programs address critical educational gaps and personality development needs, 
            creating sustainable change through strategic interventions and community partnerships.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-[#FFFFFF] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#E0E0E0] text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#FFE0B2] rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                <div className={metric.color}>
                  {metric.icon}
                </div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#212121] mb-1 sm:mb-2">{metric.number}</div>
              <div className="text-xs sm:text-sm lg:text-base text-[#757575] font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Main Programs */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20 mb-12 sm:mb-16 lg:mb-20">
          {mainPrograms.map((program, index) => (
            <div key={program.id} className={`${program.bgColor} rounded-2xl sm:rounded-3xl overflow-hidden border-2 ${program.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300`}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Side */}
                <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12">
                  <div className="mb-4 sm:mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${program.color} rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg`}>
                      <div className="text-white">
                        {program.icon}
                      </div>
                    </div>
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#212121] mb-1 sm:mb-2">
                        {program.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#FF5722] font-semibold mb-2">
                        {program.subtitle}
                      </p>
                      <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF5722]/10 rounded-full text-xs sm:text-sm font-medium text-[#FF5722] mb-2 sm:mb-3">
                        <UserCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Target: {program.targetGroup}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-[#424242] leading-relaxed mb-4 sm:mb-6">
                      {program.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-bold text-[#212121] mb-3 sm:mb-4">Key Features & Focus Areas</h4>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 sm:space-x-3 bg-[#FFFFFF]/60 rounded-lg p-2 sm:p-3">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#4CAF50] flex-shrink-0" />
                          <span className="text-[#424242] font-medium text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#FFFFFF]/80 rounded-xl border border-[#E0E0E0]">
                    <h4 className="text-sm sm:text-base font-bold text-[#212121] mb-2">Our Approach</h4>
                    <p className="text-[#616161] leading-relaxed text-xs sm:text-sm">{program.methodology}</p>
                  </div>

                  {/* CTA Button */}
                  <button className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${program.color} text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 group hover:scale-105 text-sm sm:text-base`}>
                    <span className="hidden sm:inline">Learn More About {program.title}</span>
                    <span className="sm:hidden">Learn More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2 relative order-first lg:order-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/30 to-transparent z-10"></div>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover min-h-[200px] sm:min-h-[250px] lg:min-h-[400px] xl:min-h-[500px]"
                  />
                  
                  {/* Floating Achievement Card */}
                  <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 bg-[#FFFFFF]/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl z-20 border border-[#E0E0E0]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-[#212121]">
                          {program.stats[0].number}
                        </div>
                        <div className="text-[#757575] font-medium text-xs sm:text-sm">
                          {program.stats[0].label}
                        </div>
                      </div>
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <div className="text-white">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 text-center">
                            {program.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        {/* <div className="mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-t from-white to-orange-50">
          <div className="text-center mb-12 sm:mb-16 bg-gradient-to-t from-orange-50 to-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#212121] mb-4 sm:mb-6 px-2">
              Our Core Focus Areas
            </h3>
            <p className="text-base sm:text-lg text-[#616161] max-w-3xl mx-auto px-4">
              We work across multiple educational domains to ensure comprehensive development and create lasting impact in students' lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${area.gradient} rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 border border-[#E0E0E0] text-center h-full`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${area.bgColor} rounded-xl sm:rounded-2xl mb-4 sm:mb-6`}>
                    <div className={area.color}>
                      {area.icon}
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#212121] mb-3 sm:mb-4">
                    {area.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-[#212121] to-[#424242] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('/public/images/logo/church-of-the-king-j9jZSqfH5YI-unsplash.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#FF5722]/20 rounded-full text-xs sm:text-sm font-semibold text-[#FF8A65] mb-4 sm:mb-6">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Join Our Mission
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">
              Ready to Shape Young Minds?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-[#BDBDBD] mb-6 sm:mb-8 leading-relaxed px-2">
              Partner with us in building stronger educational foundations and developing confident personalities. 
              Every contribution creates a ripple effect of positive change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 group hover:scale-105 text-sm sm:text-base">
                <span className="hidden sm:inline">Support Our Programs</span>
                <span className="sm:hidden">Support Programs</span>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#FFFFFF]/10 backdrop-blur-sm border-2 border-[#FFFFFF]/20 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-[#FFFFFF]/20 transition-all duration-300 group text-sm sm:text-base">
                <span className="hidden sm:inline">Become a Partner School</span>
                <span className="sm:hidden">Partner School</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;