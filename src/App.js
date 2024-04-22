import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Expenditure from './components/Expenditure';
import AboutUs from './components/AboutUs';
import RangeInput from './components/RangeInput'; // Import the RangeInput component

function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/expenditure">Expenditure</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/range">Range Input</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar component */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenditure" element={<Expenditure />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/range" element={<RangeInput />} /> {/* Route for RangeInput */}
        </Routes>

        {/* Include the search bar here */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
