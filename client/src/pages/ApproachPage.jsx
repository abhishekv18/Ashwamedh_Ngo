import React, { useEffect } from 'react'
import ApproachMethodology from '../components/whoWheAre/OurApproach/ApproachMethodology'

import WorkingAreas from '../components/whoWheAre/OurApproach/WorkingAreas'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ApproachPage = () => {

const navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);
    useEffect(() => {
    if (user) {
      navigate("/admin-dashboard");
    }
  }, [user]);

  return (
    <div>
      <ApproachMethodology/>
     <WorkingAreas/>
    </div>
  )
}

export default ApproachPage
