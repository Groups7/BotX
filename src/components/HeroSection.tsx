import React, { useState, useEffect } from 'react';
import { TrendingUp, Bot, Zap, MessageCircle, Send } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSectionProps {
  onOpenForm?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hi, I want to learn more about BotX AI Trading solutions', '_blank');
  };

  const handleGetStarted = () => {
    if (onOpenForm) {
      onOpenForm();
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-8xl pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">AI Trading Revolution</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Powerful</span>
                <br />
                <span className="text-green-400">AI Auto Trading</span>
                <br />
                <span className="text-white">for MT4/MT5</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg">
                AI Trading that Performs. Every Market. Every Time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 text-lg"
              >
                Get Started
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Manager on WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">99.8%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">10K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Chart */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-green-500/20 overflow-hidden">
              {/* 3D Trading Animation Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* 3D Cube Animation */}
                <div className="relative w-64 h-64 transform-gpu perspective-1000">
                  <div className="absolute inset-0 animate-spin-slow transform-style-preserve-3d">
                    {/* Cube Faces */}
                    <div className="absolute w-full h-full bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-400/30 transform translate-z-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-green-400 font-bold text-xl mb-2">XAUUSD</div>
                        <div className="text-white text-2xl">$2,047.83</div>
                        <div className="text-green-400 text-sm">+1.24%</div>
                      </div>
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 transform rotate-y-90 translate-z-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-blue-400 font-bold text-xl mb-2">EURUSD</div>
                        <div className="text-white text-2xl">1.0892</div>
                        <div className="text-blue-400 text-sm">+0.31%</div>
                      </div>
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 transform rotate-y-180 translate-z-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-purple-400 font-bold text-xl mb-2">BTCUSD</div>
                        <div className="text-white text-2xl">$43,286</div>
                        <div className="text-purple-400 text-sm">+2.97%</div>
                      </div>
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 transform rotate-y-270 translate-z-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-orange-400 font-bold text-xl mb-2">GBPUSD</div>
                        <div className="text-white text-2xl">1.2734</div>
                        <div className="text-red-400 text-sm">-0.18%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trading Elements */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="bg-green-500/10 border border-green-400/30 rounded-lg px-3 py-2 animate-float">
                  <div className="text-green-400 text-xs font-bold">AI ACTIVE</div>
                  <div className="text-white text-sm">Trading Live</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg px-3 py-2 animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-blue-400 text-xs font-bold">PROFIT</div>
                  <div className="text-white text-sm">+$2,340</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 space-y-2">
                <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-3 py-2 animate-float" style={{animationDelay: '2s'}}>
                  <div className="text-purple-400 text-xs font-bold">WIN RATE</div>
                  <div className="text-white text-sm">92.3%</div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 space-y-2">
                <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-3 py-2 animate-float" style={{animationDelay: '3s'}}>
                  <div className="text-cyan-400 text-xs font-bold">TRADES</div>
                  <div className="text-white text-sm">847</div>
                </div>
              </div>

              {/* Animated Chart Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
                
                {/* Animated Trading Lines */}
                <path 
                  d="M50,300 Q150,200 250,250 T350,150" 
                  stroke="url(#chartGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                >
                  <animate 
                    attributeName="stroke-dasharray" 
                    values="0,1000;1000,0;0,1000" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
                
                <path 
                  d="M50,350 Q150,250 250,200 T350,100" 
                  stroke="#10b981" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.6"
                >
                  <animate 
                    attributeName="stroke-dasharray" 
                    values="0,800;800,0;0,800" 
                    dur="3s" 
                    repeatCount="indefinite"
                  />
                </path>
              </svg>

              {/* Particle Effects */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-green-400 rounded-full animate-float opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Glow Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-50 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 space-y-3 z-20">
        <button 
          onClick={() => window.open('https://t.me/botxtrading', '_blank')}
          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50 animate-bounce"
          title="Contact us on Telegram"
        >
          <Send className="w-6 h-6" />
        </button>
        <button 
          onClick={handleWhatsAppClick}
          className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/50 animate-pulse"
          title="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;