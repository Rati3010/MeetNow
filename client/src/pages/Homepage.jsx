import React from 'react';
import Header from './HomePage/header';
import Description from './HomePage/Description';
import Confident from './HomePage/Confident';
import Footer from "../components/Footer"
const Homepage = () => {
  return (
    <div>
      <Header/>
      <Description/>
      <Confident/>
      <Footer/>
    </div>
  )
}

export default Homepage