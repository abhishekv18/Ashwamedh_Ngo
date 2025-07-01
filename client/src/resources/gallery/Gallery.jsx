// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users, Heart, Play, Pause } from 'lucide-react';

// const GalleryPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [categorySlide, setCategorySlide] = useState(0);
//   const carouselRef = useRef(null);
//   const categoryRef = useRef(null);

//   // Gallery categories with sample images
//   const categories = [
//     { id: 'all', name: 'All Gallery', icon: Heart, count: 72 },
//     { id: 'aakar', name: 'Project Aakar', icon: Users, count: 10, description: 'Shaping futures through structured development' },
//     { id: 'ankur', name: 'Project Ankur', icon: Heart, count: 10, description: 'Nurturing growth from the roots' },
//     { id: 'anubhav', name: 'Project Anubhav', icon: Calendar, count: 10, description: 'Creating meaningful experiences' },
//     { id: 'aakash', name: 'Project Aakash', icon: Users, count: 10, description: 'Reaching for limitless possibilities' },
//     { id: 'mudbad', name: 'Mudbad Center', icon: MapPin, count: 12, description: 'Community programs and outreach' },
//     { id: 'vasai', name: 'AFKC Vasai Center', icon: MapPin, count: 10, description: 'Educational and skill development hub' },
//     { id: 'activities', name: 'Activities & Events', icon: Calendar, count: 6, description: 'Special events and community gatherings' },
//     { id: 'team', name: 'Our Team', icon: Users, count: 4, description: 'Meet the people behind the mission' }
//   ];

//   // Sample gallery data
//   const galleryData = {
//     aakar: Array.from({ length: 10 }, (_, i) => ({
//       id: `aakar-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 1}`,
//       title: `Project Aakar - Initiative ${i + 1}`,
//       description: 'Shaping lives through structured development programs and skill building workshops',
//       category: 'aakar',
//       featured: i === 0
//     })),
//     ankur: Array.from({ length: 10 }, (_, i) => ({
//       id: `ankur-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 11}`,
//       title: `Project Ankur - Growth ${i + 1}`,
//       description: 'Nurturing young minds and fostering growth from grassroots level',
//       category: 'ankur',
//       featured: i === 0
//     })),
//     anubhav: Array.from({ length: 10 }, (_, i) => ({
//       id: `anubhav-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 21}`,
//       title: `Project Anubhav - Experience ${i + 1}`,
//       description: 'Creating meaningful experiences that transform lives and communities',
//       category: 'anubhav',
//       featured: i === 0
//     })),
//     aakash: Array.from({ length: 10 }, (_, i) => ({
//       id: `aakash-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 31}`,
//       title: `Project Aakash - Sky ${i + 1}`,
//       description: 'Reaching for limitless possibilities and empowering dreams to soar',
//       category: 'aakash',
//       featured: i === 0
//     })),
//     mudbad: Array.from({ length: 12 }, (_, i) => ({
//       id: `mudbad-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 41}`,
//       title: `Mudbad Center - Activity ${i + 1}`,
//       description: 'Community outreach programs, workshops, and development initiatives at Mudbad',
//       category: 'mudbad',
//       featured: i === 0
//     })),
//     vasai: Array.from({ length: 10 }, (_, i) => ({
//       id: `vasai-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 53}`,
//       title: `AFKC Vasai Center - Program ${i + 1}`,
//       description: 'Educational excellence and skill development at our AFKC Vasai center',
//       category: 'vasai',
//       featured: i === 0
//     })),
//     activities: Array.from({ length: 6 }, (_, i) => ({
//       id: `activities-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 63}`,
//       title: `Foundation Activity ${i + 1}`,
//       description: 'Special events, celebrations, and community engagement activities',
//       category: 'activities',
//       featured: i === 0
//     })),
//     team: Array.from({ length: 4 }, (_, i) => ({
//       id: `team-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 69}`,
//       title: `Team Member ${i + 1}`,
//       description: 'Dedicated professionals working tirelessly for community development',
//       category: 'team',
//       featured: i === 0
//     }))
//   };

//   const allImages = Object.values(galleryData).flat();
//   const filteredImages = selectedCategory === 'all' ? allImages : galleryData[selectedCategory] || [];

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlaying && filteredImages.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentSlide(prev => (prev + 1) % Math.ceil(filteredImages.length / getSlidesPerView()));
//       }, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoPlaying, filteredImages.length, currentSlide]);

//   // Get slides per view based on screen size
//   const getSlidesPerView = () => {
//     if (typeof window !== 'undefined') {
//       if (window.innerWidth < 640) return 1;
//       if (window.innerWidth < 768) return 2;
//       if (window.innerWidth < 1024) return 3;
//       return 4;
//     }
//     return 4;
//   };

//   const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

//   useEffect(() => {
//     const handleResize = () => {
//       setSlidesPerView(getSlidesPerView());
//       setCurrentSlide(0);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//     setIsAutoPlaying(false);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//     setIsAutoPlaying(true);
//   };

//   const nextSlide = () => {
//     const maxSlides = Math.ceil(filteredImages.length / slidesPerView);
//     setCurrentSlide(prev => (prev + 1) % maxSlides);
//   };

//   const prevSlide = () => {
//     const maxSlides = Math.ceil(filteredImages.length / slidesPerView);
//     setCurrentSlide(prev => (prev - 1 + maxSlides) % maxSlides);
//   };

//   const nextImage = () => {
//     const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
//     const nextIndex = (currentIndex + 1) % filteredImages.length;
//     setSelectedImage(filteredImages[nextIndex]);
//   };

//   const prevImage = () => {
//     const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
//     const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
//     setSelectedImage(filteredImages[prevIndex]);
//   };

//   const scrollCategories = (direction) => {
//     const container = categoryRef.current;
//     if (container) {
//       const scrollAmount = 200;
//       container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (isModalOpen) {
//         if (e.key === 'Escape') closeModal();
//         if (e.key === 'ArrowRight') nextImage();
//         if (e.key === 'ArrowLeft') prevImage();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isModalOpen, selectedImage, filteredImages]);

//   // Reset slide when category changes
//   useEffect(() => {
//     setCurrentSlide(0);
//   }, [selectedCategory]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div 
//           className="h-60 sm:h-80 lg:h-96 flex items-center justify-center text-white relative"
//           style={{
//             background: 'linear-gradient(135deg, #FF6B35 0%, #FF5722 50%, #E64A19 100%)',
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-20"></div>
//           <div className="relative z-10 text-center px-4">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Our Gallery</h1>
//             <p className="text-sm sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
//               Discover the impact of our work through moments captured in time. 
//               Every image tells a story of hope, compassion, and positive change.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Category Navigation */}
//       <div className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
//           <div className="text-center mb-6 sm:mb-8">
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Explore Our Impact</h2>
//             <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
//               Browse through our comprehensive gallery showcasing our projects, centers, activities, and team.
//             </p>
//           </div>
          
//           <div className="relative">
//             <button
//               onClick={() => scrollCategories('left')}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all lg:hidden"
//             >
//               <ChevronLeft size={20} />
//             </button>
            
//             <div 
//               ref={categoryRef}
//               className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 px-8 lg:px-0 lg:justify-center"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {categories.map((category) => {
//                 const IconComponent = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`flex flex-col items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl whitespace-nowrap transition-all duration-300 min-w-max ${
//                       selectedCategory === category.id
//                         ? 'text-white shadow-lg transform scale-105'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
//                     }`}
//                     style={{
//                       backgroundColor: selectedCategory === category.id ? '#FF5722' : undefined,
//                     }}
//                   >
//                     <div className="flex items-center gap-2">
//                       <IconComponent size={16} className="sm:w-5 sm:h-5" />
//                       <span className="font-semibold text-xs sm:text-sm">{category.name}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className={`text-xs px-2 py-1 rounded-full ${
//                         selectedCategory === category.id
//                           ? 'bg-white bg-opacity-20 text-white'
//                           : 'bg-gray-300 text-gray-600'
//                       }`}>
//                         {category.count} photos
//                       </span>
//                     </div>
//                     {category.description && (
//                       <p className={`text-xs text-center max-w-32 hidden sm:block ${
//                         selectedCategory === category.id ? 'text-white opacity-90' : 'text-gray-500'
//                       }`}>
//                         {category.description}
//                       </p>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
            
//             <button
//               onClick={() => scrollCategories('right')}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all lg:hidden"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Carousel Gallery */}
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
//         <div className="mb-6 sm:mb-8">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//                 {categories.find(cat => cat.id === selectedCategory)?.name || 'All Gallery'}
//               </h2>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} in this collection
//               </p>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                 className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
//               >
//                 {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
//                 <span className="hidden sm:inline">
//                   {isAutoPlaying ? 'Pause' : 'Play'}
//                 </span>
//               </button>
              
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={prevSlide}
//                   disabled={filteredImages.length <= slidesPerView}
//                   className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   disabled={filteredImages.length <= slidesPerView}
//                   className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {selectedCategory !== 'all' && (
//             <p className="text-sm text-gray-500 italic mt-2">
//               {categories.find(cat => cat.id === selectedCategory)?.description}
//             </p>
//           )}
//         </div>

//         {/* Carousel Container */}
//         <div className="relative overflow-hidden rounded-2xl">
//           {filteredImages.length > 0 ? (
//             <>
//               <div 
//                 ref={carouselRef}
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ 
//                   transform: `translateX(-${currentSlide * 100}%)`,
//                   width: `${Math.ceil(filteredImages.length / slidesPerView) * 100}%`
//                 }}
//               >
//                 {Array.from({ length: Math.ceil(filteredImages.length / slidesPerView) }).map((_, slideIndex) => (
//                   <div key={slideIndex} className="w-full flex gap-4 sm:gap-6">
//                     {filteredImages
//                       .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
//                       .map((image) => (
//                         <div
//                           key={image.id}
//                           className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 flex-1"
//                           onClick={() => openModal(image)}
//                         >
//                           <div className="relative overflow-hidden">
//                             <img
//                               src={image.url}
//                               alt={image.title}
//                               className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
//                             {image.featured && (
//                               <div className="absolute top-3 right-3">
//                                 <span 
//                                   className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg"
//                                   style={{ backgroundColor: '#FF5722' }}
//                                 >
//                                   ★ Featured
//                                 </span>
//                               </div>
//                             )}
//                             <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                               <h4 className="font-bold text-sm mb-1 line-clamp-1">{image.title}</h4>
//                               <p className="text-xs opacity-90 line-clamp-2">{image.description}</p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                   </div>
//                 ))}
//               </div>
              
//               {/* Slide Indicators */}
//               <div className="flex justify-center mt-6 gap-2">
//                 {Array.from({ length: Math.ceil(filteredImages.length / slidesPerView) }).map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       currentSlide === index ? 'w-8' : 'bg-gray-300 hover:bg-gray-400'
//                     }`}
//                     style={{
//                       backgroundColor: currentSlide === index ? '#FF5722' : undefined
//                     }}
//                   />
//                 ))}
//               </div>
//             </>
//           ) : (
//             <div className="text-center py-16">
//               <div className="text-gray-400 mb-4">
//                 <Heart size={64} className="mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
//               <p className="text-gray-500">Try selecting a different category</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedImage && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
//           <div className="relative max-w-4xl w-full max-h-screen">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
//             >
//               <X size={20} className="sm:w-6 sm:h-6" />
//             </button>
            
//             <button
//               onClick={prevImage}
//               className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
//             >
//               <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
//             </button>
            
//             <button
//               onClick={nextImage}
//               className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
//             >
//               <ChevronRight size={20} className="sm:w-6 sm:h-6" />
//             </button>

//             <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-full overflow-y-auto">
//               <img
//                 src={selectedImage.url}
//                 alt={selectedImage.title}
//                 className="w-full max-h-60 sm:max-h-96 object-cover"
//               />
//               <div className="p-4 sm:p-6">
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
//                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{selectedImage.description}</p>
//                 <div className="mt-4 flex items-center gap-2">
//                   <span 
//                     className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
//                     style={{ backgroundColor: '#FF5722' }}
//                   >
//                     {categories.find(cat => cat.id === selectedImage.category)?.name}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users, Heart, Play, Pause, ArrowRight, Star, Award, Target, Sparkles, Phone, Mail, ExternalLink } from 'lucide-react';

// const GalleryPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [categorySlide, setCategorySlide] = useState(0);
//   const [isVisible, setIsVisible] = useState({});
//   const carouselRef = useRef(null);
//   const categoryRef = useRef(null);

//   // Gallery categories with enhanced data
//   const categories = [
//     { id: 'all', name: 'All Gallery', icon: Sparkles, count: 72, color: '#FF5722' },
//     { id: 'aakar', name: 'Project Aakar', icon: Target, count: 10, description: 'Shaping futures through structured development', color: '#4CAF50' },
//     { id: 'ankur', name: 'Project Ankur', icon: Heart, count: 10, description: 'Nurturing growth from the roots', color: '#2196F3' },
//     { id: 'anubhav', name: 'Project Anubhav', icon: Star, count: 10, description: 'Creating meaningful experiences', color: '#9C27B0' },
//     { id: 'aakash', name: 'Project Aakash', icon: Award, count: 10, description: 'Reaching for limitless possibilities', color: '#FF9800' },
//     { id: 'mudbad', name: 'Mudbad Center', icon: MapPin, count: 12, description: 'Community programs and outreach', color: '#607D8B' },
//     { id: 'vasai', name: 'AFKC Vasai Center', icon: MapPin, count: 10, description: 'Educational and skill development hub', color: '#795548' },
//     { id: 'activities', name: 'Activities & Events', icon: Calendar, count: 6, description: 'Special events and community gatherings', color: '#E91E63' },
//     { id: 'team', name: 'Our Team', icon: Users, count: 4, description: 'Meet the people behind the mission', color: '#3F51B5' }
//   ];

//   // Sample gallery data
//   const galleryData = {
//     aakar: Array.from({ length: 10 }, (_, i) => ({
//       id: `aakar-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 1}`,
//       title: `Project Aakar - Initiative ${i + 1}`,
//       description: 'Shaping lives through structured development programs and skill building workshops',
//       category: 'aakar',
//       featured: i === 0,
//       date: '2024-12-15'
//     })),
//     ankur: Array.from({ length: 10 }, (_, i) => ({
//       id: `ankur-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 11}`,
//       title: `Project Ankur - Growth ${i + 1}`,
//       description: 'Nurturing young minds and fostering growth from grassroots level',
//       category: 'ankur',
//       featured: i === 0,
//       date: '2024-12-10'
//     })),
//     anubhav: Array.from({ length: 10 }, (_, i) => ({
//       id: `anubhav-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 21}`,
//       title: `Project Anubhav - Experience ${i + 1}`,
//       description: 'Creating meaningful experiences that transform lives and communities',
//       category: 'anubhav',
//       featured: i === 0,
//       date: '2024-12-05'
//     })),
//     aakash: Array.from({ length: 10 }, (_, i) => ({
//       id: `aakash-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 31}`,
//       title: `Project Aakash - Sky ${i + 1}`,
//       description: 'Reaching for limitless possibilities and empowering dreams to soar',
//       category: 'aakash',
//       featured: i === 0,
//       date: '2024-11-28'
//     })),
//     mudbad: Array.from({ length: 12 }, (_, i) => ({
//       id: `mudbad-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 41}`,
//       title: `Mudbad Center - Activity ${i + 1}`,
//       description: 'Community outreach programs, workshops, and development initiatives at Mudbad',
//       category: 'mudbad',
//       featured: i === 0,
//       date: '2024-11-20'
//     })),
//     vasai: Array.from({ length: 10 }, (_, i) => ({
//       id: `vasai-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 53}`,
//       title: `AFKC Vasai Center - Program ${i + 1}`,
//       description: 'Educational excellence and skill development at our AFKC Vasai center',
//       category: 'vasai',
//       featured: i === 0,
//       date: '2024-11-15'
//     })),
//     activities: Array.from({ length: 6 }, (_, i) => ({
//       id: `activities-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 63}`,
//       title: `Foundation Activity ${i + 1}`,
//       description: 'Special events, celebrations, and community engagement activities',
//       category: 'activities',
//       featured: i === 0,
//       date: '2024-11-10'
//     })),
//     team: Array.from({ length: 4 }, (_, i) => ({
//       id: `team-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 69}`,
//       title: `Team Member ${i + 1}`,
//       description: 'Dedicated professionals working tirelessly for community development',
//       category: 'team',
//       featured: i === 0,
//       date: '2024-11-05'
//     }))
//   };

//   const allImages = Object.values(galleryData).flat();
//   const filteredImages = selectedCategory === 'all' ? allImages : galleryData[selectedCategory] || [];

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('[data-animate]');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlaying && filteredImages.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentSlide(prev => (prev + 1) % Math.ceil(filteredImages.length / getSlidesPerView()));
//       }, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoPlaying, filteredImages.length, currentSlide]);

//   // Get slides per view based on screen size
//   const getSlidesPerView = () => {
//     if (typeof window !== 'undefined') {
//       if (window.innerWidth < 640) return 1;
//       if (window.innerWidth < 768) return 2;
//       if (window.innerWidth < 1024) return 3;
//       return 4;
//     }
//     return 4;
//   };

//   const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

//   useEffect(() => {
//     const handleResize = () => {
//       setSlidesPerView(getSlidesPerView());
//       setCurrentSlide(0);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//     setIsAutoPlaying(false);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//     setIsAutoPlaying(true);
//   };

//   const nextSlide = () => {
//     const maxSlides = Math.ceil(filteredImages.length / slidesPerView);
//     setCurrentSlide(prev => (prev + 1) % maxSlides);
//   };

//   const prevSlide = () => {
//     const maxSlides = Math.ceil(filteredImages.length / slidesPerView);
//     setCurrentSlide(prev => (prev - 1 + maxSlides) % maxSlides);
//   };

//   const nextImage = () => {
//     const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
//     const nextIndex = (currentIndex + 1) % filteredImages.length;
//     setSelectedImage(filteredImages[nextIndex]);
//   };

//   const prevImage = () => {
//     const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
//     const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
//     setSelectedImage(filteredImages[prevIndex]);
//   };

//   const scrollCategories = (direction) => {
//     const container = categoryRef.current;
//     if (container) {
//       const scrollAmount = 200;
//       container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (isModalOpen) {
//         if (e.key === 'Escape') closeModal();
//         if (e.key === 'ArrowRight') nextImage();
//         if (e.key === 'ArrowLeft') prevImage();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isModalOpen, selectedImage, filteredImages]);

//   // Reset slide when category changes
//   useEffect(() => {
//     setCurrentSlide(0);
//   }, [selectedCategory]);

//   const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Enhanced Hero Section */}
//       <div className="relative overflow-hidden">
//         <div 
//           className="h-72 sm:h-96 lg:h-[500px] flex items-center justify-center text-white relative"
//           style={{
//             background: 'linear-gradient(135deg, #FF6B35 0%, #FF5722 30%, #E64A19 70%, #D84315 100%)',
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-30"></div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
          
//           {/* Animated background elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
//             <div className="absolute bottom-32 right-16 w-24 h-24 bg-white opacity-5 rounded-full animate-pulse delay-300"></div>
//             <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-700"></div>
//           </div>
          
//           <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" data-animate id="hero">
//             <div className={`transition-all duration-1000 transform ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
//                 Our <span className="text-yellow-300">Gallery</span>
//               </h1>
//               <p className="text-lg sm:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed mb-8">
//                 Discover the impact of our work through moments captured in time. 
//                 Every image tells a story of <span className="font-semibold text-yellow-300">hope</span>, 
//                 <span className="font-semibold text-yellow-300"> compassion</span>, and 
//                 <span className="font-semibold text-yellow-300"> positive change</span>.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <div className="flex items-center gap-2 text-yellow-300">
//                   <Sparkles size={20} />
//                   <span className="text-sm font-medium">{allImages.length} Inspiring Moments</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-yellow-300">
//                   <Award size={20} />
//                   <span className="text-sm font-medium">4 Active Projects</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Category Navigation */}
//       <div className="bg-white shadow-lg border-b border-gray-200 z-40">
//         <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
//           <div className="text-center mb-6 sm:mb-8" data-animate id="nav-header">
//             <div className={`transition-all duration-700 transform ${isVisible['nav-header'] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Explore Our Impact</h2>
//               <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
//                 Browse through our comprehensive gallery showcasing our projects, centers, activities, and team.
//               </p>
//             </div>
//           </div>
          
//           <div className="relative">
//             <button
//               onClick={() => scrollCategories('left')}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all lg:hidden hover:scale-105"
//             >
//               <ChevronLeft size={20} />
//             </button>
            
//             <div 
//               ref={categoryRef}
//               className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2 px-12 lg:px-0 lg:justify-center"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {categories.map((category, index) => {
//                 const IconComponent = category.icon;
//                 const isSelected = selectedCategory === category.id;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`flex flex-col items-center gap-3 px-5 sm:px-7 py-4 sm:py-5 rounded-2xl whitespace-nowrap transition-all duration-500 min-w-max transform hover:scale-105 ${
//                       isSelected
//                         ? 'text-white shadow-2xl scale-105'
//                         : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg shadow-md'
//                     }`}
//                     style={{
//                       backgroundColor: isSelected ? category.color : undefined,
//                       animationDelay: `${index * 100}ms`
//                     }}
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className={`p-2 rounded-lg ${isSelected ? 'bg-white bg-opacity-20' : 'bg-gray-100'}`}>
//                         <IconComponent size={18} className={`sm:w-5 sm:h-5 ${isSelected ? 'text-white' : ''}`} style={{ color: !isSelected ? category.color : undefined }} />
//                       </div>
//                       <span className="font-bold text-sm sm:text-base">{category.name}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${
//                         isSelected
//                           ? 'bg-white bg-opacity-20 text-white'
//                           : 'text-gray-600'
//                       }`} style={{ backgroundColor: !isSelected ? `${category.color}15` : undefined, color: !isSelected ? category.color : undefined }}>
//                         {category.count} photos
//                       </span>
//                     </div>
//                     {category.description && (
//                       <p className={`text-xs text-center max-w-36 hidden sm:block leading-relaxed ${
//                         isSelected ? 'text-white opacity-90' : 'text-gray-500'
//                       }`}>
//                         {category.description}
//                       </p>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
            
//             <button
//               onClick={() => scrollCategories('right')}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all lg:hidden hover:scale-105"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Carousel Gallery */}
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
//         <div className="mb-8 sm:mb-12" data-animate id="gallery-header">
//           <div className={`transition-all duration-700 transform ${isVisible['gallery-header'] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
//               <div>
//                 <div className="flex items-center gap-3 mb-3">
//                   {selectedCategoryData && (
//                     <div className="p-2 rounded-lg" style={{ backgroundColor: `${selectedCategoryData.color}15` }}>
//                       <selectedCategoryData.icon size={24} style={{ color: selectedCategoryData.color }} />
//                     </div>
//                   )}
//                   <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//                     {selectedCategoryData?.name || 'All Gallery'}
//                   </h2>
//                 </div>
//                 <p className="text-gray-600 text-base sm:text-lg mb-2">
//                   {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} in this collection
//                 </p>
//                 {selectedCategory !== 'all' && selectedCategoryData?.description && (
//                   <p className="text-sm text-gray-500 italic">
//                     {selectedCategoryData.description}
//                   </p>
//                 )}
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <button
//                   onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                   className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 rounded-xl transition-all text-sm font-medium shadow-md hover:shadow-lg border border-gray-200"
//                 >
//                   {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
//                   <span className="hidden sm:inline">
//                     {isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
//                   </span>
//                 </button>
                
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={prevSlide}
//                     disabled={filteredImages.length <= slidesPerView}
//                     className="p-3 rounded-xl bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg border border-gray-200"
//                   >
//                     <ChevronLeft size={20} />
//                   </button>
//                   <button
//                     onClick={nextSlide}
//                     disabled={filteredImages.length <= slidesPerView}
//                     className="p-3 rounded-xl bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg border border-gray-200"
//                   >
//                     <ChevronRight size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Carousel Container */}
//         <div className="realtive overflow-hidden rounded-3xl bg-white p-6 shadow-xl" data-animate id="carousel">
//           <div className={`transition-all duration-700 transform ${isVisible.carousel ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//             {filteredImages.length > 0 ? (
//               <>
//                 <div 
//                   ref={carouselRef}
//                   className="flex transition-transform duration-700 ease-out"
//                   style={{ 
//                     transform: `translateX(-${currentSlide * 100}%)`,
//                     width: `${Math.ceil(filteredImages.length / slidesPerView) * 100}%`
//                   }}
//                 >
//                   {Array.from({ length: Math.ceil(filteredImages.length / slidesPerView) }).map((_, slideIndex) => (
//                     <div key={slideIndex} className="w-full flex gap-6">
//                       {filteredImages
//                         .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
//                         .map((image) => (
//                           <div
//                             key={image.id}
//                             className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-3 flex-1 border border-gray-100"
//                             onClick={() => openModal(image)}
//                           >
//                             <div className="relative overflow-hidden">
//                               <img
//                                 src={image.url}
//                                 alt={image.title}
//                                 className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
//                               {image.featured && (
//                                 <div className="absolute top-4 right-4">
//                                   <span 
//                                     className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-sm"
//                                     style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}
//                                   >
//                                     <Star size={12} />
//                                     Featured
//                                   </span>
//                                 </div>
//                               )}
//                               <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//                                 <h4 className="font-bold text-base mb-2 line-clamp-1">{image.title}</h4>
//                                 <p className="text-sm opacity-90 line-clamp-2 leading-relaxed">{image.description}</p>
//                                 <div className="flex items-center justify-between mt-3">
//                                   <span className="text-xs opacity-75">{image.date}</span>
//                                   <ArrowRight size={16} className="opacity-75" />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Enhanced Slide Indicators */}
//                 <div className="flex justify-center mt-8 gap-2">
//                   {Array.from({ length: Math.ceil(filteredImages.length / slidesPerView) }).map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentSlide(index)}
//                       className={`h-2 rounded-full transition-all duration-300 ${
//                         currentSlide === index ? 'w-8 shadow-lg' : 'w-2 bg-gray-300 hover:bg-gray-400'
//                       }`}
//                       style={{
//                         backgroundColor: currentSlide === index ? (selectedCategoryData?.color || '#FF5722') : undefined
//                       }}
//                     />
//                   ))}
//                 </div>
//               </>
//             ) : (
//               <div className="text-center py-20">
//                 <div className="text-gray-400 mb-6">
//                   <Heart size={80} className="mx-auto" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-600 mb-3">No images found</h3>
//                 <p className="text-gray-500 text-lg">Try selecting a different category</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Modal */}
//       {isModalOpen && selectedImage && (
//         <div className=" inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 backdrop-blur-sm">
//           <div className="relative max-w-5xl w-full max-h-screen">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition-all hover:scale-110"
//             >
//               <X size={24} />
//             </button>
            
//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition-all hover:scale-110"
//             >
//               <ChevronLeft size={24} />
//             </button>
            
//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition-all hover:scale-110"
//             >
//               <ChevronRight size={24} />
//             </button>

//             <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-full overflow-y-auto">
//               <img
//                 src={selectedImage.url}
//                 alt={selectedImage.title}
//                 className="w-full max-h-60 sm:max-h-[500px] object-cover"
//               />
//               <div className="p-6 sm:p-8">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
//                     <p className="text-gray-500 text-sm">{selectedImage.date}</p>
//                   </div>
//                   {selectedImage.featured && (
//                     <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}>
//                       <Star size={12} />
//                       Featured
//                     </span>
//                   )}
//                 </div>
//                 <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">{selectedImage.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span 
//                     className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
//                     style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}
//                   >
//                     {/* <selectedCategoryData?.icon size={16} /> */}
//                     {selectedCategoryData?.name}
//                   </span>
//                   <button className="text-gray-400 hover:text-gray-600 transition-colors">
//                     <ExternalLink size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Statistics Section */}
//       <div className="bg-white border-t border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
//           <div className="text-center mb-6 sm:mb-8">
//             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Our Impact in Numbers</h3>
//             <p className="text-gray-600 text-sm sm:text-base">Every photograph represents lives touched and communities transformed</p>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 text-center">
//             <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
//               <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF5722' }}>
//                 4
//               </div>
//               <div className="text-gray-600 text-xs sm:text-sm">Active Projects</div>
//               <div className="text-xs text-gray-500 mt-1 hidden sm:block">Aakar • Ankur • Anubhav • Aakash</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
//               <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF5722' }}>
//                 2
//               </div>
//               <div className="text-gray-600 text-xs sm:text-sm">Centers</div>
//               <div className="text-xs text-gray-500 mt-1 hidden sm:block">Mudbad • AFKC Vasai</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
//               <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF5722' }}>
//                 {allImages.length}
//               </div>
//               <div className="text-gray-600 text-xs sm:text-sm">Photos</div>
//               <div className="text-xs text-gray-500 mt-1 hidden sm:block">Moments Captured</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
//               <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF5722' }}>
//                 500+
//               </div>
//               <div className="text-gray-600 text-xs sm:text-sm">Lives Impacted</div>
//               <div className="text-xs text-gray-500 mt-1 hidden sm:block">Across All Programs</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
//               <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF5722' }}>
//                 10+
//               </div>
//               <div className="text-gray-600 text-xs sm:text-sm">Team Members</div>
//               <div className="text-xs text-gray-500 mt-1 hidden sm:block">Dedicated Professionals</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
//               <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF5722' }}>
//                 ∞
//               </div>
//               <div className="text-gray-600 text-xs sm:text-sm">Hope Created</div>
//               <div className="text-xs text-gray-500 mt-1 hidden sm:block">Immeasurable Impact</div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default GalleryPage;



// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users, Heart, ArrowRight, Star, Award, Target, Sparkles, ExternalLink, Grid, List } from 'lucide-react';

// const GalleryPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
//   const [isVisible, setIsVisible] = useState({});
//   const galleryRef = useRef(null);

//   // Gallery categories with enhanced data
//   const categories = [
//     { id: 'all', name: 'All Gallery', icon: Sparkles, count: 72, color: '#FF5722' },
//     { id: 'aakar', name: 'Project Aakar', icon: Target, count: 10, description: 'Shaping futures through structured development', color: '#4CAF50' },
//     { id: 'ankur', name: 'Project Ankur', icon: Heart, count: 10, description: 'Nurturing growth from the roots', color: '#2196F3' },
//     { id: 'anubhav', name: 'Project Anubhav', icon: Star, count: 10, description: 'Creating meaningful experiences', color: '#9C27B0' },
//     { id: 'aakash', name: 'Project Aakash', icon: Award, count: 10, description: 'Reaching for limitless possibilities', color: '#FF9800' },
//     { id: 'mudbad', name: 'Mudbad Center', icon: MapPin, count: 12, description: 'Community programs and outreach', color: '#607D8B' },
//     { id: 'vasai', name: 'AFKC Vasai Center', icon: MapPin, count: 10, description: 'Educational and skill development hub', color: '#795548' },
//     { id: 'activities', name: 'Activities & Events', icon: Calendar, count: 6, description: 'Special events and community gatherings', color: '#E91E63' },
//     { id: 'team', name: 'Our Team', icon: Users, count: 4, description: 'Meet the people behind the mission', color: '#3F51B5' }
//   ];

//   // Sample gallery data
//   const galleryData = {
//     aakar: Array.from({ length: 10 }, (_, i) => ({
//       id: `aakar-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 1}`,
//       title: `Project Aakar - Initiative ${i + 1}`,
//       description: 'Shaping lives through structured development programs and skill building workshops',
//       category: 'aakar',
//       featured: i === 0,
//       date: 'Dec 15, 2024'
//     })),
//     ankur: Array.from({ length: 10 }, (_, i) => ({
//       id: `ankur-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 11}`,
//       title: `Project Ankur - Growth ${i + 1}`,
//       description: 'Nurturing young minds and fostering growth from grassroots level',
//       category: 'ankur',
//       featured: i === 0,
//       date: 'Dec 10, 2024'
//     })),
//     anubhav: Array.from({ length: 10 }, (_, i) => ({
//       id: `anubhav-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 21}`,
//       title: `Project Anubhav - Experience ${i + 1}`,
//       description: 'Creating meaningful experiences that transform lives and communities',
//       category: 'anubhav',
//       featured: i === 0,
//       date: 'Dec 5, 2024'
//     })),
//     aakash: Array.from({ length: 10 }, (_, i) => ({
//       id: `aakash-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 31}`,
//       title: `Project Aakash - Sky ${i + 1}`,
//       description: 'Reaching for limitless possibilities and empowering dreams to soar',
//       category: 'aakash',
//       featured: i === 0,
//       date: 'Nov 28, 2024'
//     })),
//     mudbad: Array.from({ length: 12 }, (_, i) => ({
//       id: `mudbad-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 41}`,
//       title: `Mudbad Center - Activity ${i + 1}`,
//       description: 'Community outreach programs, workshops, and development initiatives at Mudbad',
//       category: 'mudbad',
//       featured: i === 0,
//       date: 'Nov 20, 2024'
//     })),
//     vasai: Array.from({ length: 10 }, (_, i) => ({
//       id: `vasai-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 53}`,
//       title: `AFKC Vasai Center - Program ${i + 1}`,
//       description: 'Educational excellence and skill development at our AFKC Vasai center',
//       category: 'vasai',
//       featured: i === 0,
//       date: 'Nov 15, 2024'
//     })),
//     activities: Array.from({ length: 6 }, (_, i) => ({
//       id: `activities-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 63}`,
//       title: `Foundation Activity ${i + 1}`,
//       description: 'Special events, celebrations, and community engagement activities',
//       category: 'activities',
//       featured: i === 0,
//       date: 'Nov 10, 2024'
//     })),
//     team: Array.from({ length: 4 }, (_, i) => ({
//       id: `team-${i + 1}`,
//       url: `https://picsum.photos/800/600?random=${i + 69}`,
//       title: `Team Member ${i + 1}`,
//       description: 'Dedicated professionals working tirelessly for community development',
//       category: 'team',
//       featured: i === 0,
//       date: 'Nov 5, 2024'
//     }))
//   };

//   const allImages = Object.values(galleryData).flat();
//   const filteredImages = selectedCategory === 'all' ? allImages : galleryData[selectedCategory] || [];

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('[data-animate]');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const openModal = (image) => {
//     const imageIndex = filteredImages.findIndex(img => img.id === image.id);
//     setSelectedImage(image);
//     setCurrentImageIndex(imageIndex);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//   };

//   const nextImage = () => {
//     const nextIndex = (currentImageIndex + 1) % filteredImages.length;
//     setCurrentImageIndex(nextIndex);
//     setSelectedImage(filteredImages[nextIndex]);
//   };

//   const prevImage = () => {
//     const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
//     setCurrentImageIndex(prevIndex);
//     setSelectedImage(filteredImages[prevIndex]);
//   };

//   const goToImage = (index) => {
//     setCurrentImageIndex(index);
//     setSelectedImage(filteredImages[index]);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (isModalOpen) {
//         if (e.key === 'Escape') closeModal();
//         if (e.key === 'ArrowRight') nextImage();
//         if (e.key === 'ArrowLeft') prevImage();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isModalOpen, currentImageIndex, filteredImages]);

//   const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Clean Hero Section */}
//       <div className="relative bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
//           <div className="text-center" data-animate id="hero">
//             <div className={`transition-all duration-1000 transform ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//                 Our <span style={{ color: '#FF5722' }}>Gallery</span>
//               </h1>
//               <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
//                 Discover the impact of our work through moments captured in time. Every image tells a story of hope, compassion, and positive change.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
//                 <div className="flex items-center gap-2 text-gray-500">
//                   <Sparkles size={18} />
//                   <span>{allImages.length} Inspiring Moments</span>
//                 </div>
//                 <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
//                 <div className="flex items-center gap-2 text-gray-500">
//                   <Award size={18} />
//                   <span>4 Active Projects</span>
//                 </div>
//                 <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
//                 <div className="flex items-center gap-2 text-gray-500">
//                   <MapPin size={18} />
//                   <span>2 Centers</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Clean Category Navigation */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold text-gray-900">Browse Collections</h2>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setViewMode('grid')}
//                 className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
//               >
//                 <Grid size={18} />
//               </button>
//               <button
//                 onClick={() => setViewMode('list')}
//                 className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
//               >
//                 <List size={18} />
//               </button>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-3 overflow-x-auto pb-2">
//             {categories.map((category) => {
//               const IconComponent = category.icon;
//               const isSelected = selectedCategory === category.id;
//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
//                     isSelected
//                       ? 'text-white shadow-md'
//                       : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
//                   }`}
//                   style={{
//                     backgroundColor: isSelected ? category.color : undefined,
//                   }}
//                 >
//                   <IconComponent size={16} />
//                   <span className="font-medium text-sm">{category.name}</span>
//                   <span className={`text-xs px-2 py-0.5 rounded-full ${
//                     isSelected ? 'bg-white bg-opacity-20' : 'bg-gray-100'
//                   }`}>
//                     {category.count}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Gallery Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="mb-8" data-animate id="gallery-header">
//           <div className={`transition-all duration-700 transform ${isVisible['gallery-header'] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 {selectedCategoryData && (
//                   <div className="p-2 rounded-lg bg-gray-100">
//                     <selectedCategoryData.icon size={20} style={{ color: selectedCategoryData.color }} />
//                   </div>
//                 )}
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {selectedCategoryData?.name || 'All Gallery'}
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {selectedCategory !== 'all' && selectedCategoryData?.description && (
//               <p className="text-gray-600 mt-2">
//                 {selectedCategoryData.description}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         <div className="relative" data-animate id="gallery-grid">
//           <div className={`transition-all duration-700 transform ${isVisible['gallery-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//             {filteredImages.length > 0 ? (
//               <div className={`grid gap-6 ${
//                 viewMode === 'grid' 
//                   ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
//                   : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
//               }`}>
//                 {filteredImages.map((image, index) => (
//                   <div
//                     key={image.id}
//                     className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
//                     onClick={() => openModal(image)}
//                   >
//                     <div className="relative overflow-hidden">
//                       <img
//                         src={image.url}
//                         alt={image.title}
//                         className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
//                           viewMode === 'grid' ? 'h-48 sm:h-56' : 'h-64'
//                         }`}
//                       />
//                       {image.featured && (
//                         <div className="absolute top-3 right-3">
//                           <span 
//                             className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white"
//                             style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}
//                           >
//                             <Star size={12} fill="currentColor" />
//                             Featured
//                           </span>
//                         </div>
//                       )}
//                       <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                     </div>
//                     <div className="p-4">
//                       <h4 className="font-semibold text-gray-900 mb-1 line-clamp-1">{image.title}</h4>
//                       <p className="text-sm text-gray-600 mb-2 line-clamp-2">{image.description}</p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-gray-500">{image.date}</span>
//                         <ArrowRight size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-20">
//                 <div className="text-gray-300 mb-4">
//                   <Heart size={64} className="mx-auto" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
//                 <p className="text-gray-500">Try selecting a different category</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Modal */}
//       {isModalOpen && selectedImage && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
//           <div className="relative max-w-6xl w-full max-h-screen">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
//             >
//               <X size={20} />
//             </button>
            
//             {filteredImages.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
                
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </>
//             )}

//             <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-full overflow-y-auto">
//               <div className="relative">
//                 <img
//                   src={selectedImage.url}
//                   alt={selectedImage.title}
//                   className="w-full max-h-[60vh] object-cover"
//                 />
//                 {filteredImages.length > 1 && (
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-black bg-opacity-50 rounded-full px-3 py-1 text-white text-sm">
//                       {currentImageIndex + 1} / {filteredImages.length}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedImage.title}</h3>
//                     <p className="text-gray-500 text-sm">{selectedImage.date}</p>
//                   </div>
//                   {selectedImage.featured && (
//                     <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}>
//                       <Star size={12} fill="currentColor" />
//                       Featured
//                     </span>
//                   )}
//                 </div>
                
//                 <p className="text-gray-600 leading-relaxed mb-4">{selectedImage.description}</p>
                
//                 <div className="flex items-center justify-between">
//                   <span 
//                     className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white"
//                     style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}
//                   >
//                     <selectedCategoryData.icon size={14} />
//                     {selectedCategoryData?.name}
//                   </span>
//                   <button className="text-gray-400 hover:text-gray-600 transition-colors">
//                     <ExternalLink size={18} />
//                   </button>
//                 </div>
//               </div>
              
//               {/* Thumbnail Navigation */}
//               {filteredImages.length > 1 && (
//                 <div className="px-6 pb-6">
//                   <div className="flex gap-2 overflow-x-auto pb-2">
//                     {filteredImages.map((img, index) => (
//                       <button
//                         key={img.id}
//                         onClick={() => goToImage(index)}
//                         className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
//                           index === currentImageIndex ? 'border-orange-400' : 'border-transparent hover:border-gray-300'
//                         }`}
//                       >
//                         <img
//                           src={img.url}
//                           alt={img.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Clean Statistics Section */}
//       <div className="bg-white border-t border-gray-200 mt-16">
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Impact</h3>
//             <p className="text-gray-600">Every photograph represents lives touched and communities transformed</p>
//           </div>
          
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
//             <div className="bg-gray-50 rounded-lg p-4">
//               <div className="text-3xl font-bold mb-2" style={{ color: '#FF5722' }}>4</div>
//               <div className="text-gray-600 text-sm font-medium">Active Projects</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-4">
//               <div className="text-3xl font-bold mb-2" style={{ color: '#FF5722' }}>2</div>
//               <div className="text-gray-600 text-sm font-medium">Centers</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-4">
//               <div className="text-3xl font-bold mb-2" style={{ color: '#FF5722' }}>{allImages.length}</div>
//               <div className="text-gray-600 text-sm font-medium">Photos</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-4">
//               <div className="text-3xl font-bold mb-2" style={{ color: '#FF5722' }}>500+</div>
//               <div className="text-gray-600 text-sm font-medium">Lives Impacted</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-4">
//               <div className="text-3xl font-bold mb-2" style={{ color: '#FF5722' }}>10+</div>
//               <div className="text-gray-600 text-sm font-medium">Team Members</div>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-4">
//               <div className="text-3xl font-bold mb-2" style={{ color: '#FF5722' }}>∞</div>
//               <div className="text-gray-600 text-sm font-medium">Hope Created</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users, Heart, ArrowRight, Star, Award, Target, Sparkles, ExternalLink, Grid, List, Download, Share2, Info } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [isVisible, setIsVisible] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const galleryRef = useRef(null);

  
const categories = [
  { id: 'all', name: 'All Gallery', icon: Sparkles, count: 45, color: '#F97316' }, // orange
  { id: 'aakaar', name: 'Project Aakaar', icon: Target, count: 4, description: 'Shaping futures through structured development', color: '#14B8A6' }, // teal
  { id: 'ankur', name: 'Project Ankur', icon: Heart, count: 6, description: 'Nurturing growth from the roots', color: '#FACC15' }, // yellow
  { id: 'anubhav', name: 'Project Anubhav', icon: Star, count: 7, description: 'Creating meaningful experiences', color: '#6366F1' }, // indigo
  { id: 'aagaaz', name: 'Project Aagaaz', icon: Award, count: 5, description: 'Reaching for limitless possibilities', color: '#0EA5E9' }, // sky blue
  { id: 'mudbad', name: 'Mudbad Center', icon: MapPin, count: 7, description: 'Community programs and outreach', color: '#F43F5E' }, // rose
  // { id: 'vasai', name: 'AFKC Vasai Center', icon: MapPin, count: 10, description: 'Educational and skill development hub', color: '#10B981' }, // emerald
  { id: 'activities', name: 'Activities & Events', icon: Calendar, count: 12, description: 'Special events and community gatherings', color: '#F59E0B' }, // amber
  { id: 'team', name: 'Our Team', icon: Users, count: 4, description: 'Meet the people behind the mission', color: '#8B5CF6' } // violet
];


const activites=[
  '/public/images/gallery/acitivite/DSC04258.JPG',
  '/public/images/gallery/acitivite/DSC04272.JPG',
  '/public/images/gallery/acitivite/DSC04441.JPG',
  '/public/images/gallery/acitivite/DSC07353.JPG',
  '/public/images/gallery/acitivite/DSC07763.JPG',
  '/public/images/gallery/acitivite/DSC08719.JPG',
  '/public/images/gallery/acitivite/IMG-20250624-WA0006.jpg',
  '/public/images/gallery/acitivite/IMG-20250624-WA0008.jpg',
  '/public/images/gallery/acitivite/PXL_20231224_081433500.jpg',
  '/public/images/gallery/acitivite/PXL_20241002_092136850.MP.jpg',
  '/public/images/gallery/acitivite/PXL_20241027_123749321.MP.jpg',
  '/public/images/gallery/acitivite/Screenshot_20250617-201520.png'
]



const aakaar = [
  '/public/images/gallery/aakar/IMG-20250617-WA0006.jpg',
  '/public/images/gallery/aakar/IMG-20250617-WA0007.jpg',
  '/public/images/gallery/aakar/IMG-20250617-WA0008.jpg',
  '/public/images/gallery/aakar/Screenshot_20250617-200432.png'
  // ... add all 10 URLs
];

const ankur=[
  '/public/images/gallery/ankur/IMG_20221106_152014.jpg',
  '/public/images/gallery/ankur/IMG_20221211_154447.jpg',
  '/public/images/gallery/ankur/IMG-20250624-WA0074.jpg',
  '/public/images/gallery/ankur/PXL_20231203_113020303.jpg',
  '/public/images/gallery/ankur/PXL_20240331_120832312.jpg',
  '/public/images/gallery/ankur/Screenshot_20250617-202627.png'
]

const anubhav=[
  '/public/images/gallery/anubhav/461066296_27663762346556217_5654685511439310323_n.jpg',
  '/public/images/gallery/anubhav/461199582_27663761526556299_5099480767436467893_n.jpg',
  '/public/images/gallery/anubhav/486498541_1075497431272579_933779070453324177_n.jpg',
  '/public/images/gallery/anubhav/505785264_1133530795469242_3528162867965802800_n.jpg',
  '/public/images/gallery/anubhav/IMG-20250624-WA0030.jpg',
  '/public/images/gallery/anubhav/PXL_20231217_122734770.NIGHT.jpg',
  '/public/images/gallery/anubhav/Screenshot_20250617-202601.png'
]

const aagaaz=[
  '/public/images/gallery/aagaaz/IMG-20240819-WA0003.jpg',
  '/public/images/gallery/aagaaz/IMG-20250624-WA0064.jpg',
  '/public/images/gallery/aagaaz/Screenshot_20250617-201125.png',
  '/public/images/gallery/aagaaz/Screenshot_20250617-201209.png',
  '/public/images/gallery/aagaaz/Screenshot_20250617-201559.png'
]


const mudbad=[
  '/public/images/gallery/mudbad/DSC04603.JPG',
  '/public/images/gallery/mudbad/FB_IMG_1533735869809.jpg',
  '/public/images/gallery/mudbad/FB_IMG_1533735874608.jpg',
  '/public/images/gallery/mudbad/IMG_20180722_163145.jpg',
  '/public/images/gallery/mudbad/IMG_20180813_111346.jpg',
  '/public/images/gallery/mudbad/IMG_20180813_143916.jpg',
  '/public/images/gallery/mudbad/IMG_20181020_160628.jpg'
]



const team=[
    '/public/images/gallery/team/AF Team pic (1).jpg',
    '/public/images/gallery/team/IMG-20250218-WA0016.jpg',
    '/public/images/gallery/team/IMG-20250624-WA0058 (2).jpg',
    '/public/images/gallery/team/PXL_20240414_110238816.MP.jpg',
    '/public/images/gallery/team/PXL_20240811_070357949.MP.jpg',
    '/public/images/gallery/team/PXL_20241027_121433374.MP.jpg',
]

  // Sample gallery data
  const galleryData = {
    aakaar: Array.from({ length: 4 }, (_, i) => ({
      id: `aakar-${i + 1}`,
      url: aakaar[i],
      title: `Project Aakaar`,
      description: 'Empowering young minds through early intervention and strong foundational education that shapes their academic journey.',
      category: 'aakaar',
      featured: i === 0,
      date: 'Dec 15, 2024',
      location: 'Mumbai, India'
    })),
    ankur: Array.from({ length: 6 }, (_, i) => ({
      id: `ankur-${i + 1}`,
      url: ankur[i],
      title: `Project Ankur`,
      description: 'Transforming students into confident, ethical, and capable individuals through comprehensive personality development programs.',
      category: 'ankur',
      featured: i === 0,
      date: 'Dec 10, 2024',
      location: 'Vasai, India'
    })),
    anubhav: Array.from({ length: 7 }, (_, i) => ({
      id: `anubhav-${i + 1}`,
      url: anubhav[i],
      title: `Project Anubhav`,
      description: 'Creating meaningful experiences that transform lives and communities',
      category: 'anubhav',
      featured: i === 0,
      date: 'Dec 5, 2024',
      location: 'Mudbad, India'
    })),
    aagaaz: Array.from({ length: 5 }, (_, i) => ({
      id: `aagaaz-${i + 1}`,
      url: aagaaz[i],
      title: `Project Aagaaz`,
      description: 'Reaching for limitless possibilities and empowering dreams to soar',
      category: 'aagaaz',
      featured: i === 0,
      date: 'Nov 28, 2024',
      location: 'Regional Center'
    })),
    mudbad: Array.from({ length: 7 }, (_, i) => ({
      id: `mudbad-${i + 1}`,
      url: mudbad[i],
      title: `Mudbad Center`,
      description: 'Community outreach programs, workshops, and development initiatives at Mudbad',
      category: 'mudbad',
      featured: i === 0,
      date: 'Nov 20, 2024',
      location: 'Mudbad Center'
    })),
    // vasai: Array.from({ length: 10 }, (_, i) => ({
    //   id: `vasai-${i + 1}`,
    //   url: `https://picsum.photos/800/600?random=${i + 53}`,
    //   title: `AFKC Vasai Center - Program ${i + 1}`,
    //   description: 'Educational excellence and skill development at our AFKC Vasai center',
    //   category: 'vasai',
    //   featured: i === 0,
    //   date: 'Nov 15, 2024',
    //   location: 'AFKC Vasai'
    // })),
    activities: Array.from({ length: 12 }, (_, i) => ({
      id: `activities-${i + 1}`,
      url: activites[i],
      title: `Foundation Activities`,
      description: 'Special events, celebrations, and community engagement activities',
      category: 'activities',
      featured: i === 0,
      date: 'Nov 10, 2024',
      location: 'Various Locations'
    })),
    team: Array.from({ length: 4 }, (_, i) => ({
      id: `team-${i + 1}`,
      url: team[i],
      title: `Team Members`,
      description: 'Dedicated professionals working tirelessly for community development',
      category: 'team',
      featured: i === 0,
      date: 'Nov 5, 2024',
      location: 'Foundation HQ'
    }))
  };

  const allImages = Object.values(galleryData).flat();
  const filteredImages = selectedCategory === 'all' ? allImages : galleryData[selectedCategory] || [];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = (image) => {
    const imageIndex = filteredImages.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setIsLoading(true);
    setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % filteredImages.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(filteredImages[nextIndex]);
      setIsLoading(false);
    }, 150);
  };

  const prevImage = () => {
    setIsLoading(true);
    setTimeout(() => {
      const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(filteredImages[prevIndex]);
      setIsLoading(false);
    }, 150);
  };

  const goToImage = (index) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setSelectedImage(filteredImages[index]);
      setIsLoading(false);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex, filteredImages]);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
