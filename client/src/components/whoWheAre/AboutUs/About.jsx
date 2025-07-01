
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

// const AboutUs = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//       setIsVisible(true);
//     }, []);
//   const teamMembers = [
//     'Deepak Doddamani',
//     'Sumit Mane', 
//     'Shailesh Humbre',
//     'Rajendra Balsara',
//     'Abdul Hakim Ansari',
//     'Jitendra Patel',
//     'Praful Rane',
//     'Govind Dodamani',
//     'Monika Singh',
//     'Sneha Sharma'
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
//       <section className="relative py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
//           <div className="absolute top-40 right-20 w-16 h-16 bg-teal-400 bg-opacity-20 rounded-full animate-pulse delay-700"></div>
//           <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
//           <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-teal-400 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
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
//             <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
//               About <span className="text-orange-200">Ashwamedh</span> Foundation
//             </h1>
//             <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-12">
//               Empowering underprivileged children and youth through quality education, healthcare, and livelihood programs since 2013
//             </p>
//           </div>
          
//           <div className="flex justify-center">
//             <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-8 flex items-center space-x-6 shadow-2xl border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
//               <Heart className="h-10 w-10 text-orange-200 animate-pulse" />
//               <div className="text-left">
//                 <span className="text-2xl font-bold block">10+ Years</span>
//                 <span className="text-orange-200 opacity-90">of Impact</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
//       </section>

    
//       <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-teal-50 relative">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-teal-50 opacity-30"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="transform hover:translate-x-2 transition-transform duration-500">
//               <div className="flex items-center mb-8">
//                 <div className="bg-gradient-to-br from-orange-100 to-teal-50 p-3 rounded-2xl mr-4 shadow-lg">
//                   <Calendar className="h-8 w-8 text-orange-500" />
//                 </div>
//                 <h2 className="text-5xl font-bold text-gray-900">Our History</h2>
//               </div>
              
//               <div className="space-y-8">
//                 <div className="bg-gradient-to-r from-orange-50 via-cream to-teal-50 p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm">
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     Ashwamedh Foundation is an NGO registered as Society and Trust established in Virar, Maharashtra. 
//                     Being associated with Education field from the year 2003, our Founder Mr. Deepak Doddamani has 
//                     closely witnessed the difficulties through which a student from economically backward conditions passes through.
//                   </p>
//                 </div>
                
//                 <div className="bg-gradient-to-r from-teal-50 via-cream to-orange-50 p-6 rounded-2xl border-l-4 border-teal-500 shadow-sm">
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     So in the year 2013, he founded Ashwamedh Foundation with some of his like-minded friends. 
//                     From the inception of Ashwamedh Foundation, it has worked in the Child Development and Children 
//                     Education for underprivileged sector of Society.
//                   </p>
//                 </div>
                
//                 <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-teal-50 p-8 rounded-3xl shadow-lg border border-orange-200">
//                   <div className="flex items-start">
//                     <div className="bg-gradient-to-br from-orange-500 to-teal-600 p-3 rounded-full mr-4 flex-shrink-0 shadow-lg">
//                       <BookOpen className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-gray-800 font-semibold text-lg italic">
//                         "Every child deserves access to quality education, regardless of their economic background."
//                       </p>
//                       <p className="text-teal-600 mt-3 font-medium">- Deepak Doddamani, Founder</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="relative group bg-gradient-to-br from-orange-100 via-orange-200 to-teal-100 rounded-3xl p-12 h-[500px] overflow-hidden shadow-2xl">
              
//                 <img 
//                   src="/public/images/logo/1740195950066.jpg" 
//                   alt="Deepak Doddamani - Founder"
//                   className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-3xl transition-opacity duration-500 group-hover:opacity-70"
//                 />

//                 {/* Floating Elements */}
//                 <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-teal-400 bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
//                   <Heart className="h-8 w-8 text-teal-700" />
//                 </div>
                
//                 <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-br from-teal-400 to-orange-400 bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
//                   <Users className="h-10 w-10 text-orange-700" />
//                 </div>

//                 {/* Main Card */}
//                 <div className="relative z-10 flex items-center justify-center h-full">
//                   <div className="text-center bg-white bg-opacity-95 rounded-3xl p-8 backdrop-blur-lg shadow-2xl max-w-sm
//                                   opacity-0 transform translate-y-6 scale-95
//                                   transition-all duration-700
//                                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 border border-orange-200">
//                     <div className="bg-gradient-to-br from-orange-500 to-teal-600 rounded-full p-6 mb-6 mx-auto w-20 h-20 flex items-center justify-center shadow-xl">
//                       <BookOpen className="h-10 w-10 text-white" />
//                     </div>
//                     <h3 className="text-3xl font-bold text-gray-800 mb-3">Since 2013</h3>
//                     <p className="text-gray-600 font-medium text-lg">Founded by Deepak Doddamani</p>
//                     <p className="text-sm text-gray-500 mt-2">Dedicated to child education and development</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

    
//       <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-teal-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Foundation</h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Guided by our vision, mission, and philosophy to create lasting change in the lives of underprivileged children
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
           
