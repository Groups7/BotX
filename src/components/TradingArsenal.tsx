import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, BarChart3, Users, Copy, Zap, CheckCircle, ArrowRight } from 'lucide-react';

interface TradingArsenalProps {
  onOpenForm: () => void;
  selectedProduct?: string | null;
}

const TradingArsenal: React.FC<TradingArsenalProps> = ({ onOpenForm, selectedProduct }) => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'auto-trading',
      title: 'BotX AI Core System',
      description: 'The flagship BotX AI that has generated 847% returns. Never sleeps, never loses focus, always profitable.',
      icon: Bot,
      iconBg: 'from-green-500 to-emerald-500',
      cardBg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      badge: 'BotX Flagship',
      badgeColor: 'bg-green-500',
      borderGlow: 'hover:shadow-green-400/40',
      features: [
        'BotX trades XAUUSD, EURUSD, BTCUSD',
        'Works on MT4 & MT5 platforms',
        'BotX AI processes 10K+ signals/second',
        'Advanced BotX risk management',
        '5+ years verified BotX performance'
      ],
      detailedContent: {
        overview: 'BotX AI Core System is our flagship trading algorithm that has revolutionized automated trading. With over 5 years of proven performance and 847% total returns, this system represents the pinnacle of AI trading technology.',
        keyFeatures: [
          'Advanced Machine Learning: BotX uses deep neural networks to analyze market patterns',
          'Multi-Asset Trading: Specializes in XAUUSD (Gold), EURUSD, and BTCUSD',
          'Real-time Processing: Analyzes 10,000+ data points per second',
          'Risk Management: Built-in drawdown protection and position sizing',
          'Platform Integration: Seamless MT4 and MT5 compatibility'
        ],
        performance: {
          totalReturn: '847%',
          winRate: '94.7%',
          maxDrawdown: '8.7%',
          profitFactor: '2.34',
          monthlyAvg: '12.4%'
        },
        pricing: {
          monthly: '$297',
          quarterly: '$797',
          yearly: '$2,997'
        }
      }
    },
    {
      id: 'indicators',
      title: 'BotX Signal Indicators',
      description: 'Professional-grade indicators powered by BotX AI algorithms for precise market entry and exit signals.',
      icon: BarChart3,
      iconBg: 'from-blue-500 to-cyan-500',
      cardBg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      badge: 'BotX Powered',
      badgeColor: 'bg-blue-500',
      borderGlow: 'hover:shadow-blue-400/40',
      features: [
        'BotX indicators for MT4/MT5 & TradingView',
        'BotX AI signal generation',
        'Multi-timeframe BotX analysis',
        'Real-time BotX alerts',
        '94.7% BotX accuracy rate'
      ],
      detailedContent: {
        overview: 'BotX Signal Indicators provide professional traders with AI-powered market analysis tools. These indicators use the same algorithms as our flagship BotX system to generate high-probability trading signals.',
        keyFeatures: [
          'Multi-Platform Support: Available for MT4, MT5, and TradingView',
          'AI Signal Generation: Powered by BotX machine learning algorithms',
          'Custom Alerts: Real-time notifications for trading opportunities',
          'Multi-Timeframe Analysis: Works across all timeframes from M1 to Monthly',
          'Professional Grade: Used by institutional traders worldwide'
        ],
        performance: {
          accuracy: '94.7%',
          avgPips: '45.2',
          signalsPerDay: '12-18',
          falseSignals: '5.3%',
          profitability: '89.4%'
        },
        pricing: {
          monthly: '$97',
          quarterly: '$247',
          yearly: '$897'
        }
      }
    },
    {
      id: 'funded-account',
      title: 'BotX Prop Firm Passer',
      description: 'Specialized BotX system designed to pass FTMO, MyForexFunds, and other prop firm challenges with ease.',
      icon: Users,
      iconBg: 'from-purple-500 to-pink-500',
      cardBg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      badge: 'BotX Challenge',
      badgeColor: 'bg-purple-500',
      borderGlow: 'hover:shadow-purple-400/40',
      features: [
        'BotX passes FTMO, MyForexFunds challenges',
        'Challenge-specific BotX strategies',
        'BotX risk management for evaluations',
        'BotX profit target optimization',
        'Advanced BotX drawdown protection'
      ],
      detailedContent: {
        overview: 'BotX Prop Firm Passer is specifically designed to help traders pass prop firm challenges and secure funding. This system has a 92% success rate in passing FTMO and other major prop firm evaluations.',
        keyFeatures: [
          'Challenge Optimization: Tailored strategies for different prop firms',
          'Risk Management: Advanced drawdown protection for evaluations',
          'Profit Targeting: Optimized to hit profit targets efficiently',
          'Multiple Firms: Supports FTMO, MyForexFunds, The5ers, and more',
          'Success Tracking: Detailed analytics for challenge progress'
        ],
        performance: {
          passRate: '92%',
          avgDays: '18',
          maxDrawdown: '3.2%',
          profitTarget: '10%',
          successStories: '2,847'
        },
        pricing: {
          monthly: '$197',
          quarterly: '$497',
          yearly: '$1,797'
        }
      }
    },
    {
      id: 'copy-trading',
      title: 'BotX Master Copy',
      description: 'Copy the exact trades from our most successful BotX AI systems with verified track records.',
      icon: Copy,
      iconBg: 'from-orange-500 to-red-500',
      cardBg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      badge: 'BotX Masters',
      badgeColor: 'bg-orange-500',
      borderGlow: 'hover:shadow-orange-400/40',
      features: [
        'Copy verified BotX master accounts',
        'BotX verified track records',
        'Customizable BotX risk levels',
        'Real-time BotX synchronization',
        'Advanced BotX analytics'
      ],
      detailedContent: {
        overview: 'BotX Master Copy allows you to automatically copy trades from our most successful BotX AI systems and professional traders. All master accounts are verified and have consistent profitable track records.',
        keyFeatures: [
          'Verified Masters: All accounts verified by MyFXBook',
          'Real-time Copying: Instant trade synchronization',
          'Risk Control: Customizable lot sizes and risk levels',
          'Multiple Masters: Copy from different successful traders',
          'Performance Analytics: Detailed copying statistics'
        ],
        performance: {
          masterAccounts: '47',
          avgReturn: '23.4%',
          copyAccuracy: '99.8%',
          latency: '0.1ms',
          subscribers: '5,234'
        },
        pricing: {
          monthly: '$147',
          quarterly: '$397',
          yearly: '$1,397'
        }
      }
    }
  ];

  const handleProductClick = (productId: string) => {
    navigate(`/products?product=${productId}`);
  };

  const handleLearnMore = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    navigate(`/products?product=${productId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-2 mb-6 hover:border-green-400/40 transition-all duration-300">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">BotX Product Showcase</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Complete BotX <span className="text-green-400">Trading Arsenal</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The complete BotX ecosystem - from our flagship AI system to specialized tools 
            for prop firms and copy trading. Everything powered by BotX intelligence.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className={`${product.cardBg} backdrop-blur-sm border transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105 ${product.borderGlow} cursor-pointer rounded-2xl p-8 ${
                selectedProduct === product.id 
                  ? 'border-green-400/50 shadow-2xl shadow-green-500/20' 
                  : 'border-gray-700/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${product.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <div className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full ${
                  selectedProduct === product.id ? 'animate-pulse' : ''
                }`}>
                  {product.badge}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenForm();
                  }}
                  className="flex-1 bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 flex items-center justify-center gap-2"
                >
                  Get BotX Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={(e) => handleLearnMore(e, product.id)}
                  className="flex-1 border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-400/10"
                >
                  Learn About BotX
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your BotX AI Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Get personalized BotX recommendations and start with the perfect AI solution for your trading goals.
            </p>
            <button
              onClick={onOpenForm}
              className="bg-green-400 hover:bg-green-500 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-400/25 flex items-center gap-2 mx-auto"
            >
              Start BotX AI Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingArsenal;