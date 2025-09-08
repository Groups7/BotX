import React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import TradingArsenal from '../components/TradingArsenal';
import ProductDetailView from '../components/ProductDetailView';
import FormPopup from '../components/FormPopup';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get('product');

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section for Products */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-2 mb-6 hover:border-green-400/40 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Our Products</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Complete <span className="text-green-400">AI Trading Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Discover our comprehensive suite of AI-powered trading tools designed to maximize your profits 
                across forex, crypto, and commodities markets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">4</div>
                  <div className="text-gray-400">Product Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        {selectedProduct ? (
          <ProductDetailView productId={selectedProduct} onOpenForm={handleOpenForm} />
        ) : (
          <TradingArsenal onOpenForm={handleOpenForm} selectedProduct={selectedProduct} />
        )}
        
        {/* Form Popup */}
        <FormPopup isOpen={isFormOpen} onClose={handleCloseForm} />
      </div>
      
      <Footer />
    </>
  );
};

export default ProductsPage;