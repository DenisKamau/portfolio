import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MidSection from "./components/MidSection/MidSection";
import TopButton from "./components/TopButton/TopButton";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <MidSection />
      <Footer />
      <TopButton />
    </div>
  );
};

export default App;
