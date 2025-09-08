import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  Calendar, 
  Activity, 
  BarChart3, 
  PieChart, 
  LineChart,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Clock,
  Globe,
  Shield,
  Award,
  Users,
  Zap,
  Eye,
  Download,
  Share2,
  Filter,
  ArrowUp,
  ArrowDown,
  Minus,
  Bot,
  Star,
  Trophy,
  Sparkles
} from 'lucide-react';

const PerformancePage = () => {
  const [liveData, setLiveData] = useState({
    totalReturn: 847.2,
    monthlyReturn: 12.4,
    winRate: 84.7,
    profitFactor: 2.34,
    maxDrawdown: 8.7,
    sharpeRatio: 1.89,
    totalTrades: 2847,
    avgWinLoss: 1.67
  });

  const performanceMetrics = [
    {
      title: 'BotX Total Return',
      value: `+${liveData.totalReturn}%`,
      change: '+2.3%',
      isPositive: true,
      icon: TrendingUp,
      color: 'text-green-400',
      bgColor: 'from-green-500/10 to-green-600/10',
      borderColor: 'border-green-500/30',
      description: 'Total profit since BotX launch'
    },
    {
      title: 'BotX Monthly Avg',
      value: `+${liveData.monthlyReturn}%`,
      change: '+0.8%',
      isPositive: true,
      icon: Calendar,
      color: 'text-blue-400',
      bgColor: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      description: 'Average monthly BotX returns'
    },
    {
      title: 'BotX Win Rate',
      value: `${liveData.winRate}%`,
      change: '+1.2%',
      isPositive: true,
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/30',
      description: 'BotX successful trade percentage'
    },
    {
      title: 'BotX Profit Factor',
      value: liveData.profitFactor.toFixed(2),
      change: '+0.05',
      isPositive: true,
      icon: DollarSign,
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/10 to-cyan-600/10',
      borderColor: 'border-cyan-500/30',
      description: 'BotX profit vs loss ratio'
    },
    {
      title: 'BotX Max Drawdown',
      value: `${liveData.maxDrawdown}%`,
      change: '-0.3%',
      isPositive: true,
      icon: Shield,
      color: 'text-orange-400',
      bgColor: 'from-orange-500/10 to-orange-600/10',
      borderColor: 'border-orange-500/30',
      description: 'Maximum BotX account decline'
    },
    {
      title: 'BotX Sharpe Ratio',
      value: liveData.sharpeRatio.toFixed(2),
      change: '+0.12',
      isPositive: true,
      icon: BarChart3,
      color: 'text-pink-400',
      bgColor: 'from-pink-500/10 to-pink-600/10',
      borderColor: 'border-pink-500/30',
      description: 'BotX risk-adjusted returns'
    }
  ];

  const recentTrades = [
    { pair: 'XAUUSD', type: 'BUY', entry: '2,047.83', exit: '2,052.45', profit: '+$2,340', time: '2h ago', status: 'closed', pips: '+46.2', botx: 'BotX Scalper Pro' },
    { pair: 'EURUSD', type: 'SELL', entry: '1.0892', exit: '1.0876', profit: '+$890', time: '4h ago', status: 'closed', pips: '+16.0', botx: 'BotX Conservative' },
    { pair: 'BTCUSD', type: 'BUY', entry: '43,286', exit: '43,450', profit: '+$1,560', time: '6h ago', status: 'closed', pips: '+164', botx: 'BotX Aggressive' },
    { pair: 'GBPUSD', type: 'SELL', entry: '1.2734', exit: '1.2756', profit: '-$420', time: '8h ago', status: 'closed', pips: '-22.0', botx: 'BotX Swing Master' },
    { pair: 'USDJPY', type: 'BUY', entry: '149.67', exit: '149.89', profit: '+$670', time: '10h ago', status: 'closed', pips: '+22.0', botx: 'BotX Conservative' },
    { pair: 'XAUUSD', type: 'BUY', entry: '2,045.20', exit: 'OPEN', profit: '+$1,240', time: 'Live', status: 'open', pips: '+31.5', botx: 'BotX Scalper Pro' }
  ];

  const monthlyPerformance = [
    { month: 'Jan 2024', return: 15.2, trades: 234, winRate: 87.2, botxProfit: '$47,230' },
    { month: 'Feb 2024', return: 11.8, trades: 198, winRate: 84.3, botxProfit: '$38,450' },
    { month: 'Mar 2024', return: 18.5, trades: 267, winRate: 89.1, botxProfit: '$62,180' },
    { month: 'Apr 2024', return: 9.3, trades: 189, winRate: 82.5, botxProfit: '$31,670' },
    { month: 'May 2024', return: 14.7, trades: 223, winRate: 86.8, botxProfit: '$49,320' },
    { month: 'Jun 2024', return: 16.9, trades: 245, winRate: 88.4, botxProfit: '$56,890' },
    { month: 'Jul 2024', return: 13.2, trades: 211, winRate: 85.7, botxProfit: '$44,560' },
    { month: 'Aug 2024', return: 17.6, trades: 256, winRate: 90.2, botxProfit: '$59,340' },
    { month: 'Sep 2024', return: 12.1, trades: 203, winRate: 83.9, botxProfit: '$40,780' },
    { month: 'Oct 2024', return: 19.4, trades: 278, winRate: 91.5, botxProfit: '$65,420' },
    { month: 'Nov 2024', return: 14.8, trades: 234, winRate: 87.6, botxProfit: '$49,890' },
    { month: 'Dec 2024', return: 12.4, trades: 189, winRate: 84.7, botxProfit: '$41,230' }
  ];

  const topPerformers = [
    { bot: 'BotX Scalper Pro', return: '+23.4%', trades: 1247, winRate: 91.2, risk: 'Medium', specialty: 'Gold & Forex', uptime: '99.8%' },
    { bot: 'BotX Swing Master', return: '+19.8%', trades: 456, winRate: 88.7, risk: 'Low', specialty: 'Major Pairs', uptime: '99.9%' },
    { bot: 'BotX Aggressive AI', return: '+31.2%', trades: 789, winRate: 85.3, risk: 'High', specialty: 'Crypto & Volatile', uptime: '99.7%' },
    { bot: 'BotX Conservative', return: '+14.6%', trades: 355, winRate: 93.1, risk: 'Low', specialty: 'Safe Trading', uptime: '100%' }
  ];

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        totalReturn: Math.max(800, Math.min(900, prev.totalReturn + (Math.random() - 0.5) * 0.5)),
        monthlyReturn: Math.max(10, Math.min(15, prev.monthlyReturn + (Math.random() - 0.5) * 0.1)),
        winRate: Math.max(80, Math.min(90, prev.winRate + (Math.random() - 0.5) * 0.2)),
        totalTrades: prev.totalTrades + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section */}
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
                <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">BotX Performance Data</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                BotX AI <span className="text-green-400">Performance Dashboard</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Real-time BotX AI trading performance with verified results from MyFXBook. 
                See exactly how BotX algorithms perform across all market conditions.
              </p>

              {/* Live Status Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">ACTIVE</div>
                  <div className="text-gray-400">BotX Status</div>
                  <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-2 animate-pulse"></div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{liveData.totalTrades.toLocaleString()}</div>
                  <div className="text-gray-400">BotX Trades</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2.3M+</div>
                  <div className="text-gray-400">Client Profits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                  <div className="text-gray-400">BotX Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Controls Section */}

        {/* Performance Metrics Grid */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                BotX AI <span className="text-green-400">Key Metrics</span>
              </h2>
              <p className="text-gray-300">Real-time performance data from BotX trading algorithms</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {performanceMetrics.map((metric, index) => (
                <Card 
                  key={index}
                  className={`bg-gradient-to-br ${metric.bgColor} ${metric.borderColor} border backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gray-900/50 rounded-xl flex items-center justify-center">
                        <metric.icon className={`w-6 h-6 ${metric.color}`} />
                      </div>
                      <div className={`flex items-center text-sm ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.isPositive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                        {metric.change}
                      </div>
                    </div>
                    
                    <div className={`text-3xl font-bold ${metric.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {metric.value}
                    </div>
                    
                    <div className="text-white font-medium mb-2">
                      {metric.title}
                    </div>

                    <div className="text-gray-400 text-sm">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Charts and Analysis */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Performance Chart */}
              <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-green-400" />
                    BotX Equity Growth
                  </CardTitle>
                  <Badge className="bg-green-500 text-black">BotX Active</Badge>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-black/50 rounded-lg flex items-center justify-center border border-green-500/20 relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5"></div>
                    
                    {/* Chart Placeholder */}
                    <div className="text-center relative z-10">
                      <Bot className="w-16 h-16 text-green-400 mx-auto mb-4 opacity-50 animate-pulse" />
                      <p className="text-gray-400 font-medium">BotX Performance Chart</p>
                      <p className="text-sm text-gray-500 mt-2">Historical BotX AI trading results</p>
                    </div>

                    {/* Animated Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 200">
                      <defs>
                        <linearGradient id="botxGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
                        </linearGradient>
                      </defs>
                      
                      <path 
                        d="M50,150 Q100,120 150,100 T250,80 T350,60" 
                        stroke="url(#botxGradient)" 
                        strokeWidth="3" 
                        fill="none"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                    <div>
                      <div className="text-green-400 font-bold text-lg">+847%</div>
                      <div className="text-xs text-gray-400">BotX Growth</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-bold text-lg">2.34</div>
                      <div className="text-xs text-gray-400">BotX Profit Factor</div>
                    </div>
                    <div>
                      <div className="text-purple-400 font-bold text-lg">8.7%</div>
                      <div className="text-xs text-gray-400">BotX Max DD</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Performance */}
              <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    BotX Monthly Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {monthlyPerformance.slice(-6).map((month, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                        <div>
                          <div className="text-white font-medium">{month.month}</div>
                          <div className="text-gray-400 text-sm">{month.trades} BotX trades</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${month.return > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {month.return > 0 ? '+' : ''}{month.return}%
                          </div>
                          <div className="text-green-400 text-sm font-medium">{month.botxProfit}</div>
                          <div className="text-gray-400 text-xs">{month.winRate}% BotX wins</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Trades */}

        {/* Top Performing BotX Systems */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Top BotX AI Systems</h2>
              <p className="text-gray-300">Best performing BotX algorithms ranked by results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topPerformers.map((bot, index) => (
                <Card key={index} className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-8 h-8 text-green-400" />
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-green-400 transition-colors">{bot.bot}</h3>
                    
                    <div className="text-3xl font-bold text-green-400 mb-4">
                      {bot.return}
                    </div>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Trades:</span>
                        <span className="text-white">{bot.trades}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Win Rate:</span>
                        <span className="text-green-400">{bot.winRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Specialty:</span>
                        <span className="text-cyan-400 text-xs">{bot.specialty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-blue-400">{bot.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Risk:</span>
                        <Badge className={`text-xs ${
                          bot.risk === 'Low' ? 'bg-green-500' :
                          bot.risk === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                        } text-white`}>
                          {bot.risk}
                        </Badge>
                      </div>
                    </div>

                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">
                      Get {bot.bot}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                BotX Results <span className="text-green-400">Verified & Transparent</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                All BotX performance data is verified by independent third-party platforms for complete transparency and trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">BotX MyFXBook Verified</h3>
                  <p className="text-gray-300 mb-4">Independent verification of all BotX trading performance and results</p>
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-bold">
                    <Shield className="w-4 h-4 mr-2" />
                    BotX Verified
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <Eye className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">BotX Live Analytics</h3>
                  <p className="text-gray-300 mb-4">Real-time BotX performance analytics and detailed trading statistics</p>
                  <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                    <Activity className="w-4 h-4 mr-2" />
                    View BotX Analytics
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">BotX Community</h3>
                  <p className="text-gray-300 mb-4">Join thousands of successful traders using BotX AI systems worldwide</p>
                  <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                    <Users className="w-4 h-4 mr-2" />
                    BotX Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/10 to-transparent">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-10 h-10 text-green-400 animate-pulse" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start <span className="text-green-400">BotX Trading?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful traders who trust BotX AI for consistent profits and superior performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 text-lg group">
                  Get BotX Now
                  <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-4 text-lg group">
                  Try BotX Demo
                  <Bot className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>30-Day BotX Guarantee</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span>BotX Verified Results</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>24/7 BotX Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PerformancePage;