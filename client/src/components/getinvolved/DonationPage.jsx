
import React, { useEffect, useState } from 'react';
import { Heart, Users, Target, Globe, ChevronRight, Check, ArrowLeft, User, Mail, Phone, MapPin, CreditCard, Calendar, Home, Shield, Award, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DonatePage = () => {


const navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);
    useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('education');
  
  // Form data
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    mobile: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India',
    panNumber: ''
  });

  const [errors, setErrors] = useState({});

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const causes = [
    {
      id: 'education',
      title: 'Education for All',
      description: 'Provide quality education and learning materials to underprivileged children.',
      impact: '₹500 can provide school supplies for 5 children for a month',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'healthcare',
      title: 'Child Healthcare',
      description: 'Ensure access to essential healthcare services and medical support.',
      impact: '₹1000 can cover medical checkups for 10 children',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'nutrition',
      title: 'Nutrition Program',
      description: 'Combat malnutrition by providing healthy meals and nutritional support.',
      impact: '₹250 can feed a child nutritious meals for a week',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Children Helped', icon: Users },
    { number: '95%', label: 'Funds to Programs', icon: Target },
    { number: '50+', label: 'Countries Reached', icon: Globe }
  ];

  const trustIndicators = [
    { icon: Shield, title: 'Secure Payments', desc: 'Bank-grade encryption' },
    { icon: Award, title: '80G Certified', desc: 'Tax exemption available' },
    { icon: Clock, title: 'Instant Receipt', desc: 'Immediate confirmation' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      quote: 'Seeing the impact of my donation has been incredibly rewarding. The transparency is exceptional.',
      amount: '₹2,500'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      quote: 'Simple process, secure payment, and real change. This is how donations should work.',
      amount: '₹5,000'
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return customAmount || selectedAmount || 0;
  };

  const validateFullName = (name) => {
    const specialCharRegex = /[^a-zA-Z\s]/;
    return !specialCharRegex.test(name);
  };

  const handleInputChange = (field, value) => {
    if (field === 'fullName' && !validateFullName(value)) {
      setErrors({...errors, fullName: 'Special characters not allowed in full name field'});
      return;
    } else if (field === 'fullName') {
      setErrors({...errors, fullName: ''});
    }

    setFormData({...formData, [field]: value});

    // Auto-fill city and state based on pincode (mock implementation)
    if (field === 'pincode' && value.length === 6) {
      // Mock data - in real implementation, you'd call an API
      const mockPincodeData = {
        '110001': { city: 'New Delhi', state: 'Delhi' },
        '400001': { city: 'Mumbai', state: 'Maharashtra' },
        '560001': { city: 'Bangalore', state: 'Karnataka' },
        '700001': { city: 'Kolkata', state: 'West Bengal' },
        '600001': { city: 'Chennai', state: 'Tamil Nadu' }
      };
      
      const locationData = mockPincodeData[value];
      if (locationData) {
        setFormData(prev => ({
          ...prev,
          [field]: value,
          city: locationData.city,
          state: locationData.state
        }));
      }
    }
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.mobile && !/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPayment = () => {
    if (validateStep2()) {
      // Here you would integrate with Razorpay
      console.log('Proceeding to Razorpay payment...', {
        amount: getCurrentAmount(),
        cause: selectedCause,
        donorDetails: formData
      });
      alert('Payment integration will be implemented with Razorpay');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-50 to-white" >
<div 
  className="relative py-20 px-4 text-white overflow-hidden"
  style={{
    backgroundImage: `url('/public/images/logo/istockphoto-1252924066-612x612.webp')`, // 🔁 Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   // backgroundAttachment: 'fixed'
  }}
>
  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-90"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h1 className="text-5xl font-bold mb-6">
      Transform <span className='text-orange-200'>Lives</span> Through Your Generosity
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
      Join thousands of compassionate donors making a real difference in children's lives around the world. 
      Every contribution creates lasting impact.
    </p>

    {/* Progress Indicator */}
    <div className="flex justify-center items-center space-x-4 mt-12">
      <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
        currentStep >= 1 ? 'bg-white text-orange-600' : 'bg-orange-300 text-white'
      }`}>
        1
      </div>
      <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-white' : 'bg-orange-300'}`}></div>
      <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
        currentStep >= 2 ? 'bg-white text-orange-600' : 'bg-orange-300 text-white'
      }`}>
        2
      </div>
    </div>

    <div className="flex justify-center space-x-20 mt-4 text-sm">
      <span className={currentStep >= 1 ? 'font-semibold' : 'opacity-75'}>Choose Amount</span>
      <span className={currentStep >= 2 ? 'font-semibold' : 'opacity-75'}>Your Details</span>
    </div>

    {/* Stats Row */}
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-3">
            <stat.icon size={32} className="opacity-90" />
          </div>
          <div className="text-3xl font-bold mb-1">{stat.number}</div>
          <div className="text-lg opacity-90">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
   <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Step 1: Amount Selection */}
        {currentStep === 1 && (
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#212121' }}>
                  Choose Your Contribution
                </h2>
                <p style={{ color: '#616161' }} className="text-lg">
                  Select an amount that feels right for you. Every rupee makes a difference.
                </p>
              </div>

              {/* Amount Selection */}
              <div>
                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#212121' }}>
                  Donation Amount
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-6 px-4 rounded-xl font-bold text-lg transition-all border-3 transform hover:scale-105 ${
                        selectedAmount === amount
                          ? 'text-white shadow-xl scale-105'
                          : 'hover:shadow-lg'
                      }`}
                      style={{
                        backgroundColor: selectedAmount === amount ? '#FF5722' : 'white',
                        borderColor: selectedAmount === amount ? '#FF5722' : '#E0E0E0',
                        color: selectedAmount === amount ? 'white' : '#424242',
                        borderWidth: selectedAmount === amount ? '3px' : '2px'
                      }}
                    >
                      ₹{amount.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                
                <div>
                  <label className="block text-lg font-semibold mb-3" style={{ color: '#424242' }}>
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span 
                      className="absolute left-6 top-1/2 text-2xl font-bold"
                      style={{ color: '#757575', transform: 'translateY(-50%)' }}
                    >
                      ₹
                    </span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="w-full pl-12 pr-6 py-5 border-3 rounded-xl text-xl font-bold focus:outline-none focus:ring-4 transition-all"
                      style={{
                        borderColor: customAmount ? '#FF5722' : '#E0E0E0',
                        backgroundColor: customAmount ? '#FFF3E0' : 'white'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Cause Selection */}
              <div>
                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#212121' }}>
                  Choose Your Impact Area
                </h3>
                <div className="space-y-4">
                  {causes.map((cause) => (
                    <div
                      key={cause.id}
                      onClick={() => setSelectedCause(cause.id)}
                      className={`p-6 rounded-xl border-3 cursor-pointer transition-all transform hover:scale-102 ${
                        selectedCause === cause.id 
                          ? 'shadow-xl scale-102' 
                          : 'hover:shadow-lg'
                      }`}
                      style={{
                        backgroundColor: selectedCause === cause.id ? '#FFF3E0' : 'white',
                        borderColor: selectedCause === cause.id ? '#FF5722' : '#E0E0E0'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2" style={{ color: '#212121' }}>
                            {cause.title}
                          </h4>
                          <p className="mb-3" style={{ color: '#616161' }}>
                            {cause.description}
                          </p>
                          <p className="text-sm font-semibold" style={{ color: '#FF5722' }}>
                            💡 {cause.impact}
                          </p>
                        </div>
                        <div className={`w-8 h-8 rounded-full border-3 flex items-center justify-center ml-4 ${
                          selectedCause === cause.id ? 'border-3' : ''
                        }`}
                        style={{
                          borderColor: selectedCause === cause.id ? '#FF5722' : '#BDBDBD',
                          backgroundColor: selectedCause === cause.id ? '#FF5722' : 'white'
                        }}>
                          {selectedCause === cause.id && (
                            <Check size={16} color="white" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={() => setCurrentStep(2)}
                disabled={getCurrentAmount() <= 0}
                className={`w-full py-5 px-8 rounded-xl text-xl font-bold transition-all flex items-center justify-center gap-3 ${
                  getCurrentAmount() > 0 
                    ? 'hover:shadow-xl hover:scale-105 active:scale-95' 
                    : 'opacity-50 cursor-not-allowed'
                }`}
                style={{ 
                  background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)',
                  color: 'white'
                }}
              >
                Continue with ₹{getCurrentAmount().toLocaleString('en-IN')}
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Right Column - Impact Preview & Additional Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#212121' }}>
                  Your Impact Preview
                </h2>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={causes.find(c => c.id === selectedCause)?.image}
                  alt="Children being helped"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#212121' }}>
                    {causes.find(c => c.id === selectedCause)?.title}
                  </h3>
                  <p style={{ color: '#616161' }} className="mb-4 text-base">
                    {causes.find(c => c.id === selectedCause)?.description}
                  </p>
                  <div 
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: '#FFF3E0' }}
                  >
                    <p className="font-bold text-base" style={{ color: '#E64A19' }}>
                      💡 Your Impact: {causes.find(c => c.id === selectedCause)?.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#212121' }}>
                  Why Donors Trust Us
                </h3>
                <div className="space-y-4">
                  {trustIndicators.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#FFF3E0' }}
                      >
                        <item.icon size={20} style={{ color: '#FF5722' }} />
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{ color: '#212121' }}>{item.title}</h4>
                        <p className="text-sm" style={{ color: '#616161' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Donations */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#212121' }}>
                  Recent Donors Say
                </h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 pl-4" style={{ borderColor: '#FF5722' }}>
                      <p className="text-sm italic mb-2" style={{ color: '#616161' }}>
                        "{testimonial.quote}"
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm" style={{ color: '#212121' }}>
                          {testimonial.name}, {testimonial.location}
                        </span>
                        <span className="text-sm font-bold" style={{ color: '#FF5722' }}>
                          {testimonial.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Donor Details Form */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-2 text-base font-semibold hover:scale-105 transition-transform"
                style={{ color: '#FF5722' }}
              >
                <ArrowLeft size={18} />
                Back
              </button>
              <div 
                className="px-4 py-2 rounded-lg font-bold text-base"
                style={{ backgroundColor: '#00695C', color: 'white' }}
              >
                Donating ₹{getCurrentAmount().toLocaleString('en-IN')}
              </div>
            </div>

            <div 
             className="bg-white rounded-2xl shadow-xl overflow-hidden relative"
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98)), url("/public/images/stories/istockphoto-477224026-612x612.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            >
              <div className="relative p-6 text-white overflow-hidden">
  {/* Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/public/images/logo/photo-1641538225752-2d996ea204d4.avif"  // ✅ Replace with your actual image path
      alt="Donation background"
      className="w-full h-full object-cover opacity-100"
    />
  </div>

  {/* Gradient Overlay Layer */}
  <div 
    className="absolute inset-0 z-10" 
    style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.95) 0%, rgba(255, 87, 34, 0.95) 100%)' }}
  ></div>

  {/* Content Layer */}
  <div className="relative z-20">
    <h2 className="text-2xl font-bold mb-2">Your Details</h2>
    <p className="text-base opacity-95">
      We need these details to process your donation and send you the tax receipt.
    </p>
  </div>
</div>


              <div className="p-6 space-y-5">
                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-2 text-base font-semibold mb-2" style={{ color: '#424242' }}>
                    <User size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Date of Birth & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-base font-semibold mb-2" style={{ color: '#424242' }}>
                      <Calendar size={16} />
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-3 focus:border-orange-500 transition-all bg-white/90 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-base font-semibold mb-2" style={{ color: '#424242' }}>
                      <Mail size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded-lg text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
                        errors.email ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="flex items-center gap-2 text-base font-semibold mb-2" style={{ color: '#424242' }}>
                    <Phone size={16} />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
                    className={`w-full px-4 py-3 border-2 rounded-lg text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
                      errors.mobile ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                    }`}
                    placeholder="9876543210"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="flex items-center gap-2 text-base font-semibold mb-2" style={{ color: '#424242' }}>
                    <Home size={16} />
                    Address *
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={2}
                    className={`w-full px-4 py-3 border-2 rounded-lg text-base focus:outline-none focus:ring-3 transition-all resize-none bg-white/90 backdrop-blur-sm ${
                      errors.address ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                    }`}
                    placeholder="Enter your complete address"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                  )}
                </div>

                {/* Pincode */}
                <div>
                  <label className="flex items-center gap-2 text-base font-semibold mb-2" style={{ color: '#424242' }}>
                    <MapPin size={16} />
                    Pincode *
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                    className={`w-full px-4 py-3 border-2 rounded-lg text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
                      errors.pincode ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                    }`}
                    placeholder="110001"
                  />
                  <p className="text-sm mt-1" style={{ color: '#757575' }}>
                    Entering Pincode will autofill City and State
                  </p>
                  {errors.pincode && (
                    <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
                  )}
                </div>

                {/* City, State, Country */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{ color: '#424242' }}>
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-3 focus:border-orange-500 transition-all bg-white/90 backdrop-blur-sm"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{ color: '#424242' }}>
                      State
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-3 focus:border-orange-500 transition-all bg-white/90 backdrop-blur-sm"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{ color: '#424242' }}>
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      readOnly
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base bg-gray-100/90 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* PAN Number */}
                <div>
                  <label className="flex items-center gap-2 text-base font-semibold mb-2" style={{ color: '#424242' }}>
                    <CreditCard size={16} />
                    PAN Number
                  </label>
                  <input
                    type="text"
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value.toUpperCase())}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-3 focus:border-orange-500 transition-all bg-white/90 backdrop-blur-sm"
                    placeholder="ABCDE1234F"
                    maxLength={10}
                  />
                  <div 
                    className="mt-3 p-3 rounded-lg backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(255, 243, 224, 0.9)' }}
                  >
                   
                    <p className="text-sm font-medium" style={{ color: '#E64A19' }}>
                      📄 Please note that if you do not provide your PAN Number, you will not be able to claim 50% tax exemption u/s 80G in India
                    </p>
                  </div>
                </div>

                {/* Proceed to Payment Button */}
                <button
                  onClick={handleProceedToPayment}
                  className="w-full py-5 px-8  rounded-xl text-xl font-bold transition-all flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 active:scale-95 mt-8"
                  style={{ 
                    background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)',
                    color: 'white'
                  }}
                >
                  <Heart size={24} />
                  Proceed to Payment - ₹{getCurrentAmount().toLocaleString('en-IN')}
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
     <div className="relative py-12 px-4 overflow-hidden ">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" // ✅ Replace with your actual image path
      alt="Secure Donation Background"
      className="w-full h-full object-cover opacity-60"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>

  {/* Content */}
  <div className="relative z-20 max-w-6xl mx-auto text-center text-white">
    <h3 className="text-2xl font-bold mb-4">
      Secure & Trusted Donations
    </h3>
    <p className="text-lg opacity-90 mb-6">
      Your donation is secure and will be processed through Razorpay's encrypted payment gateway.
    </p>
    <div className="flex justify-center space-x-8 text-sm opacity-80">
      <span>80G Tax Exemption</span>
      <span>•</span>
      <span>Secure Payment Gateway</span>
      <span>•</span>
      <span>Instant Receipt</span>
    </div>
  </div>
</div>

    </div>
  );
};

export default DonatePage;