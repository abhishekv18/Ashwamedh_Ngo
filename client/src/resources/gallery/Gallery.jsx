
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users, Heart, ArrowRight, Star, Award, Target, Sparkles, ExternalLink, Grid, List, Download, Share2, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GalleryPage = () => {

  const navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);
    useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

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
 <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 bg-gradient-to-t from-white to-transparent"></div>
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