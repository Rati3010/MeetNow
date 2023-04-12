import React from 'react';
import {Routes,Route} from "react-router-dom";
import Homepage from "./Homepage.jsx"
const AllRoutes = () => {
  return (
    <Routes >
        <Route element={<Homepage/>} path='/' />
    </Routes>
  )
}

export default AllRoutes