 import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Activities from "./Components/Activities";
import Booking from "./Components/Booking";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div >
      <Header/>
      <Navbar/>
      <HeroSection/>
      <Activities/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
