import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PerformancePage from './pages/PerformancePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/About" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
           <Route path="/performance" element={<PerformancePage />} />
      </Routes>
    </Router>
  );
}

export default App;