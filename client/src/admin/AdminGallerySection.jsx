// import React, { useState, useMemo } from 'react';
// import { Plus, Upload, X, Trash2, Edit, Eye, Search } from 'lucide-react';

// const AdminGallerySection = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: '',
//     image: null
//   });

//   // Sample gallery data
//   const [galleryImages, setGalleryImages] = useState([
//     {
//       id: 1,
//       title: 'Community Workshop',
//       description: 'Teaching digital literacy to local community members',
//       category: 'Project Aakaar',
//       image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
//       uploadDate: '2024-01-15'
//     },
//     {
//       id: 2,
//       title: 'Tree Plantation Drive',
//       description: 'Environmental awareness program with local schools',
//       category: 'Project Ankur',
//       image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
//       uploadDate: '2024-01-20'
//     },
//     {
//       id: 3,
//       title: 'Team Building Event',
//       description: 'Annual team retreat and strategy planning session',
//       category: 'Our Team',
//       image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop',
//       uploadDate: '2024-02-01'
//     }
//   ]);

//   const categories = [
//     'Project Aakaar',
//     'Project Ankur',
//     'Project Anubhav',
//     'Project Aagaaz',
//     'Mudbad Center',
//     'Activities & Events',
//     'Our Team'
//   ];

//   // Filter images based on search term
//   const filteredImages = useMemo(() => {
//     if (!searchTerm) return galleryImages;
    
//     const searchLower = searchTerm.toLowerCase();
//     return galleryImages.filter(image => 
//       image.title.toLowerCase().includes(searchLower) ||
//       image.description.toLowerCase().includes(searchLower) ||
//       image.category.toLowerCase().includes(searchLower)
//     );
//   }, [galleryImages, searchTerm]);