<section className="relative text-white py-1 sm:py-8 md:py-10 lg:py-14 xl:py-18 overflow-hidden">
  {/* 🔳 Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/public/images/logo/istockphoto-475212730-612x612.webp" // ✅ Update path if needed
      alt="Gallery Background"
      className="w-full h-full object-cover object-center opacity-50 sm:opacity-60"
    />
    {/* 🔲 Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-70 sm:opacity-85"></div>
  </div>

  {/* 🎯 Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-12 md:py-14 lg:py-15 text-center">
    {/* <div className={`transition-all duration-1000 transform ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}> */}
      
      {/* 🔸 Badge */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm backdrop-blur-sm">
        <Sparkles size={14} className="sm:w-4 sm:h-4" />
        <span className="whitespace-nowrap">Visual Stories of Impact</span>
      </div>

      {/* 🔸 Heading */}
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-md leading-tight">
        Our <span className="text-orange-300">Gallery</span>
      </h1>

      {/* 🔸 Subheading */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
        Discover the impact of our work through moments captured in time. Every image tells a story of hope, compassion, and positive change.
      </p>

      {/* 🔸 Stats */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-xs xs:max-w-lg sm:max-w-2xl mx-auto px-2 sm:px-0">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300">
          <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] text-white flex-shrink-0" />
          <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">100+ Photos</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300">
          <Award size={16} className="sm:w-[18px] sm:h-[18px] text-orange-200 flex-shrink-0" />
          <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">4 Projects</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300 xs:col-span-2 sm:col-span-1">
          <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-orange-200 flex-shrink-0" />
          <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">2 Centers</span>
        </div>
      </div>

    </div>
  {/* </div> */}

  {/* Bottom Gradient Fade - Responsive height */}
  <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
</section>




      {/* Professional Category Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-gray-900">Browse Collections</h2>
              <span className="text-sm text-gray-500">({filteredImages.length} items)</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
          
          {/* <div className="flex items-center gap-2 overflow-x-hidden pb-1">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all text-sm font-medium ${
                    isSelected
                      ? 'text-white shadow-sm scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: isSelected ? category.color : undefined,
                  }}
                >
                  <IconComponent size={12} />
                  <span>{category.name}</span>
                  <span className={`text-xs px-1 py-0.5 rounded-full ${
                    isSelected ? 'bg-white bg-opacity-20' : 'bg-white'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div> */}
          <div className="w-full overflow-x-auto scrollbar-hide">
  <div className="flex items-center gap-3 pb-2 px-1 min-w-max">
    {categories.map((category) => {
      const IconComponent = category.icon;
      const isSelected = selectedCategory === category.id;

      return (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all text-sm font-medium ${
            isSelected
              ? 'text-white shadow-sm scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
          }`}
          style={{
            backgroundColor: isSelected ? category.color : undefined,
          }}
        >
          <IconComponent size={12} />
          <span>{category.name}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              isSelected ? 'bg-white bg-opacity-20' : 'bg-white'
            }`}
          >
            {category.count}
          </span>
        </button>
      );
    })}
  </div>
</div>

        </div>
      </div>

      {/* Enhanced Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {selectedCategory !== 'all' && selectedCategoryData?.description && (
          <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200" data-animate id="category-info">
            <div className={`transition-all duration-700 transform translate-y-0 opacity-100`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${selectedCategoryData.color}15` }}>
                  <selectedCategoryData.icon size={20} style={{ color: selectedCategoryData.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{selectedCategoryData.name}</h3>
                  <p className="text-sm text-gray-600">{selectedCategoryData.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Professional Gallery Grid */}
        <div className="relative" data-animate id="gallery-grid">
          <div className={`transition-all duration-700 transform translate-y-0 opacity-100`}>
            {filteredImages.length > 0 ? (
              <div className={`grid gap-4 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-gray-200"
                    onClick={() => openModal(image)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          viewMode === 'grid' ? 'h-44' : 'h-56'
                        }`}
                      />
                      {image.featured && (
                        <div className="absolute top-2 right-2">
                          <span 
                            className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white shadow-sm"
                            style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}
                          >
                            <Star size={10} fill="currentColor" />
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                          <ArrowRight size={14} className="text-gray-700" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm line-clamp-1">{image.title}</h4>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{image.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{image.date}</span>
                        <span>{image.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-gray-300 mb-4">
                  <Heart size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">No images found</h3>
                <p className="text-gray-500 text-sm">Try selecting a different category</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Professional Compact Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </div>
                  {selectedImage.featured && (
                    <div className="bg-orange-500 rounded-full px-2 py-1 text-white text-xs font-medium flex items-center gap-1">
                      <Star size={10} fill="currentColor" />
                      Featured
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {/* <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all">
                    <Share2 size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all">
                    <Download size={16} />
                  </button> */}
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all"
                  disabled={isLoading}
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all"
                  disabled={isLoading}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Main Content */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-h-full flex flex-col">
              {/* Image */}
              <div className="relative flex-1">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className={`w-full h-full max-h-[50vh] object-cover transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
                />
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              
              {/* Compact Info */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate">{selectedImage.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">{selectedImage.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {selectedImage.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {selectedImage.location}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span 
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}
                    >
                      <selectedCategoryData.icon size={12} />
                      {selectedCategoryData?.name}
                    </span>
                  </div>
                </div>
                
                {/* Compact Thumbnail Navigation */}
                {filteredImages.length > 1 && (
                  <div className="flex gap-1 overflow-x-auto pb-1">
                    {filteredImages.slice(Math.max(0, currentImageIndex - 5), currentImageIndex + 6).map((img, index) => {
                      const actualIndex = Math.max(0, currentImageIndex - 5) + index;
                      return (
                        <button
                          key={img.id}
                          onClick={() => goToImage(actualIndex)}
                          className={`flex-shrink-0 w-12 h-8 rounded border-2 overflow-hidden transition-all ${
                            actualIndex === currentImageIndex ? 'border-orange-500 scale-105' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.title}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Statistics Section */}
      {/* <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Impact in Numbers</h3>
            <p className="text-gray-600">Every photograph represents lives touched and communities transformed</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { value: '4', label: 'Active Projects', icon: Target },
              { value: '2', label: 'Centers', icon: MapPin },
              { value: allImages.length.toString(), label: 'Photos', icon: Sparkles },
              { value: '500+', label: 'Lives Impacted', icon: Heart },
              { value: '10+', label: 'Team Members', icon: Users },
              { value: '∞', label: 'Hope Created', icon: Award }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-2">
                  <stat.icon size={24} style={{ color: '#FF5722' }} />
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#FF5722' }}>{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="relative overflow-hidden">
  {/* Background Image + Gradient Overlay */}
  <div className="absolute inset-0">
    <img
      src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" // ✅ Replace with your actual image path
      alt="Background"
      className="w-full h-full object-cover object-center opacity-50"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-18 text-white">
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold mb-2 drop-shadow-md">Our Impact in Numbers</h3>
      <p className="text-lg text-teal-100 drop-shadow-sm">
        Every photograph represents lives touched and communities transformed
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {[
        { value: '4', label: 'Active Projects', icon: Target },
        { value: '2', label: 'Centers', icon: MapPin },
        { value: '100+', label: 'Photos', icon: Sparkles },
        { value: '500+', label: 'Lives Impacted', icon: Heart },
        { value: '10+', label: 'Team Members', icon: Users },
        { value: '∞', label: 'Hope Created', icon: Award }
      ].map((stat, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
        >
          <div className="flex justify-center mb-2">
            <stat.icon size={24} className="text-orange-200" />
          </div>
          <div className="text-2xl font-bold text-orange-100 mb-1">{stat.value}</div>
          <div className="text-teal-100 text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default GalleryPage;