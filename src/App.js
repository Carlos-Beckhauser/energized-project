import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";

import "./utils/base.css";
import "./utils/variables.css";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import prods from "./data/prods";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products prods={prods} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
