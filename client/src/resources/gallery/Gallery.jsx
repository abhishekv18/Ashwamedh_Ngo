
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users, Heart, ArrowRight, Star, Award, Target, Sparkles, ExternalLink, Grid, List, Download, Share2, Info } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useCallback } from 'react';
// import axios from 'axios';
// import { setAllPhotos } from '../../redux/gallerySlice';

// const GalleryPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
//   const { allPhotos = [] } = useSelector((state) => state.gallery);

//   useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user]);

//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [viewMode, setViewMode] = useState('grid');
//   const [isVisible, setIsVisible] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const galleryRef = useRef(null);

//   const categories = [
//     { id: 'all', name: 'All Gallery', icon: Sparkles, count: allPhotos.length, color: '#F97316' },
//     { id: 'Project Aakaar', name: 'Project Aakaar', icon: Target, count: allPhotos.filter(photo => photo.category === 'Project Aakaar').length, description: 'Focus on overall development of Childern', color: '#14B8A6' },
//     { id: 'Project Ankur', name: 'Project Ankur', icon: Heart, count: allPhotos.filter(photo => photo.category === 'Project Ankur').length, description: 'Focus on Education and Literacy of Underprivileged childern', color: '#FACC15' },
//     { id: 'Project Anubhav', name: 'Project Anubhav', icon: Star, count: allPhotos.filter(photo => photo.category === 'Project Anubhav').length, description: 'Focus on overall development of Childern', color: '#6366F1' },
//     { id: 'Project Aagaaz', name: 'Project Aagaaz', icon: Award, count: allPhotos.filter(photo => photo.category === 'Project Aagaaz').length, description: 'Focus on Skills Developmemt of Chldern', color: '#0EA5E9' },
//     { id: 'Mudbad Center', name: 'Mudbad Center', icon: MapPin, count: allPhotos.filter(photo => photo.category === 'Mudbad Center').length, description: 'Community programs and outreach', color: '#F43F5E' },
//     { id: 'Activities & Events', name: 'Activities & Events', icon: Calendar, count: allPhotos.filter(photo => photo.category === 'Activities & Events').length, description: 'Special events and community gatherings', color: '#F59E0B' },
//     { id: 'Our Team', name: 'Our Team', icon: Users, count: allPhotos.filter(photo => photo.category === 'Our Team').length, description: 'Meet the people behind the mission', color: '#8B5CF6' },
//     { id: 'Other', name: 'Other', icon: Sparkles, count: allPhotos.filter(photo => photo.category === 'Other').length, description: 'Miscellaneous photos', color: '#10B981' }
//   ];

// useEffect(() => {
//   const fetchAllBlogs = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/get`, {
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setAllPhotos(res.data.images));
//         console.log("Fetched images:", res.data.images);
//       }
//     } catch (error) {
//       console.error("Error fetching images:", error);
//       toast.error('Failed to fetch images');
//     }
//   };

//   fetchAllBlogs();
// }, [dispatch]);

//   // Transform the API data into our gallery format
//   const transformGalleryData = () => {
//     return allPhotos.map((photo, index) => ({
//       id: photo._id,
//       url: photo.imageUrl,
//       title: photo.title || `Image ${index + 1}`,
//       description: photo.description || 'No description available',
//       category: photo.category || 'Other',
//       // First image in each category is featured
//       date: new Date(photo.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      
//     }));
//   };

//   const galleryImages = transformGalleryData();
//   const filteredImages = selectedCategory === 'all' 
//     ? galleryImages 
//     : galleryImages.filter(img => img.category === selectedCategory);

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
//   }, [filteredImages]);

//   const openModal = (image) => {
//     const imageIndex = filteredImages.findIndex(img => img.id === image.id);
//     setSelectedImage(image);
//     setCurrentImageIndex(imageIndex);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//     document.body.style.overflow = 'unset';
//   };

//   const nextImage = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       const nextIndex = (currentImageIndex + 1) % filteredImages.length;
//       setCurrentImageIndex(nextIndex);
//       setSelectedImage(filteredImages[nextIndex]);
//       setIsLoading(false);
//     }, 150);
//   };

//   const prevImage = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
//       setCurrentImageIndex(prevIndex);
//       setSelectedImage(filteredImages[prevIndex]);
//       setIsLoading(false);
//     }, 150);
//   };

//   const goToImage = (index) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setCurrentImageIndex(index);
//       setSelectedImage(filteredImages[index]);
//       setIsLoading(false);
//     }, 150);
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
//       {/* Enhanced Hero Section */}
//       <section className="relative text-white py-3 sm:py-8 md:py-10 lg:py-14 xl:py-18 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/images/logo/istockphoto-475212730-612x612.webp"
//             alt="Gallery Background"
//             className="w-full h-full object-cover object-center opacity-50 sm:opacity-60"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-70 sm:opacity-85"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-12 md:py-14 lg:py-15 text-center">
//           <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm backdrop-blur-sm">
//             <Sparkles size={14} className="sm:w-4 sm:h-4" />
//             <span className="whitespace-nowrap">Visual Stories of Impact</span>
//           </div>

//           <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-md leading-tight">
//             Our <span className="text-orange-300">Gallery</span>
//           </h1>

//           <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
//             Discover the impact of our work through moments captured in time. Every image tells a story of hope, compassion, and positive change.
//           </p>

//           <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-xs xs:max-w-lg sm:max-w-2xl mx-auto px-2 sm:px-0 mb-1">
//             <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300">
//               <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] text-white flex-shrink-0" />
//               <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">{allPhotos.length} Photos</span>
//             </div>
//             <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300">
//               <Award size={16} className="sm:w-[18px] sm:h-[18px] text-orange-200 flex-shrink-0" />
//               <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">{categories.filter(c => c.id.includes('Project')).length} Projects</span>
//             </div>
//             <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300 xs:col-span-2 sm:col-span-1">
//               <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-orange-200 flex-shrink-0" />
//               <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">2 Centers</span>
//             </div>
//           </div>
//         </div>

        
//       </section>

//       {/* Professional Category Navigation */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <h2 className="text-lg font-semibold text-gray-900">Browse Collections</h2>
//               <span className="text-sm text-gray-500">({filteredImages.length} items)</span>
//             </div>
//             <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
//               <button
//                 onClick={() => setViewMode('grid')}
//                 className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
//               >
//                 <Grid size={16} />
//               </button>
//               <button
//                 onClick={() => setViewMode('list')}
//                 className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
//               >
//                 <List size={16} />
//               </button>
//             </div>
//           </div>
          
//           <div className="w-full overflow-x-auto scrollbar-hide">
//             <div className="flex items-center gap-3 pb-2 px-1 min-w-max">
//               {categories.map((category) => {
//                 const IconComponent = category.icon;
//                 const isSelected = selectedCategory === category.id;

//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all text-sm font-medium ${
//                       isSelected
//                         ? 'text-white shadow-sm scale-105'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
//                     }`}
//                     style={{
//                       backgroundColor: isSelected ? category.color : undefined,
//                     }}
//                   >
//                     <IconComponent size={12} />
//                     <span>{category.name}</span>
//                     <span
//                       className={`text-xs px-2 py-0.5 rounded-full ${
//                         isSelected ? 'bg-white bg-opacity-20' : 'bg-white'
//                       }`}
//                     >
//                       {category.count}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Gallery Content */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {selectedCategory !== 'all' && selectedCategoryData?.description && (
//           <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200" data-animate id="category-info">
//             <div className={`transition-all duration-700 transform translate-y-0 opacity-100`}>
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="p-2 rounded-lg" style={{ backgroundColor: `${selectedCategoryData.color}15` }}>
//                   <selectedCategoryData.icon size={20} style={{ color: selectedCategoryData.color }} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">{selectedCategoryData.name}</h3>
//                   <p className="text-sm text-gray-600">{selectedCategoryData.description}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Professional Gallery Grid */}
//         <div className="relative" data-animate id="gallery-grid">
//           <div className={`transition-all duration-700 transform translate-y-0 opacity-100`}>
//             {filteredImages.length > 0 ? (
//               <div className={`grid gap-4 ${
//                 viewMode === 'grid' 
//                   ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
//                   : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
//               }`}>
//                 {filteredImages.map((image, index) => (
//                   <div
//                     key={image.id}
//                     className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-gray-200"
//                     onClick={() => openModal(image)}
//                   >
//                     <div className="relative overflow-hidden">
//                       <img
//                         src={image.url}
//                         alt={image.title}
//                         className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
//                         viewMode === 'grid' ? 'h-56 md:h-64' : 'h-72 md:h-80'

