// // import { useEffect } from "react";

// // import { CheckCircle, Heart, Users, Home, Download, Share2, Mail, Calendar } from "lucide-react";
// // import { toast } from "react-toastify";

// // const Success = () => {
// //   useEffect(() => {
// //     toast.success("🎉 Thank you for your generous donation!");
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
// //       <div className="container mx-auto px-6 py-16 max-w-4xl">
// //         {/* Success Header */}
// //         <div className="text-center mb-12">
// //           <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full mb-6 shadow-lg">
// //             <CheckCircle className="w-10 h-10 text-white" />
// //           </div>
          
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
// //             Payment Successful
// //           </h1>
          
// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
// //             Thank you for your generous donation. Your contribution will make a real difference in the lives of those we serve.
// //           </p>
// //         </div>

// //         {/* Main Content Card */}
// //         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
// //           {/* Card Header */}
// //           <div className="bg-gradient-to-r from-orange-500 to-teal-500 px-8 py-6">
// //             <h2 className="text-2xl font-semibold text-white text-center">Your Donation Creates Impact</h2>
// //           </div>

// //           {/* Card Content */}
// //           <div className="p-8">
// //             {/* Appreciation Message */}
// //             <div className="text-center mb-10">
// //               <div className="flex items-center justify-center gap-2 mb-4">
// //                 <Heart className="w-6 h-6 text-orange-500 fill-current" />
// //                 <span className="text-lg font-medium text-gray-700">Your kindness changes lives</span>
// //               </div>
              
// //               <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
// //                 Every donation, regardless of size, contributes to our mission of creating positive change in our community. 
// //                 Your support enables us to continue providing essential services to those who need them most.
// //               </p>
// //             </div>

// //             {/* Impact Areas */}
// //             <div className="grid md:grid-cols-3 gap-6 mb-10">
// //               <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
// //                 <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
// //                   <span className="text-white font-semibold text-lg">Ed</span>
// //                 </div>
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
// //                 <p className="text-gray-600 text-sm">Supporting quality education and learning opportunities for underprivileged children</p>
// //                 <div className="mt-3 text-orange-600 font-medium text-sm">500+ children supported</div>
// //               </div>
              
// //               <div className="text-center p-6 bg-teal-50 rounded-xl border border-teal-100">
// //                 <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
// //                   <span className="text-white font-semibold text-lg">Nh</span>
// //                 </div>
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Nutrition & Health</h3>
// //                 <p className="text-gray-600 text-sm">Providing nutritious meals and essential healthcare services to communities in need</p>
// //                 <div className="mt-3 text-teal-600 font-medium text-sm">1000+ meals served daily</div>
// //               </div>
              
// //               <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
// //                 <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
// //                   <span className="text-white font-semibold text-lg">Sp</span>
// //                 </div>
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Support & Shelter</h3>
// //                 <p className="text-gray-600 text-sm">Building safe spaces and providing comprehensive support for vulnerable families</p>
// //                 <div className="mt-3 text-gray-600 font-medium text-sm">200+ families housed</div>
// //               </div>
// //             </div>

// //             {/* Process Timeline */}
// //             <div className="bg-gray-50 rounded-xl p-6 mb-8">
// //               <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">What Happens Next</h3>
              
// //               <div className="space-y-4">
// //                 <div className="flex items-start gap-4">
// //                   <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
// //                     <span className="text-white text-sm font-semibold">1</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-medium text-gray-800">Email Confirmation</h4>
// //                     <p className="text-gray-600 text-sm">You'll receive a detailed receipt with tax benefit information within 5 minutes</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-start gap-4">
// //                   <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
// //                     <span className="text-white text-sm font-semibold">2</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-medium text-gray-800">Fund Allocation</h4>
// //                     <p className="text-gray-600 text-sm">Your donation will be allocated to our most urgent programs within 24 hours</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-start gap-4">
// //                   <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
// //                     <span className="text-white text-sm font-semibold">3</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-medium text-gray-800">Impact Updates</h4>
// //                     <p className="text-gray-600 text-sm">We'll send you regular updates showing how your donation creates positive change</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Additional Information */}
// //             <div className="grid md:grid-cols-2 gap-6 mb-8">
// //               <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
// //                 <div className="flex items-center gap-3 mb-3">
// //                   <Mail className="w-5 h-5 text-orange-600" />
// //                   <h3 className="text-lg font-semibold text-gray-800">Receipt & Documentation</h3>
// //                 </div>
// //                 <p className="text-gray-600 text-sm mb-3">
// //                   A comprehensive receipt with all donation details and tax exemption information has been sent to your email address.
// //                 </p>
// //                 <div className="text-orange-600 font-medium text-sm">Check your inbox in the next few minutes</div>
// //               </div>
              
// //               <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
// //                 <div className="flex items-center gap-3 mb-3">
// //                   <Users className="w-5 h-5 text-teal-600" />
// //                   <h3 className="text-lg font-semibold text-gray-800">Join Our Community</h3>
// //                 </div>
// //                 <p className="text-gray-600 text-sm mb-3">
// //                   Connect with other donors and volunteers to stay updated on our collective impact and upcoming initiatives.
// //                 </p>
// //                 <div className="text-teal-600 font-medium text-sm">5000+ active community members</div>
// //               </div>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <a
// //                 href="/"
// //                 className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm"
// //               >
// //                 <Home className="w-5 h-5" />
// //                 Back to Home
// //               </a>
              
// //               <button className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm">
// //                 <Download className="w-5 h-5" />
// //                 Download Receipt
// //               </button>
              
// //               <button className="inline-flex items-center justify-center gap-2 border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
// //                 <Share2 className="w-5 h-5" />
// //                 Share Impact
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer Message */}
// //         <div className="text-center">
// //           <p className="text-lg text-gray-600 mb-4">
// //             Together, we're building a better tomorrow for our community.
// //           </p>
// //           <p className="text-gray-500">
// //             Thank you for being part of our mission to create lasting positive change.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Success;



// import { useEffect } from "react";
// import { CheckCircle, Heart, Users, Home, Mail, Calendar } from "lucide-react";
// import { toast } from "react-toastify";

// const Success = () => {
//   useEffect(() => {
//     toast.success("🎉 Thank you for your generous contribution!");
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
//       <div className="container mx-auto px-6 py-16 max-w-4xl">
//         {/* Success Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6 shadow-lg">
//             <CheckCircle className="w-10 h-10 text-white" />
//           </div>
          
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Donation Received with Gratitude
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             On behalf of the entire team at [NGO Name], we sincerely appreciate your support. 
//             Your contribution will directly impact our mission to [brief NGO mission statement].
//           </p>
//         </div>

//         {/* Main Content Card */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
//           {/* Card Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-green-600 px-8 py-6">
//             <h2 className="text-2xl font-semibold text-white text-center">Your Generosity in Action</h2>
//           </div>

//           {/* Card Content */}
//           <div className="p-8">
//             {/* Appreciation Message */}
//             <div className="text-center mb-10">
//               <div className="flex items-center justify-center gap-2 mb-4">
//                 <Heart className="w-6 h-6 text-blue-600 fill-current" />
//                 <span className="text-lg font-medium text-gray-700">Transforming Lives Together</span>
//               </div>
              
//               <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
//                 Philanthropy like yours enables us to continue our vital work. Within 24 hours, 
//                 we'll allocate your donation to our most urgent initiatives. You'll receive 
//                 a detailed impact report showing exactly how your funds are being used.
//               </p>
//             </div>

//             {/* Impact Areas */}
//             <div className="grid md:grid-cols-3 gap-6 mb-10">
//               <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
//                 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-semibold text-lg">Ed</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Education Programs</h3>
//                 <p className="text-gray-600 text-sm">Funding scholarships, school supplies, and teacher training in underserved communities</p>
//                 <div className="mt-3 text-blue-600 font-medium text-sm">85% enrollment increase</div>
//               </div>
              
//               <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
//                 <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-semibold text-lg">Hl</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Healthcare Access</h3>
//                 <p className="text-gray-600 text-sm">Mobile clinics, vaccination drives, and nutrition programs for vulnerable populations</p>
//                 <div className="mt-3 text-green-600 font-medium text-sm">12,000+ patients served</div>
//               </div>
              
//               <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
//                 <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-semibold text-lg">Cm</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Development</h3>
//                 <p className="text-gray-600 text-sm">Clean water projects, vocational training, and microfinance initiatives</p>
//                 <div className="mt-3 text-gray-600 font-medium text-sm">32 communities transformed</div>
//               </div>
//             </div>

//             {/* Process Timeline */}
//             <div className="bg-gray-50 rounded-xl p-6 mb-8">
//               <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Your Donation Journey</h3>
              
//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-sm font-semibold">1</span>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Immediate Confirmation</h4>
//                     <p className="text-gray-600 text-sm">You'll receive an email with donation details and tax receipt within 5 minutes</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-sm font-semibold">2</span>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Funds Deployed</h4>
//                     <p className="text-gray-600 text-sm">Our team will allocate your donation to priority programs within 1 business day</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-sm font-semibold">3</span>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Impact Reporting</h4>
//                     <p className="text-gray-600 text-sm">Receive quarterly reports with stories and metrics showing your donation at work</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Information */}
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
//                 <div className="flex items-center gap-3 mb-3">
//                   <Mail className="w-5 h-5 text-blue-600" />
//                   <h3 className="text-lg font-semibold text-gray-800">Tax Documentation</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-3">
//                   Your donation is tax-deductible to the fullest extent permitted by law. The email receipt serves as your official tax record.
//                 </p>
//                 <div className="text-blue-600 font-medium text-sm">[NGO Name] Tax ID: XX-XXXXXXX</div>
//               </div>
              
//               <div className="bg-green-50 rounded-xl p-6 border border-green-100">
//                 <div className="flex items-center gap-3 mb-3">
//                   <Calendar className="w-5 h-5 text-green-600" />
//                   <h3 className="text-lg font-semibold text-gray-800">Stay Engaged</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-3">
//                   Consider joining our monthly donor program for sustained impact. Recurring gifts help us plan long-term initiatives.
//                 </p>
//                 <div className="text-green-600 font-medium text-sm">92% program efficiency rating</div>
//               </div>
//             </div>

//             {/* Single CTA Button */}
//             <div className="flex justify-center">
//               <a
//                 href="/"
//                 className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm"
//               >
//                 <Home className="w-5 h-5" />
//                 Return to Our Website
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer Message */}
//         <div className="text-center">
//           <p className="text-lg text-gray-600 mb-4">
//             "Alone we can do so little; together we can do so much." - Helen Keller
//           </p>
//           <p className="text-gray-500 text-sm">
//             [NGO Name] is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
//             <br />
//             © {new Date().getFullYear()} [NGO Name]. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Success;

import { useEffect } from "react";
import { CheckCircle, Heart, Users, Home, Mail, Calendar, BookOpen, HeartPulse, Apple } from "lucide-react";
import { toast } from "react-toastify";

const Success = () => {
  useEffect(() => {
    toast.success("🎉 Thank you for your generous contribution!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        backgroundColor: '#FFE0B2',
        color: '#4E342E',
        fontWeight: 'bold',
        fontSize: 'clamp(14px, 3vw, 16px)',
        padding: '12px 24px',
        borderRadius: '8px',
        maxWidth: '90vw',
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-teal-600 rounded-full mb-4 md:mb-6 shadow-lg">
            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Donation Received with Gratitude
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            On behalf of Ashwamedha Foundation, we thank you for supporting our mission to
            educate, heal, and nourish underprivileged children across India.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-100 overflow-hidden mb-8">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-orange-500 to-teal-500 px-6 md:px-8 py-5 md:py-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white text-center">Your Impact Through Our Programs</h2>
          </div>

          {/* Card Content */}
          <div className="p-6 md:p-8">
            {/* Appreciation Message */}
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-orange-500 fill-current" />
                <span className="text-base md:text-lg font-medium text-gray-700">Creating Brighter Futures</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                Your donation will be allocated within 24 hours to our most critical needs across
                education, healthcare and nutrition programs. Here's how you're making a difference:
              </p>
            </div>

            {/* Impact Areas */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              {/* Education Program */}
              <div className="text-center p-4 md:p-6 bg-orange-50 rounded-lg md:rounded-xl border border-orange-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">Education for All</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-2">
                  Providing quality education, digital learning tools, and school supplies to underprivileged children
                </p>
                <div className="text-orange-600 font-medium text-xs md:text-sm">
                  ₹500 educates a child for one month
                </div>
              </div>
              
              {/* Healthcare Program */}
              <div className="text-center p-4 md:p-6 bg-teal-50 rounded-lg md:rounded-xl border border-teal-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <HeartPulse className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">Child Healthcare</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-2">
                  Mobile health clinics, vaccinations, and essential medicines for children in rural areas
                </p>
                <div className="text-teal-600 font-medium text-xs md:text-sm">
                  ₹1000 provides a health checkup for 5 children
                </div>
              </div>
              
              {/* Nutrition Program */}
              <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl border border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Apple className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">Nutrition Program</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-2">
                  Daily nutritious meals and supplements to combat malnutrition in vulnerable children
                </p>
                <div className="text-gray-600 font-medium text-xs md:text-sm">
                  ₹150 feeds a child for one week
                </div>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6 text-center">What Happens Next</h3>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs md:text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Instant Receipt</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Tax-deductible receipt sent to your email within minutes (80G eligible)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs md:text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Fund Allocation</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Your donation distributed to programs based on current needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs md:text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm md:text-base">Impact Report</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Receive a personalized report in 4-6 weeks showing your impact</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-orange-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-orange-100">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">Tax Benefits</h3>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                  50% tax exemption under Section 80G. Retain this receipt for your tax filings.
                </p>
                <div className="text-orange-600 font-medium text-xs md:text-sm">
                  Reg No: AAITA1234M | PAN: AAAAA1234A
                </div>
              </div>
              
              <div className="bg-teal-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-teal-100">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">Stay Involved</h3>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                  Visit our centers or volunteer virtually to see your impact firsthand.
                </p>
                <div className="text-teal-600 font-medium text-xs md:text-sm">
                  94% of donations go directly to programs
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm text-sm md:text-base"
              >
                <Home className="w-4 h-4 md:w-5 md:h-5" />
                Return to Ashwamedha Home
              </a>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4">
            "When you educate a child, heal a sickness, or feed the hungry, you bring hope to entire communities."
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            Ashwamedha Foundation is a registered non-profit under Section 8 of the Companies Act, 2013.
            <br />
            © {new Date().getFullYear()} Ashwamedha Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;