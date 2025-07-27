

// import React, { use, useEffect, useState } from 'react';
// import { 
//   Heart, 
//   Users, 
//   Target, 
//   Award, 
//   BookOpen, 
//   Stethoscope, 
//   Calendar,
//   MapPin,
//   FileText,
//   Newspaper,
//   Eye,
//   Compass,
//   UserCheck
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const AboutUs = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//       setIsVisible(true);
//     }, []);
//   const teamMembers = [
//     'Deepak Doddamani',//
//     'Kiran Jitendra Patel ', 
//     'Mohammed d Shakil Ansari',
//     'Abdul Hakim Ansari',//
//     'Jitendra Patel',//
//     'Praful Rane',//
//     'Govind Dodamani',//
//     'Monika Singh',//
//     'Sneha Sharma'//
//   ];

//   const workStatements = [
//     "To run, conduct, maintain and manage knowledge centres.",
//     "To give Educational help to the poor & deserving students.",
//     "To give Medical help to the poor and deserving people.",
//     "To arrange and organize cultural programs, sports competitions.",
//     "To run, conduct, maintain and manage Gymnasium, Sports Club, Library, and Reading Room etc.",
//     "To organize social activities and programs for the benefit of General Public.",
//     "To create Social, Cultural, Educational awakening amongst the General Public.",
//     "To work for the welfare and development of General Public through various programs, lectures, demonstration and other activities.",
//     "To implement the Scheme of Government, Semi Government and Municipal Corporation subject to their conditions.",
//     "To arrange seminar, workshops, events for overall personality development of children."
//   ];

//   const legalInfo = [
//     {
//       title: "Charitable Society",
//       details: "Registered under Society Registration Act 1860, Article 21",
//       number: "Maha/190/2013/Thane"
//     },
//     {
//       title: "Charitable Trust", 
//       details: "Registered under Bombay Public Trust Act 1950, Article 29",
//       number: "F/27519/Thane"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative py-12 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
//           <div className="absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16 bg-teal-400 bg-opacity-20 rounded-full animate-pulse delay-700"></div>
//           <div className="absolute bottom-20 left-1/4 w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
//           <div className="absolute bottom-40 right-1/3 w-6 h-6 md:w-8 md:h-8 bg-teal-400 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
//         </div>
        
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img 
//             src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" 
//             alt="Children Education Background"
//             className="w-full h-full object-cover opacity-50"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="transform transition-all duration-1000 ease-out">
//             <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
//               About <span className="text-orange-200">Ashwamedh</span> Foundation
//             </h1>
//             <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-8 md:mb-12">
//               Empowering underprivileged children and youth through quality education, healthcare, and livelihood programs since 2013
//             </p>
//           </div>
          
//           <div className="flex justify-center">
//             <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-6 md:p-8 flex items-center space-x-4 md:space-x-6 shadow-2xl border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
//               <Heart className="h-8 w-8 md:h-10 md:w-10 text-orange-200 animate-pulse" />
//               <div className="text-left">
//                 <span className="text-xl md:text-2xl font-bold block">15+ Years</span>
//                 <span className="text-orange-200 opacity-90">of Impact</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
      
//       </section>

//       {/* History Section */}
//       <section className="py-12 md:py-20 bg-gradient-to-br from-white via-orange-50 to-teal-50 relative">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-teal-50 opacity-30"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
//             <div className="transform hover:translate-x-2 transition-transform duration-500">
//               <div className="flex items-center mb-6 md:mb-8">
//                 <div className="bg-gradient-to-br from-orange-100 to-teal-50 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 shadow-lg">
//                   <Calendar className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
//                 </div>
//                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our History</h2>
//               </div>
              
//               <div className="space-y-6 md:space-y-8">
//                 <div className="bg-gradient-to-r from-orange-50 via-cream to-teal-50 p-4 md:p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm">
//                   <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//                     Ashwamedh Foundation is an NGO registered as Society and Trust established in Virar, Maharashtra. 
//                     Being associated with Education field from the year 2003, our Founder Mr. Deepak Doddamani has 
//                     closely witnessed the difficulties through which a student from economically backward conditions passes through.
//                   </p>
//                 </div>
                
//                 <div className="bg-gradient-to-r from-teal-50 via-cream to-orange-50 p-4 md:p-6 rounded-2xl border-l-4 border-teal-500 shadow-sm">
//                   <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//                     So in the year 2013, he founded Ashwamedh Foundation with some of his like-minded friends. 
//                     From the inception of Ashwamedh Foundation, it has worked in the Child Development and Children 
//                     Education for underprivileged sector of Society.
//                   </p>
//                 </div>
                
//                 <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-teal-50 p-6 md:p-8 rounded-3xl shadow-lg border border-orange-200">
//                   <div className="flex items-start">
//                     <div className="bg-gradient-to-br from-orange-500 to-teal-600 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0 shadow-lg">
//                       <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-gray-800 font-semibold text-base md:text-lg italic">
//                         "Every child deserves access to quality education, regardless of their economic background."
//                       </p>
//                       <p className="text-teal-600 mt-2 md:mt-3 font-medium">- Deepak Doddamani, Founder</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="relative mt-8 lg:mt-0">
//               <div className="relative group bg-gradient-to-br from-orange-100 via-orange-100 to-teal-100 rounded-3xl p-6 md:p-12 h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
//                 <img 
//                   src="/public/images/logo/1740195950066.jpg" 
//                   alt="Deepak Doddamani - Founder"
//                   className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-3xl transition-opacity duration-500 group-hover:opacity-70"
//                 />

//                 {/* Floating Elements */}
//                 <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-teal-400 bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
//                   <Heart className="h-6 w-6 md:h-8 md:w-8 text-teal-700" />
//                 </div>
                
//                 <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-400 to-orange-400 bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
//                   <Users className="h-8 w-8 md:h-10 md:w-10 text-orange-700" />
//                 </div>

//                 {/* Main Card */}
//                 <div className="relative z-10 flex items-center justify-center h-full">
//                   <div className="text-center bg-white bg-opacity-95 rounded-3xl p-6 md:p-8 backdrop-blur-lg shadow-2xl max-w-xs md:max-w-sm
//                                   opacity-0 transform translate-y-6 scale-95
//                                   transition-all duration-700
//                                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 border border-orange-200">
//                     <div className="bg-gradient-to-br from-orange-500 to-teal-600 rounded-full p-4 md:p-6 mb-4 md:mb-6 mx-auto w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl">
//                       <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-white" />
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Since 2013</h3>
//                     <p className="text-gray-600 font-medium text-base md:text-lg">Founded by Deepak Doddamani</p>
//                     <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">Dedicated to child education and development</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Foundation Section */}
//       <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-teal-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Foundation</h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Guided by our vision, mission, and philosophy to create lasting change in the lives of underprivileged children
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 md:gap-8">
//             {/* Vision Card */}
//             {/* <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200">
//               <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Eye className="h-8 w-8 md:h-10 md:w-10 text-teal-600" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Vision</h3>
//               <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg">
//                 To empower the underprivileged children & youth through quality education, healthcare, and livelihood programs.
//               </p>
//             </div> */}
// {/* Vision Card */}
// <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200">
//   <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
//     <Eye className="h-8 w-8 md:h-10 md:w-10 text-orange-500" />
//   </div>
//   <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Vision</h3>
//   <div className="text-gray-700 leading-relaxed space-y-2 md:space-y-3 text-base md:text-lg">
//     <p>• Empower underprivileged children & youth through education and support systems</p>
//     <p>• Build a society where every child has equal access to opportunities</p>
//     <p>• Eliminate barriers to education, healthcare, and livelihood for marginalized communities</p>
//     <p>• Promote dignity, inclusion, and sustainable development</p>
//   </div>
// </div>

//             {/* Mission Card */}
//             <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
//               <div  className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Target className="h-8 w-8 md:h-10 md:w-10 text-teal-500" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Mission</h3>
//               <div className="text-gray-700 leading-relaxed space-y-2 md:space-y-3 text-base md:text-lg">
//                 <p>• Ensure quality education for underprivileged children</p>
//                 <p>• Impart knowledge and values through well-designed programs</p>
//                 <p>• Bridge gaps through art & cultural activities</p>
//                 <p>• Create awareness about slum & street children</p>
//                 <p>• Ensure access to quality healthcare for all</p>
//               </div>
//             </div>

//             {/* Philosophy Card */}
//             {/* <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
//               <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-100 via-orange-100 to-teal-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Compass className="h-8 w-8 md:h-10 md:w-10 text-teal-600" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Philosophy</h3>
//               <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg">
//                 Social Justice, Equality and Empowerment can be achieved through educating, agitating & organizing the Underprivileged.
//               </p>
//             </div> */}
//             {/* Philosophy Card */}
// <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
//   <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
//     <Compass className="h-8 w-8 md:h-10 md:w-10 text-orange-500" />
//   </div>
//   <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Philosophy</h3>
//   <div className="text-gray-700 leading-relaxed space-y-2 md:space-y-3 text-base md:text-lg">
//     <p>• Social Justice, Equality, and Empowerment are the foundation of progress</p>
//     <p>• Education is the most powerful tool for societal transformation</p>
//     <p>• Real change comes by educating, agitating, and organizing communities</p>
//     <p>• Compassion and dignity are central to every action we take</p>
//   </div>
// </div>

//           </div>
//         </div>
//       </section>

//       {/* Legal Status Section */}
//       <section className="py-12 md:py-20 bg-gradient-to-br from-white via-cream to-teal-50 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300695C' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
//           <div className="text-center mb-12 md:mb-16">
//             <div className="flex items-center justify-center mb-4 md:mb-6">
//               <div className="bg-gradient-to-br mt-1 from-teal-100 to-orange-100 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 shadow-lg">
//                 <FileText className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
//               </div>
//               <h2 className="text-3xl md:text-5xl mt-1 font-bold text-gray-900">Legal Status</h2>
//             </div>
//             <p className="text-lg md:text-xl text-gray-600">Officially registered and recognized organization</p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
//             <div className="lg:col-span-2">
//               <div className="grid md:grid-cols-2 gap-6 md:gap-8">
//                 {legalInfo.map((info, index) => (
//                   <div key={index} className="group bg-gradient-to-br from-orange-50 via-cream to-teal-50 rounded-3xl p-6 md:p-10 border-2 border-orange-200 hover:shadow-xl hover:border-teal-300 transition-all duration-500 transform hover:-translate-y-1">
//                     <div className="flex items-center mb-4 md:mb-6">
//                       <div className="bg-gradient-to-br from-teal-500 to-orange-500 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                         <Award className="h-5 w-5 md:h-6 md:w-6 text-white" />
//                       </div>
//                       <h3 className="text-xl md:text-2xl font-bold text-gray-900">{info.title}</h3>
//                     </div>
//                     <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">{info.details}</p>
//                     <div className="bg-white rounded-2xl p-3 md:p-4 border-2 border-teal-200 shadow-inner">
//                       <p className="text-teal-700 font-bold text-sm md:text-base">Registration Number: {info.number}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-6 md:space-y-8">
//               <div className="bg-gradient-to-br from-gray-100 via-orange-50 to-teal-50 rounded-3xl p-4 md:p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-200">
//                 <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Registration Documents</h4>
//                 <div className="space-y-4 md:space-y-6">
//                   <div className="bg-white rounded-2xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
//                     <img 
//                       src="/public/images/logo/certificate-2.jpg" 
//                       alt="Society Registration Certificate"
//                       className="w-full h-32 md:h-36 object-cover rounded-xl"
//                     />
//                     <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3 text-center font-medium">Society Registration Certificate</p>
//                   </div>
//                   <div className="bg-white rounded-2xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-teal-100">
//                     <img 
//                       src="/public/images/logo/society-2.jpg" 
//                       alt="Trust Registration Certificate"
//                       className="w-full h-32 md:h-36 object-cover rounded-xl"
//                     />
//                     <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3 text-center font-medium">Trust Registration Certificate</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Statements Section */}
//       <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-orange-50 via-cream to-teal-50 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("/public/images/logo/vecteezy_ai-generated-eight-girls-from-nepal-and-their-mothers-smiling_37279696.jpeg")`,
//           }}></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Work Statements</h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive approach to community development and empowerment</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 md:gap-8">
//             {workStatements.map((statement, index) => (
//               <div key={index} className={`group bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:bg-opacity-100 transition-all duration-500 transform hover:-translate-y-1 ${
//                 index % 2 === 0 ? 'border-l-4 border-orange-500' : 'border-l-4 border-teal-500'
//               }`}>
//                 <div className="flex items-start">
//                   <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-4 md:mr-6 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
//                     index % 2 === 0 
//                       ? 'bg-gradient-to-br from-orange-400 to-orange-600' 
//                       : 'bg-gradient-to-br from-teal-500 to-teal-700'
//                   }`}>
//                     <span className="text-white font-bold text-base md:text-lg">{index + 1}</span>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-1">{statement}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-12 md:py-20 bg-gradient-to-br from-white via-cream to-teal-50 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="/images/hero/community-work.jpg" 
//             alt="Community Work Background"
//             className="w-full h-full object-cover opacity-5"
//           />
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-orange-50 to-white">
//           <div className="text-center mb-12 md:mb-16">
//             <div className="flex items-center justify-center mb-4 md:mb-6">
//               <div className="bg-gradient-to-br from-teal-200 to-orange-200 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 shadow-lg">
//                 <Users className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
//               </div>
//               <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Team</h2>
//             </div>
//             <p className="text-lg md:text-xl text-gray-600">Dedicated individuals working together for a common cause</p>
//           </div>

//           {/* Team Photo */}
//           <div className="mb-12 md:mb-16">
//             <div className="max-w-5xl mx-auto">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-orange-200">
//                 <img 
//                   src="/public/images/logo/AF Team pic.jpg" 
//                   alt="Ashwamedh Foundation Team Group Photo"
//                   className="w-full h-64 md:h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Our Dedicated Team</h3>
//                   <p className="text-orange-200 text-base md:text-lg">Together we make a difference in children's lives</p>
//                 </div>
                
//                 {/* Heart Icon */}
//                 <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-br from-teal-500 to-orange-500 bg-opacity-80 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-lg">
//                   <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Team Members */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="group bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 text-center hover:shadow-xl hover:bg-opacity-100 transition-all duration-500 border border-orange-200 transform hover:-translate-y-2">
//                 <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 ${
//                   index === 0 
//                     ? 'bg-gradient-to-br from-orange-400 to-teal-600' 
//                     : index % 2 === 0 
//                       ? 'bg-gradient-to-br from-teal-400 to-teal-600' 
//                       : 'bg-gradient-to-br from-orange-400 to-orange-600'
//                 }`}>
//                   <UserCheck className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white" />
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-xs md:text-sm leading-tight mb-1 md:mb-2">{member}</h3>
//                 {index === 0 && <p className="text-xs text-white font-bold bg-gradient-to-r from-orange-500 to-teal-600 px-2 py-1 md:px-3 md:py-1 rounded-full inline-block">Founder</p>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* News & PR */}
//       <section className="py-12 md:py-20 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 hidden md:block">
//           <div className="absolute top-8 left-8 md:top-10 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
//           <div className="absolute bottom-16 right-16 md:bottom-20 md:right-20 w-20 h-20 md:w-24 md:h-24 bg-orange-400 bg-opacity-20 rounded-full animate-pulse delay-700"></div>
//           <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex items-center justify-center mb-6 md:mb-8">
//             <div className="bg-white bg-opacity-20 p-3 md:p-4 rounded-2xl mr-3 md:mr-4 shadow-lg">
//               <Newspaper className="h-6 w-6 md:h-8 md:w-8 text-orange-200" />
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">News & Recognition</h2>
//           </div>
//           <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-500">
//             <p className="text-base md:text-xl leading-relaxed">
//               Our work has been recognized by media outlets. Marathi Newspaper Loksatta covered our event in Malvan 
//               in their Sawantwadi supplement of 29th January 2014, highlighting our commitment to community development.
//             </p>
//           </div>
//         </div>
//       </section>



