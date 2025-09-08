import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowAIWorks from '../components/HowAIWorks';
import AITradingFeatures from '../components/AITradingFeatures';
import AIBotRecommender from '../components/AIBotRecommender';
import ProvenTrackRecord from '../components/ProvenTrackRecord';
import PaymentMethods from '../components/PaymentMethods';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { FAQWidget } from '../components/FAQWidget';
import { BlogPreview } from '../components/BlogPreview';
import { CallToAction } from '../components/CallToAction';
import FormPopup from '../components/FormPopup';
import TradingArsenal from '../components/TradingArsenal';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
        <HeroSection onOpenForm={handleOpenForm}/>
        <HowAIWorks />
        <AITradingFeatures />
        <AIBotRecommender onOpenForm={handleOpenForm} />
        <FormPopup isOpen={isFormOpen} onClose={handleCloseForm} />
                <TradingArsenal onOpenForm={handleOpenForm} />
        <ProvenTrackRecord />
        <PaymentMethods />
        <CustomerTestimonials />
        <FAQWidget />
        <BlogPreview />
        <CallToAction onOpenForm={handleOpenForm} />
       
      </div>
       <Footer />
    </>
  );
};

export default HomePage;