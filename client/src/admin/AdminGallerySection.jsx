


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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Header */}
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-start gap-3 mb-6">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
              Gallery Management ({galleryImages.length})
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Manage your image gallery and project photos
            </p>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg border border-gray-200 flex items-center transition-colors text-sm shadow-sm"
            >
              <Filter className="w-4 h-4 mr-1.5" />
              Filters
            </button>
            <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 sm:p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-orange-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 sm:p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-orange-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg flex items-center transition-colors text-sm sm:text-base font-medium shadow-sm"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              <span className="hidden xs:inline">Add Image</span>
              <span className="xs:hidden">Add</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Sidebar - Categories */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 xl:w-72`}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-4">
              <h4 className="font-semibold text-gray-900 mb-4 text-base">Categories</h4>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => handleCategoryChange(category.value)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center justify-between text-sm ${
                      selectedCategory === category.value
                        ? 'bg-orange-50 text-orange-700 border border-orange-200 shadow-sm'
                        : 'hover:bg-gray-50 text-gray-700 border border-transparent'
                    }`}
                  >
                    <span className="truncate font-medium">{category.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0 ${
                      selectedCategory === category.value
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.value === 'all' ? galleryImages.length : (categoryCounts[category.value] || 0)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base transition-colors"
                />
              </div>
              <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
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
                    className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
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
                    ? "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
                    : "space-y-4"
                }>
                  {currentImages.map((image) => (
                    viewMode === 'grid' ? (
                      <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200">
                        <div className="relative aspect-[4/3] bg-gray-100">
                          <img
                            src={image.image}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 flex gap-1.5">
                            <button
                              onClick={() => window.open(image.image, '_blank')}
                              className="bg-white/90 backdrop-blur-sm hover:bg-white p-1.5 rounded-lg transition-colors shadow-sm"
                            >
                              <Eye className="w-4 h-4 text-gray-700" />
                            </button>
                            <button
                              onClick={() => handleDeleteClick(image)}
                              className="bg-white/90 backdrop-blur-sm hover:bg-white p-1.5 rounded-lg transition-colors shadow-sm"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight line-clamp-2 flex-1 mr-2">
                              {image.title}
                            </h4>
                            <span className="text-xs text-gray-500 whitespace-nowrap">
                              {image.uploadDate}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                            {image.description}
                          </p>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 border border-teal-200">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200">
                        <div className="p-4">
                          <div className="flex gap-4">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                              <img
                                src={image.image}
                                alt={image.title}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight line-clamp-2 flex-1 mr-2">
                                  {image.title}
                                </h4>
                                <div className="flex items-center gap-1 sm:gap-2">
                                  <span className="text-xs text-gray-500 whitespace-nowrap">
                                    {image.uploadDate}
                                  </span>
                                  <button
                                    onClick={() => window.open(image.image, '_blank')}
                                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                                  >
                                    <Eye className="w-4 h-4 text-gray-600" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteClick(image)}
                                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                  </button>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm mb-2 line-clamp-2 leading-relaxed">
                                {image.description}
                              </p>
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 border border-teal-200">
                                {image.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
                              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                                currentPage === page
                                  ? 'bg-orange-500 text-white shadow-sm'
                                  : 'bg-white border border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              {page}
                            </button>
                          );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return <span key={page} className="px-2 text-gray-500 text-sm">...</span>;
                        }
                        return null;
                      })}
                      
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" />
                  <p className="text-lg sm:text-xl font-medium text-gray-600">No images found</p>
                  <p className="text-sm sm:text-base text-gray-500 mt-2">Try adjusting your search terms or category filter</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Add Image Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-3">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Add New Image</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title*</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleValueChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter image title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description*</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleValueChange}
                      rows="3"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                      placeholder="Enter brief description"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category*</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleValueChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image*</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                        required
                      />
                      <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400 mb-3" />
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

                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-2.5 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
          </div>
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Confirm Deletion</h3>
                  <button
                    onClick={cancelDelete}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-700 mb-4">
                    Are you sure you want to delete this image?
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-900 font-medium line-clamp-2">
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
                    className="px-4 py-2.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="px-4 py-2.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminGallerySection;
