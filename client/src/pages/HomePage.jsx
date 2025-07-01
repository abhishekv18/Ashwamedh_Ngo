// import React from 'react'
// import HeroSection from '../components/home/HeroSection/HeroSection'
// import AboutSection from '../components/home/AboutSection/AboutSection'
// import MissionVision from '../components/home/AboutSection/MissionVision'
// import ProgramsOverview from '../components/home/ProgramSection/ProgramsOverview'
// import DonateNowSection from '../components/home/CallToAction/DonateNowSection'

// const HomePage = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <AboutSection/>
//       <MissionVision/>
//       <ProgramsOverview/>
//       <DonateNowSection/>
//     </div> 
//   )
// }

// export default HomePage
import React, { useEffect } from 'react'
import HeroSection from '../components/home/HeroSection/HeroSection'
import AboutSection from '../components/home/AboutSection/AboutSection'
import MissionVision from '../components/home/AboutSection/MissionVision'
import ProgramsOverview from '../components/home/ProgramSection/ProgramsOverview'
import DonateNowSection from '../components/home/CallToAction/DonateNowSection'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);
    useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-white">
      {/* Clean, professional NGO layout */}
      <div className="relative">
        
        {/* Hero Section */}
        <div className="relative">
          <HeroSection />
        </div>
        
        {/* About Section with subtle separator */}
        <div className="relative">
          {/* <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div> */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-20"></div>
          <AboutSection />
          {/* Simple mission icon */}
         
        </div>
        
        {/* Mission & Vision with clean transition */}
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-50"></div>
          <MissionVision />
          {/* Heart icon for compassion */}
          <div className="absolute top-8 left-8 text-2xl opacity-25" style={{color: '#00695C'}}>❤️</div>
        </div>
        
        {/* Programs Section */}
        <div className="relative">
          {/* <div className="h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div> */}
          <ProgramsOverview />
          {/* Hands icon for helping */}
          <div className="absolute top-8 right-8 text-2xl opacity-30" style={{color: '#FF5722'}}>🤝</div>
        </div>
        
        {/* Donate Section with subtle border */}
        <div className="relative">
          <div className="h-2 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 opacity-60"></div>
          <DonateNowSection />
          {/* Hope icon */}
          <div className="absolute top-12 left-8 text-2xl opacity-25 text-white">🌟</div>
        </div>
        
        {/* Clean footer separator */}
        <div className="h-1 bg-gradient-to-r from-teal-600 via-orange-500 to-teal-600 opacity-80"></div>
        
      </div>
    </div>
  )
}

export default HomePage