//             <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200">
//               <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Eye className="h-10 w-10 text-teal-600" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Vision</h3>
//               <p className="text-gray-700 leading-relaxed text-center text-lg">
//                 To empower the underprivileged children & youth through quality education, healthcare, and livelihood programs.
//               </p>
//             </div>

          
//             <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
//               <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Target className="h-10 w-10 text-orange-500" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mission</h3>
//               <div className="text-gray-700 leading-relaxed space-y-3 text-lg">
//                 <p>• Ensure quality education for underprivileged children</p>
//                 <p>• Impart knowledge and values through well-designed programs</p>
//                 <p>• Bridge gaps through art & cultural activities</p>
//                 <p>• Create awareness about slum & street children</p>
//                 <p>• Ensure access to quality healthcare for all</p>
//               </div>
//             </div>

          
//             <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
//               <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-100 via-orange-100 to-teal-200 rounded-3xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Compass className="h-10 w-10 text-teal-600" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Philosophy</h3>
//               <p className="text-gray-700 leading-relaxed text-center text-lg">
//                 Social Justice, Equality and Empowerment can be achieved through educating, agitating & organizing the Underprivileged.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

   
//       <section className="py-20 bg-gradient-to-br from-white via-cream to-teal-50 relative overflow-hidden">
  
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300695C' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
//           <div className="text-center mb-16">
//             <div className="flex items-center justify-center mb-6">
//               <div className="bg-gradient-to-br mt-1 from-teal-100 to-orange-100 p-3 rounded-2xl mr-4 shadow-lg">
//                 <FileText className="h-8 w-8  text-teal-600" />
//               </div>
//               <h2 className="text-5xl mt-1 font-bold text-gray-900">Legal Status</h2>
//             </div>
//             <p className="text-xl text-gray-600">Officially registered and recognized organization</p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-12 items-center">
          
