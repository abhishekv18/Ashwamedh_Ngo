// import React, { useState, useEffect } from 'react';
// import { Star, Quote, Users, GraduationCap, Heart, BookOpen, Award, TrendingUp, Calendar, MapPin, User, ChevronLeft, ChevronRight, Play, Home, Shield, Globe } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ImpactStories = () => {


// const navigate=useNavigate();
//   const user = useSelector((state) => state.auth.user);
//     useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user]);

//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [activeCaseStudy, setActiveCaseStudy] = useState(0);


//   const impactStats = [
//     { icon: Users, number: "2500+", label: "Children Impacted", color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
//     { icon: BookOpen, number: "12", label: "Years of Service", color: "text-teal-600", bgColor: "from-teal-50 to-teal-100" },
//     { icon: GraduationCap, number: "85%", label: "Academic Improvement", color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
//     { icon: Award, number: "50+", label: "Programs Conducted", color: "text-teal-600", bgColor: "from-teal-50 to-teal-100" },
//     { icon: Home, number: "15", label: "Community Centers", color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
//     { icon: Shield, number: "95%", label: "Retention Rate", color: "text-teal-600", bgColor: "from-teal-50 to-teal-100" },
//     { icon: Globe, number: "8", label: "Partner Organizations", color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
//     { icon: Heart, number: "100+", label: "Active Volunteers", color: "text-teal-600", bgColor: "from-teal-50 to-teal-100" }
//   ];
//   // Student Testimonials/Reviews
//   const testimonials = [
//     {
//       id: 1,
//       name: "Priya Sharma",
//       age: 16,
//       location: "Vasai, Maharashtra",
//       program: "Educational Support Program",
//       rating: 5,
//       image: "/public/images/stories/premium_photo-1723568666044-1b066e26b1fb.avif",
//       testimonial: "Ashwamedh Foundation changed my life completely. I was struggling with my studies due to financial constraints, but their support helped me excel in my 10th standard with 92% marks. Now I'm pursuing science stream with dreams of becoming a doctor.",
//       achievement: "92% in 10th Standard"
//     },
//     {
//       id: 2,
//       name: "Rohit Patil",
//       age: 18,
//       location: "Virar, Maharashtra",
//       program: "Skill Development Program",
//       rating: 5,
//       image: "/public/images/stories/istockphoto-477224026-612x612.webp",
//       testimonial: "The skill development program at Ashwamedh Foundation equipped me with computer skills and soft skills. Today, I'm working as a junior developer in a tech company. The foundation didn't just educate me; they transformed my entire family's future.",
//       achievement: "Secured Job as Junior Developer"
//     },
//     {
//       id: 3,
//       name: "Sneha Pawar",
//       age: 17,
//       location: "Thane, Maharashtra",
//       program: "Women Empowerment Initiative",
//       rating: 5,
//       image: "/public/images/stories/photo-1653379670414-68e7f2ed0ce7.avif",
//       testimonial: "Through Ashwamedh Foundation's women empowerment program, I learned leadership skills and gained confidence to speak in public. I'm now the head girl of my school and actively participate in community development activities.",
//       achievement: "School Head Girl & Community Leader"
//     },
//     {
//       id: 4,
//       name: "Arjun Singh",
//       age: 19,
//       location: "Mumbai Suburban",
//       program: "Higher Education Support",
//       rating: 5,
//       image: "/public/images/stories/istockphoto-1154707848-612x612.webp",
//       testimonial: "Without Ashwamedh Foundation's scholarship program, college education would have remained a dream. They supported me throughout my engineering course. I'm now placed in a multinational company and actively contribute back to the foundation.",
//       achievement: "Engineering Graduate - MNC Placement"
//     },
     
//   ];

