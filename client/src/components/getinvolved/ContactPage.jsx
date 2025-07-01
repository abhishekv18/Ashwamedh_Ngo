// import React, { useEffect, useState } from 'react';
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Clock, 
//   Send, 
//   CheckCircle, 
//   User, 
//   MessageSquare,
//   Building,
//   Globe,
//   ArrowRight,
//   Shield,
//   Headphones,
//   Award
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setContact, setLoad } from '../../redux/contactSlice';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const ContactPage = () => {

//    const isLoading = useSelector((state) => state.contact.load);
//   const dispatch=useDispatch();
//   const navigate=useNavigate();
//   const user = useSelector((state) => state.auth.user);
//     useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user]);
  
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//     preferredContact: 'email'
//   });



// const handleInputChange = (e) => {
//  setFormData({ ...formData, [e.target.name]: e.target.value });
//   }


//   const handleSubmit = async (e) => {
//          e.preventDefault();
//   try {
//     dispatch(setLoad(true)); // Correct spelling
//     const res = await axios.post('http://localhost:5000/api/contact/add',formData, {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });

//    if (res.data.success) {
//       // Add new client to state
//       dispatch(setContact(res.data.contact));
//  toast.success('Details send successfully', {
//   icon: '✅',
//   style: {
//     border: '1px solid #28a745',
//     padding: '16px',
//     color: '#fff',
//     background: 'linear-gradient(135deg, #28a745, #218838)',
//     fontWeight: '600',
//   },
// });
//       // Reset input fields
//       setFormData({
//       firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//     preferredContact: 'email'
       
//       });

//       // Go to clients tab
   
     
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error.response?.data?.message || 'Failed to send the details');
//   } finally {
//     dispatch(setLoad(false));
//   }
//   };


//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email Us',
//       details: 'hello@company.com',
//       subtext: 'We respond within 24 hours'
//     },
//     {
//       icon: Phone,
//       title: 'Call Us',
//       details: '+1 (555) 123-4567',
//       subtext: 'Mon-Fri 9AM-6PM EST'
//     },
//     {
//       icon: MapPin,
//       title: 'Visit Us',
//       details: '123 Business Avenue',
//       subtext: 'New York, NY 10001'
//     },
//     {
//       icon: Clock,
//       title: 'Business Hours',
//       details: 'Monday - Friday',
//       subtext: '9:00 AM - 6:00 PM EST'
//     }
//   ];

//   const features = [
//     {
//       icon: Shield,
//       title: 'Secure & Confidential',
//       description: 'Your information is protected with enterprise-grade security'
//     },
//     {
//       icon: Headphones,
//       title: '24/7 Support',
//       description: 'Round-the-clock assistance for all your inquiries'
//     },
//     {
//       icon: Award,
//       title: 'Expert Team',
//       description: 'Industry professionals ready to help you succeed'
//     }
//   ];


//   return (
//     <div className="min-h-screen bg-gray-50">
     
// <div className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white overflow-hidden">
//   {/* ✅ Background Image */}
//   <div className="absolute inset-0 z-0 opacity-45">
//     <img 
//       src="/public/images/stories/istockphoto-2198492778-612x612.jpg" // 🔁 Replace with actual image path
//       alt="Contact background"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* ✅ Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-br from-teal-700/80 via-orange-600/80 to-teal-800/80 z-10"></div>

//   {/* ✅ Foreground Content */}
//   <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
//     <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In <span className='text-orange-200'>Touch</span></h1>
//     <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-6">
//       Ready to start your next project? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
//     </p>
    
//     {/* 🔽 Extra Content */}
//     <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-85">
//       Whether you're looking for support, collaboration, or just want to say hello, our team is here to listen.
//     </p>
    
//     {/* Optional CTA Button */}
   
//  <div className="mt-10" >
//       {/* <button className="px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-gray-100 hover:scale-x-105 transition-all duration-300 shadow-lg">
//         Contact Us Now
//       </button> */}
//         <button
//       onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
//       className="px-7 py-3 bg-orange-100 text-teal-700 font-bold rounded-xl hover:bg-orange-50  hover:scale-x-105 transition-all duration-300 shadow"
//     >
//       Contact Us
//     </button>
//     </div>
  
   
//   </div>

//   {/* ✅ Bottom Fade */}
  
// </div>

//       {/* Contact Info Cards */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {contactInfo.map((info, index) => {
//             const IconComponent = info.icon;
//             return (
//               <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
//                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <IconComponent className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
//                 <p className="text-orange-600 font-medium mb-1">{info.details}</p>
//                 <p className="text-gray-500 text-sm">{info.subtext}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" >
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Contact Form */}
//           <div className="lg:col-span-2" id='contact-form'>
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                   Send Us a Message
//                 </h2>
//                 <p className="text-gray-600">
//                   Fill out the form below and we'll get back to you as soon as possible.
//                 </p>
//               </div>
// <form onSubmit={handleSubmit} className="space-y-6">

//                 {/* Name Fields */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       First Name *
//                     </label>
//                     <div className="relative">
//                       <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                         placeholder="Enter your first name"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Last Name *
//                     </label>
//                     <div className="relative">
//                       <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                         placeholder="Enter your last name"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Email and Phone */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                         placeholder="your.email@example.com"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                         placeholder="123-456-7890"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Company and Service Type */}
              

//                 {/* Subject */}
             

//                 {/* Message */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <div className="relative">
//                     <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       rows="6"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
//                       placeholder="Tell us about your project, goals, and how we can help you..."
//                     ></textarea>
//                   </div>
//                 </div>

//                 {/* Preferred Contact Method */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">
//                     Preferred Contact Method
//                   </label>
//                   <div className="flex space-x-4">
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="preferredContact"
//                         value="email"
//                         checked={formData.preferredContact === 'email'}
//                         onChange={handleInputChange}
//                         className="w-4 h-4 text-orange-600 focus:ring-orange-500"
//                       />
//                       <span className="ml-2 text-gray-700">Email</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="preferredContact"
//                         value="phone"
//                         checked={formData.preferredContact === 'phone'}
//                         onChange={handleInputChange}
//                         className="w-4 h-4 text-orange-600 focus:ring-orange-500"
//                       />
//                       <span className="ml-2 text-gray-700">Phone</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="pt-4">
                 
//                   <button
//   type="submit"
//   disabled={isLoading}
//   className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:ring-orange-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// >
//   {isLoading ? (
//     <>
//       <svg
//         className="animate-spin h-5 w-5 text-white"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <circle
//           className="opacity-25"
//           cx="12"
//           cy="12"
//           r="10"
//           stroke="currentColor"
//           strokeWidth="4"
//         />
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//         />
//       </svg>
//       Sending...
//     </>
//   ) : (
//     <>
//       Send Message
//       <Send className="ml-2 w-5 h-5" />
//     </>
//   )}
// </button>

//                 </div>
             
// </form>
             
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
//             {/* Why Choose Us */}
//             <div className="bg-white rounded-2xl shadow-xl p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
//               <div className="space-y-6">
//                 {features.map((feature, index) => {
//                   const IconComponent = feature.icon;
//                   return (
//                     <div key={index} className="flex items-start">
//                       <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
//                         <IconComponent className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="ml-4">
//                         <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
//                         <p className="text-gray-600 text-sm">{feature.description}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6">
//               <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
//               <div className="space-y-3">
//                 <a
//                   href="tel:+15551234567"
//                   className="flex items-center justify-between bg-white bg-opacity-20 rounded-xl p-3 hover:bg-opacity-30 transition-all duration-300"
//                 >
//                   <span>Call Now</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </a>
//                 <a
//                   href="mailto:hello@company.com"
//                   className="flex items-center justify-between bg-white bg-opacity-20 rounded-xl p-3 hover:bg-opacity-30 transition-all duration-300"
//                 >
//                   <span>Email Us</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </a>
//                 <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-xl p-3">
//                   <span className="text-sm">Response time: &lt; 24 hours</span>
//                   <CheckCircle className="w-4 h-4" />
//                 </div>
//               </div>
//             </div>

//             {/* Location Map Placeholder */}
          
//             <div className="bg-white rounded-2xl shadow-xl p-6">
//   <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Office</h3>

//   {/* Google Map Embed */}
//   <div className="bg-gray-100 rounded-xl h-48 mb-4 overflow-hidden">
//     <iframe
//       title="Our Location"
//       className="w-full h-full rounded-xl"
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6127852534976!2d-74.0060156845944!3d40.71277597933186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuMCJX!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
//       allowFullScreen=""
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//   </div>

//   {/* Address Info */}
//   <div className="text-sm text-gray-600">
//     <p className="mb-1"><strong>Address:</strong> 123 Business Avenue</p>
//     <p className="mb-1"><strong>City:</strong> New York, NY 10001</p>
//     <p><strong>Parking:</strong> Available on-site</p>
//   </div>
// </div>

//           </div>
//         </div>
//       </div>
//     <div className="relative py-12 px-4 overflow-hidden ">
//   {/* Background Image */}
//   <div className="absolute inset-0 z-0">
//     <img
//       src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" // ✅ Replace with your actual image path
//       alt="Secure Donation Background"
//       className="w-full h-full object-cover opacity-40"
//     />
//   </div>

//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>

//   {/* Content */}
//  <div className="flex justify-between items-center text-white relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div>
//       <h2 className="text-3xl font-bold mb-2 text-white">Have a Question?</h2>
//       <p className="opacity-90 font-semibold text-white">We'd love to hear from you — reach out today</p>
//     </div>
//     <button
//       onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
//       className="px-6 py-2 bg-white text-teal-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow"
//     >
//       Contact Us
//     </button>
//   </div>
// </div>

//     </div>
//   );
// };

// export default ContactPage;



import React, { useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  User, 
  MessageSquare,
  Building,
  Globe,
  ArrowRight,
  Shield,
  Headphones,
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setContact, setLoad } from '../../redux/contactSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactPage = () => {

   const isLoading = useSelector((state) => state.contact.load);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);
    useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  });



const handleInputChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e) => {
         e.preventDefault();
  try {
    dispatch(setLoad(true)); // Correct spelling
    const res = await axios.post('http://localhost:5000/api/contact/add',formData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

   if (res.data.success) {
      // Add new client to state
      dispatch(setContact(res.data.contact));
 toast.success('Details send successfully', {
  icon: '✅',
  style: {
    border: '1px solid #28a745',
    padding: '16px',
    color: '#fff',
    background: 'linear-gradient(135deg, #28a745, #218838)',
    fontWeight: '600',
  },
});
      // Reset input fields
      setFormData({
      firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
       
      });

      // Go to clients tab
   
     
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || 'Failed to send the details');
  } finally {
    dispatch(setLoad(false));
  }
  };


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@company.com',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtext: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business Avenue',
      subtext: 'New York, NY 10001'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtext: '9:00 AM - 6:00 PM EST'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Your information is protected with enterprise-grade security'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your inquiries'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Industry professionals ready to help you succeed'
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
     
<div className="relative bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 text-white overflow-hidden">
  {/* ✅ Background Image */}
  <div className="absolute inset-0 z-0 opacity-45">
    <img 
      src="/public/images/stories/istockphoto-2198492778-612x612.jpg" // 🔁 Replace with actual image path
      alt="Contact background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* ✅ Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-teal-700/80 via-orange-600/80 to-teal-800/80 z-10 "></div>

  {/* ✅ Foreground Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
      Get In <span className='text-orange-200'>Touch</span>
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
      Ready to start your next project? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
    </p>
    
    {/* 🔽 Extra Content */}
    <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-85 px-2">
      Whether you're looking for support, collaboration, or just want to say hello, our team is here to listen.
    </p>
    
    {/* Optional CTA Button */}
   
 <div className="mt-8 sm:mt-10" >
        <button
      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
      className="px-6 sm:px-7 py-3 bg-orange-100 text-teal-700 font-bold rounded-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow text-sm sm:text-base"
    >
      Contact Us
    </button>
    </div>
  
   
  </div>

  {/* ✅ Bottom Fade */}
  
</div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-orange-600 font-medium mb-1 text-sm sm:text-base">{info.details}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{info.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10" >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2" id='contact-form'>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                        placeholder="123-456-7890"
                      />
                    </div>
                  </div>
                </div>

                {/* Company and Service Type */}
              

                {/* Subject */}
             

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
                      placeholder="Tell us about your project, goals, and how we can help you..."
                    ></textarea>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-gray-700 text-sm sm:text-base">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-gray-700 text-sm sm:text-base">Phone</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                 
                  <button
  type="submit"
  disabled={isLoading}
  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:ring-orange-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
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
      Sending...
    </>
  ) : (
    <>
      Send Message
      <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
    </>
  )}
</button>

                </div>
             
</form>
             
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{feature.title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Need Immediate Help?</h3>
              <div className="space-y-3">
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-between bg-white bg-opacity-20 rounded-xl p-3 hover:bg-opacity-30 transition-all duration-300 text-sm sm:text-base"
                >
                  <span>Call Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@company.com"
                  className="flex items-center justify-between bg-white bg-opacity-20 rounded-xl p-3 hover:bg-opacity-30 transition-all duration-300 text-sm sm:text-base"
                >
                  <span>Email Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-xl p-3">
                  <span className="text-xs sm:text-sm">Response time: &lt; 24 hours</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Location Map Placeholder */}
          
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Visit Our Office</h3>

  {/* Google Map Embed */}
  <div className="bg-gray-100 rounded-xl h-40 sm:h-48 mb-4 overflow-hidden">
    <iframe
      title="Our Location"
      className="w-full h-full rounded-xl"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6127852534976!2d-74.0060156845944!3d40.71277597933186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuMCJX!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Address Info */}
  <div className="text-xs sm:text-sm text-gray-600">
    <p className="mb-1"><strong>Address:</strong> 123 Business Avenue</p>
    <p className="mb-1"><strong>City:</strong> New York, NY 10001</p>
    <p><strong>Parking:</strong> Available on-site</p>
  </div>
</div>

          </div>
        </div>
      </div>
    <div className="relative py-8 sm:py-12 px-4 overflow-hidden ">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg" // ✅ Replace with your actual image path
      alt="Secure Donation Background"
      className="w-full h-full object-cover opacity-40"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>

  {/* Content */}
 <div className="flex flex-col sm:flex-row justify-between items-center text-white relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-0">
    <div className="text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Have a Question?</h2>
      <p className="opacity-90 font-semibold text-white text-sm sm:text-base">We'd love to hear from you — reach out today</p>
    </div>
    <button
      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
      className="px-4 sm:px-6 py-2 bg-white text-teal-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow text-sm sm:text-base whitespace-nowrap"
    >
      Contact Us
    </button>
  </div>
</div>

    </div>
  );
};

export default ContactPage;