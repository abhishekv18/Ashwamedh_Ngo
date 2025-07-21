
// import { useEffect, useState } from 'react';
// import { Heart, Users, Globe, Award, UserPlus, Shield, Mail, Phone, MapPin, User, Calendar, Briefcase, GraduationCap, Target, Handshake, CheckCircle, Star, ArrowRight, Instagram } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoadin, setVolunteer } from '../../redux/volunteerSlice';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export default function VolunteerPage() {
//   const isLoading = useSelector((state) => state.volunteer.loadin);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
  
//   useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user]);

//   const [showSocialMediaPopup, setShowSocialMediaPopup] = useState(false);
  
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSocialMediaPopup(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     dateOfBirth: '',
//     age: '',
//     gender: '',
//     email: '',
//     phone: '',
//     pinCode: '',
//     occupation: '',
//     customOccupation: ''
//   });

//   const [showVolunteerForm, setShowVolunteerForm] = useState(false);
//   const [showAdminLogin, setShowAdminLogin] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     if (name === 'dateOfBirth') {
//       const today = new Date();
//       const birthDate = new Date(value);
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       setFormData({ 
//         ...formData, 
//         [name]: value,
//         age: age.toString()
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(setLoadin(true));

//       const submitData = {
//         ...formData,
//         occupation: formData.occupation === 'Other' ? formData.customOccupation : formData.occupation
//       };

//       const res = await axios.post('http://localhost:5000/api/volunteer/add', submitData, {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       });
  
//       if (res.data.success) {
//         dispatch(setVolunteer(res.data.volunteer));
//         toast.success("Details send successfully", {
//           icon: '✅',
//           style: {
//             border: '1px solid #28a745',
//             padding: '16px',
//             color: '#fff',
//             background: 'linear-gradient(135deg, #28a745, #218838)',
//             fontWeight: '600',
//           },
//         });
//         setFormData({
//           name: '',
//           age: '',
//           gender: '',
//           email: '',
//           phone: '',
//           city: '',
//           occupation: '',
//           customOccupation:''  
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || 'Failed to send the details');
//     } finally {
//       dispatch(setLoadin(false));
//     }
//   };

import { useEffect, useState } from 'react';
import { Heart, Users, Globe, Award, UserPlus, Shield, Mail, Phone, MapPin, User, Calendar, Briefcase, GraduationCap, Target, Handshake, CheckCircle, Star, ArrowRight, Instagram } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadin, setVolunteer } from '../../redux/volunteerSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function VolunteerPage() {
  const isLoading = useSelector((state) => state.volunteer.loadin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  
  useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  const [showSocialMediaPopup, setShowSocialMediaPopup] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSocialMediaPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    // Allows international phone numbers with + prefix
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
  };

  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    pinCode: '',
    occupation: '',
    customOccupation: ''
  });

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'dateOfBirth') {
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      setFormData({ 
        ...formData, 
        [name]: value,
        age: age.toString()
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Real-time validation
    if (name === 'email') {
      setErrors({
        ...errors,
        email: value && !validateEmail(value) 
          ? 'Please enter a valid email address.' 
          : ''
      });
    }

    if (name === 'phone') {
      const cleanedValue = value.replace(/[^0-9]/g, '');
      setErrors({
        ...errors,
        phone: value && !validatePhone(cleanedValue)
          ? 'Please enter a valid phone number.'
          : ''
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final validation before submit
    let valid = true;
    const newErrors = { ...errors };

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      return;
    }

    try {
      dispatch(setLoadin(true));

      const submitData = {
        ...formData,
        occupation: formData.occupation === 'Other' ? formData.customOccupation : formData.occupation
      };

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/volunteer/add`, submitData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
  
      if (res.data.success) {
        dispatch(setVolunteer(res.data.volunteer));
        toast.success("Details send successfully", {
          icon: '✅',
          style: {
            border: '1px solid #28a745',
            padding: '16px',
            color: '#fff',
            background: 'linear-gradient(135deg, #28a745, #218838)',
            fontWeight: '600',
          },
        });
        setFormData({
          name: '',
          dateOfBirth: '',
          age: '',
          gender: '',
          email: '',
          phone: '',
          pinCode: '',
          occupation: '',
          customOccupation:''  
        });
        setErrors({
          email: '',
          phone: ''
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to send the details');
    } finally {
      dispatch(setLoadin(false));
    }
  }
  const stats = [
    { number: '20+', label: 'Active Volunteers', icon: Users },
    { number: '4+', label: 'Active Programs', icon: Globe },
    { number: '5000+', label: 'Lives Impacted', icon: Heart },
    { number: '4+', label: 'Active Projects', icon: Award }
  ];

const testimonials = [
  {
    name: "Anita Verma",
    role: "Education Volunteer",
    text: "Volunteering here has truly touched my heart. Teaching children and watching them learn with such excitement is something I will always cherish.",
    rating: 5
  },
  {
    name: "Ravi Mehra",
    role: "Healthcare Assistant",
    text: "Every day, I feel grateful to be part of a team that is bringing real change. The joy of helping someone in need is unmatched.",
    rating: 5
  },
  {
    name: "Neha Kapoor",
    role: "Community Developer",
    text: "Being a part of this NGO has been a life-changing journey. I've learned so much while helping build stronger, happier communities.",
    rating: 5
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/stories/istockphoto-477224026-612x612.webp"
            alt="Volunteer Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Transform Lives,<br className="hidden sm:block" />
              <span className="text-orange-200">Including Your Own</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed opacity-95">
              Join a global community of changemakers dedicated to creating lasting impact through meaningful volunteer work
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button 
                onClick={() => setShowVolunteerForm(true)}
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg sm:shadow-2xl transform hover:scale-105 flex items-center text-sm sm:text-base"
              >
                <UserPlus className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
                <div className="flex -space-x-1 sm:-space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  ))}
                </div>
                <span className="opacity-90">Join 50,000+ volunteers</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Volunteer Section */}
      <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience meaningful volunteer work with comprehensive support and global impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50 via-white to-orange-50 p-6 sm:p-8 hover:shadow-lg sm:hover:shadow-xl transition-all duration-500 border border-orange-100">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Global Network</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Connect with volunteers worldwide and contribute to projects that create sustainable change across communities, cultures, and continents.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-50 via-white to-teal-50 p-6 sm:p-8 hover:shadow-lg sm:hover:shadow-xl transition-all duration-500 border border-teal-100">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Skill Development</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Gain valuable experience, develop leadership skills, and earn certifications while making a meaningful impact in your chosen field.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50 via-white to-orange-50 p-6 sm:p-8 hover:shadow-lg sm:hover:shadow-xl transition-all duration-500 border border-orange-100">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Lifelong Connections</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Build meaningful relationships with like-minded individuals and become part of a supportive community that lasts beyond your volunteer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Impact Areas</h2>
            <p className="text-lg sm:text-xl text-gray-600">Choose from diverse programs that match your passion and expertise</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Education & Literacy", desc: "Empower through knowledge and learning opportunities", icon: GraduationCap, color: "from-teal-500 to-teal-700", bg: "from-teal-50 to-teal-100" },
              { title: "Healthcare & Wellness", desc: "Support medical missions and health awareness programs", icon: Heart, color: "from-orange-500 to-red-700", bg: "from-orange-100 to-red-50" },
              { title: "Community Building", desc: "Strengthen communities through infrastructure and support", icon: Users, color: "from-orange-500 to-red-700", bg: "from-orange-100 to-red-50" },
              { title: "Environmental Action", desc: "Protect and preserve our planet for future generations", icon: Globe, color: "from-teal-500 to-teal-700", bg: "from-teal-50 to-teal-100" }
            ].map((opportunity, index) => (
              <div key={index} className={`group relative overflow-hidden bg-gradient-to-br ${opportunity.bg} p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-md sm:hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-white`}>
                <div className="relative z-10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${opportunity.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <opportunity.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{opportunity.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{opportunity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Volunteer Stories</h2>
            <p className="text-lg sm:text-xl text-gray-600">Hear from our community of changemakers</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 105, 92, 0.95), rgba(0, 77, 64, 0.9)), url('/images/logo/istockphoto-2193713844-612x612.webp')`,
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Create Impact?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 leading-relaxed">
            Your journey as a volunteer starts today. Join thousands of others making a real difference in the world.
          </p>
          <button 
            onClick={() => setShowVolunteerForm(true)}
            className="group px-6 py-3 sm:px-8 sm:py-4 bg-white text-orange-600 font-bold rounded-lg sm:rounded-xl hover:bg-orange-300 transition-all duration-300 shadow-lg sm:shadow-xl transform hover:scale-105 inline-flex items-center text-sm sm:text-base"
          >
            <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Begin Your Journey
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Admin Login */}
      <div className="fixed bottom-4 left-4 z-40">
        <div className="relative">
          <button
            onClick={() => setShowAdminLogin(!showAdminLogin)}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-white border-opacity-20"
            title="Admin Access"
          >
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
          </button>
          
          {showAdminLogin && (
            <div className="absolute bottom-14 sm:bottom-16 left-0 bg-white rounded-lg sm:rounded-xl shadow-xl border p-3 sm:p-4 w-56 sm:w-64 z-50">
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-orange-500" />
                Admin Access
              </h3>
              <Link to="/admin-login">
                <button
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white rounded-md sm:rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-medium text-sm sm:text-base"
                >
                  Admin Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Volunteer Form Modal */}
      {showVolunteerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
            <div 
              className="relative px-6 py-4 sm:px-8 sm:py-6 text-white"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #F97316, #DC2626),
                  url('/images/stories/istockphoto-1094582626-612x612.jpg'),
                  url("data:image/svg+xml,${encodeURIComponent(`
                    <svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
                      <defs>
                        <pattern id='form-pattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
                          <circle cx='10' cy='10' r='1' fill='white' opacity='0.1'/>
                        </pattern>
                      </defs>
                      <rect width='40' height='40' fill='url(%23form-pattern)'/>
                    </svg>
                  `)}")
                `,
                backgroundSize: 'cover, cover, auto',
                backgroundBlendMode: 'overlay, multiply, normal'
              }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Join Our Mission</h2>
                  <p className="opacity-90 font-semibold text-sm sm:text-base">Start your volunteer journey today</p>
                </div>
                <button
                  onClick={() => setShowVolunteerForm(false)}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <span className="text-xl sm:text-2xl">×</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="space-y-4 sm:space-y-6">
                  {/* Personal Information Section */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-orange-500" />
                      Personal Information
                    </h3>
                    
                    <div className="grid gap-4 sm:gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Age and Gender */}
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            <Calendar className="inline-block h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            Date of Birth *
                          </label>
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            required
                            max={new Date().toISOString().split('T')[0]}
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          />
                        </div>

                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Age (Auto-calculated)
                          </label>
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            readOnly
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 cursor-not-allowed transition-all duration-300 text-sm sm:text-base"
                            placeholder="Calculated from DOB"
                          />
                        </div>

                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Gender *
                          </label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information Section */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-orange-500" />
                      Contact Information
                    </h3>
                    
                    <div className="grid gap-4 sm:gap-6">
                      {/* Email and Phone */}
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        {/* <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                            placeholder="your.email@example.com"
                          />
                        </div> */}

                        {/* <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            <Phone className="inline-block h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                            placeholder="9876543210"
                          />
                        </div> */}

                         <div>
    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
      Email Address *
    </label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border-2 ${
        errors.email ? 'border-red-500' : 'border-gray-200'
      } rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
      placeholder="your.email@example.com"
    />
    {errors.email && (
      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
    )}
  </div>

  {/* Phone Field */}
  <div>
    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
      <Phone className="inline-block h-3 w-3 sm:h-4 sm:w-4 mr-1" />
      Phone Number *
    </label>
    <input
      type="tel"
      name="phone"
      maxLength={10}
      value={formData.phone}
      onChange={handleInputChange}
      required
      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border-2 ${
        errors.phone ? 'border-red-500' : 'border-gray-200'
      } rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
      placeholder="9876543210"
    />
    {errors.phone && (
      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
    )}
  </div>

                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                          <MapPin className="inline-block h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Pin Code *
                        </label>
                        <input
                          type="number"
                          name="pinCode"
                          value={formData.pinCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="Your current city"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information Section */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-orange-500" />
                      Professional Information
                    </h3>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                        Current Occupation *
                      </label>
                      <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      >
                        <option value="">Select your occupation</option>
                        <option value="School Student">School Student</option>
                        <option value="College Student">College Student</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Retired">Retired</option>
                        <option value="Home Maker">Home Maker</option>
                        <option value="Business">Business</option>
                        <option value="Self Employed">Self Employed</option>
                        <option value="Other">Other</option>
                      </select>

                      {formData.occupation === 'Other' && (
                        <div className="mt-3 sm:mt-4">
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Please specify your occupation *
                          </label>
                          <input
                            type="text"
                            name="customOccupation"
                            value={formData.customOccupation}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                            placeholder="Enter your occupation"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-md sm:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      Registering...
    </>
  ) : (
    <>
      <CheckCircle className="mr-2 h-5 w-5" />
      Complete Registration
    </>
  )}
</button>

                  <p className="text-sm text-gray-600 text-center mt-3">
                    By registering, you agree to our terms and conditions.
                  </p>
                </div>
              </div>
            </div>
            </form>
         
          </div>
        </div>
      )}
{showSocialMediaPopup && (
  <div
    className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    onClick={() => setShowSocialMediaPopup(false)}
  >
    <div
      className="relative rounded-xl shadow-xl w-full max-w-sm overflow-hidden text-white bg-white"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header Section with Image + Gradient */}
      <div className="relative">
        <div
          className="w-full h-40 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/logo/istockphoto-947216378-612x612.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-90 rounded-t-xl"></div>
        </div>

        {/* Header Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-3 text-white">
          {/* Close Button */}
          <button
            onClick={() => setShowSocialMediaPopup(false)}
            className="absolute top-3 right-3 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <span className="text-xl">×</span>
          </button>

          <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mb-2">
            <Heart className="h-6 w-6 text-white" />
          </div>

          <h3 className="text-xl font-bold">Stay Connected!</h3>
          <p className="text-sm opacity-90">Follow us for updates & opportunities</p>
        </div>
      </div>

      {/* Content Section - White Background */}
      <div className="relative z-10 p-4 bg-white text-gray-800">
        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          {/* Facebook */}
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg hover:shadow-md transition transform hover:scale-105 text-white"
          >
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>

          {/* Instagram */}
        <a
  href="https://instagram.com/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-center p-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg hover:shadow-md transition transform hover:scale-105 text-white"
>
  <Instagram className="w-5 h-5 mr-2" />
  Instagram
</a>

        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => setShowSocialMediaPopup(false)}
            className="w-full px-5 py-2.5 bg-teal-600 text-white text-sm font-bold rounded-lg hover:bg-teal-700 transition shadow-md flex items-center justify-center"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Continue to Website
          </button>

          <button
            onClick={() => setShowSocialMediaPopup(false)}
            className="w-full px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Maybe Later
          </button>
        </div>

        <p className="text-[10px] text-gray-500 text-center mt-3">
          Stay updated with our volunteer stories.
        </p>
      </div>
    </div>
  </div>
)}

    </div>
  );
}