import React from 'react';
import { User, Monitor, TrendingUp, BarChart3, Bot, Zap, LineChart } from 'lucide-react';

const HowAIWorks = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
        {/* Enhanced Main Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 text-green-400 mb-8 hover:border-green-400/40 transition-all duration-300">
            <Bot className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">AI Trading Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-white">HOW DOES </span>
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
              AI AUTO TRADING
            </span>
            <span className="text-white"> WORK?</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
            Our AI-powered trading software runs <span className="text-green-400 font-semibold">24/7</span> analyzing markets,
            <br />
            executing trades instantly, and optimizing profits <span className="text-green-400 font-semibold">without manual effort</span>.
          </p>
        </div>

        {/* Enhanced Visual Flow - 3 Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 lg:space-x-20 mb-20">
          {/* Step 1: Your Role */}
          <div className="flex flex-col items-center space-y-8 group">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-white rounded-full flex items-center justify-center bg-black hover:scale-110 transition-all duration-500 group-hover:border-gray-300 relative overflow-hidden">
                <User className="w-20 h-20 md:w-24 md:h-24 text-white group-hover:scale-110 transition-transform duration-300" />
                
                {/* Animated Ring */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 border border-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-500 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-wider group-hover:text-gray-300 transition-colors">
              YOUR ROLE
            </h3>
            
            <div className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold py-4 px-8 md:py-5 md:px-10 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 cursor-pointer relative overflow-hidden group">
              <span className="relative z-10">No Manual Trading</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>

          {/* Step 2: AI Trading Bot - Highlighted */}
          <div className="flex flex-col items-center space-y-8 group">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-green-400 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-900/30 to-green-800/20 hover:scale-110 transition-all duration-500 relative overflow-hidden group-hover:border-green-300">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-green-400/10 rounded-2xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-cyan-500/20 rounded-2xl"></div>
                
                {/* Custom Bot Design */}
                <div className="relative z-10 flex flex-col items-center space-y-3 group-hover:scale-110 transition-transform duration-300">
                  {/* Main Bot Body */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-400 rounded-lg relative">
                    <div className="absolute inset-1 bg-green-300 rounded-md"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Bot Interface Lines */}
                  <div className="flex space-x-2">
                    <div className="w-8 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-6 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="w-8 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute -top-3 -left-3 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute -top-3 -right-3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400/60 rounded-full"></div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-3 h-3 bg-cyan-400/60 rounded-full"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400/60 rounded-full"></div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-3 h-3 bg-purple-400/60 rounded-full"></div>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-wider group-hover:text-green-400 transition-colors">
              AI TRADING BOT
            </h3>
            
            <div className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold py-4 px-8 md:py-5 md:px-10 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/40 cursor-pointer relative overflow-hidden group">
              <span className="relative z-10">Smart Execution</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>

          {/* Step 3: Your Broker */}
          <div className="flex flex-col items-center space-y-8 group">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-white rounded-2xl flex items-center justify-center bg-black hover:scale-110 transition-all duration-500 group-hover:border-gray-300 relative overflow-hidden">
                <div className="flex flex-col items-center space-y-3 group-hover:scale-110 transition-transform duration-300">
                  {/* Monitor Design */}
                  <div className="w-20 h-14 md:w-24 md:h-16 border-3 border-white rounded-lg bg-black flex items-center justify-center relative">
                    <TrendingUp className="w-10 h-8 md:w-12 md:h-10 text-white" />
                    
                    {/* Screen Glow */}
                    <div className="absolute inset-1 bg-gradient-to-t from-green-400/20 to-transparent rounded"></div>
                  </div>
                </div>

                {/* Trading Signals */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-wider group-hover:text-gray-300 transition-colors">
              YOUR BROKER
            </h3>
            
            <div className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold py-4 px-8 md:py-5 md:px-10 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 cursor-pointer relative overflow-hidden group">
              <span className="relative z-10">Instant Orders</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowAIWorks;