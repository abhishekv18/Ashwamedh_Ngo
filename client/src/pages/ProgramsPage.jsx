import React, { useEffect } from 'react'
import ProgramsOverviewA from '../components/whatWeDo/Programs/ProgramsOverviewA'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProgramsPage = () => {


const navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);
    useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  return (
    <div>
    
    <ProgramsOverviewA/>

    </div>
  )
}

export default ProgramsPage
