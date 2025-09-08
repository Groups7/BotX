import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Bot, DollarSign, Target, TrendingUp, Zap, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface AIBotRecommenderProps {
  onOpenForm: () => void;
}

interface QuizStep {
  id: string;
  question: string;
  options: { value: string; label: string; description: string; }[];
}

interface Recommendation {
  bot: string;
  confidence: number;
  reasons: string[];
  features: string[];
  expectedReturn: string;
  riskLevel: 'Low' | 'Medium' | 'High';
}

const quizSteps: QuizStep[] = [
  {
    id: 'experience',
    question: 'What\'s your trading experience level?',
    options: [
      { value: 'beginner', label: 'Beginner', description: 'New to trading, learning the basics' },
      { value: 'intermediate', label: 'Intermediate', description: '1-3 years of trading experience' },
      { value: 'expert', label: 'Expert', description: '3+ years of active trading' }
    ]
  },
  {
    id: 'capital',
    question: 'What\'s your available trading capital?',
    options: [
      { value: 'small', label: '$500 - $2,000', description: 'Starting with conservative amounts' },
      { value: 'medium', label: '$2,000 - $10,000', description: 'Moderate investment capital' },
      { value: 'large', label: '$10,000+', description: 'Substantial trading capital' }
    ]
  },
  {
    id: 'risk',
    question: 'What\'s your risk tolerance?',
    options: [
      { value: 'conservative', label: 'Conservative', description: 'Steady, low-risk returns preferred' },
      { value: 'moderate', label: 'Moderate', description: 'Balanced approach to risk and reward' },
      { value: 'aggressive', label: 'Aggressive', description: 'High risk for high reward potential' }
    ]
  },
  {
    id: 'market',
    question: 'Which markets interest you most?',
    options: [
      { value: 'forex', label: 'Forex', description: 'Currency pairs like EUR/USD, GBP/USD' },
      { value: 'crypto', label: 'Cryptocurrency', description: 'Bitcoin, Ethereum, and altcoins' },
      { value: 'commodities', label: 'Commodities', description: 'Gold, Silver, Oil trading' }
    ]
  }
];

const getBotRecommendation = (answers: Record<string, string>): Recommendation => {
  // AI logic to determine best bot based on answers
  if (answers.experience === 'beginner' && answers.risk === 'conservative') {
    return {
      bot: 'BotX Conservative Pro',
      confidence: 94,
      reasons: [
        'Perfect for beginners with built-in safety features',
        'Conservative risk management matches your profile',
        'Educational mode helps you learn while earning'
      ],
      features: ['Stop-loss protection', 'Educational alerts', 'Low-risk strategies', '24/7 monitoring'],
      expectedReturn: '8-12% monthly',
      riskLevel: 'Low'
    };
  } else if (answers.market === 'crypto' && answers.risk === 'aggressive') {
    return {
      bot: 'BotX Crypto Maximizer',
      confidence: 87,
      reasons: [
        'Specialized in cryptocurrency market volatility',
        'High-frequency trading matches aggressive style',
        'Advanced DeFi integration capabilities'
      ],
      features: ['Multi-exchange trading', 'Arbitrage opportunities', 'DeFi yield farming', 'Real-time analytics'],
      expectedReturn: '15-25% monthly',
      riskLevel: 'High'
    };
  } else if (answers.capital === 'large' && answers.experience === 'expert') {
    return {
      bot: 'BotX Institution Suite',
      confidence: 96,
      reasons: [
        'Designed for high-volume professional trading',
        'Advanced risk management for large capitals',
        'Institutional-grade features and analytics'
      ],
      features: ['Portfolio optimization', 'Multi-asset trading', 'Risk diversification', 'Custom strategies'],
      expectedReturn: '12-18% monthly',
      riskLevel: 'Medium'
    };
  } else {
    return {
      bot: 'BotX Smart Trader',
      confidence: 91,
      reasons: [
        'Versatile solution adapting to your trading style',
        'Balanced approach to risk and rewards',
        'Suitable for growing trading accounts'
      ],
      features: ['Smart position sizing', 'Market adaptation', 'Multi-timeframe analysis', 'Performance tracking'],
      expectedReturn: '10-15% monthly',
      riskLevel: 'Medium'
    };
  }
};

const AIBotRecommender: React.FC<AIBotRecommenderProps> = ({ onOpenForm }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [quizSteps[currentStep].id]: value };
    setAnswers(newAnswers);

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Generate recommendation
      setIsAnalyzing(true);
      setTimeout(() => {
        const rec = getBotRecommendation(newAnswers);
        setRecommendation(rec);
        setIsAnalyzing(false);
      }, 2000); // Simulate AI processing time
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  if (isAnalyzing) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Bot className="w-10 h-10 text-green-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  AI is Analyzing Your Profile...
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span>Processing your trading preferences</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Target className="w-5 h-5 animate-pulse" />
                    <span>Matching optimal trading strategies</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <TrendingUp className="w-5 h-5 animate-bounce" />
                    <span>Calculating expected performance</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Progress value={85} className="h-2" />
                  <p className="text-gray-400 text-sm mt-2">Almost done...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (recommendation) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI Recommendation Ready</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Perfect <span className="text-green-400">Trading Bot</span>
              </h2>
            </div>

            {/* Recommendation Card */}
            <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/30 backdrop-blur-sm mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl text-white flex items-center">
                    <Bot className="w-8 h-8 mr-3 text-green-400" />
                    {recommendation.bot}
                  </CardTitle>
                  <div className="text-right">
                    <Badge className="bg-green-500 text-black font-bold text-lg px-4 py-2">
                      {recommendation.confidence}% Match
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-400">{recommendation.expectedReturn}</div>
                    <div className="text-gray-400">Expected Return</div>
                  </div>
                  
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-400">{recommendation.riskLevel}</div>
                    <div className="text-gray-400">Risk Level</div>
                  </div>
                  
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-cyan-400">{recommendation.confidence}%</div>
                    <div className="text-gray-400">AI Confidence</div>
                  </div>
                </div>

                {/* Why This Bot */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    Why This Bot is Perfect for You
                  </h3>
                  <div className="space-y-2">
                    {recommendation.reasons.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                    Key Features Included
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {recommendation.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-black/20 rounded-lg p-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={onOpenForm}
                    size="lg"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-black font-bold py-6 text-lg"
                  >
                    Get {recommendation.bot}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button 
                    onClick={resetQuiz}
                    size="lg"
                    variant="outline"
                    className="flex-1 border-green-500/50 text-green-400 hover:bg-green-500/10 py-6 text-lg"
                  >
                    Try Different Answers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 mb-6">
              <Bot className="w-4 h-4" />
              <span className="text-sm font-medium">AI Bot Recommender</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect  <span className="text-gradient animate-text-glow">AI Trading Bot</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Answer a few questions and let our AI recommend the best trading bot for your goals.
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Question {currentStep + 1} of {quizSteps.length}</span>
                <span className="text-sm text-green-800">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Quiz Card */}
          <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                {quizSteps[currentStep].question}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {quizSteps[currentStep].options.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-6 text-left bg-black/30 hover:bg-green-500/10 border border-green-500/20 hover:border-green-500/40 rounded-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                        {option.label}
                      </div>
                      <div className="text-gray-400 mt-1">
                        {option.description}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIBotRecommender;