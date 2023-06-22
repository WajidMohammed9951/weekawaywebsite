 import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Activities from "./Components/Activities";
import Booking from "./Components/Booking";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div >
      <Header/>
      <Navbar/>
      <HeroSection/>
      <Activities/>
      <Booking/>
      <Gallery/>
    </div>
  );
}

export default App;