//             <div className="lg:col-span-2">
//               <div className="grid md:grid-cols-2 gap-8">
//                 {legalInfo.map((info, index) => (
//                   <div key={index} className="group bg-gradient-to-br from-orange-50 via-cream to-teal-50 rounded-3xl p-10 border-2 border-orange-200 hover:shadow-xl hover:border-teal-300 transition-all duration-500 transform hover:-translate-y-1">
//                     <div className="flex items-center mb-6">
//                       <div className="bg-gradient-to-br from-teal-500 to-orange-500 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                         <Award className="h-6 w-6 text-white" />
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900">{info.title}</h3>
//                     </div>
//                     <p className="text-gray-700 mb-6 text-lg leading-relaxed">{info.details}</p>
//                     <div className="bg-white rounded-2xl p-4 border-2 border-teal-200 shadow-inner">
//                       <p className="text-teal-700 font-bold">Registration Number: {info.number}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

         
//             <div className="space-y-8">
//               <div className="bg-gradient-to-br from-gray-100 via-orange-50 to-teal-50 rounded-3xl p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-200">
//                 <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Registration Documents</h4>
//                 <div className="space-y-6">
//                   <div className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
//                     <img 
//                       src="/public/images/logo/certificate-2.jpg" 
//                       alt="Society Registration Certificate"
//                       className="w-full h-36 object-cover rounded-xl"
//                     />
//                     <p className="text-sm text-gray-600 mt-3 text-center font-medium">Society Registration Certificate</p>
//                   </div>
//                   <div className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-teal-100">
//                     <img 
//                       src="/public/images/logo/society-2.jpg" 
//                       alt="Trust Registration Certificate"
//                       className="w-full h-36 object-cover rounded-xl"
//                     />
//                     <p className="text-sm text-gray-600 mt-3 text-center font-medium">Trust Registration Certificate</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

     
//       <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 via-cream to-teal-50 relative overflow-hidden">
      
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("/public/images/logo/vecteezy_ai-generated-eight-girls-from-nepal-and-their-mothers-smiling_37279696.jpeg")`,
//           }}></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Work Statements</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive approach to community development and empowerment</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {workStatements.map((statement, index) => (
//               <div key={index} className={`group bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-opacity-100 transition-all duration-500 transform hover:-translate-y-1 ${
//                 index % 2 === 0 ? 'border-l-4 border-orange-500' : 'border-l-4 border-teal-500'
//               }`}>
//                 <div className="flex items-start">
//                   <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-6 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
//                     index % 2 === 0 
//                       ? 'bg-gradient-to-br from-orange-400 to-orange-600' 
//                       : 'bg-gradient-to-br from-teal-500 to-teal-700'
//                   }`}>
//                     <span className="text-white font-bold text-lg">{index + 1}</span>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed text-lg flex-1">{statement}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

     
//       <section className="py-20 bg-gradient-to-br from-white via-cream to-teal-50 relative overflow-hidden">
      
//         <div className="absolute inset-0">
//           <img 
//             src="/images/hero/community-work.jpg" 
//             alt="Community Work Background"
//             className="w-full h-full object-cover opacity-5"
//           />
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px- bg-gradient-to-t from-orange-50 to-white sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="flex items-center justify-center mb-6">
//               <div className="bg-gradient-to-br from-teal-100 to-orange-100 p-3 rounded-2xl mr-4 shadow-lg">
//                 <Users className="h-8 w-8 text-teal-600" />
//               </div>
//               <h2 className="text-5xl font-bold text-gray-900">Our Team</h2>
//             </div>
//             <p className="text-xl text-gray-600">Dedicated individuals working together for a common cause</p>
//           </div>

       
//           <div className="mb-16">
//             <div className="max-w-5xl mx-auto">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-orange-200">
//                 <img 
//                   src="/public/images/logo/AF Team pic.jpg" 
//                   alt="Ashwamedh Foundation Team Group Photo"
//                   className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                   <h3 className="text-3xl font-bold mb-3">Our Dedicated Team</h3>
//                   <p className="text-orange-200 text-lg">Together we make a difference in children's lives</p>
//                 </div>
                
            
//                 <div className="absolute top-6 right-6 bg-gradient-to-br from-teal-500 to-orange-500 bg-opacity-80 backdrop-blur-sm rounded-full p-4 shadow-lg">
//                   <Heart className="h-8 w-8 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>

        
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="group bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-xl hover:bg-opacity-100 transition-all duration-500 border border-orange-200 transform hover:-translate-y-2">
//                 <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 ${
//                   index === 0 
//                     ? 'bg-gradient-to-br from-orange-400 to-teal-600' 
//                     : index % 2 === 0 
//                       ? 'bg-gradient-to-br from-teal-400 to-teal-600' 
//                       : 'bg-gradient-to-br from-orange-400 to-orange-600'
//                 }`}>
//                   <UserCheck className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2">{member}</h3>
//                 {index === 0 && <p className="text-xs text-white font-bold bg-gradient-to-r from-orange-500 to-teal-600 px-3 py-1 rounded-full inline-block">Founder</p>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* News & PR */}
//       <section className="py-20 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0">
//           <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400 bg-opacity-20 rounded-full animate-pulse delay-700"></div>
//           <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex items-center justify-center mb-8">
//             <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-4 shadow-lg">
//               <Newspaper className="h-8 w-8 text-orange-200" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold">News & Recognition</h2>
//           </div>
//           <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-500">
//             <p className="text-xl leading-relaxed">
//               Our work has been recognized by media outlets. Marathi Newspaper Loksatta covered our event in Malvan 
//               in their Sawantwadi supplement of 29th January 2014, highlighting our commitment to community development.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//     <section className="py-20 relative overflow-hidden text-white">
//   {/* Background Image */}
//   <div className="absolute inset-0 z-0 opacity-60">
//     <img 
//       src="/public/images/logo/gettyimages-535555239-612x612.jpg"  // ✅ Replace with actual path
//       alt="Background"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/90 to-[#004D40]/90"></div>

//   {/* Content */}
//   <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h2 className="text-5xl font-bold mb-8">Join Our Mission</h2>
//     <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//       Together, we can create a world where every child has access to quality education and healthcare,
//       regardless of their background.
//     </p>
//     <div className="flex flex-col sm:flex-row gap-6 justify-center">
//       <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
//         Support Our Cause
//       </button>
//       <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
//         Become a Volunteer
//       </button>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default AboutUs;


import React, { use, useEffect, useState } from 'react';
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
  UserCheck
} from 'lucide-react';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);
  const teamMembers = [
    'Deepak Doddamani',
    'Sumit Mane', 
    'Shailesh Humbre',
    'Rajendra Balsara',
    'Abdul Hakim Ansari',
    'Jitendra Patel',
    'Praful Rane',
    'Govind Dodamani',
    'Monika Singh',
    'Sneha Sharma'
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16 bg-teal-400 bg-opacity-20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/4 w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 md:w-8 md:h-8 bg-teal-400 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" 
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
              Empowering underprivileged children and youth through quality education, healthcare, and livelihood programs since 2013
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-6 md:p-8 flex items-center space-x-4 md:space-x-6 shadow-2xl border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
              <Heart className="h-8 w-8 md:h-10 md:w-10 text-orange-200 animate-pulse" />
              <div className="text-left">
                <span className="text-xl md:text-2xl font-bold block">10+ Years</span>
                <span className="text-orange-200 opacity-90">of Impact</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-white to-transparent"></div>
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
                    Being associated with Education field from the year 2003, our Founder Mr. Deepak Doddamani has 
                    closely witnessed the difficulties through which a student from economically backward conditions passes through.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 via-cream to-orange-50 p-4 md:p-6 rounded-2xl border-l-4 border-teal-500 shadow-sm">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    So in the year 2013, he founded Ashwamedh Foundation with some of his like-minded friends. 
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
              <div className="relative group bg-gradient-to-br from-orange-100 via-orange-200 to-teal-100 rounded-3xl p-6 md:p-12 h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
                <img 
                  src="/public/images/logo/1740195950066.jpg" 
                  alt="Deepak Doddamani - Founder"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-3xl transition-opacity duration-500 group-hover:opacity-70"
                />

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-teal-400 bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-teal-700" />
                </div>
                
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-400 to-orange-400 bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-orange-700" />
                </div>

                {/* Main Card */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center bg-white bg-opacity-95 rounded-3xl p-6 md:p-8 backdrop-blur-lg shadow-2xl max-w-xs md:max-w-sm
                                  opacity-0 transform translate-y-6 scale-95
                                  transition-all duration-700
                                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 border border-orange-200">
                    <div className="bg-gradient-to-br from-orange-500 to-teal-600 rounded-full p-4 md:p-6 mb-4 md:mb-6 mx-auto w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl">
                      <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Since 2013</h3>
                    <p className="text-gray-600 font-medium text-base md:text-lg">Founded by Deepak Doddamani</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">Dedicated to child education and development</p>
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
            {/* Vision Card */}
            <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200">
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Eye className="h-8 w-8 md:h-10 md:w-10 text-teal-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Vision</h3>
              <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg">
                To empower the underprivileged children & youth through quality education, healthcare, and livelihood programs.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="h-8 w-8 md:h-10 md:w-10 text-orange-500" />
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

            {/* Philosophy Card */}
            <div className="group bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-100 via-orange-100 to-teal-200 rounded-3xl mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Compass className="h-8 w-8 md:h-10 md:w-10 text-teal-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Philosophy</h3>
              <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg">
                Social Justice, Equality and Empowerment can be achieved through educating, agitating & organizing the Underprivileged.
              </p>
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
                  <div className="bg-white rounded-2xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                    <img 
                      src="/public/images/logo/certificate-2.jpg" 
                      alt="Society Registration Certificate"
                      className="w-full h-32 md:h-36 object-cover rounded-xl"
                    />
                    <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3 text-center font-medium">Society Registration Certificate</p>
                  </div>
                  <div className="bg-white rounded-2xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-teal-100">
                    <img 
                      src="/public/images/logo/society-2.jpg" 
                      alt="Trust Registration Certificate"
                      className="w-full h-32 md:h-36 object-cover rounded-xl"
                    />
                    <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3 text-center font-medium">Trust Registration Certificate</p>
                  </div>
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
            backgroundImage: `url("/public/images/logo/vecteezy_ai-generated-eight-girls-from-nepal-and-their-mothers-smiling_37279696.jpeg")`,
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-cream to-teal-50 relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-teal-100 to-orange-100 p-2 md:p-3 rounded-2xl mr-3 md:mr-4 shadow-lg">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Team</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600">Dedicated individuals working together for a common cause</p>
          </div>

          {/* Team Photo */}
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
                
                {/* Heart Icon */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-br from-teal-500 to-orange-500 bg-opacity-80 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-lg">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
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
      </section>

      {/* News & PR */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
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
      <section className="py-12 md:py-20 relative overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="/public/images/logo/gettyimages-535555239-612x612.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/90 to-[#004D40]/90"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Join Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Together, we can create a world where every child has access to quality education and healthcare,
            regardless of their background.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 md:py-5 md:px-10 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Support Our Cause
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 md:py-5 md:px-10 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;