import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import OnlineBookingPage from './pages/OnlineBookingPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/online-booking" element={<OnlineBookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;