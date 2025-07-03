// import React, { useEffect, useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, ArrowRight, Home, Shield, Users, Heart } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { setLoading, setUser } from '../redux/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AdminLoginPage = () => {
//   const isLoading = useSelector((state) => state.auth.loading);
//   const dispatch=useDispatch();
//   const navigate=useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const user = useSelector((state) => state.auth.user);
//   const handleInputChange = (e) => {
   
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post('http://localhost:5000/api/admin/login', formData, {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//       //  toast.success(`Welcome ${res.data.user.fullname}`);
//         dispatch(setUser(res.data.user));
//         toast.success("Login successfully")
//        setFormData({
//         email:"",
//         password:""
//        })
//         if (user) {
//           navigate('/admin-dashboard');
//         }else {
//           navigate('/');
//         }
//       }
//     } catch (error) {
//       console.log(error);
      
//       toast.error(error.response.data.message);
//     }
//     dispatch(setLoading(false));
//   };


//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user]);

//   return (
//     <div className="min-h-screen bg-gray-50">
    
// <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-20">
    
//       <div className="flex items-center space-x-4 cursor-pointer group">
//         <Link to='/'>
//           <div className="bg-gradient-to-t from-orange-50 to-white p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
//             <img 
//               src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
//               className="w-24 h-20 object-contain" 
//               alt="Ashwamedh Foundation Logo"
//             />
//           </div>
//         </Link>
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
//             Ashwamedh Foundation
//           </h1>
//           <p className="text-sm text-gray-600">Empowering Communities</p>
//         </div>
//       </div>

//       <Link to='/'>
//         <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors">
//           <Home className="h-4 w-4" />
//           <span className="text-sm">Home</span>
//         </button>
//       </Link>
      
//     </div>
//   </div>
// </header>

//       {/* Main Content */}
//       <div className="flex min-h-[calc(100vh-4rem)] pt-20">
//         {/* Left Side - Image */}
//         <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
//           <div className="absolute inset-0 bg-black bg-opacity-20"></div>
//           <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
//             <div className="max-w-md text-center">
//               <div className="mb-8">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm">
//                   <Shield className="h-10 w-10 text-white" />
//                 </div>
//                 <h2 className="text-4xl font-bold mb-4">Admin Portal</h2>
//                 <p className="text-xl text-orange-100 mb-8">
//                   Secure access to manage Ashwamedh Foundation operations
//                 </p>
//               </div>
              
//               <div className="space-y-4 text-left">
//                 <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
//                   <Users className="h-6 w-6 text-orange-200" />
//                   <div>
//                     <h3 className="font-semibold">User Management</h3>
//                     <p className="text-sm text-orange-100">Manage volunteers and beneficiaries</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
//                   <Heart className="h-6 w-6 text-orange-200" />
//                   <div>
//                     <h3 className="font-semibold">Program Oversight</h3>
//                     <p className="text-sm text-orange-100">Monitor foundation programs</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Decorative Elements */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
//           <div className="w-full max-w-md">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-6">
//                 <Lock className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h2>
//               <p className="text-gray-600">
//                 Please sign in to access the admin dashboard
//               </p>
//             </div>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
//                     placeholder="admin@ashwamedhfoundation.org"
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? 'text' : 'password'}
//                     autoComplete="current-password"
//                     required
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
//                     placeholder="Enter your password"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <button
//   type="submit"
//   disabled={isLoading}
//   className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
// >
//   <div className="flex items-center gap-2">
//     {isLoading ? (
//       <>
//         <svg
//           className="animate-spin h-4 w-4 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//         >
//           <circle
//             className="opacity-25"
//             cx="12"
//             cy="12"
//             r="10"
//             stroke="currentColor"
//             strokeWidth="4"
//           />
//           <path
//             className="opacity-75"
//             fill="currentColor"
//             d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//           />
//         </svg>
//         Signing in...
//       </>
//     ) : (
//       <>
//         Sign in to Dashboard
//         <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//       </>
//     )}
//   </div>
// </button>

//             </form>

//             <div className="mt-8 text-center">
//               <p className="text-sm text-gray-600">
//                 Need help? Contact{' '}
//                 <a href="mailto:support@ashwamedhfoundation.org" className="font-medium text-orange-600 hover:text-orange-500">
//                   support@ashwamedhfoundation.org
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//           <footer className="bg-[#212121]  text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="flex items-center space-x-3 mb-4 md:mb-0">
           
//                   <div className=" p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
//             <img 
//               src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
//               className="w-24 h-20 object-contain" 
//               alt="Ashwamedh Foundation Logo"
//             />

//               </div>
//               <div>
//                 <h3 className="text-lg font-bold">Ashwamedh Foundation</h3>
//                 <p className="text-sm text-gray-400">Empowering Communities</p>
//               </div>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400">
//               <span>© 2025 Ashwamedh Foundation. All rights reserved.</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AdminLoginPage;



// import React, { useEffect, useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, ArrowRight, Home, Shield, Users, Heart } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { setLoading, setUser } from '../redux/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AdminLoginPage = () => {
//   const isLoading = useSelector((state) => state.auth.loading);
//   const dispatch=useDispatch();
//   const navigate=useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const user = useSelector((state) => state.auth.user);
//   const handleInputChange = (e) => {
   
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post('http://localhost:5000/api/admin/login', formData, {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//       //  toast.success(`Welcome ${res.data.user.fullname}`);
//         dispatch(setUser(res.data.user));
//         toast.success("Login successfully")
//        setFormData({
//         email:"",
//         password:""
//        })
//         if (user) {
//           navigate('/admin-dashboard');
//         }else {
//           navigate('/');
//         }
//       }
//     } catch (error) {
//       console.log(error);
      
//       toast.error('Login Failed');
//     }
//     dispatch(setLoading(false));
//   };


//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user]);

//   return (
//     <div className="min-h-screen bg-gray-50">
    
// <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
//   <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
    
//       <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 cursor-pointer group">
//         <Link to='/'>
//           <div className="bg-gradient-to-t from-orange-50 to-white p-1 sm:p-1.5 md:p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
//             <img 
//               src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
//               className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 object-contain" 
//               alt="Ashwamedh Foundation Logo"
//             />
//           </div>
//         </Link>
//         <div className="hidden lg:block">
//           <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
//             Ashwamedh Foundation
//           </h1>
//           <p className="text-xs sm:text-sm text-gray-600">Empowering Communities</p>
//         </div>
//       </div>

//       <Link to='/'>
//         <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-orange-600 transition-colors px-2 py-1 rounded-md hover:bg-gray-50">
//           <Home className="h-4 w-4 sm:h-5 sm:w-5" />
//           <span className="text-xs sm:text-sm hidden xs:inline">Home</span>
//         </button>
//       </Link>
      
//     </div>
//   </div>
// </header>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] pt-16 sm:pt-18 md:pt-20">
//         {/* Left Side - Image */}
//         <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
//           <div className="absolute inset-0 bg-black bg-opacity-20"></div>
//           <div className="relative z-10 flex flex-col justify-center items-center p-8 xl:p-12 text-white">
//             <div className="max-w-md text-center">
//               <div className="mb-6 lg:mb-8">
//                 <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full mb-4 lg:mb-6 backdrop-blur-sm">
//                   <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
//                 </div>
//                 <h2 className="text-2xl lg:text-3xl  xl:text-4xl font-bold mb-3 lg:mb-4">Admin Portal</h2>
//                 <p className="text-lg lg:text-xl text-orange-100 mb-6 lg:mb-8">
//                   Secure access to manage Ashwamedh Foundation operations
//                 </p>
//               </div>
              
//               <div className="space-y-3 lg:space-y-4 text-left">
//                 <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-3 lg:p-4 rounded-lg backdrop-blur-sm">
//                   <Users className="h-5 w-5 lg:h-6 lg:w-6 text-orange-200 flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-sm lg:text-base">User Management</h3>
//                     <p className="text-xs lg:text-sm text-orange-100">Manage volunteers and beneficiaries</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-3 lg:p-4 rounded-lg backdrop-blur-sm">
//                   <Heart className="h-5 w-5 lg:h-6 lg:w-6 text-orange-200 flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-sm lg:text-base">Program Oversight</h3>
//                     <p className="text-xs lg:text-sm text-orange-100">Monitor foundation programs</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Decorative Elements */}
//           <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-white bg-opacity-5 rounded-full -translate-y-24 lg:-translate-y-32 translate-x-24 lg:translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-36 h-36 lg:w-48 lg:h-48 bg-white bg-opacity-5 rounded-full translate-y-18 lg:translate-y-24 -translate-x-18 lg:-translate-x-24"></div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white min-h-screen lg:min-h-auto">
//           <div className="w-full max-w-sm sm:max-w-md">
//             {/* Mobile Header for smaller screens */}
//             <div className="lg:hidden text-center mb-6 sm:mb-8 pt-4">
//               <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-4 sm:mb-6">
//                 <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
//               </div>
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Admin Portal</h2>
//               <p className="text-sm sm:text-base text-gray-600 px-2">
//                 Secure access to manage Ashwamedh Foundation
//               </p>
//             </div>

//             <div className="text-center mb-6 sm:mb-8">
//               <div className="lg:inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-4 sm:mb-6 hidden">
//                 <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
//               </div>
//               <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Admin Login</h2>
//               <p className="text-sm sm:text-base text-gray-600 px-2">
//                 Please sign in to access the admin dashboard
//               </p>
//             </div>

//             <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="block w-full pl-8 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
//                     placeholder="admin@ashwamedhfoundation.org"
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? 'text' : 'password'}
//                     autoComplete="current-password"
//                     required
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="block w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
//                     placeholder="Enter your password"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
//                     ) : (
//                       <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="group relative w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
//               >
//                 <div className="flex items-center gap-2">
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
//                       <span className="text-sm sm:text-base">Signing in...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span className="text-sm sm:text-base">Sign in to Dashboard</span>
//                       <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
//                     </>
//                   )}
//                 </div>
//               </button>
//               {/* <button type='submit'>
//                 Submit
//               </button> */}
//             </form>

//             <div className="mt-6 sm:mt-8 text-center">
//               <p className="text-xs sm:text-sm text-gray-600 px-2">
//                 Need help? Contact{' '}
//                 <a href="mailto:support@ashwamedhfoundation.org" className="font-medium text-orange-600 hover:text-orange-500 break-all">
//                   support@ashwamedhfoundation.org
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="bg-[#212121] text-white">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-4 py-3 sm:py-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
//             <div className="flex items-center space-x-2 sm:space-x-3">
//               <div className="p-1 sm:p-2 rounded-lg transition-all duration-300">
//                 <img 
//                   src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
//                   className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 object-contain" 
//                   alt="Ashwamedh Foundation Logo"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-sm sm:text-base md:text-lg font-bold">Ashwamedh Foundation</h3>
//                 <p className="text-xs sm:text-sm text-gray-400">Empowering Communities</p>
//               </div>
//             </div>
            
//             <div className="text-center sm:text-right">
//               <span className="text-xs sm:text-sm text-gray-400">© 2025 Ashwamedh Foundation. All rights reserved.</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AdminLoginPage;






import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Home, Shield, Users, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { setLoading, setUser } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminLoginPage = () => {
  const isLoading = useSelector((state) => state.auth.loading);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const handleInputChange = (e) => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post('http://localhost:5000/api/admin/login', formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      if (res.data.success) {
      //  toast.success(`Welcome ${res.data.user.fullname}`);
        dispatch(setUser(res.data.user));
        toast.success("Login successfully")
       setFormData({
        email:"",
        password:""
       })
        if (user) {
          navigate('/admin-dashboard');
        }else {
          navigate('/');
        }
      }
    } catch (error) {
      console.log(error);
      
      toast.error('Login Failed');
    }
    dispatch(setLoading(false));
  };


  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50">
    
<header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
  <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
    <div className="flex items-center justify-between h-14 xs:h-16 sm:h-16 md:h-18 lg:h-20">
    
      <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer group">
        <Link to='/'>
          <div className="bg-gradient-to-t from-orange-50 to-white p-1 sm:p-1.5 lg:p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
            <img 
              src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
              className="w-12 h-10 xs:w-14 xs:h-12 sm:w-16 sm:h-12 md:w-20 md:h-16 lg:w-24 lg:h-20 object-contain" 
              alt="Ashwamedh Foundation Logo"
            />
          </div>
        </Link>
        <div className="hidden md:block">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
            Ashwamedh Foundation
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">Empowering Communities</p>
        </div>
      </div>

      <Link to='/'>
        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-orange-600 transition-colors px-2 py-1 rounded-md hover:bg-gray-50">
          <Home className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-xs sm:text-sm hidden xs:inline">Home</span>
        </button>
      </Link>
      
    </div>
  </div>
</header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-14 xs:pt-16 sm:pt-16 md:pt-18 lg:pt-20">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 flex flex-col justify-center items-center p-6 lg:p-8 xl:p-12 text-white">
            <div className="max-w-md text-center">
              <div className="mb-6 lg:mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full mb-4 lg:mb-6 backdrop-blur-sm">
                  <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h2 className="hidden lg:block text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4">Admin Portal</h2>
                <p className="hidden lg:block text-lg lg:text-xl text-orange-100 mb-6 lg:mb-8">
                  Secure access to manage Ashwamedh Foundation operations
                </p>
              </div>
              
              <div className="space-y-3 lg:space-y-4 text-left">
                <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-3 lg:p-4 rounded-lg backdrop-blur-sm">
                  <Users className="h-5 w-5 lg:h-6 lg:w-6 text-orange-200 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm lg:text-base">User Management</h3>
                    <p className="text-xs lg:text-sm text-orange-100">Manage volunteers and beneficiaries</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-3 lg:p-4 rounded-lg backdrop-blur-sm">
                  <Heart className="h-5 w-5 lg:h-6 lg:w-6 text-orange-200 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm lg:text-base">Program Oversight</h3>
                    <p className="text-xs lg:text-sm text-orange-100">Monitor foundation programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-white bg-opacity-5 rounded-full -translate-y-24 lg:-translate-y-32 translate-x-24 lg:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-36 h-36 lg:w-48 lg:h-48 bg-white bg-opacity-5 rounded-full translate-y-18 lg:translate-y-24 -translate-x-18 lg:-translate-x-24"></div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8 bg-white min-h-[calc(100vh-3.5rem)] xs:min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)] lg:min-h-auto">
          <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md">
            {/* Mobile Header for smaller screens */}
            <div className="lg:hidden text-center mb-4 xs:mb-6 sm:mb-8 pt-2 xs:pt-4">
              <div className="inline-flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-3 xs:mb-4 sm:mb-6">
                <Shield className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Admin Portal</h2>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 px-2">
                Secure access to manage Ashwamedh Foundation
              </p>
            </div>

            <div className="text-center mb-4 xs:mb-6 sm:mb-8">
              <div className="lg:inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-4 sm:mb-6 hidden">
                <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Admin Login</h2>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 px-2">
                Please sign in to access the admin dashboard
              </p>
            </div>

            <form className="space-y-4 xs:space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 xs:pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-7 xs:pl-8 sm:pl-10 pr-3 py-2 xs:py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs xs:text-sm sm:text-base"
                    placeholder="admin@ashwamedhfoundation.org"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 xs:pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full pl-7 xs:pl-8 sm:pl-10 pr-8 xs:pr-10 sm:pr-12 py-2 xs:py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs xs:text-sm sm:text-base"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-2 xs:pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 xs:py-2.5 sm:py-3 px-4 border border-transparent text-xs xs:text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-3 w-3 xs:h-4 xs:w-4 text-white"
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
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign in to Dashboard</span>
                      <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 xs:h-3 xs:w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </form>

            <div className="mt-4 xs:mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-gray-600 px-2">
                Need help? Contact{' '}
                <a href="mailto:support@ashwamedhfoundation.org" className="font-medium text-orange-600 hover:text-orange-500 break-all">
                  support@ashwamedhfoundation.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#212121] text-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-6">
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:flex-row md:justify-between md:space-y-0 md:text-left">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="p-1 sm:p-2 rounded-lg transition-all duration-300">
                <img 
                  src="/public/images/logo/9c2ddc63-1fba-41bf-a057-3857806468e2-removebg-preview.png" 
                  className="w-10 h-8 xs:w-12 xs:h-10 sm:w-14 sm:h-12 md:w-16 md:h-14 lg:w-20 lg:h-16 object-contain" 
                  alt="Ashwamedh Foundation Logo"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white">Ashwamedh Foundation</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-300 hidden xs:block">Empowering Communities</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <span className="text-xs xs:text-sm sm:text-base text-gray-400 block xs:inline">
                © 2025 Ashwamedh Foundation.
              </span>
              <span className="text-xs xs:text-sm sm:text-base text-gray-400 block xs:inline xs:ml-1">
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLoginPage;