import React from "react";

import "./App.css";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";

import "./utils/base.css";
import "./utils/variables.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
