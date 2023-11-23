import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from '../../Routes/Landing';

const LandingRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing />} />
    </Routes>
  )
}

export default LandingRoutes;