//   // Case Studies
//   const caseStudies = [
//     {
//       id: 1,
//       title: "Digital Literacy Program - Transforming Rural Education",
//       location: "Vasai-Virar Region",
//       duration: "2023-2024",
//       beneficiaries: 250,
//       image: "/public/images/stories/istockphoto-2217164634-612x612.jpg",
//       challenge: "Limited access to digital education in rural communities, affecting students' competitiveness in the modern job market.",
//       solution: "Established 5 digital learning centers with computers, tablets, and high-speed internet connectivity. Trained local teachers in digital pedagogy.",
//       impact: "250 students gained digital literacy skills, 40 students secured jobs in IT sector, 85% improvement in academic performance.",
//       testimonial: "This program bridged the digital divide in our community. My daughter now confidently uses technology for learning. - Sunita Devi, Parent"
//     },
//     {
//       id: 2,
//       title: "Healthcare for All - Mobile Medical Units",
//       location: "Mumbai & Thane Districts",
//       duration: "2022-ongoing",
//       beneficiaries: 1500,
//       image: "/public/images/stories/istockphoto-1130931397-612x612.webp",
//       challenge: "Inadequate healthcare access in remote areas, leading to preventable diseases and mortality.",
//       solution: "Deployed 3 mobile medical units with qualified doctors, nurses, and medical equipment. Conducted regular health camps and awareness programs.",
//       impact: "1500+ patients treated, 50 critical cases referred to hospitals, 90% reduction in preventable diseases in target areas.",
//       testimonial: "The mobile medical unit saved my father's life. Early detection of diabetes helped us manage his condition effectively. - Ramesh Kumar, Beneficiary"
//     },
//     {
//       id: 3,
//       title: "Skill Development & Employment Initiative",
//       location: "Virar Industrial Belt",
//       duration: "2023-2024",
//       beneficiaries: 180,
//       image: "/public/images/stories/photo-1625111381887-458fce74a923.avif",
//       challenge: "High unemployment among youth due to lack of industry-relevant skills and job placement support.",
//       solution: "Partnered with local industries to design skill training programs in manufacturing, IT, and service sectors. Included soft skills training and job placement assistance.",
//       impact: "180 youth trained, 150 successfully placed in jobs, average salary increase of 200%, 95% job retention rate after 1 year.",
//       testimonial: "The skill training program changed my life. From being unemployed to earning ₹25,000 per month - it's like a miracle. - Deepak Sharma, Program Graduate"
//     }
//   ];

//   // Success Stories
//   const successStories = [
   
 
//   {
//     title: "From Street Child to Software Engineer",
//     student: "Vikash Kumar",
//     image: "/public/images/stories/photo-1706088946925-55e4bfacfbdb.avif",
//     story:
//       "Vikash was living on the streets when Ashwamedh Foundation found him at age 12. He joined our residential care program, completed his schooling with dedication, and discovered a passion for technology. Today, he works as a software engineer at a top tech company and mentors kids like him."
//   },
//   {
//     title: "Breaking the Cycle of Poverty",
//     student: "Meera Joshi",
//     image: "/public/images/stories/download.jpg",
//     story:
//       "Raised in a village where education wasn’t encouraged for girls, Meera dreamed of something more. With our support, she pursued her studies and became the first graduate in her family. She now runs a community learning center impacting 100+ children."
//   },
//   {
//     title: "Empowering Through Art",
//     student: "Raj Patel",
//     image: "/public/images/stories/photo-1722239650159-1b9c2a80fb04.avif",
//     story:
//       "Raj discovered his love for painting through our creative arts program. His talent quickly flourished, leading to gallery exhibitions across Mumbai. Today, he teaches art to underprivileged children, helping them express and heal through creativity."
//   }




//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextTestimonial = () => {
//     setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const nextCaseStudy = () => {
//     setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
//   };

//   const prevCaseStudy = () => {
//     setActiveCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
     
// <section className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white py-24 overflow-hidden">
//   {/* Background Image */}
//   <div className="absolute inset-0">
//     <img 
//       src="/public/images/projects/photo-1659451336016-00d62d32f677.avif" // replace with your actual image path
//       alt="Impact background"
//       className="w-full h-full object-cover object-center opacity-75"
//     />
//     <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85"></div>
//   </div>

//   {/* Content */}
//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight drop-shadow-lg">
//       Stories of <span className="text-orange-200">Impact</span>
//     </h1>
//     <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-orange-100 drop-shadow-sm">
//       Transforming lives through education, healthcare, and community empowerment.
//     </p>
//     <div className="mt-6 text-base sm:text-lg md:text-xl font-medium text-orange-100 max-w-4xl mx-auto leading-loose">
//       <p className="mb-6">
//         At <span className="text-white font-semibold">Ashwamedh Foundation</span>, we believe in the power of stories to inspire action. 
//         Each success is a journey fueled by resilience, compassion, and opportunity.
//       </p>
     
//     </div>
//   </div>
//      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
// </section>

//       {/* Impact Statistics */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
//             <p className="text-xl text-gray-600">Measuring the difference we've made together</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {impactStats.map((stat, index) => (
//               <div key={index} className="text-center p-8 bg-orange-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
//                   <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
//                 </div>
//                 <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
//                 <p className="text-gray-600 font-medium">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

     
//       <section className="py-16 bg-gradient-to-r from-teal-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Voices</h2>
//             <p className="text-xl text-gray-600">Hear from the lives we've touched</p>
//           </div>
//           <div className="relative">
//             <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
//               <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
//                 <div className="flex-shrink-0">
//                   <img
//                     src={testimonials[activeTestimonial].image}
//                     alt={testimonials[activeTestimonial].name}
//                     className="w-32 h-32 rounded-full object-cover border-4 border-orange-200"
//                   />
//                 </div>
//                 <div className="flex-1 text-center md:text-left">
//                   <div className="flex justify-center md:justify-start mb-4">
//                     {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
//                       <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <Quote className="w-8 h-8 text-orange-300 mb-4 mx-auto md:mx-0" />
//                   <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                     "{testimonials[activeTestimonial].testimonial}"
//                   </p>
//                   <div className="border-l-4 border-orange-500 pl-4">
//                     <h4 className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].name}</h4>
//                     <p className="text-gray-600">Age: {testimonials[activeTestimonial].age} | {testimonials[activeTestimonial].location}</p>
//                     <p className="text-orange-600 font-medium">{testimonials[activeTestimonial].program}</p>
//                     <p className="text-teal-600 font-semibold mt-2">✨ {testimonials[activeTestimonial].achievement}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={prevTestimonial}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-600" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-600" />
//             </button>
//           </div>
//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveTestimonial(index)}
//                 className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                   index === activeTestimonial ? 'bg-orange-500' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
//             <p className="text-xl text-gray-600">Deep dive into our transformative programs</p>
//           </div>
//           <div className="relative">
//             <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-3xl shadow-xl overflow-hidden">
//               <div className="md:flex">
//                 <div className="md:w-1/2">
//                   <img
//                     src={caseStudies[activeCaseStudy].image}
//                     alt={caseStudies[activeCaseStudy].title}
//                     className="w-full h-64 md:h-full object-cover"
//                   />
//                 </div>
//                 <div className="md:w-1/2 p-8 md:p-12">
//                   <div className="flex items-center mb-4">
//                     <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
//                       Case Study {activeCaseStudy + 1}
//                     </div>
//                     <div className="text-gray-500 text-sm">
//                       <Calendar className="w-4 h-4 inline mr-1" />
//                       {caseStudies[activeCaseStudy].duration}
//                     </div>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {caseStudies[activeCaseStudy].title}
//                   </h3>
//                   <div className="flex items-center mb-4 text-gray-600">
//                     <MapPin className="w-4 h-4 mr-2" />
//                     <span>{caseStudies[activeCaseStudy].location}</span>
//                     <Users className="w-4 h-4 ml-4 mr-2" />
//                     <span>{caseStudies[activeCaseStudy].beneficiaries} beneficiaries</span>
//                   </div>
                  
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
//                       <p className="text-gray-700">{caseStudies[activeCaseStudy].challenge}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-teal-600 mb-2">Solution:</h4>
//                       <p className="text-gray-700">{caseStudies[activeCaseStudy].solution}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-orange-600 mb-2">Impact:</h4>
//                       <p className="text-gray-700">{caseStudies[activeCaseStudy].impact}</p>
//                     </div>
//                     <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
//                       <Quote className="w-5 h-5 text-yellow-600 mb-2" />
//                       <p className="text-gray-700 italic">{caseStudies[activeCaseStudy].testimonial}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={prevCaseStudy}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-600" />
//             </button>
//             <button
//               onClick={nextCaseStudy}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-600" />
//             </button>
//           </div>
//           <div className="flex justify-center mt-8 space-x-2">
//             {caseStudies.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveCaseStudy(index)}
//                 className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                   index === activeCaseStudy ? 'bg-orange-500' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Success Stories Grid */}
//       <section className="py-16 bg-gradient-to-br from-teal-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
//             <p className="text-xl text-gray-600">Celebrating journeys of transformation</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {successStories.map((story, index) => (
//               <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <img
//                   src={story.image}
//                   alt={story.student}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
//                   <div className="flex items-center mb-4">
//                     <User className="w-4 h-4 text-orange-500 mr-2" />
//                     <span className="text-orange-600 font-semibold">{story.student}</span>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed">{story.story}</p>
//                   <div className="mt-4 pt-4 border-t border-gray-200">
//                     <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300">
//                       Read Full Story →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="relative py-16 bg-gradient-to-r  from-[#00695C]/95 to-[#004D40]/90 text-white z-10 overflow-hidden">
//   {/* Background Image */}
//   <div className="absolute inset-0 z-0">
//     <img 
//       src="/public/images/logo/photo-1641538225752-2d996ea204d4.avif" // Replace with your actual image path
//       alt="Impact background"
//       className="w-full h-full object-cover opacity-10"
//     />
//     {/* Optional dark overlay */}
    
//   </div>

//   {/* Content */}
//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//     <h2 className="text-4xl font-bold mb-4">Be Part of the Next Success Story</h2>
//     <p className="text-xl mb-8 max-w-3xl mx-auto">
//       Your support can transform lives and create lasting impact in communities across Maharashtra
//     </p>
//     <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//       <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-300 transition-colors duration-300 flex items-center justify-center">
//         <Heart className="w-5 h-5 mr-2" />
//         Donate Today
//       </button>
//       <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300 flex items-center justify-center">
//         <Users className="w-5 h-5 mr-2" />
//         Become a Volunteer
//       </button>
//       <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300 flex items-center justify-center">
//         <BookOpen className="w-5 h-5 mr-2" />
//         Learn More
//       </button>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default ImpactStories;




import React, { useState, useEffect } from 'react';
import { Star, Quote, Users, GraduationCap, Heart, BookOpen, Award, TrendingUp, Calendar, MapPin, User, ChevronLeft, ChevronRight, Play, Home, Shield, Globe } from 'lucide-react';

const ImpactStories = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const impactStats = [
    { icon: Users, number: "2500+", label: "Children Impacted", color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
    { icon: BookOpen, number: "12", label: "Years of Service", color: "text-teal-600", bgColor: "from-teal-50 to-teal-100" },
    { icon: GraduationCap, number: "85%", label: "Academic Improvement", color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
    { icon: Award, number: "50+", label: "Programs Conducted", color: "text-teal-600", bgColor: "from-teal-50 to-teal-100" },
    { icon: Home, number: "15", label: "Community Centers", color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
    { icon: Shield, number: "95%", label: "Retention Rate", color: "text-teal-600", bgColor: "from-teal-50 to-teal-100" },
    { icon: Globe, number: "8", label: "Partner Organizations", color: "text-orange-600", bgColor: "from-orange-50 to-orange-100" },
    { icon: Heart, number: "100+", label: "Active Volunteers", color: "text-teal-600", bgColor: "from-teal-50 to-teal-100" }
  ];

  // Student Testimonials/Reviews
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 16,
      location: "Vasai, Maharashtra",
      program: "Educational Support Program",
      rating: 5,
      image: "/public/images/stories/premium_photo-1723568666044-1b066e26b1fb.avif",
      testimonial: "Ashwamedh Foundation changed my life completely. I was struggling with my studies due to financial constraints, but their support helped me excel in my 10th standard with 92% marks. Now I'm pursuing science stream with dreams of becoming a doctor.",
      achievement: "92% in 10th Standard"
    },
    {
      id: 2,
      name: "Rohit Patil",
      age: 18,
      location: "Virar, Maharashtra",
      program: "Skill Development Program",
      rating: 5,
      image: "/public/images/stories/istockphoto-477224026-612x612.webp",
      testimonial: "The skill development program at Ashwamedh Foundation equipped me with computer skills and soft skills. Today, I'm working as a junior developer in a tech company. The foundation didn't just educate me; they transformed my entire family's future.",
      achievement: "Secured Job as Junior Developer"
    },
    {
      id: 3,
      name: "Sneha Pawar",
      age: 17,
      location: "Thane, Maharashtra",
      program: "Women Empowerment Initiative",
      rating: 5,
      image: "/public/images/stories/istockphoto-1154707848-612x612.webp",
      testimonial: "Through Ashwamedh Foundation's women empowerment program, I learned leadership skills and gained confidence to speak in public. I'm now the head girl of my school and actively participate in community development activities.",
      achievement: "School Head Girl & Community Leader"
    },
    {
      id: 4,
      name: "Arjun Singh",
      age: 19,
      location: "Mumbai Suburban",
      program: "Higher Education Support",
      rating: 5,
      image: "/public/images/stories/istockphoto-1154707848-612x612.webp",
      testimonial: "Without Ashwamedh Foundation's scholarship program, college education would have remained a dream. They supported me throughout my engineering course. I'm now placed in a multinational company and actively contribute back to the foundation.",
      achievement: "Engineering Graduate - MNC Placement"
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      id: 1,
      title: "Digital Literacy Program - Transforming Rural Education",
      location: "Vasai-Virar Region",
      duration: "2023-2024",
      beneficiaries: 250,
      image: "/public/images/stories/istockphoto-2217164634-612x612.jpg",
      challenge: "Limited access to digital education in rural communities, affecting students' competitiveness in the modern job market.",
      solution: "Established 5 digital learning centers with computers, tablets, and high-speed internet connectivity. Trained local teachers in digital pedagogy.",
      impact: "250 students gained digital literacy skills, 40 students secured jobs in IT sector, 85% improvement in academic performance.",
      testimonial: "This program bridged the digital divide in our community. My daughter now confidently uses technology for learning. - Sunita Devi, Parent"
    },
    {
      id: 2,
      title: "Healthcare for All - Mobile Medical Units",
      location: "Mumbai & Thane Districts",
      duration: "2022-ongoing",
      beneficiaries: 1500,
      image: "/public/images/stories/istockphoto-1130931397-612x612.webp",
      challenge: "Inadequate healthcare access in remote areas, leading to preventable diseases and mortality.",
      solution: "Deployed 3 mobile medical units with qualified doctors, nurses, and medical equipment. Conducted regular health camps and awareness programs.",
      impact: "1500+ patients treated, 50 critical cases referred to hospitals, 90% reduction in preventable diseases in target areas.",
      testimonial: "The mobile medical unit saved my father's life. Early detection of diabetes helped us manage his condition effectively. - Ramesh Kumar, Beneficiary"
    },
    {
      id: 3,
      title: "Skill Development & Employment Initiative",
      location: "Virar Industrial Belt",
      duration: "2023-2024",
      beneficiaries: 180,
      image: "/public/images/stories/photo-1625111381887-458fce74a923.avif",
      challenge: "High unemployment among youth due to lack of industry-relevant skills and job placement support.",
      solution: "Partnered with local industries to design skill training programs in manufacturing, IT, and service sectors. Included soft skills training and job placement assistance.",
      impact: "180 youth trained, 150 successfully placed in jobs, average salary increase of 200%, 95% job retention rate after 1 year.",
      testimonial: "The skill training program changed my life. From being unemployed to earning ₹25,000 per month - it's like a miracle. - Deepak Sharma, Program Graduate"
    }
  ];

  // Success Stories
  const successStories = [
    {
      title: "From Street Child to Software Engineer",
      student: "Vikash Kumar",
      image: "/public/images/stories/photo-1706088946925-55e4bfacfbdb.avif",
      story: "Vikash was living on the streets when Ashwamedh Foundation found him at age 12. He joined our residential care program, completed his schooling with dedication, and discovered a passion for technology. Today, he works as a software engineer at a top tech company and mentors kids like him."
    },
    {
      title: "Breaking the Cycle of Poverty",
      student: "Meera Joshi",
      image: "/public/images/stories/download.jpg",
      story: "Raised in a village where education wasn't encouraged for girls, Meera dreamed of something more. With our support, she pursued her studies and became the first graduate in her family. She now runs a community learning center impacting 100+ children."
    },
    {
      title: "Empowering Through Art",
      student: "Raj Patel",
      image: "/public/images/stories/photo-1722239650159-1b9c2a80fb04.avif",
      story: "Raj discovered his love for painting through our creative arts program. His talent quickly flourished, leading to gallery exhibitions across Mumbai. Today, he teaches art to underprivileged children, helping them express and heal through creativity."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <section className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/public/images/projects/photo-1659451336016-00d62d32f677.avif"
            alt="Impact background"
            className="w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight drop-shadow-lg">
            Stories of <span className="text-orange-200">Impact</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-orange-100 drop-shadow-sm">
            Transforming lives through education, healthcare, and community empowerment.
          </p>
          <div className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-orange-100 max-w-4xl mx-auto leading-relaxed sm:leading-loose">
            <p className="mb-4 sm:mb-6">
              At <span className="text-white font-semibold">Ashwamedh Foundation</span>, we believe in the power of stories to inspire action. 
              Each success is a journey fueled by resilience, compassion, and opportunity.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 md:h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Impact in Numbers</h2>
            <p className="text-lg sm:text-xl text-gray-600">Measuring the difference we've made together</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-orange-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mb-3 sm:mb-4 shadow-sm">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: stat.color }} />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Student Voices</h2>
            <p className="text-lg sm:text-xl text-gray-600">Hear from the lives we've touched</p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-orange-200"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-orange-300 mb-4 mx-auto md:mx-0" />
                  <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].testimonial}"
                  </p>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-sm sm:text-base text-gray-600">Age: {testimonials[activeTestimonial].age} | {testimonials[activeTestimonial].location}</p>
                    <p className="text-sm sm:text-base text-orange-600 font-medium">{testimonials[activeTestimonial].program}</p>
                    <p className="text-sm sm:text-base text-teal-600 font-semibold mt-2">✨ {testimonials[activeTestimonial].achievement}</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  index === activeTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Case Studies</h2>
            <p className="text-lg sm:text-xl text-gray-600">Deep dive into our transformative programs</p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-3xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={caseStudies[activeCaseStudy].image}
                    alt={caseStudies[activeCaseStudy].title}
                    className="w-full h-48 sm:h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 sm:p-8 md:p-12">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 space-y-2 sm:space-y-0">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mr-0 sm:mr-4 self-start">
                      Case Study {activeCaseStudy + 1}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                      {caseStudies[activeCaseStudy].duration}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {caseStudies[activeCaseStudy].title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 text-gray-600 space-y-1 sm:space-y-0">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span className="text-sm sm:text-base">{caseStudies[activeCaseStudy].location}</span>
                    </div>
                    <div className="flex items-center sm:ml-4">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span className="text-sm sm:text-base">{caseStudies[activeCaseStudy].beneficiaries} beneficiaries</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 text-sm sm:text-base">Challenge:</h4>
                      <p className="text-gray-700 text-sm sm:text-base">{caseStudies[activeCaseStudy].challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-600 mb-2 text-sm sm:text-base">Solution:</h4>
                      <p className="text-gray-700 text-sm sm:text-base">{caseStudies[activeCaseStudy].solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2 text-sm sm:text-base">Impact:</h4>
                      <p className="text-gray-700 text-sm sm:text-base">{caseStudies[activeCaseStudy].impact}</p>
                    </div>
                    <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-400">
                      <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mb-2" />
                      <p className="text-gray-700 italic text-sm sm:text-base">{caseStudies[activeCaseStudy].testimonial}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={prevCaseStudy}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
            <button
              onClick={nextCaseStudy}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCaseStudy(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  index === activeCaseStudy ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-600">Celebrating journeys of transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={story.image}
                  alt={story.student}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <div className="flex items-center mb-4">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 mr-2" />
                    <span className="text-sm sm:text-base text-orange-600 font-semibold">{story.student}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{story.story}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="text-sm sm:text-base text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90 text-white z-10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/public/images/logo/photo-1641538225752-2d996ea204d4.avif"
            alt="Impact background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Be Part of the Next Success Story</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Your support can transform lives and create lasting impact in communities across Maharashtra
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-orange-300 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Donate Today
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Become a Volunteer
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactStories;