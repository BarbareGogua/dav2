

import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Maggie Brightstone</div>
      <div className="nav-links">
        <a href="#">Services and Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Log In</a>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="hero">
      <h1>Virtual Assistant at Your Service</h1>
      <p>I'm a title. Click here to edit me.</p>
      <button>See Services</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
