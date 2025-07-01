// import { useState } from 'react'
// import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
// import Layout from './components/common/Layout/Layout'

// import HomePage from './pages/HomePage'
// import WhoWeArePage from './pages/WhoWeArePage'


// function App() {


//   return (
//     <Router>
//       <Layout>
//         <Routes>
//   <Route path="/" element={<HomePage/>}/>
//  <Route path="/who-we-are" element={<WhoWeArePage/>}/>
//         </Routes>
      
//       </Layout>
//     </Router>
//   )
// }

// export default App


// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';

// Import all your page components
import HomePage from './pages/HomePage';



// Import individual section components for Who We Are



import WhyChildern from './components/whoWheAre/WhyChildern/WhyChildren';
import AboutUsPage from './pages/AboutUsPage';
import ScrollToTop from './ScrollToTop';
import ApproachPage from './pages/ApproachPage';
import ProgramsPage from './pages/ProgramsPage';
import Projects from './components/whatWeDo/Projects/Projects';
import ActivitiesPage from './components/whatWeDo/Activites/ActivitesPage';
import ImpactStories from './components/whatWeDo/ImpactStories/ImpactStories';
import DonatePage from './components/getinvolved/DonationPage';
import VolunteerPage from './components/getinvolved/VolunteerPage';
import ContactPage from './components/getinvolved/ContactPage';
import AdminLoginPage from './admin/AdminLoginPage';
import ProtectedRoute from './ProtectedRoute';
import AdminDashboard from './admin/AdminDashboard';
import GalleryPage from './resources/gallery/Gallery';


function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route>
            
          </Route>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          
          {/* Who We Are Routes */}
          <Route path="/who-we-are/about-us" element={<AboutUsPage/> } />
          <Route path="/who-we-are/why-children" element={<WhyChildern/>} />
             <Route path="/who-we-are/our-approach" element={<ApproachPage />} /> 
          {/* <Route path="/who-we-are/our-impact" element={<OurImpact />} />
          <Route path="/who-we-are/our-approach" element={<OurApproach />} /> */}
          <Route path='/what-we-do/programs' element={<ProgramsPage/>}/>
           <Route path='/what-we-do/projects' element={<Projects/>}/>
            <Route path='/what-we-do/activities' element={<ActivitiesPage/>}/>
          <Route path='/what-we-do/impact-stories' element={<ImpactStories/>}/>
             <Route path="/get-involved/donate" element={<DonatePage/>} />
             <Route path="/get-involved/volunteer" element={<VolunteerPage/>} />
               <Route path="/get-involved/contact" element={<ContactPage/>} />
                <Route path="/admin-login" element={<AdminLoginPage/>} />
                 <Route path="/admin-dashboard" element={
                  <ProtectedRoute>
                    <AdminDashboard/>
                  </ProtectedRoute>
                 } />
                 <Route path="/resources/gallery" element={<GalleryPage/>} />
{/*          
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/what-we-do/programs" element={<Programs />} />
          <Route path="/what-we-do/projects" element={<Projects />} />
          <Route path="/what-we-do/activities" element={<Activities />} />
          <Route path="/what-we-do/impact-stories" element={<ImpactStories />} />
          
        
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/get-involved/donate" element={<DonatePage />} />
          <Route path="/get-involved/volunteer" element={<GetInvolvedPage />} />
          <Route path="/get-involved/partnership" element={<GetInvolvedPage />} />
          <Route path="/get-involved/events" element={<GetInvolvedPage />} />
           */}
         
          {/* <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/reports" element={<ResourcesPage />} />
          <Route path="/resources/gallery" element={<ResourcesPage />} />
          <Route path="/resources/news" element={<ResourcesPage />} />
          <Route path="/resources/publications" element={<ResourcesPage />} />
          
         
          <Route path="/donate" element={<DonatePage />} />
          
         
          <Route path="/admin" element={<AdminPage />} />
          
      
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;