import React from 'react';
import {Routes,Route} from "react-router-dom";
import Homepage from "./Homepage.jsx"
import Login from "./Login.jsx";
import Signup from './Signup.jsx';
const AllRoutes = () => {
  return (
    <Routes >
        <Route element={<Homepage/>} path='/' />
        <Route element= {<Signup/>} path='/signup'/>
        <Route element= {<Login/>} path='/login'/>
    </Routes>
  )
}

export default AllRoutes