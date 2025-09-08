import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  TrendingUp, 
  BookOpen, 
  Filter,
  ArrowRight,
  Star,
  Eye,
  MessageCircle,
  Share2,
  Tag,
  ChevronRight,
  BarChart3,
  Bot,
  Shield,
  Zap,
  Target,
  DollarSign,
  Globe,
  Lightbulb,
  Award
} from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Posts', count: 24, color: 'bg-green-500' },
    { id: 'ai-trading', name: 'AI Trading', count: 8, color: 'bg-blue-500' },
    { id: 'market-analysis', name: 'Market Analysis', count: 6, color: 'bg-purple-500' },
    { id: 'strategies', name: 'Trading Strategies', count: 5, color: 'bg-orange-500' },
    { id: 'education', name: 'Education', count: 3, color: 'bg-cyan-500' },
    { id: 'news', name: 'Industry News', count: 2, color: 'bg-pink-500' }
  ];

  const tags = [
    'AI', 'Machine Learning', 'Forex', 'Crypto', 'Gold', 'Risk Management', 
    'Technical Analysis', 'Fundamental Analysis', 'Automation', 'Backtesting',
    'MT4', 'MT5', 'Indicators', 'Signals', 'Portfolio', 'Psychology'
  ];

  const featuredPost = {
    id: 'featured',
    title: 'The Complete Guide to AI Trading in 2025: Revolutionary Strategies That Are Changing Everything',
    excerpt: 'Discover how artificial intelligence is completely transforming the trading landscape. From machine learning algorithms that predict market movements to automated systems that execute trades with superhuman precision, learn everything you need to know about the AI trading revolution.',
    content: 'The world of trading has undergone a seismic shift with the introduction of artificial intelligence...',
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Strategist',
      avatar: 'SC',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80'
    },
    publishDate: '2025-01-15',
    readTime: '12 min read',
    category: 'AI Trading',
    tags: ['AI', 'Machine Learning', 'Trading Strategies', 'Automation'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80',
    views: 15420,
    likes: 892,
    comments: 156,
    featured: true,
    trending: true
  };

  const blogPosts = [
    {
      id: '1',
      title: 'How AI Bots Achieved 94.7% Win Rate in Forex Trading: Case Study Analysis',
      excerpt: 'Deep dive into our most successful AI trading bot performance, analyzing 10,000+ trades across major currency pairs and revealing the strategies behind consistent profitability.',
      author: {
        name: 'Michael Rodriguez',
        role: 'Senior Trading Analyst',
        avatar: 'MR',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
      },
      publishDate: '2025-01-12',
      readTime: '8 min read',
      category: 'AI Trading',
      tags: ['AI', 'Forex', 'Case Study', 'Performance'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      views: 8934,
      likes: 445,
      comments: 78,
      trending: true
    },
    {
      id: '2',
      title: 'Gold Trading Signals: Why XAUUSD is the Perfect Asset for AI Automation',
      excerpt: 'Explore why gold has become the most profitable asset for AI trading systems, with detailed analysis of volatility patterns, correlation factors, and optimal entry strategies.',
      author: {
        name: 'Emma Thompson',
        role: 'Commodities Specialist',
        avatar: 'ET',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
      },
      publishDate: '2025-01-10',
      readTime: '6 min read',
      category: 'Market Analysis',
      tags: ['Gold', 'XAUUSD', 'Signals', 'Commodities'],
      image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80',
      views: 12156,
      likes: 623,
      comments: 94,
      trending: true
    },
    {
      id: '3',
      title: 'Risk Management Revolution: How AI Prevents 99% of Catastrophic Losses',
      excerpt: 'Learn about advanced risk management techniques powered by machine learning that have revolutionized how we protect trading capital and maximize long-term profitability.',
      author: {
        name: 'David Kim',
        role: 'Risk Management Director',
        avatar: 'DK',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
      },
      publishDate: '2025-01-08',
      readTime: '10 min read',
      category: 'Strategies',
      tags: ['Risk Management', 'AI', 'Portfolio Protection'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
      views: 9876,
      likes: 512,
      comments: 67,
      featured: true
    },
    {
      id: '4',
      title: 'Cryptocurrency Trading Bots: Navigating the 24/7 Digital Asset Market',
      excerpt: 'Comprehensive guide to automated cryptocurrency trading, covering market dynamics, volatility management, and the unique challenges of round-the-clock digital asset markets.',
      author: {
        name: 'Alex Chen',
        role: 'Crypto Trading Expert',
        avatar: 'AC',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80'
      },
      publishDate: '2025-01-05',
      readTime: '9 min read',
      category: 'AI Trading',
      tags: ['Crypto', 'Bitcoin', 'Automation', '24/7 Trading'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      views: 11234,
      likes: 678,
      comments: 123
    },
    {
      id: '5',
      title: 'The Psychology of Algorithmic Trading: Why Emotions Kill Profits',
      excerpt: 'Understand how emotional trading destroys accounts and why AI systems consistently outperform human traders by eliminating psychological biases and maintaining discipline.',
      author: {
        name: 'Dr. Lisa Wang',
        role: 'Trading Psychology Expert',
        avatar: 'LW',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
      },
      publishDate: '2025-01-03',
      readTime: '7 min read',
      category: 'Education',
      tags: ['Psychology', 'Discipline', 'Human vs AI'],
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80',
      views: 7654,
      likes: 389,
      comments: 45
    },
    {
      id: '6',
      title: 'MT4 vs MT5: Which Platform is Best for AI Trading Integration?',
      excerpt: 'Detailed comparison of MetaTrader platforms for automated trading, covering EA compatibility, execution speed, and advanced features that matter for AI systems.',
      author: {
        name: 'James Wilson',
        role: 'Platform Integration Specialist',
        avatar: 'JW',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80'
      },
      publishDate: '2025-01-01',
      readTime: '5 min read',
      category: 'Education',
      tags: ['MT4', 'MT5', 'Platform Comparison', 'Integration'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      views: 6543,
      likes: 298,
      comments: 34
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const trendingPosts = blogPosts.filter(post => post.trending).slice(0, 3);
  const popularTags = tags.slice(0, 8);

  const handleReadArticle = (articleId: string) => {
    setSelectedArticle(articleId);
    // Scroll to article content
    const articleElement = document.getElementById(`article-${articleId}`);
    if (articleElement) {
      articleElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  // Find the selected article
  const currentArticle = selectedArticle 
    ? [featuredPost, ...blogPosts].find(post => post.id === selectedArticle)
    : null;

  // If an article is selected, show the full article view
  if (currentArticle) {
    return (
      <>
        <div className="min-h-screen bg-black">
          <Header />
          
          {/* Article View */}
          <section className="pt-24 pb-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-4xl">
              {/* Back Button */}
              <button
                onClick={handleBackToList}
                className="flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Articles
              </button>

              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="outline" className="border-green-500/30 text-green-400">
                    {currentArticle.category}
                  </Badge>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    {/* <Calendar className="w-4 h-4" />
                    <span>{new Date(currentArticle.publishDate).toLocaleDateString()}</span> */}
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    {/* <Clock className="w-4 h-4" />
                    <span>{currentArticle.readTime}</span> */}
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {currentArticle.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-8">
                  <Avatar className="w-16 h-16 border-2 border-green-500/30">
                    <AvatarImage src={currentArticle.author.image} />
                    <AvatarFallback className="bg-green-500/20 text-green-400 font-bold">
                      {currentArticle.author.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-bold text-lg">{currentArticle.author.name}</div>
                    <div className="text-green-400">{currentArticle.author.role}</div>
                  </div>
                </div>
              </div>

              {/* Article Image */}
              <div className="mb-8">
                <img 
                  src={currentArticle.image} 
                  alt={currentArticle.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentArticle.excerpt}
                </div>
                
                <div className="text-gray-300 leading-relaxed space-y-6">
                  {currentArticle.id === 'featured' ? (
                    <>
                      <p>The world of trading has undergone a seismic shift with the introduction of artificial intelligence. What once required years of experience, countless hours of market analysis, and the ability to make split-second decisions under pressure, can now be handled by sophisticated AI systems that never sleep, never get emotional, and never make decisions based on fear or greed.</p>
                      
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">The AI Trading Revolution</h2>
                      <p>Artificial Intelligence in trading isn't just about automation—it's about creating systems that can process vast amounts of market data, identify patterns that human traders might miss, and execute trades with precision that surpasses human capabilities. Our AI trading bots analyze over 10,000 data points per second, including:</p>
                      
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Real-time price movements across multiple markets</li>
                        <li>News sentiment analysis from global financial sources</li>
                        <li>Technical indicators and chart patterns</li>
                        <li>Market volatility and liquidity conditions</li>
                        <li>Economic calendar events and their historical impact</li>
                      </ul>
                      
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Machine Learning Advantages</h2>
                      <p>Unlike traditional trading systems that follow pre-programmed rules, our AI bots use machine learning to continuously improve their performance. They learn from every trade, every market condition, and every outcome to refine their strategies and adapt to changing market dynamics.</p>
                      
                      <p>This adaptive capability means that our bots don't just execute trades—they evolve. They become more accurate over time, better at risk management, and more profitable as they accumulate experience.</p>
                      
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Future of Trading</h2>
                      <p>As we move into 2025, AI trading is no longer a luxury—it's becoming a necessity. Markets are moving faster, becoming more complex, and generating more data than any human trader can process. Those who embrace AI trading technology today will have a significant advantage over those who rely solely on traditional methods.</p>
                    </>
                  ) : (
                    <>
                      <p>This is a comprehensive article about {currentArticle.title.toLowerCase()}. The content would include detailed analysis, expert insights, and practical advice for traders looking to improve their performance.</p>
                      
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Insights</h2>
                      <p>Our research and analysis have revealed several important factors that every trader should consider when implementing these strategies in their trading approach.</p>
                      
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Practical Applications</h2>
                      <p>Here's how you can apply these concepts to your own trading strategy, with step-by-step guidance and real-world examples from successful traders.</p>
                      
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
                      <p>Understanding and implementing these strategies can significantly improve your trading performance and help you achieve more consistent results in the markets.</p>
                    </>
                  )}
                </div>
              </div>

              {/* Article Tags */}
              <div className="mt-12 pt-8 border-t border-green-500/20">
                <h3 className="text-white font-bold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {currentArticle.tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedTag(tag);
                        handleBackToList();
                      }}
                      className="text-xs bg-gray-800/50 text-gray-300 px-3 py-2 rounded-full hover:bg-green-500/20 hover:text-green-400 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.slice(0, 2).map((post) => (
                    <Card 
                      key={post.id}
                      className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 cursor-pointer"
                      onClick={() => handleReadArticle(post.id)}
                    >
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-white font-bold text-sm line-clamp-2 mb-2">
                          {post.title}
                        </h4>
                        <p className="text-gray-400 text-xs line-clamp-2">
                          {post.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </>
    );
  }
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
                <BookOpen className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Trading Insights & Education</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Trading <span className="text-green-400">Knowledge Hub</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Expert insights, market analysis, and educational content to help you master 
                AI-powered trading strategies and maximize your profits.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search articles, strategies, market analysis..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 bg-gray-900/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-400 text-lg rounded-xl"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-gray-400">Expert Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">100K+</div>
                  <div className="text-gray-400">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400">Fresh Content</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Featured Article</span>
              </div>
              
              <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20 backdrop-blur-sm overflow-hidden hover:border-green-500/40 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-green-500 text-black font-bold">Featured</Badge>
                      {featuredPost.trending && (
                        <Badge className="bg-red-500 text-white font-bold">Trending</Badge>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{featuredPost.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline" className="border-green-500/30 text-green-400">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        {/* <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span> */}
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        {/* <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span> */}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTag(tag)}
                          className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full hover:bg-green-500/20 hover:text-green-400 transition-colors"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12 border-2 border-green-500/30">
                          <AvatarImage src={featuredPost.author.image} />
                          <AvatarFallback className="bg-green-500/20 text-green-400 font-bold">
                            {featuredPost.author.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-white font-semibold">{featuredPost.author.name}</div>
                          <div className="text-green-400 text-sm">{featuredPost.author.role}</div>
                        </div>
                      </div>
                      
                      <Button className="bg-green-500 hover:bg-green-600 text-black font-bold group">
                        <span onClick={() => handleReadArticle(featuredPost.id)} className="flex items-center cursor-pointer">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Categories */}
                <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Filter className="w-5 h-5 mr-2 text-green-400" />
                      Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-green-400'
                        }`}
                      >
                        <span>{category.name}</span>
                        <Badge className={`${category.color} text-white text-xs`}>
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Tag className="w-5 h-5 mr-2 text-green-400" />
                      Popular Tags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                          className={`text-xs px-3 py-2 rounded-full transition-colors ${
                            selectedTag === tag
                              ? 'bg-green-500 text-black font-bold'
                              : 'bg-gray-800/50 text-gray-300 hover:bg-green-500/20 hover:text-green-400'
                          }`}
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Trending Posts */}
                <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                      Trending Now
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {trendingPosts.map((post, index) => (
                      <div key={post.id} className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg hover:bg-green-500/10 transition-colors cursor-pointer">
                        <div className="text-green-400 font-bold text-lg">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-400">
                            <Eye className="w-3 h-3" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Articles Grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
                    {selectedTag && (
                      <span className="text-green-400 ml-2">#{selectedTag}</span>
                    )}
                  </h2>
                  <div className="text-gray-400">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <Card 
                      key={post.id}
                      className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm overflow-hidden hover:border-green-500/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
                      onClick={() => handleReadArticle(post.id)}
                    >
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs bg-black/50">
                            {post.category}
                          </Badge>
                          {post.trending && (
                            <Badge className="bg-red-500 text-white text-xs">Trending</Badge>
                          )}
                          {post.featured && (
                            <Badge className="bg-yellow-500 text-black text-xs">Featured</Badge>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white text-sm">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="flex items-center space-x-1 text-gray-500 text-xs">
                            {/* <Calendar className="w-3 h-3" />
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span> */}
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500 text-xs">
                            {/* <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span> */}
                          </div>
                        </div>
                        
                        <button 
                          className="text-green-400 hover:text-green-300 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadArticle(post.id);
                          }}
                        >
                          <h3 className="text-xl font-bold mb-2 line-clamp-2 leading-tight">
                            {post.title}
                          </h3>
                        </button>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedTag(tag)}
                              className="text-xs bg-gray-800/50 text-gray-400 px-2 py-1 rounded hover:bg-green-500/20 hover:text-green-400 transition-colors"
                            >
                              #{tag}
                            </button>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-8 h-8 border border-green-500/30">
                              <AvatarImage src={post.author.image} />
                              <AvatarFallback className="bg-green-500/20 text-green-400 text-xs font-bold">
                                {post.author.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-white text-sm font-medium">{post.author.name}</div>
                              <div className="text-gray-400 text-xs">{post.author.role}</div>
                            </div>
                          </div>
                          
                          <button className="text-green-400 hover:text-green-300 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button 
                    variant="outline" 
                    className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-3"
                  >
                    Load More Articles
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-br from-green-500/10 to-transparent">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <Card className="bg-gradient-to-r from-green-500/10 to-transparent border-green-500/30 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-green-400" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  Stay Updated with AI Trading Insights
                </h3>
                
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get the latest market analysis, trading strategies, and AI insights delivered 
                  directly to your inbox. Join 50,000+ traders who trust our expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-gray-900/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-400"
                  />
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-gray-500 text-sm mt-4">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogPage;