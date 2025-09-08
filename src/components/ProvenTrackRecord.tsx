import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, DollarSign, Calendar, Target, ExternalLink, Activity } from 'lucide-react';

const performanceData = [
  {
    metric: 'Total Return',
    value: '+847.2%',
    period: 'Since Launch',
    color: 'text-green-400',
    icon: TrendingUp
  },
  {
    metric: 'Monthly Return',
    value: '+12.4%',
    period: 'Average',
    color: 'text-green-400',
    icon: Calendar
  },
  {
    metric: 'Max Drawdown',
    value: '8.7%',
    period: 'Historical',
    color: 'text-blue-400',
    icon: Target
  },
  {
    metric: 'Profit Factor',
    value: '2.34',
    period: 'Overall',
    color: 'text-green-400',
    icon: DollarSign
  }
];

const recentTrades = [
  { pair: 'XAUUSD', result: '+$2,340', time: '2h ago', status: 'win' },
  { pair: 'EURUSD', result: '+$890', time: '4h ago', status: 'win' },
  { pair: 'BTCUSD', result: '+$1,560', time: '6h ago', status: 'win' },
  { pair: 'XAUUSD', result: '-$420', time: '8h ago', status: 'loss' },
  { pair: 'EURUSD', result: '+$670', time: '10h ago', status: 'win' }
];

const ProvenTrackRecord = () => {
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

  return (
    <section id="performance" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 mb-6">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">Live Performance</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven <span className="text-green-400">Track Record</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time performance data verified by independent third-party platforms. Transparency you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Performance Metrics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {performanceData.map((metric, index) => (
                <Card key={index} className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">{metric.metric}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.period}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Performance Chart Placeholder */}
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  MyFXBook Live Performance
                </CardTitle>
                <a 
                  href="#" 
                  className="flex items-center text-green-400 hover:text-green-300 text-sm"
                >
                  View Full Report
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardHeader>
              <CardContent>
                {/* Embed-style panel design */}
                <div className="bg-black/50 rounded-lg p-6 border border-green-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-medium">Live Account</span>
                    </div>
                    <Badge className="bg-green-500 text-black">
                      Verified
                    </Badge>
                  </div>
                  
                  {/* Mock Chart Area */}
                  <div className="h-64 bg-gradient-to-t from-green-500/5 to-transparent rounded-lg flex items-center justify-center border border-green-500/10">
                    <div className="text-center">
                      <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4 opacity-50" />
                      <p className="text-gray-400">MyFXBook Widget Integration</p>
                      <p className="text-sm text-gray-500 mt-2">Live performance data will be displayed here</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                    <div>
                      <div className="text-green-400 font-bold">{liveData.winRate.toFixed(1)}%</div>
                      <div className="text-xs text-gray-400">Win Rate</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold">{liveData.avgWinLoss.toFixed(2)}</div>
                      <div className="text-xs text-gray-400">Avg Win/Loss</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold">{liveData.totalTrades}</div>
                      <div className="text-xs text-gray-400">Total Trades</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Trades Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                  Recent Trades
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentTrades.map((trade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-green-500/10">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        trade.status === 'win' ? 'bg-green-400' : 'bg-red-400'
                      }`}></div>
                      <div>
                        <div className="text-white font-medium">{trade.pair}</div>
                        <div className="text-xs text-gray-400">{trade.time}</div>
                      </div>
                    </div>
                    <div className={`font-bold ${
                      trade.status === 'win' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {trade.result}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Live Status */}
            <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/30">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Trading Live Now
                </h3>
                <p className="text-green-400 text-sm">
                  All systems operational
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Next trade opportunity in ~14 minutes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenTrackRecord;