



// import React, { useEffect, useState } from 'react';
// import { Heart, Users, Target, Globe, ChevronRight, Check, ArrowLeft, User, Mail, Phone, MapPin, CreditCard, Calendar, Home, Shield, Award, Clock } from 'lucide-react';
// import { useNavigate, useNavigation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const DonatePage = () => {
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
  
//   useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user]);

//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedAmount, setSelectedAmount] = useState(500);
//   const [customAmount, setCustomAmount] = useState('');
//   const [selectedCause, setSelectedCause] = useState('education');
//   const [activePaymentTab, setActivePaymentTab] = useState('gateway');
  
//   // Form data
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dateOfBirth: '',
//     email: '',
//     mobile: '',
//     address: '',
//     pincode: '',
//     city: '',
//     state: '',
//     country: 'India',
//     panNumber: ''
//   });

//   // const [errors, setErrors] = useState({});

//   const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

//   const causes = [
//     {
//       id: 'education',
//       title: 'Education for All',
//       description: 'Provide quality education and learning materials to underprivileged children.',
//       impact: '₹500 can provide school supplies for 5 children for a month',
//       image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&crop=faces'
//     },
//     {
//       id: 'healthcare',
//       title: 'Child Healthcare',
//       description: 'Ensure access to essential healthcare services and medical support.',
//       impact: '₹1000 can cover medical checkups for 10 children',
//       image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=faces'
//     },
//     {
//       id: 'nutrition',
//       title: 'Nutrition Program',
//       description: 'Combat malnutrition by providing healthy meals and nutritional support.',
//       impact: '₹250 can feed a child nutritious meals for a week',
//       image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&crop=faces'
//     }
//   ];

//   const stats = [
//     { number: '5,000+', label: 'Children Helped', icon: Users },
//     { number: '95%', label: 'Funds to Programs', icon: Target },
//     { number: '4+', label: 'Active Programs', icon: Heart },
//   ];

//   const trustIndicators = [
//     { icon: Shield, title: 'Secure Payments', desc: 'Bank-grade encryption' },
//     { icon: Award, title: '80G Certified', desc: 'Tax exemption available' },
//     { icon: Clock, title: 'Instant Receipt', desc: 'Immediate confirmation' }
//   ];

//  const testimonials = [
//   {
//     name: 'Priya Sharma',
//     location: 'Mumbai',
//     quote: 'Knowing my contribution helped a child get access to education brings me immense joy. Every child deserves a chance.',
//     amount: '₹2,500'
//   },
//   {
//     name: 'Rajesh Kumar',
//     location: 'Delhi',
//     quote: 'Supporting this NGO has been a heartwarming experience. Seeing smiling children grow and learn is priceless.',
//     amount: '₹4,000'
//   },
//   {
//     name: 'Anjali Mehta',
//     location: 'Bengaluru',
//     quote: 'This organization truly cares. My donation helped provide books and food to underprivileged kids. I feel proud to be a part of it.',
//     amount: '₹5,500'
//   }
// ];

//  const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(bankDetails.upiId);
//     setCopied(true);
//     setTimeout(() => {
//       setCopied(false);
//     }, 2000); // reset after 2 seconds
//   };

//   const paymentMethods = [
//     { id: 'gateway', label: 'Payment Gateway' },
//     { id: 'upi', label: 'UPI Transfer' },
//     { id: 'qr', label: 'QR Code' },
//     { id: 'bank', label: 'Bank Transfer' }
//   ];

//   const bankDetails = {
//     accountName: "Ashwamedh Foundation",
//     accountNumber: "2571101004533",
//     bankName: "Canara Bank",
//     branch: "Kalina, Mumbai",
//     ifsc: "CNRB0000116",
//     upiId: "102773700004533@cnrb",
//     qrCodeImage: "/public/images/logo/WhatsApp Image 2025-07-17 at 4.15.21 PM.jpeg"
//   };

//   const handleAmountSelect = (amount) => {
//     setSelectedAmount(amount);
//     setCustomAmount('');
//   };

//   const handleCustomAmountChange = (e) => {
//     const value = e.target.value.replace(/[^0-9]/g, '');
//     setCustomAmount(value);
//     setSelectedAmount(null);
//   };

//   const getCurrentAmount = () => {
//     return customAmount || selectedAmount || 0;
//   };

//   const validateFullName = (name) => {
//     const specialCharRegex = /[^a-zA-Z\s]/;
//     return !specialCharRegex.test(name);
//   };


//   const [errors, setErrors] = useState({
//     email: '',
//     mobile: ''
//   });

//   // Validation functions
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const validatePhone = (phone) => {
//     const re = /^[6-9]\d{9}$/;
//     return re.test(phone);
//   };

//   const handleInputChange = async (field, value) => {
//     // Existing full name validation
//     if (field === 'fullName' && !validateFullName(value)) {
//       setErrors({ ...errors, fullName: 'Special characters not allowed in full name field.' });
//       return;
//     } else if (field === 'fullName') {
//       setErrors({ ...errors, fullName: '' });
//     }

//     // Email validation
//     if (field === 'email') {
//       setErrors({
//         ...errors,
//         email: value && !validateEmail(value) 
//           ? 'Please enter a valid email address.' 
//           : ''
//       });
//     }

//     // Phone validation
//     if (field === 'mobile') {
//       const cleanedValue = value.replace(/[^0-9]/g, '');
//       setErrors({
//         ...errors,
//         mobile: cleanedValue && !validatePhone(cleanedValue)
//           ? 'Please enter a valid 10-digit mobile number.' 
//           : ''
//       });
//     }

//     // Update form data
//     setFormData(prev => ({ ...prev, [field]: value }));

//     // Existing pincode logic
//     if (field === 'pincode' && value.length < 6) {
//       setFormData(prev => ({
//         ...prev,
//         city: '',
//         state: ''
//       }));
//       return;
//     }

//     if (field === 'pincode' && value.length === 6) {
//       try {
//         const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
//         const data = await response.json();

//         if (data[0].Status === 'Success' && data[0].PostOffice?.length > 0) {
//           const postOffice = data[0].PostOffice[0];
//           const city = postOffice.District;
//           const state = postOffice.State;

//           setFormData(prev => ({
//             ...prev,
//             city,
//             state
//           }));
//         } else {
//           setFormData(prev => ({
//             ...prev,
//             city: '',
//             state: ''
//           }));
//           console.error('Invalid or unrecognized pincode');
//         }
//       } catch (error) {
//         console.error('Error fetching pincode data:', error);
//       }
//     }
//   };

//   const validateStep2 = () => {
//     const newErrors = {};
    
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    
//     // Email validation
//     if (formData.email && !validateEmail(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     // Phone validation
//     if (formData.mobile && !validatePhone(formData.mobile)) {
//       newErrors.mobile = 'Please enter a valid 10-digit mobile number';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };


// console.log("Form Data:", formData);

 
//   const handleProceedToPayment = () => {
//    if (validateStep2()) {
//   alert('Redirecting to secure Razorpay payment...');
//   window.location.href = 'https://rzp.io/rzp/i0UTs7e';
// }

//     console.log(formData);
//   };

//   const renderPaymentTabContent = () => {
//     switch (activePaymentTab) {
//       case 'gateway':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
//               <h3 className="text-lg md:text-xl font-bold mb-4">Secure Payment Gateway</h3>
//               <p className="mb-4 text-sm md:text-base">Complete your donation using our secure payment gateway with multiple options:</p>
//               <ul className="space-y-2 mb-6 text-sm md:text-base">
//                 <li className="flex items-center gap-2"><Check className="text-green-600" /> Credit/Debit Cards</li>
//                 <li className="flex items-center gap-2"><Check className="text-green-600" /> Net Banking</li>
//                 <li className="flex items-center gap-2"><Check className="text-green-600" /> UPI</li>
//                 <li className="flex items-center gap-2"><Check className="text-green-600" /> Wallets</li>
//               </ul>
//               <button
//                 onClick={handleProceedToPayment}
//                 className="w-full py-3 md:py-4 px-4 md:px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all hover:shadow-lg text-sm md:text-base"
//               >
//                 Pay ₹{getCurrentAmount().toLocaleString('en-IN')} via Payment Gateway
//               </button>
//             </div>
//             <div className="bg-orange-50/90 p-3 md:p-4 rounded-lg border border-orange-200 text-sm">
//               <p className="text-orange-800">
//                 <span className="font-bold">Note:</span> You will be redirected to a secure payment page after clicking the button above.
//               </p>
//             </div>
//           </div>
//         );
//       case 'upi':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
//               <h3 className="text-lg md:text-xl font-bold mb-4">Direct UPI Transfer</h3>
//               <p className="mb-4 text-sm md:text-base">You can transfer your donation directly to our UPI ID:</p>
              
//             <div className="bg-orange-50 p-3 md:p-4 rounded-lg mb-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-xs md:text-sm text-gray-600">UPI ID</p>
//           <p className="text-lg md:text-xl font-bold text-orange-700">{bankDetails.upiId}</p>
//         </div>
//         <button
//           className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-2 bg-orange-600 text-white rounded-lg text-xs md:text-sm font-medium transition-all duration-200"
//           onClick={handleCopy}
//         >
//           {copied ? (
//             <>
//               <Check className="w-4 h-4" />
//               Copied
//             </>
//           ) : (
//             'Copy'
//           )}
//         </button>
//       </div>
//     </div>
//                {/* <div className="bg-orange-50 p-3 md:p-4 rounded-lg mb-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-xs md:text-sm text-gray-600">UPI ID</p>
//           <p className="text-lg md:text-xl font-bold text-orange-700">{bankDetails.upiId}</p>
//         </div>
//         <button
//           className="px-3 md:px-4 py-1 md:py-2 bg-orange-600 text-white rounded-lg text-xs md:text-sm font-medium"
//           onClick={handleCopy}
//         >
//           {copied ? 'Copied!' : 'Copy'}
//         </button>
//       </div>
//     </div> */}
//               <div className="space-y-4 text-sm md:text-base">
//                 <div>
//                   <h4 className="font-bold mb-2">Steps to donate via UPI:</h4>
//                   <ol className="list-decimal pl-5 space-y-2">
//                     <li>Open your UPI payment app (Google Pay, PhonePe, Paytm, etc.)</li>
//                     <li>Select "Send Money" or "Pay via UPI ID"</li>
//                     <li>Enter our UPI ID: <span className="font-bold">{bankDetails.upiId}</span></li>
//                     <li>Enter amount: ₹{getCurrentAmount().toLocaleString('en-IN')}</li>
//                     <li>Add a note with your name for our records</li>
//                     <li>Complete the transaction</li>
//                   </ol>
//                 </div>
                
//                 <div className="bg-orange-50/90 p-3 md:p-4 rounded-lg border border-orange-200">
//                   <p className="text-orange-800 text-xs md:text-sm">
//                     <span className="font-bold">Important:</span> After making the payment, please email the transaction details to donations@helpinghands.org for receipt.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       case 'qr':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
//               <h3 className="text-lg md:text-xl font-bold mb-4">Scan QR Code to Donate</h3>
//               <p className="mb-4 text-sm md:text-base">Scan the QR code below using any UPI app to make your donation:</p>
              
//               <div className="flex flex-col items-center">
//                 <div className="bg-white p-3 md:p-4 rounded-lg border-2 border-orange-300 mb-4">
//                   <img 
//                     src={bankDetails.qrCodeImage} 
//                     alt="UPI QR Code" 
//                     className="w-52 h-52 md:w-64 md:h-64 object-contain"
//                   />
//                 </div>
//                 <p className="text-sm text-gray-600">Amount: ₹{getCurrentAmount().toLocaleString('en-IN')}</p>
//               </div>
              
//               <div className="mt-6 space-y-4 text-sm md:text-base">
//                 <div>
//                   <h4 className="font-bold mb-2">How to use QR code:</h4>
//                   <ol className="list-decimal pl-5 space-y-2">
//                     <li>Open your UPI payment app</li>
//                     <li>Select "Scan QR Code"</li>
//                     <li>Point your camera at the QR code above</li>
//                     <li>Enter amount: ₹{getCurrentAmount().toLocaleString('en-IN')}</li>
//                     <li>Complete the transaction</li>
//                   </ol>
//                 </div>
                
//                 <div className="bg-orange-50/90 p-3 md:p-4 rounded-lg border border-orange-200">
//                   <p className="text-orange-800 text-xs md:text-sm">
//                     <span className="font-bold">Note:</span> The QR code is valid for all UPI apps. After payment, you'll receive an automatic receipt.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       case 'bank':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
//               <h3 className="text-lg md:text-xl font-bold mb-4">Bank Transfer Details</h3>
//               <p className="mb-6 text-sm md:text-base">You can transfer your donation directly to our bank account:</p>
              
//               <div className="space-y-4 mb-6">
//                 <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
//                   <p className="text-xs md:text-sm text-gray-600">Account Name</p>
//                   <p className="text-base md:text-lg font-bold text-orange-700">{bankDetails.accountName}</p>
//                 </div>
                
//                 <div className="grid md:grid-cols-2 gap-3 md:gap-4">
//                   <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
//                     <p className="text-xs md:text-sm text-gray-600">Account Number</p>
//                     <p className="text-base md:text-lg font-bold text-orange-700">{bankDetails.accountNumber}</p>
//                   </div>
                  
//                   <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
//                     <p className="text-xs md:text-sm text-gray-600">IFSC Code</p>
//                     <p className="text-base md:text-lg font-bold text-orange-700">{bankDetails.ifsc}</p>
//                   </div>
//                 </div>
                
//                 <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
//                   <p className="text-xs md:text-sm text-gray-600">Bank Name & Branch</p>
//                   <p className="text-base md:text-lg font-bold text-orange-700">{bankDetails.bankName}, {bankDetails.branch}</p>
//                 </div>
//               </div>
              
//               <div className="space-y-4 text-sm md:text-base">
//                 <div>
//                   <h4 className="font-bold mb-2">Steps for bank transfer:</h4>
//                   <ol className="list-decimal pl-5 space-y-2">
//                     <li>Login to your internet banking or mobile banking app</li>
//                     <li>Select "Fund Transfer" or "NEFT/RTGS"</li>
//                     <li>Enter the bank details provided above</li>
//                     <li>Enter amount: ₹{getCurrentAmount().toLocaleString('en-IN')}</li>
//                     <li>Add your name in the transaction remarks</li>
//                     <li>Complete the transaction</li>
//                   </ol>
//                 </div>
                
//                 <div className="bg-orange-50/90 p-3 md:p-4 rounded-lg border border-orange-200">
//                   <p className="text-orange-800 text-xs md:text-sm">
//                     <span className="font-bold">Important:</span> After making the transfer, please email the transaction details to donations@helpinghands.org with your PAN for 80G receipt.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-t from-orange-50 to-white">
//       {/* Hero Section */}
//       <div 
//         className="relative py-12 md:py-20 px-4 text-white overflow-hidden"
//         style={{
//           backgroundImage: `url('/public/images/logo/istockphoto-1252924066-612x612.webp')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-90"></div>
//         <div className="relative z-10 max-w-6xl mx-auto text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
//             Transform <span className='text-orange-200'>Lives</span> Through Your Generosity
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-95">
//             Join thousands of compassionate donors making a real difference in children's lives around the world. 
//             Every contribution creates lasting impact.
//           </p>

//           {/* Progress Indicator */}
//           <div className="flex justify-center items-center space-x-4 mt-8 md:mt-12">
//             <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full font-bold ${
//               currentStep >= 1 ? 'bg-white text-orange-600' : 'bg-orange-300 text-white'
//             }`}>
//               1
//             </div>
//             <div className={`w-12 md:w-16 h-1 ${currentStep >= 2 ? 'bg-white' : 'bg-orange-300'}`}></div>
//             <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full font-bold ${
//               currentStep >= 2 ? 'bg-white text-orange-600' : 'bg-orange-300 text-white'
//             }`}>
//               2
//             </div>
//           </div>

//           <div className="flex justify-center space-x-12 md:space-x-20 mt-3 md:mt-4 text-xs md:text-sm">
//             <span className={currentStep >= 1 ? 'font-semibold' : 'opacity-75'}>Choose Amount</span>
//             <span className={currentStep >= 2 ? 'font-semibold' : 'opacity-75'}>Your Details</span>
//           </div>

//           {/* Stats Row */}
//           <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="flex justify-center mb-2 md:mb-3">
//                   <stat.icon size={24} className="opacity-90" />
//                 </div>
//                 <div className="text-xl md:text-3xl font-bold mb-1">{stat.number}</div>
//                 <div className="text-xs md:text-lg opacity-90">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
  
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
//         {/* Step 1: Amount Selection */}
//         {currentStep === 1 && (
//           <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
//             <div className="space-y-6 md:space-y-8">
//               <div>
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#212121' }}>
//                   Choose Your Contribution
//                 </h2>
//                 <p style={{ color: '#616161' }} className="text-sm md:text-lg">
//                   Select an amount that feels right for you. Every rupee makes a difference.
//                 </p>
//               </div>

//               {/* Amount Selection */}
//               <div>
//                 <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6" style={{ color: '#212121' }}>
//                   Donation Amount
//                 </h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
//                   {predefinedAmounts.map((amount) => (
//                     <button
//                       key={amount}
//                       onClick={() => handleAmountSelect(amount)}
//                       className={`py-4 md:py-6 px-2 md:px-4 rounded-xl font-bold text-base md:text-lg transition-all border-3 transform hover:scale-105 ${
//                         selectedAmount === amount
//                           ? 'text-white shadow-xl scale-105'
//                           : 'hover:shadow-lg'
//                       }`}
//                       style={{
//                         backgroundColor: selectedAmount === amount ? '#FF5722' : 'white',
//                         borderColor: selectedAmount === amount ? '#FF5722' : '#E0E0E0',
//                         color: selectedAmount === amount ? 'white' : '#424242',
//                         borderWidth: selectedAmount === amount ? '3px' : '2px'
//                       }}
//                     >
//                       ₹{amount.toLocaleString('en-IN')}
//                     </button>
//                   ))}
//                 </div>
                
//                 <div>
//                   <label className="block text-base md:text-lg font-semibold mb-2 md:mb-3" style={{ color: '#424242' }}>
//                     Or Enter Custom Amount
//                   </label>
//                   <div className="relative">
//                     <span 
//                       className="absolute left-4 md:left-6 top-1/2 text-xl md:text-2xl font-bold"
//                       style={{ color: '#757575', transform: 'translateY(-50%)' }}
//                     >
//                       ₹
//                     </span>
//                     <input
//                       type="text"
//                       value={customAmount}
//                       onChange={handleCustomAmountChange}
//                       placeholder="Enter amount"
//                       className="w-full pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-5 border-3 rounded-xl text-lg md:text-xl font-bold focus:outline-none focus:ring-4 transition-all"
//                       style={{
//                         borderColor: customAmount ? '#FF5722' : '#E0E0E0',
//                         backgroundColor: customAmount ? '#FFF3E0' : 'white'
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Cause Selection */}
//               <div>
//                 <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6" style={{ color: '#212121' }}>
//                   Choose Your Impact Area
//                 </h3>
//                 <div className="space-y-3 md:space-y-4">
//                   {causes.map((cause) => (
//                     <div
//                       key={cause.id}
//                       onClick={() => setSelectedCause(cause.id)}
//                       className={`p-4 md:p-6 rounded-xl border-3 cursor-pointer transition-all transform hover:scale-102 ${
//                         selectedCause === cause.id 
//                           ? 'shadow-xl scale-102' 
//                           : 'hover:shadow-lg'
//                       }`}
//                       style={{
//                         backgroundColor: selectedCause === cause.id ? '#FFF3E0' : 'white',
//                         borderColor: selectedCause === cause.id ? '#FF5722' : '#E0E0E0'
//                       }}
//                     >
//                       <div className="flex items-center justify-between">
//                         <div className="flex-1">
//                           <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2" style={{ color: '#212121' }}>
//                             {cause.title}
//                           </h4>
//                           <p className="mb-2 md:mb-3 text-xs md:text-base" style={{ color: '#616161' }}>
//                             {cause.description}
//                           </p>
//                           <p className="text-xs md:text-sm font-semibold" style={{ color: '#FF5722' }}>
//                             💡 {cause.impact}
//                           </p>
//                         </div>
//                         <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-3 flex items-center justify-center ml-2 md:ml-4 ${
//                           selectedCause === cause.id ? 'border-3' : ''
//                         }`}
//                         style={{
//                           borderColor: selectedCause === cause.id ? '#FF5722' : '#BDBDBD',
//                           backgroundColor: selectedCause === cause.id ? '#FF5722' : 'white'
//                         }}>
//                           {selectedCause === cause.id && (
//                             <Check size={12} color="white" />
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Continue Button */}
//               <button
//                 onClick={() => setCurrentStep(2)}
//                 disabled={getCurrentAmount() <= 0}
//                 className={`w-full py-3 md:py-5 px-4 md:px-8 rounded-xl text-lg md:text-xl font-bold transition-all flex items-center justify-center gap-2 md:gap-3 ${
//                   getCurrentAmount() > 0 
//                     ? 'hover:shadow-xl hover:scale-105 active:scale-95' 
//                     : 'opacity-50 cursor-not-allowed'
//                 }`}
//                 style={{ 
//                   background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)',
//                   color: 'white'
//                 }}
//               >
//                 Continue with ₹{getCurrentAmount().toLocaleString('en-IN')}
//                 <ChevronRight size={20} />
//               </button>
//             </div>

//             {/* Right Column - Impact Preview & Additional Content */}
//             <div className="space-y-6 md:space-y-8 mt-8 md:mt-0">
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{ color: '#212121' }}>
//                   Your Impact Preview
//                 </h2>
//               </div>

//               <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
//                 <img 
//                   src={causes.find(c => c.id === selectedCause)?.image}
//                   alt="Children being helped"
//                   className="w-full h-48 md:h-64 object-cover"
//                 />
//                 <div className="p-4 md:p-6">
//                   <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: '#212121' }}>
//                     {causes.find(c => c.id === selectedCause)?.title}
//                   </h3>
//                   <p style={{ color: '#616161' }} className="mb-3 md:mb-4 text-sm md:text-base">
//                     {causes.find(c => c.id === selectedCause)?.description}
//                   </p>
//                   <div 
//                     className="p-3 md:p-4 rounded-xl"
//                     style={{ backgroundColor: '#FFF3E0' }}
//                   >
//                     <p className="font-bold text-sm md:text-base" style={{ color: '#E64A19' }}>
//                       💡 Your Impact: {causes.find(c => c.id === selectedCause)?.impact}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Trust Indicators */}
//               <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
//                 <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: '#212121' }}>
//                   Why Donors Trust Us
//                 </h3>
//                 <div className="space-y-3 md:space-y-4">
//                   {trustIndicators.map((item, index) => (
//                     <div key={index} className="flex items-center gap-3 md:gap-4">
//                       <div 
//                         className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
//                         style={{ backgroundColor: '#FFF3E0' }}
//                       >
//                         <item.icon size={16} style={{ color: '#FF5722' }} />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-sm md:text-base" style={{ color: '#212121' }}>{item.title}</h4>
//                         <p className="text-xs md:text-sm" style={{ color: '#616161' }}>{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Recent Donations */}
//               <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
//                 <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: '#212121' }}>
//                   Recent Donors Say
//                 </h3>
//                 <div className="space-y-3 md:space-y-4">
//                   {testimonials.map((testimonial, index) => (
//                     <div key={index} className="border-l-4 pl-3 md:pl-4" style={{ borderColor: '#FF5722' }}>
//                       <p className="text-xs md:text-sm italic mb-1 md:mb-2" style={{ color: '#616161' }}>
//                         "{testimonial.quote}"
//                       </p>
//                       <div className="flex justify-between items-center">
//                         <span className="font-semibold text-xs md:text-sm" style={{ color: '#212121' }}>
//                           {testimonial.name}, {testimonial.location}
//                         </span>
//                         <span className="text-xs md:text-sm font-bold" style={{ color: '#FF5722' }}>
//                           {testimonial.amount}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Step 2: Donor Details Form (Only for Payment Gateway) */}
//         {currentStep === 2 && (
//           <div className="max-w-4xl mx-auto">
//             <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
//               <button
//                 onClick={() => setCurrentStep(1)}
//                 className="flex items-center gap-1 md:gap-2 text-sm md:text-base font-semibold hover:scale-105 transition-transform"
//                 style={{ color: '#FF5722' }}
//               >
//                 <ArrowLeft size={16} />
//                 Back
//               </button>
//               <div 
//                 className="px-3 md:px-4 py-1 md:py-2 rounded-lg font-bold text-sm md:text-base"
//                 style={{ backgroundColor: '#00695C', color: 'white' }}
//               >
//                 Donating ₹{getCurrentAmount().toLocaleString('en-IN')}
//               </div>
//             </div>

//             <div 
//               className="bg-white rounded-2xl shadow-xl overflow-hidden relative"
//               style={{
//                 backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98)), url("/public/images/stories/istockphoto-477224026-612x612.webp")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundAttachment: 'fixed'
//               }}
//             >
//               <div className="relative p-4 md:p-6 text-white overflow-hidden">
//                 <div className="absolute inset-0 z-0">
//                   <img 
//                     src="/public/images/logo/photo-1641538225752-2d996ea204d4.avif"
//                     alt="Donation background"
//                     className="w-full h-full object-cover opacity-100"
//                   />
//                 </div>
//                 <div 
//                   className="absolute inset-0 z-10" 
//                   style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.95) 0%, rgba(255, 87, 34, 0.95) 100%)' }}
//                 ></div>
//                 <div className="relative z-20">
//                   <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
//                     {activePaymentTab === 'gateway' ? 'Your Details' : 'Payment Information'}
//                   </h2>
//                   <p className="text-sm md:text-base opacity-95">
//                     {activePaymentTab === 'gateway' 
//                       ? 'We need these details to process your donation and send you the tax receipt.'
//                       : 'Complete your donation using the selected payment method.'}
//                   </p>
//                 </div>
//               </div>

//               <div className="p-4 md:p-6 space-y-4 md:space-y-5">
//                 {/* Show form only for Payment Gateway */}
//                 {activePaymentTab === 'gateway' && (
//                   <>
//                     {/* Full Name */}
//                     <div>
//                       <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                         <User size={14} />
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.fullName}
//                         onChange={(e) => handleInputChange('fullName', e.target.value)}
//                         className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
//                           errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
//                         }`}
//                         placeholder="Enter your full name"
//                       />
//                       {errors.fullName && (
//                         <p className="text-red-500 text-xs md:text-sm mt-1">{errors.fullName}</p>
//                       )}
//                     </div>

//                     {/* Date of Birth & Email */}
//                     <div className="grid md:grid-cols-2 gap-3 md:gap-4">
//                       <div>
//                         <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                           <Calendar size={14} />
//                           Date of Birth
//                         </label>
//                         <input
//                           type="date"
//                           value={formData.dateOfBirth}
//                           onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
//                           className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 focus:border-orange-500 transition-all bg-white/90 backdrop-blur-sm"
//                         />
//                       </div>
//                       {/* <div>
//                         <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                           <Mail size={14} />
//                           Email *
//                         </label>
//                         <input
//                           type="email"
//                           value={formData.email}
//                           onChange={(e) => handleInputChange('email', e.target.value)}
//                           className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
//                             errors.email ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
//                           }`}
//                           placeholder="your.email@example.com"
//                         />
//                         {errors.email && (
//                           <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>
//                         )}
//                       </div> */}

//                        <div>
//     <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//       <Mail size={14} />
//       Email *
//     </label>
//     <input
//       type="email"
//       value={formData.email}
//       onChange={(e) => handleInputChange('email', e.target.value)}
//       className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
//         errors.email ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
//       }`}
//       placeholder="your.email@example.com"
//     />
//     {errors.email && (
//       <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>
//     )}
//   </div>
//                     </div>
//   <div>
//     <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//       <Phone size={14} />
//       Mobile Number *
//     </label>
//     <input
//       type="tel"
//       value={formData.mobile}
//       onChange={(e) => handleInputChange('mobile', e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
//       className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
//         errors.mobile ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
//       }`}
//       placeholder="9876543210"
//       maxLength={10}
//     />
//     {errors.mobile && (
//       <p className="text-red-500 text-xs md:text-sm mt-1">{errors.mobile}</p>
//     )}
//   </div>

//                     {/* Mobile Number */}
//                     {/* <div>
//                       <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                         <Phone size={14} />
//                         Mobile Number *
//                       </label>
//                       <input
//                         type="tel"
//                         value={formData.mobile}
//                         onChange={(e) => handleInputChange('mobile', e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
//                         className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
//                           errors.mobile ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
//                         }`}
//                         placeholder="9876543210"
//                       />
//                       {errors.mobile && (
//                         <p className="text-red-500 text-xs md:text-sm mt-1">{errors.mobile}</p>
//                       )}
//                     </div> */}

//                     {/* Address */}
//                     <div>
//                       <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                         <Home size={14} />
//                         Address *
//                       </label>
//                       <textarea
//                         value={formData.address}
//                         onChange={(e) => handleInputChange('address', e.target.value)}
//                         rows={2}
//                         className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 transition-all resize-none bg-white/90 backdrop-blur-sm ${
//                           errors.address ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
//                         }`}
//                         placeholder="Enter your complete address"
//                       />
//                       {errors.address && (
//                         <p className="text-red-500 text-xs md:text-sm mt-1">{errors.address}</p>
//                       )}
//                     </div>

//                     {/* Pincode */}
//                     <div>
//                       <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                         <MapPin size={14} />
//                         Pincode *
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.pincode}
//                         onChange={(e) => handleInputChange('pincode', e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
//                         className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 transition-all bg-white/90 backdrop-blur-sm ${
//                           errors.pincode ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
//                         }`}
//                         placeholder="110001"
//                         maxLength={6}
//                       />
//                       <p className="text-xs md:text-sm mt-1" style={{ color: '#5a5a5a' }}>
//                         Entering Pincode will autofill City and State
//                       </p>
//                       {errors.pincode && (
//                         <p className="text-red-500 text-xs md:text-sm mt-1">{errors.pincode}</p>
//                       )}
//                     </div>

//                     {/* City, State, Country */}
//                     <div className="grid md:grid-cols-3 gap-3 md:gap-4">
//                       <div>
//                         <label className="block text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                           City
//                         </label>
//                         <input
//                           type="text"
//                           value={formData.city}
//                           onChange={(e) => handleInputChange('city', e.target.value)}
//                           className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 focus:border-orange-500 transition-all bg-white/90 backdrop-blur-sm"
//                           placeholder="City"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                           State
//                         </label>
//                         <input
//                           type="text"
//                           value={formData.state}
//                           onChange={(e) => handleInputChange('state', e.target.value)}
//                           className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 focus:border-orange-500 transition-all bg-white/90 backdrop-blur-sm"
//                           placeholder="State"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                           Country
//                         </label>
//                         <input
//                           type="text"
//                           value={formData.country}
//                           readOnly
//                           className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg text-sm md:text-base bg-gray-100/90 backdrop-blur-sm"
//                         />
//                       </div>
//                     </div>

//                     {/* PAN Number */}
//                     <div>
//                       <label className="flex items-center gap-2 text-sm md:text-base font-semibold mb-1 md:mb-2" style={{ color: '#424242' }}>
//                         <CreditCard size={14} />
//                         PAN Number
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.panNumber}
//                         onChange={(e) => handleInputChange('panNumber', e.target.value.toUpperCase())}
//                         className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-3 focus:border-orange-500 transition-all bg-white/90 backdrop-blur-sm"
//                         placeholder="ABCDE1234F"
//                         maxLength={10}
//                       />
//                       <div 
//                         className="mt-2 md:mt-3 p-2 md:p-3 rounded-lg backdrop-blur-sm"
//                         style={{ backgroundColor: 'rgba(255, 243, 224, 0.9)' }}
//                       >
//                         <p className="text-xs md:text-sm font-medium" style={{ color: '#E64A19' }}>
//                           📄 Please note that if you do not provide your PAN Number, you will not be able to claim 50% tax exemption u/s 80G in India
//                         </p>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {/* Payment Method Tabs */}
//                 <div className="mt-6 md:mt-8">
//                   <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: '#212121' }}>
//                     Choose Payment Method
//                   </h3>
                  
//                   {/* Tabs Navigation */}
//                   <div className="flex overflow-x-auto pb-2 mb-4 md:mb-6">
//                     <div className="flex space-x-1 md:space-x-2">
//                       {paymentMethods.map((method) => (
//                         <button
//                           key={method.id}
//                           onClick={() => setActivePaymentTab(method.id)}
//                           className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-xs md:text-sm whitespace-nowrap transition-all ${
//                             activePaymentTab === method.id
//                               ? 'bg-orange-600 text-white shadow-md'
//                               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                         >
//                           {method.label}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Tabs Content */}
//                   <div className="bg-white rounded-xl shadow-sm">
//                     {renderPaymentTabContent()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer Section */}
//       <div className="relative py-8 md:py-12 px-4 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/public/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg"
//             alt="Secure Donation Background"
//             className="w-full h-full object-cover opacity-60"
//           />
//         </div>
//         <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
//         <div className="relative z-20 max-w-6xl mx-auto text-center text-white">
//           <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
//             Secure & Trusted Donations
//           </h3>
//           <p className="text-sm md:text-lg opacity-90 mb-4 md:mb-6">
//             Your donation is secure and will be processed through Razorpay's encrypted payment gateway.
//           </p>
//           <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-8 text-xs md:text-sm opacity-80">
//             <span>80G Tax Exemption</span>
//             <span>•</span>
//             <span>Secure Payment Gateway</span>
//             <span>•</span>
//             <span>Instant Receipt</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonatePage;



import React, { useEffect, useState } from 'react';
import { Heart, Users, Target, Globe, ChevronRight, Check, ArrowLeft, User, Mail, Phone, MapPin, CreditCard, Calendar, Home, Shield, Award, Clock } from 'lucide-react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { toast } from 'react-toastify';


const DonatePage = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
   const headerRef = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCause, setSelectedCause] = useState('education');
  const [activePaymentTab, setActivePaymentTab] = useState('gateway');
 
  // const causes = [
  //   {
  //     id: 'education',
  //     title: 'Education for All',
  //     description: 'Provide quality education and learning materials to underprivileged children.',
  //     impact: 'Your donation can provide school supplies for children for a month',
  //     image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&crop=faces'
  //   },
  //   {
  //     id: 'healthcare',
  //     title: 'Child Healthcare',
  //     description: 'Ensure access to essential healthcare services and medical support.',
  //     impact: 'Your support can cover medical checkups for children',
  //     image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=faces'
  //   },
  //   {
  //     id: 'nutrition',
  //     title: 'Nutrition Program',
  //     description: 'Combat malnutrition by providing healthy meals and nutritional support.',
  //     impact: 'Your contribution can feed children nutritious meals',
  //     image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&crop=faces'
  //   }
  // ];
const causes = [
  {
    id: 'education',
    title: 'Education for All',
    description: 'Provide quality education and learning materials to underprivileged children.',
    impact: 'Your donation can provide school supplies for children for a month',
    image: '/images/projects/photo-1569173675610-42c361a86e37.avif'
  },
  {
    id: 'healthcare',
    title: 'Child Healthcare',
    description: 'Ensure access to essential healthcare services and medical support.',
    impact: 'Your support can cover medical checkups for children',
    image: '/images/projects/photo-1571847560189-8c2985584bee.avif'
  },
  {
    id: 'nutrition',
    title: 'Nutrition Program',
    description: 'Combat malnutrition by providing healthy meals and nutritional support.',
    impact: 'Your contribution can feed children nutritious meals',
    image: '/images/projects/premium_photo-1682097863874-ae40dd878665.avif'
  },
  // {
  //   id: 'women-empowerment',
  //   title: 'Women Empowerment',
  //   description: 'Support skill development and economic independence for underprivileged women.',
  //   impact: 'Your donation can provide vocational training for women',
  //   image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&crop=faces'
  // }
];
  const stats = [
    { number: '5,000+', label: 'Children Helped', icon: Users },
    { number: '95%', label: 'Funds to Programs', icon: Target },
    { number: '4+', label: 'Active Programs', icon: Heart },
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
      quote: 'Knowing my contribution helped a child get access to education brings me immense joy. Every child deserves a chance.',
      amount: 'Supporter since 2020'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      quote: 'Supporting this NGO has been a heartwarming experience. Seeing smiling children grow and learn is priceless.',
      amount: 'Monthly donor'
    },
    {
      name: 'Anjali Mehta',
      location: 'Bengaluru',
      quote: 'This organization truly cares. My donation helped provide books and food to underprivileged kids. I feel proud to be a part of it.',
      amount: 'Corporate sponsor'
    }
  ];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.upiId);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const paymentMethods = [
    { id: 'gateway', label: 'Payment Gateway' },
    { id: 'upi', label: 'UPI Transfer' },
    { id: 'qr', label: 'QR Code' },
    { id: 'bank', label: 'Bank Transfer' }
  ];

  const bankDetails = {
    accountName: "Ashwamedh Foundation",
    accountNumber: "2571101004533",
    bankName: "Canara Bank",
    branch: "Kalina, Mumbai",
    ifsc: "CNRB0000116",
    upiId: "102773700004533@cnrb",
    qrCodeImage: "/images/logo/WhatsApp Image 2025-07-17 at 4.15.21 PM.jpeg"
  };

  
  const handleProceedToPayment = () => {

toast.info('Redirecting to secure Razorpay payment...', {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  style: {
    backgroundColor: '#FFE0B2',   // light orange
    color: '#4E342E',             // dark text
    fontWeight: 'bold',
    fontSize: 'clamp(12px, 3vw, 14px)', // responsive font scaling
    padding: 'clamp(8px, 2vw, 12px) clamp(10px, 3vw, 16px)', // responsive padding
    borderRadius: '8px',
    width: 'fit-content',
    maxWidth: 'min(90vw, 400px)', // responsive max width
    wordBreak: 'break-word',
    boxSizing: 'border-box',
    margin: 'clamp(8px, 2vw, 16px)', // responsive margin
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  bodyStyle: {
    margin: 0, // removes default margin
  }
});

  setTimeout(() => {
    window.location.href = 'https://rzp.io/rzp/2kWG69S';
  }, 1600); // delay slightly longer than autoClose
};


const handleContinueToPayment = () => {
  setCurrentStep(2);

  setTimeout(() => {
    if (headerRef.current) {
      const element = headerRef.current;
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const offset = rect.top + scrollTop - (window.innerHeight / 2) + 500; // +100 = below center
      window.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 200);
};



  const renderPaymentTabContent = () => {
    switch (activePaymentTab) {
      case 'gateway':
        return (
          <div className="space-y-6">
            <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
              <h3 className="text-lg md:text-xl font-bold mb-4">Secure Payment Gateway</h3>
              <p className="mb-4 text-sm md:text-base">Complete your donation using our secure payment gateway with multiple options:</p>
              <ul className="space-y-2 mb-6 text-sm md:text-base">
                <li className="flex items-center gap-2"><Check className="text-green-600" /> Credit/Debit Cards</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" /> Net Banking</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" /> UPI</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" /> Wallets</li>
              </ul>
              <button
                onClick={handleProceedToPayment}
                className="w-full py-3 md:py-4 px-4 md:px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all hover:shadow-lg text-sm md:text-base"
              >
                Donate via Payment Gateway
              </button>
            </div>
            <div className="bg-orange-50/90 p-3 md:p-4 rounded-lg border border-orange-200 text-sm">
              <p className="text-orange-800">
                <span className="font-bold">Note:</span> You will be redirected to a secure payment page after clicking the button above.
              </p>
            </div>
          </div>
        );
      case 'upi':
        return (
          <div className="space-y-6">
            <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
              <h3 className="text-lg md:text-xl font-bold mb-4">Direct UPI Transfer</h3>
              <p className="mb-4 text-sm md:text-base">You can transfer your donation directly to our UPI ID:</p>
              
              <div className="bg-orange-50 p-3 md:p-4 rounded-lg mb-6">
                {/* <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm text-gray-600">UPI ID</p>
                    <p className="text-lg md:text-xl font-bold text-orange-700">{bankDetails.upiId}</p>
                  </div>
                  <button
                    className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-2 bg-orange-600 text-white rounded-lg text-xs md:text-sm font-medium transition-all duration-200"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      'Copy'
                    )}
                  </button>
                </div> */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 w-full">
  <div>
    <p className="text-[11px] sm:text-xs md:text-sm text-gray-600">UPI ID</p>
    <p className="text-base sm:text-lg md:text-xl font-bold text-orange-700 break-all">
      {bankDetails.upiId}
    </p>
  </div>
  <button
    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-600 text-white rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap"
    onClick={handleCopy}
  >
    {copied ? (
      <>
        <Check className="w-4 h-4 sm:w-5 sm:h-5" />
        Copied
      </>
    ) : (
      <>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-2" />
        </svg>
        Copy
      </>
    )}
  </button>
</div>

              </div>
              
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <h4 className="font-bold mb-2">Steps to donate via UPI:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Open your UPI payment app (Google Pay, PhonePe, Paytm, etc.)</li>
                    <li>Select "Send Money" or "Pay via UPI ID"</li>
                    <li>Enter our UPI ID: <span className="font-bold">{bankDetails.upiId}</span></li>
                    <li>Enter your donation amount</li>
                    <li>Add a note with your name for our records</li>
                    <li>Complete the transaction</li>
                  </ol>
                </div>
                
                <div className="bg-orange-50/90 p-3 md:p-4 rounded-lg border border-orange-200">
                  <p className="text-orange-800 text-xs md:text-sm">
                    <span className="font-bold">Important:</span> After making the payment, please email the transaction details to donations@helpinghands.org for receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'qr':
        return (
          <div className="space-y-6">
            <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
              <h3 className="text-lg md:text-xl font-bold mb-4">Scan QR Code to Donate</h3>
              <p className="mb-4 text-sm md:text-base">Scan the QR code below using any UPI app to make your donation:</p>
              
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 md:p-4 rounded-lg border-2 border-orange-300 mb-4">
                  <img 
                    src={bankDetails.qrCodeImage} 
                    alt="UPI QR Code" 
                    className="w-52 h-52 md:w-64 md:h-64 object-contain"
                  />
                </div>
              </div>
              
              <div className="mt-6 space-y-4 text-sm md:text-base">
                <div>
                  <h4 className="font-bold mb-2">How to use QR code:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Open your UPI payment app</li>
                    <li>Select "Scan QR Code"</li>
                    <li>Point your camera at the QR code above</li>
                    <li>Enter your donation amount</li>
                    <li>Complete the transaction</li>
                  </ol>
                </div>
                
                <div className="bg-orange-50/90 p-3 md:p-4 rounded-lg border border-orange-200">
                  <p className="text-orange-800 text-xs md:text-sm">
                    <span className="font-bold">Note:</span> The QR code is valid for all UPI apps. After payment, you'll receive an automatic receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'bank':
        return (
          <div className="space-y-6">
            <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
              <h3 className="text-lg md:text-xl font-bold mb-4">Bank Transfer Details</h3>
              <p className="mb-6 text-sm md:text-base">You can transfer your donation directly to our bank account:</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-gray-600">Account Name</p>
                  <p className="text-base md:text-lg font-bold text-orange-700">{bankDetails.accountName}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-600">Account Number</p>
                    <p className="text-base md:text-lg font-bold text-orange-700">{bankDetails.accountNumber}</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-600">IFSC Code</p>
                    <p className="text-base md:text-lg font-bold text-orange-700">{bankDetails.ifsc}</p>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-gray-600">Bank Name & Branch</p>
                  <p className="text-base md:text-lg font-bold text-orange-700">{bankDetails.bankName}, {bankDetails.branch}</p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <h4 className="font-bold mb-2">Steps for bank transfer:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Login to your internet banking or mobile banking app</li>
                    <li>Select "Fund Transfer" or "NEFT/RTGS"</li>
                    <li>Enter the bank details provided above</li>
                    <li>Enter your donation amount</li>
                    <li>Add your name in the transaction remarks</li>
                    <li>Complete the transaction</li>
                  </ol>
                </div>
                
                <div className="bg-orange-50/90 p-3 md:p-4 rounded-lg border border-orange-200">
                  <p className="text-orange-800 text-xs md:text-sm">
                    <span className="font-bold">Important:</span> After making the transfer, please email the transaction details to donations@helpinghands.org with your PAN for 80G receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative py-12 md:py-20 px-4 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/images/logo/istockphoto-1252924066-612x612.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-90"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Transform <span className='text-orange-200'>Lives</span> Through Your Generosity
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-95">
            Join thousands of compassionate donors making a real difference in children's lives around the world. 
            Every contribution creates lasting impact.
          </p>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center space-x-4 mt-8 md:mt-12">
            <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full font-bold ${
              currentStep >= 1 ? 'bg-white text-orange-600' : 'bg-orange-300 text-white'
            }`}>
              1
            </div>
            <div className={`w-12 md:w-16 h-1 ${currentStep >= 2 ? 'bg-white' : 'bg-orange-300'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full font-bold ${
              currentStep >= 2 ? 'bg-white text-orange-600' : 'bg-orange-300 text-white'
            }`}>
              2
            </div>
          </div>

          <div className="flex justify-center space-x-12 md:space-x-20 mt-3 md:mt-4 text-xs md:text-sm">
            <span className={currentStep >= 1 ? 'font-semibold' : 'opacity-75'}>Choose Impact</span>
            <span className={currentStep >= 2 ? 'font-semibold' : 'opacity-75'}>Payment Method</span>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <stat.icon size={24} className="opacity-90" />
                </div>
                <div className="text-xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-xs md:text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Step 1: Impact Area Selection */}
        {currentStep === 1 && (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#212121' }}>
                  Our Mission & Impact
                </h2>
                <p style={{ color: '#616161' }} className="text-sm md:text-lg">
                  For over 15 years, we've been transforming lives through education, healthcare, and nutrition programs. 
                  Your support helps us reach more children in need.
                </p>
              </div>

              {/* Impact Stories */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#212121' }}>
                  Success Stories
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-orange-100 p-2 md:p-3 rounded-full">
                      <Heart className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg" style={{ color: '#212121' }}>Rahul's Journey</h4>
                      <p className="text-sm md:text-base" style={{ color: '#616161' }}>
                        From a child laborer to a medical student, Rahul's transformation shows the power of education.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-orange-100 p-2 md:p-3 rounded-full">
                      <Target className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg" style={{ color: '#212121' }}>Village Transformation</h4>
                      <p className="text-sm md:text-base" style={{ color: '#616161' }}>
                        Our nutrition program reduced malnutrition rates by 60% in rural Maharashtra villages.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-orange-100 p-2 md:p-3 rounded-full">
                      <Globe className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg" style={{ color: '#212121' }}>Community Impact</h4>
                      <p className="text-sm md:text-base" style={{ color: '#616161' }}>
                        Over 5,000 lives transformed through our holistic development programs.
                      </p>
                    </div>
                  </div>
                </div>
                 <button
    onClick={handleContinueToPayment}
    className="floating-donate-btn py-2 px-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full mt-2 transition-all flex items-center gap-1.5"
    style={{
      background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)'
    }}
  >
    <Heart size={18} />
    Donate Now
  </button>
              </div>

              {/* Cause Selection */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6" style={{ color: '#212121' }}>
                  Choose Your Impact Area
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {causes.map((cause) => (
                    <div
                      key={cause.id}
                      onClick={() => setSelectedCause(cause.id)}
                      className={`p-4 md:p-6 rounded-xl border-3 cursor-pointer transition-all transform hover:scale-102 ${
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
                          <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2" style={{ color: '#212121' }}>
                            {cause.title}
                          </h4>
                          <p className="mb-2 md:mb-3 text-xs md:text-base" style={{ color: '#616161' }}>
                            {cause.description}
                          </p>
                          <p className="text-xs md:text-sm font-semibold" style={{ color: '#FF5722' }}>
                            💡 {cause.impact}
                          </p>
                        </div>
                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-3 flex items-center justify-center ml-2 md:ml-4 ${
                          selectedCause === cause.id ? 'border-3' : ''
                        }`}
                        style={{
                          borderColor: selectedCause === cause.id ? '#FF5722' : '#BDBDBD',
                          backgroundColor: selectedCause === cause.id ? '#FF5722' : 'white'
                        }}>
                          {selectedCause === cause.id && (
                            <Check size={12} color="white" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinueToPayment}
                className={`w-full py-3 md:py-5 px-4 md:px-8 rounded-xl text-lg md:text-xl font-bold transition-all flex items-center justify-center gap-2 md:gap-3 hover:shadow-xl hover:scale-105 active:scale-95`}
                style={{ 
                  background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)',
                  color: 'white'
                }}
              >
                Continue to Payment
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Right Column - Impact Preview & Additional Content */}
            <div className="space-y-6 md:space-y-8 mt-8 md:mt-0">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{ color: '#212121' }}>
                  Your Impact Preview
                </h2>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={causes.find(c => c.id === selectedCause)?.image}
                  alt="Children being helped"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: '#212121' }}>
                    {causes.find(c => c.id === selectedCause)?.title}
                  </h3>
                  <p style={{ color: '#616161' }} className="mb-3 md:mb-4 text-sm md:text-base">
                    {causes.find(c => c.id === selectedCause)?.description}
                  </p>
                  <div 
                    className="p-3 md:p-4 rounded-xl"
                    style={{ backgroundColor: '#FFF3E0' }}
                  >
                    <p className="font-bold text-sm md:text-base" style={{ color: '#E64A19' }}>
                      💡 {causes.find(c => c.id === selectedCause)?.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Annual Report */}
            

              {/* Trust Indicators */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: '#212121' }}>
                  Why Donors Trust Us
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {trustIndicators.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4">
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#FFF3E0' }}
                      >
                        <item.icon size={16} style={{ color: '#FF5722' }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base" style={{ color: '#212121' }}>{item.title}</h4>
                        <p className="text-xs md:text-sm" style={{ color: '#616161' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Donations */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: '#212121' }}>
                  What Our Supporters Say
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 pl-3 md:pl-4" style={{ borderColor: '#FF5722' }}>
                      <p className="text-xs md:text-sm italic mb-1 md:mb-2" style={{ color: '#616161' }}>
                        "{testimonial.quote}"
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-xs md:text-sm" style={{ color: '#212121' }}>
                          {testimonial.name}, {testimonial.location}
                        </span>
                        <span className="text-xs md:text-sm font-bold" style={{ color: '#FF5722' }}>
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

        {/* Step 2: Payment Method Selection */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-1 md:gap-2 text-sm md:text-base font-semibold hover:scale-105 transition-transform"
                style={{ color: '#FF5722' }}
              >
                <ArrowLeft size={16} />
                Back
              </button>
              <div 
                className="px-3 md:px-4 py-1 md:py-2 rounded-lg font-bold text-sm md:text-base"
                style={{ backgroundColor: '#00897B', color: 'white' }}
              >
                Supporting {causes.find(c => c.id === selectedCause)?.title}
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
              <div className="relative p-4 md:p-6 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/images/logo/photo-1641538225752-2d996ea204d4.avif"
                    alt="Donation background"
                    className="w-full h-full object-cover opacity-100"
                  />
                </div>
                <div 
                  className="absolute inset-0 z-10" 
                  style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.95) 0%, rgba(255, 87, 34, 0.95) 100%)' }}
                ></div>
                <div className="relative z-20">
                  <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                    Payment Information
                  </h2>
                  <p className="text-sm md:text-base opacity-95">
                    Complete your donation using the selected payment method.
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-6 space-y-4 md:space-y-5">
                {/* Payment Method Tabs */}
                <div className="mt-6 md:mt-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: '#212121' }}>
                    Choose Payment Method
                  </h3>
                  
                  {/* Tabs Navigation */}
                  <div className="flex overflow-x-auto pb-2 mb-4 md:mb-6">
                    <div className="flex space-x-1 md:space-x-2">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setActivePaymentTab(method.id)}
                          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-xs md:text-sm whitespace-nowrap transition-all ${
                            activePaymentTab === method.id
                              ? 'bg-orange-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {method.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tabs Content */}
                  <div className="bg-white rounded-xl shadow-sm">
                    {renderPaymentTabContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="relative py-9 md:py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/logo/school-children-dressed-uniform-have-fun-play-schoolyard.jpg"
            alt="Secure Donation Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90"></div>
        <div className="relative z-20 max-w-6xl mx-auto text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            Secure & Trusted Donations
          </h3>
          <p className="text-sm md:text-lg opacity-90 mb-4 md:mb-6">
            Your donation is secure and will be processed through Razorpay's encrypted payment gateway.
          </p>
          <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-8 text-xs md:text-sm opacity-80">
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
  <style jsx>{`
  .floating-donate-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    animation: pulse 2s infinite;
    border-radius: 50px;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`}</style>
};

export default DonatePage;