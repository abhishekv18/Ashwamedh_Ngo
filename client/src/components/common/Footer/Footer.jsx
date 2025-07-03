// import React from 'react';
// import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart, Users, Award, Globe } from 'lucide-react';
// import { use } from 'react';
// import { useState } from 'react';
// import { setLoadi, setSubscribe } from '../../../redux/subscribeSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Footer = () => {


//   const isLoading = useSelector((state) => state.subscribe.loadi);
//   const dispatch=useDispatch();
// const[formData, setFormData] = useState({
//     name: '',
//     email: ''
//   });
//   const handleInputChange = (e) => {
//  setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//          e.preventDefault();
//   try {
//     dispatch(setLoadi(true)); // Correct spelling

//     const res = await axios.post('http://localhost:5000/api/subscribe/add',formData, {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });

//    if (res.data.success) {
//       // Add new client to state
//       dispatch(setSubscribe(res.data.subscribe));
//     //  toast.success("Subscribed Successfully")
//     toast.success('Subscribed Successfully', {
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
     
//        name:"",
//          email:""
//       });

//       // Go to clients tab
   
//      // toast.success('Client added successfully');
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error.response?.data?.message || 'Failed to Subscribe');
//   } finally {
//     dispatch(setLoadi(false));
//   }
//   };


//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: 'About Us', href: '/who-we-are' },
//     { name: 'Our Programs', href: '/what-we-do' },
//     { name: 'Impact Stories', href: '/what-we-do#impact-stories' },
//     { name: 'Get Involved', href: '/get-involved' },
//     { name: 'Volunteer', href: '/get-involved#volunteer' },
//     { name: 'Contact Us', href: '/get-involved#contact' }
//   ];

//   const programs = [
//     { name: 'Project Ankur', href: '/what-we-do#project-ankur' },
//     { name: 'Project Aakaar', href: '/what-we-do#project-aakaar' },
//     { name: 'Education Initiatives', href: '/what-we-do#education' },
//     { name: 'Healthcare Programs', href: '/what-we-do#healthcare' },
//     { name: 'Environment Activities', href: '/what-we-do#environment' }
//   ];

//   const legalLinks = [
//     { name: 'Privacy Policy', href: '/privacy-policy' },
//     { name: 'Terms of Service', href: '/terms-of-service' },
//     { name: 'Refund Policy', href: '/refund-policy' },
//     { name: 'Cookie Policy', href: '/cookie-policy' }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: '#', name: 'Facebook' },
//     { icon: Twitter, href: '#', name: 'Twitter' },
//     { icon: Instagram, href: '#', name: 'Instagram' },
//     { icon: Linkedin, href: '#', name: 'LinkedIn' },
//     { icon: Youtube, href: '#', name: 'YouTube' }
//   ];

//   const impactStats = [
//     { icon: Users, number: '10,000+', label: 'Children Impacted' },
//     { icon: Heart, number: '500+', label: 'Volunteers' },
//     { icon: Award, number: '50+', label: 'Projects Completed' },
//     { icon: Globe, number: '25+', label: 'Communities Served' }
//   ];

//   return (
//     <footer className="bg-[#212121]  text-white">
//       {/* Impact Stats Section */}
//       <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {impactStats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <stat.icon className="h-8 w-8 mx-auto mb-3 text-white" />
//                 <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
//                 <div className="text-orange-100 text-sm font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
//             {/* Organization Info */}
//             <div className="lg:col-span-1">
//               <div className="mb-6">
//                 <img 
//                   src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
//                   alt="Ashwamedh Foundation" 
//                   className="h-12 w-auto mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-white mb-3">Ashwamedh Foundation</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   Empowering children and communities through education, healthcare, and sustainable development programs. Building a brighter future, one child at a time.
//                 </p>
//               </div>

//               {/* Contact Information */}
//               <div className="space-y-3">
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
//                   <div className="text-sm text-gray-400">
//                     <p>123 Community Street,</p>
//                     <p>Sector 15, Ghaziabad,</p>
//                     <p>Uttar Pradesh - 201001</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
//                   <div className="text-sm text-gray-400">
//                     <p>+91 98765 43210</p>
//                     <p>+91 87654 32109</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
//                   <div className="text-sm text-gray-400">
//                     <p>info@ashwamedhfoundation.org</p>
//                     <p>contact@ashwamedhfoundation.org</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
//               <ul className="space-y-3">
//                 {quickLinks.map((link, index) => (
//                   <li key={index}>
//                     <a 
//                       href={link.href}
//                       className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Our Programs */}
//             <div>
//               <h4 className="text-lg font-semibold text-white mb-6">Our Programs</h4>
//               <ul className="space-y-3">
//                 {programs.map((program, index) => (
//                   <li key={index}>
//                     <a 
//                       href={program.href}
//                       className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
//                     >
//                       {program.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Newsletter & Support */}
//             <div>
//               <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
              
             
// <div className="mb-4">
//   <p className="text-gray-400 text-sm mb-4">
//     Subscribe to our newsletter for updates on our programs and impact stories.
//   </p>

//   <form  className="space-y-3" onSubmit={handleSubmit}>
//     {/* Name Input */}
//     <input
//       type="text"
//       name='name'
//       value={formData.name}
//       onChange={handleInputChange}
//       placeholder="Enter your name"
//       className="w-full px-4 py-2 bg-[#212121] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
//     />

//     {/* Email Input */}
//     <input
//       type="email"
//       name='email'
//       value={formData.email}
//       onChange={handleInputChange}
//       placeholder="Enter your email"
//       className="w-full px-4 py-2 bg-[#212121] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
//     />

//     {/* Submit Button */}
//     {/* <button
//       type="submit"
//       className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm"
//     >
//       Subscribe
//     </button> */}
//     <button
//   type="submit"
//   className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm flex justify-center items-center gap-2"
//   disabled={isLoading}
// >
//   {isLoading ? (
//     <>
//       <svg
//         className="animate-spin h-4 w-4 text-white"
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
//         ></circle>
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//         ></path>
//       </svg>
//       Submitting...
//     </>
//   ) : (
//     'Subscribe'
//   )}
// </button>

//   </form>
// </div>

//               {/* Donation CTA */}
//               <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 border border-orange-500/30 rounded-lg p-4 mb-6">
//                 <h5 className="text-orange-400 font-semibold mb-2 text-sm">Support Our Cause</h5>
//                 <p className="text-gray-400 text-xs mb-3">Your donation can change a child's life forever.</p>
//                 <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
//                   Donate Now
//                 </button>
//               </div>

//               {/* Social Media Links */}
//               <div>
//                 <h5 className="text-white font-semibold mb-3 text-sm">Follow Us</h5>
//                 <div className="flex space-x-3">
//                   {socialLinks.map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.href}
//                       className="bg-[#212121] hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200 group"
//                       aria-label={social.name}
//                     >
//                       <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t bg-[#212121]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
//             {/* Copyright */}
//             <div className="text-center md:text-left">
//               <p className="text-gray-400 text-sm">
//                 © {currentYear} Ashwamedh Foundation. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Registered NGO | Tax Exemption under 80G | FCRA Approved
//               </p>
//             </div>

//             {/* Legal Links */}
//             <div className="flex flex-wrap justify-center md:justify-end space-x-6">
//               {legalLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   className="text-gray-400 hover:text-orange-400 text-xs transition-colors duration-200"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Certifications/Trust Badges */}
//           <div className="mt-6 pt-6 border-t bg-[#212121]">
//             <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-gray-500">
//               <div className="flex items-center space-x-2">
//                 <Award className="h-4 w-4 text-orange-500" />
//                 <span>GuideStar India Verified</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Globe className="h-4 w-4 text-orange-500" />
//                 <span>UN SDG Partner</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Heart className="h-4 w-4 text-orange-500" />
//                 <span>Credibility Alliance Member</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart, Users, Award, Globe } from 'lucide-react';
import { use } from 'react';
import { useState } from 'react';
import { setLoadi, setSubscribe } from '../../../redux/subscribeSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const Footer = () => {

  const isLoading = useSelector((state) => state.subscribe.loadi);
  const dispatch=useDispatch();
const[formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const handleInputChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
         e.preventDefault();
  try {
    dispatch(setLoadi(true)); // Correct spelling

    const res = await axios.post('http://localhost:5000/api/subscribe/add',formData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

   if (res.data.success) {
      // Add new client to state
      dispatch(setSubscribe(res.data.subscribe));
    //  toast.success("Subscribed Successfully")
    toast.success('Subscribed successfully', {
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
     
       name:"",
         email:""
      });

      // Go to clients tab
   
     // toast.success('Client added successfully');
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || 'Failed to subscribe');
  } finally {
    dispatch(setLoadi(false));
  }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/who-we-are/about-us' },
    { name: 'Our Programs', href: '/what-we-do/programs' },
    { name: 'Impact Stories', href: '/what-we-do/impact-stories' },
    { name: 'Volunteer', href: '/get-involved/volunteer' },
    { name: 'Contact Us', href: '/get-involved/contact' }
  ];

  const programs = [
    { name: 'Projects', href: '/what-we-do/projects' },
    { name: 'Programs', href: '/what-we-do/programs' },
    { name: 'Activites', href: '/what-we-do/activities' },
    { name: 'Our Approach', href: '/who-we-are/our-approach' },
   
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  const impactStats = [
    { icon: Users, number: '10,000+', label: 'Children Impacted' },
    { icon: Heart, number: '500+', label: 'Volunteers' },
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Globe, number: '25+', label: 'Communities Served' }
  ];

  return (
    <footer className="bg-[#212121] text-white">
      {/* Impact Stats Section */}
      <div className="bg-gradient-to-t from-orange-600 via-orange-500 to-orange-600 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-white" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-orange-100 text-xs sm:text-sm font-medium px-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
            
            {/* Organization Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-7">
                <img 
                  src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
                  alt="Ashwamedh Foundation" 
                  className="h-10 sm:h-12 w-auto mb-4"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Ashwamedh Foundation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering children and communities through education, healthcare, and sustainable development programs. Building a brighter future, one child at a time.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-400">
                    <p>123 Community Street,</p>
                    <p>Sector 15, Ghaziabad,</p>
                    <p>Uttar Pradesh - 201001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-400">
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-400">
                    <p className="break-all">info@ashwamedhfoundation.org</p>
                    <p className="break-all">contact@ashwamedhfoundation.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-xs sm:text-sm block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Programs */}
            <div className="sm:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Our Programs</h4>
              <ul className="space-y-2 sm:space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a 
                      href={program.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-xs sm:text-sm block py-1"
                    >
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Support */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Stay Connected</h4>
              
              <div className="mb-6">
                <p className="text-gray-400 text-xs sm:text-sm mb-4">
                  Subscribe to our newsletter for updates on our programs and impact stories.
                </p>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-[#313131] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-xs sm:text-sm"
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-[#313131] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-xs sm:text-sm"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium py-2 sm:py-2.5 px-4 rounded-lg transition-all duration-200 text-xs sm:text-sm flex justify-center items-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-3 w-3 sm:h-4 sm:w-4 text-white"
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
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        <span className="text-xs sm:text-sm">Submitting...</span>
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </form>
              </div>

              {/* Donation CTA */}
              <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 border border-orange-500/30 rounded-lg p-3 sm:p-4 mb-6">
                <h5 className="text-orange-400 font-semibold mb-2 text-xs sm:text-sm">Support Our Cause</h5>
                <p className="text-gray-400 text-xs mb-3">Your donation can change a child's life forever.</p>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                  Donate Now
                </button>
              </div>

              {/* Social Media Links */}
              <div>
                <h5 className="text-white font-semibold mb-3 text-xs sm:text-sm">Follow Us</h5>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-[#313131] hover:bg-orange-600 p-2 sm:p-2.5 rounded-lg transition-colors duration-200 group"
                      aria-label={social.name}
                    >
                      <social.icon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#212121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {currentYear} Ashwamedh Foundation. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Registered NGO | Tax Exemption under 80G | FCRA Approved
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 lg:gap-6 order-1 md:order-2">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-400 text-xs transition-colors duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Certifications/Trust Badges */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                <span>GuideStar India Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                <span>UN SDG Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                <span>Credibility Alliance Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;