//   const handleValueChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData(prev => ({
//         ...prev,
//         image: file
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     if (e) e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       const newImage = {
//         id: galleryImages.length + 1,
//         title: formData.title,
//         description: formData.description,
//         category: formData.category,
//         image: URL.createObjectURL(formData.image),
//         uploadDate: new Date().toISOString().split('T')[0]
//       };
      
//       setGalleryImages(prev => [newImage, ...prev]);
//       setFormData({ title: '', description: '', category: '', image: null });
//       setShowModal(false);
//       setIsLoading(false);
//     }, 1500);
//   };

//   const handleDeleteClick = (image) => {
//     setSelectedImage(image);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = () => {
//     setGalleryImages(prev => prev.filter(img => img.id !== selectedImage.id));
//     setShowDeleteModal(false);
//     setSelectedImage(null);
//   };

//   const cancelDelete = () => {
//     setShowDeleteModal(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">Gallery Management ({galleryImages.length})</h3>
//           <p className="text-gray-500">Manage your image gallery and project photos</p>
//         </div>
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Add New Image
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Search images by title, description, or category..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//           />
//         </div>
//         {searchTerm && (
//           <div className="mt-2 text-sm text-gray-600">
//             Found {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''} matching "{searchTerm}"
//           </div>
//         )}
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredImages.length > 0 ? (
//           filteredImages.map((image) => (
//             <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
//               <div className="relative">
//                 <img
//                   src={image.image}
//                   alt={image.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-2 right-2 flex gap-1">
//                   <button
//                     onClick={() => window.open(image.image, '_blank')}
//                     className="bg-white bg-opacity-90 hover:bg-opacity-100 p-1.5 rounded-lg transition-colors"
//                   >
//                     <Eye className="w-4 h-4 text-gray-600" />
//                   </button>
//                   <button
//                     onClick={() => handleDeleteClick(image)}
//                     className="bg-white bg-opacity-90 hover:bg-opacity-100 p-1.5 rounded-lg transition-colors"
//                   >
//                     <Trash2 className="w-4 h-4 text-red-600" />
//                   </button>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <h4 className="font-semibold text-gray-800 text-sm truncate">{image.title}</h4>
//                   <span className="text-xs text-gray-500">{image.uploadDate}</span>
//                 </div>
//                 <p className="text-gray-600 text-xs mb-3 line-clamp-2">{image.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
//                     {image.category}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center py-12">
//             <div className="text-gray-400 mb-4">
//               <Search className="w-12 h-12 mx-auto mb-4" />
//               <p className="text-lg font-medium">No images found</p>
//               <p className="text-sm">Try adjusting your search terms or add new images to the gallery</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Add Image Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-4 lg:p-6 max-w-md w-full shadow-xl max-h-[90vh] overflow-y-auto">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-bold text-gray-800">Add New Image</h3>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleValueChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   placeholder="Enter image title"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleValueChange}
//                   rows="3"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   placeholder="Enter image description"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleValueChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   required
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange-500 transition-colors">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                     id="image-upload"
//                     required
//                   />
//                   <label htmlFor="image-upload" className="cursor-pointer">
//                     <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                     <p className="text-sm text-gray-600">
//                       {formData.image ? formData.image.name : 'Click to upload image'}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
//                   </label>
//                 </div>
//               </div>

//               <div className="flex justify-end space-x-3 mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={isLoading}
//                   className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isLoading ? (
//                     <>
//                       <svg
//                         className="animate-spin h-4 w-4 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         />
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                         />
//                       </svg>
//                       Uploading...
//                     </>
//                   ) : (
//                     'Add Image'
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-4 lg:p-6 max-w-md w-full shadow-xl">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Confirm Deletion
//               </h3>
//               <button
//                 onClick={cancelDelete}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="mb-6">
//               <p className="text-gray-700 mb-2">
//                 Are you sure you want to delete this image?
//               </p>
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <p className="text-sm text-gray-600">
//                   <strong>Title:</strong> {selectedImage?.title}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Category:</strong> {selectedImage?.category}
//                 </p>
//               </div>
//               <p className="text-sm text-red-600 mt-3">
//                 This action cannot be undone.
//               </p>
//             </div>

//             <div className="flex gap-3 justify-end">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
//               >
//                 Delete Image
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminGallerySection;


import React, { useState, useMemo } from 'react';
import { Plus, Upload, X, Trash2, Eye, Search, Filter, Grid, List, ChevronDown } from 'lucide-react';

const AdminGallerySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(12);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: null
  });

  // Sample gallery data with more images
  const [galleryImages, setGalleryImages] = useState([
    {
      id: 1,
      title: 'Community Workshop',
      description: 'Teaching digital literacy to local community members',
      category: 'Project Aakaar',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Tree Plantation Drive',
      description: 'Environmental awareness program with local schools',
      category: 'Project Ankur',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
      uploadDate: '2024-01-20'
    },
    {
      id: 3,
      title: 'Team Building Event',
      description: 'Annual team retreat and strategy planning session',
      category: 'Our Team',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop',
      uploadDate: '2024-02-01'
    },
    {
      id: 4,
      title: 'Student Mentorship Program',
      description: 'Guiding students through career development',
      category: 'Project Anubhav',
      image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&h=300&fit=crop',
      uploadDate: '2024-02-05'
    },
    {
      id: 5,
      title: 'Community Health Camp',
      description: 'Free health checkup and awareness camp',
      category: 'Activities & Events',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      uploadDate: '2024-02-10'
    },
    {
      id: 6,
      title: 'Youth Leadership Training',
      description: 'Empowering young leaders in the community',
      category: 'Project Aagaaz',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=300&fit=crop',
      uploadDate: '2024-02-15'
    },
    {
      id: 7,
      title: 'Rural Development Workshop',
      description: 'Skill development program for rural communities',
      category: 'Mudbad Center',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
      uploadDate: '2024-02-20'
    },
    {
      id: 8,
      title: 'Cultural Festival',
      description: 'Celebrating local traditions and culture',
      category: 'Activities & Events',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop',
      uploadDate: '2024-02-25'
    }
  ]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Project Aakaar', label: 'Project Aakaar' },
    { value: 'Project Ankur', label: 'Project Ankur' },
    { value: 'Project Anubhav', label: 'Project Anubhav' },
    { value: 'Project Aagaaz', label: 'Project Aagaaz' },
    { value: 'Mudbad Center', label: 'Mudbad Center' },
    { value: 'Activities & Events', label: 'Activities & Events' },
    { value: 'Our Team', label: 'Our Team' }
  ];

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts = {};
    galleryImages.forEach(image => {
      counts[image.category] = (counts[image.category] || 0) + 1;
    });
    return counts;
  }, [galleryImages]);

  // Filter images based on search term and category
  const filteredImages = useMemo(() => {
    let filtered = galleryImages;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(image => image.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(image => 
        image.title.toLowerCase().includes(searchLower) ||
        image.description.toLowerCase().includes(searchLower) ||
        image.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [galleryImages, searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const newImage = {
        id: galleryImages.length + 1,
        title: formData.title,
        description: formData.description,
        category: formData.category,
        image: URL.createObjectURL(formData.image),
        uploadDate: new Date().toISOString().split('T')[0]
      };
      
      setGalleryImages(prev => [newImage, ...prev]);
      setFormData({ title: '', description: '', category: '', image: null });
      setShowModal(false);
      setIsLoading(false);
    }, 1500);
  };

  const handleDeleteClick = (image) => {
    setSelectedImage(image);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setGalleryImages(prev => prev.filter(img => img.id !== selectedImage.id));
    setShowDeleteModal(false);
    setSelectedImage(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedImage(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6 p-4 sm:p-6">
      {/* Header */}
      {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Gallery Management ({galleryImages.length})</h3>
          <p className="text-gray-500 text-sm sm:text-base">Manage your image gallery and project photos</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg flex items-center transition-colors text-sm"
          >
            <Filter className="w-4 h-4 mr-1" />
            Filters
          </button>
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 sm:p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 sm:p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base sm:px-4"
          >
            <Plus className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="whitespace-nowrap">Add Image</span>
          </button>
        </div>
      </div> */}
 <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-3">
        <div className="order-2 xs:order-1">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">Gallery Management ({galleryImages.length})</h3>
          <p className="text-xs sm:text-sm text-gray-500">Manage your image gallery and project photos</p>
        </div>
        <div className="flex items-center justify-between xs:justify-end gap-2 order-1 xs:order-2 w-full xs:w-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="xs:hidden bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1.5 rounded-lg flex items-center transition-colors text-xs"
            >
              <Filter className="w-3.5 h-3.5 mr-1" />
              <span>Filters</span>
            </button>
            <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1 sm:p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                <Grid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1 sm:p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center transition-colors text-xs sm:text-sm whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
            <span>Add Image</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Sidebar - Categories */}
        <div className={`${showFilters ? 'block' : 'hidden'} sm:block sm:w-48 lg:w-56`}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4 sticky top-4">
            <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Categories</h4>
            <div className="space-y-1 sm:space-y-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`w-full text-left px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-colors flex items-center justify-between text-xs sm:text-sm ${
                    selectedCategory === category.value
                      ? 'bg-orange-50 text-orange-700 border border-orange-200'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="truncate">{category.label}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full ml-2">
                    {category.value === 'all' ? galleryImages.length : (categoryCounts[category.value] || 0)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center justify-between mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">
              <span>
                {searchTerm || selectedCategory !== 'all' ? (
                  <>Showing {filteredImages.length} of {galleryImages.length} images</>
                ) : (
                  <>Showing all {galleryImages.length} images</>
                )}
              </span>
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setCurrentPage(1);
                  }}
                  className="text-orange-600 hover:text-orange-700 font-medium text-xs sm:text-sm"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Gallery Grid/List */}
          {currentImages.length > 0 ? (
            <>
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                  : "space-y-3 sm:space-y-4"
              }>
                {currentImages.map((image) => (
                  viewMode === 'grid' ? (
                    <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 flex gap-1">
                          <button
                            onClick={() => window.open(image.image, '_blank')}
                            className="bg-white bg-opacity-90 hover:bg-opacity-100 p-1 rounded-lg transition-colors"
                          >
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(image)}
                            className="bg-white bg-opacity-90 hover:bg-opacity-100 p-1 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                          <h4 className="font-semibold text-gray-800 text-xs sm:text-sm truncate">{image.title}</h4>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{image.uploadDate}</span>
                        </div>
                        <p className="text-gray-600 text-xs mb-2 sm:mb-3 line-clamp-2">{image.description}</p>
                        <span className="inline-flex items-center px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex p-3 sm:p-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                          <img
                            src={image.image}
                            alt={image.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="ml-3 sm:ml-4 flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1 sm:mb-2">
                            <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{image.title}</h4>
                            <div className="flex items-center gap-1 sm:gap-2">
                              <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap ml-2">{image.uploadDate}</span>
                              <button
                                onClick={() => window.open(image.image, '_blank')}
                                className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                              >
                                <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                              </button>
                              <button
                                onClick={() => handleDeleteClick(image)}
                                className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">{image.description}</p>
                          <span className="inline-flex items-center px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 sm:mt-8">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-lg ${
                            currentPage === page
                              ? 'bg-orange-500 text-white'
                              : 'bg-white border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="px-1 sm:px-2 text-gray-500 text-xs sm:text-sm">...</span>;
                    }
                    return null;
                  })}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base md:text-lg font-medium">No images found</p>
                <p className="text-xs sm:text-sm">Try adjusting your search terms or category filter</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Image Modal */}
{showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg p-4 w-full max-w-md mx-2 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Add New Image</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleValueChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Image title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleValueChange}
                  rows="3"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Brief description"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleValueChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.slice(1).map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image*</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                    required
                  />
                  <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                    <Upload className="w-6 h-6 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {formData.image ? (
                        <span className="font-medium text-orange-600">{formData.image.name}</span>
                      ) : (
                        <>
                          <span className="text-orange-600 font-medium">Click to upload</span> or drag and drop
                        </>
                      )}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF (Max. 10MB)</p>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-w-[100px]"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        {/* Loading spinner SVG */}
                      </svg>
                      Adding...
                    </>
                  ) : (
                    'Add Image'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Improved Delete Modal for mobile */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-lg p-4 w-full max-w-sm mx-3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Confirm Deletion</h3>
              <button
                onClick={cancelDelete}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-3">
                Are you sure you want to delete this image?
              </p>
              <div className="bg-gray-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-800 font-medium truncate">
                  {selectedImage?.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Category: {selectedImage?.category}
                </p>
              </div>
              <p className="text-xs text-red-600">
                Warning: This action cannot be undone.
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGallerySection;

