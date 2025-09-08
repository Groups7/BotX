import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp, Zap } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to AI Trading in 2024: Everything You Need to Know',
    excerpt: 'Discover how artificial intelligence is revolutionizing trading and why AI-powered bots are becoming essential tools for modern traders.',
    author: 'Sarah Chen',
    publishDate: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'AI Trading',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Risk Management Strategies That Professional Traders Swear By',
    excerpt: 'Learn the proven risk management techniques that separate successful traders from the rest, including position sizing and stop-loss optimization.',
    author: 'Michael Rodriguez',
    publishDate: 'Dec 12, 2024',
    readTime: '6 min read',
    category: 'Risk Management',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    featured: false
  },
  {
    id: '3',
    title: 'Market Analysis: Why Gold (XAUUSD) Remains a Smart Investment in 2024',
    excerpt: 'Explore the factors driving gold prices and how smart traders are capitalizing on precious metals volatility this year.',
    author: 'David Thompson',
    publishDate: 'Dec 10, 2024',
    readTime: '5 min read',
    category: 'Market Analysis',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80',
    featured: false
  },
  {
    id: '4',
    title: 'Crypto Trading Bots: Separating Hype from Reality',
    excerpt: 'An honest look at cryptocurrency trading automation, including what works, what doesn\'t, and how to choose the right crypto bot.',
    author: 'Emma Johnson',
    publishDate: 'Dec 8, 2024',
    readTime: '7 min read',
    category: 'Cryptocurrency',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    featured: false
  }
];

const categories = [
  { name: 'AI Trading', color: 'bg-green-500' },
  { name: 'Risk Management', color: 'bg-blue-500' },
  { name: 'Market Analysis', color: 'bg-purple-500' },
  { name: 'Cryptocurrency', color: 'bg-orange-500' },
  { name: 'Strategy', color: 'bg-cyan-500' }
];

export function BlogPreview() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Trading Education</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest  <span className="text-gradient animate-text-glow">Trading Insights</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the markets with expert analysis, AI trading strategies, and professional insights from our team.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm overflow-hidden hover:border-green-500/40 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-green-500 text-black font-bold">
                      Featured
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline" className="border-green-500/30 text-green-400">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        {/* <Calendar className="w-4 h-4" />
                        <span>{featuredPost.publishDate}</span> */}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <User className="w-4 h-4" />
                          <span className="text-sm">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          {/* <Clock className="w-4 h-4" />
                          <span className="text-sm">{featuredPost.readTime}</span> */}
                        </div>
                      </div>
                      
                      <Button className="bg-green-500 hover:bg-green-600 text-black font-bold group">
                        <Link to="/blog" className="flex items-center">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularPosts.map((post) => (
              <Card 
                key={post.id}
                className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm overflow-hidden hover:border-green-500/40 hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      {/* <Calendar className="w-3 h-3" />
                      <span>{post.publishDate}</span> */}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {/* <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span> */}
                      </div>
                    </div>
                    
                    <button className="text-green-400 hover:text-green-300 transition-colors">
                        <Link to="/blog" className="flex items-center justify-center w-full">
                      <ArrowRight className="w-4 h-4" />
                      </Link>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories & CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Categories */}
            <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-green-400" />
                  Popular Categories
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 ${category.color} text-white rounded-full hover:opacity-80 transition-opacity font-medium`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Newsletter CTA */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-xl font-bold text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                  Get Market Updates
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Subscribe to receive weekly market analysis and AI trading insights directly to your inbox.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold">
                  <Link to="/blog" className="flex items-center justify-center w-full">
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}