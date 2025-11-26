import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import OnlineBookingPage from './pages/OnlineBookingPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/online-booking" element={<OnlineBookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
