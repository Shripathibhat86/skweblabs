import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurWorks from './pages/OurWorks';
import WhoWeAre from './pages/WhoWeAre';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
