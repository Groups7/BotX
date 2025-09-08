import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { 
  Bot, 
  Target, 
  Shield, 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Zap,
  Heart,
  Eye,
  Lightbulb,
  CheckCircle,
  Star,
  Calendar,
  Building2,
  Code,
  BarChart3,
  Headphones,
  Rocket,
  Trophy,
  Clock,
  DollarSign
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Traders', color: 'text-green-400' },
    { icon: DollarSign, value: '$50M+', label: 'Volume Traded', color: 'text-blue-400' },
    { icon: Globe, value: '45+', label: 'Countries', color: 'text-purple-400' },
    { icon: Trophy, value: '92%', label: 'Success Rate', color: 'text-cyan-400' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your capital security is our top priority. We never have access to your funds.',
      color: 'from-green-500/10 to-green-600/10',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge AI technology that adapts and evolves with market conditions.',
      color: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your trading success is our success. We provide 24/7 dedicated support.',
      color: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Complete transparency in our performance, fees, and trading strategies.',
      color: 'from-cyan-500/10 to-cyan-600/10',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      avatar: 'AC',
      bio: 'Former Goldman Sachs quantitative trader with 15+ years in algorithmic trading.',
      expertise: ['Algorithmic Trading', 'Risk Management', 'Financial Markets'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      avatar: 'SR',
      bio: 'AI/ML expert from Google with expertise in financial prediction models.',
      expertise: ['Machine Learning', 'AI Development', 'Data Science'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80'
    },
    {
      name: 'Michael Thompson',
      role: 'Head of Trading',
      avatar: 'MT',
      bio: 'Professional trader with 20+ years experience across forex and crypto markets.',
      expertise: ['Forex Trading', 'Market Analysis', 'Strategy Development'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    },
    {
      name: 'Emma Johnson',
      role: 'Head of Customer Success',
      avatar: 'EJ',
      bio: 'Customer experience specialist ensuring every trader achieves their goals.',
      expertise: ['Customer Support', 'Training', 'Account Management'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'BotX AI Trading was established with a vision to democratize algorithmic trading.',
      icon: Rocket
    },
    {
      year: '2020',
      title: 'First AI Bot Launch',
      description: 'Released our first AI trading bot with revolutionary market prediction capabilities.',
      icon: Bot
    },
    {
      year: '2021',
      title: '1,000 Traders Milestone',
      description: 'Reached our first major milestone of 1,000 active traders worldwide.',
      icon: Users
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 45+ countries with multi-language support.',
      icon: Globe
    },
    {
      year: '2023',
      title: 'Advanced AI Integration',
      description: 'Launched next-generation AI with deep learning and neural networks.',
      icon: Zap
    },
    {
      year: '2024',
      title: '10,000+ Active Users',
      description: 'Celebrating over 10,000 successful traders using our platform.',
      icon: Trophy
    }
  ];

  const features = [
    {
      icon: Code,
      title: 'Advanced AI Technology',
      description: 'State-of-the-art machine learning algorithms that continuously learn and adapt.'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive market analysis and performance tracking in real-time.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with dedicated account managers.'
    },
    {
      icon: Shield,
      title: 'Bank-level Security',
      description: 'Military-grade encryption and security protocols to protect your data.'
    }
  ];

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
                <Building2 className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">About BotX</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Revolutionizing Trading with <span className="text-green-400">AI Innovation</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Since 2019, we've been at the forefront of AI-powered trading technology, helping thousands 
                of traders achieve consistent profits through advanced algorithmic solutions.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission */}
              <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    To democratize algorithmic trading by providing cutting-edge AI technology that enables 
                    traders of all levels to achieve consistent, profitable results in the financial markets. 
                    We believe everyone deserves access to institutional-grade trading tools.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    To become the world's leading AI trading platform, setting new standards for performance, 
                    transparency, and customer success. We envision a future where AI-powered trading is 
                    accessible, profitable, and secure for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Core <span className="text-green-400">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`bg-gradient-to-br ${value.color} ${value.borderColor} border backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet Our <span className="text-green-400">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Industry veterans and AI experts dedicated to your trading success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-green-500/30">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-green-500/20 text-green-400 font-bold text-lg">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
                      {member.role}
                    </Badge>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="space-y-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-xs text-gray-400 bg-black/30 rounded-full px-3 py-1 inline-block mr-1 mb-1">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-green-400">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Key milestones in our mission to revolutionize algorithmic trading.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                        <milestone.icon className="w-8 h-8 text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge className="bg-green-500 text-black font-bold">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-green-400">BotX</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                What sets us apart in the competitive world of algorithmic trading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Awards & <span className="text-green-400">Recognition</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/20 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Best AI Trading Platform 2024</h3>
                  <p className="text-gray-300">FinTech Innovation Awards</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <Star className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Top Customer Satisfaction</h3>
                  <p className="text-gray-300">Trading Platform Review 2024</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <Trophy className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Excellence in Innovation</h3>
                  <p className="text-gray-300">Global Trading Awards 2023</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/10 to-transparent">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your <span className="text-green-400">Trading Journey?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful traders who trust BotX for their algorithmic trading needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-4 rounded-lg transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AboutPage;