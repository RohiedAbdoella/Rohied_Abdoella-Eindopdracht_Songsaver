import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import SongOverview from './SongOverview';
import AboutUs from './AboutUs';


function Container() {
  return (
    <div className="App">
      <Header />

      <nav className="navigation">
        <Link to="/" className="nav-link"> Home </Link>
        <Link to="/about" className="nav-link"> About Us </Link>
      </nav>

      <Routes>
        <Route path="/" element={<SongOverview />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>

    </div>
  )
}

export default Container;


