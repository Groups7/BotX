import React from 'react';
import { User, Monitor, TrendingUp, BarChart3, Bot, Zap, LineChart,DollarSign } from 'lucide-react';

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
          
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Does <span className="text-gradient animate-text-glow"> AI Auto Trading </span><span className="text-white"> Work?</span>
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
             <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 text-green-400 mb-8 hover:border-green-400/40 transition-all duration-300">
            <Bot className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">No Manual Trading</span>
          </div>  
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
          </div>
          {/* step 2: broker */}
           <div className="flex flex-col items-center space-y-8 group">
             <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 text-green-400 mb-8 hover:border-green-400/40 transition-all duration-300">
            <Bot className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Instant Orders</span>
          </div>
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-white rounded-2xl flex items-center justify-center bg-black hover:scale-110 transition-all duration-500 group-hover:border-gray-300 relative overflow-hidden">
                <div className="flex flex-col items-center space-y-3 group-hover:scale-110 transition-transform duration-300">
                  {/* Monitor Design */}
                  <div className="w-20 h-14 md:w-24 md:h-16 border-3 border-white rounded-lg bg-black flex items-center justify-center relative">
                    <TrendingUp className="w-10 h-8 md:w-12 md:h-10 text-white" />
                    
                    {/* Screen Glow */}
                    <div className="absolute inset-1 bg-gradient-to-t from-green-400/20 to-transparent rounded"></div>
                  </div>
                  
                  {/* Monitor Stand */}
                  <div className="w-8 h-3 bg-white rounded-full"></div>
                  <div className="w-12 h-2 bg-white rounded-full"></div>
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
          </div>
          {/* Step 2: AI Trading Bot - Highlighted */}
          <div className="flex flex-col items-center space-y-8 group">
             <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 text-green-400 mb-8 hover:border-green-400/40 transition-all duration-300">
            <Bot className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Smart Execution</span>
          </div>
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
          </div>
          {/* Step 3: Your Profits */}
          <div className="flex flex-col items-center space-y-8 group">
             <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 text-green-400 mb-8 hover:border-green-400/40 transition-all duration-300">
            <Bot className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Profits</span>
          </div>
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-white rounded-2xl flex items-center justify-center bg-black hover:scale-110 transition-all duration-500 group-hover:border-gray-300 relative overflow-hidden">
                <div className="flex flex-col items-center space-y-3 group-hover:scale-110 transition-transform duration-300">
                  {/* Monitor Design */}
                  <div className="w-20 h-14 md:w-24 md:h-16 border-3 border-white rounded-lg bg-black flex items-center justify-center relative">
                    <DollarSign className="w-10 h-8 md:w-12 md:h-10 text-white" />
                    
                    {/* Screen Glow */}
                    <div className="absolute inset-1 bg-gradient-to-t from-green-400/20 to-transparent rounded"></div>
                  </div>
                  
                  {/* Monitor Stand */}
                  <div className="w-8 h-3 bg-white rounded-full"></div>
                  <div className="w-12 h-2 bg-white rounded-full"></div>
                </div>

                {/* Trading Signals */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-wider group-hover:text-gray-300 transition-colors">
              YOUR PROFITS
            </h3>
          </div>
        </div>

        {/* Enhanced Connection Lines */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          {/* Animated Connection Lines */}
          <svg className="w-full h-32 opacity-30" viewBox="0 0 800 100">
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6"/>
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            
            {/* Line 1: Your Role to AI Bot */}
            <line 
              x1="200" y1="50" x2="400" y2="50" 
              stroke="url(#lineGradient1)" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              className="animate-pulse"
            />
            
            {/* Line 2: AI Bot to Broker */}
            <line 
              x1="400" y1="50" x2="600" y2="50" 
              stroke="url(#lineGradient2)" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              className="animate-pulse"
              style={{animationDelay: '0.5s'}}
            />
            
            {/* Data Flow Particles */}
            <circle r="3" fill="#10b981" opacity="0.8">
              <animateMotion dur="3s" repeatCount="indefinite">
                <path d="M200,50 L400,50 L600,50"/>
              </animateMotion>
            </circle>
            <circle r="2" fill="#06b6d4" opacity="0.6">
              <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
                <path d="M200,50 L400,50 L600,50"/>
              </animateMotion>
            </circle>
          </svg>
        </div>

        {/* Enhanced Detailed Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-2xl p-8 text-center hover:border-blue-400/50 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-blue-400 font-bold text-xl mb-4">1. Market Analysis</h4>
              <p className="text-gray-300 leading-relaxed">
                AI analyzes <span className="text-blue-400 font-semibold">10,000+ data points</span> per second including price movements, 
                volume patterns, news sentiment, and technical indicators across multiple timeframes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-2xl p-8 text-center hover:border-green-400/50 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <Bot className="w-8 h-8 text-green-400" />
                <div className="absolute inset-0 bg-green-400/20 rounded-2xl animate-pulse"></div>
              </div>
              <h4 className="text-green-400 font-bold text-xl mb-4">2. AI Decision Making</h4>
              <p className="text-gray-300 leading-relaxed">
                Advanced neural networks process market data and make optimal 
                trading decisions in <span className="text-green-400 font-semibold">milliseconds</span> with <span className="text-green-400 font-semibold">94.7% accuracy</span>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl p-8 text-center hover:border-orange-400/50 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="text-orange-400 font-bold text-xl mb-4">3. Trade Execution</h4>
              <p className="text-gray-300 leading-relaxed">
                Lightning-fast execution via <span className="text-orange-400 font-semibold">MT4/MT5</span> platforms with optimal 
                entry points, stop-loss, and take-profit levels in <span className="text-orange-400 font-semibold">0.1ms</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-green-500/10 border border-green-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-cyan-500/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                BotX AI <span className="text-green-400">Performance Stats</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    94.7%
                  </div>
                  <div className="text-gray-300 font-medium">Win Rate</div>
                  <div className="text-xs text-gray-500 mt-1">BotX Accuracy</div>
                </div>
                
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    0.1ms
                  </div>
                  <div className="text-gray-300 font-medium">Execution</div>
                  <div className="text-xs text-gray-500 mt-1">Lightning Speed</div>
                </div>
                
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-gray-300 font-medium">Operation</div>
                  <div className="text-xs text-gray-500 mt-1">Never Sleeps</div>
                </div>
                
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    10K+
                  </div>
                  <div className="text-gray-300 font-medium">Data Points</div>
                  <div className="text-xs text-gray-500 mt-1">Per Second</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowAIWorks;