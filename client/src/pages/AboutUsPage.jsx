import React, { useEffect } from 'react'

import About from '../components/whoWheAre/AboutUs/About'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AboutUsPage = () => {
  const navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);
    useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);
  return (
    <div>
     <About/>
     
    </div>
  )
}

export default AboutUsPage
