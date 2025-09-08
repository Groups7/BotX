import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  Bot, 
  BarChart3, 
  Users, 
  Copy, 
  Star, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Target,
  Zap,
  Clock,
  Globe,
  Award,
  LineChart,
  Play,
  Download,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Calendar,
  DollarSign
} from 'lucide-react';

interface ProductDetailViewProps {
  productId: string;
  onOpenForm: () => void;
}

interface PresetOption {
  id: string;
  name: string;
  originalPrice: number;
  currentPrice: number;
  badge?: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ productId, onOpenForm }) => {
  const navigate = useNavigate();
  const [selectedPreset, setSelectedPreset] = useState('alpha');
  const [liveData, setLiveData] = useState({
    winRate: 84.7,
    avgWinLoss: 1.89,
    totalTrades: 347
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        winRate: Math.max(80, Math.min(90, prev.winRate + (Math.random() - 0.5) * 0.2)),
        totalTrades: prev.totalTrades + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const products = {
    'auto-trading': {
      title: 'BotX AI Core System V2 [Lifetime Access]',
      rating: 4.9,
      reviews: 1205,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      presets: [
        {
          id: 'essential',
          name: 'Essential',
          originalPrice: 799.95,
          currentPrice: 159.95,
          description: 'Basic BotX AI with core features'
        },
        {
          id: 'proficient',
          name: 'Proficient',
          originalPrice: 1199.95,
          currentPrice: 239.95,
          description: 'Advanced BotX AI with enhanced features'
        },
        {
          id: 'alpha',
          name: 'Alpha',
          originalPrice: 1499.95,
          currentPrice: 299.95,
          badge: 'Best version',
          description: 'Complete BotX AI with all premium features'
        },
        {
          id: 'bundle',
          name: 'Bundle (Essential + Proficient + Alpha)',
          originalPrice: 2999.95,
          currentPrice: 599.95,
          description: 'All BotX AI versions included'
        }
      ],
      discount: 80,
      icon: Bot,
      description: 'The most advanced AI trading system ever created. BotX AI Core System V2 represents 5+ years of development and has generated over 847% returns with a 94.7% win rate.',
      overview: 'BotX AI Core System V2 is our flagship automated trading solution that combines cutting-edge artificial intelligence with proven trading strategies. This system has been refined over 5+ years and has consistently delivered exceptional results across all market conditions.',
      keyPoints: [
        'Processes over 10,000 market signals per second using advanced machine learning',
        'Trades multiple assets simultaneously: XAUUSD, EURUSD, BTCUSD, and 15+ others',
        'Built-in risk management with intelligent position sizing and drawdown protection',
        'Compatible with MT4 and MT5 platforms with seamless integration',
        'Verified performance with 847% total returns and 94.7% win rate'
      ],
      features: [
        {
          title: 'Advanced AI Engine',
          description: 'Revolutionary machine learning algorithms that adapt to market conditions in real-time',
          icon: Bot
        },
        {
          title: 'Multi-Asset Trading',
          description: 'Trade XAUUSD, EURUSD, BTCUSD, and 15+ other instruments simultaneously',
          icon: TrendingUp
        },
        {
          title: 'Risk Management',
          description: 'Built-in drawdown protection and intelligent position sizing',
          icon: Shield
        },
        {
          title: '24/7 Operation',
          description: 'Never miss a trading opportunity with round-the-clock automation',
          icon: Clock
        }
      ],
      performance: [
        { label: 'Total Return', value: '+847%', color: 'text-green-400' },
        { label: 'Win Rate', value: '94.7%', color: 'text-green-400' },
        { label: 'Max Drawdown', value: '8.7%', color: 'text-blue-400' },
        { label: 'Profit Factor', value: '2.34', color: 'text-green-400' },
        { label: 'Monthly Avg', value: '+12.4%', color: 'text-green-400' },
        { label: 'Total Trades', value: '2,847', color: 'text-cyan-400' }
      ],
      faqs: [
        {
          question: 'How does BotX AI Core System work?',
          answer: 'BotX AI Core System uses advanced machine learning algorithms to analyze market patterns, news sentiment, and technical indicators in real-time. It processes over 10,000 data points per second to identify profitable trading opportunities and execute trades automatically.'
        },
        {
          question: 'What trading platforms does it support?',
          answer: 'BotX AI Core System is compatible with both MT4 and MT5 platforms. It integrates seamlessly with your existing broker account and works with over 200+ brokers worldwide.'
        },
        {
          question: 'Is my capital safe with BotX?',
          answer: 'Yes, your capital is completely safe. BotX never has direct access to your funds. We connect to your broker via secure API keys with trading-only permissions. Your money stays in your own account at your chosen broker.'
        },
        {
          question: 'What is the minimum deposit required?',
          answer: 'You can start with as little as $500, but we recommend $1,000-$2,000 for optimal performance and better diversification. The system automatically adjusts position sizes based on your account balance.'
        },
        {
          question: 'Do I get support and updates?',
          answer: 'Yes, you get lifetime support and free updates with your purchase. Our team provides 24/7 assistance via WhatsApp, email, and live chat. You also get access to our exclusive community of successful traders.'
        }
      ]
    },
    'indicators': {
      title: 'BotX Signal Indicators V2 [Lifetime Access]',
      rating: 4.8,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      presets: [
        {
          id: 'essential',
          name: 'Essential',
          originalPrice: 399.95,
          currentPrice: 79.95,
          description: 'Basic indicator suite with core signals'
        },
        {
          id: 'proficient',
          name: 'Proficient',
          originalPrice: 599.95,
          currentPrice: 119.95,
          description: 'Advanced indicators with multi-timeframe analysis'
        },
        {
          id: 'alpha',
          name: 'Alpha',
          originalPrice: 799.95,
          currentPrice: 159.95,
          badge: 'Best version',
          description: 'Complete indicator suite with AI-powered signals'
        },
        {
          id: 'bundle',
          name: 'Bundle (Essential + Proficient + Alpha)',
          originalPrice: 1599.95,
          currentPrice: 319.95,
          description: 'All indicator versions included'
        }
      ],
      discount: 80,
      icon: BarChart3,
      description: 'Professional-grade trading indicators powered by BotX AI algorithms. Get precise entry and exit signals with 94.7% accuracy across all major markets.',
      overview: 'BotX Signal Indicators V2 provides professional traders with AI-powered market analysis tools. These indicators use the same algorithms as our flagship BotX system to generate high-probability trading signals with exceptional accuracy.',
      keyPoints: [
        'AI-powered signal generation with 94.7% accuracy rate',
        'Compatible with MT4, MT5, and TradingView platforms',
        'Real-time alerts via email, SMS, and push notifications',
        'Multi-timeframe analysis from M1 to Monthly charts',
        'Professional-grade indicators used by institutional traders'
      ],
      features: [
        {
          title: 'AI Signal Generation',
          description: 'Advanced algorithms analyze market patterns to generate high-probability signals',
          icon: Zap
        },
        {
          title: 'Multi-Platform Support',
          description: 'Compatible with MT4, MT5, and TradingView platforms',
          icon: Globe
        },
        {
          title: 'Real-time Alerts',
          description: 'Instant notifications for trading opportunities via email, SMS, and push notifications',
          icon: Activity
        },
        {
          title: 'Custom Timeframes',
          description: 'Works across all timeframes from M1 to Monthly charts',
          icon: LineChart
        }
      ],
      performance: [
        { label: 'Signal Accuracy', value: '94.7%', color: 'text-green-400' },
        { label: 'Avg Pips/Signal', value: '45.2', color: 'text-green-400' },
        { label: 'Signals/Day', value: '12-18', color: 'text-cyan-400' },
        { label: 'False Signals', value: '5.3%', color: 'text-blue-400' },
        { label: 'Profitability', value: '89.4%', color: 'text-green-400' },
        { label: 'Active Users', value: '3,247', color: 'text-cyan-400' }
      ],
      faqs: [
        {
          question: 'Which platforms do the indicators work on?',
          answer: 'BotX Signal Indicators are compatible with MT4, MT5, and TradingView. You can use them on desktop, mobile, and web versions of these platforms.'
        },
        {
          question: 'How accurate are the signals?',
          answer: 'Our indicators have a proven 94.7% accuracy rate based on historical backtesting and live trading results. This high accuracy is achieved through advanced AI algorithms that analyze multiple market factors.'
        },
        {
          question: 'Do I get real-time alerts?',
          answer: 'Yes, you receive instant alerts via email, SMS, and push notifications when new trading signals are generated. You can customize alert settings based on your preferences.'
        },
        {
          question: 'Can I use these indicators for any market?',
          answer: 'Yes, BotX Signal Indicators work on forex, crypto, commodities, and stock markets. They are optimized for major pairs like EURUSD, GBPUSD, XAUUSD, and BTCUSD.'
        },
        {
          question: 'Is there a learning curve?',
          answer: 'No, the indicators are designed to be user-friendly. They come with detailed installation guides, video tutorials, and our support team provides assistance with setup and optimization.'
        }
      ]
    },
    'funded-account': {
      title: 'BotX Prop Firm Passer V2 [Lifetime Access]',
      rating: 4.9,
      reviews: 634,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
      presets: [
        {
          id: 'essential',
          name: 'Essential',
          originalPrice: 499.95,
          currentPrice: 99.95,
          description: 'Basic challenge tools for 1-2 prop firms'
        },
        {
          id: 'proficient',
          name: 'Proficient',
          originalPrice: 749.95,
          currentPrice: 149.95,
          description: 'Advanced tools for 5+ prop firms'
        },
        {
          id: 'alpha',
          name: 'Alpha',
          originalPrice: 999.95,
          currentPrice: 199.95,
          badge: 'Best version',
          description: 'Complete suite for 15+ prop firms'
        },
        {
          id: 'bundle',
          name: 'Bundle (Essential + Proficient + Alpha)',
          originalPrice: 1999.95,
          currentPrice: 399.95,
          description: 'All prop firm tools included'
        }
      ],
      discount: 80,
      icon: Users,
      description: 'Specialized BotX system designed to pass prop firm challenges with a 92% success rate. Compatible with FTMO, MyForexFunds, and 15+ other prop firms.',
      overview: 'BotX Prop Firm Passer V2 is specifically engineered to help traders pass prop firm challenges and secure funding. With a 92% success rate, this system has helped over 2,800 traders secure funding from major prop firms.',
      keyPoints: [
        '92% success rate in passing prop firm challenges',
        'Compatible with FTMO, MyForexFunds, The5ers, and 15+ other firms',
        'Challenge-specific strategies tailored for each prop firm',
        'Advanced risk management to stay within drawdown limits',
        'Profit target optimization for efficient challenge completion'
      ],
      features: [
        {
          title: 'Challenge Optimization',
          description: 'Tailored strategies specifically designed for prop firm evaluation criteria',
          icon: Target
        },
        {
          title: 'Risk Management',
          description: 'Advanced drawdown protection to stay within prop firm limits',
          icon: Shield
        },
        {
          title: 'Profit Targeting',
          description: 'Optimized algorithms to hit profit targets efficiently and safely',
          icon: TrendingUp
        },
        {
          title: 'Multi-Firm Support',
          description: 'Compatible with FTMO, MyForexFunds, The5ers, and 15+ other firms',
          icon: Award
        }
      ],
      performance: [
        { label: 'Pass Rate', value: '92%', color: 'text-green-400' },
        { label: 'Avg Days to Pass', value: '18', color: 'text-cyan-400' },
        { label: 'Max Drawdown', value: '3.2%', color: 'text-blue-400' },
        { label: 'Profit Target Hit', value: '10%', color: 'text-green-400' },
        { label: 'Success Stories', value: '2,847', color: 'text-green-400' },
        { label: 'Supported Firms', value: '15+', color: 'text-cyan-400' }
      ],
      faqs: [
        {
          question: 'Which prop firms does this work with?',
          answer: 'BotX Prop Firm Passer works with FTMO, MyForexFunds, The5ers, FundedNext, E8 Markets, and 15+ other major prop firms. Each firm has specific optimized settings.'
        },
        {
          question: 'What is the success rate?',
          answer: 'Our system has a 92% success rate in passing prop firm challenges. Over 2,800 traders have successfully secured funding using BotX Prop Firm Passer.'
        },
        {
          question: 'How long does it take to pass a challenge?',
          answer: 'On average, traders pass their challenges in 18 days. The system is optimized to hit profit targets efficiently while staying well within drawdown limits.'
        },
        {
          question: 'Is it safe for prop firm rules?',
          answer: 'Yes, the system is specifically designed to comply with all prop firm rules. It includes advanced risk management to ensure you never violate drawdown limits or other restrictions.'
        },
        {
          question: 'Do I get support during my challenge?',
          answer: 'Absolutely! You get dedicated support throughout your challenge period. Our team monitors your progress and provides guidance to ensure successful completion.'
        }
      ]
    },
    'copy-trading': {
      title: 'BotX Master Copy V2 [Lifetime Access]',
      rating: 4.7,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
      presets: [
        {
          id: 'essential',
          name: 'Essential',
          originalPrice: 349.95,
          currentPrice: 69.95,
          description: 'Copy 5 verified master accounts'
        },
        {
          id: 'proficient',
          name: 'Proficient',
          originalPrice: 524.95,
          currentPrice: 104.95,
          description: 'Copy 15 master accounts with analytics'
        },
        {
          id: 'alpha',
          name: 'Alpha',
          originalPrice: 699.95,
          currentPrice: 139.95,
          badge: 'Best version',
          description: 'Copy all 47 master accounts with full features'
        },
        {
          id: 'bundle',
          name: 'Bundle (Essential + Proficient + Alpha)',
          originalPrice: 1399.95,
          currentPrice: 279.95,
          description: 'All copy trading features included'
        }
      ],
      discount: 80,
      icon: Copy,
      description: 'Copy trades from 47 verified master accounts with proven track records. Real-time synchronization with 99.8% accuracy and 0.1ms latency.',
      overview: 'BotX Master Copy V2 allows you to automatically copy trades from our most successful master accounts. All accounts are verified by MyFXBook and have consistent profitable track records with transparent performance data.',
      keyPoints: [
        'Copy from 47 verified master accounts with proven track records',
        'Real-time trade synchronization with 99.8% accuracy',
        'Ultra-low latency copying at 0.1ms for optimal execution',
        'Customizable risk levels and position sizing for each master',
        'Comprehensive performance analytics and detailed statistics'
      ],
      features: [
        {
          title: 'Verified Masters',
          description: '47 master accounts verified by MyFXBook with transparent track records',
          icon: CheckCircle
        },
        {
          title: 'Real-time Copying',
          description: 'Instant trade synchronization with 0.1ms latency for optimal execution',
          icon: Zap
        },
        {
          title: 'Risk Control',
          description: 'Customizable lot sizes and risk levels for each master account',
          icon: Shield
        },
        {
          title: 'Performance Analytics',
          description: 'Detailed statistics and performance tracking for all copied trades',
          icon: BarChart3
        }
      ],
      performance: [
        { label: 'Master Accounts', value: '47', color: 'text-cyan-400' },
        { label: 'Avg Return', value: '+23.4%', color: 'text-green-400' },
        { label: 'Copy Accuracy', value: '99.8%', color: 'text-green-400' },
        { label: 'Latency', value: '0.1ms', color: 'text-blue-400' },
        { label: 'Subscribers', value: '5,234', color: 'text-cyan-400' },
        { label: 'Success Rate', value: '87.3%', color: 'text-green-400' }
      ],
      faqs: [
        {
          question: 'How many master accounts can I copy?',
          answer: 'Depending on your preset, you can copy from 5 (Essential), 15 (Proficient), or all 47 (Alpha) verified master accounts. Each account has different trading styles and risk levels.'
        },
        {
          question: 'How fast are the trades copied?',
          answer: 'Trades are copied in real-time with just 0.1ms latency. This ensures you get the same entry and exit prices as the master accounts for optimal performance.'
        },
        {
          question: 'Can I control the risk level?',
          answer: 'Yes, you have full control over risk settings. You can adjust lot sizes, set maximum drawdown limits, and choose which master accounts to follow based on your risk tolerance.'
        },
        {
          question: 'Are the master accounts verified?',
          answer: 'All 47 master accounts are verified by MyFXBook with transparent track records. You can see detailed performance statistics, drawdown history, and trading patterns for each account.'
        },
        {
          question: 'What if a master account has a losing streak?',
          answer: 'The system includes intelligent filters that can automatically pause copying from accounts experiencing unusual drawdowns. You also get alerts and can manually control which accounts to follow.'
        }
      ]
    }
  };

  const product = products[productId as keyof typeof products];
  const selectedPresetData = product?.presets.find(p => p.id === selectedPreset) || product?.presets[2];

//   const performanceData = [
//     {
//       metric: 'BotX Total Return',
//       value: '+847.2%',
//       period: 'Since Launch',
//       color: 'text-green-400',
//       icon: TrendingUp
//     },
//     {
//       metric: 'BotX Monthly Avg',
//       value: '+12.4%',
//       period: 'Average',
//       color: 'text-green-400',
//       icon: Calendar
//     },
//     {
//       metric: 'BotX Max Drawdown',
//       value: '8.7%',
//       period: 'Historical',
//       color: 'text-blue-400',
//       icon: Target
//     },
//     {
//       metric: 'BotX Profit Factor',
//       value: '2.34',
//       period: 'Overall',
//       color: 'text-green-400',
//       icon: DollarSign
//     }
//   ];

//   const recentTrades = [
//     { pair: 'XAUUSD', result: '+$2,340', time: '2h ago', status: 'win' },
//     { pair: 'EURUSD', result: '+$890', time: '4h ago', status: 'win' },
//     { pair: 'BTCUSD', result: '+$1,560', time: '6h ago', status: 'win' },
//     { pair: 'XAUUSD', result: '-$420', time: '8h ago', status: 'loss' },
//     { pair: 'EURUSD', result: '+$670', time: '10h ago', status: 'win' }
//   ];

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/products')} className="bg-green-500 hover:bg-green-600 text-black">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-12">
            {/* Product Image/Chart */}
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-green-500 text-black font-bold mb-2">
                  Live Performance
                </Badge>
                <div className="text-white">
                  <div className="text-2xl font-bold">+{product.performance[0].value}</div>
                  <div className="text-sm opacity-80">Total Returns</div>
                </div>
              </div>
            </div>

            {/* Product Overview */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Product Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {product.overview}
              </p>
              
              <div className="space-y-3">
                {product.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <Card key={index} className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                          <p className="text-gray-300 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Performance Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {product.performance.map((metric, index) => (
                  <Card key={index} className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm text-center">
                    <CardContent className="p-4">
                      <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <HelpCircle className="w-8 h-8 mr-3 text-green-400" />
                Frequently Asked Questions
              </h2>
              <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    {product.faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="bg-black/30 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline [&>svg]:text-green-400">
                          <span className="text-white font-medium text-left">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Product Header */}
              <div>
                <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {product.title}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews})</span>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-lg text-gray-500 line-through">
                    ${selectedPresetData?.originalPrice} USD
                  </span>
                  <span className="text-3xl font-bold text-white">
                    ${selectedPresetData?.currentPrice} USD
                  </span>
                  <Badge className="bg-green-500 text-black font-bold">
                    {product.discount}% OFF
                  </Badge>
                </div>

                {/* Preset Selection */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Preset</h3>
                  <div className="space-y-2">
                    {product.presets.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => setSelectedPreset(preset.id)}
                        className={`w-full px-4 py-3 rounded-lg transition-all duration-300 text-left text-sm ${
                          selectedPreset === preset.id
                            ? 'bg-white text-black font-semibold'
                            : 'border border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{preset.name}</div>
                            <div className={`text-xs ${selectedPreset === preset.id ? 'text-gray-600' : 'text-gray-500'}`}>
                              {preset.description}
                            </div>
                          </div>
                          {preset.badge && selectedPreset === preset.id && (
                            <Badge className="bg-green-500 text-white text-xs">
                              {preset.badge}
                            </Badge>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  <Button 
                    variant="outline" 
                    className="w-full py-3 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Add to cart
                  </Button>
                  <Button 
                    onClick={onOpenForm}
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold transition-all duration-300"
                  >
                    Buy it now
                  </Button>
                </div>

                {/* Additional Actions */}
                <div className="space-y-3 mb-8">
                  <Button 
                    variant="outline" 
                    className="w-full py-2 text-sm border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full py-2 text-sm border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Guide
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 text-center text-sm">
                  <div className="p-3 bg-gray-900/50 rounded-lg border border-green-500/20">
                    <Shield className="w-5 h-5 text-green-400 mx-auto mb-1" />
                    <div className="text-white font-medium">30-Day</div>
                    <div className="text-gray-400 text-xs">Guarantee</div>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded-lg border border-green-500/20">
                    <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                    <div className="text-white font-medium">24/7</div>
                    <div className="text-gray-400 text-xs">Support</div>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded-lg border border-green-500/20">
                    <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                    <div className="text-white font-medium">10K+</div>
                    <div className="text-gray-400 text-xs">Customers</div>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded-lg border border-green-500/20">
                    <Activity className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                    <div className="text-white font-medium">Live</div>
                    <div className="text-gray-400 text-xs">Tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ProvenTrackRecord Section */}
       

        {/* Related Products Section */}
        <div className="mt-20 pt-16 border-t border-gray-700/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Complete BotX <span className="text-green-400">Product Suite</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our full range of AI-powered trading solutions designed to maximize your profits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(products).map(([key, prod]) => (
              <div
                key={key}
                onClick={() => navigate(`/products?product=${key}`)}
                className={`bg-gray-900/50 border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-green-500/40 ${
                  key === productId 
                    ? 'border-green-500/50 bg-green-500/10' 
                    : 'border-gray-700/50 hover:bg-gray-800/50'
                }`}
              >
                {/* Product Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <prod.icon className="w-8 h-8 text-green-400" />
                </div>

                {/* Product Title */}
                <h3 className="text-white font-bold text-lg mb-2 text-center line-clamp-2">
                  {prod.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-400 text-xs ml-1">({prod.reviews})</span>
                </div>

                {/* Pricing */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-500 line-through">
                      ${prod.presets[2].originalPrice}
                    </span>
                    <span className="text-lg font-bold text-white">
                      ${prod.presets[2].currentPrice}
                    </span>
                  </div>
                  <Badge className="bg-green-500 text-black font-bold text-xs mt-1">
                    {prod.discount}% OFF
                  </Badge>
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-4">
                  {prod.keyPoints.slice(0, 2).map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-xs line-clamp-1">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (key === productId) {
                      onOpenForm();
                    } else {
                      navigate(`/products?product=${key}`);
                    }
                  }}
                  className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                    key === productId
                      ? 'bg-green-500 hover:bg-green-600 text-black'
                      : 'border border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400'
                  }`}
                >
                  {key === productId ? 'Get This Product' : 'View Details'}
                </button>

                {/* Current Product Indicator */}
                {key === productId && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      Current
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your BotX Journey?
              </h3>
              <p className="text-gray-300 mb-6">
                Get personalized recommendations and start with the perfect BotX solution for your trading goals.
              </p>
              <Button
                onClick={onOpenForm}
                className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 text-lg"
              >
                Get BotX Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailView;