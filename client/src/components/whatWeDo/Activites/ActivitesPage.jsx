// import React, { useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight, BookOpen, Users, Award, MapPin, Wrench, Heart, Leaf, Droplets, Bird, Gift, User } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ImageCarousel = ({ images, title }) => {

// const navigate=useNavigate();
//   const user = useSelector((state) => state.auth.user);
//     useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
//       <div className="relative w-full h-full">
//         <img
//           src={images[currentIndex]}
//           alt={`${title} - Image ${currentIndex + 1}`}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//       </div>
      
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200"
//       >
//         <ChevronLeft size={20} />
//       </button>
      
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200"
//       >
//         <ChevronRight size={20} />
//       </button>
      
//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-200 ${
//               index === currentIndex ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ActivityCard = ({ icon: Icon, title, description, activities, images }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//       <div className="p-6">
//         <div className="flex items-center mb-4">
//           <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg">
//             <Icon className="text-white" size={24} />
//           </div>
//           <h3 className="text-xl font-bold text-gray-800 ml-4">{title}</h3>
//         </div>
        
//         <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
//         <ImageCarousel images={images} title={title} />
        
//         <div className="mt-6">
//           <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
//           <ul className="space-y-2">
//             {activities.map((activity, index) => (
//               <li key={index} className="flex items-start">
//                 <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                 <span className="text-gray-700 text-sm">{activity}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         <div className="mt-6 pt-4 border-t border-gray-100">
//           <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ActivitiesPage = () => {
//   // Mock images for children activities
//   const educationImages = [
//     "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1581726690015-c9861cf5d673?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"
//   ];

//   const healthcareImages = [
//     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop"
//   ];

//   const environmentImages = [
//     "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1574263867128-a3d5c1b1debc?w=500&h=300&fit=crop"
//   ];

//   const socialImages = [
//     "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=300&fit=crop"
//   ];

//   const activities = [
//     {
//       icon: BookOpen,
//       title: "Education & Development",
//       description: "Empowering children from economically disadvantaged backgrounds through comprehensive educational programs, skill development, and career guidance to build a brighter future.",
//       activities: [
//         "Career Guidance seminars with industry experts",
//         "Professional Certificate Courses for skill enhancement",
//         "Academic and artistic competitions to nurture talent",
//         "Educational trips to broaden horizons",
//         "Creative workshops in arts and culture",
//         "Scholarship programs for deserving students"
//       ],
//       images: educationImages
//     },
//     {
//       icon: Heart,
//       title: "Healthcare & Wellness",
//       description: "Ensuring access to quality healthcare services for underserved communities through regular medical camps, health awareness programs, and preventive care initiatives.",
//       activities: [
//         "Regular medical checkup camps for general public",
//         "Health awareness and education programs",
//         "Nutrition and diet counseling sessions",
//         "Preventive healthcare workshops",
//         "Mental health support initiatives",
//         "Emergency medical assistance programs"
//       ],
//       images: healthcareImages
//     },
//     {
//       icon: Leaf,
//       title: "Environment & Sustainability",
//       description: "Promoting environmental consciousness and sustainable practices through community engagement, conservation efforts, and educational initiatives for a greener tomorrow.",
//       activities: [
//         "Tree plantation drives across Mumbai and suburbs",
//         "Cleanliness and recycling awareness campaigns",
//         "Pollution control and environmental protection",
//         "Birds and animal welfare programs",
//         "Environmental health seminars and forums",
//         "Community clean-up drives and events"
//       ],
//       images: environmentImages
//     },
//     {
//       icon: Gift,
//       title: "Social Causes & Community",
//       description: "Addressing various social challenges through charitable initiatives, community support programs, and advocacy for marginalized groups in society.",
//       activities: [
//         "Daan Utsav - Joy of Giving Week celebrations",
//         "Clothes and relief material distribution",
//         "Women empowerment campaigns and programs",
//         "Girl child education advocacy",
//         "Community celebration events with NGO children",
//         "Support for various social causes through rallies and debates"
//       ],
//       images: socialImages
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 ">
//       {/* Hero Section */}
//    {/* <div className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700  text-white py-16 overflow-hidden">
 
//   <div className="absolute inset-0 z-0 opacity-60">
//     <img 
//       src="/public/images/projects/istockphoto-488209444-612x612.jpg"  // ✅ Replace with actual image path
//       alt="Activities Background"
//       className="w-full h-full object-cover"
//     />
//   </div>

 
//   <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85 z-10"></div>


//   <div className="relative z-20 container mx-auto px-4">
//     <div className="text-center">
//       <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Activities</h1>
//       <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
//         Transforming lives through education, healthcare, environmental conservation, and community development
//       </p>
//       <div className="flex justify-center items-center space-x-8 text-lg">
//         <div className="flex items-center">
//           <Users className="mr-2" size={24} />
//           <span>1000+ Lives Impacted</span>
//         </div>
//         <div className="flex items-center">
//           <Award className="mr-2" size={24} />
//           <span>50+ Programs Running</span>
//         </div>
//       </div>
//     </div>
    
//   </div>
//      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
// </div> */}
// <div className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white py-28 overflow-hidden">
//   {/* Background Image Layer */}
//   <div className="absolute inset-0 z-0 opacity-60">
//     <img 
//       src="/public/images/projects/istockphoto-488209444-612x612.jpg"
//       alt="Activities Background"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85 z-10"></div>

//   {/* Content */}
//   <div className="relative z-20 container mx-auto px-4">
//     <div className="text-center">
//       <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className='text-orange-200' >Activities</span></h1>
//       <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
//         Transforming lives through education, healthcare, environmental conservation, and community development
//       </p>

//       <div className="flex justify-center items-center space-x-8 text-lg mb-12">
//         <div className="flex items-center">
//           <Users className="mr-2" size={24} />
//           <span>1000+ Lives Impacted</span>
//         </div>
//         <div className="flex items-center">
//           <Award className="mr-2" size={24} />
//           <span>50+ Programs Running</span>
//         </div>
//       </div>

//       {/* ✨ New Activity Highlights */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-5 text-center">
//         <div>
//           <div className="text-3xl mb-2">📚</div>
//           <h3 className="text-xl font-semibold mb-2">Education for All</h3>
//           <p className="opacity-90">Providing quality education to underprivileged children across Maharashtra.</p>
//         </div>
//         <div>
//           <div className="text-3xl mb-2">🩺</div>
//           <h3 className="text-xl font-semibold mb-2">Accessible Healthcare</h3>
//           <p className="opacity-90">Organizing medical camps and health awareness programs in rural areas.</p>
//         </div>
//         <div>
//           <div className="text-3xl mb-2">🌱</div>
//           <h3 className="text-xl font-semibold mb-2">Green Initiatives</h3>
//           <p className="opacity-90">Promoting environmental sustainability through tree plantations and clean-ups.</p>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Bottom Gradient Fade */}
//   <div className="absolute bottom-0 left-0 right-0 h-20 z-20 bg-gradient-to-t from-white to-transparent"></div>
// </div>


//       {/* Mission Statement */}
//       <div className="py-16 bg-gradient-to-t from-orange-100 to-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               At Ashwamedh Foundation, we are committed to creating sustainable positive change in our communities. Through our comprehensive approach spanning education, healthcare, environmental conservation, and social welfare, we work tirelessly to uplift the underprivileged and build a more equitable society for all.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Activities Grid */}
//       <div className="py-16 bg-gradient-to-t from-orange-50 to-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Key Activity Areas</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Discover how we're making a difference across multiple domains to create lasting impact in communities
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {activities.map((activity, index) => (
//               <ActivityCard key={index} {...activity} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Impact Statistics */}
//      <div className="relative py-16 text-white overflow-hidden">
//   {/* Background Image Layer */}
//   <div className="absolute inset-0 z-0 opacity-60">
//     <img 
//       src="/public/images/logo/gettyimages-535555239-612x612.jpg"  // ✅ Replace with your actual image path
//       alt="Impact Background"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* Gradient Overlay Layer */}
//   <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90 z-10"></div>

//   {/* Content Layer */}
//   <div className="relative z-20 container mx-auto px-4">
//     <div className="text-center mb-12">
//       <h2 className="text-3xl font-bold mb-4">Our Impact by Numbers</h2>
//       <p className="text-xl">Making measurable difference in communities across Mumbai and beyond</p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//       <div className="text-center">
//         <div className="text-4xl font-bold text-orange-300 mb-2">1000+</div>
//         <div className="text-lg">Children Educated</div>
//       </div>
//       <div className="text-center">
//         <div className="text-4xl font-bold text-orange-300 mb-2">500+</div>
//         <div className="text-lg">Medical Checkups</div>
//       </div>
//       <div className="text-center">
//         <div className="text-4xl font-bold text-orange-300 mb-2">2000+</div>
//         <div className="text-lg">Trees Planted</div>
//       </div>
//       <div className="text-center">
//         <div className="text-4xl font-bold text-orange-300 mb-2">50+</div>
//         <div className="text-lg">Communities Served</div>
//       </div>
//     </div>
//   </div>
// </div>


//       {/* Call to Action */}
//       <div className="py-16 bg-gradient-to-t from-orange-100 to-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Mission</h2>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Every contribution, no matter how small, makes a significant difference. Be part of our journey to create positive change and build stronger, more sustainable communities.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium">
//                 Volunteer With Us
//               </button>
//               <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200 font-medium">
//                 Make a Donation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivitiesPage;




import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Users, Award, MapPin, Wrench, Heart, Leaf, Droplets, Bird, Gift, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ImageCarousel = ({ images, title }) => {

const navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);
    useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-md transition-all duration-200"
      >
        <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-md transition-all duration-200"
      >
        <ChevronRight size={16} className="sm:w-5 sm:h-5" />
      </button>
      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ActivityCard = ({ icon: Icon, title, description, activities, images }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 sm:p-3 rounded-lg">
            <Icon className="text-white" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 ml-3 sm:ml-4">{title}</h3>
        </div>
        
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{description}</p>
        
        <ImageCarousel images={images} title={title} />
        
        <div className="mt-4 sm:mt-6">
          <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Key Activities:</h4>
          <ul className="space-y-2">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-xs sm:text-sm">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium text-sm sm:text-base w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const ActivitiesPage = () => {
  // Mock images for children activities
 const educationalTripImages = [
  "/public/education/IMG-20250624-WA0003.jpg",
  "/public/education/IMG-20250624-WA0008.jpg",
  "/public/education/IMG-20250624-WA0009.jpg",
  "/public/education/IMG-20250624-WA0016.jpg"
];

const daanUtsavImages = [
  "/public/daanUtsav/IMG-20250624-WA0067.jpg",
  "/public/daanUtsav/PXL_20241002_092136850.MP.jpg",
  "/public/daanUtsav/PXL_20241006_111420623.MP.jpg",
  "/public/daanUtsav/Screenshot_20250617-201520.png"
];

const sportsImages = [
  "/public/sports/DSC07454.JPG",
  "/public/sports/DSC07763.JPG",
  "/public/sports/WhatsApp Image 2025-06-29 at 1.35.05 PM.jpeg",
  "/public/sports/WhatsApp Image 2025-06-29 at 1.36.02 PM.jpeg"
];

const scienceExhibitionImages = [
  "/public/science/WhatsApp Image 2025-06-29 at 1.38.29 PM.jpeg",
  "/public/science/WhatsApp Image 2025-06-29 at 1.40.43 PM.jpeg",
  "/public/science/WhatsApp Image 2025-06-29 at 1.43.18 PM.jpeg",
  "/public/science/WhatsApp Image 2025-06-29 at 1.45.52 PM.jpeg"
];

const activities = [
  {
    icon: BookOpen,
    title: "Educational Trips",
    description: "Organizing immersive educational excursions to museums, science centers, historical sites, and industries to provide practical learning experiences beyond the classroom.",
    activities: [
      "Visits to science museums and planetariums",
      "Historical site exploration and cultural learning",
      "Industrial visits to understand real-world applications",
      "Nature camps and wildlife sanctuary trips",
      "Art galleries and cultural center visits",
      "Interactive workshops at educational institutions"
    ],
    images: educationalTripImages
  },
  {
    icon: Gift,
    title: "Daan Utsav - Joy of Giving",
    description: "Celebrating the spirit of giving through community-driven donation drives, spreading happiness and support to those in need during the Joy of Giving Week.",
    activities: [
      "Community donation drives for clothes and essentials",
      "Food distribution programs for underprivileged families",
      "Book and stationery collection for students",
      "Toy donation drives for children in need",
      "Fundraising events for social causes",
      "Volunteer recruitment and engagement programs"
    ],
    images: daanUtsavImages
  },
  {
    icon: Heart,
    title: "Sports & Physical Activities",
    description: "Promoting physical fitness, teamwork, and healthy competition through various sports activities and athletic programs for children and youth.",
    activities: [
      "Annual sports tournaments and competitions",
      "Cricket, football, and basketball training sessions",
      "Athletics and track field events",
      "Indoor games like chess, carrom, and table tennis",
      "Yoga and fitness workshops",
      "Sports equipment distribution programs"
    ],
    images: sportsImages
  },
  {
    icon: Leaf,
    title: "Science Project Exhibitions",
    description: "Fostering scientific curiosity and innovation through hands-on project exhibitions, encouraging students to explore STEM subjects creatively.",
    activities: [
      "Annual science fair and project competitions",
      "Robotics and technology workshops",
      "Environmental science project displays",
      "Mathematics and physics experiment demonstrations",
      "Innovation and invention showcases",
      "STEM mentorship and guidance programs"
    ],
    images: scienceExhibitionImages
  }
];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white py-16 sm:py-20 md:py-28 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="/public/images/projects/istockphoto-488209444-612x612.jpg"
            alt="Activities Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-85 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our <span className='text-orange-200'>Activities</span></h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Transforming lives through education, healthcare, environmental conservation, and community development
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-base sm:text-lg mb-8 sm:mb-12">
              <div className="flex items-center">
                <Users className="mr-2" size={20} />
                <span>1000+ Lives Impacted</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2" size={20} />
                <span>50+ Programs Running</span>
              </div>
            </div>

            {/* Activity Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mt-5 text-center px-4">
              <div className="p-4">
                <div className="text-2xl sm:text-3xl mb-2">📚</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Education for All</h3>
                <p className="opacity-90 text-sm sm:text-base">Providing quality education to underprivileged children across Maharashtra.</p>
              </div>
              <div className="p-4">
                <div className="text-2xl sm:text-3xl mb-2">🩺</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Accessible Healthcare</h3>
                <p className="opacity-90 text-sm sm:text-base">Organizing medical camps and health awareness programs in rural areas.</p>
              </div>
              <div className="p-4">
                <div className="text-2xl sm:text-3xl mb-2">🌱</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Green Initiatives</h3>
                <p className="opacity-90 text-sm sm:text-base">Promoting environmental sustainability through tree plantations and clean-ups.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 z-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Mission Statement */}
      <div className="py-12 sm:py-16 bg-gradient-to-t from-orange-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At Ashwamedh Foundation, we are committed to creating sustainable positive change in our communities. Through our comprehensive approach spanning education, healthcare, environmental conservation, and social welfare, we work tirelessly to uplift the underprivileged and build a more equitable society for all.
            </p>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="py-12 sm:py-16 bg-gradient-to-t from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Key Activity Areas</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we're making a difference across multiple domains to create lasting impact in communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="relative py-12 sm:py-16 text-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="/public/images/logo/gettyimages-535555239-612x612.jpg"
            alt="Impact Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90 z-10"></div>

        {/* Content Layer */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Impact by Numbers</h2>
            <p className="text-lg sm:text-xl">Making measurable difference in communities across Mumbai and beyond</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">1000+</div>
              <div className="text-sm sm:text-lg">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">500+</div>
              <div className="text-sm sm:text-lg">Medical Checkups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">2000+</div>
              <div className="text-sm sm:text-lg">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">50+</div>
              <div className="text-sm sm:text-lg">Communities Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 sm:py-16 bg-gradient-to-t from-orange-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Join Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Every contribution, no matter how small, makes a significant difference. Be part of our journey to create positive change and build stronger, more sustainable communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium w-full sm:w-auto">
                Volunteer With Us
              </button>
              <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 sm:px-8 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200 font-medium w-full sm:w-auto">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;