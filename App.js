import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import home from './pages/home.js';
import trending from './pages/trending';
import aboutus from './pages/aboutus.js';
import signin from './pages/signin.js';
import explore from './pages/explore.js';
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/trending" element={<trending />} />
        <Route path="/aboutus" element={<aboutus />} />
        <Route path="/signin" element={<signin />} />
        <Route path="/explore" element={<explore />} />
      </Routes>
    </Router>
  );
}

export default App;