//                         }`}
//                         loading="lazy"
//                       />
//                       {/* {image.featured && (
//                         <div className="absolute top-2 right-2">
//                           <span 
//                             className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white shadow-sm"
//                             style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}
//                           >
//                             <Star size={10} fill="currentColor" />
//                             Featured
//                           </span>
//                         </div>
//                       )} */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
//                           <ArrowRight size={14} className="text-gray-700" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-3">
//                       <h4 className="font-medium text-gray-900 mb-1 text-sm line-clamp-1">{image.title}</h4>
//                       <p className="text-xs text-gray-600 mb-2 line-clamp-2">{image.description}</p>
//                       <div className="flex items-center justify-between text-xs text-gray-500">
//                         <span>{image.date}</span>
                      
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-20">
//                 <div className="text-gray-300 mb-4">
//                   <Heart size={48} className="mx-auto" />
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-600 mb-2">No images found</h3>
//                 <p className="text-gray-500 text-sm">Try selecting a different category</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Professional Compact Modal */}
//       {isModalOpen && selectedImage && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4">
//           <div className="relative max-w-4xl w-full max-h-[90vh]">
//             {/* Header */}
//             <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
//                     {currentImageIndex + 1} / {filteredImages.length}
//                   </div>
//                   {/* {selectedImage.featured && (
//                     <div className="bg-orange-500 rounded-full px-2 py-1 text-white text-xs font-medium flex items-center gap-1">
//                       <Star size={10} fill="currentColor" />
//                       Featured
//                     </div>
//                   )} */}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={closeModal}
//                     className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Navigation */}
//             {filteredImages.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all"
//                   disabled={isLoading}
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
                
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all"
//                   disabled={isLoading}
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </>
//             )}
            
//             {/* Main Content */}
//             <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-h-full flex flex-col">
//               {/* Image */}
//               <div className="relative flex-1">
//                 <img
//                   src={selectedImage.url}
//                   alt={selectedImage.title}
//                   className={`w-full h-full max-h-[50vh] object-cover transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
//                 />
//                 {isLoading && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
//                   </div>
//                 )}
//               </div>
              
//               {/* Compact Info */}
//               <div className="p-4 border-t border-gray-100">
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="flex-1 min-w-0">
//                     <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate">{selectedImage.title}</h3>
//                     <p className="text-gray-600 text-sm line-clamp-2 mb-2">{selectedImage.description}</p>
//                     <div className="flex items-center gap-4 text-xs text-gray-500">
//                       <span className="flex items-center gap-1">
//                         <Calendar size={12} />
//                         {selectedImage.date}
//                       </span>
                    
//                     </div>
//                   </div>
//                   <div className="ml-4 flex-shrink-0">
//                     <span 
//                       className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white"
//                       style={{ backgroundColor: selectedCategoryData?.color || '#FF5722' }}
//                     >
//                       <selectedCategoryData.icon size={12} />
//                       {selectedCategoryData?.name}
//                     </span>
//                   </div>
//                 </div>
                
//                 {/* Compact Thumbnail Navigation */}
//                 {filteredImages.length > 1 && (
//                   <div className="flex gap-1 overflow-x-auto pb-1">
//                     {filteredImages.slice(Math.max(0, currentImageIndex - 5), currentImageIndex + 6).map((img, index) => {
//                       const actualIndex = Math.max(0, currentImageIndex - 5) + index;
//                       return (
//                         <button
//                           key={img.id}
//                           onClick={() => goToImage(actualIndex)}
//                           className={`flex-shrink-0 w-12 h-8 rounded border-2 overflow-hidden transition-all ${
//                             actualIndex === currentImageIndex ? 'border-orange-500 scale-105' : 'border-gray-200 hover:border-gray-300'
//                           }`}
//                         >
//                           <img
//                             src={img.url}
//                             alt={img.title}
//                             className="w-full h-full object-cover"
//                           />
//                         </button>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg"
//             alt="Background"
//             className="w-full h-full object-cover object-center opacity-50"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-14 text-white">
//           <div className="text-center mb-10">
//             <h3 className="text-3xl font-bold mb-2 drop-shadow-md">Our Impact in Numbers</h3>
//             <p className="text-lg text-teal-100 drop-shadow-sm">
//               Every photograph represents lives touched and communities transformed
//             </p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
//             {[
//               { value: '4', label: 'Active Projects', icon: Target },
//               { value: '2', label: 'Centers', icon: MapPin },
//               { value: `${allPhotos.length}`, label: 'Photos', icon: Sparkles },
//               { value: '5,000+', label: 'Lives Impacted', icon: Heart },
//               { value: '20+', label: 'Team Members', icon: Users },
//               { value: '∞', label: 'Hope Created', icon: Award }
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur rounded-lg p-3 text-center hover:bg-white/20 transition-colors"
//               >
//                 <div className="flex justify-center mb-2">
//                   <stat.icon size={24} className="text-orange-200" />
//                 </div>
//                 <div className="text-2xl font-bold text-orange-100 mb-1">{stat.value}</div>
//                 <div className="text-teal-100 text-sm font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;



// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users, Heart, ArrowRight, Star, Award, Target, Sparkles, ExternalLink, Grid, List, Download, Share2, Info } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { setAllPhotos } from '../../redux/gallerySlice';
// import { toast } from 'react-toastify';

// const GalleryPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
//   const { allPhotos = [] } = useSelector((state) => state.gallery);

//   // State variables
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [viewMode, setViewMode] = useState('grid');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isFetching, setIsFetching] = useState(true);
//   const galleryRef = useRef(null);

//   // Redirect if user is logged in
//   useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user, navigate]);

//   // Fetch photos on component mount
//   useEffect(() => {
//     const fetchPhotos = async () => {
//       setIsFetching(true);
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/get`, {
//           withCredentials: true,
//         });
//         if (res.data.success) {
//           dispatch(setAllPhotos(res.data.images));
//         }
//       } catch (error) {
//         console.error("Error fetching images:", error);
//         toast.error('Failed to fetch images');
//       } finally {
//         setIsFetching(false);
//       }
//     };

    // Only fetch if we don't already have photos
  //   if (allPhotos.length === 0) {
  //     fetchPhotos();
  //   } else {
  //     setIsFetching(false);
  //   }
  // }, [dispatch, allPhotos.length]);

  // Transform the API data into our gallery format

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users, Heart, ArrowRight, Star, Award, Target, Sparkles, ExternalLink, Grid, List, Download, Share2, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAllPhotos } from '../../redux/gallerySlice';
import { toast } from 'react-toastify';

const GalleryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { allPhotos = [] } = useSelector((state) => state.gallery);

  // State variables
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const galleryRef = useRef(null);

  // Redirect if user is logged in
  useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user, navigate]);

  // Fetch photos with polling
  useEffect(() => {
    let isMounted = true;
    const POLLING_INTERVAL = 10000; // 30 seconds

    const fetchPhotos = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery/get`, {
          withCredentials: true,
        });
        if (res.data.success && isMounted) {
          dispatch(setAllPhotos(res.data.images));
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        if (isMounted) {
          toast.error('Failed to fetch images');
        }
      } finally {
        if (isMounted) {
          setIsFetching(false);
        }
      }
    };

    // Initial fetch
    fetchPhotos();
    
    // Set up polling interval
    const intervalId = setInterval(fetchPhotos, POLLING_INTERVAL);

    // Clean up on unmount
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [dispatch]);

  const transformGalleryData = () => {
    return allPhotos.map((photo, index) => ({
      id: photo._id,
      url: photo.imageUrl,
      title: photo.title || `Image ${index + 1}`,
      description: photo.description || 'No description available',
      category: photo.category || 'Other',
      date: new Date(photo.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
    }));
  };

  const galleryImages = transformGalleryData();
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Categories with dynamic counts
  const categories = [
    { id: 'all', name: 'All Gallery', icon: Sparkles, count: allPhotos.length, color: '#F97316' },
    { id: 'Project Aakaar', name: 'Project Aakaar', icon: Target, count: allPhotos.filter(photo => photo.category === 'Project Aakaar').length, description: 'Focus on overall development of Children', color: '#14B8A6' },
    { id: 'Project Ankur', name: 'Project Ankur', icon: Heart, count: allPhotos.filter(photo => photo.category === 'Project Ankur').length, description: 'Focus on Education and Literacy of Underprivileged children', color: '#FACC15' },
    { id: 'Project Anubhav', name: 'Project Anubhav', icon: Star, count: allPhotos.filter(photo => photo.category === 'Project Anubhav').length, description: 'Focus on overall development of Children', color: '#6366F1' },
    { id: 'Project Aagaaz', name: 'Project Aagaaz', icon: Award, count: allPhotos.filter(photo => photo.category === 'Project Aagaaz').length, description: 'Focus on Skills Development of Children', color: '#0EA5E9' },
    { id: 'Mudbad Center', name: 'Mudbad Center', icon: MapPin, count: allPhotos.filter(photo => photo.category === 'Mudbad Center').length, description: 'Community programs and outreach', color: '#F43F5E' },
    { id: 'Activities & Events', name: 'Activities & Events', icon: Calendar, count: allPhotos.filter(photo => photo.category === 'Activities & Events').length, description: 'Special events and community gatherings', color: '#F59E0B' },
    { id: 'Our Team', name: 'Our Team', icon: Users, count: allPhotos.filter(photo => photo.category === 'Our Team').length, description: 'Meet the people behind the mission', color: '#8B5CF6' },
    { id: 'Other', name: 'Other', icon: Sparkles, count: allPhotos.filter(photo => photo.category === 'Other').length, description: 'Miscellaneous photos', color: '#10B981' }
  ];

  // Modal functions
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

  // Keyboard navigation
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

  // Loading state
  if (isFetching) {
    return (
 
  <div className="min-h-screen bg-white flex items-center justify-center px-4">
  <div className="text-center space-y-4 ">
    {/* Icon */}
    <div className="flex justify-center relative">
      <Sparkles className="w-16 h-16 text-teal-600 animate-spin-slow" />
    </div>

    {/* Message */}
    <p className="text-gray-800 text-lg font-semibold tracking-wide">
      Loading gallery images...
    </p>

    {/* Animated Dots */}
    <div className="flex justify-center space-x-2">
      <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
      <span
        className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-ping"
        style={{ animationDelay: "0.2s" }}
      />
      <span
        className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"
        style={{ animationDelay: "0.4s" }}
      />
    </div>
  </div>
</div>



    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative text-white py-3 sm:py-8 md:py-10 lg:py-14 xl:py-18 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/logo/istockphoto-475212730-612x612.webp"
            alt="Gallery Background"
            className="w-full h-full object-cover object-center opacity-50 sm:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-70 sm:opacity-85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-12 md:py-14 lg:py-15 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm backdrop-blur-sm">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span className="whitespace-nowrap">Visual Stories of Impact</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-md leading-tight">
            Our <span className="text-orange-300">Gallery</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
            Discover the impact of our work through moments captured in time. Every image tells a story of hope, compassion, and positive change.
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-xs xs:max-w-lg sm:max-w-2xl mx-auto px-2 sm:px-0 mb-1">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300">
              <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] text-white flex-shrink-0" />
              <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">{allPhotos.length} Photos</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300">
              <Award size={16} className="sm:w-[18px] sm:h-[18px] text-orange-200 flex-shrink-0" />
              <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">{categories.filter(c => c.id.includes('Project')).length} Projects</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 text-orange-100 backdrop-blur rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 shadow transition-transform hover:scale-105 duration-300 xs:col-span-2 sm:col-span-1">
              <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-orange-200 flex-shrink-0" />
              <span className="font-medium text-white text-sm sm:text-base whitespace-nowrap">2 Centers</span>
            </div>
          </div>
        </div>
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
          <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
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
        )}
        
        {/* Professional Gallery Grid */}
        <div className="relative">
          <div>
            {filteredImages.length > 0 ? (
              <div className={`grid gap-4 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {filteredImages.map((image) => (
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
                          viewMode === 'grid' ? 'h-52 md:h-60' : 'h-64 md:h-72'
                        }`}
                        loading="lazy"
                      />
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

 
{isModalOpen && selectedImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4">
    <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
          >
            <X size={16} />
          </button>
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
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
        {/* Image */}
        <div className="relative flex-shrink-0 h-[50vh] max-h-[50vh]">
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-50' : 'opacity-100'
            }`}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        
        {/* Info Section - Now scrollable if content is too long */}
        <div className="flex-1 overflow-y-auto p-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-lg mb-2 break-words">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 text-sm whitespace-pre-line mb-3">
                {selectedImage.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {selectedImage.date}
                </span>
              </div>
            </div>
            <div className="sm:ml-4 flex-shrink-0">
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
            <div className="flex gap-1 overflow-x-auto pt-2 pb-1">
              {filteredImages.slice(Math.max(0, currentImageIndex - 5), currentImageIndex + 6).map((img, index) => {
                const actualIndex = Math.max(0, currentImageIndex - 5) + index;
                return (
                  <button
                    key={img.id}
                    onClick={() => goToImage(actualIndex)}
                    className={`flex-shrink-0 w-12 h-8 rounded border-2 overflow-hidden transition-all ${
                      actualIndex === currentImageIndex 
                        ? 'border-orange-500 scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
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
      {/* Impact Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-11 sm:py-14 text-white">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2 drop-shadow-md">Our Impact in Numbers</h3>
            <p className="text-lg text-teal-100 drop-shadow-sm">
              Every photograph represents lives touched and communities transformed
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {[
              { value: '4', label: 'Active Projects', icon: Target },
              { value: '2', label: 'Centers', icon: MapPin },
              { value: `${allPhotos.length}`, label: 'Photos', icon: Sparkles },
              { value: '5,000+', label: 'Lives Impacted', icon: Heart },
              { value: '20+', label: 'Team Members', icon: Users },
              { value: '∞', label: 'Hope Created', icon: Award }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-lg p-2 md:p-3 text-center hover:bg-white/20 transition-colors"
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