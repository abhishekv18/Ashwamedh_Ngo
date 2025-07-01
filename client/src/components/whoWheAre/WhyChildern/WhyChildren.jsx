
// import React, { useEffect } from 'react';
// import { Heart, Users, TrendingUp, Shield, BookOpen, Smile, AlertTriangle, Home, Droplets, Utensils } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const WhyChildren = () => {

// const navigate=useNavigate();
//   const user = useSelector((state) => state.auth.user);
//     useEffect(() => {
//     if (user) {
//       navigate("/admin-dashboard");
//     }
//   }, [user]);


//   const globalStats = [
//     {
//       number: "900M",
//       label: "Children in Multidimensional Poverty",
//       description: "Children worldwide lack necessities like food, water, shelter, education and healthcare",
//       color: "#FF5722"
//     },
//     {
//       number: "333M",
//       label: "Children in Extreme Poverty",
//       description: "Children surviving on less than $2.15 each day globally",
//       color: "#00695C"
//     },
//     {
//       number: "262M",
//       label: "Out of School Children",
//       description: "Children and youth are out of school worldwide",
//       color: "#FF7043"
//     },
//     {
//       number: "5.2M",
//       label: "Child Deaths Annually",
//       description: "Children under 5 die each year from preventable causes",
//       color: "#26A69A"
//     }
//   ];

//   const indiaStats = [
//     {
//       number: "270M",
//       label: "Indians Below Poverty Line",
//       description: "22% of India's population lives below the poverty line",
//       icon: Users,
//       color: "#FF5722"
//     },
//     {
//       number: "253M",
//       label: "Adolescent Population",
//       description: "India has the largest adolescent population in the world",
//       icon: TrendingUp,
//       color: "#FFC107"
//     },
//     {
//       number: "17M",
//       label: "Child Laborers",
//       description: "Children in India work due to poverty instead of attending school",
//       icon: AlertTriangle,
//       color: "#FF6B35"
//     },
//     {
//       number: "50%",
//       label: "Children Don't Attend School",
//       description: "Half of children in India don't go to school because of poverty",
//       icon: BookOpen,
//       color: "#00695C"
//     },
//     {
//       number: "70%",
//       label: "Undernourished Children",
//       description: "Children in India are undernourished and anaemic",
//       icon: Utensils,
//       color: "#FF8A65"
//     },
//     {
//       number: "1.4M",
//       label: "Child Deaths Under 5",
//       description: "Children pass away before turning five each year in India",
//       icon: Heart,
//       color: "#26A69A"
//     }
//   ];

//   const whyChildrenReasons = [
//     {
//       icon: Shield,
//       title: "Most Vulnerable Population",
//       description: "Children are the most vulnerable members of society, unable to advocate for themselves or make decisions about their future. They depend entirely on adults for protection, care, and opportunities.",
//       color: "#FF5722",
//       bgColor: "#FFF3E0"
//     },
//     {
//       icon: TrendingUp,
//       title: "Highest Return on Investment",
//       description: "Investing in children yields the highest social and economic returns. Early childhood interventions can return $7-10 for every dollar invested through improved health, education, and productivity.",
//       color: "#00695C",
//       bgColor: "#E0F2F1"
//     },
//     {
//       icon: Users,
//       title: "Breaking Intergenerational Poverty",
//       description: "When we invest in children, we break the cycle of poverty that can trap families for generations. Educated children become productive adults who can lift their entire families out of poverty.",
//       color: "#FFC107",
//       bgColor: "#FFFDE7"
//     },
//     {
//       icon: BookOpen,
//       title: "Foundation for Development",
//       description: "Children represent the foundation of a nation's future development. Their health, education, and well-being directly impact economic growth, social stability, and national progress.",
//       color: "#26A69A",
//       bgColor: "#E0F7FA"
//     },
//     {
//       icon: Heart,
//       title: "Moral Imperative",
//       description: "Every child has the fundamental right to survive, develop, and thrive. As a society, we have a moral obligation to ensure no child is left behind due to circumstances beyond their control.",
//       color: "#FF7043",
//       bgColor: "#FFF8F5"
//     },
//     {
//       icon: Home,
//       title: "Building Stronger Communities",
//       description: "When children are healthy, educated, and protected, entire communities benefit. They become agents of positive change, contributing to social cohesion and community development.",
//       color: "#8E1538",
//       bgColor: "#FCE4EC"
//     }
//   ];

//   const criticalAreas = [
//     {
//       icon: BookOpen,
//       title: "Education Crisis",
//       stats: ["50% don't attend school", "45% illiterate due to poverty", "Child labor prevents education"],
//       description: "Millions of children miss out on education due to poverty, forcing them into child labor instead of classrooms.",
//       color: "#FF5722",
//       bgColor: "#FFF3E0"
//     },
//     {
//       icon: Utensils,
//       title: "Malnutrition Emergency",
//       stats: ["70% undernourished", "30.7% underweight", "4% face death from malnutrition"],
//       description: "India faces a severe child malnutrition crisis that stunts physical and cognitive development.",
//       color: "#00695C",
//       bgColor: "#E0F2F1"
//     },
//     {
//       icon: Heart,
//       title: "Health Challenges",
//       stats: ["1.4M deaths under 5", "Limited healthcare access", "Preventable diseases"],
//       description: "Preventable diseases and limited healthcare access lead to unnecessary child mortality.",
//      color: "#FF5722",
//      bgColor: "#FFF3E0"
//     }
//   ];

//   return (
//     <section className="py-0" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FFF8F5, #FFFFFF)' }}>
//       <div className="max-w-full mx-auto">
//         {/* Header Section with Background Image - Fixed */}
//         <div className="relative mb-20 text-white bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-90 overflow-hidden shadow-2xl">
//           {/* Background Image on top of deep orange */}
//           <img 
//             src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
//             alt="Children studying together - hope for the future" 
//             className="absolute inset-0 w-full h-[100vh] object-cover opacity-30 mix-blend-multiply"
//           />

//           {/* Overlay Text Content */}
//           <div className="relative z-10 flex items-center justify-center min-h-[100vh] px-6">
//             <div className="text-center text-white max-w-5xl mx-auto">
//               {/* Icon */}
//               <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 bg-white/20 backdrop-blur-md shadow-lg">
//                 <Heart className="w-10 h-10 text-white" />
//               </div>

//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//                 Why <span className="text-orange-200">Children</span>?
//               </h1>

//               {/* Paragraph */}
//               <p className="text-xl md:text-2xl font-medium leading-relaxed">
//                 Children are not just our future – they are our present responsibility. In a world where 
//                 <span className="font-bold text-orange-200"> 900 million children</span> live in poverty, 
//                 every action we take today shapes tomorrow's world.
//               </p>
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-t from-white to-transparent"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Global Crisis Section */}
//           <div className="mb-20">
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold mb-4" style={{ color: '#212121' }}>
//                 The Global <span style={{ color: '#00695C' }}>Crisis</span>
//               </h3>
//               <p className="text-lg max-w-3xl mx-auto" style={{ color: '#616161' }}>
//                 Understanding the scale of child poverty and its implications for our world
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {globalStats.map((stat, index) => (
//                 <div key={index} className="rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}>
//                   <div 
//                     className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
//                     style={{ backgroundColor: `${stat.color}15` }}
//                   >
//                     <div 
//                       className="text-3xl font-bold"
//                       style={{ color: stat.color }}
//                     >
//                       {stat.number.slice(0, 1)}
//                     </div>
//                   </div>
//                   <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
//                     {stat.number}
//                   </div>
//                   <div className="text-lg font-semibold mb-4" style={{ color: '#212121' }}>
//                     {stat.label}
//                   </div>
//                   <div className="text-sm leading-relaxed" style={{ color: '#616161' }}>
//                     {stat.description}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* India Focus Section */}
//           <div 
//             className="mb-20 rounded-3xl p-12 text-white shadow-2xl"
//             style={{ background: 'linear-gradient(135deg, #005B50 0%, #219183 100%)'

//  }}
//           >
//             <div className="text-center mb-12">
//               <h3 className="text-4xl font-bold mb-4">
//                 Children in <span style={{ color: '#FFC107' }}>India</span>
//               </h3>
//               <div className="text-xl opacity-90 max-w-3xl mx-auto">
//                 India has the largest adolescent population in the world with 253 million young people, 
//                 but faces significant challenges with 270 million people living below the poverty line
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {indiaStats.map((stat, index) => {
//                 const IconComponent = stat.icon;
//                 return (
//                   <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
//                     <div className="flex items-center mb-4">
//                       <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
//                         <IconComponent className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="text-3xl font-bold" style={{ color: stat.color }}>
//                         {stat.number}
//                       </div>
//                     </div>
//                     <h4 className="text-lg font-semibold text-white mb-3">
//                       {stat.label}
//                     </h4>
//                     <p className="text-white/80 text-sm leading-relaxed">
//                       {stat.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Hero Visual */}
//           <div className="mb-20">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//               <img 
//                 src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
//                 alt="Children in classroom in India" 
//                 className="w-full h-[500px] object-cover"
//               />
//               <div 
//                 className="absolute inset-0 flex items-center"
//                 style={{ background: 'linear-gradient(to right, rgba(0, 105, 92, 0.9), rgba(38, 166, 154, 0.6), transparent)' }}
//               >
//                 <div className="text-white p-12 max-w-2xl">
//                   <h3 className="text-4xl font-bold mb-6">Every Child Has Potential</h3>
//                   <p className="text-xl opacity-90 mb-6">
//                     Despite the challenges, every child possesses unlimited potential. 
//                     With the right support, they can overcome poverty and transform their communities.
//                   </p>
//                   <div className="flex items-center text-lg">
//                     <Heart className="w-6 h-6 mr-2" style={{ color: '#FFC107' }} />
//                     <span>Hope • Education • Opportunity</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Why Children Reasons */}
//           <div className="mb-20">
//             <div className="text-center mb-12">
//               <h3 className="text-4xl font-bold mb-4" style={{ color: '#212121' }}>
//                 Our <span style={{ color: '#FF5722' }}>Philosophy</span>
//               </h3>
//               <p className="text-lg max-w-3xl mx-auto" style={{ color: '#616161' }}>
//                 Understanding why children must be at the center of all development efforts
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {whyChildrenReasons.map((reason, index) => {
//                 const IconComponent = reason.icon;
//                 return (
//                   <div key={index} className="group rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}>
//                     <div 
//                       className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
//                       style={{ backgroundColor: reason.bgColor }}
//                     >
//                       <IconComponent className="w-8 h-8" style={{ color: reason.color }} />
//                     </div>
//                     <h4 className="text-2xl font-bold mb-4" style={{ color: '#212121' }}>
//                       {reason.title}
//                     </h4>
//                     <p className="leading-relaxed text-lg" style={{ color: '#616161' }}>
//                       {reason.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Critical Areas */}
//           <div className="mb-20">
//             <div className="text-center mb-12">
//               <h3 className="text-4xl font-bold mb-4" style={{ color: '#212121' }}>
//                 Critical <span style={{ color: '#FF5722' }}>Areas</span> of Focus
//               </h3>
//               <p className="text-lg max-w-3xl mx-auto" style={{ color: '#616161' }}>
//                 The most pressing challenges facing children today that require immediate attention
//               </p>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {criticalAreas.map((area, index) => {
//                 const IconComponent = area.icon;
//                 return (
//                   <div key={index} className="rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-orange-600 hover:-translate-y-1 " style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}>
//                     <div 
//                       className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//                       style={{ backgroundColor: area.bgColor }}
//                     >
//                       <IconComponent className="w-8 h-8" style={{ color: area.color }} />
//                     </div>
//                     <h4 className="text-2xl font-bold mb-4" style={{ color: '#212121' }}>
//                       {area.title}
//                     </h4>
//                     <div className="mb-6">
//                       {area.stats.map((stat, statIndex) => (
//                         <div key={statIndex} className="flex items-center mb-2">
//                           <div 
//                             className="w-2 h-2 rounded-full mr-3"
//                             style={{ backgroundColor: area.color }}
//                           ></div>
//                           <span className="text-sm font-medium" style={{ color: '#424242' }}>{stat}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <p className="leading-relaxed" style={{ color: '#616161' }}>
//                       {area.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Supporting Images */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
//             <div className="relative rounded-2xl overflow-hidden shadow-lg group">
//               <img 
//                 src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
//                 alt="Child studying with books" 
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div 
//                 className="absolute inset-0 flex items-end"
//                 style={{ background: 'linear-gradient(to top, rgba(255, 87, 34, 0.8), transparent)' }}
//               >
//                 <div className="text-white p-4">
//                   <h4 className="font-semibold">Education Access</h4>
//                   <p className="text-xs opacity-90">Quality education for all</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="relative rounded-2xl overflow-hidden shadow-lg group">
//               <img 
//                 src="https://images.unsplash.com/photo-1609592527867-7620235361d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
//                 alt="Children playing together" 
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div 
//                 className="absolute inset-0 flex items-end"
//                 style={{ background: 'linear-gradient(to top, rgba(0, 105, 92, 0.8), transparent)' }}
//               >
//                 <div className="text-white p-4">
//                   <h4 className="font-semibold">Holistic Development</h4>
//                   <p className="text-xs opacity-90">Physical and mental growth</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="relative rounded-2xl overflow-hidden shadow-lg group">
//               <img 
//                 src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
//                 alt="Healthcare for children" 
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div 
//                 className="absolute inset-0 flex items-end"
//                 style={{ background: 'linear-gradient(to top, rgba(255, 193, 7, 0.8), transparent)' }}
//               >
//                 <div className="text-white p-4">
//                   <h4 className="font-semibold">Healthcare Access</h4>
//                   <p className="text-xs opacity-90">Health and nutrition</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative rounded-2xl overflow-hidden shadow-lg group">
//               <img 
//                 src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
//                 alt="Children reading together" 
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div 
//                 className="absolute inset-0 flex items-end"
//                 style={{ background: 'linear-gradient(to top, rgba(38, 166, 154, 0.8), transparent)' }}
//               >
//                 <div className="text-white p-4">
//                   <h4 className="font-semibold">Community Support</h4>
//                   <p className="text-xs opacity-90">Building stronger futures</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div 
//             className="rounded-3xl mb-2 p-16 text-center text-white shadow-2xl"
//             style={{
//               backgroundImage: `
//                  linear-gradient(135deg, rgba(251, 146, 60, 0.9), rgba(249, 115, 22, 0.9), rgba(234, 88, 12, 0.9)),
//      url('/public/images/logo/istockphoto-1252924066-612x612.webp')
//               `,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat'
//             }}
//           >
//             <div className="max-w-4xl mx-auto">
//               <h3 className="text-4xl md:text-5xl font-bold mb-8">
//                 The Time to Act is <span style={{ color: '#FFC107' }}>Now</span>
//               </h3>
//               <p className="text-xl opacity-90 mb-8 leading-relaxed">
//                 With 900 million children worldwide experiencing multidimensional poverty, 
//                 every moment of delay means another child loses the opportunity for a better future. 
//                 Your support can be the difference between despair and hope.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                   <div className="text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>₹500</div>
//                   <div className="text-lg font-semibold mb-2">Can provide school supplies</div>
//                   <div className="text-sm opacity-80">For one child for a month</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                   <div className="text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>₹1,200</div>
//                   <div className="text-lg font-semibold mb-2">Can provide nutrition</div>
//                   <div className="text-sm opacity-80">For one child for a month</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                   <div className="text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>₹2,500</div>
//                   <div className="text-lg font-semibold mb-2">Can provide healthcare</div>


import React, { useEffect } from 'react';
import { Heart, Users, TrendingUp, Shield, BookOpen, Smile, AlertTriangle, Home, Droplets, Utensils } from 'lucide-react';

const WhyChildren = () => {
  // Mock navigation and user for demo
  const navigate = () => {};
  const user = null;
  
  useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  const globalStats = [
    {
      number: "900M",
      label: "Children in Multidimensional Poverty",
      description: "Children worldwide lack necessities like food, water, shelter, education and healthcare",
      color: "#FF5722"
    },
    {
      number: "333M",
      label: "Children in Extreme Poverty",
      description: "Children surviving on less than $2.15 each day globally",
      color: "#00695C"
    },
    {
      number: "262M",
      label: "Out of School Children",
      description: "Children and youth are out of school worldwide",
      color: "#FF7043"
    },
    {
      number: "5.2M",
      label: "Child Deaths Annually",
      description: "Children under 5 die each year from preventable causes",
      color: "#26A69A"
    }
  ];

  const indiaStats = [
    {
      number: "270M",
      label: "Indians Below Poverty Line",
      description: "22% of India's population lives below the poverty line",
      icon: Users,
      color: "#FF5722"
    },
    {
      number: "253M",
      label: "Adolescent Population",
      description: "India has the largest adolescent population in the world",
      icon: TrendingUp,
      color: "#FFC107"
    },
    {
      number: "17M",
      label: "Child Laborers",
      description: "Children in India work due to poverty instead of attending school",
      icon: AlertTriangle,
      color: "#FF6B35"
    },
    {
      number: "50%",
      label: "Children Don't Attend School",
      description: "Half of children in India don't go to school because of poverty",
      icon: BookOpen,
      color: "#00695C"
    },
    {
      number: "70%",
      label: "Undernourished Children",
      description: "Children in India are undernourished and anaemic",
      icon: Utensils,
      color: "#FF8A65"
    },
    {
      number: "1.4M",
      label: "Child Deaths Under 5",
      description: "Children pass away before turning five each year in India",
      icon: Heart,
      color: "#26A69A"
    }
  ];

  const whyChildrenReasons = [
    {
      icon: Shield,
      title: "Most Vulnerable Population",
      description: "Children are the most vulnerable members of society, unable to advocate for themselves or make decisions about their future. They depend entirely on adults for protection, care, and opportunities.",
      color: "#FF5722",
      bgColor: "#FFF3E0"
    },
    {
      icon: TrendingUp,
      title: "Highest Return on Investment",
      description: "Investing in children yields the highest social and economic returns. Early childhood interventions can return $7-10 for every dollar invested through improved health, education, and productivity.",
      color: "#00695C",
      bgColor: "#E0F2F1"
    },
    {
      icon: Users,
      title: "Breaking Intergenerational Poverty",
      description: "When we invest in children, we break the cycle of poverty that can trap families for generations. Educated children become productive adults who can lift their entire families out of poverty.",
      color: "#FFC107",
      bgColor: "#FFFDE7"
    },
    {
      icon: BookOpen,
      title: "Foundation for Development",
      description: "Children represent the foundation of a nation's future development. Their health, education, and well-being directly impact economic growth, social stability, and national progress.",
      color: "#26A69A",
      bgColor: "#E0F7FA"
    },
    {
      icon: Heart,
      title: "Moral Imperative",
      description: "Every child has the fundamental right to survive, develop, and thrive. As a society, we have a moral obligation to ensure no child is left behind due to circumstances beyond their control.",
      color: "#FF7043",
      bgColor: "#FFF8F5"
    },
    {
      icon: Home,
      title: "Building Stronger Communities",
      description: "When children are healthy, educated, and protected, entire communities benefit. They become agents of positive change, contributing to social cohesion and community development.",
      color: "#8E1538",
      bgColor: "#FCE4EC"
    }
  ];

  const criticalAreas = [
    {
      icon: BookOpen,
      title: "Education Crisis",
      stats: ["50% don't attend school", "45% illiterate due to poverty", "Child labor prevents education"],
      description: "Millions of children miss out on education due to poverty, forcing them into child labor instead of classrooms.",
      color: "#FF5722",
      bgColor: "#FFF3E0"
    },
    {
      icon: Utensils,
      title: "Malnutrition Emergency",
      stats: ["70% undernourished", "30.7% underweight", "4% face death from malnutrition"],
      description: "India faces a severe child malnutrition crisis that stunts physical and cognitive development.",
      color: "#00695C",
      bgColor: "#E0F2F1"
    },
    {
      icon: Heart,
      title: "Health Challenges",
      stats: ["1.4M deaths under 5", "Limited healthcare access", "Preventable diseases"],
      description: "Preventable diseases and limited healthcare access lead to unnecessary child mortality.",
      color: "#FF5722",
      bgColor: "#FFF3E0"
    }
  ];

  return (
    <section className="py-0" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FFF8F5, #FFFFFF)' }}>
      <div className="max-w-full mx-auto">
        {/* Header Section with Background Image - Enhanced Responsive */}
        <div className="relative mb-12 sm:mb-16 md:mb-20 text-white bg-gradient-to-br from-teal-600 via-orange-600 to-teal-700 opacity-90 overflow-hidden shadow-2xl">
          {/* Background Image on top of deep orange */}
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Children studying together - hope for the future" 
            className="absolute inset-0 w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] object-cover opacity-30 mix-blend-multiply"
          />

          {/* Overlay Text Content */}
          <div className="relative z-10 flex items-center justify-center h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] px-4 sm:px-6">
            <div className="text-center text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-4 sm:mb-6 md:mb-8 bg-white/20 backdrop-blur-md shadow-lg">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Why <span className="text-orange-200">Children</span>?
              </h1>

              {/* Paragraph */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed px-2 sm:px-4">
                Children are not just our future – they are our present responsibility. In a world where 
                <span className="font-bold text-orange-200"> 900 million children</span> live in poverty, 
                every action we take today shapes tomorrow's world.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-20 h-10 sm:h-15 md:h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Global Crisis Section - Enhanced Responsive */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#212121' }}>
                The Global <span style={{ color: '#00695C' }}>Crisis</span>
              </h3>
              <p className="text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0" style={{ color: '#616161' }}>
                Understanding the scale of child poverty and its implications for our world
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {globalStats.map((stat, index) => (
                <div key={index} className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}>
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <div 
                      className="text-xl sm:text-2xl md:text-3xl font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.number.slice(0, 1)}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: '#212121' }}>
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed" style={{ color: '#616161' }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* India Focus Section - Enhanced Responsive */}
          <div 
            className="mb-12 sm:mb-16 md:mb-20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #005B50 0%, #219183 100%)' }}
          >
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Children in <span style={{ color: '#FFC107' }}>India</span>
              </h3>
              <div className="text-base sm:text-lg md:text-xl opacity-90 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
                India has the largest adolescent population in the world with 253 million young people, 
                but faces significant challenges with 270 million people living below the poverty line
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {indiaStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold" style={{ color: stat.color }}>
                        {stat.number}
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                      {stat.label}
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Visual - Enhanced Responsive */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Children in classroom in India" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div 
                className="absolute inset-0 flex items-center"
                style={{ background: 'linear-gradient(to right, rgba(0, 105, 92, 0.9), rgba(38, 166, 154, 0.6), transparent)' }}
              >
                <div className="text-white p-6 sm:p-8 md:p-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6">Every Child Has Potential</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-4 sm:mb-5 md:mb-6">
                    Despite the challenges, every child possesses unlimited potential. 
                    With the right support, they can overcome poverty and transform their communities.
                  </p>
                  <div className="flex items-center text-sm sm:text-base md:text-lg">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2" style={{ color: '#FFC107' }} />
                    <span>Hope • Education • Opportunity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Children Reasons - Enhanced Responsive */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#212121' }}>
                Our <span style={{ color: '#FF5722' }}>Philosophy</span>
              </h3>
              <p className="text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0" style={{ color: '#616161' }}>
                Understanding why children must be at the center of all development efforts
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {whyChildrenReasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="group rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}>
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: reason.bgColor }}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: reason.color }} />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#212121' }}>
                      {reason.title}
                    </h4>
                    <p className="leading-relaxed text-sm sm:text-base md:text-lg" style={{ color: '#616161' }}>
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Critical Areas - Enhanced Responsive */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#212121' }}>
                Critical <span style={{ color: '#FF5722' }}>Areas</span> of Focus
              </h3>
              <p className="text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0" style={{ color: '#616161' }}>
                The most pressing challenges facing children today that require immediate attention
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {criticalAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-orange-600 hover:-translate-y-1" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}>
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6"
                      style={{ backgroundColor: area.bgColor }}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: area.color }} />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#212121' }}>
                      {area.title}
                    </h4>
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      {area.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center mb-1.5 sm:mb-2">
                          <div 
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3"
                            style={{ backgroundColor: area.color }}
                          ></div>
                          <span className="text-xs sm:text-sm font-medium" style={{ color: '#424242' }}>{stat}</span>
                        </div>
                      ))}
                    </div>
                    <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#616161' }}>
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Supporting Images - Enhanced Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Child studying with books" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div 
                className="absolute inset-0 flex items-end"
                style={{ background: 'linear-gradient(to top, rgba(255, 87, 34, 0.8), transparent)' }}
              >
                <div className="text-white p-3 sm:p-4">
                  <h4 className="font-semibold text-sm sm:text-base">Education Access</h4>
                  <p className="text-xs opacity-90">Quality education for all</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1609592527867-7620235361d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Children playing together" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div 
                className="absolute inset-0 flex items-end"
                style={{ background: 'linear-gradient(to top, rgba(0, 105, 92, 0.8), transparent)' }}
              >
                <div className="text-white p-3 sm:p-4">
                  <h4 className="font-semibold text-sm sm:text-base">Holistic Development</h4>
                  <p className="text-xs opacity-90">Physical and mental growth</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Healthcare for children" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div 
                className="absolute inset-0 flex items-end"
                style={{ background: 'linear-gradient(to top, rgba(255, 193, 7, 0.8), transparent)' }}
              >
                <div className="text-white p-3 sm:p-4">
                  <h4 className="font-semibold text-sm sm:text-base">Healthcare Access</h4>
                  <p className="text-xs opacity-90">Health and nutrition</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Children reading together" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div 
                className="absolute inset-0 flex items-end"
                style={{ background: 'linear-gradient(to top, rgba(38, 166, 154, 0.8), transparent)' }}
              >
                <div className="text-white p-3 sm:p-4">
                  <h4 className="font-semibold text-sm sm:text-base">Community Support</h4>
                  <p className="text-xs opacity-90">Building stronger futures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action - Enhanced Responsive */}
          <div 
            className="rounded-2xl sm:rounded-3xl mb-2 p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl"
            style={{
              backgroundImage: `
                 linear-gradient(135deg, rgba(251, 146, 60, 0.9), rgba(249, 115, 22, 0.9), rgba(234, 88, 12, 0.9)),
     url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                The Time to Act is <span style={{ color: '#FFC107' }}>Now</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                With 900 million children worldwide experiencing multidimensional poverty, 
                every moment of delay means another child loses the opportunity for a better future. 
                Your support can be the difference between despair and hope.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FFFFFF' }}>₹500</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Can provide school supplies</div>
                  <div className="text-xs sm:text-sm opacity-80">For one child for a month</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FFFFFF' }}>₹1,200</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Can provide nutrition</div>
                  <div className="text-xs sm:text-sm opacity-80">For one child for a month</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FFFFFF' }}>₹2,500</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Can provide healthcare</div>
                  <div className="text-sm opacity-80">For one child for a month</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: '#FFFFFF', color: '#FF5722' }}
                >
                  Support a Child Today
                </button>
                <button 
                  className="px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-white text-white hover:shadow-lg"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#FFFFFF';
                    e.target.style.color = '#FF5722';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#FFFFFF';
                  }}
                >
                  Learn More About Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChildren;