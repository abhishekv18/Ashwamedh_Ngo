// import React, { useEffect } from 'react';
// import { 
//   BookOpen, 
//   Heart, 
//   Users, 
//   Target, 
//   Award, 
//   ArrowRight,
//   GraduationCap,
//   Home,
//   Leaf,
//   HandHeart,
//   MapPin,
//   Computer,
//   School,
//   Lightbulb,
//   Star,
//   TrendingUp
// } from 'lucide-react';


// const ProgramsOverviewA = () => {




//   const programs = [
//     {
//       id: 1,
//       title: "Ashwamedh's NGO Centers",
//       subtitle: "Community-Based Learning Hubs",
//       description: "Strategically located centers in Mumbai and Thane slum areas, mobilizing local underprivileged children and providing foundational educational courses. Our grassroots approach ensures direct community impact and sustainable development.",
//       longDescription: "These centers serve as beacons of hope in underserved communities, offering a safe learning environment where children can access quality education, nutritious meals, and mentorship. Each center is staffed with trained educators and volunteers who understand the local context and challenges.",
//       icon: <Home className="w-8 h-8" />,
//       beneficiaries: "500+ Children",
//       locations: "12 Centers",
//       features: [
//         "Daily educational activities",
//         "Nutritional support programs",
//         "Community engagement initiatives",
//         "Parent awareness workshops"
//       ],
//       color: "from-orange-500 to-orange-600",
//       bgColor: "bg-orange-50",
//       borderColor: "border-orange-200"
//     },
//     {
//       id: 2,
//       title: "Ashwamedh's Vocational Education & Skill Development Program",
//       subtitle: "AVESDP - Empowering Through Skills",
//       description: "Comprehensive certificate courses from KG to PG levels, covering Personality Development, Computer Basics, and Life Skills. Building capabilities that transform lives and create sustainable livelihoods.",
//       longDescription: "Our skill development program bridges the gap between education and employment by providing practical, industry-relevant training. We focus on developing both technical skills and soft skills that are essential for personal and professional success.",
//       icon: <Computer className="w-8 h-8" />,
//       beneficiaries: "300+ Students",
//       locations: "8 Training Centers",
//       features: [
//         "Industry-aligned curriculum",
//         "Hands-on practical training",
//         "Placement assistance",
//         "Entrepreneurship support"
//       ],
//       color: "from-teal-600 to-teal-700",
//       bgColor: "bg-teal-50",
//       borderColor: "border-teal-200"
//     },
//     {
//       id: 3,
//       title: "Ashwamedh's Streets and Slum Children School",
//       subtitle: "ASSCS - Education for Every Child",
//       description: "Dedicated schools for street children, ensuring no child is left behind in their educational journey. Providing comprehensive basic education with a focus on rehabilitation and integration into mainstream society.",
//       longDescription: "Recognizing that street children face unique challenges, our specialized schools provide not just education but also psychological support, healthcare, and life skills training. We work towards complete rehabilitation and social integration.",
//       icon: <School className="w-8 h-8" />,
//       beneficiaries: "200+ Street Children",
//       locations: "Planning Phase",
//       features: [
//         "Flexible learning schedules",
//         "Trauma-informed care approach",
//         "Basic healthcare services",
//         "Family reunification support"
//       ],
//       color: "from-orange-600 to-red-600",
//       bgColor: "bg-red-50",
//       borderColor: "border-red-200"
//     }
//   ];
// const supportPrograms = [
//   {
//     title: "Health & Nutrition",
//     description: "Regular health check-ups, nutritional meals, and health awareness programs",
//     icon: <Heart />,
//     bgColor: "bg-orange-500",
//     bgImage: "/public/images/logo/gettyimages-1344964565-612x612.jpg" // replace with your path
//   },
//   {
//     title: "Creative Arts",
//     description: "Music, dance, painting, and craft activities to nurture creativity and self-expression",
//     icon: <Star />,
//     bgColor: "bg-teal-600",
//     bgImage: "/public/images/logo/istockphoto-1440778816-612x612.webp"
//   },
//   {
//     title: "Sports & Recreation",
//     description: "Physical activities and sports programs to promote healthy lifestyle and teamwork",
//     icon: <Target />,
//     bgColor: "bg-orange-500",
//     bgImage: "/public/images/logo/photo-1666713918240-f069b98957b6.avif"
//   },
//   {
//     title: "Counseling Support",
//     description: "Psychological support and guidance for children facing emotional challenges",
//     icon: <HandHeart />,
//     bgColor: "bg-teal-500",
//     bgImage: "/public/images/logo/premium_photo-1667219556197-8f7e0db9c186.avif"
//   }
// ];

//   const stats = [
//     {
//       number: "1000+",
//       label: "Children Impacted",
//       icon: <Users className="w-8 h-8" />,
//       color: "text-orange-600"
//     },
//     {
//       number: "20+",
//       label: "Active Programs",
//       icon: <BookOpen className="w-8 h-8" />,
//       color: "text-teal-600"

//     },
//     {
//       number: "15+",
//       label: "Community Centers",
//       icon: <MapPin className="w-8 h-8" />,
//       color: "text-orange-600"
//     },
//     {
//       number: "95%",
//       label: "Success Rate",
//       icon: <TrendingUp className="w-8 h-8" />,
//       color: "text-teal-600"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
//       {/* Hero Section */}
     
      
// <section className="relative py-32 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
  
//   {/* Background Image + Overlay */}
//   <div className="absolute inset-0">
//     <img 
//       src="/images/logo/istockphoto-1740994754-612x612.webp" 
//       alt="Children Education Background"
//       className="w-full h-full object-cover opacity-50"
//      // style={{ backgroundAttachment: 'fixed' }}
//     />
//     <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85"></div>
//   </div>

//   {/* Content */}
//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center">
//       <h1 className="text-5xl md:text-6xl font-bold mb-6">
//         Our <span className="text-orange-200">Programs</span>
//       </h1>
//       <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
//         Transforming lives through education, skill development, and community empowerment
//       </p>

//       {/* 🔽 Additional Taglines */}
//       <div className="mt-7 space-y-4 text-lg md:text-xl text-orange-100 max-w-3xl mx-auto">
//         <p>📚 Uplifting children through quality education</p>
//         <p>💼 Empowering youth with vocational training</p>
      
//       </div>
//     </div>
//   </div>

//   {/* Fade Bottom Gradient */}
//   <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
// </section>

//       {/* Stats Section */}
//       <div className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 hover:scale-105 transition-transform duration-300">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className={`${stat.color} mb-4 flex justify-center`}>
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Programs Section */}
//       <div className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Our Core <span className="text-orange-600">Programs</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive initiatives designed to address the multifaceted needs of underprivileged children and communities
//             </p>
//           </div>

//           <div className="space-y-16">
//             {programs.map((program, index) => (
//               <div key={program.id} className={`${program.bgColor} rounded-3xl p-8 md:p-12 ${program.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300`}>
//                 <div className={`grid md:grid-cols-2 gap-8 md:gap-12 ${index % 2 === 1 ? 'md:grid-flow-col-reverse' : ''}`}>
//                   <div className="space-y-6">
//                     <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${program.color} text-white rounded-2xl shadow-lg`}>
//                       {program.icon}
//                     </div>
                    
//                     <div>
//                       <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//                         {program.title}
//                       </h3>
//                       <p className="text-lg font-semibold text-gray-700 mb-4">
//                         {program.subtitle}
//                       </p>
//                       <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                         {program.description}
//                       </p>
//                       <p className="text-gray-600 leading-relaxed mb-6">
//                         {program.longDescription}
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="bg-white rounded-xl p-4 shadow-sm">
//                         <div className="text-2xl font-bold text-gray-900">{program.beneficiaries}</div>
//                         <div className="text-sm text-gray-600">Beneficiaries</div>
//                       </div>
//                       <div className="bg-white rounded-xl p-4 shadow-sm">
//                         <div className="text-2xl font-bold text-gray-900">{program.locations}</div>
//                         <div className="text-sm text-gray-600">Locations</div>
//                       </div>
//                     </div>

//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-gray-900 text-lg">Key Features:</h4>
//                       <ul className="space-y-2">
//                         {program.features.map((feature, idx) => (
//                           <li key={idx} className="flex items-center text-gray-700">
//                             <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${program.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
//                       Learn More
//                       <ArrowRight className="ml-2 w-5 h-5" />
//                     </button>
//                   </div>

//                   <div className="relative">
//                     <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
//                       <div className={`w-32 h-32 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center text-white shadow-xl`}>
//                         <div className="scale-150">
//                           {program.icon}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full shadow-lg"></div>
//                     <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500 rounded-full shadow-lg"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Support Programs Section */}
//       <div className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Supporting <span className="text-teal-600">Initiatives</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Complementary programs that ensure holistic development and well-being of our beneficiaries
//             </p>
//           </div>

        
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//   {supportPrograms.map((program, index) => (
//     <div
//       key={index}
//       className={`relative rounded-2xl p-6 text-white shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${program.bgColor}`}
//     >
//       {/* Background Image Overlay */}
//       <img
//         src={program.bgImage}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
//       />
//       <div className="relative z-10">
//         <div className={`mb-4`}>
//           {React.cloneElement(program.icon, { className: 'w-7 h-7' })}
//         </div>
//         <h3 className="text-lg font-bold mb-2">{program.title}</h3>
//         <p className="text-sm leading-relaxed">{program.description}</p>
//       </div>
//     </div>
//   ))}
// </div>

//         </div>
//       </div>

//       <div className="relative py-20 overflow-hidden">
//   {/* Background Image */}
//   <div className="absolute inset-0 z-0 opacity-50">
//     <img 
//       src="/public/images/logo/gettyimages-535555239-612x612.jpg" // ✅ Update with correct path
//       alt="Background"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>

//   {/* Main Content */}
//   <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//       Join Our Mission
//     </h2>
//     <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
//       Every child deserves a chance to dream, learn, and succeed. Be part of the change that transforms lives and builds stronger communities.
//     </p>
//     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//       <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
//         Donate Now
//       </button>
//       <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-1">
//         Volunteer With Us
//       </button>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default ProgramsOverviewA;



import React, { useEffect } from 'react';
import { 
  BookOpen, 
  Heart, 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  GraduationCap,
  Home,
  Leaf,
  HandHeart,
  MapPin,
  Computer,
  School,
  Lightbulb,
  Star,
  TrendingUp
} from 'lucide-react';


const ProgramsOverviewA = () => {




  const programs = [
    {
      id: 1,
      title: "Ashwamedh's NGO Centers",
      subtitle: "Community-Based Learning Hubs",
      description: "Strategically located centers in Mumbai and Thane slum areas, mobilizing local underprivileged children and providing foundational educational courses. Our grassroots approach ensures direct community impact and sustainable development.",
      longDescription: "These centers serve as beacons of hope in underserved communities, offering a safe learning environment where children can access quality education, nutritious meals, and mentorship. Each center is staffed with trained educators and volunteers who understand the local context and challenges.",
      icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />,
      beneficiaries: "500+ Children",
      locations: "12 Centers",
      features: [
        "Daily educational activities",
        "Nutritional support programs",
        "Community engagement initiatives",
        "Parent awareness workshops"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 2,
      title: "Ashwamedh's Vocational Education & Skill Development Program",
      subtitle: "AVESDP - Empowering Through Skills",
      description: "Comprehensive certificate courses from KG to PG levels, covering Personality Development, Computer Basics, and Life Skills. Building capabilities that transform lives and create sustainable livelihoods.",
      longDescription: "Our skill development program bridges the gap between education and employment by providing practical, industry-relevant training. We focus on developing both technical skills and soft skills that are essential for personal and professional success.",
      icon: <Computer className="w-6 h-6 sm:w-8 sm:h-8" />,
      beneficiaries: "300+ Students",
      locations: "8 Training Centers",
      features: [
        "Industry-aligned curriculum",
        "Hands-on practical training",
        "Placement assistance",
        "Entrepreneurship support"
      ],
      color: "from-teal-600 to-teal-700",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      id: 3,
      title: "Ashwamedh's Streets and Slum Children School",
      subtitle: "ASSCS - Education for Every Child",
      description: "Dedicated schools for street children, ensuring no child is left behind in their educational journey. Providing comprehensive basic education with a focus on rehabilitation and integration into mainstream society.",
      longDescription: "Recognizing that street children face unique challenges, our specialized schools provide not just education but also psychological support, healthcare, and life skills training. We work towards complete rehabilitation and social integration.",
      icon: <School className="w-6 h-6 sm:w-8 sm:h-8" />,
      beneficiaries: "200+ Street Children",
      locations: "Planning Phase",
      features: [
        "Flexible learning schedules",
        "Trauma-informed care approach",
        "Basic healthcare services",
        "Family reunification support"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];
const supportPrograms = [
  {
    title: "Health & Nutrition",
    description: "Regular health check-ups, nutritional meals, and health awareness programs",
    icon: <Heart />,
    bgColor: "bg-orange-500",
    bgImage: "/public/images/logo/gettyimages-1344964565-612x612.jpg" // replace with your path
  },
  {
    title: "Creative Arts",
    description: "Music, dance, painting, and craft activities to nurture creativity and self-expression",
    icon: <Star />,
    bgColor: "bg-teal-600",
    bgImage: "/public/images/logo/istockphoto-1440778816-612x612.webp"
  },
  {
    title: "Sports & Recreation",
    description: "Physical activities and sports programs to promote healthy lifestyle and teamwork",
    icon: <Target />,
    bgColor: "bg-orange-500",
    bgImage: "/public/images/logo/photo-1666713918240-f069b98957b6.avif"
  },
  {
    title: "Counseling Support",
    description: "Psychological support and guidance for children facing emotional challenges",
    icon: <HandHeart />,
    bgColor: "bg-teal-500",
    bgImage: "/public/images/logo/premium_photo-1667219556197-8f7e0db9c186.avif"
  }
];

  const stats = [
    {
      number: "1000+",
      label: "Children Impacted",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-orange-600"
    },
    {
      number: "20+",
      label: "Active Programs",
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-teal-600"

    },
    {
      number: "15+",
      label: "Community Centers",
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-orange-600"
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Hero Section */}
     
      
<section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden">
  
  {/* Background Image + Overlay */}
  <div className="absolute inset-0">
    <img 
      src="/images/logo/istockphoto-1740994754-612x612.webp" 
      alt="Children Education Background"
      className="w-full h-full object-cover opacity-50"
     // style={{ backgroundAttachment: 'fixed' }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
        Our <span className="text-orange-200">Programs</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed px-4">
        Transforming lives through education, skill development, and community empowerment
      </p>

      {/* 🔽 Additional Taglines */}
      <div className="mt-6 sm:mt-7 space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-orange-100 max-w-3xl mx-auto px-4">
        <p>📚 Uplifting children through quality education</p>
        <p>💼 Empowering youth with vocational training</p>
      
      </div>
    </div>
  </div>

  {/* Fade Bottom Gradient */}
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 hover:scale-105 transition-transform duration-300">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-3 sm:mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Programs Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Our Core <span className="text-orange-600">Programs</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive initiatives designed to address the multifaceted needs of underprivileged children and communities
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {programs.map((program, index) => (
              <div key={program.id} className={`${program.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 ${program.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className={`grid gap-6 sm:gap-8 md:gap-12 ${index % 2 === 1 ? 'lg:grid-cols-2 lg:grid-flow-col-reverse' : 'lg:grid-cols-2'}`}>
                  <div className="space-y-4 sm:space-y-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${program.color} text-white rounded-xl sm:rounded-2xl shadow-lg`}>
                      {program.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                        {program.title}
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                        {program.subtitle}
                      </p>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        {program.description}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                        {program.longDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                        <div className="text-lg sm:text-2xl font-bold text-gray-900">{program.beneficiaries}</div>
                        <div className="text-xs sm:text-sm text-gray-600">Beneficiaries</div>
                      </div>
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                        <div className="text-lg sm:text-2xl font-bold text-gray-900">{program.locations}</div>
                        <div className="text-xs sm:text-sm text-gray-600">Locations</div>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Key Features:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${program.color} text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>

                  <div className="relative order-first lg:order-none">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center">
                      <div className={`w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center text-white shadow-xl`}>
                        <div className="scale-125 sm:scale-150">
                          {program.icon}
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full shadow-lg"></div>
                    <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-teal-500 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Programs Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Supporting <span className="text-teal-600">Initiatives</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Complementary programs that ensure holistic development and well-being of our beneficiaries
            </p>
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
  {supportPrograms.map((program, index) => (
    <div
      key={index}
      className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${program.bgColor}`}
    >
      {/* Background Image Overlay */}
      <img
        src={program.bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <div className="relative z-10">
        <div className={`mb-3 sm:mb-4`}>
          {React.cloneElement(program.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7' })}
        </div>
        <h3 className="text-base sm:text-lg font-bold mb-2">{program.title}</h3>
        <p className="text-sm leading-relaxed">{program.description}</p>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

      <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0 opacity-50">
    <img 
      src="/public/images/logo/gettyimages-535555239-612x612.jpg" // ✅ Update with correct path
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>

  {/* Main Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
      Join Our Mission
    </h2>
    <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
      Every child deserves a chance to dream, learn, and succeed. Be part of the change that transforms lives and builds stronger communities.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
      <button className="w-full sm:w-auto bg-white text-orange-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-sm sm:text-base">
        Donate Now
      </button>
      <button className="w-full sm:w-auto border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
        Volunteer With Us
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default ProgramsOverviewA;