//       {/* Call to Action */}
//       <section className="py-12 md:py-20 relative overflow-hidden text-white">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0 opacity-60">
//           <img 
//             src="/public/images/logo/gettyimages-535555239-612x612.jpg"
//             alt="Background"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/90 to-[#004D40]/90"></div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Join Our Mission</h2>
//           <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
//             Together, we can create a world where every child has access to quality education and healthcare,
//             regardless of their background.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
//             <Link to='/get-involved/donate'>
//             <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 md:py-5 md:px-10 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
//               Support Our Cause
//             </button>
//             </Link>
            
//             <Link to='/get-involved/volunteer'>
//              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 md:py-5 md:px-10 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
//               Become a Volunteer
//             </button>
//             </Link>
           
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  Stethoscope, 
  Calendar,
  MapPin,
  FileText,
  Newspaper,
  Eye,
  Compass,
  UserCheck,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openDocumentModal = (document) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  const closeDocumentModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  // const teamMembers = [
  //   'Deepak Doddamani',
  //   'Kiran Jitendra Patel', 
  //   'Mohammed d Shakil Ansari',
  //   'Abdul Hakim Ansari',
  //   'Jitendra Patel',
  //   'Praful Rane',
  //   'Govind Dodamani',
  //   'Monika Singh',
  //   'Sneha Sharma'
  // ];

  const workStatements = [
    "To run, conduct, maintain and manage knowledge centres.",
    "To give Educational help to the poor & deserving students.",
    "To give Medical help to the poor and deserving people.",
    "To arrange and organize cultural programs, sports competitions.",
    "To run, conduct, maintain and manage Gymnasium, Sports Club, Library, and Reading Room etc.",
    "To organize social activities and programs for the benefit of General Public.",
    "To create Social, Cultural, Educational awakening amongst the General Public.",
    "To work for the welfare and development of General Public through various programs, lectures, demonstration and other activities.",
    "To implement the Scheme of Government, Semi Government and Municipal Corporation subject to their conditions.",
    "To arrange seminar, workshops, events for overall personality development of children."
  ];

  const legalInfo = [
    {
      title: "Charitable Society",
      details: "Registered under Society Registration Act 1860, Article 21",
      number: "Maha/190/2013/Thane"
    },
    {
      title: "Charitable Trust", 
      details: "Registered under Bombay Public Trust Act 1950, Article 29",
      number: "F/27519/Thane"
    }
  ];

  const documents = [
    {
      id: 1,
      title: "Society Registration Certificate",
      image: "/images/logo/certificate-2.jpg"
    },
    {
      id: 2,
      title: "Trust Registration Certificate",
      image: "/images/logo/society-2.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16 bg-teal-400 bg-opacity-20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/4 w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 md:w-8 md:h-8 bg-teal-400 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="absolute inset-0">
          <img 
            src="/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" 
            alt="Children Education Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="transform transition-all duration-1000 ease-out">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              About <span className="text-orange-200">Ashwamedh</span> Foundation
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-8 md:mb-12">
              Empowering underprivileged children and youth through quality education, healthcare, and livelihood programs since 2012
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-6 md:p-8 flex items-center space-x-4 md:space-x-6 shadow-2xl border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
              <Heart className="h-8 w-8 md:h-10 md:w-10 text-orange-200 animate-pulse" />
              <div className="text-left">
                <span className="text-xl md:text-2xl font-bold block">13+ Years</span>
                <span className="text-orange-200 opacity-90">of Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* History Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-orange-50 to-teal-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-teal-50 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="transform hover:translate-x-2 transition-transform duration-500">
              <div className="flex items-center mb-6 md:mb-8">
                <div className="bg-gradient-to-br from-orange-100 to-teal-50 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 shadow-lg">
                  <Calendar className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our History</h2>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                <div className="bg-gradient-to-r from-orange-50 via-cream to-teal-50 p-4 md:p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Ashwamedh Foundation is an NGO registered as Society and Trust established in Virar, Maharashtra. 
                    Being associated with Education field from the year 2012, our Founder Mr. Deepak Doddamani has 
                    closely witnessed the difficulties through which a student from economically backward conditions passes through.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 via-cream to-orange-50 p-4 md:p-6 rounded-2xl border-l-4 border-teal-500 shadow-sm">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    So in the year 2012, he founded Ashwamedh Foundation with some of his like-minded friends. 
                    From the inception of Ashwamedh Foundation, it has worked in the Child Development and Children 
                    Education for underprivileged sector of Society.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-teal-50 p-6 md:p-8 rounded-3xl shadow-lg border border-orange-200">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-orange-500 to-teal-600 p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0 shadow-lg">
                      <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-base md:text-lg italic">
                        "Every child deserves access to quality education, regardless of their economic background."
                      </p>
                      <p className="text-teal-600 mt-2 md:mt-3 font-medium">- Deepak Doddamani, Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
         
            <div className="relative mt-8 lg:mt-0">
  <div className="relative group md:mt-5 bg-white rounded-3xl p-4 md:p-10 h-[400px] md:h-[480px] overflow-hidden shadow-lg border border-gray-200">
    
    {/* Background Image - Dull with dark overlay */}
    <img 
      src="/images/logo/WhatsApp Image 2025-07-19 at 11.20.20 PM.jpeg" 
      alt="Deepak Doddamani - Founder"
      className="absolute inset-0 w-full h-full object-cover opacity-75 rounded-3xl transition-opacity duration-500 group-hover:opacity-70"
    />
    {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent rounded-3xl backdrop-blur-sm" /> */}

    {/* Top Icon */}
    <div className="absolute top-4 right-4 md:top-5 md:right-5 w-10 h-10 md:w-12 md:h-12 bg-white/70 rounded-full flex items-center justify-center shadow-sm border border-gray-300">
      <Heart className="h-4 w-4 md:h-5 md:w-5 text-teal-600 opacity-70" />
    </div>
    
    {/* Bottom Icon */}
    <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 w-10 h-10 md:w-12 md:h-12 bg-white/70 rounded-full flex items-center justify-center shadow-sm border border-gray-300">
      <Users className="h-4 w-4 md:h-5 md:w-5 text-orange-600 opacity-70" />
    </div>

    {/* Center Hover Card */}
  
    <div className="relative z-10 flex items-center justify-center h-full">
  <div className="text-center bg-white/85 rounded-xl p-4 md:p-6 backdrop-blur-md shadow-md max-w-[250px] md:max-w-[300px]
                  opacity-0 transform translate-y-6 scale-95
                  transition-all duration-700 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 border border-gray-100">
    
    <div className="bg-teal-500 rounded-full p-2 md:p-3 mb-3 md:mb-4 mx-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-sm">
      <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-white" />
    </div>

    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">Since 2013</h3>
    <p className="text-gray-700 text-sm md:text-base font-medium">Founded by Deepak Doddamani</p>
    <p className="text-xs md:text-sm text-gray-500 mt-1">Dedicated to child education and development</p>
  </div>
</div>

  </div>
</div>

          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Foundation</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Guided by our vision, mission, and philosophy to create lasting change in the lives of underprivileged children
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200">
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Eye className="h-8 w-8 md:h-10 md:w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Vision</h3>
              <div className="text-gray-700 leading-relaxed space-y-2 md:space-y-3 text-base md:text-lg">
                <p>• Empower underprivileged children & youth through education and support systems</p>
                <p>• Build a society where every child has equal access to opportunities</p>
                <p>• Eliminate barriers to education, healthcare, and livelihood for marginalized communities</p>
                <p>• Promote dignity, inclusion, and sustainable development</p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="h-8 w-8 md:h-10 md:w-10 text-teal-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Mission</h3>
              <div className="text-gray-700 leading-relaxed space-y-2 md:space-y-3 text-base md:text-lg">
                <p>• Ensure quality education for underprivileged children</p>
                <p>• Impart knowledge and values through well-designed programs</p>
                <p>• Bridge gaps through art & cultural activities</p>
                <p>• Create awareness about slum & street children</p>
                <p>• Ensure access to quality healthcare for all</p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Compass className="h-8 w-8 md:h-10 md:w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Philosophy</h3>
              <div className="text-gray-700 leading-relaxed space-y-2 md:space-y-3 text-base md:text-lg">
                <p>• Social Justice, Equality, and Empowerment are the foundation of progress</p>
                <p>• Education is the most powerful tool for societal transformation</p>
                <p>• Real change comes by educating, agitating, and organizing communities</p>
                <p>• Compassion and dignity are central to every action we take</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-cream to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300695C' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="bg-gradient-to-br mt-1 from-teal-100 to-orange-100 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 shadow-lg">
                <FileText className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-5xl mt-1 font-bold text-gray-900">Legal Status</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600">Officially registered and recognized organization</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {legalInfo.map((info, index) => (
                  <div key={index} className="group bg-gradient-to-br from-orange-50 via-cream to-teal-50 rounded-3xl p-6 md:p-10 border-2 border-orange-200 hover:shadow-xl hover:border-teal-300 transition-all duration-500 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="bg-gradient-to-br from-teal-500 to-orange-500 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Award className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{info.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">{info.details}</p>
                    <div className="bg-white rounded-2xl p-3 md:p-4 border-2 border-teal-200 shadow-inner">
                      <p className="text-teal-700 font-bold text-sm md:text-base">Registration Number: {info.number}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-gradient-to-br from-gray-100 via-orange-50 to-teal-50 rounded-3xl p-4 md:p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-200">
                <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Registration Documents</h4>
                <div className="space-y-4 md:space-y-6">
                  {documents.map((doc) => (
                    <div 
                      key={doc.id} 
                      className="bg-white rounded-2xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100 cursor-pointer"
                      onClick={() => openDocumentModal(doc)}
                    >
                      <img 
                        src={doc.image} 
                        alt={doc.title}
                        className="w-full h-32 md:h-36 object-cover rounded-xl"
                      />
                      <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3 text-center font-medium">{doc.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Statements Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-orange-50 via-cream to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("/images/logo/vecteezy_ai-generated-eight-girls-from-nepal-and-their-mothers-smiling_37279696.jpeg")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Work Statements</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive approach to community development and empowerment</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {workStatements.map((statement, index) => (
              <div key={index} className={`group bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:bg-opacity-100 transition-all duration-500 transform hover:-translate-y-1 ${
                index % 2 === 0 ? 'border-l-4 border-orange-500' : 'border-l-4 border-teal-500'
              }`}>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-4 md:mr-6 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-orange-400 to-orange-600' 
                      : 'bg-gradient-to-br from-teal-500 to-teal-700'
                  }`}>
                    <span className="text-white font-bold text-base md:text-lg">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-1">{statement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-12 md:py-20 bg-gradient-to-br from-white via-cream to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero/community-work.jpg" 
            alt="Community Work Background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-orange-50 to-white">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="bg-gradient-to-br from-teal-200 to-orange-200 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 shadow-lg">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Team</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600">Dedicated individuals working together for a common cause</p>
          </div>

          <div className="mb-12 md:mb-16">
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-orange-200">
                <img 
                  src="/public/images/logo/AF Team pic.jpg" 
                  alt="Ashwamedh Foundation Team Group Photo"
                  className="w-full h-64 md:h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Our Dedicated Team</h3>
                  <p className="text-orange-200 text-base md:text-lg">Together we make a difference in children's lives</p>
                </div>
                
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-br from-teal-500 to-orange-500 bg-opacity-80 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-lg">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 text-center hover:shadow-xl hover:bg-opacity-100 transition-all duration-500 border border-orange-200 transform hover:-translate-y-2">
                <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-orange-400 to-teal-600' 
                    : index % 2 === 0 
                      ? 'bg-gradient-to-br from-teal-400 to-teal-600' 
                      : 'bg-gradient-to-br from-orange-400 to-orange-600'
                }`}>
                  <UserCheck className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xs md:text-sm leading-tight mb-1 md:mb-2">{member}</h3>
                {index === 0 && <p className="text-xs text-white font-bold bg-gradient-to-r from-orange-500 to-teal-600 px-2 py-1 md:px-3 md:py-1 rounded-full inline-block">Founder</p>}
              </div>
            ))}
          </div>
        </div>
      </section> */}
{/* Team Section */}
<section className="py-12 md:py-20 bg-gradient-to-br from-white via-cream to-teal-50 relative overflow-hidden">
  <div className="absolute inset-0">
    <img 
      src="/images/hero/community-work.jpg" 
      alt="Community Work Background"
      className="w-full h-full object-cover opacity-5"
    />
  </div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-16">
      <div className="flex items-center justify-center mb-4 md:mb-6">
        <div className="bg-gradient-to-br from-teal-200 to-orange-200 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 shadow-lg">
          <Users className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Team</h2>
      </div>
      <p className="text-lg md:text-xl text-gray-600">Dedicated individuals working together for a common cause</p>
    </div>

    {/* Team Group Photo */}
    <div className="mb-12 md:mb-16">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-orange-200">
          <img 
            src="/images/logo/AF Team pic.jpg" 
            alt="Ashwamedh Foundation Team Group Photo"
            className="w-full h-64 md:h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Our Dedicated Team</h3>
            <p className="text-orange-200 text-base md:text-lg">Together we make a difference in children's lives</p>
          </div>
          
          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-br from-teal-500 to-orange-500 bg-opacity-80 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-lg">
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>
      </div>
    </div>

    {/* Team Members Grid */}


<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
     {
      name: "Sneha Sharma",
      position: "President",
      image: "/images/logo/WhatsApp Image 2025-07-19 at 11.18.12 PM.jpeg"
    },
     {
      name: "Abdul Hakim Ansari",
      position: "Treasurer",
      image: "/images/logo/WhatsApp Image 2025-07-19 at 11.18.12 PM (1).jpeg"
    },
     {
      name: "Jitendra Patel",
      position: "Secretary",
      image: "/images/logo/WhatsApp Image 2025-07-20 at 12.11.38 AM.jpeg"
    },
    {
      name: "Mohammed Shakil Ansari",
      position: "Life Member",
      image: "/images/logo/WhatsApp Image 2025-07-19 at 11.18.26 PM.jpeg"
    },
   
   
  ].map((member, index) => (
    <div
      key={index}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200 flex flex-col"
    >
      <img
        src={member.image}
        alt={member.name}
         className="w-full h-60 object-cover object-[center_30%]"
      />
      <div className="p-4 text-center">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.position}</p>
      </div>
    </div>
  ))}
</div>

  </div>
</section>
      {/* News & PR */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-8 left-8 md:top-10 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-16 md:bottom-20 md:right-20 w-20 h-20 md:w-24 md:h-24 bg-orange-400 bg-opacity-20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <div className="bg-white bg-opacity-20 p-3 md:p-4 rounded-2xl mr-3 md:mr-4 shadow-lg">
              <Newspaper className="h-6 w-6 md:h-8 md:w-8 text-orange-200" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">News & Recognition</h2>
          </div>
          <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-500">
            <p className="text-base md:text-xl leading-relaxed">
              Our work has been recognized by media outlets. Marathi Newspaper Loksatta covered our event in Malvan 
              in their Sawantwadi supplement of 29th January 2014, highlighting our commitment to community development.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-14 relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="/images/logo/gettyimages-535555239-612x612.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/90 to-[#004D40]/90"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Join Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Together, we can create a world where every child has access to quality education and healthcare,
            regardless of their background.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link to='/get-involved/donate'>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 md:py-5 md:px-10 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Support Our Cause
              </button>
            </Link>
            
            <Link to='/get-involved/volunteer'>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 md:py-5 md:px-10 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Become a Volunteer
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Document Modal */}
 {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/65">
    
    {/* Click-outside overlay */}
    <div 
      className="fixed inset-0"
      onClick={closeDocumentModal}
    ></div>

    {/* Modal Content */}
    <div className="relative z-50 max-w-5xl w-full max-h-[90vh]">
      <div className="flex justify-center items-center h-full">
        <div className="relative group border border-white/20 rounded-lg overflow-hidden shadow-2xl">

          {/* Close Button INSIDE image, top-right corner */}
          <button 
            onClick={closeDocumentModal}
            className="absolute top-2 right-2 z-50 p-1.5 rounded-full bg-white/90 hover:bg-white transition-all shadow-md"
          >
            <X className="h-4 w-4 text-gray-800" />
          </button>

          {/* Image */}
          <img 
            src={selectedDocument?.image} 
            alt={selectedDocument?.title}
            className="max-w-full max-h-[80vh] object-contain transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Title overlay (optional) */}
          {/* {selectedDocument?.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold text-center">
                {selectedDocument.title}
              </h3>
            </div>
          )} */}
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default AboutUs;