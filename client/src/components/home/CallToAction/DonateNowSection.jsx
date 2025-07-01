

// import React from 'react';
// import { Heart, Users, ArrowRight, HandHeart, Gift } from 'lucide-react';

// const CallToAction = () => {
//   return (
//     <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #FFF3E0 0%, #FFF8F5 100%)' }}>
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="h-full w-full bg-repeat" style={{
//           backgroundImage: `url("/public/images/logo/gettyimages-535555239-612x612.jpg")`
//         }}></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div 
//             className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 shadow-lg"
//             style={{ background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)' }}
//           >
//             <HandHeart className="w-10 h-10 text-white" />
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#212121' }}>
//             Be the Change You Want to See
//           </h2>
//           <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#616161' }}>
//             Every child deserves a chance to dream, learn, and thrive. Your support can transform lives 
//             and build a brighter future for India's children.
//           </p>
//         </div>

//         {/* CTA Cards */}
//         <div className="grid lg:grid-cols-2 gap-10 mb-20">
//           {/* Donate Card */}
//           <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
//             <div 
//               className="absolute top-0 left-0 w-full h-2"
//               style={{ background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)' }}
//             ></div>
            
//             <div className="p-10">
//               <div className="flex items-center mb-8">
//                 <div 
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
//                   style={{ backgroundColor: '#FFF3E0' }}
//                 >
//                   <Heart className="w-8 h-8" style={{ color: '#FF5722' }} />
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-bold mb-2" style={{ color: '#212121' }}>Make a Donation</h3>
//                   <p className="font-semibold text-lg" style={{ color: '#FF5722' }}>Every rupee counts</p>
//                 </div>
//               </div>

//               <p className="text-lg mb-8 leading-relaxed" style={{ color: '#616161' }}>
//                 Your donation provides education, healthcare, and hope to children in need. 
//                 Join thousands of supporters making a real difference.
//               </p>

//               {/* Impact Stats */}
//               <div 
//                 className="grid grid-cols-2 gap-6 mb-10 p-6 rounded-2xl border-2"
//                 style={{ backgroundColor: '#FFF8F5', borderColor: '#FFE0B2' }}
//               >
//                 <div className="text-center">
//                   <div className="text-3xl font-bold mb-2" style={{ color: '#FF5722' }}>₹500</div>
//                   <div className="text-sm font-medium" style={{ color: '#757575' }}>Feeds a child for a month</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold mb-2" style={{ color: '#FF5722' }}>₹2000</div>
//                   <div className="text-sm font-medium" style={{ color: '#757575' }}>School supplies for a year</div>
//                 </div>
//               </div>

//               <button 
//                 className="w-full font-bold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center group-hover:shadow-xl text-white text-lg hover:scale-105 transform"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)',
//                   boxShadow: '0 8px 25px rgba(255, 87, 34, 0.3)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #E64A19 0%, #BF360C 100%)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)';
//                 }}
//               >
//                 <Gift className="w-6 h-6 mr-3" />
//                 Donate Now
//                 <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
//               </button>
//             </div>
//           </div>

//           {/* Volunteer Card */}
//           <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
//             <div 
//               className="absolute top-0 left-0 w-full h-2"
//               style={{ background: 'linear-gradient(135deg, #00695C 0%, #26A69A 100%)' }}
//             ></div>
            
//             <div className="p-10">
//               <div className="flex items-center mb-8">
//                 <div 
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
//                   style={{ backgroundColor: '#E0F2F1' }}
//                 >
//                   <Users className="w-8 h-8" style={{ color: '#00695C' }} />
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-bold mb-2" style={{ color: '#212121' }}>Join as Volunteer</h3>
//                   <p className="font-semibold text-lg" style={{ color: '#00695C' }}>Your time, their future</p>
//                 </div>
//               </div>

//               <p className="text-lg mb-8 leading-relaxed" style={{ color: '#616161' }}>
//                 Share your skills, time, and passion to directly impact children's lives. 
//                 Be part of a community that believes in creating lasting change.
//               </p>

//               {/* Volunteer Opportunities */}
//               <div className="space-y-4 mb-10">
//                 <div 
//                   className="flex items-center p-4 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md"
//                   style={{ backgroundColor: '#E0F2F1', borderLeftColor: '#00695C' }}
//                 >
//                   <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: '#00695C' }}></div>
//                   <span className="font-medium" style={{ color: '#424242' }}>Teaching & Mentoring</span>
//                 </div>
//                 <div 
//                   className="flex items-center p-4 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md"
//                   style={{ backgroundColor: '#E0F2F1', borderLeftColor: '#00695C' }}
//                 >
//                   <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: '#00695C' }}></div>
//                   <span className="font-medium" style={{ color: '#424242' }}>Event Organization</span>
//                 </div>
//                 <div 
//                   className="flex items-center p-4 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md"
//                   style={{ backgroundColor: '#E0F2F1', borderLeftColor: '#00695C' }}
//                 >
//                   <div className="w-3 h-3 rounded-full mr-4" style={{ backgroundColor: '#00695C' }}></div>
//                   <span className="font-medium" style={{ color: '#424242' }}>Skill Development Programs</span>
//                 </div>
//               </div>

//               <button 
//                 className="w-full font-bold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center group-hover:shadow-xl text-white text-lg hover:scale-105 transform"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #00695C 0%, #004D40 100%)',
//                   boxShadow: '0 8px 25px rgba(0, 105, 92, 0.3)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #004D40 0%, #00251A 100%)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #00695C 0%, #004D40 100%)';
//                 }}
//               >
//                 <Users className="w-6 h-6 mr-3" />
//                 Join as Volunteer
//                 <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Impact Message */}
//         <div 
//           className="text-center bg-white rounded-3xl shadow-xl p-12 border-l-8"
//           style={{ borderLeftColor: '#FF5722' }}
//         >
//           <div className="flex justify-center items-center flex-wrap gap-12 mb-10">
//             <div className="text-center">
//               <div className="text-5xl font-bold mb-3" style={{ color: '#FF5722' }}>5000+</div>
//               <div className="font-semibold text-lg" style={{ color: '#757575' }}>Children Helped</div>
//             </div>
//             <div className="w-px h-16 bg-gray-300 hidden md:block"></div>
//             <div className="text-center">
//               <div className="text-5xl font-bold mb-3" style={{ color: '#00695C' }}>200+</div>
//               <div className="font-semibold text-lg" style={{ color: '#757575' }}>Active Volunteers</div>
//             </div>
//             <div className="w-px h-16 bg-gray-300 hidden md:block"></div>
//             <div className="text-center">
//               <div className="text-5xl font-bold mb-3" style={{ color: '#FFC107' }}>15+</div>
//               <div className="font-semibold text-lg" style={{ color: '#757575' }}>Years of Impact</div>
//             </div>
//           </div>
          
//           <div 
//             className="max-w-4xl mx-auto p-8 rounded-2xl"
//             style={{ backgroundColor: '#FFF8F5' }}
//           >
//             <blockquote className="text-2xl font-medium italic leading-relaxed mb-4" style={{ color: '#424242' }}>
//               "The best way to find yourself is to lose yourself in the service of others."
//             </blockquote>
//             <cite className="text-lg font-semibold not-italic" style={{ color: '#FF5722' }}>
//               - Mahatma Gandhi
//             </cite>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;




import React from 'react';
import { Heart, Users, ArrowRight, HandHeart, Gift } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #FFF3E0 0%, #FFF8F5 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-repeat" style={{
          backgroundImage: `url("/public/images/logo/gettyimages-535555239-612x612.jpg")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full mb-6 sm:mb-8 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)' }}
          >
            <HandHeart className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 px-2" style={{ color: '#212121' }}>
            Be the Change You Want to See
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4" style={{ color: '#616161' }}>
            Every child deserves a chance to dream, learn, and thrive. Your support can transform lives 
            and build a brighter future for India's children.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {/* Donate Card */}
          <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
            <div 
              className="absolute top-0 left-0 w-full h-1.5 sm:h-2"
              style={{ background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 100%)' }}
            ></div>
            
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: '#FFF3E0' }}
                >
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" style={{ color: '#FF5722' }} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#212121' }}>Make a Donation</h3>
                  <p className="font-semibold text-base sm:text-lg" style={{ color: '#FF5722' }}>Every rupee counts</p>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed" style={{ color: '#616161' }}>
                Your donation provides education, healthcare, and hope to children in need. 
                Join thousands of supporters making a real difference.
              </p>

              {/* Impact Stats */}
              <div 
                className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2"
                style={{ backgroundColor: '#FFF8F5', borderColor: '#FFE0B2' }}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF5722' }}>₹500</div>
                  <div className="text-xs sm:text-sm font-medium" style={{ color: '#757575' }}>Feeds a child for a month</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF5722' }}>₹2000</div>
                  <div className="text-xs sm:text-sm font-medium" style={{ color: '#757575' }}>School supplies for a year</div>
                </div>
              </div>

              <button 
                className="w-full font-bold py-3 sm:py-4 lg:py-4 px-5 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center group-hover:shadow-xl text-white text-sm sm:text-base lg:text-lg hover:scale-105 transform"
                style={{ 
                  background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)',
                  boxShadow: '0 8px 25px rgba(255, 87, 34, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #E64A19 0%, #BF360C 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)';
                }}
              >
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                Donate Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Volunteer Card */}
          <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
            <div 
              className="absolute top-0 left-0 w-full h-1.5 sm:h-2"
              style={{ background: 'linear-gradient(135deg, #00695C 0%, #26A69A 100%)' }}
            ></div>
            
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: '#E0F2F1' }}
                >
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" style={{ color: '#00695C' }} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#212121' }}>Join as Volunteer</h3>
                  <p className="font-semibold text-base sm:text-lg" style={{ color: '#00695C' }}>Your time, their future</p>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed" style={{ color: '#616161' }}>
                Share your skills, time, and passion to directly impact children's lives. 
                Be part of a community that believes in creating lasting change.
              </p>

              {/* Volunteer Opportunities */}
              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                <div 
                  className="flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: '#E0F2F1', borderLeftColor: '#00695C' }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-3 sm:mr-4" style={{ backgroundColor: '#00695C' }}></div>
                  <span className="font-medium text-sm sm:text-base" style={{ color: '#424242' }}>Teaching & Mentoring</span>
                </div>
                <div 
                  className="flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: '#E0F2F1', borderLeftColor: '#00695C' }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-3 sm:mr-4" style={{ backgroundColor: '#00695C' }}></div>
                  <span className="font-medium text-sm sm:text-base" style={{ color: '#424242' }}>Event Organization</span>
                </div>
                <div 
                  className="flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: '#E0F2F1', borderLeftColor: '#00695C' }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-3 sm:mr-4" style={{ backgroundColor: '#00695C' }}></div>
                  <span className="font-medium text-sm sm:text-base" style={{ color: '#424242' }}>Skill Development Programs</span>
                </div>
              </div>

              <button 
                className="w-full font-bold py-3 sm:py-4 lg:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center group-hover:shadow-xl text-white text-sm sm:text-base lg:text-lg hover:scale-105 transform"
                style={{ 
                  background: 'linear-gradient(135deg, #00695C 0%, #004D40 100%)',
                  boxShadow: '0 8px 25px rgba(0, 105, 92, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #004D40 0%, #00251A 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #00695C 0%, #004D40 100%)';
                }}
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Join as Volunteer</span>
                <span className="sm:hidden">Join Volunteer</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Impact Message */}
        <div 
          className="text-center bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border-l-4 sm:border-l-8"
          style={{ borderLeftColor: '#FF5722' }}
        >
          <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3" style={{ color: '#FF5722' }}>5000+</div>
              <div className="font-semibold text-sm sm:text-base lg:text-lg" style={{ color: '#757575' }}>Children Helped</div>
            </div>
            <div className="w-px h-12 sm:h-14 lg:h-16 bg-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3" style={{ color: '#00695C' }}>200+</div>
              <div className="font-semibold text-sm sm:text-base lg:text-lg" style={{ color: '#757575' }}>Active Volunteers</div>
            </div>
            <div className="w-px h-12 sm:h-14 lg:h-16 bg-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3" style={{ color: '#FFC107' }}>15+</div>
              <div className="font-semibold text-sm sm:text-base lg:text-lg" style={{ color: '#757575' }}>Years of Impact</div>
            </div>
          </div>
          
          <div 
            className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl"
            style={{ backgroundColor: '#FFF8F5' }}
          >
            <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium italic leading-relaxed mb-3 sm:mb-4 px-2" style={{ color: '#424242' }}>
              "The best way to find yourself is to lose yourself in the service of others."
            </blockquote>
            <cite className="text-sm sm:text-base lg:text-lg font-semibold not-italic" style={{ color: '#FF5722' }}>
              - Mahatma Gandhi
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;